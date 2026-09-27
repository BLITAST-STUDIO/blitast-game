// BLITAST GAME — hero "Small Worlds" (final)
// 小さな世界を、ひとつずつ。
//
// Intro: a coral / cyan particle vortex condenses into the BLITAST mark (three
// slanted prism bars), holds, implodes into a point and ignites the forge
// core. The core then births seven small, distinct worlds one by one. After the
// intro the particle system is retired down to a few hundred GPU embers.
// Everything is procedural (no textures, no network).
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

/* ------------------------------------------------------------------ utils */
const TAU = Math.PI * 2;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => {
  const x = clamp01((v - a) / (b - a));
  return x * x * (3 - 2 * x);
};
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const easeOutBack = (x) => 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2);
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
const T_LAND0 = 1.0; // first particles land on the mark
const T_LAND_SPREAD = 0.62; // ...last ones by T_LAND0 + spread
const T_SHINE = 1.62; // light sweep across the finished mark
const T_COLLAPSE = 2.26; // the mark implodes
const T_COLLAPSE_LEN = 0.34;
const T_IGN = T_COLLAPSE + T_COLLAPSE_LEN; // forge core ignites
const BIRTH0 = T_IGN + 0.5;
const BIRTH_GAP = 0.3;
const PULSE0 = T_IGN + 5.9;
const PULSE_PERIOD = 6.8;
const T_STATIC = T_IGN + 9.4; // reduced motion still
const CAM_NEAR = 0.8; // intro camera distance factor
const CORE_R = 1.22; // forge core radius (world units)

/* ------------------------------------------------------------------ GLSL */
// Simplex noise by Ian McEwan / Ashima Arts (MIT).
const NOISE3 = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){float f=0.0,a=0.5;for(int i=0;i<4;i++){f+=a*snoise(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=0.5;}return f;}
`;

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

// Simplex noise with analytic gradient -> curl flow for the intro vortex.
const CURL = /* glsl */ `
vec3 c289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 c289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 cperm(vec4 x){return c289(((x*34.0)+10.0)*x);}
vec3 snoiseGrad(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=c289(i);
  vec4 p=cperm(cperm(cperm(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=1.79284291400159-0.85373472095314*vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  vec4 m2=m*m;
  vec4 m4=m2*m2;
  vec4 pdotx=vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3));
  vec4 temp=m2*m*pdotx;
  vec3 grad=-8.0*(temp.x*x0+temp.y*x1+temp.z*x2+temp.w*x3);
  grad+=m4.x*p0+m4.y*p1+m4.z*p2+m4.w*p3;
  return grad*105.0;
}
vec3 curl(vec3 p){return cross(snoiseGrad(p),snoiseGrad(p+vec3(31.416,-47.853,12.793)));}
`;

// Linear-space brand colours.
const GLSL_COLORS = /* glsl */ `
const vec3 CORAL=vec3(1.0,0.216,0.113);
const vec3 CYAN=vec3(0.323,0.768,0.855);
const vec3 CREAM=vec3(0.896,0.871,0.815);
const vec3 GOLD=vec3(1.0,0.62,0.30);
const vec3 WELD=vec3(1.0,0.527,0.162);
`;
// Linear inputs that land on the brand colours after the grade (Khronos Neutral + sRGB +
// the #080b10 ink lift): coral bar -> ~(248,126,93), cream bars -> ~(236,233,226). Both
// stay under the bloom threshold (luminance 0.50 / 0.89) so the mark reads as solid colour.
const MARK_CORAL = [1.47, 0.248, 0.077];
const MARK_CREAM = [0.91, 0.883, 0.819];

const SUN = "const vec3 SUN=vec3(1.0,0.74,0.60)*2.35;";

/* ------------------------------------------------------------------ materials */
function planetMaterial(type, shared, extra) {
  return new THREE.ShaderMaterial({
    defines: { TYPE: type },
    uniforms: {
      uTime: shared.uTime,
      uCoreDist: shared.uCoreDist,
      uHot: { value: 0 },
      uWave: { value: 0 },
      uAtmo: { value: lin(extra.atmo) },
      uTint: { value: lin(extra.tint || 0xffffff) },
      uSeed: { value: extra.seed || 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      void main(){
        vO = position;
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uHot, uWave, uCoreDist, uSeed;
      uniform vec3 uAtmo, uTint;
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      ${NOISE3}
      ${GLSL_COLORS}
      ${SUN}
      void main(){
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        if (dot(N, V) < 0.0) N = -N;
        vec3 L = normalize(-vW);
        float ndl = dot(N, L);
        float mu = clamp(dot(N, V), 0.0, 1.0);
        vec3 p = normalize(vO) + uSeed;
        vec3 alb = vec3(0.5);
        vec3 emi = vec3(0.0);
        float spec = 0.0; float shin = 32.0;
        float fillK = 1.0; float rimK = 1.0;
        float fres = pow(1.0 - mu, 3.0);
        float night = 1.0 - smoothstep(-0.3, 0.2, ndl);
      #if TYPE == 0
        // Ember world: obsidian crust split by glowing coral fissures (horror).
        // basalt crust lit by the core (a readable day side and terminator); the fissures
        // only really glow on the night side
        // a few wide lava rivers in active zones between dark basalt plates (legible at ~35 px)
        float n = fbm(p * 2.2);
        float zone = smoothstep(-0.05, 0.4, fbm(p * 0.9 + vec3(3.3)));
        float cr = 1.0 - abs(snoise(p * 1.35 + n * 0.6));
        float cr2 = 1.0 - abs(snoise(p * 3.0 - n));
        float cracks = (pow(cr, 12.0) + 0.3 * pow(cr2, 26.0)) * zone;
        alb = mix(vec3(0.09, 0.06, 0.05), vec3(0.22, 0.14, 0.1), smoothstep(-0.4, 0.6, n));
        alb *= 1.0 - 0.5 * smoothstep(0.35, 0.9, cr) * zone;
        float pulse = 0.78 + 0.22 * sin(uTime * 2.1 + p.x * 4.0);
        emi = vec3(1.0, 0.26, 0.1) * cracks * (0.3 + 1.9 * night) * pulse + vec3(0.4, 0.06, 0.02) * 0.06 * night * zone;
        spec = 0.3; shin = 26.0; rimK = 0.5;
      #elif TYPE == 1
        // Ocean world with drifting clouds and a sharp sun glint.
        float n = fbm(p * 1.55 + vec3(3.1));
        float land = smoothstep(0.1, 0.16, n);
        float coast = smoothstep(-0.06, 0.1, n) * (1.0 - land);
        vec3 ocean = mix(vec3(0.003, 0.03, 0.12), vec3(0.01, 0.22, 0.42), coast);
        vec3 ground = mix(vec3(0.05, 0.17, 0.08), vec3(0.40, 0.32, 0.18), smoothstep(0.22, 0.48, n));
        alb = mix(ocean, ground, land);
        alb = mix(alb, vec3(0.9, 0.95, 1.0), smoothstep(0.78, 0.9, abs(normalize(vO).y) + n * 0.1));
        float cl = smoothstep(0.05, 0.55, fbm(p * 2.4 + vec3(uTime * 0.025, 0.0, uTime * 0.01)));
        alb = mix(alb, vec3(0.95), cl * 0.75);
        spec = (1.0 - land) * (1.0 - cl) * 2.6; shin = 90.0;
      #elif TYPE == 2
        // Night city world: dusk-violet land dotted with warm lights.
        float n = fbm(p * 1.9 + vec3(7.0));
        alb = mix(vec3(0.02, 0.022, 0.05), vec3(0.055, 0.06, 0.11), smoothstep(-0.3, 0.5, n));
        float cont = smoothstep(-0.08, 0.22, n);
        float c1 = snoise(p * 26.0);
        float c2 = snoise(p * 8.0 + 3.0);
        float city = smoothstep(0.42, 0.8, c1) * cont * smoothstep(-0.15, 0.45, c2);
        emi = vec3(1.0, 0.56, 0.22) * city * (0.3 + 3.6 * night);
        spec = 0.3; shin = 30.0;
      #elif TYPE == 3
        // Candy cloud world: soft pastel bands (kids' games) that glow gently at night.
        vec3 q = normalize(vO);
        float w = fbm(p * 1.3 + vec3(0.0, uTime * 0.03, 0.0));
        float b = q.y * 3.2 + w * 0.55;
        vec3 PINK = vec3(1.0, 0.46, 0.62);
        vec3 CRM = vec3(1.0, 0.86, 0.64);
        vec3 LAV = vec3(0.58, 0.48, 1.0);
        vec3 MINT = vec3(0.38, 0.92, 0.76);
        vec3 c = mix(PINK, CRM, smoothstep(-0.25, 0.25, sin(b * 2.6)));
        c = mix(c, LAV, smoothstep(0.55, 0.85, sin(b * 1.3 + 2.2)));
        c = mix(c, MINT, smoothstep(0.82, 0.97, sin(b * 1.9 + 0.6)));
        float puff = smoothstep(0.1, 0.65, fbm(p * 3.4 + w * 1.5));
        c = mix(c, vec3(1.0, 0.95, 0.97), puff * 0.28);
        alb = c * 0.9;
        // a gentle night-side glow so it reads as candy, never as a second light source
        emi = c * (0.2 * night + 0.03) * (0.5 + 0.5 * mu);
        spec = 0.22; shin = 18.0; fillK = 2.6; rimK = 0.3;
      #elif TYPE == 4
        // Prismatic crystal world (faceted, thin-film sheen).
        // every facet catches its own colour: a cut gem, not a bubble
        vec3 fn = normalize(vN);
        float fh = fract(sin(dot(floor(fn * 7.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
        float h = fract(fh * 0.8 + dot(fn, vec3(0.31, 0.72, 0.22)) * 0.6 + fres * 0.5 + uTime * 0.03);
        vec3 irid = mix(CYAN, vec3(0.30, 0.18, 1.0), smoothstep(0.0, 0.5, h));
        irid = mix(irid, CORAL, smoothstep(0.55, 1.0, h));
        float glint = pow(fh, 5.0);
        alb = vec3(0.03, 0.035, 0.06) + irid * 0.14;
        emi = irid * (0.03 + 0.35 * pow(fres, 1.6) + 0.5 * glint) + irid * 0.05 * (0.4 + fh);
        spec = 3.4; shin = 140.0; rimK = 0.3;
      #elif TYPE == 5
        // Ringed giant: cream / gold / coral bands with a storm.
        vec3 q = normalize(vO);
        float w = fbm(vec3(q.x * 2.0, q.y * 7.0, q.z * 2.0) + vec3(uTime * 0.012, 0.0, 0.0));
        float lat = q.y + w * 0.07;
        float bands = sin(lat * 17.0) * 0.5 + 0.5;
        float bands2 = sin(lat * 6.0 + 1.3) * 0.5 + 0.5;
        vec3 c = mix(vec3(0.74, 0.46, 0.26), vec3(0.96, 0.84, 0.64), bands);
        c = mix(c, vec3(0.84, 0.26, 0.14), smoothstep(0.62, 1.0, bands2) * 0.75);
        c = mix(c, vec3(0.26, 0.12, 0.10), smoothstep(0.7, 1.0, sin(lat * 33.0 + w * 3.0)) * 0.3);
        float sd = distance(q, normalize(vec3(0.7, -0.28, 0.66)));
        c = mix(c, vec3(0.95, 0.40, 0.22), smoothstep(0.24, 0.1, sd + w * 0.05) * 0.85);
        alb = c * 0.82;
        spec = 0.12; shin = 14.0; rimK = 0.55;
      #else
        // Moon-lit ice world.
        float n = fbm(p * 3.2);
        float mare = smoothstep(0.0, 0.3, fbm(p * 1.2 + 5.0));
        float cr = pow(1.0 - abs(snoise(p * 7.0)), 10.0);
        alb = mix(uTint, uTint * 0.42, mare) * (0.82 + 0.28 * n) + cr * 0.1;
        spec = 0.5; shin = 40.0;
      #endif
        float wrap = 0.1;
        float dif = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
        vec3 fillL = normalize(V + vec3(-0.3, 0.7, 0.0));
        float fill = max(dot(N, fillL), 0.0) * (1.0 - smoothstep(-0.1, 0.5, ndl));
        vec3 col = alb * (SUN * dif + vec3(0.006, 0.009, 0.018) + vec3(0.05, 0.065, 0.11) * fill * fillK);
        vec3 H = normalize(L + V);
        col += SUN * spec * pow(max(dot(N, H), 0.0), shin) * smoothstep(0.0, 0.25, ndl);
        col += emi;
        // atmosphere / rim light: a thin line (not an outline), brighter on the day side and
        // when a pulse passes
        float rim = pow(1.0 - mu, 5.0);
        col += uAtmo * rim * rimK * (0.06 + 0.9 * smoothstep(-0.25, 0.7, ndl)) * (1.0 + uWave * 2.5);
        // cool back-rim so the night side still reads against space
        col += CYAN * pow(fres, 1.6) * 0.04 * rimK * night;
        // depth cue
        float dd = length(cameraPosition - vW) - uCoreDist;
        col *= mix(1.0, 0.6, smoothstep(-2.0, 9.0, dd));
        // birth heat: a molten ember lit by the core (terminator + rim), never a flat disc;
        // it cross-dissolves straight into the world's own material
        float lit = smoothstep(-0.35, 0.8, ndl);
        vec3 hot = mix(vec3(0.14, 0.02, 0.01), vec3(0.78, 0.2, 0.07), lit) * (0.55 + 0.45 * mu);
        hot += vec3(1.0, 0.5, 0.2) * 0.2 * pow(max(ndl, 0.0), 3.0) * mu;
        hot += mix(CORAL, CYAN, 0.35) * rim * 0.5;
        col = mix(col, hot, uHot);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}

function atmosphereMaterial(shared, color, strength, shellScale) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uAtmo: { value: lin(color) },
      uStrength: { value: strength },
      uInner: { value: Math.sqrt(1 - 1 / (shellScale * shellScale)) },
      uWave: { value: 0 },
      uHot: { value: 0 },
      uCoreDist: shared.uCoreDist,
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vW;
      void main(){
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uAtmo; uniform float uStrength, uInner, uWave, uHot, uCoreDist;
      varying vec3 vN; varying vec3 vW;
      ${GLSL_COLORS}
      void main(){
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        vec3 L = normalize(-vW);
        float d = clamp(-dot(N, V) / uInner, 0.0, 1.0);
        float glow = d * d * (3.0 - 2.0 * d);
        glow *= glow;
        float lit = 0.06 + 1.1 * smoothstep(-0.35, 0.65, dot(N, L));
        float dd = length(cameraPosition - vW) - uCoreDist;
        float depth = mix(1.0, 0.6, smoothstep(-2.0, 9.0, dd));
        vec3 col = mix(uAtmo, CORAL, uHot) * glow * lit * uStrength * (1.0 + uWave * 2.0 + uHot * 0.8) * depth;
        gl_FragColor = vec4(col, 1.0);
      }`,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function ringMaterial(inner, outer) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uInner: { value: inner },
      uOuter: { value: outer },
      uPlanetPos: { value: new THREE.Vector3() },
      uPlanetR: { value: 1 },
      uNormal: { value: new THREE.Vector3(0, 1, 0) },
      uReveal: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vW; varying vec2 vP;
      void main(){
        vP = position.xy;
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uInner, uOuter, uPlanetR, uReveal;
      uniform vec3 uPlanetPos, uNormal;
      varying vec3 vW; varying vec2 vP;
      ${GLSL_COLORS}
      ${SUN}
      void main(){
        float x = (length(vP) - uInner) / (uOuter - uInner);
        // band-limited stripes: each octave fades out before it can alias (x changes by
        // fw per pixel), so the ring stays smooth instead of stair-stepped moire
        float fw = max(fwidth(x), 1e-4);
        float a1 = clamp(1.0 - pow(fw * 60.0 / 2.9, 2.0), 0.0, 1.0);
        float a2 = clamp(1.0 - pow(fw * 170.0 / 2.9, 2.0), 0.0, 1.0);
        float bands = 0.5 + 0.5 * sin(x * 42.0 + sin(x * 9.0) * 2.4) * a1;
        bands = mix(0.35, 1.0, bands) * (0.85 + 0.15 * sin(x * 170.0) * a2);
        bands *= smoothstep(0.0, 0.05 + fw, x) * smoothstep(1.0, 0.86 - fw, x);
        bands *= 1.0 - 0.92 * smoothstep(0.035 + fw, 0.0, abs(x - 0.63)) * clamp(0.035 / (0.035 + fw), 0.0, 1.0);
        vec3 L = normalize(-vW);
        vec3 oc = vW - uPlanetPos;
        float b = dot(oc, L);
        // distance from the planet's shadow axis; a 2-3 px penumbra instead of a hard edge
        float dperp = sqrt(max(dot(oc, oc) - b * b, 0.0));
        float pw = max(fwidth(dperp), 1e-4) * 2.5;
        float shadow = 1.0 - 0.88 * (1.0 - smoothstep(uPlanetR - pw, uPlanetR + pw * 0.4, dperp)) * smoothstep(0.05, -0.1, b);
        float lit = 0.3 + 0.7 * abs(dot(normalize(uNormal), L));
        vec3 col = mix(vec3(0.95, 0.74, 0.55), CYAN * 0.95, smoothstep(0.35, 1.0, x) * 0.55);
        col *= SUN * 0.5 * lit * shadow;
        float a = bands * 0.8 * uReveal;
        gl_FragColor = vec4(col * a, a);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
  });
}

// Screen-space ribbon used for the orbit lines (with a trail that follows each world).
function circleGeometry(segments) {
  const count = (segments + 1) * 2;
  const pos = new Float32Array(count * 3);
  const next = new Float32Array(count * 3);
  const side = new Float32Array(count);
  const u = new Float32Array(count);
  for (let i = 0; i <= segments; i += 1) {
    const a = (i / segments) * TAU;
    const b = ((i + 1) / segments) * TAU;
    for (let s = 0; s < 2; s += 1) {
      const k = i * 2 + s;
      pos.set([Math.cos(a), 0, Math.sin(a)], k * 3);
      next.set([Math.cos(b), 0, Math.sin(b)], k * 3);
      side[k] = s ? 1 : -1;
      u[k] = i / segments;
    }
  }
  const index = [];
  for (let i = 0; i < segments; i += 1) {
    const k = i * 2;
    index.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("aNext", new THREE.BufferAttribute(next, 3));
  g.setAttribute("aSide", new THREE.BufferAttribute(side, 1));
  g.setAttribute("aU", new THREE.BufferAttribute(u, 1));
  g.setIndex(index);
  return g;
}

function ribbonMaterial(shared, o) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uRes: shared.uRes,
      uPx: shared.uPx,
      uCoreDist: shared.uCoreDist,
      uFade: shared.uFade,
      uWidth: { value: o.width ?? 1.0 },
      uBoost: { value: o.boost ?? 1.0 },
      uPhase: { value: 0 },
      uReveal: { value: o.reveal ?? 1 },
      uBase: { value: o.base ?? 0.05 },
      uTrail: { value: o.trail ?? 0 },
      uTrailLen: { value: o.trailLen ?? 0.3 },
      uColor: { value: lin(o.color ?? 0x9ae3ee) },
      uTrailColor: { value: lin(o.trailColor ?? 0xff805f) },
      uGain: { value: o.gain ?? 1 },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aNext; attribute float aSide; attribute float aU;
      uniform vec2 uRes; uniform float uPx, uWidth, uBoost, uPhase, uTrailLen;
      varying float vU; varying float vSide; varying float vDepth; varying float vTrail;
      void main(){
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 a = mvp * vec4(position, 1.0);
        vec4 b = mvp * vec4(aNext, 1.0);
        vec2 sa = a.xy / a.w * uRes;
        vec2 sb = b.xy / b.w * uRes;
        vec2 dir = sb - sa;
        float l = length(dir);
        dir = l > 1e-5 ? dir / l : vec2(1.0, 0.0);
        vec2 n = vec2(-dir.y, dir.x);
        float d = fract(uPhase - aU);
        float trail = pow(max(1.0 - d / uTrailLen, 0.0), 2.0);
        float w = uWidth * uPx * (1.0 + trail * uBoost) + 1.0;
        a.xy += n * aSide * w / uRes * a.w;
        gl_Position = a;
        vU = aU; vSide = aSide; vTrail = trail;
        vDepth = -(modelViewMatrix * vec4(position, 1.0)).z;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uPhase, uReveal, uBase, uTrail, uCoreDist, uFade, uGain, uTrailLen;
      uniform vec3 uColor, uTrailColor;
      varying float vU; varying float vSide; varying float vDepth; varying float vTrail;
      void main(){
        float d = fract(uPhase - vU);
        float a = uBase + vTrail * uTrail;
        a *= step(d, uReveal);
        float edge = 1.0 - smoothstep(0.25, 1.0, abs(vSide));
        float depth = mix(1.2, 0.3, smoothstep(uCoreDist - 7.0, uCoreDist + 8.0, vDepth));
        vec3 col = mix(uColor, uTrailColor, clamp(vTrail * 1.2, 0.0, 1.0));
        gl_FragColor = vec4(col * a * edge * depth * uFade * uGain, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

/* ------------------------------------------------------------------ the BLITAST mark (favicon.svg) */
// Three bars in y-up svg units centred on the 32x32 icon, rotated +16deg (svg rotate(-16)).
const MARK_BARS = [
  { x0: -11, x1: -6, y0: -12, y1: 3, coral: false },
  { x0: -3, x1: 2, y0: -12, y1: 11, coral: true },
  { x0: 5, x1: 10, y0: -3, y1: 12, coral: false },
];
const MARK_U = 1 / 12; // svg units -> mark units (the tall bar is ~2 units)
const MARK_D = 2.1; // half depth of the prisms, svg units
const MARK_ROT = (16 * Math.PI) / 180;
const MARK_RING = 1.62; // aura ring radius (mark units)

function buildIntroGeometry(N, K) {
  const R = rng(0x5eed1e55);
  const gauss = () => {
    let u = 0;
    while (u === 0) u = R();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * R());
  };
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N * 4);
  const col = new Uint8Array(N * 4);
  const kind = new Float32Array(N); // float: an integer vertex format makes ANGLE build a VS variant at first draw
  const cs = Math.cos(MARK_ROT);
  const sn = Math.sin(MARK_ROT);
  const heights = MARK_BARS.map((b) => b.y1 - b.y0 + 6);
  const hSum = heights.reduce((a, b) => a + b, 0);
  const pickBar = () => {
    let r = R() * hSum;
    for (let k = 0; k < MARK_BARS.length; k += 1) {
      if (r < heights[k]) return MARK_BARS[k];
      r -= heights[k];
    }
    return MARK_BARS[1];
  };
  const CREAM = [243, 240, 233];
  const CORAL = [255, 128, 95];
  const CYAN = [154, 227, 238];
  const GOLDc = [255, 206, 150];
  const mixC = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const out = 0.22; // push samples slightly off the faces so they pass the prism depth test
  for (let i = 0; i < N; i += 1) {
    let c;
    let inten;
    let k;
    if (R() < 0.8) {
      const b = pickBar();
      const w = b.x1 - b.x0;
      const h = b.y1 - b.y0;
      let x = b.x0 + R() * w;
      let y = b.y0 + R() * h;
      let z = (R() * 2 - 1) * MARK_D;
      const t = R();
      const base = b.coral ? CORAL : CREAM;
      if (t < 0.36) {
        // edges: the crisp silhouette
        const e = R();
        const sx = R() < 0.5 ? b.x0 - out : b.x1 + out;
        const sy = R() < 0.5 ? b.y0 - out : b.y1 + out;
        const sz = R() < 0.62 ? MARK_D + out : -MARK_D - out;
        if (e < 0.58) {
          x = sx;
          z = sz;
        } else if (e < 0.86) {
          y = sy;
          z = sz;
        } else {
          x = sx;
          y = sy;
        }
        c = b.coral ? mixC(CORAL, GOLDc, 0.15) : CREAM;
        inten = sz > 0 ? 0.36 : 0.18;
        k = 1;
      } else {
        const f = R();
        if (f < 0.62) {
          z = MARK_D + out;
          inten = 0.13;
          c = base;
        } else if (f < 0.72) {
          z = -MARK_D - out;
          inten = 0.06;
          c = base;
        } else {
          x = R() < 0.5 ? b.x0 - out : b.x1 + out;
          inten = 0.1;
          c = b.coral ? mixC(CORAL, [255, 104, 120], 0.3) : mixC(CREAM, CYAN, 0.5);
        }
        k = 0;
      }
      const cx = x + 0.5;
      pos[i * 3] = (cx * cs - y * sn) * MARK_U;
      pos[i * 3 + 1] = (cx * sn + y * cs) * MARK_U;
      pos[i * 3 + 2] = z * MARK_U;
    } else {
      // aura ring around the mark: stored as (radius, angle, height), orbited in the shader
      const r = MARK_RING + gauss() * 0.022 + (R() < 0.15 ? gauss() * 0.09 : 0);
      pos[i * 3] = r;
      pos[i * 3 + 1] = R() * TAU;
      pos[i * 3 + 2] = gauss() * 0.008;
      const t = R();
      c = t < 0.66 ? mixC(CYAN, CREAM, R() * 0.4) : t < 0.86 ? CORAL : CREAM;
      inten = 0.3 + R() * 0.25;
      k = 2;
    }
    col[i * 4] = c[0];
    col[i * 4 + 1] = c[1];
    col[i * 4 + 2] = c[2];
    col[i * 4 + 3] = Math.round(clamp01(inten / 2) * 255);
    kind[i] = k + (i < K ? 8 : 0);
    seed[i * 4] = R();
    seed[i * 4 + 1] = R();
    seed[i * 4 + 2] = R();
    seed[i * 4 + 3] = R();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));
  g.setAttribute("aCol", new THREE.BufferAttribute(col, 4, true));
  g.setAttribute("aKind", new THREE.BufferAttribute(kind, 1));
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);
  return g;
}

const INTRO_VS = /* glsl */ `
attribute vec4 aSeed; attribute vec4 aCol; attribute float aKind;
uniform float uTime, uScale, uVortex, uPx, uShine, uCollapse, uBurst, uOrbit, uSizeK, uCoreDist, uFlow, uBright, uCoreR, uRevealY;
uniform mat3 uMarkM, uRingM, uVortexM;
varying vec3 vC; varying float vA;
${GLSL_COLORS}
${CURL}
mat2 rot2(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
vec3 hash3(float n){return fract(sin(vec3(n,n+1.731,n+3.117))*vec3(43758.5453,22578.1459,19642.349));}
void main(){
  float kind = mod(aKind, 8.0);
  bool ember = aKind > 7.5;
  float size = (1.05 + 0.95 * aSeed.y + 2.4 * pow(aSeed.y, 14.0)) * uPx * uSizeK;
  vec4 mv;
  vec3 C; float A;
  if (uBurst < 0.0) {
    // ---------------------------------------------- vortex -> mark -> implosion
    vec3 tgt = position;
    if (kind > 1.5) {
      float a = position.y + uTime * 0.5 / position.x;
      tgt = uRingM * vec3(cos(a) * position.x, position.z, sin(a) * position.x);
    }
    vec3 mk = uMarkM * tgt;
    float land = ${T_LAND0.toFixed(3)} + ${T_LAND_SPREAD.toFixed(3)} * aSeed.x;
    float u = clamp(uTime / land, 0.0, 1.0);
    float g = 0.18 * u + 0.82 * u * u * (3.0 - 2.0 * u);
    // the vortex is a compact disc turned towards the viewer (uVortexM: disc -> view space);
    // each particle's angle is coherent with its landing spot on the mark
    vec3 mkD = mk * uVortexM; // = transpose(uVortexM) * mk
    float ta = atan(mkD.z, mkD.x);
    float r0 = uVortex * (0.12 + 0.88 * pow(aSeed.w, 0.8));
    float rt = length(mkD.xz) * uScale * 0.9 + 0.02;
    float rad = mix(r0, rt, g * g * (3.0 - 2.0 * g));
    float psi = ta - (3.2 + 2.6 * aSeed.z) * (1.0 - g);
    // gather onto two rotating logarithmic arms: a density wave the flow runs through
    float ph = psi - 2.5 * log(max(rad, 0.02) / uVortex) - uTime * 1.2;
    float armK = floor(ph / 3.14159265 + 0.5);
    float off = ph - armK * 3.14159265;
    float gather = (1.0 - g) * (0.62 + 0.3 * aSeed.y);
    psi -= off * gather;
    float armD = off * (1.0 - gather);
    float arm = exp(-armD * armD * 5.0);
    vec3 pp = vec3(cos(psi) * rad, (aSeed.y - 0.5) * 0.08 * rad * (1.0 - g), sin(psi) * rad);
    if (uFlow > 0.0 && u < 1.0) {
      vec3 fl = curl(pp * (1.6 / uVortex) + vec3(0.0, uTime * 0.2, 0.0));
      pp += fl * 0.022 * rad * (1.0 - g) * uFlow;
    }
    vec4 mv0 = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec4 mvP = mv0 + vec4(uVortexM * pp, 0.0);
    float ci = uCollapse * uCollapse * uCollapse;
    vec4 mvM = mv0 + vec4(mk * uScale * (1.0 - ci), 0.0);
    float w = smoothstep(0.42, 1.0, u);
    w = w * w * (3.0 - 2.0 * w);
    mv = mix(mvP, mvM, w);
    // flight colour: one coral arm, one cyan arm, hotter towards the eye of the vortex
    float inner = 1.0 - clamp(rad / uVortex, 0.0, 1.0);
    vec3 armC = mod(armK, 2.0) < 0.5 ? CORAL * 1.15 : CYAN * 0.9;
    vec3 flight = armC * (0.12 + 0.88 * arm) * (0.38 + 1.25 * inner * inner);
    flight += GOLD * 0.7 * pow(inner, 5.0) * arm;
    vec3 mc = aCol.rgb * aCol.a * 2.0;
    C = mix(flight, mc, w);
    float band = mk.x * 0.6 + mk.y * 0.42 - uShine;
    C *= 1.0 + exp(-band * band * 40.0) * 0.8 * w;
    A = smoothstep(0.02, 0.5, uTime + aSeed.x * 0.3 - 0.12);
    // once the weld line has passed, face particles are absorbed into the solid prism and
    // the edge particles settle to a faint sparkle: the mark reads as solid colour
    if (kind < 1.5) {
      float absorbed = smoothstep(-0.02, 0.12, uRevealY - position.y) * w;
      A *= 1.0 - absorbed * (kind < 0.5 ? 1.0 : 0.85);
    }
    // the implosion carries everything into the pinpoint
    A *= 1.0 - 0.6 * smoothstep(0.5, 1.0, uCollapse);
    size *= mix(1.0, kind > 0.5 ? 0.9 : 0.8, w) * (1.0 - 0.4 * uCollapse);
  } else {
    // ---------------------------------------------- ignition burst, then slow forge embers
    float b = uBurst;
    vec3 h = hash3(aSeed.w * 71.3 + 3.0);
    float phi = aSeed.z * 6.2831853;
    float v0 = (0.8 + 3.0 * h.x * h.x) * uOrbit;
    // the spark ring is born at the pinpoint and grows out over ~0.14 s
    float rb = uCoreR * 0.9 * (1.0 - exp(-b * 16.0)) + v0 * (1.0 - exp(-2.1 * b)) / 2.1;
    vec3 pb = vec3(cos(phi) * rb, (h.y - 0.5) * 0.1 * rb, sin(phi) * rb);
    // only a quarter of the particles carry the burst, and they are gone within ~1 s
    float ab = exp(-b * 3.2) * smoothstep(0.0, 0.11, b) * step(aSeed.w, 0.2);
    vec3 cb = mix(GOLD * 0.9, h.z > 0.6 ? CYAN * 0.7 : CORAL * 0.9, smoothstep(0.0, 0.35, b));
    vec3 p = pb; C = cb; A = ab;
    float sz = 1.2 - 0.4 * clamp(b, 0.0, 1.0);
    if (ember && b > 1.3) {
      float life = 2.6 + 2.6 * aSeed.y;
      float ep = (b - 1.3) / life + aSeed.x;
      float cyc = floor(ep);
      float f = ep - cyc;
      vec3 hh = hash3(aSeed.w * 113.1 + cyc * 7.77);
      vec3 dir = normalize(vec3(hh.x - 0.5, (hh.y - 0.5) * 0.8, hh.z - 0.5) + vec3(1e-4));
      vec3 pe = dir * uCoreR * (1.03 + 0.7 * f + 0.35 * f * f);
      pe.xz = rot2(-(b * 0.22 + f * 1.1)) * pe.xz;
      pe.y += f * f * 0.25 * uCoreR;
      p = pe;
      A = pow(sin(3.14159 * f), 1.6) * smoothstep(1.3, 2.3, b) * 0.7;
      C = hh.z > 0.86 ? CYAN * 0.9 : mix(GOLD * 1.4, CORAL * 1.1, smoothstep(0.1, 0.7, f));
      sz = 0.7 + 0.45 * aSeed.y;
    }
    mv = modelViewMatrix * vec4(p, 1.0);
    size *= sz * clamp(uCoreDist / max(-mv.z, 0.1), 0.5, 2.0);
  }
  gl_Position = projectionMatrix * mv;
  gl_PointSize = max(size, 1.0);
  vC = C * uBright;
  vA = A * min(size, 1.0);
}
`;

const INTRO_FS = /* glsl */ `
varying vec3 vC; varying float vA;
void main(){
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(c, c);
  if (d2 > 1.0) discard;
  float f = exp(-d2 * 4.2) - 0.015;
  gl_FragColor = vec4(vC * vA * f, 1.0);
}
`;

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
  // images, icons and bordered controls; the parts of an svg are covered by the svg itself
  for (const item of el.querySelectorAll("img, svg, a, button")) {
    if (item.parentElement && item.parentElement.closest("svg")) continue;
    add(item.getBoundingClientRect());
  }
  return box || boxIn(el, root);
}
function measureAvoid(hero) {
  let copy = null;
  const extra = [];
  // the copy's lines one by one (kicker, title, tagline, buttons, facts, update chip): a tablet
  // composition may use the space right of the short title lines instead of the whole copy box
  const parts = [];
  let title = null;
  for (const el of hero.querySelectorAll("[data-hero-avoid]")) {
    if (!el.offsetWidth || !el.offsetHeight) continue;
    const box = el.dataset.heroAvoid === "copy" ? inkIn(el, hero) : boxIn(el, hero);
    if (el.dataset.heroAvoid !== "copy") extra.push(box);
    else {
      copy = copy ? { x0: Math.min(copy.x0, box.x0), y0: Math.min(copy.y0, box.y0), x1: Math.max(copy.x1, box.x1), y1: Math.max(copy.y1, box.y1) } : box;
      for (const child of el.children) {
        if (!child.offsetWidth || !child.offsetHeight) continue;
        const part = inkIn(child, hero);
        parts.push(part);
        if (child.tagName === "H1") title = part;
      }
    }
  }
  return copy ? { copy, extra, parts, title } : null;
}
function avoidSig(m) {
  if (!m) return "";
  return [m.copy, ...m.extra].map((R) => `${Math.round(R.x0)},${Math.round(R.y0)},${Math.round(R.x1)},${Math.round(R.y1)}`).join(";");
}
function rectDist(x, y, r) {
  const dx = Math.max(r.x0 - x, 0, x - r.x1);
  const dy = Math.max(r.y0 - y, 0, y - r.y1);
  return Math.hypot(dx, dy);
}

// Debug hooks (?herodebug, ?herot=<s> freeze, window.__heroT, ?heroslow, ?heronotimer). A
// production build strips them: esbuild ... --define:globalThis.HERO_DEBUG=false (every debug
// site is guarded by that expression, which then folds to false and is dropped).
const DEBUG = globalThis.HERO_DEBUG !== false && typeof location !== "undefined" && /[?&]herodebug\b/.test(location.search);
const FREEZE = DEBUG ? parseFloat((location.search.match(/[?&]herot=([\d.]+)/) || [])[1]) : NaN;

/* ------------------------------------------------------------------ scene */
function mount(canvas, hero) {
  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const lowCores = (navigator.hardwareConcurrency || 8) <= 4;
  const narrowAtStart = (hero.clientWidth || window.innerWidth) < 700;
  const lite = narrowAtStart || lowCores;
  let reduced = mqReduce.matches;

  canvas.style.visibility = "hidden"; // the hero background (#080b10) shows until the first frame
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
    uRes: { value: new THREE.Vector2(1, 1) },
    uPx: { value: 1 },
    uCoreDist: { value: 24 },
    uFade: { value: 0 },
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 400);
  const system = new THREE.Group();
  scene.add(system);
  const random = rng(20260927);

  /* ---- nebula backdrop: deep space, a restrained haze around the forge */
  const bgGeo = new THREE.BufferGeometry();
  bgGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const bgMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: shared.uTime,
      uFade: shared.uFade,
      uFocus: { value: new THREE.Vector2(0.65, 0.57) },
      uAspect: { value: 1.6 },
      uPulse: { value: 0 },
      uQ: { value: 1 },
      uScale: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uFade, uAspect, uPulse, uQ, uScale; uniform vec2 uFocus;
      varying vec2 vUv;
      ${NOISE2}
      ${GLSL_COLORS}
      void main(){
        vec2 p = (vUv - uFocus) * vec2(uAspect, 1.0) / uScale;
        float r = length(p);
        vec3 col = vec3(0.0016, 0.0022, 0.0045) * exp(-r * r * 2.2);
        if (uQ > 0.5) {
          vec2 q = p * 0.95 + vec2(uTime * 0.006, -uTime * 0.003);
          float w = fbm2(q * 0.8 + vec2(uTime * 0.008, 0.0));
          float n = fbm2(q + w * 0.7) * 0.5 + 0.5;
          float wisps = smoothstep(0.45, 0.95, n);
          float band = exp(-pow((p.y + p.x * 0.22) * 2.4, 2.0));
          vec3 neb = mix(vec3(0.012, 0.004, 0.018), vec3(0.002, 0.010, 0.016), smoothstep(-0.5, 0.6, p.x - p.y * 0.4));
          neb += CORAL * 0.012 * exp(-r * 3.2);
          // keep the haze off the frame edges so nothing looks cropped by the edge mask
          vec2 eu = min(vUv, 1.0 - vUv);
          float ew = smoothstep(0.02, 0.2, eu.x * uAspect) * smoothstep(0.02, 0.16, eu.y);
          col += neb * wisps * (0.2 + 0.8 * band) * exp(-r * 1.2) * ew;
        }
        col += CORAL * 0.0045 * exp(-r * r * 7.0) * (1.0 + uPulse * 1.6);
        gl_FragColor = vec4(col * uFade, 1.0);
      }`,
    depthTest: false,
    depthWrite: false,
  });
  const bg = new THREE.Mesh(bgGeo, bgMat);
  bg.frustumCulled = false;
  bg.renderOrder = -100;
  scene.add(bg);

  /* ---- far stars */
  const starCount = lite ? 1600 : 3200;
  {
    const pos = new Float32Array(starCount * 3);
    const col = new Float32Array(starCount * 3);
    const size = new Float32Array(starCount);
    const seed = new Float32Array(starCount);
    const palette = [lin(0xdfe8ff), lin(0x9ae3ee), lin(0xf3f0e9), lin(0xffc9a8), lin(0xb9b0ff)];
    // a faint galactic band crossing the view diagonally behind the orrery
    const bu = new THREE.Vector3(1, -0.42, -0.35).normalize();
    const bn = new THREE.Vector3(0.3, 0.9, -0.25).cross(bu).normalize();
    const bv = new THREE.Vector3().crossVectors(bn, bu).normalize();
    const d = new THREE.Vector3();
    for (let i = 0; i < starCount; i += 1) {
      const inBand = i < starCount * 0.45;
      if (inBand) {
        const a = random() * TAU;
        const g = (random() + random() + random() - 1.5) * 0.16;
        d.copy(bu).multiplyScalar(Math.cos(a)).addScaledVector(bv, Math.sin(a)).addScaledVector(bn, g).normalize();
      } else {
        const u = random() * 2 - 1;
        const th = random() * TAU;
        const s = Math.sqrt(1 - u * u);
        d.set(Math.cos(th) * s, u, Math.sin(th) * s);
      }
      const R = 90 + random() * 40;
      pos.set([d.x * R, d.y * R, d.z * R], i * 3);
      const c = palette[Math.floor(Math.pow(random(), 1.6) * palette.length)];
      const b = inBand ? 0.18 + Math.pow(random(), 4) * 1.1 : 0.24 + Math.pow(random(), 3) * 1.6;
      col.set([c.r * b, c.g * b, c.b * b], i * 3);
      size[i] = inBand ? 1.1 + Math.pow(random(), 5) * 2.2 : 1.3 + Math.pow(random(), 4) * 3.0;
      seed[i] = random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime, uPx: shared.uPx, uFade: shared.uFade },
      vertexShader: /* glsl */ `
        attribute vec3 aColor; attribute float aSize; attribute float aSeed;
        uniform float uTime, uPx, uFade;
        varying vec3 vC;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float tw = 0.6 + 0.4 * sin(uTime * (0.7 + aSeed * 2.2) + aSeed * 60.0);
          gl_PointSize = aSize * uPx;
          vC = aColor * tw * uFade;
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vC;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c, c) * 4.0;
          float a = exp(-d * 5.0);
          gl_FragColor = vec4(vC * a, 1.0);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(g, m);
    stars.frustumCulled = false;
    stars.renderOrder = -50;
    scene.add(stars);
  }

  /* ---- near dust (depth + bokeh), kept inside the orrery footprint */
  const dustCount = lite ? 200 : 420;
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uPx: shared.uPx, uFade: shared.uFade, uCoreDist: shared.uCoreDist, uSpan: { value: 1 } },
    vertexShader: /* glsl */ `
      attribute vec3 aColor; attribute float aSize; attribute float aSeed;
      uniform float uTime, uPx, uFade, uCoreDist, uSpan;
      varying vec3 vC;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position * uSpan, 1.0);
        gl_Position = projectionMatrix * mv;
        float z = -mv.z;
        gl_PointSize = aSize * uPx * (uCoreDist / z) * 1.3;
        float near = smoothstep(uCoreDist * 0.35, uCoreDist * 0.75, z);
        float tw = 0.55 + 0.45 * sin(uTime * (0.5 + aSeed) + aSeed * 40.0);
        vC = aColor * tw * near * uFade;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vC;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float a = smoothstep(1.0, 0.0, d);
        a = a * a * (0.6 + 0.4 * smoothstep(0.5, 0.8, d) + 0.6 * exp(-d * d * 12.0));
        gl_FragColor = vec4(vC * a, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const dust = (() => {
    const pos = new Float32Array(dustCount * 3);
    const col = new Float32Array(dustCount * 3);
    const size = new Float32Array(dustCount);
    const seed = new Float32Array(dustCount);
    const cols = [lin(0x9ae3ee), lin(0xff805f), lin(0xf3f0e9), lin(0x8f9dff)];
    for (let i = 0; i < dustCount; i += 1) {
      const r = 1.6 + Math.pow(random(), 0.9) * 5.6;
      const a = random() * TAU;
      const y = (random() - 0.5) * (0.4 + r * 0.25);
      pos.set([Math.cos(a) * r, y, Math.sin(a) * r], i * 3);
      const c = cols[Math.floor(random() * (random() < 0.7 ? 1.9 : 4))];
      const b = 0.08 + random() * 0.3;
      col.set([c.r * b, c.g * b, c.b * b], i * 3);
      size[i] = 1.0 + Math.pow(random(), 3) * 3.0;
      seed[i] = random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    const p = new THREE.Points(g, dustMat);
    p.frustumCulled = false;
    system.add(p);
    return p;
  })();

  /* ---- the forge core: coral dominant, hot white-gold centre, thin cyan rim */
  const coreSeg = lite ? [64, 48] : [112, 84];
  const coreMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uIgnite: { value: 0 }, uPulse: { value: 0 }, uFlash: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      void main(){
        vO = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uIgnite, uPulse, uFlash;
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      ${NOISE3}
      ${GLSL_COLORS}
      void main(){
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        float mu = clamp(dot(N, V), 0.0, 1.0);
        float fres = pow(1.0 - mu, 2.4);
        vec3 p = normalize(vO);
        float t = uTime;
        vec3 q = p * 1.1;
        vec3 warp = vec3(
          fbm(q + vec3(0.0, t * 0.06, 0.0)),
          fbm(q + vec3(5.2, 1.3 - t * 0.045, 2.1)),
          fbm(q + vec3(1.7, 9.2, t * 0.05)));
        float n = fbm(q * 1.5 + warp * 0.9);
        float gran = snoise(p * 9.0 + warp * 1.5 + vec3(0.0, 0.0, t * 0.25)) * 0.5 + 0.5;
        float veins = pow(1.0 - abs(snoise(p * 1.35 + warp * 0.55 + vec3(0.0, t * 0.07, 0.0))), 22.0);
        float veins2 = pow(1.0 - abs(snoise(p * 2.1 - warp * 0.4 + vec3(t * 0.05, 0.0, 3.0))), 30.0);
        float shift = 0.5 + 0.5 * sin(t * 0.33);
        // a temperature field: brand-coral body, orange-gold heart, deep-red limb
        float T = 0.4 + 0.16 * n + 0.1 * (gran - 0.5);
        T += (veins * (0.13 + 0.06 * shift) + veins2 * 0.08) * (0.3 + 0.7 * mu); // warm fissures, not lightning
        T += 0.5 * pow(mu, 3.5) - 0.1 * (1.0 - mu);
        // the pulse heats the heart instead of washing the whole disc
        T += (0.12 * uPulse + 0.34 * uFlash) * pow(mu, 1.5);
        vec3 col = mix(vec3(0.07, 0.005, 0.003), vec3(0.5, 0.05, 0.02), smoothstep(0.0, 0.34, T));
        col = mix(col, vec3(1.0, 0.2, 0.085), smoothstep(0.3, 0.55, T));
        col = mix(col, vec3(1.25, 0.42, 0.12), smoothstep(0.56, 0.75, T));
        col = mix(col, vec3(1.45, 0.8, 0.34), smoothstep(0.74, 0.92, T));
        col = mix(col, vec3(1.7, 1.35, 0.95), smoothstep(0.92, 1.12, T));
        col += CYAN * veins * 0.04 * mu;
        // limb darkening: a gentle fall-off over the disc, then deep red (~#8c2314) across the
        // outer ~12% of the radius (mu < ~0.47). No rim line: the corona sits outside the limb.
        col *= 0.62 + 0.38 * smoothstep(0.0, 0.85, mu);
        float limb = smoothstep(0.03, 0.5, mu);
        col = mix(vec3(0.3, 0.028, 0.012), col, limb * limb * (3.0 - 2.0 * limb));
        col *= uIgnite;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const core = new THREE.Mesh(new THREE.SphereGeometry(1, coreSeg[0], coreSeg[1]), coreMat);
  system.add(core);

  // corona (camera-facing, outside the disc only thanks to the depth test)
  const coronaMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: shared.uTime,
      uIgnite: { value: 0 },
      uPulse: { value: 0 },
      uHalf: { value: 5.2 },
      uCoreR: { value: CORE_R },
      uRays: { value: 0 },
    },
    vertexShader: /* glsl */ `
      uniform float uHalf, uCoreR;
      varying vec2 vQ;
      void main(){
        vQ = position.xy * uHalf;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * uHalf * uCoreR;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uIgnite, uPulse, uHalf, uRays;
      varying vec2 vQ;
      ${NOISE3}
      ${GLSL_COLORS}
      void main(){
        float r = length(vQ);
        vec2 dir = vQ / max(r, 1e-4);
        float n1 = snoise(vec3(dir * 2.1, uTime * 0.12)) * 0.5 + 0.5;
        float n2 = snoise(vec3(dir * 5.3, uTime * 0.2 + 4.0)) * 0.5 + 0.5;
        float rays = (pow(n1, 3.0) * 0.9 + pow(n2, 5.0) * 0.8) * smoothstep(3.4, 2.2, r) * uRays;
        float x = max(r - 1.0, 0.0);
        // a soft corona just outside the limb (fades over ~6-10 px), a wide warm glow, faint rays
        float inner = exp(-x / 0.11);
        float mid = exp(-x * (2.6 - rays * 1.0));
        float outer = exp(-x * 1.1);
        vec3 col = mix(CORAL, vec3(0.6, 0.06, 0.03), 0.35) * inner * 0.3 + mix(CORAL, GOLD, 0.35) * mid * rays * 0.2;
        col += mix(CORAL, GOLD, 0.2) * outer * 0.045;
        // any cyan only as a whisper, well outside the limb
        col += CYAN * 0.018 * exp(-pow((x - 0.3) / 0.14, 2.0));
        col *= 1.0 - smoothstep(0.6, 1.0, r / uHalf);
        col *= uIgnite * (1.0 + uPulse * 0.9);
        gl_FragColor = vec4(max(col, 0.0), 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const corona = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), coronaMat);
  corona.frustumCulled = false;
  system.add(corona);

  /* ---- accretion disk (shader) around the core */
  const diskMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uGain: { value: 0 }, uInner: { value: 1.12 }, uOuter: { value: 2.9 } },
    vertexShader: /* glsl */ `
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uGain, uInner, uOuter;
      varying vec2 vP;
      ${NOISE3}
      ${GLSL_COLORS}
      void main(){
        float r = length(vP);
        float x = clamp((r - uInner) / (uOuter - uInner), 0.0, 1.0);
        float a = atan(vP.y, vP.x);
        float ang = a + uTime * 1.1 / pow(r, 1.5) + log(r) * 2.2;
        vec2 cs = vec2(cos(ang), sin(ang));
        float n = snoise(vec3(cs * 1.6, r * 3.2 - uTime * 0.05)) * 0.5 + 0.5;
        float n2 = snoise(vec3(cs * 4.5, r * 9.0 + 3.0)) * 0.5 + 0.5;
        float lanes = 0.5 + 0.5 * sin(r * 30.0 + n * 5.0);
        float fall = pow(1.0 - x, 2.6) * smoothstep(0.0, 0.16, x);
        float I = fall * (0.15 + 1.2 * n * n) * mix(0.72, 1.0, lanes) * (0.55 + 0.7 * n2 * n2);
        vec3 col = mix(vec3(1.0, 0.40, 0.2) * 1.4, CYAN * 0.9, smoothstep(0.12, 0.7, x));
        col += GOLD * pow(fall, 3.0) * 0.7;
        gl_FragColor = vec4(col * I * uGain, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const disk = new THREE.Mesh(new THREE.RingGeometry(1.12, 2.9, lite ? 128 : 224, 6), diskMat);
  disk.rotation.x = -Math.PI / 2;
  disk.frustumCulled = false;
  system.add(disk);

  /* ---- ecliptic haze: a faint dusty floor for the orrery (dropped first by the governor) */
  const planeMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uGain: { value: 0 }, uRmax: { value: 7 }, uSpan: { value: 7 } },
    vertexShader: /* glsl */ `
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uGain, uRmax, uSpan;
      varying vec2 vP;
      ${NOISE3}
      ${GLSL_COLORS}
      void main(){
        float r = length(vP) * uSpan;
        float a = atan(vP.y, vP.x);
        float sw = a + uTime * 0.02 + log(r + 1.0) * 1.4;
        float n = snoise(vec3(cos(sw) * 1.4, sin(sw) * 1.4, r * 0.55)) * 0.5 + 0.5;
        float lanes = 0.6 + 0.4 * sin(r * 5.5 + n * 3.0);
        float I = exp(-r * 0.3) * smoothstep(1.7, 3.6, r) * smoothstep(uRmax * 1.02, uRmax * 0.6, r) * (0.2 + 0.9 * n * n) * lanes;
        vec3 col = mix(CORAL * 0.8, CYAN * 0.6, smoothstep(2.5, uRmax, r));
        gl_FragColor = vec4(col * I * 0.1 * uGain, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const ecliptic = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), planeMat);
  ecliptic.rotation.x = -Math.PI / 2;
  ecliptic.frustumCulled = false;
  ecliptic.renderOrder = -10;
  system.add(ecliptic);

  /* ---- fine motes riding the disk */
  const swirlCount = lite ? 700 : 1500;
  const swirlMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: shared.uTime,
      uPx: shared.uPx,
      uCoreDist: shared.uCoreDist,
      uScale: { value: 0 },
      uGain: { value: 0 },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aData;
      uniform float uTime, uPx, uCoreDist, uScale, uGain;
      varying vec3 vC;
      ${GLSL_COLORS}
      void main(){
        float r = aData.x;
        float ang = aData.y + uTime * (1.15 / pow(r, 1.5)) * (0.8 + 0.4 * aData.z);
        float y = (fract(aData.z * 91.7) - 0.5) * 0.09 * r;
        vec3 pos = vec3(cos(ang) * r, y, sin(ang) * r) * uScale;
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.55 + 0.45 * sin(uTime * 3.0 + aData.z * 80.0);
        gl_PointSize = (0.9 + aData.z * 1.2) * uPx * (uCoreDist / -mv.z);
        float inner = smoothstep(2.6, 1.25, r);
        vC = mix(CYAN * 0.8, vec3(1.0, 0.5, 0.28) * 1.5, inner) * tw * uGain * smoothstep(1.05, 1.35, r) * 0.7;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vC;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float a = exp(-dot(c, c) * 18.0);
        gl_FragColor = vec4(vC * a, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  {
    const data = new Float32Array(swirlCount * 3);
    for (let i = 0; i < swirlCount; i += 1) {
      const r = 1.2 + Math.pow(random(), 1.5) * 2.2;
      data.set([r, random() * TAU, random()], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(swirlCount * 3), 3));
    g.setAttribute("aData", new THREE.BufferAttribute(data, 3));
    const swirl = new THREE.Points(g, swirlMat);
    swirl.frustumCulled = false;
    system.add(swirl);
  }

  /* ---- shock wave in the orbital plane (ignition + pulses) */
  const waveMat = new THREE.ShaderMaterial({
    uniforms: { uR: { value: -1 }, uAmp: { value: 0 }, uTime: shared.uTime, uRmax: { value: 7 }, uSharp: { value: 140 }, uWhite: { value: 0 }, uSpan: { value: 7 } },
    vertexShader: /* glsl */ `
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uR, uAmp, uTime, uRmax, uSharp, uWhite, uSpan;
      varying vec2 vP;
      ${GLSL_COLORS}
      void main(){
        float r = length(vP) * uSpan;
        float a = atan(vP.y, vP.x);
        float d = r - uR;
        float prog = clamp(uR / uRmax, 0.0, 1.0);
        // a thin coral-hot leading edge with a short cyan wake; it thins and fades as it grows
        float w = mix(1.0, 0.6, prog) / sqrt(uSharp);
        float lead = exp(-d * d / (w * w));
        float wake = exp(min(d, 0.0) / (w * 5.0)) * step(d, 0.0);
        float wob = 0.78 + 0.22 * sin(a * 7.0 + uTime * 2.0) * sin(a * 3.0 - uTime);
        vec3 hot = mix(CORAL * 1.15, WELD * 1.3, uWhite * (1.0 - prog));
        vec3 col = hot * lead + CYAN * 0.5 * wake * (1.0 - lead) * 0.45;
        col *= wob * uAmp * (1.0 - 0.55 * prog) * smoothstep(1.0, 1.8, r) * smoothstep(uRmax * 1.02, uRmax * 0.55, r);
        gl_FragColor = vec4(col, 1.0);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const wave = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 1, 1), waveMat);
  wave.rotation.x = -Math.PI / 2;
  wave.frustumCulled = false;
  system.add(wave);

  /* ---- worlds */
  const sphereHi = new THREE.SphereGeometry(1, lite ? 48 : 64, lite ? 32 : 44);
  const crystalGeo = new THREE.IcosahedronGeometry(1, 1);
  crystalGeo.computeVertexNormals();
  const circle = circleGeometry(lite ? 192 : 288);
  const WORLDS = [
    { type: 0, r: 0.3, R: 2.45, w: 0.33, incl: 0.07, node: 0.3, a0: 0.12, tilt: 0.3, spin: 0.25, atmo: 0xff6440, atmoS: 0.45, shell: 1.12 },
    { type: 1, r: 0.43, R: 3.2, w: 0.25, incl: -0.05, node: 1.1, a0: -0.28, tilt: 0.41, spin: 0.16, atmo: 0x5cc4ff, atmoS: 0.55, shell: 1.08 },
    { type: 2, r: 0.41, R: 3.95, w: 0.2, incl: 0.09, node: 2.2, a0: 4.9, tilt: 0.2, spin: 0.14, atmo: 0x8a7dff, atmoS: 0.4, shell: 1.08, moon: true },
    { type: 3, r: 0.5, R: 4.75, w: 0.16, incl: -0.035, node: 0.7, a0: 0.8, tilt: 0.15, spin: 0.12, atmo: 0xffb6d0, atmoS: 0.3, shell: 1.06 },
    { type: 4, r: 0.37, R: 5.5, w: 0.135, incl: 0.06, node: 1.8, a0: 4.39, tilt: 0.5, spin: 0.4, atmo: 0x9ae3ee, atmoS: 0.22, shell: 1.1 },
    { type: 5, r: 0.7, R: 6.3, w: 0.105, incl: -0.025, node: 0.2, a0: 4.41, tilt: 0.42, spin: 0.1, atmo: 0xffc58a, atmoS: 0.45, shell: 1.07, ring: true },
    { type: 6, r: 0.31, R: 7.15, w: 0.085, incl: 0.075, node: 2.9, a0: 6.86, tilt: 0.1, spin: 0.08, tint: 0xcfe0ff, atmo: 0x9ae3ee, atmoS: 0.4, shell: 1.1 },
  ];
  const RING_IN = 1.45;
  const RING_OUT = 2.3;
  const orbitTint = [0xff805f, 0x9ae3ee, 0xffc27a, 0xffb3cf, 0xb89cff, 0xf3d9b0, 0x9ae3ee];
  const worlds = WORLDS.map((cfg, i) => {
    const pivot = new THREE.Group();
    pivot.rotation.set(cfg.incl, cfg.node, 0, "YXZ");
    system.add(pivot);
    const orbitMat = ribbonMaterial(shared, {
      width: 0.85,
      base: 0.042,
      trail: 1.05,
      trailLen: 0.3,
      boost: 1.0,
      color: 0x9ae3ee,
      trailColor: orbitTint[i],
      reveal: 0,
    });
    const orbit = new THREE.Mesh(circle, orbitMat);
    orbit.frustumCulled = false;
    pivot.add(orbit);
    const holder = new THREE.Group();
    pivot.add(holder);
    const tilt = new THREE.Group();
    tilt.rotation.z = cfg.tilt;
    holder.add(tilt);
    const mat = planetMaterial(cfg.type, shared, { atmo: cfg.atmo, tint: cfg.tint, seed: i * 1.37 });
    const mesh = new THREE.Mesh(cfg.type === 4 ? crystalGeo : sphereHi, mat);
    mesh.scale.setScalar(cfg.r);
    tilt.add(mesh);
    const atmoMat = atmosphereMaterial(shared, cfg.atmo, cfg.atmoS, cfg.shell);
    const atmo = new THREE.Mesh(sphereHi, atmoMat);
    atmo.scale.setScalar(cfg.r * cfg.shell);
    tilt.add(atmo);
    const w = { cfg, pivot, orbit, orbitMat, holder, tilt, mesh, mat, atmo, atmoMat, born: false, R: cfg.R, ext: cfg.r * Math.max(cfg.shell, 1.12) };
    if (cfg.ring) {
      const inner = cfg.r * RING_IN;
      const outer = cfg.r * RING_OUT;
      const rm = ringMaterial(inner, outer);
      const ring = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 160, 1), rm);
      ring.rotation.x = -Math.PI / 2;
      tilt.add(ring);
      w.ring = ring;
      w.ringMat = rm;
      w.ext = cfg.r * RING_OUT;
    }
    if (cfg.moon) {
      const moonPivot = new THREE.Group();
      moonPivot.rotation.x = 0.35;
      tilt.add(moonPivot);
      const mm = planetMaterial(6, shared, { atmo: 0xf3f0e9, tint: 0xf3ecdc, seed: 9.1 });
      const moon = new THREE.Mesh(sphereHi, mm);
      moon.scale.setScalar(0.085);
      moon.position.set(0.62, 0, 0);
      moonPivot.add(moon);
      w.moon = moon;
      w.moonPivot = moonPivot;
      w.moonMat = mm;
      w.ext = 0.62 + 0.09;
    }
    return w;
  });

  /* ---- sparks (small CPU pool, world space; restrained) */
  const sparkMax = lite ? 160 : 320;
  const sp = {
    pos: new Float32Array(sparkMax * 3),
    col: new Float32Array(sparkMax * 3),
    dat: new Float32Array(sparkMax * 2),
    vel: new Float32Array(sparkMax * 3),
    life: new Float32Array(sparkMax),
    max: new Float32Array(sparkMax),
    size: new Float32Array(sparkMax),
    drag: new Float32Array(sparkMax),
    next: 0,
    alive: 0,
  };
  const sparkGeo = new THREE.BufferGeometry();
  const sparkPosAttr = new THREE.BufferAttribute(sp.pos, 3).setUsage(THREE.DynamicDrawUsage);
  const sparkColAttr = new THREE.BufferAttribute(sp.col, 3).setUsage(THREE.DynamicDrawUsage);
  const sparkDatAttr = new THREE.BufferAttribute(sp.dat, 2).setUsage(THREE.DynamicDrawUsage);
  sparkGeo.setAttribute("position", sparkPosAttr);
  sparkGeo.setAttribute("aColor", sparkColAttr);
  sparkGeo.setAttribute("aDat", sparkDatAttr);
  const sparks = new THREE.Points(
    sparkGeo,
    new THREE.ShaderMaterial({
      uniforms: { uPx: shared.uPx, uCoreDist: shared.uCoreDist },
      vertexShader: /* glsl */ `
        attribute vec3 aColor; attribute vec2 aDat;
        uniform float uPx, uCoreDist;
        varying vec3 vC;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aDat.x * uPx * (uCoreDist / -mv.z);
          vC = aColor * aDat.y;
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vC;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c, c) * 4.0;
          float a = exp(-d * 6.0) + 0.2 * exp(-d * 1.5);
          gl_FragColor = vec4(vC * a, 1.0);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  sparks.frustumCulled = false;
  scene.add(sparks);
  const cCoral = lin(0xff9a70);
  const cCyan = lin(0x9ae3ee);
  const cCream = lin(0xfff1dc);
  function emit(x, y, z, vx, vy, vz, life, color, bright, size, drag = 1.2) {
    const i = sp.next;
    sp.next = (sp.next + 1) % sparkMax;
    sp.pos[i * 3] = x;
    sp.pos[i * 3 + 1] = y;
    sp.pos[i * 3 + 2] = z;
    sp.vel[i * 3] = vx;
    sp.vel[i * 3 + 1] = vy;
    sp.vel[i * 3 + 2] = vz;
    sp.life[i] = life;
    sp.max[i] = life;
    sp.col[i * 3] = color.r * bright;
    sp.col[i * 3 + 1] = color.g * bright;
    sp.col[i * 3 + 2] = color.b * bright;
    sp.size[i] = size;
    sp.drag[i] = drag;
    sp.alive = sparkMax;
  }
  function updateSparks(dt) {
    if (!sp.alive) return;
    let alive = 0;
    for (let i = 0; i < sparkMax; i += 1) {
      if (sp.life[i] <= 0) {
        sp.dat[i * 2 + 1] = 0;
        continue;
      }
      alive += 1;
      sp.life[i] -= dt;
      const k = i * 3;
      const damp = Math.exp(-sp.drag[i] * dt);
      sp.vel[k] *= damp;
      sp.vel[k + 1] *= damp;
      sp.vel[k + 2] *= damp;
      sp.pos[k] += sp.vel[k] * dt;
      sp.pos[k + 1] += sp.vel[k + 1] * dt;
      sp.pos[k + 2] += sp.vel[k + 2] * dt;
      const f = clamp01(sp.life[i] / sp.max[i]);
      sp.dat[i * 2] = sp.size[i] * (0.5 + 0.5 * f);
      sp.dat[i * 2 + 1] = f * f * (1 - Math.pow(f, 12));
    }
    sp.alive = alive ? sparkMax : 0;
    sparkPosAttr.needsUpdate = true;
    sparkColAttr.needsUpdate = true;
    sparkDatAttr.needsUpdate = true;
  }
  function clearSparks() {
    sp.life.fill(0);
    sp.dat.fill(0);
    sp.alive = 0;
    sparkDatAttr.needsUpdate = true;
  }

  /* ---- signature intro: particle vortex -> BLITAST prism mark -> implosion -> embers */
  const intro = {
    built: false,
    N: lite ? 8000 : 16000,
    K: lite ? 450 : 900, // particles kept alive as forge embers
    points: null,
    mat: null,
    mark: null,
    flare: null,
    bars: [],
    retired: false,
  };
  const introUniforms = {
    uTime: { value: 0 },
    uScale: { value: 1 },
    uVortex: { value: 5 },
    uPx: shared.uPx,
    uShine: { value: -9 },
    uCollapse: { value: 0 },
    uBurst: { value: -1 },
    uOrbit: { value: 1 },
    uSizeK: { value: 1 },
    uCoreDist: shared.uCoreDist,
    uCoreR: { value: CORE_R },
    uFlow: { value: 1 },
    uBright: { value: 1 },
    uMarkM: { value: new THREE.Matrix3() },
    uRingM: { value: new THREE.Matrix3() },
    uVortexM: { value: new THREE.Matrix3() },
    uRevealY: { value: -9 },
  };
  {
    const m4 = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0.34, 0, -0.16, "ZXY"));
    introUniforms.uRingM.value.setFromMatrix4(m4);
  }
  const barMat = (bar, halfs, rgb) =>
    new THREE.ShaderMaterial({
      uniforms: {
        uHalf: { value: new THREE.Vector3(...halfs) },
        uColor: { value: new THREE.Vector3(...rgb) },
        uBarM: { value: new THREE.Matrix4() },
        uGlow: { value: 0 },
        uReveal: { value: -2 },
        uShine: introUniforms.uShine,
        uCollapse: introUniforms.uCollapse,
        uEdgeW: { value: 0.012 },
      },
      vertexShader: /* glsl */ `
        uniform mat4 uBarM;
        varying vec3 vL; varying vec3 vNl; varying vec3 vNv; varying vec3 vVp; varying vec2 vM;
        void main(){
          vL = position; vNl = normal;
          vNv = normalize(normalMatrix * normal);
          vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          vVp = mvp.xyz;
          vM = (uBarM * vec4(position, 1.0)).xy;
          gl_Position = projectionMatrix * mvp;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uHalf, uColor; uniform float uGlow, uReveal, uShine, uCollapse, uEdgeW;
        varying vec3 vL; varying vec3 vNl; varying vec3 vNv; varying vec3 vVp; varying vec2 vM;
        ${GLSL_COLORS}
        void main(){
          vec3 n = abs(vNl);
          vec3 d = uHalf - abs(vL) + n * 1e3;
          // MSAA can shade sliver faces outside the triangle: keep the distance sane
          float edge = max(min(d.x, min(d.y, d.z)), 0.0);
          float eg = exp(-edge / uEdgeW);
          vec3 N = normalize(vNv);
          float front = step(0.5, n.z);
          float top = step(0.5, vNl.y);
          float bottom = step(0.5, -vNl.y);
          float along = vL.y / uHalf.y;
          // brand albedo first: an evenly lit face (+-4%), a slightly brighter top and
          // darker sides for the prism depth. No glossy sheen, no glowing rims.
          float side = 0.6 + 0.16 * max(0.0, dot(N, normalize(vec3(-0.5, 0.45, 0.75))));
          float lum = front * (0.97 + 0.04 * along) + (1.0 - front) * mix(mix(side, 1.04, top), 0.42, bottom);
          vec3 col = uColor * lum;
          // a hairline edge in the bar's own hue keeps the silhouette crisp
          col *= 1.0 + 0.07 * eg * front;
          // one quick, thin glint crossing the finished mark
          float band = vM.x * 0.6 + vM.y * 0.42 - uShine;
          col *= 1.0 + 0.11 * exp(-band * band * 70.0) * front; // stays under the bloom threshold
          // forged from the bottom up: a thin gold weld line travels up the bars
          float seam = vM.y - uReveal;
          float sw = uEdgeW * 2.2;
          float weld = exp(-seam * seam / (sw * sw)) * step(uReveal, 1.6);
          float a = smoothstep(sw, -sw, seam);
          col = mix(col, WELD * 1.9, weld * 0.85);
          // the implosion pours the energy into the pinpoint: the slab dims as it shrinks
          col *= 1.0 - 0.45 * smoothstep(0.35, 1.0, uCollapse);
          a = max(a, weld) * uGlow;
          gl_FragColor = vec4(clamp(col, 0.0, 4.0), clamp(a, 0.0, 1.0));
        }`,
      transparent: true,
      depthWrite: false,
    });

  function buildIntro() {
    if (intro.built) return;
    intro.built = true;
    const g = buildIntroGeometry(intro.N, intro.K);
    intro.mat = new THREE.ShaderMaterial({
      uniforms: introUniforms,
      vertexShader: INTRO_VS,
      fragmentShader: INTRO_FS,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    intro.points = new THREE.Points(g, intro.mat);
    intro.points.frustumCulled = false;
    intro.points.renderOrder = 6;
    system.add(intro.points);
    // crisp prisms
    intro.mark = new THREE.Group();
    const inner = new THREE.Group();
    inner.rotation.z = MARK_ROT;
    intro.mark.add(inner);
    for (const b of MARK_BARS) {
      const hw = ((b.x1 - b.x0) / 2) * MARK_U;
      const hh = ((b.y1 - b.y0) / 2) * MARK_U;
      const hd = MARK_D * MARK_U;
      const mat = barMat(b, [hw, hh, hd], b.coral ? MARK_CORAL : MARK_CREAM);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(hw * 2, hh * 2, hd * 2), mat);
      mesh.position.set(((b.x0 + b.x1) / 2 + 0.5) * MARK_U, ((b.y0 + b.y1) / 2) * MARK_U, 0);
      mesh.renderOrder = 5;
      mesh.frustumCulled = false;
      inner.add(mesh);
      intro.bars.push(mesh);
    }
    intro.mark.updateMatrixWorld(true);
    for (const m of intro.bars) {
      // bar -> mark space (rotation + offset), used for the shine band and the forging seam
      m.material.uniforms.uBarM.value.copy(inner.matrix).multiply(m.matrix);
    }
    scene.add(intro.mark);
    // the hot pinpoint: the eye of the vortex, then the point the mark implodes into
    intro.flare = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: { uI: { value: 0 }, uHalo: { value: 0.3 }, uCore: { value: 1 } },
        vertexShader: /* glsl */ `
          varying vec2 vQ;
          void main(){ vQ = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `
          uniform float uI, uHalo, uCore;
          varying vec2 vQ;
          ${GLSL_COLORS}
          void main(){
            float r = length(vQ);
            float core = exp(-r * r * 70.0);
            float glow = exp(-r * r * 11.0);
            float halo = exp(-r * 3.4);
            vec3 hot = mix(vec3(1.0, 0.62, 0.34), vec3(1.0, 0.86, 0.66), core);
            vec3 col = hot * core * 2.4 * uCore + mix(CORAL, WELD, 0.4) * glow * 0.75 + CORAL * halo * uHalo;
            col *= 1.0 - smoothstep(0.75, 1.0, r);
            gl_FragColor = vec4(col * uI, 1.0);
          }`,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
      }),
    );
    intro.flare.renderOrder = 9;
    intro.flare.frustumCulled = false;
    scene.add(intro.flare);
  }
  function retireIntro() {
    if (!intro.built || intro.retired) return;
    intro.retired = true;
    intro.mark.visible = false;
    intro.flare.visible = false;
    intro.points.geometry.setDrawRange(0, intro.K);
    introUniforms.uFlow.value = 0;
  }
  if (!reduced) buildIntro();

  /* ---- post-processing */
  // MSAA only where it pays: 4x at DPR < 1.5, 2x above (the pixels are already small)
  const maxSamples = lite ? (lowCores ? 0 : 2) : 4;
  const samples = maxSamples;
  const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(2, 2), 0.55, 0.42, 1.0);
  composer.addPass(bloom);
  const finalPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uExposure: { value: 1.0 },
      uFocus: { value: new THREE.Vector2(0.65, 0.57) },
      uEdge: { value: new THREE.Vector2(0.05, 0.08) },
      uCalm: { value: new THREE.Vector4(0, 0, 1, 1) },
      uCalmAmt: { value: 0.4 },
      uCalmSoft: { value: 80 },
      uHead: { value: 80 },
      uToe: { value: 0.0045 },
      uEdgeSoft: { value: 60 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
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
        vec2 off = dc * 0.0025 * length(dc);
        vec3 hdr = vec3(texture2D(tDiffuse, uv - off).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + off).b);
        // calm zone behind the copy and under the header
        vec2 px = vec2(uv.x, 1.0 - uv.y) * uRes;
        vec2 q = max(uCalm.xy - px, px - uCalm.zw);
        float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
        hdr *= 1.0 - uCalmAmt * (1.0 - smoothstep(-uCalmSoft * 0.3, uCalmSoft, sd));
        hdr *= 1.0 - 0.75 * (1.0 - smoothstep(uHead * 0.7, uHead * 1.4, px.y));
        // low-level light (bloom veil, haze) fades out towards the frame, so the forced
        // #080b10 edge never reads as a dark picture frame
        float ep = min(min(px.x, uRes.x - px.x), min(px.y, uRes.y - px.y));
        hdr *= mix(0.35, 1.0, smoothstep(0.0, uEdgeSoft, ep));
        // toe: crush the faint haze so space stays black and contrast stays high
        hdr = max(hdr, 0.0);
        hdr = hdr * hdr / (hdr + uToe);
        vec3 c = srgb(clamp(neutral(hdr * uExposure), 0.0, 1.0));
        vec3 ink = vec3(8.0, 11.0, 16.0) / 255.0;
        c = 1.0 - (1.0 - ink) * (1.0 - c);
        vec2 e = min(uv, 1.0 - uv);
        float mask = smoothstep(0.0, uEdge.x, e.x) * smoothstep(0.0, uEdge.y, e.y);
        float vig = 1.0 - 0.32 * smoothstep(0.4, 1.2, length(dc * vec2(uRes.x / uRes.y, 1.0)));
        c = mix(ink, c, mask * vig);
        c += (hash(uv * uRes + fract(uTime * 7.0) * 91.0) - 0.5) * (1.6 / 255.0) * mask;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  // RenderPass, bloom and the grade all work in readBuffer and the grade draws to the screen: no
  // swap, so the composer never allocates its second (multisampled HalfFloat) target
  finalPass.needsSwap = false;
  composer.addPass(finalPass);

  /* ---- layout: fit the orrery around the copy (solver), camera, DPR budget */
  const comp = { fx: 0.66, fy: 0.43, el: 0.4, roll: -0.2, fov: 30, dist: 24, orbK: 1, wK: 1, Rmax: 7.15, markPx: 100, narrow: false, k: 1, diskK: 1 };
  const gov = { level: 0, dprK: 1, iv: [], raf: [], gpu: [], heavy: 0, light: 0, skip: 0, probe: false, backoff: 1, idleVsync: 0 };
  let W = 1;
  let H = 1;
  const DRIFT_AZ = 0.05; // small: the system barely wanders, the worlds do the moving
  const DRIFT_EL = 0.018;
  const PAR_AZ = 0.06;
  const PAR_EL = 0.035;
  const drift = finePointer ? 1 : 1.35;
  const tv = new THREE.Vector3();
  const tv2 = new THREE.Vector3();

  function poseCamera(az, el, dist) {
    camera.position.set(Math.sin(az) * Math.cos(el) * dist, Math.sin(el) * dist, Math.cos(az) * Math.cos(el) * dist);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld(true);
  }
  function camK(t) {
    return mix(CAM_NEAR, 1, easeInOutCubic(clamp01((t - (T_IGN - 0.3)) / 3.9)));
  }
  function worldTravel(i) {
    return 0.55 + worlds[i].R * 0.06;
  }
  // world i's holder position in its pivot frame at time t; returns the birth progress
  function worldLocal(i, t, out) {
    const w = worlds[i];
    const c = w.cfg;
    const b0 = BIRTH0 + i * BIRTH_GAP;
    const pr = clamp01((t - b0) / worldTravel(i));
    const e = easeOutCubic(pr);
    const theta = c.a0 + c.w * (t - T_IGN);
    const ang = theta - (1 - e) * 1.25;
    const rad = mix(0.95 * CORE_R, w.R, e);
    const lift = Math.sin(pr * Math.PI) * 0.35 * comp.orbK * (i % 2 ? 1 : -1);
    out.set(Math.cos(ang) * rad, lift, Math.sin(ang) * rad);
    return pr;
  }
  function worldGrow(pr) {
    return Math.max(0.001, mix(0.14, 1, easeOutBack(clamp01((pr - 0.4) / 0.6))));
  }

  const solve = { bounds: null, forbid: [], focal: 1, cache: new Map() };
  function projectPx(P, out) {
    tv2.copy(P).applyMatrix4(camera.matrixWorldInverse);
    const depth = -tv2.z;
    tv2.applyMatrix4(camera.projectionMatrix);
    out.x = (tv2.x * 0.5 + 0.5) * W;
    out.y = (0.5 - tv2.y * 0.5) * H;
    out.z = depth;
  }
  const pxv = new THREE.Vector3();
  function violates(x, y, r) {
    const B = solve.bounds;
    if (x - r < B.x0 || x + r > B.x1 || y - r < B.y0 || y + r > B.y1) return true;
    for (const R of solve.forbid) {
      const dx = x - clamp(x, R.x0, R.x1);
      const dy = y - clamp(y, R.y0, R.y1);
      if (dx * dx + dy * dy < r * r) return true;
    }
    return false;
  }
  const POSES_FULL = [
    [0, 0],
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ];
  const POSES_COARSE = [
    [-1, -1],
    [1, 1],
  ];
  function fits(D, steps, coarse) {
    const poses = coarse ? POSES_COARSE : POSES_FULL;
    const A = DRIFT_AZ * drift + (finePointer ? PAR_AZ : 0);
    const E = DRIFT_EL * drift + (finePointer ? PAR_EL : 0);
    for (const [sa, se] of poses) {
      poseCamera(sa * A, comp.el + se * E, D);
      for (let i = 0; i < worlds.length; i += 1) {
        const w = worlds[i];
        const ext = w.ext * comp.wK * 1.04;
        for (let s = 0; s < steps; s += 1) {
          const th = (s / steps) * TAU;
          tv.set(Math.cos(th) * w.R, 0, Math.sin(th) * w.R).applyMatrix4(w.pivot.matrixWorld);
          projectPx(tv, pxv);
          if (pxv.z <= 0.1) return false;
          if (violates(pxv.x, pxv.y, (ext * solve.focal) / pxv.z)) return false;
        }
      }
    }
    if (coarse) return true;
    // the births spiral out while the camera is still pulling back
    for (let i = 0; i < worlds.length; i += 1) {
      const w = worlds[i];
      const b0 = BIRTH0 + i * BIRTH_GAP;
      const tr = worldTravel(i);
      for (let t = b0 + tr * 0.4; t < b0 + tr + 0.6; t += 0.14) {
        poseCamera(Math.sin(t * 0.07) * DRIFT_AZ * drift, comp.el + Math.sin(t * 0.05 + 1.2) * DRIFT_EL * drift, D * camK(t));
        const pr = worldLocal(i, t, tv);
        tv.applyMatrix4(w.pivot.matrixWorld);
        projectPx(tv, pxv);
        const ext = w.ext * comp.wK * worldGrow(pr);
        if (violates(pxv.x, pxv.y, (ext * solve.focal) / pxv.z)) return false;
      }
    }
    return true;
  }
  function setProjection() {
    camera.fov = comp.fov;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    const e = camera.projectionMatrix.elements;
    e[8] = 1 - 2 * comp.fx;
    e[9] = 2 * comp.fy - 1;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
  }
  function fitDistance(steps, iters, coarse, lo = 4, hi = 200) {
    if (!fits(hi, steps, coarse)) return hi;
    for (let it = 0; it < iters; it += 1) {
      const mid = Math.sqrt(lo * hi);
      if (fits(mid, steps, coarse)) hi = mid;
      else lo = mid;
    }
    return hi;
  }

  function applyScale() {
    for (const w of worlds) {
      w.R = 1.45 * CORE_R + (w.cfg.R - 1.45) * comp.orbK;
      w.orbit.scale.setScalar(w.R);
      w.tilt.scale.setScalar(comp.wK);
    }
    comp.Rmax = worlds[worlds.length - 1].R;
    planeMat.uniforms.uRmax.value = comp.Rmax;
    ecliptic.scale.setScalar(comp.Rmax * 2.1);
    planeMat.uniforms.uSpan.value = comp.Rmax * 2.1;
    waveMat.uniforms.uRmax.value = comp.Rmax;
    wave.scale.setScalar(comp.Rmax * 1.05);
    waveMat.uniforms.uSpan.value = comp.Rmax * 1.05;
    dustMat.uniforms.uSpan.value = comp.orbK;
    introUniforms.uOrbit.value = comp.orbK;
    disk.scale.setScalar(CORE_R * comp.diskK);
  }

  function layout() {
    W = Math.max(1, hero.clientWidth || window.innerWidth);
    H = Math.max(1, hero.clientHeight || window.innerHeight);
    const aspect = W / H;
    const isNarrow = W < 700;
    comp.narrow = isNarrow;
    const budget = lite ? 2.2e6 : 4.2e6;
    const cap = isNarrow ? 1.5 : 1.75;
    const dpr = Math.max(0.5, Math.min(window.devicePixelRatio || 1, cap, Math.sqrt(budget / (W * H))) * gov.dprK);

    // blend between portrait (phone) and landscape (desktop) compositions
    const k = smooth(0.62, 1.35, aspect);
    comp.k = k;
    comp.el = mix(0.62, 0.46, k);
    comp.diskK = mix(0.85, 1, k);
    comp.roll = mix(-0.08, -0.2, k);
    comp.fov = mix(36, 30, k);
    comp.orbK = mix(0.52, 0.78, k);
    comp.wK = mix(0.86, 1.0, k);
    applyScale();

    // what the orrery must stay clear of
    const pad = 40;
    const measured = measureAvoid(hero);
    lastAvoidSig = avoidSig(measured);
    const cr = measured ? { ...measured.copy } : copyRect(W, H);
    // on phones the copy owns the full width of its band
    if (isNarrow) {
      cr.x0 = 0;
      cr.x1 = W;
    }
    const copyP = { x0: cr.x0 - pad, y0: cr.y0 - pad, x1: cr.x1 + pad, y1: cr.y1 + pad };
    const head = 80;
    // Tablet-sized landscape (iPad): the copy box takes half the width, so the orrery avoids the
    // copy line by line and may sweep into the free space right of the title, instead of
    // shrinking into the top-right quadrant. Wide screens keep the composed desktop layout.
    const partsMode = !isNarrow && k >= 0.5 && W < 1300 && !!measured && measured.parts.length > 1;
    solve.forbid = partsMode ? measured.parts.map((R) => ({ x0: R.x0 - pad, y0: R.y0 - pad, x1: R.x1 + pad, y1: R.y1 + pad })) : [copyP];
    // the calm (dimmed) zone then hugs the title block, not the widest line (the update chip)
    if (partsMode && measured.title) cr.x1 = Math.min(cr.x1, measured.title.x1 + 40);
    // the page gutter (nav + NEW chip right-align at W - gutter): nothing crosses it
    const gutter = clamp(0.05 * W, 20, 72);
    if (measured) for (const R of measured.extra) solve.forbid.push({ x0: R.x0 - 16, y0: R.y0 - 16, x1: R.x1 + 16, y1: R.y1 + 16 });
    else if (!isNarrow) solve.forbid.push({ x0: W - gutter - 420, y0: H - 118, x1: W, y1: H });
    solve.bounds = { x0: isNarrow ? gutter : 10, x1: W - gutter, y0: head + 10, y1: isNarrow ? H : H - Math.max(40, H * 0.06) };
    solve.focal = H / (2 * Math.tan(THREE.MathUtils.degToRad(comp.fov) / 2));
    system.rotation.z = comp.roll;
    system.updateMatrixWorld(true);

    // anchor search: the core sits where the orrery can be largest
    const band = { top: head + 10, bottom: isNarrow || k < 0.5 ? copyP.y0 : H - 60 };
    const fyC = mix((band.top + band.bottom) / 2 / H, 0.45, k);
    const cands = [];
    const el0 = comp.el;
    if (k < 0.5) {
      for (const el of [el0, el0 - 0.12]) for (const fx of [0.47, 0.5, 0.53]) for (const dy of [-0.04, 0]) cands.push([fx, fyC + dy, comp.roll, el]);
    } else {
      // the design anchors, plus the middle of the free space right of the copy
      const freeC = clamp((copyP.x1 + solve.bounds.x1) / 2 / W, 0.55, 0.82);
      const fxs = [0.62, 0.67, 0.72, freeC - 0.03, freeC, freeC + 0.03];
      // line-by-line avoidance: a lower centre lets the tilted ellipse reach down the right side
      const fys = partsMode ? [fyC - 0.03, fyC + 0.02, 0.52, 0.56] : [fyC - 0.03, fyC + 0.02];
      for (const roll of [comp.roll, comp.roll - 0.1, comp.roll - 0.2])
        for (const fx of fxs) for (const fy of fys) cands.push([fx, fy, roll, el0]);
    }
    const key = `${W}x${H}:${solve.forbid.map((R) => `${Math.round(R.x0)},${Math.round(R.y0)},${Math.round(R.x1)},${Math.round(R.y1)}`).join(";")}`;
    let best = solve.cache.get(key);
    const t0 = performance.now();
    if (!best) for (const [fx, fy, roll, el] of cands) {
      comp.fx = fx;
      comp.fy = fy;
      comp.el = el;
      system.rotation.z = roll;
      system.updateMatrixWorld(true);
      setProjection();
      const D = fitDistance(16, 9, true);
      // prefer the larger orrery, with a mild pull towards the design anchor
      const score = (1 / D) * (1 - 0.35 * Math.abs(fx - mix(0.5, 0.665, k)) - 0.4 * Math.abs(fy - fyC) - 0.3 * (el0 - el));
      if (!best || score > best.score) best = { fx, fy, roll, el, score };
    }
    comp.fx = best.fx;
    comp.fy = best.fy;
    comp.roll = best.roll;
    comp.el = best.el;
    system.rotation.z = comp.roll;
    system.updateMatrixWorld(true);
    setProjection();
    if (!best.dist) {
      best.dist = fitDistance(36, 16, false);
      // a drag-resize visits many sizes: keep only the most recent few
      if (solve.cache.size >= 12) solve.cache.delete(solve.cache.keys().next().value);
      solve.cache.set(key, best);
    }
    comp.dist = best.dist;
    comp.solveMs = performance.now() - t0;

    // the mark is sized to the calm clearance around the core
    const cx = comp.fx * W;
    const cy = comp.fy * H;
    let clearX = Math.min(cx - gutter, W - gutter - cx);
    let clearY = Math.min(cy - head - 12, H - cy - 30);
    for (const R of solve.forbid) {
      const d = rectDist(cx, cy, R);
      clearX = Math.min(clearX, d);
      clearY = Math.min(clearY, d);
    }
    comp.markPx = Math.max(24, Math.min(clearY / 1.34, clearX / (MARK_RING + 0.12), H * 0.14, W * 0.26));

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
    shared.uRes.value.set(W * dpr, H * dpr);
    shared.uPx.value = dpr;
    introUniforms.uSizeK.value = isNarrow ? 1.05 : 1.2;
    introUniforms.uBright.value = isNarrow ? 0.9 : 1.0;
    for (const m of intro.bars) m.material.uniforms.uEdgeW.value = 1.25 / comp.markPx;
    finalPass.uniforms.uRes.value.set(W * dpr, H * dpr);
    finalPass.uniforms.uFocus.value.set(comp.fx, 1 - comp.fy);
    finalPass.uniforms.uEdge.value.set(isNarrow ? 0.035 : 0.045, isNarrow ? 0.05 : 0.07);
    finalPass.uniforms.uCalm.value.set(cr.x0 * dpr, cr.y0 * dpr, cr.x1 * dpr, cr.y1 * dpr);
    finalPass.uniforms.uCalmSoft.value = 90 * dpr;
    finalPass.uniforms.uCalmAmt.value = isNarrow ? 0.5 : 0.55;
    finalPass.uniforms.uHead.value = head * dpr;
    finalPass.uniforms.uEdgeSoft.value = (isNarrow ? 44 : 64) * dpr;
    bgMat.uniforms.uFocus.value.set(comp.fx, 1 - comp.fy);
    bgMat.uniforms.uAspect.value = aspect;
    bgMat.uniforms.uScale.value = mix(0.7, 1, k);
    bloom.strength = isNarrow ? 0.5 : 0.55;
    waveMat.uniforms.uSharp.value = isNarrow ? 260 : 150;
    if (globalThis.HERO_DEBUG !== false && DEBUG) {
      const corePx = (solve.focal / comp.dist).toFixed(1);
      // nominal-pose footprint of the worlds
      poseCamera(0, comp.el, comp.dist);
      const bb = [1e9, 1e9, -1e9, -1e9];
      for (const w of worlds) {
        for (let s = 0; s < 64; s += 1) {
          const th = (s / 64) * TAU;
          tv.set(Math.cos(th) * w.R, 0, Math.sin(th) * w.R).applyMatrix4(w.pivot.matrixWorld);
          projectPx(tv, pxv);
          const r = (w.ext * comp.wK * solve.focal) / pxv.z;
          bb[0] = Math.min(bb[0], pxv.x - r);
          bb[1] = Math.min(bb[1], pxv.y - r);
          bb[2] = Math.max(bb[2], pxv.x + r);
          bb[3] = Math.max(bb[3], pxv.y + r);
        }
      }
      console.warn(`[hero] ${W}x${H} dpr=${dpr.toFixed(2)} fx=${comp.fx} fy=${comp.fy.toFixed(3)} roll=${comp.roll.toFixed(2)} dist=${comp.dist.toFixed(2)} corePx=${corePx} markPx=${comp.markPx.toFixed(0)} bbox=${bb.map((v) => v.toFixed(0)).join(",")} copy=${Math.round(copyP.x1)},${Math.round(copyP.y0)} el=${comp.el.toFixed(2)} solve=${comp.solveMs.toFixed(1)}ms gov=${gov.level}`);
    }
  }

  function applyQuality() {
    // level 1: drop the expensive full-screen extras; levels 2-3: step the DPR down
    bgMat.uniforms.uQ.value = gov.level >= 1 ? 0 : 1;
    ecliptic.visible = gov.level < 1;
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
  let ignited = false;
  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const accum = new Float32Array(worlds.length);
  const swayQ = new THREE.Quaternion();
  const swayE = new THREE.Euler();
  const vortexE = new THREE.Euler();
  const markM4 = new THREE.Matrix4();
  const firePulse = (detail) => {
    try {
      window.dispatchEvent(new CustomEvent("blitast:pulse", { detail }));
    } catch (e) {
      /* no listeners needed */
    }
  };

  function update(t, dt, live) {
    shared.uTime.value = t;
    shared.uFade.value = smooth(0.0, 1.8, t);

    // camera: close on the mark, pull back after ignition, then a slow drift
    par.x += (par.tx - par.x) * Math.min(1, dt * 2.5);
    par.y += (par.ty - par.y) * Math.min(1, dt * 2.5);
    const dist = comp.dist * camK(t);
    const az = Math.sin(t * 0.07) * DRIFT_AZ * drift + par.x * PAR_AZ;
    const el = comp.el + Math.sin(t * 0.05 + 1.2) * DRIFT_EL * drift - par.y * PAR_EL;
    poseCamera(az, el, dist);
    shared.uCoreDist.value = dist;

    // ignition + pulses
    const tg = t - T_IGN;
    const ign = tg < 0 ? 0 : easeOutBack(clamp01(tg / 0.8));
    const flash = tg < -0.2 ? 0 : Math.exp(-Math.pow((tg - 0.08) / 0.2, 2));
    let pulse = 0;
    let waveR = -1;
    let waveAmp = 0;
    let waveWhite = 0;
    const Rm = comp.Rmax;
    if (tg > 0.02 && tg < 1.0) {
      // the ignition shockwave: quick, thin, gone by ~T_IGN + 0.9
      const tp = tg - 0.02;
      waveR = 1.0 + tp * Rm * 1.1;
      waveAmp = (comp.narrow ? 0.32 : 0.5) * Math.exp(-tp * 1.6) * smooth(0, 0.08, tp);
      waveWhite = 1;
    }
    if (live && !ignited && tg >= 0) {
      ignited = true;
      firePulse({ ignite: true, index: -1 });
    }
    if (t > PULSE0) {
      const k = Math.floor((t - PULSE0) / PULSE_PERIOD);
      const tp = t - PULSE0 - k * PULSE_PERIOD;
      pulse = Math.exp(-tp * 2.4) * (1 - Math.exp(-tp * 30));
      waveR = 1.1 + tp * Rm * 0.56;
      waveAmp = Math.exp(-tp * 0.55) * smooth(0, 0.15, tp) * (comp.narrow ? 0.3 : 0.5);
      if (live && k !== lastPulse) {
        lastPulse = k;
        firePulse({ ignite: false, index: k });
        const n = lite ? 12 : 26;
        for (let i = 0; i < n; i += 1) {
          const a = random() * TAU;
          tmp.set(Math.cos(a), (random() - 0.5) * 0.2, Math.sin(a)).normalize().applyQuaternion(system.quaternion);
          const v = (1.2 + random() * 1.4) * comp.orbK;
          emit(tmp.x * 1.05 * CORE_R, tmp.y * 1.05 * CORE_R, tmp.z * 1.05 * CORE_R, tmp.x * v, tmp.y * v, tmp.z * v, 0.8 + random() * 0.8, random() < 0.6 ? cCoral : cCyan, 1.6 + random() * 1.4, 1.6 + random() * 2, 1.4);
        }
      }
    }
    if (!live && t > T_IGN + 3) {
      pulse = 0;
      waveR = -1;
      waveAmp = 0;
    }
    core.visible = tg > -0.05;
    core.scale.setScalar(Math.max(0.001, ign * CORE_R));
    const coreGain = mix(0.35, 1, clamp01(tg / 0.3)) * (1 + flash * (comp.narrow ? 0.4 : 0.6));
    coreMat.uniforms.uIgnite.value = tg < 0 ? 0 : coreGain;
    coreMat.uniforms.uPulse.value = pulse;
    coreMat.uniforms.uFlash.value = flash;
    coronaMat.uniforms.uIgnite.value = coreGain * smooth(-0.05, 0.5, tg);
    coronaMat.uniforms.uPulse.value = pulse + flash * 0.4;
    coronaMat.uniforms.uCoreR.value = Math.max(0.001, ign * CORE_R);
    // star rays ease in well after ignition instead of peaking with the births
    coronaMat.uniforms.uRays.value = 0.8 * smooth(1.2, 3.4, tg);
    swirlMat.uniforms.uScale.value = mix(0.3, 1, easeOutCubic(clamp01((tg - 0.05) / 1.4))) * CORE_R * comp.diskK;
    swirlMat.uniforms.uGain.value = smooth(0.05, 1.2, tg) * (1 + pulse * 1.0);
    diskMat.uniforms.uGain.value = smooth(0.0, 1.0, tg) * (1 + pulse * 0.8 + flash * 1.0);
    disk.visible = tg > 0;
    bgMat.uniforms.uPulse.value = pulse + flash;
    planeMat.uniforms.uGain.value = smooth(0.3, 2.8, tg) * (1 + pulse * 0.6);
    waveMat.uniforms.uR.value = waveR;
    waveMat.uniforms.uAmp.value = waveAmp;
    waveMat.uniforms.uWhite.value = waveWhite;
    wave.visible = waveAmp > 0.002;

    // intro particles + prisms
    if (intro.built) {
      const u = introUniforms;
      u.uTime.value = t;
      const pxPerUnit = solve.focal / dist;
      const cl = clamp01((t - T_COLLAPSE) / T_COLLAPSE_LEN);
      const ci = cl * cl * cl;
      u.uCollapse.value = cl;
      u.uScale.value = comp.markPx / pxPerUnit;
      u.uShine.value = t < T_SHINE - 0.3 ? -9 : -2.2 + ((t - T_SHINE) / 0.42) * 4.4;
      // the vortex disc faces the viewer (<= ~34 deg of tilt on landscape) and is compact:
      // about 1.5x the final mark-ring radius, centred on the mark
      vortexE.set(Math.PI / 2 - mix(0.85, 0.6, comp.k), 0, comp.roll, "ZXY");
      markM4.makeRotationFromEuler(vortexE);
      u.uVortexM.value.setFromMatrix4(markM4);
      u.uVortex.value = MARK_RING * u.uScale.value * mix(0.95, 1.5, comp.k);
      // gentle sway reveals the prism depth; the implosion is a scale-to-centre with <30 deg of twist
      const hold = smooth(T_LAND0 + 0.3, T_SHINE + 0.3, t);
      swayE.set(0.08 * Math.sin(t * 0.9) * hold, (0.3 * Math.sin(t * 1.1 - 1.2) - 0.08) * hold * (1 - cl), cl * cl * 0.5, "ZXY");
      swayQ.setFromEuler(swayE);
      markM4.makeRotationFromQuaternion(swayQ);
      u.uMarkM.value.setFromMatrix4(markM4);
      // pinpoint: a soft eye while the vortex turns, then the hot point the mark pours into,
      // alive across the hand-over to the ignited core (no empty frame, no pop)
      const markR = comp.markPx / pxPerUnit; // world units per mark unit
      const eye = 0.3 * smooth(0.0, 0.45, t) * (1 - smooth(0.8, 1.25, t));
      const imp = smooth(0.5, 0.96, cl) * (tg < 0.03 ? 1 : Math.exp(-Math.pow((tg - 0.03) / 0.09, 2)));
      const flareI = eye + imp * 1.7;
      intro.flare.visible = flareI > 0.002;
      intro.flare.quaternion.copy(camera.quaternion);
      intro.flare.scale.setScalar(markR * (eye > imp ? 0.62 : mix(0.95, 0.5, cl)));
      intro.flare.material.uniforms.uI.value = flareI;
      intro.flare.material.uniforms.uHalo.value = eye > imp ? 0.55 : 0.28;
      intro.flare.material.uniforms.uCore.value = eye > imp ? 0.5 : 1;
      if (tg < 0) {
        u.uBurst.value = -1;
        u.uFlow.value = 1;
        intro.points.visible = true;
        intro.mark.visible = t > T_LAND0 - 0.2;
        intro.mark.position.set(0, 0, 0);
        intro.mark.quaternion.copy(camera.quaternion).multiply(swayQ);
        intro.mark.scale.setScalar(Math.max(0.0001, u.uScale.value * (1 - ci)));
        const glow = smooth(T_LAND0 - 0.1, T_LAND0 + 0.25, t);
        const reveal = mix(-1.35, 1.7, smooth(T_LAND0 - 0.05, T_SHINE - 0.02, t));
        u.uRevealY.value = reveal;
        for (const m of intro.bars) {
          m.material.uniforms.uGlow.value = glow;
          m.material.uniforms.uReveal.value = reveal;
        }
        intro.mat.depthTest = true;
      } else {
        u.uBurst.value = tg;
        intro.mark.visible = false;
        if (tg > 2.4) retireIntro();
        intro.points.visible = live || tg < 2.4;
        if (intro.retired) intro.flare.visible = false;
      }
    }

    // worlds
    system.updateMatrixWorld();
    for (let i = 0; i < worlds.length; i += 1) {
      const w = worlds[i];
      const c = w.cfg;
      const b0 = BIRTH0 + i * BIRTH_GAP;
      const travel = worldTravel(i);
      const pr = worldLocal(i, t, w.holder.position);
      const theta = c.a0 + c.w * (t - T_IGN);
      const visible = t > b0;
      w.holder.visible = visible;
      w.holder.scale.setScalar(worldGrow(pr));
      // a core-lit ember that cross-dissolves into the world's own palette as it grows
      const hot = pr < 1 ? 1 - smooth(0.1, 0.82, pr) : 0;
      w.mat.uniforms.uHot.value = visible ? hot : 0;
      w.atmoMat.uniforms.uHot.value = w.mat.uniforms.uHot.value;
      w.mesh.rotation.y = t * c.spin + i;
      const ph = (((theta % TAU) + TAU) % TAU) / TAU;
      w.orbitMat.uniforms.uPhase.value = ph;
      w.orbitMat.uniforms.uReveal.value = easeOutCubic(clamp01((t - b0 - travel * 0.7) / 1.6));
      w.orbit.visible = t > b0;
      // the pulse wave excites atmospheres as it passes
      const wv = waveR > 0 ? Math.exp(-Math.pow((w.R - waveR) / (0.7 * comp.orbK), 2)) * waveAmp : 0;
      w.mat.uniforms.uWave.value = wv;
      w.atmoMat.uniforms.uWave.value = wv;
      w.orbitMat.uniforms.uGain.value = 1 + wv * 1.8;
      if (w.ring) w.ringMat.uniforms.uReveal.value = smooth(0.4, 1.0, pr);
      if (w.moon) {
        w.moonPivot.rotation.y = t * 0.9;
        w.moon.visible = pr > 0.6;
      }
      // a faint spark trail while travelling
      if (live && visible && pr < 1) {
        w.holder.getWorldPosition(tmp);
        accum[i] += dt * (lite ? 22 : 44);
        while (accum[i] >= 1) {
          accum[i] -= 1;
          const s = 0.14;
          emit(tmp.x + (random() - 0.5) * 0.1, tmp.y + (random() - 0.5) * 0.1, tmp.z + (random() - 0.5) * 0.1, (random() - 0.5) * s, (random() - 0.5) * s, (random() - 0.5) * s, 0.4 + random() * 0.6, random() < 0.6 ? cCoral : random() < 0.5 ? cCyan : cCream, 1.1 + random() * 1.1, 1.2 + random() * 1.8, 1.6);
        }
      }
      if (live && !w.born && pr >= 1) {
        w.born = true;
        w.holder.getWorldPosition(tmp);
        const n = lite ? 8 : 16;
        for (let j = 0; j < n; j += 1) {
          tmp2.set(random() - 0.5, random() - 0.5, random() - 0.5).normalize();
          const v = (0.5 + random() * 0.9) * comp.orbK;
          emit(tmp.x, tmp.y, tmp.z, tmp2.x * v, tmp2.y * v, tmp2.z * v, 0.4 + random() * 0.6, j % 2 ? cCyan : cCoral, 1.6 + random() * 1.4, 1.4 + random() * 1.8, 2.4);
        }
      }
    }
    system.updateMatrixWorld();
    for (const w of worlds) {
      if (w.ring) {
        w.mesh.getWorldPosition(w.ringMat.uniforms.uPlanetPos.value);
        w.ringMat.uniforms.uPlanetR.value = w.cfg.r * comp.wK * w.holder.scale.x;
        w.ringMat.uniforms.uNormal.value.set(0, 0, 1).transformDirection(w.ring.matrixWorld);
      }
    }
    dust.rotation.y = t * 0.012;
    finalPass.uniforms.uTime.value = t;
    updateSparks(live ? dt : 0);
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
  let lastAvoidSig = "";
  let resizeTimer = 0;

  // Any jump of the clock (reduced <-> motion, restore) must not replay one-shot events:
  // no ignition event, no pulse burst, no world-birth sparks for moments that were skipped.
  function jumpClock(t) {
    time = t;
    ignited = t >= T_IGN;
    lastPulse = t > PULSE0 ? Math.floor((t - PULSE0) / PULSE_PERIOD) : -1;
    for (let i = 0; i < worlds.length; i += 1) worlds[i].born = t >= BIRTH0 + i * BIRTH_GAP + worldTravel(i);
    clearSparks();
  }
  if (reduced) jumpClock(T_STATIC);

  /* ---- quality governor
     It looks at what a frame costs, not only at the gap between frames: a browser that caps
     rAF at 30 Hz (energy saver, iOS Low Power Mode) must not be mistaken for a slow GPU.
     - GPU timer queries (EXT_disjoint_timer_query_webgl2) when available: the real GPU cost.
     - Otherwise the mean frame interval against the display interval, estimated from the
       fastest rAF cadence (the 20th percentile of rAF deltas, and the idle cadence at boot).
     Samples start at T_IGN + 3 (after the particle intro), 90-frame windows, two heavy windows
     in a row to step down, and it steps back up when there is clear headroom (with back-off). */
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
  // relative GPU cost of each level (level 1 drops the nebula fbm and the ecliptic, 2-3 step the DPR)
  const LEVEL_COST = [1, 0.85, 0.85 * 0.64, 0.85 * 0.41];
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
    const slot = Math.max(FRAME_MS, vsync); // the interval we can expect to hit
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
      if (gov.probe) gov.backoff = Math.min(gov.backoff * 2, 16); // a failed step-up waits longer next time
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
    // with a GPU timer the headroom is measured; without one, step up as a probe with back-off
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
    const sampling = time > T_IGN + 3;
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
      else if (FREEZE === FREEZE) time = FREEZE; // hold one moment of the timeline
      frozen = typeof ft === "number" || FREEZE === FREEZE;
      if (/heroslow/.test(location.search)) {
        const until = performance.now() + 24; // simulate a slow device for the governor
        while (performance.now() < until);
      }
    }
    gpuPoll();
    update(time, dt, true);
    const timed = sampling && !frozen;
    if (timed) gpuBegin();
    composer.render(dt);
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
  function hideIntro() {
    if (!intro.built) return;
    intro.points.visible = false;
    intro.mark.visible = false;
    intro.flare.visible = false;
  }
  // the reduced-motion still (reduced mode only)
  function renderStatic() {
    if (lost || !booted || dead) return;
    try {
      clearSparks();
      update(Math.max(time, T_STATIC), 0, false);
      hideIntro();
      composer.render(0);
      show();
      // present the still once more after the canvas is shown: a single draw into a
      // non-preserved drawing buffer can be dropped by some compositors
      requestAnimationFrame(() => {
        if (reduced && !lost && !dead && !running) composer.render(0);
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
      composer.render(0);
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
    document.removeEventListener("visibilitychange", refresh);
    window.removeEventListener("blitast:modal", onModal);
    hero.classList.add("is-static");
    console.warn("[hero] 3D scene disabled:", e && e.message ? e.message : e);
  };
  function onModal(ev) {
    modalOpen = Boolean(ev && ev.detail && ev.detail.open);
    refresh();
  }

  /* ---- sizing: cached sizes apply at once; a new size is solved when a drag-resize settles
     (the canvas just stretches for a moment), a big aspect jump (rotation) re-lays at once */
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
    if (!laidKey || jump || solve.cache.has(key)) applyLayout();
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
  // the copy the orrery keeps clear of can change size by itself (web fonts, the latest-update chip)
  const avoidEls = hero.querySelectorAll("[data-hero-avoid]");
  function recheckAvoid() {
    if (dead || !bootToken) return;
    clearTimeout(avoidTimer);
    avoidTimer = setTimeout(() => {
      if (dead || avoidSig(measureAvoid(hero)) === lastAvoidSig) return;
      laidKey = "";
      onResize();
    }, 160);
  }
  if (avoidEls.length) {
    avoidRO = new ResizeObserver(recheckAvoid);
    for (const el of avoidEls) avoidRO.observe(el);
    // entrance transforms move the measured ink; settle once they finish
    hero.addEventListener("animationend", recheckAvoid);
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
  listen(mqReduce, () => {
    if (dead) return;
    const was = reduced;
    reduced = mqReduce.matches;
    if (reduced === was) return;
    // resuming motion never replays the intro half-way; the still is always the composed moment
    jumpClock(Math.max(time, T_STATIC));
    refresh();
    if (reduced) renderStatic();
  });
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
      // extensions do not survive a context loss
      gpuReset();
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
    const postMats = [bloom.materialHighPassFilter, ...bloom.separableBlurMaterials, bloom.compositeMaterial, bloom.blendMaterial, finalPass.material];
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
    for (let i = 0; i < items.length; i += 3) chunks.push(items.slice(i, i + 3));
    return chunks;
  }
  // draw just these objects once into the scene target (their own layer, everything revealed)
  function warmDraw(chunk, k) {
    const layer = 1 + (k % 30);
    for (const o of chunk) o.layers.enable(layer);
    warmCam.copy(camera);
    warmCam.layers.set(layer);
    const hidden = revealAll();
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(composer.readBuffer);
    renderer.render(scene, warmCam);
    renderer.setRenderTarget(prev);
    for (const o of hidden) o.visible = false;
    for (const o of chunk) o.layers.disable(layer);
  }
  // the bloom chain and the grade, with an empty scene pass
  function warmPost() {
    const mask = camera.layers.mask;
    camera.layers.disableAll();
    composer.render(0);
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
        if (i === 0) update(reduced ? Math.max(time, T_STATIC) : time, 0, false);
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
      // the idle cadence (display / browser cap) for the governor: the fastest frames seen
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
      update(reduced ? Math.max(time, T_STATIC) : time, 0, false);
      // everything that can ever be drawn must be visible for the compile pass
      const hidden = revealAll();
      const tc = performance.now();
      const jobs = [renderer.compileAsync(scene, camera), renderer.compileAsync(postScene, postCam)];
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
  // and the web fonts have settled (or 1.5 s passed), so the orrery is placed against the final copy.
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
