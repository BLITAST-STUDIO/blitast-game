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
  vec3 p = aPos;
  p.y += sin(uTime * 0.65 + aPos.x * 2.1 + aPos.z * 1.4) * 0.01;
  gl_Position = uMVP * vec4(p, 1.0);
  float depth = max(gl_Position.w, 0.35);
  gl_PointSize = min((aSize * uScale) / depth, 11.0);
  vHue = aHue;
  float ground = smoothstep(-0.5, 0.02, p.y);
  vAlpha = clamp(1.4 - depth * 0.11, 0.16, 1.0) * mix(0.16, 1.0, ground);
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
  float glow = exp(-r * 3.4);
  vec3 bone = vec3(0.96, 0.93, 0.88);
  vec3 gold = vec3(0.93, 0.70, 0.34);
  vec3 verm = vec3(0.90, 0.22, 0.14);
  vec3 col = vHue < 0.42
    ? mix(bone, gold, vHue / 0.42)
    : mix(gold, verm, (vHue - 0.42) / 0.58);
  float a = glow * vAlpha * 1.28;
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
  function gauss() {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(Math.PI * 2 * v);
  }
  function unitBall() {
    for (let i = 0; i < 10; i++) {
      const x = gauss() * 0.55;
      const y = gauss() * 0.55;
      const z = gauss() * 0.55;
      if (x * x + y * y + z * z <= 1) return [x, y, z];
    }
    const a = Math.random() * Math.PI * 2;
    const b = Math.acos(Math.random() * 2 - 1);
    return [Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b)];
  }
  function cloud() {
    return { x: [], y: [], z: [], h: [], s: [] };
  }
  function push(c, x, y, z, h, s) {
    c.x.push(x);
    c.y.push(y);
    c.z.push(z);
    c.h.push(h);
    c.s.push(s);
  }
  function ellipsoid(c, n, cx, cy, cz, rx, ry, rz, hue, size, surface = 0.55) {
    for (let i = 0; i < n; i++) {
      const p = unitBall();
      const k = Math.random() < surface ? 0.78 + Math.random() * 0.22 : Math.random() ** 0.55;
      push(c, cx + p[0] * rx * k, cy + p[1] * ry * k, cz + p[2] * rz * k, hue, size);
    }
  }
  function drawCat(ctx, W, H) {
    ctx.clearRect(0, 0, W, H);
    const s = Math.min(W, H);
    ctx.save();
    ctx.translate(W * 0.5, H * 0.56);
    ctx.scale(s / 520, s / 520);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(-40, 28, 118, 92, -0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-95, 38, 78, 78, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(78, -62, 70, 66, 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(118, -40, 32, 26, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(52, 70, 38, 62, 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(22, 92, 28, 42, 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-20, 96, 30, 40, -0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(38, -100);
    ctx.lineTo(18, -168);
    ctx.lineTo(72, -108);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(88, -112);
    ctx.lineTo(108, -176);
    ctx.lineTo(128, -100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-150, 40);
    ctx.bezierCurveTo(-230, 20, -250, -90, -160, -130);
    ctx.bezierCurveTo(-110, -152, -88, -90, -118, -30);
    ctx.bezierCurveTo(-138, 18, -120, 50, -80, 58);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ff2200";
    ctx.beginPath();
    ctx.moveTo(40, -108);
    ctx.lineTo(32, -146);
    ctx.lineTo(60, -112);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(96, -118);
    ctx.lineTo(108, -154);
    ctx.lineTo(118, -108);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  function sampleCat(c, n) {
    const W = 900;
    const H = 780;
    const cvs = document.createElement("canvas");
    cvs.width = W;
    cvs.height = H;
    const ctx = cvs.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    drawCat(ctx, W, H);
    const { data } = ctx.getImageData(0, 0, W, H);
    const ink = [];
    let minX = W, minY = H, maxX = 0, maxY = 0;
    for (let y = 0; y < H; y += 1) {
      for (let x = 0; x < W; x += 1) {
        const i = (y * W + x) * 4;
        if (data[i + 3] < 40) continue;
        ink.push(x, y, data[i + 1]);
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    const nInk = ink.length / 3;
    if (nInk < 400) return;
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const bh = Math.max(1, maxY - minY);
    const scale = 1.12 / bh;
    const isInk = (x, y) => {
      if (x < 0 || y < 0 || x >= W || y >= H) return false;
      return data[(y * W + x) * 4 + 3] > 40;
    };
    for (let i = 0; i < n; i++) {
      const k = Math.floor(Math.random() * nInk) * 3;
      const x = ink[k];
      const y = ink[k + 1];
      const g = ink[k + 2];
      const edge = !isInk(x + 4, y) || !isInk(x - 4, y) || !isInk(x, y + 4) || !isInk(x, y - 4);
      const thick = edge ? 0.045 : 0.16;
      const wx = (x - cx) * scale;
      const wy = -(y - cy) * scale + 0.22;
      const wz = (Math.random() - 0.5) * thick * 2;
      const hue = g < 80 ? 0.9 : 0.06;
      push(c, wx, wy, wz, hue, edge ? 5.6 : 6.5);
    }
  }
  function seedParadox(count) {
    const c = cloud();
    const n = (p) => Math.max(8, Math.floor(count * p));
    sampleCat(c, n(0.68));
    const nToast = n(0.12);
    for (let i = 0; i < nToast; i++) {
      let x = 0;
      let z = 0;
      for (let t = 0; t < 12; t++) {
        x = (Math.random() * 2 - 1) * 0.52;
        z = (Math.random() * 2 - 1) * 0.36;
        if (x * x * 1.15 + z * z * 2.1 <= 0.28) break;
      }
      const y = Math.random() * 0.045;
      const butter = y > 0.022;
      push(c, x + 0.04, y + 0.01, z, butter ? 0.9 : 0.16, butter ? 6.4 : 5.6);
    }
    ellipsoid(c, n(0.035), 0.1, 0.07, 0.02, 0.22, 0.03, 0.16, 0.94, 6.6, 0.3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const nRing = n(0.09);
    for (let k = 0; k < nRing; k++) {
      const u = k * golden;
      const v = k * 1.7 * golden;
      const R = 1.22;
      const r = 0.028;
      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = r * Math.sin(v);
      const z = (R + r * Math.cos(v)) * Math.sin(u);
      const tilt = 0.22;
      const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
      const zz = y * Math.sin(tilt) + z * Math.cos(tilt);
      push(c, x, yy + 0.18, zz, k % 11 === 0 ? 0.88 : 0.36, 5.8);
    }
    const nDust = n(0.04);
    for (let i = 0; i < nDust; i++) {
      const p = unitBall();
      push(c, p[0] * 1.7, p[1] * 1.1 + 0.25, p[2] * 1.7, Math.random() < 0.15 ? 0.8 : 0.12, 4.2);
    }
    const nRef = n(0.035);
    const src = c.x.length;
    for (let i = 0; i < nRef; i++) {
      const k = Math.floor(Math.random() * src);
      push(c, c.x[k], -c.y[k] * 0.28 - 0.04, c.z[k], c.h[k], 4.4);
    }
    const total = c.x.length;
    const pos = new Float32Array(total * 3);
    const hue = new Float32Array(total);
    const size = new Float32Array(total);
    for (let i = 0; i < total; i++) {
      pos[i * 3] = c.x[i];
      pos[i * 3 + 1] = c.y[i];
      pos[i * 3 + 2] = c.z[i];
      hue[i] = c.h[i];
      size[i] = c.s[i];
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
    const seeded = seedParadox(isMobile ? 11e3 : 19e3);
    const count = seeded.pos.length / 3;
    const prog = gl.createProgram();
    if (!prog) return () => {
    };
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const bind = (name, data, n) => {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, n, gl.FLOAT, false, 0, 0);
    };
    bind("aPos", seeded.pos, 3);
    bind("aHue", seeded.hue, 1);
    bind("aSize", seeded.size, 1);
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
      pointerX += (targetX - pointerX) * 0.035;
      pointerY += (targetY - pointerY) * 0.035;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      const aspect = w / Math.max(h, 1);
      const proj = perspective(30 * Math.PI / 180, aspect, 0.1, 40);
      const auto = reduce ? 0.38 : t * 0.16 + 0.38;
      const yaw = auto + pointerX * 0.45;
      const pitch = 0.28 - pointerY * 0.16;
      const dist = 4.05;
      const cp = Math.cos(pitch);
      const eye = [
        Math.sin(yaw) * cp * dist,
        0.42 + Math.sin(pitch) * dist * 0.85,
        Math.cos(yaw) * cp * dist
      ];
      const view = lookAt(eye, [0.04, 0.26, 0], [0, 1, 0]);
      const mvp = mat4Mul(proj, view);
      gl.uniformMatrix4fv(uMVP, false, mvp);
      gl.uniform1f(uTime, reduce ? 0 : t);
      gl.uniform1f(uScale, Math.min(w, h) * (isMobile ? 9e-3 : 78e-4));
      gl.drawArrays(gl.POINTS, 0, count);
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize();
    requestAnimationFrame(resize);
    draw(performance.now());
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
