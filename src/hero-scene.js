import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.getElementById("hero-canvas");
const hero = document.querySelector(".hero");
if (canvas && hero) {
  try {
    mountScene(canvas, hero);
  } catch (error) {
    // Keep the CSS artwork visible on devices without WebGL.
    canvas.style.display = "none";
    console.warn("The 3D hero could not start.", error);
  }
}

function mountScene(canvas, hero) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x080b10, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.38;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080b10);
  scene.fog = new THREE.FogExp2(0x080b10, 0.026);

  // A small studio environment gives the dark metal real reflections.
  const room = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(room);
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.38;
  room.dispose();
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 9);
  camera.lookAt(0, 0, 0);

  const ambient = new THREE.HemisphereLight(0x9cb7cb, 0x140d17, 2.4);
  scene.add(ambient);
  const cyanLight = new THREE.DirectionalLight(0x90dcf1, 3.8);
  cyanLight.position.set(-4, 4, 5);
  scene.add(cyanLight);
  const coralLight = new THREE.PointLight(0xff805f, 58, 16, 1.5);
  coralLight.position.set(4, -1.2, 3.2);
  scene.add(coralLight);
  const backLight = new THREE.PointLight(0x486ea5, 42, 18, 1.5);
  backLight.position.set(-3, 2, -4);
  scene.add(backLight);

  const rig = new THREE.Group();
  scene.add(rig);

  const coreGeometry = new THREE.IcosahedronGeometry(1.55, 3);
  const positions = coreGeometry.attributes.position;
  const vertex = new THREE.Vector3();
  for (let index = 0; index < positions.count; index += 1) {
    vertex.fromBufferAttribute(positions, index);
    const distortion = 1
      + 0.055 * Math.sin(vertex.x * 4.4 + vertex.y * 2.9) * Math.sin(vertex.z * 5.7 - vertex.x * 1.8)
      + 0.025 * Math.cos(vertex.y * 8.2 + vertex.z * 2.4);
    vertex.multiplyScalar(distortion);
    positions.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  coreGeometry.computeVertexNormals();
  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1c303e,
    metalness: 0.68,
    roughness: 0.3,
    clearcoat: 0.75,
    clearcoatRoughness: 0.14,
    flatShading: true,
    envMapIntensity: 0.82,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.rotation.set(0.16, -0.28, -0.16);
  rig.add(core);

  const facets = new THREE.LineSegments(
    new THREE.EdgesGeometry(coreGeometry, 18),
    new THREE.LineBasicMaterial({ color: 0x9bc5d7, transparent: true, opacity: 0.09, depthWrite: false }),
  );
  facets.scale.setScalar(1.002);
  core.add(facets);

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.72, 48, 32),
    new THREE.ShaderMaterial({
      uniforms: {
        uCyan: { value: new THREE.Color(0x72d7ed) },
        uCoral: { value: new THREE.Color(0xff765b) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = normalize(-viewPosition.xyz);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uCyan;
        uniform vec3 uCoral;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float edge = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 3.2);
          vec3 color = mix(uCyan, uCoral, smoothstep(-0.6, 0.9, vNormal.x));
          gl_FragColor = vec4(color, edge * 0.48);
        }
      `,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  rig.add(atmosphere);

  function makeOrbit(radius, tube, color, glowColor, angles, opacity) {
    const pivot = new THREE.Group();
    pivot.rotation.set(...angles);
    const geometry = new THREE.TorusGeometry(radius, tube, 10, 240);
    const material = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.9,
      roughness: 0.22,
      emissive: glowColor,
      emissiveIntensity: 0.62,
      transparent: true,
      opacity,
    });
    pivot.add(new THREE.Mesh(geometry, material));

    const glint = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube * 1.5, 8, 90, Math.PI * 0.52),
      new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.82 }),
    );
    glint.rotation.z = 0.3;
    pivot.add(glint);
    rig.add(pivot);
    return pivot;
  }

  const outerOrbit = makeOrbit(2.18, 0.025, 0x7caebc, 0x329ab6, [-0.44, 0.25, -0.32], 0.88);
  const warmOrbit = makeOrbit(2.35, 0.019, 0xc08b78, 0xff624b, [0.72, -0.3, 0.42], 0.72);
  const polarOrbit = makeOrbit(2.02, 0.014, 0x506b86, 0x2b5577, [1.18, 0.4, 0.78], 0.55);

  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = 128;
  glowCanvas.height = 128;
  const glowContext = glowCanvas.getContext("2d");
  const gradient = glowContext.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.12, "rgba(255,255,255,.75)");
  gradient.addColorStop(0.4, "rgba(255,255,255,.13)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  glowContext.fillStyle = gradient;
  glowContext.fillRect(0, 0, 128, 128);
  const glowTexture = new THREE.CanvasTexture(glowCanvas);

  function addGlow(color, x, y, z, size, opacity, parent = rig) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture,
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    sprite.position.set(x, y, z);
    sprite.scale.set(size, size, 1);
    parent.add(sprite);
    return sprite;
  }
  addGlow(0x4ec8e8, -1.5, 0.5, -1.4, 4.2, 0.16);
  addGlow(0xff664a, 1.5, -0.5, -1.2, 4.1, 0.15);

  const satellites = [
    { orbit: outerOrbit, radius: 2.18, speed: 0.3, phase: 0.8, color: 0xb8f1fb },
    { orbit: outerOrbit, radius: 2.18, speed: 0.3, phase: 3.8, color: 0x88d8ec },
    { orbit: warmOrbit, radius: 2.35, speed: -0.23, phase: 1.4, color: 0xffbea3 },
    { orbit: polarOrbit, radius: 2.02, speed: 0.19, phase: 4.5, color: 0xb5dcf0 },
  ].map((item) => ({
    ...item,
    glow: addGlow(item.color, 0, 0, 0, 0.34, 0.9, item.orbit),
    point: (() => {
      const point = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 10, 8),
        new THREE.MeshBasicMaterial({ color: item.color }),
      );
      item.orbit.add(point);
      return point;
    })(),
  }));

  let seed = 723918;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const starCount = 480;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  for (let index = 0; index < starCount; index += 1) {
    starPositions[index * 3] = (random() - 0.5) * 24;
    starPositions[index * 3 + 1] = (random() - 0.5) * 14;
    starPositions[index * 3 + 2] = -2.5 - random() * 12;
    const color = new THREE.Color(random() > 0.87 ? 0xe2a28f : 0x7799b3);
    starColors[index * 3] = color.r;
    starColors[index * 3 + 1] = color.g;
    starColors[index * 3 + 2] = color.b;
  }
  const starsGeometry = new THREE.BufferGeometry();
  starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  starsGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
  const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({
    size: 0.024,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    depthWrite: false,
  }));
  scene.add(stars);

  const pointer = { x: 0, y: 0, easedX: 0, easedY: 0 };
  const start = performance.now();
  let visible = true;

  function render(time) {
    const seconds = reduceMotion.matches ? 0 : (time - start) / 1000;
    pointer.easedX += (pointer.x - pointer.easedX) * 0.035;
    pointer.easedY += (pointer.y - pointer.easedY) * 0.035;
    rig.rotation.y = seconds * 0.105 + pointer.easedX * 0.12;
    rig.rotation.x = -0.06 - pointer.easedY * 0.08;
    core.rotation.y = -0.28 + seconds * 0.16;
    core.rotation.x = 0.16 + Math.sin(seconds * 0.22) * 0.07;
    outerOrbit.rotation.y = 0.25 + seconds * 0.09;
    warmOrbit.rotation.x = 0.72 - seconds * 0.085;
    polarOrbit.rotation.z = 0.78 + seconds * 0.06;
    stars.rotation.y = seconds * 0.003;
    satellites.forEach((satellite) => {
      const angle = satellite.phase + seconds * satellite.speed;
      const x = Math.cos(angle) * satellite.radius;
      const y = Math.sin(angle) * satellite.radius;
      satellite.point.position.set(x, y, 0);
      satellite.glow.position.set(x, y, 0);
    });
    camera.position.x = pointer.easedX * 0.12;
    camera.position.y = -pointer.easedY * 0.08;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  function resize() {
    const width = Math.max(1, hero.clientWidth);
    const height = Math.max(1, hero.clientHeight);
    const mobile = width < 700;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const worldHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const worldWidth = worldHeight * camera.aspect;
    rig.position.set((mobile ? 0.54 : 0.66) * worldWidth - worldWidth / 2, (0.5 - (mobile ? 0.37 : 0.46)) * worldHeight, 0);
    rig.scale.setScalar(Math.min(1.16, Math.max(0.47, worldWidth / 8.2)));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.35 : 1.6));
    renderer.setSize(width, height, false);
    render(performance.now());
  }

  function updateLoop() {
    const shouldAnimate = visible && !document.hidden && !reduceMotion.matches;
    renderer.setAnimationLoop(shouldAnimate ? render : null);
    if (!shouldAnimate) render(performance.now());
  }

  hero.addEventListener("pointermove", (event) => {
    if (reduceMotion.matches) return;
    const bounds = hero.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { pointer.x = 0; pointer.y = 0; });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updateLoop();
  });
  observer.observe(hero);
  const resizer = new ResizeObserver(resize);
  resizer.observe(hero);
  document.addEventListener("visibilitychange", updateLoop);
  reduceMotion.addEventListener("change", updateLoop);
  canvas.addEventListener("webglcontextlost", () => { canvas.style.display = "none"; });
  canvas.addEventListener("webglcontextrestored", () => { canvas.style.display = "block"; resize(); updateLoop(); });
  resize();
  updateLoop();
}
