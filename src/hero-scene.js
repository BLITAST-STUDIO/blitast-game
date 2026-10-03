// BLITAST GAME — hero "Polyhedra Constellation"
// 小さな世界を、ひとつずつ。
//
// A slow field of geometric solids (platonic, archimedean and a few nested compounds) floating
// in deep dark space: dark brushed metal lit by a coral / cyan studio, smoked glass, and a few
// edge-lit wireframe ghosts. One large compound (a metal dodecahedron cage around a smoked
// glass icosahedron with a warm core) anchors the composition. Far solids are rendered into
// small targets and blurred (real defocus). Every few seconds a raking light sweep crosses all
// facets. Everything is procedural (no textures, no network).
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { FullScreenQuad } from "three/addons/postprocessing/Pass.js";
import { ConvexHull } from "three/addons/math/ConvexHull.js";

/* ------------------------------------------------------------------ utils */
const TAU = Math.PI * 2;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => {
  const x = clamp01((v - a) / (b - a));
  return x * x * (3 - 2 * x);
};
const mix = (a, b, t) => a + (b - a) * t;
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const lin = (hex) => new THREE.Color(hex); // sRGB hex -> linear working space

/* ------------------------------------------------------------------ timeline (seconds from the first rendered frame) */
// Arrival: the page's CSS glow (.hero-fallback) is reproduced in the first frame and cross-fades
// into the scene; the core ignites inside it and the cage struts grow out of the core glow, hop by
// hop, until the compound is lit (T_IGNITE). That moment is beat 0 (blitast:pulse {ignite:true}),
// then a beat every PULSE_PERIOD: a light sweep plus a comet travelling out along the struts.
const T_GROW0 = 0.4;
const T_GROW1 = 1.85;
const T_IGNITE = 1.9;
const PULSE_PERIOD = 7.4;
const SWEEP_LEN = 2.3;
const HOP_SPEED = 3.1; // hops per second of the strut comet
const HOP_MAX = 3.6; // the farthest strut point (the back pentagon's edge midpoints)
// Visitors whose system asks for less motion get the still by default; the page's
// "背景を動かす" button stores an opt-in the scene honours (and announces with "blitast:motion").
function motionOptIn() {
  try {
    return localStorage.getItem("blitast-motion") === "on";
  } catch (e) {
    return false;
  }
}
const T_STATIC = 23.4; // reduced-motion still (a quiet moment between beats)
const T_SAMPLE = 3.0; // the governor starts sampling after the fade-in

/* ------------------------------------------------------------------ GLSL */
const NOISE2 = /* glsl */ `
vec3 m289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 m289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 perm3(vec3 x){return m289(((x*34.0)+10.0)*x);}
float snoise2(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=m289(i);
  vec3 p=perm3(perm3(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
float fbm2(vec2 p){float f=0.0,a=0.5;for(int i=0;i<4;i++){f+=a*snoise2(p);p=p*2.07+vec2(5.2,1.3);a*=0.5;}return f;}
`;

// Linear-space brand colours.
const GLSL_COLORS = /* glsl */ `
const vec3 CORAL=vec3(1.0,0.216,0.113);
const vec3 CYAN=vec3(0.323,0.768,0.855);
const vec3 CREAM=vec3(0.896,0.871,0.815);
const vec3 GOLD=vec3(1.0,0.62,0.30);
const vec3 FOGC=vec3(0.0035,0.0052,0.0095);
const vec3 SWEEPC=vec3(1.0,0.86,0.74);
// winner-takes-most coral / cyan: the crossover resolves to warm cream, never a murky teal-brown
vec3 duo(float x){
  float s = smoothstep(-0.12, 0.12, x);
  float m = 4.0 * s * (1.0 - s);
  return mix(mix(CYAN, CORAL, s), CREAM * 0.85, m * 0.75);
}
// warm highlights, cool shadows: dim warm light cools toward navy instead of sitting as umber
vec3 coolLow(vec3 c){
  float L = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float warm = clamp((c.r - c.b) / max(c.r, 1e-4), 0.0, 1.0);
  float lo = 1.0 - smoothstep(0.012, 0.11, L);
  return mix(c, L * vec3(0.6, 0.92, 1.5), lo * warm * 0.9);
}
`;
// The page's CSS .hero-fallback (styles.css), evaluated like the browser does: circle gradients
// sized to the farthest corner, premultiplied sRGB stops, layers composited in sRGB. Keep in sync.
const GLSL_FALLBACK = /* glsl */ `
vec3 fbInk(){ return vec3(7.0, 9.0, 13.0) / 255.0; }
float fbT(vec2 px, vec2 c, vec2 wh){
  vec2 f = max(c, wh - c);
  return length(px - c) / length(f);
}
// px, wh in CSS pixels (y down); centres as fractions of the box
vec3 fallbackCSS(vec2 px, vec2 wh, vec2 c1, vec2 c2, vec2 c3){
  float t3 = fbT(px, c3 * wh, wh);
  vec3 a = vec3(28.0, 42.0, 54.0) / 255.0;
  vec3 b = vec3(13.0, 20.0, 28.0) / 255.0;
  vec3 col = t3 < 0.3 ? mix(a, b, t3 / 0.3) : mix(b, fbInk(), clamp((t3 - 0.3) / 0.32, 0.0, 1.0));
  float a2 = 0.14 * clamp(1.0 - fbT(px, c2 * wh, wh) / 0.3, 0.0, 1.0);
  col = mix(col, vec3(154.0, 227.0, 238.0) / 255.0, a2);
  float a1 = 0.26 * clamp(1.0 - fbT(px, c1 * wh, wh) / 0.16, 0.0, 1.0);
  col = mix(col, vec3(255.0, 128.0, 95.0) / 255.0, a1);
  return col;
}
`;

// The studio: a coral strip on the right, a cyan strip behind-left, a big cream softbox behind
// the viewer (up-left) and a thin top light. Front-facing facets reflect what is behind the
// camera (+z), so the softbox sits there; silhouettes pick up the strips as coral / cyan rims.
function lightBasis(c) {
  const C = new THREE.Vector3(...c).normalize();
  const up = Math.abs(C.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const U = new THREE.Vector3().crossVectors(up, C).normalize();
  const V = new THREE.Vector3().crossVectors(C, U).normalize();
  return { C, U, V };
}
const g3 = (v) => `vec3(${v.x.toFixed(5)},${v.y.toFixed(5)},${v.z.toFixed(5)})`;
const LIGHTS = [
  // name, direction, half size (gnomonic u, v), colour (linear, HDR)
  { c: [-0.42, 0.5, 0.76], h: [0.62, 0.3], col: "vec3(1.0,0.93,0.84)*2.7" }, // key softbox
  { c: [0.93, 0.02, 0.36], h: [0.07, 1.6], col: "CORAL*2.6" }, // coral strip, right
  { c: [-0.9, 0.12, -0.42], h: [0.07, 1.6], col: "CYAN*2.3" }, // cyan strip, back-left
  { c: [0.1, 1.0, 0.22], h: [0.09, 1.4], col: "CREAM*1.3" }, // thin top light
  { c: [0.55, -0.45, 0.7], h: [0.35, 0.12], col: "vec3(1.0,0.45,0.3)*0.55" }, // warm low kicker
];
const ENV = (() => {
  let body = "";
  let irr = "";
  for (const L of LIGHTS) {
    const b = lightBasis(L.c);
    body += `  c += (${L.col}) * boxL(r, ${g3(b.C)}, ${g3(b.U)}, ${g3(b.V)}, vec2(${L.h[0].toFixed(3)},${L.h[1].toFixed(3)}), soft) * k;\n`;
    const area = L.h[0] * L.h[1] * 0.35;
    irr += `  c += (${L.col}) * ${area.toFixed(4)} * max(dot(n, ${g3(b.C)}), 0.0);\n`;
  }
  return /* glsl */ `
float boxL(vec3 r, vec3 c, vec3 u, vec3 v, vec2 hs, float soft){
  float d = dot(r, c);
  if (d <= 0.02) return 0.0;
  vec2 p = vec2(dot(r, u), dot(r, v)) / d;
  vec2 q = abs(p) - hs;
  float s = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
  return (1.0 - smoothstep(-soft, soft, s)) * smoothstep(0.02, 0.25, d);
}
uniform vec3 uSweepL; uniform float uSweepE;
float sweepK = 1.0;
vec3 env(vec3 r, float rough){
  float soft = 0.012 + rough * 0.5;
  float k = 1.0 / (1.0 + rough * 3.5);
  vec3 c = mix(vec3(0.0035, 0.0045, 0.0075), vec3(0.018, 0.022, 0.034), smoothstep(-0.5, 0.95, r.y));
  c += vec3(0.022, 0.009, 0.006) * smoothstep(0.05, -0.9, r.y);
  c += vec3(0.03, 0.06, 0.11) * exp(-r.y * r.y * 10.0) * smoothstep(0.2, -0.8, r.z);
${body}  if (uSweepE > 0.001) {
    vec3 su = normalize(cross(vec3(0.0, 1.0, 0.0), uSweepL));
    vec3 sv = cross(uSweepL, su);
    c += SWEEPC * 2.8 * uSweepE * sweepK * boxL(r, uSweepL, su, sv, vec2(0.11, 1.7), soft + 0.03) * k;
  }
  return c;
}
vec3 irr(vec3 n){
  vec3 c = vec3(0.012, 0.015, 0.022) * (0.7 + 0.3 * n.y);
${irr}  return c;
}
`;
})();

const SOLID_VS = /* glsl */ `
attribute float aEdge; attribute vec3 aFC; attribute float aRnd;
varying vec3 vW; varying vec3 vN; varying vec3 vO; varying vec3 vL; varying vec3 vNl;
varying float vE; varying float vR; varying float vD; varying vec4 vClip;
#ifdef CAGE
attribute float aHop; varying float vHop;
#endif
void main(){
#ifdef CAGE
  vHop = aHop;
#endif
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vO = mat3(modelMatrix) * (position - aFC);
  vL = position; vNl = normal;
  vE = aEdge; vR = aRnd;
  vec4 mv = viewMatrix * w;
  vD = -mv.z;
  gl_Position = projectionMatrix * mv;
  vClip = gl_Position;
}`;

// KIND 0 metal, 1 smoked glass, 2 wire ghost, 3 enamel, 4 core
const SOLID_FS = /* glsl */ `
uniform float uBandK, uSweepK, uFadeAll, uFadeO, uSweepQ, uSweepA, uFogN, uFogF, uFogK, uAspect, uRough, uBevel, uLineK, uCoreI, uCoreFall, uTime, uGlow, uRimK;
uniform vec3 uTint, uCoreP;
varying vec3 vW; varying vec3 vN; varying vec3 vO; varying vec3 vL; varying vec3 vNl;
varying float vE; varying float vR; varying float vD; varying vec4 vClip;
#ifdef CAGE
uniform float uHopP, uHopA, uGrow, uARad;
varying float vHop;
#endif
${GLSL_COLORS}
${ENV}
float h11(float n){ return fract(sin(n * 127.1) * 43758.5453); }
float vn1(float x){ float i = floor(x); float f = fract(x); return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f)); }
float band(vec2 ndc){
  float q = ndc.x * uAspect * 0.5 - ndc.y * 0.3;
  float d = q - uSweepQ;
  return exp(-d * d * uBandK) * uSweepA;
}
void main(){
#ifdef CAGE
  if (vHop > uGrow) discard; // the struts grow out of the core glow on arrival
#endif
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  bool front = gl_FrontFacing;
#if KIND == 1 || KIND == 2
  if (!front) N = -N;
#endif
  float NoV = clamp(dot(N, V), 0.0, 1.0);
  float e = vE;
  float fw = max(fwidth(e), 1e-6);
  float line = 1.0 - smoothstep(0.3 * fw, 1.25 * fw, e);
  float bev = 1.0 - smoothstep(0.0, uBevel, e);
  bev = bev * bev * (3.0 - 2.0 * bev);
  vec3 O = vO;
  float ol = length(O);
  O = ol > 1e-6 ? O / ol : vec3(0.0);
  vec3 Nb = normalize(N + O * bev * 0.95);
  vec3 R = reflect(-V, Nb);
  float fr = pow(1.0 - NoV, 5.0);
  vec2 ndc = vClip.xy / vClip.w;
  float sw = band(ndc);
  sweepK = (0.2 + 0.8 * sw / max(uSweepA, 1e-3)) * uSweepK;
  sw *= uSweepK;
  float gli = pow(max(dot(R, uSweepL), 0.0), 40.0);
  vec3 Lc = uCoreP - vW;
  float dc = length(Lc);
  Lc /= max(dc, 1e-4);
  float cfall = uCoreI / (1.0 + dc * dc * uCoreFall);
  float fog = smoothstep(uFogN, uFogF, vD) * uFogK;
  vec3 col;
  float alpha = 1.0;
#if KIND == 0
  // dark brushed metal: streaks in the facet plane (local space, they travel with the solid)
  vec3 nl = normalize(vNl);
  vec3 tl = normalize(cross(nl, abs(nl.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  float ac = dot(vL, cross(nl, tl)) + vR * 7.0;
  float al = dot(vL, tl);
  float s1 = vn1(ac * 38.0 + vn1(al * 3.0) * 2.0);
  float fq = ac * 140.0;
  float s2 = mix(0.5, vn1(fq + al * 0.8), clamp(1.4 - fwidth(fq) * 1.2, 0.0, 1.0));
  float streak = 0.55 * s1 + 0.45 * s2;
  float rough = uRough * (0.7 + 0.6 * streak);
  vec3 F = uTint + (1.0 - uTint) * fr;
  col = env(R, rough) * F * (0.8 + 0.4 * streak);
  // polished chamfers: a sharper reflection on the bevel
  col += env(R, 0.03) * bev * 0.55 * (0.25 + F);
  // coral / cyan edge light: a hairline in the colour of the side it faces
  vec3 eh = duo(Nb.x - Nb.z * 0.2);
  col += eh * line * uLineK * (0.3 + 0.7 * (1.0 - NoV));
  // rim light at the silhouette: coral on the screen-right side, cyan on the left
#ifdef CAGE
  // thin struts: one colour per strut, by the side of the cage it is on (a per-normal split
  // would read as a red / cyan chromatic fringe)
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 rimC = duo(dot(vW - uCoreP, camR) / uARad * 1.8 + 0.15);
#else
  vec3 Nv = normalize(mat3(viewMatrix) * N);
  vec3 rimC = duo(Nv.x * 1.3 + 0.08);
#endif
  col += rimC * pow(1.0 - NoV, 4.5) * uRimK;
  col += mix(CORAL, GOLD, 0.35) * cfall * pow(max(dot(R, Lc), 0.0), 10.0) * F * 1.6;
  col += SWEEPC * sw * (gli * 1.6 * F + bev * 0.4 + line * 0.45 + 0.03);
  col = coolLow(col);
#ifdef CAGE
  // the beat: a comet of light travelling out along the struts, hop by hop from the front
  // pentagon (around the core on screen) to the back
  float dh = uHopP - vHop;
  float comet = (dh >= 0.0 ? exp(-dh * 3.4) : exp(-dh * dh * 110.0)) * uHopA;
  vec3 cc = mix(mix(CORAL, GOLD, 0.6), CREAM, smoothstep(0.4, 2.3, vHop));
  cc = mix(cc, CYAN * 1.1 + CREAM * 0.15, smoothstep(2.4, 3.5, vHop) * 0.55);
  float head = exp(-dh * dh * 60.0) * uHopA;
  col += cc * (comet * (0.3 + 0.8 * (1.0 - NoV)) * 0.8 + head * 1.4);
#endif
#elif KIND == 1
  if (front) {
    float Fg = 0.04 + 0.96 * fr;
    Fg = mix(Fg, 0.55, bev * 0.75);
    col = env(R, 0.02) * Fg * 2.2;
    // thin-film sheen at grazing angles, kept to the brand pair
    float h = NoV * 2.4 + vR * 0.8;
    col += duo(sin(h * 6.2831)) * pow(1.0 - NoV, 2.5) * 0.16;
    // edges are rounded: the hairline reflects the studio from a steeper normal, so it
    // twinkles as the solid turns; a cyan / coral fringe hints at dispersion
    vec3 eR = reflect(-V, normalize(N + O * 1.1));
    vec3 eL = env(eR, 0.03);
    float l2 = exp(-pow((e - 2.4 * fw) / (1.1 * fw), 2.0));
    col += (line * (CREAM * 0.14 + eL * 0.55) + mix(CYAN, CORAL, step(0.0, Nb.x)) * l2 * (0.08 + 0.2 * dot(eL, vec3(0.33)))) * uLineK;
    col += uTint * 0.02;
    alpha = mix(0.3, 0.84, pow(1.0 - NoV, 1.4));
    alpha = max(alpha, line * 0.6);
    col += SWEEPC * sw * (gli * 1.2 + bev * 0.3 + line * 0.45 + 0.02);
    col = coolLow(col);
  } else {
    // the far walls, seen through the smoke: inner reflections (a cut-crystal sparkle) and
    // the back edges
    col = env(R, 0.06) * 0.2 + vec3(0.004, 0.008, 0.014);
    vec3 eRb = reflect(-V, normalize(N + O * 1.1));
    col += line * (CYAN * 0.1 + env(eRb, 0.05) * 0.22) * uLineK;
    col += mix(CORAL, GOLD, 0.4) * cfall * (0.012 + 0.05 * max(dot(N, Lc), 0.0) + 0.9 * pow(max(dot(R, Lc), 0.0), 24.0));
    col += mix(CORAL, GOLD, 0.3) * cfall * line * 0.9 * uLineK;
    alpha = 0.34;
    col += SWEEPC * sw * (line * 0.25 + 0.01);
    col = coolLow(col);
  }
  col = mix(col, FOGC * alpha, fog);
  col *= uFadeAll * uFadeO;
  alpha *= uFadeAll * uFadeO;
#elif KIND == 2
  // a crisp screen-pixel hairline (uGlow: an optional faint halo)
  float l = 1.0 - smoothstep(0.3 * fw, 1.2 * fw, e);
  float halo = exp(-e / (fw * 3.2)) * uGlow;
  col = uTint * (l + halo) * (front ? 1.0 : 0.34);
  col += uTint * 0.02 * pow(1.0 - NoV, 2.0) * (front ? 1.0 : 0.0);
  col += SWEEPC * sw * (l + halo) * 0.6;
  col *= 1.0 - fog;
  col *= uFadeAll * uFadeO;
  alpha = 0.0;
#elif KIND == 3
  float Fe = 0.04 + 0.96 * fr;
  Fe = mix(Fe, 0.45, bev * 0.6);
  col = uTint * irr(N) * (1.0 - Fe);
  col += env(R, 0.1) * Fe;
  col += CREAM * line * uLineK * 0.35;
  col += SWEEPC * sw * (gli * 1.5 * Fe + bev * 0.4 + 0.05);
#else
  float f = 0.6 + 0.4 * vR;
  vec3 hot = mix(vec3(1.0, 0.3, 0.12), vec3(1.0, 0.62, 0.32), pow(NoV, 2.0));
  col = hot * (0.7 + 0.7 * NoV) * f * uGlow;
  col += vec3(1.0, 0.8, 0.6) * line * 0.9 * uGlow;
#endif
#if KIND == 0 || KIND == 3 || KIND == 4
  col = mix(col, FOGC, fog);
  col *= uFadeAll * uFadeO;
  alpha = uFadeAll * uFadeO; // premultiplied: a solid fades in over the backdrop, never as a black silhouette
#endif
  gl_FragColor = vec4(col, alpha);
}`;

/* ------------------------------------------------------------------ solids */
const PHI = (1 + Math.sqrt(5)) / 2;
function signs(v) {
  let out = [[]];
  for (const c of v) {
    const next = [];
    for (const o of out) {
      if (c === 0) next.push([...o, 0]);
      else {
        next.push([...o, c]);
        next.push([...o, -c]);
      }
    }
    out = next;
  }
  return out;
}
const cyclic = (v) => [v, [v[1], v[2], v[0]], [v[2], v[0], v[1]]];
const perms = ([a, b, c]) => [
  [a, b, c],
  [a, c, b],
  [b, a, c],
  [b, c, a],
  [c, a, b],
  [c, b, a],
];
function uniq(list) {
  const seen = new Set();
  const out = [];
  for (const v of list) {
    const k = v.map((x) => x.toFixed(4)).join(",");
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(v);
  }
  return out;
}
const VERTS = {
  tetra: () => [
    [1, 1, 1],
    [1, -1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
  ],
  octa: () => uniq(perms([1, 0, 0]).flatMap(signs)),
  cube: () => signs([1, 1, 1]),
  icosa: () => cyclic([0, 1, PHI]).flatMap(signs),
  dodeca: () => [...signs([1, 1, 1]), ...cyclic([0, 1 / PHI, PHI]).flatMap(signs)],
  cubocta: () => uniq(perms([1, 1, 0]).flatMap(signs)),
  truncOcta: () => uniq(perms([0, 1, 2]).flatMap(signs)),
  truncTetra: () => uniq(perms([3, 1, 1]).flatMap(signs)).filter((v) => v.filter((x) => x < 0).length % 2 === 0),
  icosidodeca: () => [...cyclic([0, 0, PHI]).flatMap(signs), ...cyclic([0.5, PHI / 2, (PHI * PHI) / 2]).flatMap(signs)],
  truncIcosa: () => [...cyclic([0, 1, 3 * PHI]), ...cyclic([1, 2 + PHI, 2 * PHI]), ...cyclic([PHI, 2, PHI * PHI * PHI])].flatMap(signs),
  rhombicubocta: () => uniq(perms([1, 1, 1 + Math.SQRT2]).flatMap(signs)),
  rhombicDodeca: () => [...signs([1, 1, 1]), ...uniq(perms([2, 0, 0]).flatMap(signs))],
};

// convex hull -> planar polygons (coplanar hull triangles merged by normal)
function polygons(verts) {
  let rmax = 0;
  for (const v of verts) rmax = Math.max(rmax, Math.hypot(v[0], v[1], v[2]));
  const pts = verts.map((v) => new THREE.Vector3(v[0] / rmax, v[1] / rmax, v[2] / rmax));
  const hull = new ConvexHull().setFromPoints(pts);
  const groups = [];
  for (const f of hull.faces) {
    let g = groups.find((q) => q.n.dot(f.normal) > 0.9995);
    if (!g) {
      g = { n: f.normal.clone(), pts: [] };
      groups.push(g);
    }
    let e = f.edge;
    do {
      const p = e.head().point;
      if (!g.pts.some((q) => q.distanceToSquared(p) < 1e-9)) g.pts.push(p.clone());
      e = e.next;
    } while (e !== f.edge);
  }
  for (const g of groups) {
    const c = new THREE.Vector3();
    for (const p of g.pts) c.add(p);
    c.multiplyScalar(1 / g.pts.length);
    const u = g.pts[0].clone().sub(c).normalize();
    const v = new THREE.Vector3().crossVectors(g.n, u);
    g.pts.sort((a, b) => {
      const da = a.clone().sub(c);
      const db = b.clone().sub(c);
      return Math.atan2(da.dot(v), da.dot(u)) - Math.atan2(db.dot(v), db.dot(u));
    });
    g.c = c;
  }
  return { polys: groups, verts: pts };
}

// a fan per polygon: aEdge = distance to the polygon edge (exact for each fan triangle)
function solidGeometry(name, seed = 1) {
  const { polys, verts } = polygons(VERTS[name]());
  const random = rng(seed * 977 + name.length * 31);
  const pos = [];
  const nor = [];
  const edge = [];
  const fc = [];
  const rnd = [];
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  for (const g of polys) {
    const r = random();
    const k = g.pts.length;
    for (let i = 0; i < k; i += 1) {
      const a = g.pts[i];
      const b = g.pts[(i + 1) % k];
      ab.subVectors(b, a);
      ac.subVectors(g.c, a);
      const d = ac.clone().cross(ab).length() / ab.length();
      for (const [p, ed] of [
        [g.c, d],
        [a, 0],
        [b, 0],
      ]) {
        pos.push(p.x, p.y, p.z);
        nor.push(g.n.x, g.n.y, g.n.z);
        edge.push(ed);
        fc.push(g.c.x, g.c.y, g.c.z);
        rnd.push(r);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute("aEdge", new THREE.Float32BufferAttribute(edge, 1));
  geo.setAttribute("aFC", new THREE.Float32BufferAttribute(fc, 3));
  geo.setAttribute("aRnd", new THREE.Float32BufferAttribute(rnd, 1));
  geo.computeBoundingSphere();
  geo.userData.verts = verts;
  return geo;
}

// the anchor's cage: hexagonal metal struts along every edge of a polyhedron, with small nodes.
// aHop is the graph distance (in edges) from the front face's vertices, continuous along each strut
// (the shortest path), so a light can travel out along the struts hop by hop.
function cageGeometry(name, strutR, nodeR) {
  const { polys, verts } = polygons(VERTS[name]());
  const edges = new Map();
  const vid = (p) => verts.findIndex((v) => v.distanceToSquared(p) < 1e-9);
  for (const g of polys) {
    for (let i = 0; i < g.pts.length; i += 1) {
      const a = vid(g.pts[i]);
      const b = vid(g.pts[(i + 1) % g.pts.length]);
      edges.set(a < b ? `${a},${b}` : `${b},${a}`, [a, b]);
    }
  }
  const front = polys[0];
  const hop = new Array(verts.length).fill(Infinity);
  let ring = front.pts.map(vid);
  for (const v of ring) hop[v] = 0;
  for (let d = 1; ring.length; d += 1) {
    const next = [];
    for (const [a, b] of edges.values()) {
      for (const [u, w] of [
        [a, b],
        [b, a],
      ]) {
        if (hop[u] === d - 1 && hop[w] === Infinity) {
          hop[w] = d;
          next.push(w);
        }
      }
    }
    ring = next;
  }
  const pos = [];
  const nor = [];
  const hops = [];
  const random = rng(4242);
  const rnd = [];
  const up = new THREE.Vector3(0, 1, 0);
  const q = new THREE.Quaternion();
  const m = new THREE.Matrix4();
  const tmpV = new THREE.Vector3();
  const pv = new THREE.Vector3();
  const add = (geo, matrix, r, hopAt) => {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    g.applyMatrix4(matrix);
    g.computeVertexNormals();
    const p = g.getAttribute("position");
    const n = g.getAttribute("normal");
    for (let i = 0; i < p.count; i += 1) {
      pos.push(p.getX(i), p.getY(i), p.getZ(i));
      nor.push(n.getX(i), n.getY(i), n.getZ(i));
      rnd.push(r);
      hops.push(hopAt(pv.set(p.getX(i), p.getY(i), p.getZ(i))));
    }
  };
  const ab = new THREE.Vector3();
  for (const [a, b] of edges.values()) {
    const A = verts[a];
    const B = verts[b];
    const len = A.distanceTo(B);
    ab.subVectors(B, A);
    const ha = hop[a];
    const hb = hop[b];
    const hopAt = (P) => {
      const s = clamp01(P.clone().sub(A).dot(ab) / (len * len));
      return Math.min(ha + s, hb + 1 - s);
    };
    const cyl = new THREE.CylinderGeometry(strutR, strutR, len, 6, 1, true);
    tmpV.subVectors(B, A).normalize();
    q.setFromUnitVectors(up, tmpV);
    m.compose(tmpV.clone().addVectors(A, B).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1));
    // turn the prism so a flat side faces outwards (reads as a machined bar)
    const twist = new THREE.Matrix4().makeRotationY(random() * 0.5);
    add(cyl, m.clone().multiply(twist), random(), hopAt);
  }
  const nodeSrc = new THREE.IcosahedronGeometry(nodeR, 1);
  verts.forEach((v, i) => {
    q.setFromUnitVectors(up, v.clone().normalize());
    m.compose(v, q, new THREE.Vector3(1, 1, 1));
    add(nodeSrc, m, random(), () => hop[i]);
  });
  const count = pos.length / 3;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute("aEdge", new THREE.Float32BufferAttribute(new Float32Array(count).fill(1), 1));
  geo.setAttribute("aFC", new THREE.Float32BufferAttribute(pos.slice(), 3));
  geo.setAttribute("aRnd", new THREE.Float32BufferAttribute(rnd, 1));
  geo.setAttribute("aHop", new THREE.Float32BufferAttribute(hops, 1));
  geo.computeBoundingSphere();
  geo.userData.verts = verts;
  geo.userData.hops = hop;
  geo.userData.front = front.n.clone();
  return geo;
}

/* ------------------------------------------------------------------ layout helpers */
// Approximate copy box of the hero overlay (eyebrow -> CTA row), mirroring the page CSS.
function copyRect(W, H) {
  if (W < 700) {
    const font = 0.17 * W;
    const h = 1.6 * font + 165;
    return { x0: 0, x1: W, y0: H - 112 - h, y1: H - 112 };
  }
  const font = clamp(0.1 * W, 67.2, 168);
  const left = clamp(0.05 * W, 20, 72);
  const bottom = clamp(0.15 * H, 96, 150);
  const h = 1.6 * font + 168;
  return { x0: 0, x1: left + Math.max(3.25 * font, 360), y0: H - bottom - h, y1: H - bottom };
}
// The page marks its hero copy with [data-hero-avoid="copy"] and any other overlay (the latest-update
// chip, side credits) with [data-hero-avoid]. Offsets are used instead of client rects so the copy's
// CSS entrance transforms do not move the measured box.
function boxIn(el, root) {
  let x = 0;
  let y = 0;
  let node = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent;
  }
  if (node !== root) {
    const r = el.getBoundingClientRect();
    const hb = root.getBoundingClientRect();
    return { x0: r.left - hb.left, y0: r.top - hb.top, x1: r.right - hb.left, y1: r.bottom - hb.top };
  }
  return { x0: x, y0: y, x1: x + el.offsetWidth, y1: y + el.offsetHeight };
}
// The copy block (and its block-level lines) are as wide as the column; what matters is the ink:
// the text runs plus images/icons and bordered controls (buttons, the update chip).
function inkIn(el, root) {
  const hb = root.getBoundingClientRect();
  let box = null;
  const add = (r) => {
    if (!r || !r.width || !r.height) return;
    const b = { x0: r.left - hb.left, y0: r.top - hb.top, x1: r.right - hb.left, y1: r.bottom - hb.top };
    box = box ? { x0: Math.min(box.x0, b.x0), y0: Math.min(box.y0, b.y0), x1: Math.max(box.x1, b.x1), y1: Math.max(box.y1, b.y1) } : b;
  };
  const range = document.createRange();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.nodeValue.trim()) continue;
    range.selectNodeContents(node);
    add(range.getBoundingClientRect());
  }
  if (range.detach) range.detach();
  for (const item of el.querySelectorAll("img, svg, a, button")) {
    if (item.parentElement && item.parentElement.closest("svg")) continue;
    add(item.getBoundingClientRect());
  }
  return box || boxIn(el, root);
}
function measureAvoid(hero) {
  let copy = null;
  const extra = [];
  for (const el of hero.querySelectorAll("[data-hero-avoid]")) {
    if (!el.offsetWidth || !el.offsetHeight) continue;
    // overlays such as the side credits sit where a static transform puts them (translateY(-50%)),
    // which offsets ignore: take the union of the layout box and the painted box
    let box;
    if (el.dataset.heroAvoid === "copy") box = inkIn(el, hero);
    else {
      const a = boxIn(el, hero);
      const r = el.getBoundingClientRect();
      const hb = hero.getBoundingClientRect();
      box = { x0: Math.min(a.x0, r.left - hb.left), y0: Math.min(a.y0, r.top - hb.top), x1: Math.max(a.x1, r.right - hb.left), y1: Math.max(a.y1, r.bottom - hb.top) };
    }
    if (el.dataset.heroAvoid !== "copy") extra.push(box);
    else copy = copy ? { x0: Math.min(copy.x0, box.x0), y0: Math.min(copy.y0, box.y0), x1: Math.max(copy.x1, box.x1), y1: Math.max(copy.y1, box.y1) } : box;
  }
  return copy ? { copy, extra } : null;
}
function avoidSig(m) {
  if (!m) return "";
  return [m.copy, ...m.extra].map((R) => `${Math.round(R.x0)},${Math.round(R.y0)},${Math.round(R.x1)},${Math.round(R.y1)}`).join(";");
}
// the measured ink moves by a few pixels while the entrance settles; only a real change re-lays
function sameAvoid(a, b) {
  const x = a.split(/[;,]/);
  const y = b.split(/[;,]/);
  if (x.length !== y.length) return false;
  return x.every((v, i) => Math.abs(Number(v) - Number(y[i])) <= 6);
}
function rectDist(x, y, r) {
  const dx = Math.max(r.x0 - x, 0, x - r.x1);
  const dy = Math.max(r.y0 - y, 0, y - r.y1);
  return Math.hypot(dx, dy);
}

// Debug hooks (?herodebug, ?herot=<s> freeze, window.__heroT, ?heroslow, ?heronotimer). A
// production build strips them: esbuild ... --define:globalThis.HERO_DEBUG=false.
const DEBUG = globalThis.HERO_DEBUG !== false && typeof location !== "undefined" && /[?&]herodebug\b/.test(location.search);
const FREEZE = DEBUG ? parseFloat((location.search.match(/[?&]herot=([\d.]+)/) || [])[1]) : NaN;

/* ------------------------------------------------------------------ the field */
// A calm constellation that frames the title: the compound, a few crisp satellites, two faint
// hairline ghosts and one defocused far solid. shape, material, radius relative to the anchor,
// layer (0 sharp, 1 defocused), hair: a crisp screen-pixel hairline ghost, ph: also on phones
// (there, 1-2 small satellites flank the compound above the copy).
const FIELD = [
  { s: "stella", m: "stella", r: 0.28, L: 0, ph: false },
  { s: "icosa", m: "metal", r: 0.26, L: 0, ph: true },
  { s: "truncOcta", m: "glass", r: 0.25, L: 0, ph: false },
  { s: "octa", m: "enamel", r: 0.13, L: 0, ph: true },
  { s: "octa", m: "ghostCyan", r: 0.22, L: 0, hair: true, ph: false },
  { s: "dodeca", m: "ghostCream", r: 0.27, L: 0, hair: true, ph: false },
  { s: "icosa", m: "glass", r: 0.2, L: 1, ph: false },
];

/* ------------------------------------------------------------------ scene */
function mount(canvas, hero) {
  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const lowCores = (navigator.hardwareConcurrency || 8) <= 4;
  const narrowAtStart = (hero.clientWidth || window.innerWidth) < 700;
  // phones in landscape are wide but still phones
  const coarsePhone = window.matchMedia("(pointer: coarse)").matches && Math.min(screen.width || 1e4, screen.height || 1e4) < 700;
  const lite = narrowAtStart || lowCores || coarsePhone;
  let reduced = mqReduce.matches && !motionOptIn();

  canvas.style.visibility = "hidden"; // the hero background shows until the first frame
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    stencil: false,
    depth: false, // the default framebuffer only receives the full-screen grade pass
    powerPreference: "default", // a background hero should not wake a discrete GPU
  });
  let dead = false;
  let fail = () => {}; // replaced once the loop exists; any GPU/program failure hides the canvas
  renderer.debug.onShaderError = () => fail(new Error("shader program failed to link"));
  // The grade writes sRGB itself; a linear output space also keeps program cache keys
  // identical for render targets and the screen, so precompiled programs are reused.
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setClearColor(0x000000, 1);

  const shared = {
    uTime: { value: 0 },
    uFadeAll: { value: 0 },
    uSweepQ: { value: -9 },
    uSweepA: { value: 0 },
    uSweepL: { value: new THREE.Vector3(0, 0.3, 1).normalize() },
    uSweepE: { value: 0 },
    uBandK: { value: 14 },
    uAspect: { value: 1.6 },
    uFogN: { value: 20 },
    uFogF: { value: 82 },
    uCoreP: { value: new THREE.Vector3(0, 0, -24) },
    uCoreI: { value: 0 },
    uCoreFall: { value: 1 },
    uPx: { value: 1 },
    uHopP: { value: -9 },
    uHopA: { value: 0 },
    uGrow: { value: 99 },
    uARad: { value: 1 },
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.5, 400);
  const random = rng(20260928);

  /* ---- deep space backdrop + the blurred far layers */
  const bgGeo = new THREE.BufferGeometry();
  bgGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const bgMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: shared.uTime,
      uFade: shared.uFadeAll,
      uFocus: { value: new THREE.Vector2(0.68, 0.56) },
      uAspect: shared.uAspect,
      uQ: { value: 1 },
      uScale: { value: 1 },
      uSweepQ: shared.uSweepQ,
      uSweepA: shared.uSweepA,
      tFar1: { value: null },
      uWH: { value: new THREE.Vector2(1, 1) },
      uGlowC: { value: new THREE.Vector2(0.66, 0.42) },
      uGlowK: { value: 0.9 },
      uToe: { value: 0.004 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uFade, uAspect, uQ, uScale, uSweepQ, uSweepA, uGlowK, uToe; uniform vec2 uFocus, uWH, uGlowC;
      uniform sampler2D tFar1;
      varying vec2 vUv;
      ${NOISE2}
      ${GLSL_COLORS}
      ${GLSL_FALLBACK}
      vec3 toLin(vec3 c){ return mix(pow((c + 0.055) / 1.055, vec3(2.4)), c / 12.92, step(c, vec3(0.04045))); }
      void main(){
        vec2 p = (vUv - uFocus) * vec2(uAspect, 1.0) / uScale;
        float r = length(p);
        // the page's fallback glow, re-centred on the anchor: the scene cross-fades from the CSS
        // glow into this one. Its sRGB target is taken back through the grade (ink screen, the
        // tone-map offset and the toe) so it lands on the same colours.
        vec2 px = vec2(vUv.x, 1.0 - vUv.y) * uWH;
        vec3 fb = fallbackCSS(px, uWH, uGlowC + vec2(0.0, -0.02), uGlowC + vec2(0.04, 0.06), uGlowC);
        vec3 y = toLin(max(1.0 - (1.0 - fb) / (1.0 - fbInk()), 0.0)) * uGlowK;
        float ym = min(y.r, min(y.g, y.b));
        float m = sqrt(ym / 6.25);
        y += m < 0.08 ? m - 6.25 * m * m : 0.04;
        vec3 col = (y + sqrt(y * y + 4.0 * uToe * y)) * 0.5;
        // a deep blue volume behind the anchor, a violet whisper up-left
        col += vec3(0.0032, 0.0062, 0.0125) * exp(-r * r * 1.5) * 0.5;
        vec2 pv = p - vec2(-0.75, 0.42);
        col += vec3(0.0045, 0.0022, 0.0085) * exp(-dot(pv, pv) * 2.2);
        if (uQ > 0.5) {
          vec2 q = p * 1.1 + vec2(uTime * 0.008, -uTime * 0.004);
          float w = fbm2(q * 0.7 + vec2(0.0, uTime * 0.006));
          float n = fbm2(q + w * 0.8) * 0.5 + 0.5;
          col += vec3(0.0035, 0.0065, 0.011) * smoothstep(0.4, 0.95, n) * exp(-r * 1.1) * uFade;
          col += vec3(0.004, 0.0022, 0.003) * smoothstep(0.55, 1.0, n) * exp(-r * 1.8) * uFade;
        }
        vec4 f1 = texture2D(tFar1, vUv);
        col = col * (1.0 - f1.a) + f1.rgb;
        gl_FragColor = vec4(col, 1.0);
      }`,
    depthTest: false,
    depthWrite: false,
  });
  const bg = new THREE.Mesh(bgGeo, bgMat);
  bg.frustumCulled = false;
  bg.renderOrder = -100;
  scene.add(bg);

  /* ---- floating motes (bokeh), faded out behind the copy */
  const dustCount = lite ? 48 : 96;
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uPx: shared.uPx, uFade: shared.uFadeAll, uCalm: { value: new THREE.Vector4(-2, -2, -2, -2) }, uFocal: { value: 1000 }, uSweepQ: shared.uSweepQ, uSweepA: shared.uSweepA, uAspect: shared.uAspect, uBandK: shared.uBandK },
    vertexShader: /* glsl */ `
      attribute vec3 aColor; attribute float aSize; attribute float aSeed;
      uniform float uTime, uPx, uFade, uFocal, uSweepQ, uSweepA, uAspect, uBandK; uniform vec4 uCalm;
      varying vec3 vC; varying float vSoft;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * (0.05 + aSeed * 0.05) + aSeed * 40.0) * 0.8;
        p.y += sin(uTime * (0.04 + aSeed * 0.04) + aSeed * 17.0) * 0.6 + uTime * 0.03 * (0.3 + aSeed);
        p.y = mod(p.y + 30.0, 60.0) - 30.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float z = -mv.z;
        // defocus: the nearest and farthest motes are wide soft discs
        float coc = abs(1.0 / z - 1.0 / 24.0) * 24.0;
        float sz = aSize * uFocal / z * 0.04 + coc * 14.0;
        gl_PointSize = clamp(sz, 1.5, 40.0) * uPx;
        vSoft = clamp(coc * 1.4, 0.0, 1.0);
        vec2 ndc = gl_Position.xy / gl_Position.w;
        vec2 s = vec2(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5);
        vec2 q = max(uCalm.xy - s, s - uCalm.zw);
        float calm = smoothstep(-0.02, 0.06, max(q.x, q.y));
        float head = smoothstep(0.06, 0.14, s.y);
        float tw = 0.6 + 0.4 * sin(uTime * (0.4 + aSeed) + aSeed * 50.0);
        float qd = ndc.x * uAspect * 0.5 - ndc.y * 0.3 - uSweepQ;
        float sw = exp(-qd * qd * uBandK) * uSweepA;
        vC = aColor * tw * calm * head * uFade * (1.0 + sw * 3.0) / (1.0 + coc * coc * 3.0) * smoothstep(4.0, 9.0, z);
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vC; varying float vSoft;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float sharp = exp(-d * d * 7.0);
        float disc = smoothstep(1.0, 0.8, d) * (0.55 + 0.45 * smoothstep(0.4, 0.9, d));
        float a = mix(sharp, disc, vSoft);
        gl_FragColor = vec4(vC * a, 0.0);
      }`,
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.OneFactor,
    depthWrite: false,
  });
  {
    const pos = new Float32Array(dustCount * 3);
    const col = new Float32Array(dustCount * 3);
    const size = new Float32Array(dustCount);
    const seed = new Float32Array(dustCount);
    const cols = [lin(0x9ae3ee), lin(0xff805f), lin(0xf3f0e9), lin(0xa9b4ff)];
    for (let i = 0; i < dustCount; i += 1) {
      const z = 8 + Math.pow(random(), 0.8) * 70;
      const x = (random() * 2 - 1) * z * 0.62;
      const y = (random() * 2 - 1) * 30;
      pos.set([x + z * 0.12, y, -z], i * 3);
      const c = cols[Math.floor(random() * (random() < 0.75 ? 2 : 4))];
      const b = 0.05 + Math.pow(random(), 2) * 0.28;
      col.set([c.r * b, c.g * b, c.b * b], i * 3);
      size[i] = 0.8 + Math.pow(random(), 3) * 2.0;
      seed[i] = random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    const dust = new THREE.Points(g, dustMat);
    dust.frustumCulled = false;
    dust.renderOrder = 20;
    scene.add(dust);
  }

  /* ---- materials */
  const additive = {
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.OneFactor,
    depthWrite: false,
  };
  const premult = {
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
    depthWrite: false,
  };
  const MATS = {
    metal: { kind: 0, tint: [0.17, 0.18, 0.205], rough: 0.3, bevel: 0.05, line: 0.45, rim: 0.22 },
    gunmetal: { kind: 0, tint: [0.075, 0.08, 0.092], rough: 0.2, bevel: 0.05, line: 0, rim: 0.85 },
    glass: { kind: 1, tint: [0.05, 0.08, 0.12], bevel: 0.035, line: 1.0 },
    ghostCyan: { kind: 2, tint: [0.323 * 0.5, 0.768 * 0.5, 0.855 * 0.5], line: 1 },
    ghostCream: { kind: 2, tint: [0.3, 0.295, 0.28], line: 1 },
    enamel: { kind: 3, tint: [1.0, 0.216, 0.113], bevel: 0.06, line: 0.6 },
    core: { kind: 4, glow: 1 },
  };
  const allMats = [];
  function material(key, extra = {}) {
    const d = { ...MATS[key], ...extra };
    const m = new THREE.ShaderMaterial({
      defines: d.cage ? { KIND: d.kind, CAGE: 1 } : { KIND: d.kind },
      uniforms: {
        uHopP: shared.uHopP,
        uHopA: shared.uHopA,
        uGrow: shared.uGrow,
        uARad: shared.uARad,
        uRimK: { value: d.rim || 0 },
        uTime: shared.uTime,
        uFadeAll: shared.uFadeAll,
        uSweepQ: shared.uSweepQ,
        uSweepA: shared.uSweepA,
        uSweepL: shared.uSweepL,
        uSweepE: shared.uSweepE,
        uBandK: shared.uBandK,
        uAspect: shared.uAspect,
        uFogN: shared.uFogN,
        uFogF: shared.uFogF,
        uFogK: { value: 0.93 },
        uSweepK: { value: 1 },
        uCoreP: shared.uCoreP,
        uCoreI: shared.uCoreI,
        uCoreFall: shared.uCoreFall,
        uFadeO: { value: 1 },
        uTint: { value: new THREE.Vector3(...(d.tint || [1, 1, 1])) },
        uRough: { value: d.rough || 0.3 },
        uBevel: { value: d.bevel || 0.04 },
        uLineK: { value: d.line || 0 },
        uGlow: { value: d.glow || 0 },
      },
      vertexShader: SOLID_VS,
      fragmentShader: SOLID_FS,
      ...(d.kind === 1 ? { ...premult, side: THREE.DoubleSide } : {}),
      // opaque solids stay in the opaque list (depth writes on) but blend premultiplied while fading
      ...(d.kind === 0 || d.kind === 3 || d.kind === 4 ? { blending: premult.blending, blendSrc: premult.blendSrc, blendDst: premult.blendDst, blendSrcAlpha: premult.blendSrcAlpha, blendDstAlpha: premult.blendDstAlpha } : {}),
      ...(d.kind === 2 ? { ...additive, side: THREE.DoubleSide, forceSinglePass: true } : {}),
    });
    allMats.push(m);
    return m;
  }

  /* ---- geometry cache */
  const geoCache = new Map();
  const geo = (name) => {
    if (!geoCache.has(name)) geoCache.set(name, solidGeometry(name, geoCache.size + 3));
    return geoCache.get(name);
  };
  // vertex "stars" of the wire ghosts: the constellation nodes
  const nodeMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uPx: shared.uPx, uFade: shared.uFadeAll, uFadeO: { value: 1 }, uColor: { value: new THREE.Vector3(1, 1, 1) }, uSize: { value: 5 }, uSweepQ: shared.uSweepQ, uSweepA: shared.uSweepA, uAspect: shared.uAspect, uBandK: shared.uBandK },
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime, uPx, uSize, uSweepQ, uSweepA, uAspect, uBandK;
      varying float vI;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        vec2 ndc = gl_Position.xy / gl_Position.w;
        float qd = ndc.x * uAspect * 0.5 - ndc.y * 0.3 - uSweepQ;
        float sw = exp(-qd * qd * uBandK) * uSweepA;
        gl_PointSize = uSize * uPx * (1.0 + sw * 0.8);
        vI = (0.55 + 0.45 * sin(uTime * (0.7 + aSeed) + aSeed * 30.0)) * (1.0 + sw * 2.5);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; uniform float uFade, uFadeO;
      varying float vI;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = dot(c, c) * 4.0;
        float a = exp(-d * 9.0) + 0.25 * exp(-d * 2.5);
        gl_FragColor = vec4(uColor * a * vI * uFade * uFadeO, 0.0);
      }`,
    ...additive,
  });
  function nodePoints(name, color, size) {
    const verts = geo(name).userData.verts;
    const p = new Float32Array(verts.length * 3);
    const s = new Float32Array(verts.length);
    verts.forEach((v, i) => {
      p.set([v.x, v.y, v.z], i * 3);
      s[i] = random();
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(s, 1));
    const m = nodeMat.clone();
    m.uniforms.uTime = shared.uTime;
    m.uniforms.uPx = shared.uPx;
    m.uniforms.uFade = shared.uFadeAll;
    m.uniforms.uSweepQ = shared.uSweepQ;
    m.uniforms.uSweepA = shared.uSweepA;
    m.uniforms.uAspect = shared.uAspect;
    m.uniforms.uBandK = shared.uBandK;
    m.uniforms.uColor.value.set(color[0], color[1], color[2]);
    m.uniforms.uSize.value = size;
    allMats.push(m);
    const pts = new THREE.Points(g, m);
    pts.frustumCulled = false;
    return pts;
  }

  /* ---- solids */
  const objs = [];
  const randAxis = () => new THREE.Vector3(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1).normalize();
  function makeObject(spec, i) {
    const group = new THREE.Group();
    const ghostK = 1;
    const parts = [];
    const addMesh = (g, m, scale = 1, q = null) => {
      const mesh = new THREE.Mesh(g, m);
      mesh.scale.setScalar(scale);
      if (q) mesh.quaternion.copy(q);
      mesh.frustumCulled = false;
      group.add(mesh);
      parts.push(mesh);
      return mesh;
    };
    if (spec.m === "stella") {
      addMesh(geo("tetra"), material("metal"));
      addMesh(geo("tetra"), material("glass"), 1, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2));
    } else if (spec.m === "cubeOcta") {
      addMesh(geo("cube"), material("ghostCyan", { tint: MATS.ghostCyan.tint.map((v) => v * ghostK) }), 0.87);
      addMesh(geo("octa"), material("glass"), 1);
    } else {
      const ghost = MATS[spec.m].kind === 2;
      const m = material(spec.m, ghost ? { tint: MATS[spec.m].tint.map((v) => v * ghostK) } : {});
      addMesh(geo(spec.s), m);
      if (ghost) {
        const pts = nodePoints(spec.s, MATS[spec.m].tint.map((v) => v * 1.3 * ghostK), 4);
        group.add(pts);
        parts.push(pts);
      }
    }
    const o = {
      spec,
      group,
      parts,
      layer: spec.L,
      home: new THREE.Vector3(),
      amp: new THREE.Vector3(0.5 + random() * 0.5, 0.4 + random() * 0.5, 0.3 + random() * 0.4),
      w: new THREE.Vector3(0.05 + random() * 0.05, 0.04 + random() * 0.05, 0.03 + random() * 0.04),
      ph: new THREE.Vector3(random() * TAU, random() * TAU, random() * TAU),
      axis: randAxis(),
      spin: (0.08 + random() * 0.14) * (random() < 0.5 ? -1 : 1),
      q0: new THREE.Quaternion().setFromEuler(new THREE.Euler(random() * TAU, random() * TAU, random() * TAU)),
      delay: 1.0 + i * 0.16 + random() * 0.2,
      placed: false,
      rWorld: 1,
      cur: new THREE.Vector3(), // the eased position / size / visibility (a late web font re-lays
      rCur: 1, //                  the field: things glide to their new places instead of jumping)
      vis: 0,
      idx: i,
    };
    for (const p of parts) {
      p.layers.set(o.layer);
      if (p.material.uniforms.uFogK) {
        p.material.uniforms.uFogK.value = [0.9, 0.9][o.layer];
        p.material.uniforms.uSweepK.value = [1, 0.32][o.layer];
      }
    }
    group.visible = false;
    scene.add(group);
    objs.push(o);
    return o;
  }
  FIELD.forEach((spec, i) => makeObject(spec, i));

  /* ---- the anchor: metal dodecahedron cage, smoked glass icosahedron, warm core */
  const anchor = { group: new THREE.Group(), home: new THREE.Vector3(), rWorld: 1, cur: new THREE.Vector3(), rCur: 1, px: { x: 0, y: 0, r: 100 } };
  {
    const cageGeo = cageGeometry("dodeca", 0.022, 0.044);
    const cageMat = material("gunmetal", { cage: true });
    cageMat.uniforms.uFadeAll = { value: 1 }; // the cage grows in (uGrow) instead of fading
    const cage = new THREE.Mesh(cageGeo, cageMat);
    anchor.front = cageGeo.userData.front;
    // node glints: small crisp four-point stars at the cage vertices, lit as the comet arrives
    {
      const verts = cageGeo.userData.verts;
      const p = new Float32Array(verts.length * 3);
      const h = new Float32Array(verts.length);
      verts.forEach((v, i) => {
        p.set([v.x, v.y, v.z], i * 3);
        h[i] = cageGeo.userData.hops[i];
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      g.setAttribute("aHop", new THREE.BufferAttribute(h, 1));
      const glints = new THREE.Points(
        g,
        new THREE.ShaderMaterial({
          uniforms: { uHopP: shared.uHopP, uHopA: shared.uHopA, uPx: shared.uPx, uSize: { value: 30 } },
          vertexShader: /* glsl */ `
            attribute float aHop;
            uniform float uHopP, uHopA, uPx, uSize;
            varying float vI;
            void main(){
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              float dh = uHopP - aHop;
              vI = (dh >= 0.0 ? exp(-dh * 2.2) : exp(-dh * dh * 30.0)) * uHopA;
              gl_PointSize = uSize * uPx * (0.5 + 0.5 * min(vI, 1.0));
              if (vI < 0.004) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // culled (a 0-size point may still rasterise)
            }`,
          fragmentShader: /* glsl */ `
            varying float vI;
            void main(){
              vec2 c = abs(gl_PointCoord - 0.5) * 2.0;
              float arms = exp(-c.x * 22.0) * max(1.0 - c.y, 0.0) * max(1.0 - c.y, 0.0) + exp(-c.y * 22.0) * max(1.0 - c.x, 0.0) * max(1.0 - c.x, 0.0);
              float core = exp(-dot(c, c) * 26.0);
              gl_FragColor = vec4(vec3(1.0, 0.9, 0.8) * (arms * 1.5 + core * 1.6) * vI, 0.0);
            }`,
          ...additive,
          depthTest: false,
        }),
      );
      glints.frustumCulled = false;
      glints.renderOrder = 40;
      cage.add(glints);
      anchor.glints = glints;
    }
    const glass = new THREE.Mesh(geo("icosa"), material("glass", { line: 1.1 }));
    glass.material.uniforms.uFadeAll = { value: 0 };
    glass.scale.setScalar(0.72);
    const core = new THREE.Mesh(geo("icosa"), material("core"));
    core.material.uniforms.uFadeAll = { value: 0 };
    core.scale.setScalar(0.15);
    // a soft halo around the core (camera-facing, additive)
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: { uI: { value: 0 }, uFade: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vQ;
          void main(){
            vQ = position.xy;
            vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            float s = length(modelMatrix[0].xyz);
            mv.xy += position.xy * s;
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: /* glsl */ `
          uniform float uI, uFade;
          varying vec2 vQ;
          ${GLSL_COLORS}
          void main(){
            float r = length(vQ);
            vec3 col = mix(CORAL, GOLD, 0.45) * exp(-r * r * 34.0) * 0.9 + CORAL * exp(-r * 6.0) * 0.07;
            col *= 1.0 - smoothstep(0.7, 1.0, r);
            gl_FragColor = vec4(col * uI * uFade, 0.0);
          }`,
        ...additive,
      }),
    );
    halo.scale.setScalar(0.62);
    halo.renderOrder = 30;
    anchor.halo = halo;
    for (const m of [cage, glass, core, halo]) {
      m.frustumCulled = false;
      anchor.group.add(m);
    }
    anchor.cage = cage;
    anchor.glass = glass;
    anchor.core = core;
    anchor.q0 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.4, 0.3, 0.1));
    anchor.qg = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.2, 0.9, 0.5));
    scene.add(anchor.group);
  }

  /* ---- far layers: rendered small, blurred, composited by the backdrop */
  // one defocused layer at quarter resolution (a smooth bilinear upsample): two blur iterations, one on lite
  const farLayers = [lite ? { layer: 1, div: 4, iters: 1, spread: 1.0 } : { layer: 1, div: 4, iters: 2, spread: 1.0 }];
  for (const L of farLayers) {
    L.rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, depthBuffer: true });
    L.tmp = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, depthBuffer: false });
  }
  bgMat.uniforms.tFar1.value = farLayers[0].rt.texture;
  const blurMat = new THREE.ShaderMaterial({
    uniforms: { tMap: { value: null }, uDir: { value: new THREE.Vector2() } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tMap; uniform vec2 uDir;
      varying vec2 vUv;
      void main(){
        vec4 s = texture2D(tMap, vUv) * 0.2270270270;
        s += (texture2D(tMap, vUv + uDir * 1.3846153846) + texture2D(tMap, vUv - uDir * 1.3846153846)) * 0.3162162162;
        s += (texture2D(tMap, vUv + uDir * 3.2307692308) + texture2D(tMap, vUv - uDir * 3.2307692308)) * 0.0702702703;
        gl_FragColor = s;
      }`,
    depthTest: false,
    depthWrite: false,
  });
  const blurQuad = new FullScreenQuad(blurMat);
  const farCam = new THREE.PerspectiveCamera();
  let farLevel = 0;
  let farUsed = true;
  let farClear = true;
  function renderFar() {
    const prev = renderer.getRenderTarget();
    const prevAlpha = renderer.getClearAlpha();
    if (!farUsed) {
      if (farClear) {
        renderer.setClearAlpha(0);
        for (const L of farLayers) {
          renderer.setRenderTarget(L.rt);
          renderer.clear();
        }
        renderer.setRenderTarget(prev);
        renderer.setClearAlpha(prevAlpha);
        farClear = false;
      }
      return;
    }
    renderer.setClearAlpha(0);
    for (const L of farLayers) {
      farCam.copy(camera);
      farCam.layers.set(L.layer);
      renderer.setRenderTarget(L.rt);
      renderer.clear();
      renderer.render(scene, farCam);
      const iters = Math.max(1, L.iters - farLevel);
      for (let i = 0; i < iters; i += 1) {
        const s = L.spread * (1 + i * 0.6);
        blurMat.uniforms.tMap.value = L.rt.texture;
        blurMat.uniforms.uDir.value.set(s / L.rt.width, 0);
        renderer.setRenderTarget(L.tmp);
        blurQuad.render(renderer);
        blurMat.uniforms.tMap.value = L.tmp.texture;
        blurMat.uniforms.uDir.value.set(0, s / L.rt.height);
        renderer.setRenderTarget(L.rt);
        blurQuad.render(renderer);
      }
    }
    renderer.setRenderTarget(prev);
    renderer.setClearAlpha(prevAlpha);
  }

  /* ---- light shafts: the core's glow, occluded by the cage struts in front of it, smeared
     radially from the core (3 passes x 8 taps at quarter resolution), added in the grade */
  const shafts = {
    rt: new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, depthBuffer: true }),
    tmp: new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, depthBuffer: false }),
    scene: new THREE.Scene(),
    on: true,
    uv: new THREE.Vector2(0.68, 0.56),
    k: 0.5,
    out: null,
    div: lite ? 8 : 4,
    // lite: 2 passes of 8 taps at 1/8 resolution; otherwise 3 passes at 1/4
    spans: lite ? [0.85, 0.85 / 8] : [0.85, 0.85 / 8, 0.85 / 64],
  };
  const occCage = new THREE.Mesh(anchor.cage.geometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
  const shaftLight = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: { uI: { value: 1 } },
      vertexShader: /* glsl */ `
        varying vec2 vQ;
        void main(){
          vQ = position.xy;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * length(modelMatrix[0].xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uI;
        varying vec2 vQ;
        ${GLSL_COLORS}
        void main(){
          float r = length(vQ);
          vec3 col = mix(CORAL, GOLD, 0.35) * (exp(-r * r * 7.0) + 0.8 * exp(-r * r * 45.0));
          col *= 1.0 - smoothstep(0.8, 1.0, r);
          gl_FragColor = vec4(col * uI, 1.0);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  for (const m of [occCage, shaftLight]) {
    m.matrixAutoUpdate = false;
    m.matrixWorldAutoUpdate = false;
    m.frustumCulled = false;
    shafts.scene.add(m);
  }
  const shaftMat = new THREE.ShaderMaterial({
    uniforms: { tMap: { value: null }, uC: { value: shafts.uv }, uSpan: { value: 0.8 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tMap; uniform vec2 uC; uniform float uSpan;
      varying vec2 vUv;
      void main(){
        vec2 d = vUv - uC;
        vec3 s = vec3(0.0);
        for (int i = 0; i < 8; i++) {
          s += texture2D(tMap, vUv - d * (float(i) / 8.0) * uSpan).rgb;
        }
        gl_FragColor = vec4(s / 8.0, 1.0);
      }`,
    depthTest: false,
    depthWrite: false,
  });
  const shaftQuad = new FullScreenQuad(shaftMat);
  const shaftS = new THREE.Vector3();
  function renderShafts() {
    if (!shafts.on) return;
    occCage.matrixWorld.copy(anchor.cage.matrixWorld);
    shaftLight.matrixWorld.makeTranslation(shared.uCoreP.value.x, shared.uCoreP.value.y, shared.uCoreP.value.z);
    shaftLight.matrixWorld.scale(shaftS.setScalar(anchor.rCur * 0.78));
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(shafts.rt);
    renderer.clear();
    renderer.render(shafts.scene, camera);
    let src = shafts.rt;
    let dst = shafts.tmp;
    for (const span of shafts.spans) {
      shaftMat.uniforms.tMap.value = src.texture;
      shaftMat.uniforms.uSpan.value = span;
      renderer.setRenderTarget(dst);
      shaftQuad.render(renderer);
      [src, dst] = [dst, src];
    }
    shafts.out = src;
    renderer.setRenderTarget(prev);
  }

  /* ---- post-processing */
  const maxSamples = lite ? (lowCores ? 0 : 2) : 4;
  const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples: maxSamples });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(2, 2), 0.5, 0.5, 1.0);
  composer.addPass(bloom);
  const finalPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uExposure: { value: 1.0 },
      uFocus: { value: new THREE.Vector2(0.68, 0.56) },
      uEdge: { value: new THREE.Vector2(0.05, 0.08) },
      uCalm: { value: new THREE.Vector4(0, 0, 1, 1) },
      uCalmAmt: { value: 0.4 },
      uCalmSoft: { value: 80 },
      uHead: { value: 80 },
      uToe: { value: 0.004 },
      uEdgeSoft: { value: 60 },
      tShafts: { value: null },
      uShaftK: { value: 0 },
      uShaftC: { value: shafts.uv },
      uShaftR: { value: 0.3 },
      uReveal: { value: 1 },
      uWH: { value: new THREE.Vector2(1, 1) },
      uFbC: { value: new THREE.Vector2(0.66, 0.44) },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tShafts; uniform float uShaftK, uShaftR, uReveal; uniform vec2 uShaftC, uWH, uFbC;
      ${GLSL_FALLBACK}
      uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime, uExposure, uCalmAmt, uCalmSoft, uHead, uToe, uEdgeSoft;
      uniform vec2 uFocus, uEdge; uniform vec4 uCalm;
      varying vec2 vUv;
      // Khronos PBR Neutral tone mapping (keeps brand coral on hue).
      vec3 neutral(vec3 color){
        const float start = 0.76; const float desat = 0.15;
        float x = min(color.r, min(color.g, color.b));
        float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
        color -= offset;
        float peak = max(color.r, max(color.g, color.b));
        if (peak < start) return color;
        float d = 1.0 - start;
        float newPeak = 1.0 - d * d / (peak + d - start);
        color *= newPeak / peak;
        float g = 1.0 - 1.0 / (desat * (peak - newPeak) + 1.0);
        return mix(color, vec3(newPeak), g);
      }
      vec3 srgb(vec3 c){ return mix(1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, c * 12.92, step(c, vec3(0.0031308))); }
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){
        vec2 uv = vUv;
        vec2 dc = uv - uFocus;
        vec2 off = dc * 0.002 * length(dc);
        vec3 hdr = vec3(texture2D(tDiffuse, uv - off).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + off).b);
        // light shafts: they thin out with the distance from the core
        vec2 sd2 = (uv - uShaftC) * vec2(uRes.x / uRes.y, 1.0);
        hdr += texture2D(tShafts, uv).rgb * uShaftK * exp(-length(sd2) / uShaftR * 1.15);
        // calm zone behind the copy and under the header
        vec2 px = vec2(uv.x, 1.0 - uv.y) * uRes;
        vec2 q = max(uCalm.xy - px, px - uCalm.zw);
        float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
        hdr *= 1.0 - uCalmAmt * (1.0 - smoothstep(-uCalmSoft * 0.3, uCalmSoft, sd));
        hdr *= 1.0 - 0.75 * (1.0 - smoothstep(uHead * 0.7, uHead * 1.4, px.y));
        float ep = min(min(px.x, uRes.x - px.x), min(px.y, uRes.y - px.y));
        hdr *= mix(0.35, 1.0, smoothstep(0.0, uEdgeSoft, ep));
        hdr = max(hdr, 0.0);
        hdr = hdr * hdr / (hdr + uToe);
        vec3 c = srgb(clamp(neutral(hdr * uExposure), 0.0, 1.0));
        vec3 ink = vec3(7.0, 9.0, 13.0) / 255.0;
        c = 1.0 - (1.0 - ink) * (1.0 - c);
        vec2 e = min(uv, 1.0 - uv);
        float mask = smoothstep(0.0, uEdge.x, e.x) * smoothstep(0.0, uEdge.y, e.y);
        float vig = 1.0 - 0.3 * smoothstep(0.45, 1.25, length(dc * vec2(uRes.x / uRes.y, 1.0)));
        c = mix(ink, c, mask * vig);
        c += (hash(uv * uRes + fract(uTime * 7.0) * 91.0) - 0.5) * (1.6 / 255.0) * mask;
        // arrival: the first frame is the page's CSS glow, then the scene cross-fades in
        if (uReveal < 1.0) {
          vec2 cpx = vec2(uv.x, 1.0 - uv.y) * uWH;
          c = mix(fallbackCSS(cpx, uWH, uFbC + vec2(0.0, -0.02), uFbC + vec2(0.04, 0.06), uFbC), c, uReveal);
        }
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  finalPass.needsSwap = false;
  composer.addPass(finalPass);

  function renderFrame(dt) {
    renderFar();
    renderShafts();
    finalPass.uniforms.tShafts.value = shafts.on && shafts.out ? shafts.out.texture : null;
    finalPass.uniforms.uShaftK.value = shafts.on && shafts.out ? shafts.k : 0;
    composer.render(dt);
  }

  /* ---- layout: place the anchor and the field around the copy */
  const comp = { k: 1, narrow: false, fov: 32, focal: 1000, dpr: 1, zA: 24 };
  const gov = { level: 0, dprK: 1, iv: [], raf: [], gpu: [], heavy: 0, light: 0, skip: 0, probe: false, backoff: 1, idleVsync: 0 };
  let W = 1;
  let H = 1;
  let lastAvoidSig = "";
  const tv = new THREE.Vector3();

  // view-space point for a pixel at depth z (nominal camera at the origin looking down -z)
  function unproject(x, y, z, out) {
    const th = Math.tan(THREE.MathUtils.degToRad(comp.fov) / 2);
    const nx = (x / W) * 2 - 1;
    const ny = 1 - (y / H) * 2;
    return out.set(nx * z * th * (W / H), ny * z * th, -z);
  }

  function place() {
    const isNarrow = comp.narrow;
    const k = comp.k;
    const pad = isNarrow ? 28 : 44;
    const measured = measureAvoid(hero);
    lastAvoidSig = avoidSig(measured);
    const cr = measured ? { ...measured.copy } : copyRect(W, H);
    if (isNarrow) {
      cr.x0 = 0;
      cr.x1 = W;
    }
    const copyP = { x0: cr.x0 - pad, y0: cr.y0 - pad, x1: cr.x1 + pad, y1: cr.y1 + pad };
    const head = 80;
    const gutter = clamp(0.05 * W, 20, 72);
    const forbid = [copyP];
    // the other overlays (side credits, scroll cue) are hard avoid zones: 48 px of clearance on
    // top of every object's drift (and the defocus spread of the far layer)
    if (measured) for (const R of measured.extra) forbid.push({ x0: R.x0 - 48, y0: R.y0 - 48, x1: R.x1 + 48, y1: R.y1 + 48 });
    else if (!isNarrow) forbid.push({ x0: W - gutter - 420, y0: H - 118, x1: W, y1: H });
    const B = { x0: isNarrow ? 12 : gutter * 0.5, x1: W - (isNarrow ? 12 : gutter * 0.6), y0: head + 8, y1: H - (isNarrow ? 12 : Math.max(30, H * 0.04)) };
    const clearAt = (x, y) => {
      let c = Math.min(x - B.x0, B.x1 - x, y - B.y0, B.y1 - y);
      for (const R of forbid) c = Math.min(c, rectDist(x, y, R));
      return c;
    };

    // the anchor: as large as the free space allows, pulled towards the design spot
    const design = { x: mix(0.5, 0.685, k) * W, y: mix(0.3, 0.45, k) * H };
    // leave room for a small constellation around it (and for the phone satellites)
    const rCap = mix(isNarrow ? 0.3 * W : 0.4 * W, 0.25 * H, k);
    const driftA = 14;
    let best = null;
    for (let gy = 0; gy <= 30; gy += 1) {
      for (let gx = 0; gx <= 40; gx += 1) {
        const x = mix(B.x0, B.x1, gx / 40);
        const y = mix(B.y0, B.y1, gy / 30);
        const r = Math.min(clearAt(x, y) / 1.04 - driftA, rCap);
        if (r < 30) continue;
        const score = r * (1 - 0.9 * Math.hypot((x - design.x) / W, (y - design.y) / H));
        if (!best || score > best.score) best = { x, y, r, score };
      }
    }
    if (!best) best = { x: design.x, y: design.y, r: Math.min(W, H) * 0.15 };
    const A = best;
    anchor.px = { x: A.x, y: A.y, r: A.r };
    unproject(A.x, A.y, comp.zA, anchor.home);
    anchor.rWorld = (A.r * comp.zA) / comp.focal;
    shared.uARad.value = anchor.rWorld;
    shared.uCoreFall.value = 1 / (anchor.rWorld * anchor.rWorld * 0.35);

    // the field: seeded candidates, hard constraints, a soft score (ring around the anchor,
    // weight up/right, spread out like a constellation)
    const placed = [{ x: A.x, y: A.y, r: A.r, L: 0 }];
    const Z = [
      [18, 27],
      [36, 46],
    ];
    const DRIFT = [16, 12];
    let side = 0;
    for (const o of objs) {
      const was = o.placed;
      o.placed = false;
      if (isNarrow && !o.spec.ph) continue;
      // smaller screens get a smaller constellation: no hairline ghosts or far solid under ~1200 px
      if (!isNarrow && (o.spec.hair || o.layer === 1) && (W < 1180 || H < 640)) continue;
      const R = rng(9001 + o.idx * 131);
      const L = o.layer;
      const sat = isNarrow && L === 0; // a phone satellite flanking the compound
      const r = sat ? Math.max(o.spec.r * A.r * 0.8, 16) : o.spec.r * A.r;
      const margin = (sat ? 10 : DRIFT[L]) + 6 + (L === 0 ? 0 : isNarrow ? 12 : 30);
      let pick = null;
      for (let c = 0; c < 320; c += 1) {
        let x = R() * W;
        let y = R() * H;
        if (sat) {
          // phones: search the ring just outside the cage, not the whole screen
          const a = R() * TAU;
          const d = A.r * 0.98 + r + 6 + R() * A.r * 0.5;
          x = A.x + Math.cos(a) * d;
          y = A.y + Math.sin(a) * d;
        }
        // nothing crops at the edges; the defocused layer keeps well clear of the header band
        // and, on wide screens, out of the bottom band (it read as a smudge cluster there)
        const top = L === 0 ? B.y0 + 16 : B.y0 + 100;
        if (o.spec.hair && !isNarrow && x - r < cr.x1 + 90) continue; // hairlines never hover over the title
        if (L === 0 && k > 0.5 && y + r > H * 0.9) continue;
        if (L === 1 && !isNarrow && (y + r * 0.5 > H * 0.7 || x < A.x - A.r * 0.2)) continue; // never toward the copy
        if (x - r < B.x0 || x + r > B.x1 || y - r < top || y + r > B.y1) continue;
        if (sat && (x - r < 0.07 * W || x + r > 0.93 * W)) continue;
        let ok = true;
        for (const F of forbid) {
          if (rectDist(x, y, F) < r + margin) {
            ok = false;
            break;
          }
        }
        if (!ok) continue;
        let minGap = 1e9;
        for (const P of placed) {
          const d = Math.hypot(x - P.x, y - P.y);
          const same = P.L === L;
          const isA = P === placed[0];
          // the defocused solid may sit partly behind the compound (depth); phone satellites
          // tuck into the cage's flanks (its silhouette is a decagon inside the bounding circle)
          const need = isA ? (L === 0 ? A.r * (sat ? 0.98 : 1.06) + r + (sat ? 6 : 10) : (A.r + r) * 0.72) : same ? (P.r + r) * (isNarrow ? 1.25 : 1.55) + 10 : (P.r + r) * 0.62;
          if (d < need) {
            ok = false;
            break;
          }
          minGap = Math.min(minGap, (d - need) / A.r);
        }
        if (!ok) continue;
        const dn = Math.hypot(x - A.x, y - A.y) / A.r;
        let s = R() * 0.6 + Math.min(minGap, 0.8) * 0.8;
        if (sat) {
          // close to the compound's lower flanks, one on each side
          s -= Math.abs(dn - 1.25) * 2.4;
          s += y > A.y + A.r * 0.3 ? 0.9 : y > A.y ? 0.3 : -0.6;
          if (side && Math.sign(x - A.x) === side) s -= 2.0;
        } else if (L === 0) s -= Math.abs(dn - (o.spec.hair ? 2.05 : 1.55)) * 1.1;
        else s -= Math.abs(dn - 1.7) * 1.4 + (dn < 1.05 ? 3 : 0);
        s += (x / W) * mix(0.1, 0.5, k) - (y / H) * 0.5;
        s -= Math.max(0, y / H - 0.72) * (L === 0 ? 3.0 : 1.5) * k;
        if (!pick || s > pick.s) pick = { x, y, s };
      }
      o.placed = !!pick;
      if (!pick) continue;
      o.fresh = !was; // newly placed: it appears where it belongs (fading in), no glide
      if (sat) side = Math.sign(pick.x - A.x);
      placed.push({ x: pick.x, y: pick.y, r, L });
      const z = o.spec.hair ? mix(27, 36, R()) : mix(Z[L][0], Z[L][1], R());
      unproject(pick.x, pick.y, z, o.home);
      o.rWorld = (r * z) / comp.focal;
      o.driftW = (DRIFT[L] * z) / comp.focal;
      o.px = { x: pick.x, y: pick.y, r };
    }
    // no defocused solid in this layout (phones): update() skips the far pass (one clear)
    farClear = true;

    return { cr, head };
  }

  let glideNext = false;
  let laidW = 0;
  let laidH = 0;
  function layout() {
    W = Math.max(1, hero.clientWidth || window.innerWidth);
    H = Math.max(1, hero.clientHeight || window.innerHeight);
    const aspect = W / H;
    const isNarrow = W < 700;
    comp.narrow = isNarrow;
    const budget = lite ? 2.2e6 : 4.2e6;
    const cap = isNarrow ? 1.5 : 1.75;
    const dpr = Math.max(0.5, Math.min(window.devicePixelRatio || 1, cap, Math.sqrt(budget / (W * H))) * gov.dprK);
    const k = smooth(0.62, 1.35, aspect);
    comp.k = k;
    comp.fov = mix(40, 32, k);
    camera.fov = comp.fov;
    camera.aspect = aspect;
    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, -1);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
    comp.focal = H / (2 * Math.tan(THREE.MathUtils.degToRad(comp.fov) / 2));
    const { cr, head } = place();
    // snap unless this is a re-layout for the copy at the same size (a late font): then glide
    const glide = glideNext && booted && W === laidW && H === laidH;
    glideNext = false;
    laidW = W;
    laidH = H;
    if (!glide) {
      anchor.cur.copy(anchor.home);
      anchor.rCur = anchor.rWorld;
    }
    for (const o of objs) {
      if (!glide || o.fresh) {
        o.cur.copy(o.home);
        o.rCur = o.rWorld;
      }
      if (!glide) o.vis = o.placed ? 1 : 0;
      o.fresh = false;
    }

    comp.dpr = dpr;
    const s = dpr >= 1.5 ? Math.min(maxSamples, 2) : maxSamples;
    for (const target of [composer.renderTarget1, composer.renderTarget2]) {
      if (target.samples !== s) {
        target.samples = s;
        target.dispose();
      }
    }
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    composer.setPixelRatio(dpr);
    composer.setSize(W, H);
    const bw = Math.round(W * dpr);
    const bh = Math.round(H * dpr);
    for (const L of farLayers) {
      const w = Math.max(2, Math.round(bw / L.div));
      const h = Math.max(2, Math.round(bh / L.div));
      L.rt.setSize(w, h);
      L.tmp.setSize(w, h);
    }
    shafts.rt.setSize(Math.max(2, Math.round(bw / shafts.div)), Math.max(2, Math.round(bh / shafts.div)));
    shafts.tmp.setSize(Math.max(2, Math.round(bw / shafts.div)), Math.max(2, Math.round(bh / shafts.div)));
    shared.uPx.value = dpr;
    shared.uAspect.value = aspect;
    const bw2 = mix(0.55, 1, k);
    shared.uBandK.value = 14 / (bw2 * bw2);
    dustMat.uniforms.uFocal.value = comp.focal / H * 900;
    const calmN = { x0: cr.x0 / W, y0: cr.y0 / H, x1: cr.x1 / W, y1: cr.y1 / H };
    dustMat.uniforms.uCalm.value.set(calmN.x0 - 0.02, calmN.y0 - 0.03, calmN.x1 + 0.02, calmN.y1 + 0.03);
    const fx = anchor.px.x / W;
    const fy = 1 - anchor.px.y / H;
    finalPass.uniforms.uRes.value.set(W * dpr, H * dpr);
    finalPass.uniforms.uFocus.value.set(fx, fy);
    finalPass.uniforms.uShaftR.value = anchor.px.r / H;
    finalPass.uniforms.uEdge.value.set(isNarrow ? 0.035 : 0.045, isNarrow ? 0.05 : 0.07);
    finalPass.uniforms.uCalm.value.set(cr.x0 * dpr, cr.y0 * dpr, cr.x1 * dpr, cr.y1 * dpr);
    finalPass.uniforms.uCalmSoft.value = 90 * dpr;
    finalPass.uniforms.uCalmAmt.value = isNarrow ? 0.5 : 0.55;
    finalPass.uniforms.uHead.value = head * dpr;
    finalPass.uniforms.uEdgeSoft.value = (isNarrow ? 44 : 64) * dpr;
    bgMat.uniforms.uFocus.value.set(fx, fy);
    bgMat.uniforms.uScale.value = mix(0.75, 1, k);
    bgMat.uniforms.uWH.value.set(W, H);
    bgMat.uniforms.uGlowC.value.set(fx, 1 - fy);
    finalPass.uniforms.uWH.value.set(W, H);
    // the CSS glow's centre (.hero-fallback --fb-x / --fb-y), for the first frame's cross-fade
    const fbEl = hero.querySelector(".hero-fallback");
    if (fbEl) {
      const cs = getComputedStyle(fbEl);
      const fx0 = parseFloat(cs.getPropertyValue("--fb-x"));
      const fy0 = parseFloat(cs.getPropertyValue("--fb-y"));
      if (fx0 === fx0 && fy0 === fy0) finalPass.uniforms.uFbC.value.set(fx0 / 100, fy0 / 100);
    }
    bloom.strength = isNarrow ? 0.45 : 0.5;
    if (globalThis.HERO_DEBUG !== false && DEBUG) {
      for (const o of objs) if (o.placed) console.warn(`[hero] field ${o.spec.s}/${o.spec.m}/L${o.layer}@${Math.round(o.px.x)},${Math.round(o.px.y)},r${Math.round(o.px.r)}`);
      console.warn(`[hero] ${W}x${H} dpr=${dpr.toFixed(2)} anchor=${Math.round(anchor.px.x)},${Math.round(anchor.px.y)} r=${Math.round(anchor.px.r)} placed=${objs.filter((o) => o.placed).length}/${objs.length} copy=${Math.round(cr.x1)},${Math.round(cr.y0)} gov=${gov.level}`);
    }
  }

  function applyQuality() {
    // level 1: drop the light-shaft pass, the backdrop fbm and a blur pass; levels 2-3: step the DPR
    bgMat.uniforms.uQ.value = gov.level >= 1 ? 0 : 1;
    farLevel = gov.level >= 1 ? 1 : 0;
    shafts.on = gov.level < 1;
    gov.dprK = gov.level >= 3 ? 0.64 : gov.level >= 2 ? 0.8 : 1;
    layout();
  }

  /* ---- pointer (fine pointers only) */
  const par = { x: 0, y: 0, tx: 0, ty: 0 };
  if (finePointer) {
    window.addEventListener(
      "pointermove",
      (ev) => {
        par.tx = (ev.clientX / window.innerWidth) * 2 - 1;
        par.ty = (ev.clientY / window.innerHeight) * 2 - 1;
      },
      { passive: true },
    );
  }

  /* ---- per-frame update */
  let lastPulse = -1;
  const qa = new THREE.Quaternion();
  const qb = new THREE.Quaternion();
  const toCam = new THREE.Vector3();
  const camX = new THREE.Vector3();
  const camY = new THREE.Vector3();
  const AX_GLASS = new THREE.Vector3(-0.5, 0.4, 0.75).normalize();
  const AX_CORE = new THREE.Vector3(0.3, 1, -0.2).normalize();
  if (globalThis.HERO_DEBUG !== false && DEBUG) window.__heroDbg = { shared, finalPass, anchor, shafts, bgMat, objs };
  const firePulse = (detail) => {
    try {
      window.dispatchEvent(new CustomEvent("blitast:pulse", { detail }));
    } catch (e) {
      /* no listeners needed */
    }
  };
  // the sweep coordinate range for this aspect (band half-width included)
  function sweepRange() {
    const a = shared.uAspect.value;
    const m = 0.5 * a + 0.3 + 0.45;
    return [-m, m];
  }

  function update(t, dt, live) {
    shared.uTime.value = t;
    shared.uFadeAll.value = smooth(0.0, 1.3, t);

    // camera: a slow drift (and a touch of parallax) aimed at the anchor's depth
    par.x += (par.tx - par.x) * Math.min(1, dt * 2.0);
    par.y += (par.ty - par.y) * Math.min(1, dt * 2.0);
    const cx = Math.sin(t * 0.043) * 0.55 + par.x * 0.7;
    const cy = Math.sin(t * 0.031 + 1.3) * 0.32 - par.y * 0.45;
    camera.position.set(cx, cy, Math.sin(t * 0.027) * 0.5);
    camera.lookAt(0, 0, -comp.zA);
    camera.updateMatrixWorld(true);

    // arrival: the struts grow out of the core glow, hop by hop, with a bright tip
    let hopP = -9;
    let hopA = 0;
    let grow = 99;
    let swell = 0;
    if (t < T_GROW1 + 1.2) {
      const s = clamp01((t - T_GROW0) / (T_GROW1 - T_GROW0));
      hopP = mix(-0.05, HOP_MAX + 0.05, 1 - Math.pow(1 - s, 1.6));
      hopA = smooth(T_GROW0, T_GROW0 + 0.35, t) * (1 - smooth(T_GROW1, T_GROW1 + 1.1, t)) * 0.8;
      if (s < 1) grow = hopP;
    }
    anchor.grow = 1 - Math.pow(1 - clamp01((t - T_GROW0 + 0.25) / (T_GROW1 - T_GROW0 + 0.25)), 2.2);
    // the beat: the core swells and sends a comet out along the struts (nodes glint as it
    // arrives) while a raking light sweeps across every facet. Beat 0 is the arrival itself.
    let sweepA = 0;
    let sweepQ = -9;
    if (t >= T_IGNITE) {
      const k = Math.floor((t - T_IGNITE) / PULSE_PERIOD);
      const tp = t - T_IGNITE - k * PULSE_PERIOD;
      if (tp < SWEEP_LEN) {
        const s = tp / SWEEP_LEN;
        const [q0, q1] = sweepRange();
        sweepQ = mix(q0, q1, s * s * (3 - 2 * s) * 0.55 + s * 0.45);
        sweepA = Math.pow(Math.sin(Math.PI * s), 0.6);
      }
      if (k >= 1) {
        const run = HOP_MAX / HOP_SPEED;
        swell = Math.exp(-Math.pow((tp - 0.22) / 0.22, 2));
        hopP = (tp - 0.3) * HOP_SPEED;
        hopA = smooth(0.2, 0.4, tp) * (1 - smooth(run + 0.2, run + 1.2, tp));
      }
      if (live && k !== lastPulse) {
        lastPulse = k;
        firePulse(k === 0 ? { index: 0, ignite: true } : { index: k });
      }
    }
    shared.uHopP.value = hopP;
    shared.uHopA.value = hopA;
    shared.uGrow.value = grow;
    shared.uSweepQ.value = sweepQ;
    shared.uSweepA.value = sweepA;
    {
      const [q0, q1] = sweepRange();
      const phi = mix(-1.25, 1.25, clamp01((sweepQ - q0) / (q1 - q0)));
      shared.uSweepL.value.set(Math.sin(phi), 0.22, Math.cos(phi)).normalize();
      shared.uSweepE.value = sweepA;
    }

    // anchor (eased toward its home after a same-size re-layout; static renders snap)
    const gk = live && dt > 0 ? 1 - Math.exp(-dt * 2.4) : 1;
    anchor.cur.lerp(anchor.home, gk);
    anchor.rCur = mix(anchor.rCur, anchor.rWorld, gk);
    const ag = anchor.group;
    ag.position.set(
      anchor.cur.x + Math.sin(t * 0.07 + 1.0) * anchor.rCur * 0.03,
      anchor.cur.y + Math.sin(t * 0.055) * anchor.rCur * 0.045,
      anchor.cur.z,
    );
    ag.scale.setScalar(anchor.rCur);
    // the cage keeps its front pentagon turned to the camera, so no strut or node ever crosses
    // the core; it precesses a little (under the ~18 deg that would bring an edge over the core)
    // and turns slowly about that axis, while the glass counter-rotates freely inside
    toCam.copy(camera.position).sub(ag.position).normalize();
    camX.setFromMatrixColumn(camera.matrixWorld, 0);
    camY.setFromMatrixColumn(camera.matrixWorld, 1);
    toCam.addScaledVector(camX, Math.sin(t * 0.13 + 0.6) * 0.19).addScaledVector(camY, Math.sin(t * 0.097 + 2.1) * 0.15).normalize();
    qa.setFromUnitVectors(anchor.front, toCam);
    qb.setFromAxisAngle(anchor.front, t * 0.045 + 0.35);
    anchor.cage.quaternion.copy(qa).multiply(qb);
    anchor.cage.scale.setScalar(mix(0.5, 1, anchor.grow));
    qb.setFromAxisAngle(AX_GLASS, -t * 0.085);
    anchor.glass.quaternion.copy(qb).multiply(anchor.qg);
    anchor.glass.scale.setScalar(0.72 * mix(0.55, 1, anchor.grow));
    anchor.glass.material.uniforms.uFadeAll.value = smooth(0.5, 1.9, t);
    qb.setFromAxisAngle(AX_CORE, t * 0.28);
    anchor.core.quaternion.copy(qb);
    ag.updateMatrixWorld(true);
    anchor.core.getWorldPosition(shared.uCoreP.value);
    // the sweep warms the core as it passes the anchor
    const ndcAx = (anchor.px.x / W) * 2 - 1;
    const ndcAy = 1 - (anchor.px.y / H) * 2;
    const qd = ndcAx * shared.uAspect.value * 0.5 - ndcAy * 0.3 - sweepQ;
    const atA = Math.exp((-qd * qd * shared.uBandK.value) / 3) * sweepA;
    const breathe = (0.85 + 0.15 * Math.sin(t * 0.9)) * (1 + swell * 0.55);
    const ign = smooth(0.0, 0.9, t); // the core ignites inside the fallback glow
    shared.uCoreI.value = (1.0 + atA * 0.6) * breathe * ign;
    anchor.core.material.uniforms.uGlow.value = (1.7 + atA * 0.8) * breathe;
    anchor.core.material.uniforms.uFadeAll.value = ign;
    anchor.halo.material.uniforms.uI.value = (0.8 + atA * 0.4) * breathe;
    anchor.halo.material.uniforms.uFade.value = ign;
    tv.copy(shared.uCoreP.value).project(camera);
    shafts.uv.set(tv.x * 0.5 + 0.5, tv.y * 0.5 + 0.5);
    // the backdrop glow and the grade's focus follow the compound
    bgMat.uniforms.uFocus.value.copy(shafts.uv);
    bgMat.uniforms.uGlowC.value.set(shafts.uv.x, 1 - shafts.uv.y);
    finalPass.uniforms.uFocus.value.copy(shafts.uv);
    shafts.k = 0.5 * (1 + atA * 0.5) * breathe * smooth(0.6, 2.0, t);

    // the field
    let far = false;
    for (const o of objs) {
      o.vis = mix(o.vis, o.placed ? 1 : 0, gk);
      const g = o.group;
      g.visible = o.vis > 0.004;
      if (!g.visible) continue;
      if (o.layer === 1) far = true;
      o.cur.lerp(o.home, gk);
      o.rCur = mix(o.rCur, o.rWorld, gk);
      const a = o.driftW;
      g.position.set(
        o.cur.x + Math.sin(t * o.w.x + o.ph.x) * a * o.amp.x,
        o.cur.y + Math.sin(t * o.w.y + o.ph.y) * a * o.amp.y,
        o.cur.z + Math.sin(t * o.w.z + o.ph.z) * a * o.amp.z * 2,
      );
      g.scale.setScalar(o.rCur);
      qa.setFromAxisAngle(o.axis, t * o.spin);
      g.quaternion.copy(qa).multiply(o.q0);
      const f = smooth(o.delay, o.delay + 1.1, t) * o.vis;
      for (const p of o.parts) p.material.uniforms.uFadeO.value = f;
    }
    if (farUsed && !far) farClear = true;
    farUsed = far;
    finalPass.uniforms.uTime.value = t;
    finalPass.uniforms.uReveal.value = smooth(0.05, 1.35, t);
  }

  /* ---- loop control */
  const FRAME_MS = 1000 / 60;
  let time = 0;
  let lastRaf = 0;
  let lastRender = 0;
  let nextDue = 0;
  let rafAvg = FRAME_MS;
  let inView = true;
  // the page's detail dialog covers the hero (site.js fires "blitast:modal"): nothing to draw
  let modalOpen = document.documentElement.classList.contains("is-locked");
  let lost = false;
  let running = false;
  let booted = false;
  let bootToken = 0;
  let ro = null;
  let io = null;
  let avoidRO = null;
  let avoidTimer = 0;
  let resizeTimer = 0;

  // a jump of the clock never replays a pulse event for a skipped moment
  function jumpClock(t) {
    time = t;
    lastPulse = t >= T_IGNITE ? Math.floor((t - T_IGNITE) / PULSE_PERIOD) : -1;
  }
  if (reduced) jumpClock(T_STATIC);

  /* ---- quality governor
     It looks at what a frame costs, not only at the gap between frames: a browser that caps
     rAF at 30 Hz (energy saver, iOS Low Power Mode) must not be mistaken for a slow GPU.
     - GPU timer queries (EXT_disjoint_timer_query_webgl2) when available: the real GPU cost.
     - Otherwise the mean frame interval against the display interval, estimated from the
       fastest rAF cadence (the 20th percentile of rAF deltas, and the idle cadence at boot).
     90-frame windows, two heavy windows in a row to step down, and it steps back up when
     there is clear headroom (with back-off). */
  const gl = renderer.getContext();
  let timerExt = null;
  try {
    if (!(globalThis.HERO_DEBUG !== false && DEBUG && /heronotimer/.test(location.search))) timerExt = gl.getExtension("EXT_disjoint_timer_query_webgl2");
  } catch (e) {
    timerExt = null;
  }
  const gpuT = { active: null, pending: [], free: [] };
  function gpuReset() {
    gpuT.active = null;
    gpuT.pending.length = 0;
    gpuT.free.length = 0;
  }
  function gpuBegin() {
    if (!timerExt || gpuT.active || gpuT.pending.length > 5) return;
    const q = gpuT.free.pop() || gl.createQuery();
    if (!q) return;
    gl.beginQuery(timerExt.TIME_ELAPSED_EXT, q);
    gpuT.active = q;
  }
  function gpuEnd() {
    if (!gpuT.active) return;
    gl.endQuery(timerExt.TIME_ELAPSED_EXT);
    gpuT.pending.push(gpuT.active);
    gpuT.active = null;
  }
  function gpuPoll() {
    if (!timerExt || !gpuT.pending.length) return;
    const disjoint = gl.getParameter(timerExt.GPU_DISJOINT_EXT);
    while (gpuT.pending.length) {
      const q = gpuT.pending[0];
      if (!gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) break;
      const ns = gl.getQueryParameter(q, gl.QUERY_RESULT);
      gpuT.pending.shift();
      gpuT.free.push(q);
      if (!disjoint && ns > 0) gov.gpu.push(ns / 1e6);
    }
  }
  const median = (a) => {
    const s = a.slice().sort((x, y) => x - y);
    return s[s.length >> 1];
  };
  const pct = (a, p) => {
    const s = a.slice().sort((x, y) => x - y);
    return s[Math.min(s.length - 1, Math.floor(s.length * p))];
  };
  // relative GPU cost of each level (level 1 drops the shafts, the backdrop fbm and a blur pass, 2-3 step the DPR)
  const LEVEL_COST = [1, 0.8, 0.8 * 0.64, 0.8 * 0.41];
  function setLevel(level) {
    gov.level = level;
    gov.skip = 1; // let one window settle after a change
    gov.heavy = 0;
    gov.light = 0;
    applyQuality();
    if (globalThis.HERO_DEBUG !== false && DEBUG) console.warn(`[hero] governor -> level ${level}`);
  }
  function governorWindow() {
    const iv = gov.iv.slice().sort((a, b) => a - b);
    const trimmed = iv.slice(0, Math.max(1, Math.floor(iv.length * 0.95)));
    const meanIv = trimmed.reduce((a, b) => a + b, 0) / trimmed.length;
    const vsyncWin = gov.raf.length > 20 ? pct(gov.raf, 0.2) : FRAME_MS;
    const vsync = Math.min(vsyncWin, gov.idleVsync || vsyncWin);
    const slot = Math.max(FRAME_MS, vsync);
    const gpuMed = gov.gpu.length >= 20 ? median(gov.gpu) : -1;
    gov.iv.length = 0;
    gov.raf.length = 0;
    gov.gpu.length = 0;
    if (gov.skip > 0) {
      gov.skip -= 1;
      return;
    }
    let heavy;
    let light;
    if (gpuMed >= 0) {
      const budget = Math.max(FRAME_MS, vsyncWin) * 0.85;
      heavy = gpuMed > budget;
      const up = gov.level > 0 ? (gpuMed * LEVEL_COST[gov.level - 1]) / LEVEL_COST[gov.level] : Infinity;
      light = up < budget * 0.6;
    } else {
      heavy = meanIv > slot * 1.25 + 1.5;
      light = meanIv < Math.max(FRAME_MS, vsyncWin) * 1.06;
    }
    if (globalThis.HERO_DEBUG !== false && DEBUG) console.warn(`[hero] governor iv=${meanIv.toFixed(1)} vsync=${vsync.toFixed(1)} gpu=${gpuMed.toFixed(2)} level=${gov.level} heavy=${heavy} light=${light}`);
    if (heavy) {
      gov.light = 0;
      gov.heavy += 1;
      if (gov.probe) gov.backoff = Math.min(gov.backoff * 2, 16);
      gov.probe = false;
      if (gov.level < 3 && (gov.heavy >= 2 || meanIv > slot * 2)) setLevel(gov.level + 1);
      return;
    }
    gov.heavy = 0;
    gov.probe = false;
    if (!light || gov.level === 0) {
      gov.light = 0;
      return;
    }
    gov.light += 1;
    const need = gpuMed >= 0 ? 3 : 4 * gov.backoff;
    if (gov.light >= need) {
      setLevel(gov.level - 1);
      gov.probe = gpuMed < 0;
    }
  }
  function governorSample(interval) {
    if (interval > 200) return; // stalls (tab switches, GC) are not a resolution problem
    gov.iv.push(interval);
    if (gov.iv.length >= 90) governorWindow();
  }

  function show() {
    if (!lost && !dead) canvas.style.visibility = "";
  }
  function step(now) {
    const d = lastRaf ? now - lastRaf : 0;
    lastRaf = now;
    const sampling = time > T_SAMPLE;
    if (d > 0 && d < 200) {
      rafAvg += (d - rafAvg) * 0.1;
      if (sampling) gov.raf.push(d);
    }
    // pace to 60 fps on faster displays with a carried 16.67 ms budget, so 100 / 120 / 144 /
    // 165 Hz all average 60 fps; resync when more than a frame behind
    if (nextDue) {
      if (now < nextDue - Math.min(rafAvg, FRAME_MS) * 0.5) return;
      nextDue = now - nextDue > FRAME_MS ? now + FRAME_MS : nextDue + FRAME_MS;
    } else nextDue = now + FRAME_MS;
    const raw = lastRender ? now - lastRender : FRAME_MS;
    lastRender = now;
    const dt = Math.min(0.05, raw / 1000);
    let frozen = false;
    if (globalThis.HERO_DEBUG !== false && DEBUG) {
      const ft = window.__heroT;
      if (typeof ft === "number") time = ft;
      else if (FREEZE === FREEZE) time = FREEZE;
      frozen = typeof ft === "number" || FREEZE === FREEZE;
      if (/heroslow/.test(location.search)) {
        const until = performance.now() + 24;
        while (performance.now() < until);
      }
    }
    gpuPoll();
    update(time, dt, true);
    const timed = sampling && !frozen;
    if (timed) gpuBegin();
    renderFrame(dt);
    gpuEnd();
    show();
    time += dt; // the clock starts at the first rendered frame
    if (timed) governorSample(raw);
  }
  function frame(now) {
    if (dead) return;
    try {
      step(now);
    } catch (e) {
      fail(e);
    }
  }
  // the reduced-motion still (reduced mode only)
  function renderStatic() {
    if (lost || !booted || dead) return;
    try {
      update(T_STATIC, 0, false);
      renderFrame(0);
      show();
      // present the still once more after the canvas is shown: a single draw into a
      // non-preserved drawing buffer can be dropped by some compositors
      requestAnimationFrame(() => {
        if (reduced && !lost && !dead && !running) {
          try {
            update(T_STATIC, 0, false);
            renderFrame(0);
          } catch (e) {
            fail(e);
          }
        }
      });
    } catch (e) {
      fail(e);
    }
  }
  // motion mode while paused (offscreen / hidden tab): redraw the current moment after a
  // resize, without any side effects, so a stale or cleared canvas is never shown
  function renderPaused() {
    if (lost || !booted || dead || reduced || running) return;
    try {
      update(time, 0, false);
      renderFrame(0);
    } catch (e) {
      fail(e);
    }
  }
  function refresh() {
    if (!booted || dead) return;
    const should = !reduced && inView && !modalOpen && !document.hidden && !lost;
    if (should && !running) {
      running = true;
      lastRaf = 0;
      lastRender = 0;
      nextDue = 0;
      renderer.setAnimationLoop(frame);
    } else if (!should && running) {
      running = false;
      renderer.setAnimationLoop(null);
    }
  }
  fail = (e) => {
    if (dead) return;
    dead = true;
    running = false;
    canvas.style.visibility = "hidden";
    try {
      renderer.setAnimationLoop(null);
    } catch (x) {
      /* already gone */
    }
    clearTimeout(resizeTimer);
    clearTimeout(avoidTimer);
    if (ro) ro.disconnect();
    if (io) io.disconnect();
    if (avoidRO) avoidRO.disconnect();
    hero.removeEventListener("animationend", recheckAvoid);
    if (document.fonts && document.fonts.removeEventListener) document.fonts.removeEventListener("loadingdone", recheckAvoid);
    document.removeEventListener("visibilitychange", refresh);
    window.removeEventListener("blitast:modal", onModal);
    hero.classList.add("is-static");
    console.warn("[hero] 3D scene disabled:", e && e.message ? e.message : e);
  };
  function onModal(ev) {
    modalOpen = Boolean(ev && ev.detail && ev.detail.open);
    refresh();
  }

  /* ---- sizing: a new size is laid out when a drag-resize settles (the canvas just stretches for
     a moment), a big aspect jump (rotation) re-lays at once */
  let laidKey = "";
  let laidAspect = 0;
  function applyLayout() {
    resizeTimer = 0;
    if (dead) return;
    try {
      layout();
      laidKey = `${W}x${H}`;
      laidAspect = W / H;
      if (reduced) renderStatic();
      else renderPaused();
    } catch (e) {
      fail(e);
    }
  }
  function onResize() {
    if (dead || !bootToken) return; // the boot task lays out; the observer's first call is redundant
    const w = Math.max(1, hero.clientWidth || window.innerWidth);
    const h = Math.max(1, hero.clientHeight || window.innerHeight);
    const key = `${w}x${h}`;
    if (key === laidKey) return;
    clearTimeout(resizeTimer);
    const jump = Math.abs(w / h / laidAspect - 1) > 0.2;
    if (!laidKey || jump) applyLayout();
    else resizeTimer = setTimeout(applyLayout, 140);
  }
  const listen = (mq, fn) => {
    if (mq.addEventListener) mq.addEventListener("change", fn);
    else if (mq.addListener) mq.addListener(fn);
  };
  const unlisten = (mq, fn) => {
    if (mq.removeEventListener) mq.removeEventListener("change", fn);
    else if (mq.removeListener) mq.removeListener(fn);
  };
  // a DPR change without a CSS resize (window dragged to another monitor, zoom)
  let dprMQ = null;
  function watchDpr() {
    if (dprMQ) unlisten(dprMQ, onDpr);
    try {
      dprMQ = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      listen(dprMQ, onDpr);
    } catch (e) {
      dprMQ = null;
    }
  }
  function onDpr() {
    watchDpr();
    laidKey = "";
    onResize();
  }

  watchDpr();
  ro = new ResizeObserver(onResize);
  ro.observe(hero);
  // the copy the field keeps clear of can change size by itself (web fonts, the latest-update chip)
  const avoidEls = hero.querySelectorAll("[data-hero-avoid]");
  function recheckAvoid() {
    if (dead || !bootToken) return;
    clearTimeout(avoidTimer);
    avoidTimer = setTimeout(() => {
      if (dead || sameAvoid(avoidSig(measureAvoid(hero)), lastAvoidSig)) return;
      glideNext = true;
      laidKey = "";
      onResize();
    }, 160);
  }
  if (avoidEls.length) {
    avoidRO = new ResizeObserver(recheckAvoid);
    for (const el of avoidEls) avoidRO.observe(el);
    // entrance transforms move the measured ink; settle once they finish
    hero.addEventListener("animationend", recheckAvoid);
    // a late web font (the JP face) can change the copy's ink without resizing its box
    if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", recheckAvoid);
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) inView = entry.isIntersecting;
      refresh();
    },
    { threshold: 0 },
  );
  io.observe(hero);
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("blitast:modal", onModal);
  const onReduceChange = () => {
    if (dead) return;
    const was = reduced;
    reduced = mqReduce.matches && !motionOptIn();
    if (reduced === was) return;
    // the still is always the composed moment; motion resumes from it
    jumpClock(T_STATIC);
    refresh();
    if (reduced) renderStatic();
  };
  listen(mqReduce, onReduceChange);
  window.addEventListener("blitast:motion", onReduceChange);
  canvas.addEventListener(
    "webglcontextlost",
    (ev) => {
      ev.preventDefault();
      lost = true;
      canvas.style.visibility = "hidden";
      bootToken += 1; // abandon any boot in progress
      if (running) {
        running = false;
        renderer.setAnimationLoop(null);
      }
      gpuReset();
    },
    false,
  );
  canvas.addEventListener(
    "webglcontextrestored",
    () => {
      if (dead) return;
      lost = false;
      gpuReset();
      // the render targets still carry dispose hooks bound to the lost context's objects: drop
      // them so the next resize does not delete stale handles (three re-registers on first use)
      const targets = [composer.renderTarget1, composer.renderTarget2, bloom.renderTargetBright, ...bloom.renderTargetsHorizontal, ...bloom.renderTargetsVertical, shafts.rt, shafts.tmp];
      for (const L of farLayers) targets.push(L.rt, L.tmp);
      for (const target of targets) {
        for (const o of [target, ...(target.textures || [target.texture])]) if (o && o._listeners) delete o._listeners.dispose;
      }
      try {
        if (timerExt) timerExt = gl.getExtension("EXT_disjoint_timer_query_webgl2");
      } catch (e) {
        timerExt = null;
      }
      // the same path as the first boot: hidden canvas, async compile, chunked warm-up, then show
      startBoot();
    },
    false,
  );

  /* ---- boot: precompile every program, warm up in small chunks while the canvas is still
     hidden (a few draws per frame, no long task), then start the clock at the first frame */
  const revealAll = () => {
    const hidden = [];
    scene.traverse((o) => {
      if (!o.visible) {
        hidden.push(o);
        o.visible = true;
      }
    });
    return hidden;
  };
  const postScene = new THREE.Scene();
  const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  {
    // same attributes as the passes' FullScreenQuad (position + uv, no normal) so the
    // program cache keys match what the composer will actually draw
    const quad = new THREE.BufferGeometry();
    quad.setAttribute("position", new THREE.Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
    quad.setAttribute("uv", new THREE.Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
    const postMats = [bloom.materialHighPassFilter, ...bloom.separableBlurMaterials, bloom.compositeMaterial, bloom.blendMaterial, finalPass.material, blurMat, shaftMat];
    for (const m of postMats) {
      const q = new THREE.Mesh(quad, m);
      q.frustumCulled = false;
      postScene.add(q);
    }
  }
  const warmCam = new THREE.PerspectiveCamera();
  function warmChunks() {
    const items = [];
    scene.traverse((o) => {
      if (o.isMesh || o.isPoints || o.isLine) items.push(o);
    });
    const chunks = [];
    for (let i = 0; i < items.length; i += 4) chunks.push(items.slice(i, i + 4));
    return chunks;
  }
  // draw just these objects once into the scene target (their own layer, everything revealed)
  function warmDraw(chunk, k) {
    const layer = 3 + (k % 28);
    const saved = chunk.map((o) => o.layers.mask);
    for (const o of chunk) o.layers.enable(layer);
    warmCam.copy(camera);
    warmCam.layers.set(layer);
    const hidden = revealAll();
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(composer.readBuffer);
    renderer.render(scene, warmCam);
    renderer.setRenderTarget(prev);
    for (const o of hidden) o.visible = false;
    chunk.forEach((o, i) => {
      o.layers.mask = saved[i];
    });
  }
  // the far layers, the bloom chain and the grade, with an empty scene pass
  function warmPost() {
    const mask = camera.layers.mask;
    camera.layers.disableAll();
    renderFrame(0);
    camera.layers.mask = mask;
  }
  function finishBoot() {
    booted = true;
    if (globalThis.HERO_DEBUG !== false && DEBUG) console.warn(`[hero] booted, idle vsync ${gov.idleVsync ? gov.idleVsync.toFixed(1) : "?"}ms, gpu timer ${!!timerExt}`);
    if (reduced) renderStatic();
    else {
      refresh();
      if (!running) renderPaused();
    }
  }
  function warmUp(token) {
    const chunks = warmChunks();
    let i = 0;
    let prev = 0;
    const deltas = [];
    const tick = (now) => {
      if (token !== bootToken || dead || lost) return;
      if (prev) deltas.push(now - prev);
      prev = now;
      try {
        if (i === 0) update(reduced ? T_STATIC : time, 0, false);
        const t0 = performance.now();
        do {
          if (i < chunks.length) warmDraw(chunks[i], i);
          else warmPost();
          i += 1;
        } while (i <= chunks.length && performance.now() - t0 < 5);
      } catch (e) {
        fail(e);
        return;
      }
      if (i <= chunks.length) {
        requestAnimationFrame(tick);
        return;
      }
      if (deltas.length >= 3) gov.idleVsync = Math.max(4, Math.min(...deltas));
      finishBoot();
    };
    requestAnimationFrame(tick);
  }
  function startBoot() {
    const token = ++bootToken;
    booted = false;
    canvas.style.visibility = "hidden";
    let started = false;
    const go = () => {
      if (started || token !== bootToken || dead || lost) return;
      started = true;
      warmUp(token);
    };
    try {
      layout();
      laidKey = `${W}x${H}`;
      laidAspect = W / H;
      update(reduced ? T_STATIC : time, 0, false);
      // everything that can ever be drawn must be visible for the compile pass
      const hidden = revealAll();
      const tc = performance.now();
      const jobs = [renderer.compileAsync(scene, camera), renderer.compileAsync(postScene, postCam), renderer.compileAsync(shafts.scene, camera)];
      for (const o of hidden) o.visible = false;
      if (globalThis.HERO_DEBUG !== false && DEBUG) {
        console.warn(`[hero] compile issued in ${(performance.now() - tc).toFixed(1)}ms, programs ${renderer.info.programs.length}`);
        Promise.all(jobs).then(() => console.warn(`[hero] compile resolved after ${(performance.now() - tc).toFixed(1)}ms`));
      }
      Promise.all(jobs).then(go, go);
    } catch (e) {
      go();
    }
    // only a guard against a promise that never settles, not a deadline
    setTimeout(go, 7000);
  }
  setTimeout(() => {
    if (!dead && !booted && bootToken === 0) startBoot();
  }, 0);
}

/* ------------------------------------------------------------------ boot */
// The hero is looked up only once the document is parsed: a cached copy of this script can run
// while the HTML is still loading (index.html loads it with defer, this guards any other loader).
function boot() {
  const heroEl = document.querySelector("section.hero");
  const heroCanvas = heroEl ? heroEl.querySelector("canvas#hero-canvas") : null;
  if (!heroEl || !heroCanvas) return;
  const start = () => {
    try {
      mount(heroCanvas, heroEl);
    } catch (error) {
      heroCanvas.style.display = "none";
      heroEl.classList.add("is-static");
      console.warn("[hero] 3D scene unavailable:", error);
    }
  };
  // Mount after the first paint, once the page script has filled the hero copy (DOMContentLoaded)
  // and the web fonts have settled (or 1.5 s passed), so the field is placed against the final copy.
  const afterPaint = () => {
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => setTimeout(start, 0));
    else start();
  };
  const whenFonts = () => {
    const fonts = document.fonts && document.fonts.ready;
    if (!fonts) return afterPaint();
    let done = false;
    const once = () => {
      if (done) return;
      done = true;
      afterPaint();
    };
    fonts.then(once, once);
    setTimeout(once, 1500);
  };
  whenFonts();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
