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
  float c = cos(uTime * 0.22);
  float s = sin(uTime * 0.22);
  vec3 p = aPos;
  p.xz = mat2(c, -s, s, c) * p.xz;
  float lift = sin(uTime * 0.7 + aPos.y * 2.4) * 0.03;
  p.y += lift;
  gl_Position = uMVP * vec4(p, 1.0);
  float depth = max(gl_Position.w, 0.35);
  gl_PointSize = min((aSize * uScale) / depth, 14.0);
  vHue = aHue;
  float fade = smoothstep(0.95, 0.35, p.y);
  vAlpha = clamp(1.5 - depth * 0.14, 0.22, 1.0) * fade;
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
  function seedParticles(count) {
    const pos = new Float32Array(count * 3);
    const hue = new Float32Array(count);
    const size = new Float32Array(count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const set = (i2, x, y, z, h, s) => {
      pos[i2 * 3] = x;
      pos[i2 * 3 + 1] = y;
      pos[i2 * 3 + 2] = z;
      hue[i2] = h;
      size[i2] = s;
    };
    let i = 0;
    const nRing = Math.floor(count * 0.52);
    const nCore = Math.floor(count * 0.34);
    const nToast = count - nRing - nCore;
    for (let k = 0; k < nRing; k++, i++) {
      const u = k * golden;
      const v = k * 1.618 * golden;
      const R = 0.92;
      const r = 0.11;
      set(
        i,
        (R + r * Math.cos(v)) * Math.cos(u),
        r * Math.sin(v) * 0.55,
        (R + r * Math.cos(v)) * Math.sin(u),
        k % 23 === 0 ? 0.8 : 0.03,
        7.2
      );
    }
    for (let k = 0; k < nCore; k++, i++) {
      const t = k / Math.max(nCore - 1, 1);
      const y = 1 - t * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const a = k * golden;
      const s = 0.36;
      set(
        i,
        Math.cos(a) * rad * s * 0.92,
        y * s * 0.78 + 0.08,
        Math.sin(a) * rad * s * 0.92,
        t < 0.12 ? 0.28 : 0.05,
        8.2
      );
    }
    for (let k = 0; k < nToast; k++, i++) {
      const cols = 22;
      const gx = k % cols / (cols - 1) - 0.5;
      const gz = Math.floor(k / cols) / Math.max(Math.floor(nToast / cols) - 1, 1) - 0.5;
      if (gx * gx * 1.1 + gz * gz * 1.8 > 0.22) {
        set(i, 0, 0.08, 0, 0.05, 4);
        continue;
      }
      set(i, gx * 0.5, 0.38 + Math.sin(gx * 7) * 0.01, gz * 0.32, 0.9, 6.4);
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
    const count = isMobile ? 7e3 : 14e3;
    const { pos, hue, size } = seedParticles(count);
    const prog = gl.createProgram();
    if (!prog) return () => {
    };
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const bindAttr = (name, data, n) => {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, n, gl.FLOAT, false, 0, 0);
    };
    bindAttr("aPos", pos, 3);
    bindAttr("aHue", hue, 1);
    bindAttr("aSize", size, 1);
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
      const proj = perspective(32 * Math.PI / 180, aspect, 0.1, 40);
      const eye = [0, 0.12, 3.7];
      const view = lookAt(eye, [0, 0.08, 0], [0, 1, 0]);
      const rot = mat4Mul(rotateY(pointerX * 0.45), rotateX(-pointerY * 0.28));
      const mvp = mat4Mul(proj, mat4Mul(view, rot));
      gl.uniformMatrix4fv(uMVP, false, mvp);
      gl.uniform1f(uTime, reduce ? 0 : t);
      gl.uniform1f(uScale, Math.min(w, h) * 0.011);
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
