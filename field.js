"use strict";
var BLITASTField = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/lib/field.ts
  var field_exports = {};
  __export(field_exports, {
    mountField: () => mountField
  });
  var VERT = `
attribute vec3 aPos;
attribute float aHue;
attribute float aSize;
uniform mat4 uMVP;
uniform float uTime;
uniform float uScale;
varying float vHue;
varying float vAlpha;
void main() {
  float yaw = sin(uTime * 0.32) * 0.18;
  float c = cos(yaw);
  float s = sin(yaw);
  vec3 p = aPos;
  p.xz = mat2(c, -s, s, c) * p.xz;
  gl_Position = uMVP * vec4(p, 1.0);
  float depth = max(gl_Position.w, 0.35);
  gl_PointSize = min((aSize * uScale) / depth, 12.0);
  vHue = aHue;
  vAlpha = clamp(1.45 - depth * 0.12, 0.2, 1.0);
}
`;
  var FRAG = `
precision mediump float;
varying float vHue;
varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r = dot(uv, uv);
  if (r > 1.0) discard;
  float glow = exp(-r * 3.2);
  vec3 bone = vec3(0.95, 0.93, 0.90);
  vec3 verm = vec3(0.886, 0.231, 0.165);
  vec3 col = mix(bone, verm, vHue);
  float a = glow * vAlpha * 1.25;
  gl_FragColor = vec4(col * a, a);
}
`;
  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    if (!sh) throw new Error("shader");
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(sh) || "compile");
    }
    return sh;
  }
  function mat4Identity() {
    const m = new Float32Array(16);
    m[0] = m[5] = m[10] = m[15] = 1;
    return m;
  }
  function mat4Mul(a, b) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    const o = new Float32Array(16);
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    o[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    o[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    o[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    o[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    o[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    o[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    o[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    o[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    o[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    o[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    o[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    o[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    o[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    o[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    o[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    o[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return o;
  }
  function perspective(fovy, aspect, near, far) {
    const f = 1 / Math.tan(fovy / 2);
    const nf = 1 / (near - far);
    const m = new Float32Array(16);
    m[0] = f / aspect;
    m[5] = f;
    m[10] = (far + near) * nf;
    m[11] = -1;
    m[14] = 2 * far * near * nf;
    return m;
  }
  function lookAt(eye, center, up) {
    let z0 = eye[0] - center[0];
    let z1 = eye[1] - center[1];
    let z2 = eye[2] - center[2];
    let len = 1 / (Math.hypot(z0, z1, z2) || 1);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    let x0 = up[1] * z2 - up[2] * z1;
    let x1 = up[2] * z0 - up[0] * z2;
    let x2 = up[0] * z1 - up[1] * z0;
    len = Math.hypot(x0, x1, x2);
    if (len) {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    const y0 = z1 * x2 - z2 * x1;
    const y1 = z2 * x0 - z0 * x2;
    const y2 = z0 * x1 - z1 * x0;
    const m = new Float32Array(16);
    m[0] = x0;
    m[1] = y0;
    m[2] = z0;
    m[3] = 0;
    m[4] = x1;
    m[5] = y1;
    m[6] = z1;
    m[7] = 0;
    m[8] = x2;
    m[9] = y2;
    m[10] = z2;
    m[11] = 0;
    m[12] = -(x0 * eye[0] + x1 * eye[1] + x2 * eye[2]);
    m[13] = -(y0 * eye[0] + y1 * eye[1] + y2 * eye[2]);
    m[14] = -(z0 * eye[0] + z1 * eye[1] + z2 * eye[2]);
    m[15] = 1;
    return m;
  }
  function rotateX(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    const m = mat4Identity();
    m[5] = c;
    m[6] = s;
    m[9] = -s;
    m[10] = c;
    return m;
  }
  function rotateY(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    const m = mat4Identity();
    m[0] = c;
    m[2] = -s;
    m[8] = s;
    m[10] = c;
    return m;
  }
  function seedFallbackB(count) {
    const pos = new Float32Array(count * 3);
    const hue = new Float32Array(count);
    const size = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      let x = 0;
      let y = 0;
      if (t < 0.28) {
        x = -0.42 + (Math.random() - 0.5) * 0.14;
        y = (Math.random() - 0.5) * 1.15;
      } else if (t < 0.64) {
        const a = (Math.random() * 0.9 + 0.55) * Math.PI;
        x = -0.08 + Math.cos(a) * 0.38;
        y = 0.28 + Math.sin(a) * 0.3;
      } else {
        const a = (Math.random() * 0.9 + 0.55) * Math.PI;
        x = -0.08 + Math.cos(a) * 0.42;
        y = -0.28 + Math.sin(a) * 0.34;
      }
      const ghost = i % 9 === 0;
      pos[i * 3] = x + (ghost ? 0.04 : 0);
      pos[i * 3 + 1] = y - (ghost ? 0.02 : 0);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
      hue[i] = ghost ? 0.9 : 0.04;
      size[i] = 6.5;
    }
    return { pos, hue, size };
  }
  function sampleLogo(count) {
    const W = 1800;
    const H = 480;
    const cvs = document.createElement("canvas");
    cvs.width = W;
    cvs.height = H;
    const ctx = cvs.getContext("2d", { willReadFrequently: true });
    if (!ctx) return seedFallbackB(count);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = '800 220px "Shippori Mincho", "Hiragino Mincho ProN", "Yu Mincho", serif';
    ctx.letterSpacing = "-0.05em";
    ctx.fillText("BLITAST", W / 2, H / 2 + 10);
    const { data } = ctx.getImageData(0, 0, W, H);
    let minX = W;
    let minY = H;
    let maxX = 0;
    let maxY = 0;
    const ink = [];
    for (let y = 0; y < H; y += 1) {
      for (let x = 0; x < W; x += 1) {
        const a = data[(y * W + x) * 4 + 3];
        if (a > 48) {
          ink.push(x, y, a);
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }
    const nInk = ink.length / 3;
    if (nInk < 400) return seedFallbackB(count);
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const bw = Math.max(1, maxX - minX);
    const scale = 2.35 / bw;
    const pos = new Float32Array(count * 3);
    const hue = new Float32Array(count);
    const size = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const k = Math.floor(Math.random() * nInk) * 3;
      const ghost = i % 8 === 0;
      pos[i * 3] = (ink[k] - cx) * scale + (ghost ? 0.03 : 0);
      pos[i * 3 + 1] = -(ink[k + 1] - cy) * scale - (ghost ? 0.018 : 0);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.11;
      hue[i] = ghost ? 0.92 : 0.035;
      size[i] = 5.2 + ink[k + 2] / 255 * 2.2;
    }
    return { pos, hue, size };
  }
  function mountField(canvas) {
    canvas.style.pointerEvents = "none";
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance"
    });
    if (!gl) return () => {
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    let count = isMobile ? 9e3 : 16e3;
    const prog = gl.createProgram();
    if (!prog) return () => {
    };
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const posBuf = gl.createBuffer();
    const hueBuf = gl.createBuffer();
    const sizeBuf = gl.createBuffer();
    const locPos = gl.getAttribLocation(prog, "aPos");
    const locHue = gl.getAttribLocation(prog, "aHue");
    const locSize = gl.getAttribLocation(prog, "aSize");
    const upload = (data) => {
      count = data.pos.length / 3;
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.bufferData(gl.ARRAY_BUFFER, data.pos, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(locPos);
      gl.vertexAttribPointer(locPos, 3, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, hueBuf);
      gl.bufferData(gl.ARRAY_BUFFER, data.hue, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(locHue);
      gl.vertexAttribPointer(locHue, 1, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuf);
      gl.bufferData(gl.ARRAY_BUFFER, data.size, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(locSize);
      gl.vertexAttribPointer(locSize, 1, gl.FLOAT, false, 0, 0);
    };
    upload(sampleLogo(count));
    const uMVP = gl.getUniformLocation(prog, "uMVP");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uScale = gl.getUniformLocation(prog, "uScale");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.disable(gl.DEPTH_TEST);
    let w = 0;
    let h = 0;
    let raf = 0;
    let start = performance.now();
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let running = true;
    const resize = () => {
      const parent = canvas.parentElement ?? canvas;
      const cssW = parent.clientWidth || window.innerWidth;
      const cssH = parent.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = Math.max(1, Math.floor(cssW * dpr));
      h = Math.max(1, Math.floor(cssH * dpr));
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      gl.viewport(0, 0, w, h);
    };
    const onMove = (e) => {
      const rect = (canvas.parentElement ?? canvas).getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width * 2 - 1;
      targetY = (e.clientY - rect.top) / rect.height * 2 - 1;
    };
    const draw = (now) => {
      if (!running) return;
      const t = (now - start) / 1e3;
      pointerX += (targetX - pointerX) * 0.04;
      pointerY += (targetY - pointerY) * 0.04;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      const aspect = w / Math.max(h, 1);
      const proj = perspective(28 * Math.PI / 180, aspect, 0.1, 40);
      const eye = [0, 0.02, 4.5];
      const view = lookAt(eye, [0, 0, 0], [0, 1, 0]);
      const rot = mat4Mul(rotateY(pointerX * 0.22), rotateX(-pointerY * 0.12));
      const mvp = mat4Mul(proj, mat4Mul(view, rot));
      gl.uniformMatrix4fv(uMVP, false, mvp);
      gl.uniform1f(uTime, reduce ? 0 : t);
      gl.uniform1f(uScale, Math.min(w, h) * (isMobile ? 9e-3 : 8e-3));
      gl.drawArrays(gl.POINTS, 0, count);
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize();
    requestAnimationFrame(resize);
    draw(performance.now());
    const fonts = document.fonts;
    const onFonts = () => {
      if (!running) return;
      void fonts.load('800 220px "Shippori Mincho"').then(() => {
        if (!running) return;
        upload(sampleLogo(count));
      });
    };
    if (fonts.status === "loaded") onFonts();
    else void fonts.ready.then(onFonts);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        start = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      const lose = gl.getExtension("WEBGL_lose_context");
      lose?.loseContext();
    };
  }
  return __toCommonJS(field_exports);
})();

window.addEventListener("DOMContentLoaded",function(){var c=document.querySelector("canvas.field"); if(c&&BLITASTField.mountField) BLITASTField.mountField(c);});
