(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var lh=0,Pl=1,ch=2;var Sr=1,hh=2,Ds=3,Ui=0,nn=1,ln=2,Un=0,Ns=1,Kt=2,Il=3,Ll=4,Za=5;var es=100,uh=101,dh=102,fh=103,ph=104,mh=200,$a=201,gh=202,xh=203,Dl=204,br=205,vh=206,_h=207,yh=208,Mh=209,Sh=210,bh=211,wh=212,Th=213,Eh=214,ma=0,ga=1,xa=2,Ts=3,va=4,_a=5,ya=6,Ma=7,Nl=0,Ah=1,Ch=2,Wn=0,Ul=1,Fl=2,Ol=3,Bl=4,zl=5,Vl=6,kl=7;var Hl=300,Fi=301,ts=302,Ka=303,Ja=304,wr=306,Sa=1e3,ti=1001,ba=1002,$t=1003,Rh=1004;var Tr=1005;var tn=1006,Qa=1007;var Oi=1008;var Tn=1009,Gl=1010,Wl=1011,Us=1012,ja=1013,Xn=1014,qn=1015,Ht=1016,eo=1017,to=1018,Fs=1020,Xl=35902,ql=35899,Yl=1021,Zl=1022,Fn=1023,ni=1026,Bi=1027,$l=1028,no=1029,zi=1030,io=1031;var so=1033,Er=33776,Ar=33777,Cr=33778,Rr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,Pr=37490,mo=37491,go=37808,xo=37809,vo=37810,_o=37811,yo=37812,Mo=37813,So=37814,bo=37815,wo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,Ro=37821,Po=36492,Io=36494,Lo=36495,Do=36283,No=36284,Ir=36285,Uo=36286;var ar=2300,wa=2301,fa=2302,bl=2303,wl=2400,Tl=2401,El=2402;var Ph=3200;var Kl=0,Ih=1,xi="",Sn="srgb",Qi="srgb-linear",or="linear",yt="srgb";var pa=7680;var Lh=519,Dh=512,Nh=513,Uh=514,Fo=515,Fh=516,Oh=517,Oo=518,Bh=519,zh=35044,Lr=35048;var Jl="300 es",Gn=2e3,lr=2001;function ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){let i=cr("canvas");return i.style.display="block",i}var Vc={},Es=null;function Ql(...i){let e="THREE."+i.shift();Es?Es("log",e,...i):console.log(e,...i)}function kh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=kh(i);let e="THREE."+i.shift();if(Es)Es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=kh(i);let e="THREE."+i.shift();if(Es)Es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){let e=i.join(" ");e in Vc||(Vc[e]=!0,Ve(...i))}function Hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Gh={[ma]:ga,[xa]:ya,[va]:Ma,[Ts]:_a,[ga]:ma,[ya]:xa,[Ma]:va,[_a]:Ts},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=1234567,sr=Math.PI/180,As=180/Math.PI;function Os(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function jl(i,e){return(i%e+e)%e}function Gu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wu(i,e,t){return i!==e?(t-i)/(e-i):0}function rr(i,e,t){return(1-t)*i+t*e}function Xu(i,e,t,n){return rr(i,e,1-Math.exp(-t*n))}function qu(i,e=1){return e-Math.abs(jl(i,e*2)-e)}function Yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function Ju(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(kc=i);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ju(i){return i*sr}function ed(i){return i*As}function td(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ec={DEG2RAD:sr,RAD2DEG:As,generateUUID:Os,clamp:ct,euclideanModulo:jl,mapLinear:Gu,inverseLerp:Wu,lerp:rr,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:Zu,randInt:$u,randFloat:Ku,randFloatSpread:Ju,seededRandom:Qu,degToRad:ju,radToDeg:ed,isPowerOfTwo:td,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:un,denormalize:bs},rc=class rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;var Fe=rc,Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==p||u!==v){let g=l*h+c*p+u*v+f*M;g<0&&(h=-h,p=-p,v=-v,M=-M,g=-g);let d=1-o;if(g<.9995){let b=Math.acos(g),A=Math.sin(b);d=Math.sin(d*b)/A,o=Math.sin(o*b)/A,l=l*d+h*o,c=c*d+p*o,u=u*d+v*o,f=f*d+M*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+v*o,f=f*d+M*o;let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ac=class ac{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ac.prototype.isVector3=!0;var F=ac,il=new F,Hc=new Dn,oc=class oc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],v=n[8],M=s[0],g=s[3],d=s[6],b=s[1],A=s[4],y=s[7],S=s[2],w=s[5],C=s[8];return r[0]=a*M+o*b+l*S,r[3]=a*g+o*A+l*w,r[6]=a*d+o*y+l*C,r[1]=c*M+u*b+f*S,r[4]=c*g+u*A+f*w,r[7]=c*d+u*y+f*C,r[2]=h*M+p*b+v*S,r[5]=h*g+p*A+v*w,r[8]=h*d+p*y+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*f+n*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var Ge=oc,sl=new Ge,Gc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){let i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:or,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var lt=rd();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,Ta=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=cr("canvas")),hs.width=e.width,hs.height=e.height;let s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ad=0,Cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rl(s[a].image)):r.push(rl(s[a]))}else r=rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var od=0,al=new F,pn=class i extends ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=tn,a=Oi,o=Fn,l=Tn,c=i.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Os(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Hl;pn.DEFAULT_ANISOTROPY=1;var lc=class lc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,S=(d+1)/2,w=(u+h)/4,C=(f+M)/4,x=(v+g)/4;return A>y&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=C/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-v)*(g-v)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(f-M)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;var Dt=lc,Ea=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new pn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ya=class Ya{constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,v,M,g)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,v,M,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,v=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,v=c*u,M=c*f;t[0]=h+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,v=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,v=o*u,M=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-M*f}else if(e.order==="XZY"){let h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ld,e,cd)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Si.crossVectors(n,yn),Si.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Si.crossVectors(n,yn)),Si.normalize(),qr.crossVectors(yn,Si),s[0]=Si.x,s[4]=qr.x,s[8]=yn.x,s[1]=Si.y,s[5]=qr.y,s[9]=yn.y,s[2]=Si.z,s[6]=qr.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],v=n[2],M=n[6],g=n[10],d=n[14],b=n[3],A=n[7],y=n[11],S=n[15],w=s[0],C=s[4],x=s[8],T=s[12],P=s[1],U=s[5],V=s[9],W=s[13],N=s[2],G=s[6],Q=s[10],J=s[14],se=s[3],$=s[7],ie=s[11],oe=s[15];return r[0]=a*w+o*P+l*N+c*se,r[4]=a*C+o*U+l*G+c*$,r[8]=a*x+o*V+l*Q+c*ie,r[12]=a*T+o*W+l*J+c*oe,r[1]=u*w+f*P+h*N+p*se,r[5]=u*C+f*U+h*G+p*$,r[9]=u*x+f*V+h*Q+p*ie,r[13]=u*T+f*W+h*J+p*oe,r[2]=v*w+M*P+g*N+d*se,r[6]=v*C+M*U+g*G+d*$,r[10]=v*x+M*V+g*Q+d*ie,r[14]=v*T+M*W+g*J+d*oe,r[3]=b*w+A*P+y*N+S*se,r[7]=b*C+A*U+y*G+S*$,r[11]=b*x+A*V+y*Q+S*ie,r[15]=b*T+A*W+y*J+S*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],M=e[7],g=e[11],d=e[15],b=l*p-c*h,A=o*p-c*f,y=o*h-l*f,S=a*p-c*u,w=a*h-l*u,C=a*f-o*u;return t*(M*b-g*A+d*y)-n*(v*b-g*S+d*w)+s*(v*A-M*S+d*C)-r*(v*y-M*w+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],M=e[13],g=e[14],d=e[15],b=t*o-n*a,A=t*l-s*a,y=t*c-r*a,S=n*l-s*o,w=n*c-r*o,C=s*c-r*l,x=u*M-f*v,T=u*g-h*v,P=u*d-p*v,U=f*g-h*M,V=f*d-p*M,W=h*d-p*g,N=b*W-A*V+y*U+S*P-w*T+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(o*W-l*V+c*U)*G,e[1]=(s*V-n*W-r*U)*G,e[2]=(M*C-g*w+d*S)*G,e[3]=(h*w-f*C-p*S)*G,e[4]=(l*P-a*W-c*T)*G,e[5]=(t*W-s*P+r*T)*G,e[6]=(g*y-v*C-d*A)*G,e[7]=(u*C-h*y+p*A)*G,e[8]=(a*V-o*P+c*x)*G,e[9]=(n*P-t*V-r*x)*G,e[10]=(v*w-M*y+d*b)*G,e[11]=(f*y-u*w-p*b)*G,e[12]=(o*T-a*U-l*x)*G,e[13]=(t*U-n*T+s*x)*G,e[14]=(M*A-v*S-g*b)*G,e[15]=(u*S-f*A+h*b)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,v=r*f,M=a*u,g=a*f,d=o*f,b=l*c,A=l*u,y=l*f,S=n.x,w=n.y,C=n.z;return s[0]=(1-(M+d))*S,s[1]=(p+y)*S,s[2]=(v-A)*S,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+d))*w,s[6]=(g+b)*w,s[7]=0,s[8]=(v+A)*C,s[9]=(g-b)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,u=1/o,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===Gn)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===lr)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===Gn)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===lr)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ya.prototype.isMatrix4=!0;var Rt=Ya,us=new F,zn=new Rt,ld=new F(0,0,0),cd=new F(1,1,1),Si=new F,qr=new F,yn=new F,Xc=new Rt,qc=new Dn,Nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hd=0,Yc=new F,ds=new Dn,li=new Rt,Yr=new F,er=new F,ud=new F,dd=new Dn,Zc=new F(1,0,0),$c=new F(0,1,0),Kc=new F(0,0,1),Jc={type:"added"},fd={type:"removed"},fs={type:"childadded",child:null},ol={type:"childremoved",child:null},bn=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Nn,n=new Dn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ge}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(er,Yr,this.up):li.lookAt(Yr,er,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(li),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),fs.child=e,this.dispatchEvent(fs),fs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new F(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},pd={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,n),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=jl(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ll(a,r,e+1/3),this.g=ll(a,r,e),this.b=ll(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return lt.workingToColorSpace(on.copy(this),e),Math.round(ct(on.r*255,0,255))*65536+Math.round(ct(on.g*255,0,255))*256+Math.round(ct(on.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Sn){lt.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Zr);let n=rr(bi.h,Zr.h,t),s=rr(bi.s,Zr.s,t),r=rr(bi.l,Zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Ye;Ye.NAMES=Wh;var Ps=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new F,ci=new F,cl=new F,hi=new F,ps=new F,ms=new F,Qc=new F,hl=new F,ul=new F,dl=new F,fl=new Dt,pl=new Dt,ml=new Dt,Ai=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),ci.subVectors(n,t),cl.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(ci),l=Vn.dot(cl),c=ci.dot(ci),u=ci.dot(cl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fl,r.x),a.addScaledVector(pl,r.y),a.addScaledVector(ml,r.z),a}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),ci.subVectors(e,t),Vn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Vn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),hl.subVectors(e,n);let l=ps.dot(hl),c=ms.dot(hl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,s);let u=ps.dot(ul),f=ms.dot(ul);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ps,a);dl.subVectors(e,r);let p=ps.dot(dl),v=ms.dot(dl);if(v>=0&&p<=v)return t.copy(r);let M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ms,o);let g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Qc.subVectors(r,s),o=(f-u)/(f-u+(p-v)),t.copy(s).addScaledVector(Qc,o);let d=1/(g+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Kr.subVectors(this.max,tr),gs.subVectors(e.a,tr),xs.subVectors(e.b,tr),vs.subVectors(e.c,tr),wi.subVectors(xs,gs),Ti.subVectors(vs,xs),Yi.subVectors(gs,vs);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!gl(t,gs,xs,vs,Kr)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,gs,xs,vs,Kr))?!1:(Jr.crossVectors(wi,Ti),t=[Jr.x,Jr.y,Jr.z],gl(t,gs,xs,vs,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,$r=new Ci,gs=new F,xs=new F,vs=new F,wi=new F,Ti=new F,Yi=new F,tr=new F,Kr=new F,Jr=new F,Zi=new F;function gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kt=new F,Qr=new Fe,md=0,ut=class extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fr=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},gd=new Ci,nr=new F,xl=new F,pi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(xl)),this.expandByPoint(nr.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xd=0,Ln=new Rt,vl=new bn,_s=new F,Mn=new Ci,ir=new Ci,Zt=new F,Nt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?fr:dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Mn.min,ir.min),Mn.expandByPoint(Zt),Zt.addVectors(Mn.max,ir.max),Mn.expandByPoint(Zt)):(Mn.expandByPoint(ir.min),Mn.expandByPoint(ir.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Zt.add(_s)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,u=new F,f=new F,h=new Fe,p=new Fe,v=new Fe,M=new F,g=new F;function d(x,T,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,P),u.sub(c),f.sub(c),p.sub(h),v.sub(h);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),o[x].add(M),o[T].add(M),o[P].add(M),l[x].add(g),l[T].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,T=b.length;x<T;++x){let P=b[x],U=P.start,V=P.count;for(let W=U,N=U+V;W<N;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let A=new F,y=new F,S=new F,w=new F;function C(x){S.fromBufferAttribute(s,x),w.copy(S);let T=o[x];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(w,T);let U=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,U)}for(let x=0,T=b.length;x<T;++x){let P=b[x],U=P.start,V=P.count;for(let W=U,N=U+V;W<N;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new ut(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _l=new F,vd=new F,_d=new Ge,Hn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_l.subVectors(n,t).cross(vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_d.getNormalMatrix(e),s=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yd=0,Ri=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ns,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=br,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new F,yl=new F,jr=new F,ea=new F,pr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yl.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),ea.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=ea.dot(this.direction),l=-ea.dot(jr),c=ea.lengthSq(),u=Math.abs(1-a*a),f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=r*u,f>=0)if(h>=-v)if(h<=v){let M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yl).addScaledVector(jr,h),p}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,g=t.z-a.z,d=n.x-a.x,b=n.y-a.y,A=n.z-a.z,y=Math.abs(l),S=Math.abs(c),w=Math.abs(u),C,x,T,P,U,V,W,N,G,Q,J,se;if(y>=S&&y>=w?(T=l,V=f,G=v,se=d,l>=0?(C=c,x=u,P=h,U=p,W=M,N=g,Q=b,J=A):(C=u,x=c,P=p,U=h,W=g,N=M,Q=A,J=b)):S>=w?(T=c,V=h,G=M,se=b,c>=0?(C=u,x=l,P=p,U=f,W=g,N=v,Q=A,J=d):(C=l,x=u,P=f,U=p,W=v,N=g,Q=d,J=A)):(T=u,V=p,G=g,se=A,u>=0?(C=l,x=c,P=f,U=h,W=v,N=M,Q=d,J=b):(C=c,x=l,P=h,U=f,W=M,N=v,Q=b,J=d)),T===0)return null;let $=C/T,ie=x/T,oe=1/T,Ue=P-$*V,De=U-ie*V,St=W-$*G,rt=N-ie*G,dt=Q-$*se,Z=J-ie*se,j=dt*rt-Z*St,re=Ue*Z-De*dt,ke=St*De-rt*Ue;if(s){if(j<0||re<0||ke<0)return null}else if((j<0||re<0||ke<0)&&(j>0||re>0||ke>0))return null;let Te=j+re+ke;if(Te===0)return null;let Ke=oe*(j*V+re*G+ke*se);return(Te>0?Ke<0:Ke>0)?null:this.at(Ke/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ji=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jc=new Rt,$i=new pr,ta=new pi,eh=new F,na=new F,ia=new F,sa=new F,Ml=new F,ra=new F,th=new F,aa=new F,Mt=class extends bn{constructor(e=new Nt,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Ml.fromBufferAttribute(f,e),a?ra.addScaledVector(Ml,u):ra.addScaledVector(Ml.sub(t),u))}t.add(ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(ta.containsPoint($i.origin)===!1&&($i.intersectSphere(ta,eh)===null||$i.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(jc.copy(r).invert(),$i.copy(e.ray).applyMatrix4(jc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let g=h[v],d=a[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,S=A;y<S;y+=3){let w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=oa(this,d,e,n,c,u,f,w,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,d=M;g<d;g+=3){let b=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=oa(this,a,e,n,c,u,f,b,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let g=h[v],d=a[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,S=A;y<S;y+=3){let w=y,C=y+1,x=y+2;s=oa(this,d,e,n,c,u,f,w,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,d=M;g<d;g+=3){let b=g,A=g+1,y=g+2;s=oa(this,a,e,n,c,u,f,b,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Md(i,e,t,n,s,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ui,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,na),i.getVertexPosition(l,ia),i.getVertexPosition(c,sa);let u=Md(i,e,t,n,na,ia,sa,th);if(u){let f=new F;Ai.getBarycoord(th,na,ia,sa,f),s&&(u.uv=Ai.getInterpolatedAttribute(s,o,l,c,f,new Fe)),r&&(u.uv1=Ai.getInterpolatedAttribute(r,o,l,c,f,new Fe)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Ai.getNormal(na,ia,sa,h.normal),u.face=h,u.barycoord=f}return u}var Ca=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,u=$t,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=new pi,Sd=new Fe(.5,.5),la=new F,mr=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],v=r[8],M=r[9],g=r[10],d=r[11],b=r[12],A=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,p-u,d-v,S-b).normalize(),s[1].setComponents(c+a,p+u,d+v,S+b).normalize(),s[2].setComponents(c+o,p+f,d+M,S+A).normalize(),s[3].setComponents(c-o,p-f,d-M,S-A).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,p-h,d-g,S-y).normalize();else if(s[4].setComponents(c-l,p-h,d-g,S-y).normalize(),t===Gn)s[5].setComponents(c+l,p+h,d+g,S+y).normalize();else if(t===lr)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=Sd.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ra=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nh=new Rt,Al=new pr,ca=new pi,ha=new F,mi=class extends bn{constructor(e=new Nt,t=new Ra){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;nh.copy(s).invert(),Al.copy(e.ray).applyMatrix4(nh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,M=p;v<M;v++){let g=c.getX(v);ha.fromBufferAttribute(f,g),ih(ha,g,l,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,M=p;v<M;v++)ha.fromBufferAttribute(f,v),ih(ha,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ih(i,e,t,n,s,r,a){let o=Al.distanceSqToPoint(i);if(o<t){let l=new F;Al.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var gr=class extends pn{constructor(e=[],t=Fi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Pi=class extends pn{constructor(e,t,n=Xn,s,r,a,o=$t,l=$t,c,u=ni,f=1){if(u!==ni&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends Pi{constructor(e,t=Xn,n=Fi,s,r,a=$t,o=$t,l,c=ni){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xr=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ii=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function v(M,g,d,b,A,y,S,w,C,x,T){let P=y/C,U=S/x,V=y/2,W=S/2,N=w/2,G=C+1,Q=x+1,J=0,se=0,$=new F;for(let ie=0;ie<Q;ie++){let oe=ie*U-W;for(let Ue=0;Ue<G;Ue++){let De=Ue*P-V;$[M]=De*b,$[g]=oe*A,$[d]=N,c.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[d]=w>0?1:-1,u.push($.x,$.y,$.z),f.push(Ue/C),f.push(1-ie/x),J+=1}}for(let ie=0;ie<x;ie++)for(let oe=0;oe<C;oe++){let Ue=h+oe+G*ie,De=h+oe+G*(ie+1),St=h+(oe+1)+G*(ie+1),rt=h+(oe+1)+G*ie;l.push(Ue,De,rt),l.push(De,St,rt),se+=6}o.addGroup(p,se,T),p+=se,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ia=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new F,y=new F,S=new F;for(let w=0;w<t.length;w+=3)p(t[w+0],A),p(t[w+1],y),p(t[w+2],S),l(A,y,S,b)}function l(b,A,y,S){let w=S+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let T=b.clone().lerp(y,x/w),P=A.clone().lerp(y,x/w),U=w-x;for(let V=0;V<=U;V++)V===0&&x===w?C[x][V]=T:C[x][V]=T.clone().lerp(P,V/U)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){let P=Math.floor(T/2);T%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function c(b){let A=new F;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(b),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function u(){let b=new F;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let y=g(b)/2/Math.PI+.5,S=d(b)/Math.PI+.5;a.push(y,1-S)}v(),f()}function f(){for(let b=0;b<a.length;b+=6){let A=a[b+0],y=a[b+2],S=a[b+4],w=Math.max(A,y,S),C=Math.min(A,y,S);w>.9&&C<.1&&(A<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,A){let y=b*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function v(){let b=new F,A=new F,y=new F,S=new F,w=new Fe,C=new Fe,x=new Fe;for(let T=0,P=0;T<r.length;T+=9,P+=6){b.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),S.copy(b).add(A).add(y).divideScalar(3);let U=g(S);M(w,P+0,b,U),M(C,P+2,A,U),M(x,P+4,y,U)}}function M(b,A,y,S){S<0&&b.x===1&&(a[A]=b.x-1),y.x===0&&y.z===0&&(a[A]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var vr=class i extends Ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var si=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],M=[],g=[];for(let d=0;d<u;d++){let b=d*h-a;for(let A=0;A<c;A++){let y=A*f-r;v.push(y,-b,0),M.push(0,0,1),g.push(A/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let A=b+c*d,y=b+c*(d+1),S=b+1+c*(d+1),w=b+1+c*d;p.push(A,y,w),p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(M,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Is=class i extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,p=new F,v=new Fe;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){let d=r+g/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}f+=h}for(let M=0;M<s;M++){let g=M*(n+1);for(let d=0;d<n;d++){let b=d+g,A=b,y=b+n+1,S=b+n+2,w=b+1;o.push(A,y,w),o.push(y,S,w)}}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ls=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new F,h=new F,p=[],v=[],M=[],g=[];for(let d=0;d<=n;d++){let b=[],A=d/n,y=a+A*o,S=e*Math.cos(y),w=Math.sqrt(e*e-S*S),C=0;d===0&&a===0?C=.5/t:d===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let T=x/t,P=s+T*r;f.x=-w*Math.cos(P),f.y=S,f.z=w*Math.sin(P),v.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),g.push(T+C,1-A),b.push(c++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let A=u[d][b+1],y=u[d][b],S=u[d+1][b],w=u[d+1][b+1];(d!==0||a>0)&&p.push(A,y,w),(d!==n-1||l<Math.PI)&&p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(M,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function sh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var is={clone:ns,merge:cn},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nt=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},La=class extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Da=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ys(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=e,o=2*t-n;break;case El:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=e,l=2*n-t;break;case El:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),M=v*v,g=M*v,d=-h*g+2*h*M-h*v,b=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*v+1,A=(-1-p)*g+(1.5+p)*M+.5*v,y=p*g-p*M;for(let S=0;S!==o;++S)r[S]=d*a[u+S]+b*a[c+S]+A*a[l+S]+y*a[f+S];return r}},Fa=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Oa=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let v=(n-t)/(s-t),M=1-v;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*v;return r}let h=o*2,p=e-1;for(let v=0;v!==o;++v){let M=a[c+v],g=a[l+v],d=p*h+v*2,b=f[d],A=f[d+1],y=e*h+v*2,S=u[y],w=u[y+1],C=Ad(n,t,b,S,s);r[v]=Xh(C,M,A,w,g)}return r}};function Xh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ed(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ad(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Xh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ed(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sl(e.settings)&&(n.settings={inTangents:ys(e.settings.inTangents,Array),outTangents:ys(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break;case bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sl(this.settings)&&(rh(this.settings.inTangents,e),rh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let v=0;v!==n;++v){let M=t[f+v];if(M!==t[h+v]||M!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=wa;var Di=class extends wn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ar;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};za.prototype.ValueTypeName="color";var Va=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="number";var ka=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends wn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ar;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="vector";var Ga=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new Ga,Wa=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=new F,da=new Dn,ei=new F,yr=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new F,ah=new Fe,oh=new Fe,en=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,ah,oh),t.subVectors(oh,ah)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gi=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ms=-90,Ss=1,Xa=class extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new en(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let a=new en(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let o=new en(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let l=new en(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new en(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},qa=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Mr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cd(){this._document.hidden===!1&&this.reset()}var nc="\\[\\]\\.:\\/",Rd=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Pd="[^"+nc.replace("\\.","")+"]",Id=/((?:WC+[\/:])*)/.source.replace("WC",ic),Ld=/(WCOD+)?/.source.replace("WCOD",Pd),Dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Nd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Ud=new RegExp("^"+Id+Ld+Dd+Nd+"$"),Fd=["material","materials","bones","map"],Cl=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Ud.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Cl;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var cc=class cc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};cc.prototype.isMatrix2=!0;var Rl=cc;function sc(i,e,t,n){let s=Od(n);switch(t){case Yl:return i*e;case $l:return i*e/s.components*s.byteLength;case no:return i*e/s.components*s.byteLength;case zi:return i*e*2/s.components*s.byteLength;case io:return i*e*2/s.components*s.byteLength;case Zl:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case so:return i*e*4/s.components*s.byteLength;case Er:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:case lo:return Math.max(i,16)*Math.max(e,8)/4;case ro:case oo:return Math.max(i,8)*Math.max(e,8)/2;case co:case ho:case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case Pr:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case Io:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Do:case No:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ir:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Od(i){switch(i){case Tn:case Gl:return{byteLength:1,components:1};case Us:case Wl:case Ht:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case Xn:case ja:case qn:return{byteLength:4,components:1};case Xl:case ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){let v=f[h],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){let M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Vd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Zd,batching_vertex:$d,begin_vertex:Kd,beginnormal_vertex:Jd,bsdfs:Qd,iridescence_fragment:jd,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:xf,colorspace_pars_fragment:vf,envmap_fragment:_f,envmap_common_pars_fragment:yf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Df,envmap_vertex:bf,fog_vertex:wf,fog_pars_vertex:Tf,fog_fragment:Ef,fog_pars_fragment:Af,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Rf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:If,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:Vf,lights_fragment_maps:kf,lights_fragment_end:Hf,lightprobes_pars_fragment:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:$f,map_particle_fragment:Kf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:jf,morphinstance_vertex:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:_p,dithering_pars_fragment:yp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ep,skinbase_vertex:Ap,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Pp,specularmap_fragment:Ip,specularmap_pars_fragment:Lp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Np,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:Vp,background_vert:kp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:Zp,distance_vert:$p,distance_frag:Kp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:jp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:xm,shadow_frag:vm,sprite_vert:_m,sprite_frag:ym},ye={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ai={basic:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:cn([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:cn([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:cn([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:cn([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:cn([ye.lights,ye.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ai.physical={uniforms:cn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Bo={r:0,b:0,g:0},Mm=new Rt,mu=new Ge;mu.set(-1,0,0,0,1,0,0,0,1);function Sm(i,e,t,n,s,r){let a=new Ye(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=e.get(A,y)}return A}function v(b){let A=!1,y=p(b);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===wr)?(c===void 0&&(c=new Mt(new Ii(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:ns(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new si(2,2),new nt({name:"BackgroundMaterial",uniforms:ns(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,A){b.getRGB(Bo,tc(i)),t.buffers.color.setClear(Bo.r,Bo.g,Bo.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:v,addToRenderList:M,dispose:d}}function bm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,V,W,N,G){let Q=!1,J=f(U,N,W,V);r!==J&&(r=J,c(r.object)),Q=p(U,N,W,G),Q&&v(U,N,W,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(U,V,W,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,V,W,N){let G=N.wireframe===!0,Q=n[V.id];Q===void 0&&(Q={},n[V.id]=Q);let J=U.isInstancedMesh===!0?U.id:0,se=Q[J];se===void 0&&(se={},Q[J]=se);let $=se[W.id];$===void 0&&($={},se[W.id]=$);let ie=$[G];return ie===void 0&&(ie=h(l()),$[G]=ie),ie}function h(U){let V=[],W=[],N=[];for(let G=0;G<t;G++)V[G]=0,W[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:N,object:U,attributes:{},index:null}}function p(U,V,W,N){let G=r.attributes,Q=V.attributes,J=0,se=W.getAttributes();for(let $ in se)if(se[$].location>=0){let oe=G[$],Ue=Q[$];if(Ue===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),oe===void 0||oe.attribute!==Ue||Ue&&oe.data!==Ue.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function v(U,V,W,N){let G={},Q=V.attributes,J=0,se=W.getAttributes();for(let $ in se)if(se[$].location>=0){let oe=Q[$];oe===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor));let Ue={};Ue.attribute=oe,oe&&oe.data&&(Ue.data=oe.data),G[$]=Ue,J++}r.attributes=G,r.attributesNum=J,r.index=N}function M(){let U=r.newAttributes;for(let V=0,W=U.length;V<W;V++)U[V]=0}function g(U){d(U,0)}function d(U,V){let W=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;W[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),G[U]!==V&&(i.vertexAttribDivisor(U,V),G[U]=V)}function b(){let U=r.newAttributes,V=r.enabledAttributes;for(let W=0,N=V.length;W<N;W++)V[W]!==U[W]&&(i.disableVertexAttribArray(W),V[W]=0)}function A(U,V,W,N,G,Q,J){J===!0?i.vertexAttribIPointer(U,V,W,G,Q):i.vertexAttribPointer(U,V,W,N,G,Q)}function y(U,V,W,N){M();let G=N.attributes,Q=W.getAttributes(),J=V.defaultAttributeValues;for(let se in Q){let $=Q[se];if($.location>=0){let ie=G[se];if(ie===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let oe=ie.normalized,Ue=ie.itemSize,De=e.get(ie);if(De===void 0)continue;let St=De.buffer,rt=De.type,dt=De.bytesPerElement,Z=rt===i.INT||rt===i.UNSIGNED_INT||ie.gpuType===ja;if(ie.isInterleavedBufferAttribute){let j=ie.data,re=j.stride,ke=ie.offset;if(j.isInstancedInterleavedBuffer){for(let Te=0;Te<$.locationSize;Te++)d($.location+Te,j.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Te=0;Te<$.locationSize;Te++)g($.location+Te);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Te=0;Te<$.locationSize;Te++)A($.location+Te,Ue/$.locationSize,rt,oe,re*dt,(ke+Ue/$.locationSize*Te)*dt,Z)}else{if(ie.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)d($.location+j,ie.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let j=0;j<$.locationSize;j++)g($.location+j);i.bindBuffer(i.ARRAY_BUFFER,St);for(let j=0;j<$.locationSize;j++)A($.location+j,Ue/$.locationSize,rt,oe,Ue*dt,Ue/$.locationSize*j*dt,Z)}}else if(J!==void 0){let oe=J[se];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv($.location,oe);break;case 3:i.vertexAttrib3fv($.location,oe);break;case 4:i.vertexAttrib4fv($.location,oe);break;default:i.vertexAttrib1fv($.location,oe)}}}}b()}function S(){T();for(let U in n){let V=n[U];for(let W in V){let N=V[W];for(let G in N){let Q=N[G];for(let J in Q)u(Q[J].object),delete Q[J];delete N[G]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let V=n[U.id];for(let W in V){let N=V[W];for(let G in N){let Q=N[G];for(let J in Q)u(Q[J].object),delete Q[J];delete N[G]}}delete n[U.id]}function C(U){for(let V in n){let W=n[V];for(let N in W){let G=W[N];if(G[U.id]===void 0)continue;let Q=G[U.id];for(let J in Q)u(Q[J].object),delete Q[J];delete G[U.id]}}}function x(U){for(let V in n){let W=n[V],N=U.isInstancedMesh===!0?U.id:0,G=W[N];if(G!==void 0){for(let Q in G){let J=G[Q];for(let se in J)u(J[se].object),delete J[se];delete G[Q]}delete W[N],Object.keys(W).length===0&&delete n[V]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function wm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&C!==qn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:w}}function Em(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Hn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let v=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,A=b*4,y=d.clippingState||null;l.value=y,y=u(v,h,A,p);for(let S=0;S!==A;++S)y[S]=t[S];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,v){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let d=p+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,y=p;A!==M;++A,y+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var zs=4,Am=6,Cm=20,Rm=256,Dr=new gi,Yh=new Ye,hc=null,uc=0,dc=0,fc=!1,Pm=new F,ss=new F,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Pm}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ht,format:Fn,colorSpace:Qi,depthBuffer:!1},s=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Im(r)),this._blurMaterial=Dm(r,e,t),this._ggxMaterial=Lm(r,e,t)}return s}_compileMaterial(e){let t=new Mt(new Nt,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,s,r){let l=new en(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Yh),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Ii,new ji({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,d=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,d=!0):(g.color.copy(Yh),d=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let S=this._cubeSize;Bs(s,y*S,A>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fi||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:v}=this,M=this._sizeLods[n],g=3*M*(n>v-zs?n-v+zs:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Bs(r,g,d,3*M,2*M),s.setRenderTarget(r),s.render(o,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,Bs(e,g,d,3*M,2*M),s.setRenderTarget(e),s.render(o,Dr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-zs?s-this._lodMax+zs:0),h=4*(this._cubeSize-u);Bs(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Dr)}};function Im(i){let e=[],t=[],n=i,s=i-zs+1+Am;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,v=new Float32Array(p*h*f),M=new Float32Array(p*h*f);for(let d=0;d<f;d++){let b=d%3*2/3-1,A=d>2?0:-1,y=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];v.set(y,p*h*d);for(let S=0;S<h;S++){let w=u[S*2]*2-1,C=u[S*2+1]*2-1;d===0?ss.set(1,C,w):d===1?ss.set(-w,1,-C):d===2?ss.set(-w,C,1):d===3?ss.set(-1,C,-w):d===4?ss.set(-w,-1,C):ss.set(w,C,-1),ss.toArray(M,(d*h+S)*p)}}let g=new Nt;g.setAttribute("position",new ut(v,p)),g.setAttribute("outputDirection",new ut(M,p)),t.push(new Mt(g,null)),n>zs&&n--}return{lodMeshes:t,sizeLods:e}}function Zh(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lm(i,e,t){return new nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Dm(i,e,t){return new nt({name:"SphericalGaussianBlur",defines:{SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function $h(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Kh(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ko=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ii(5,5,5),r=new nt({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Un});r.uniforms.tEquirect.value=t;let a=new Mt(s,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=tn),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Nm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ka||p===Ja)if(e.has(h)){let v=e.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let M=new ko(v.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,v=p===Ka||p===Ja,M=p===Fi||p===ts;if(v||M){let g=t.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Vo(i)),g=v?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return v&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Vo(i)),g=v?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Ka?h.mapping=Fi:p===Ja&&(h.mapping=ts),h}function l(h){let p=0,v=6;for(let M=0;M<v;M++)h[M]!==void 0&&p++;return p===v}function c(h){let p=h.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,v=f.attributes.position,M=0;if(v===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let A=0,y=b.length;A<y;A+=3){let S=b[A+0],w=b[A+1],C=b[A+2];h.push(S,w,w,C,C,S)}}else{let b=v.array;M=v.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let S=A+0,w=A+1,C=A+2;h.push(S,w,w,C,C,S)}}let g=new(v.count>=65535?fr:dr)(h,1);g.version=M;let d=r.get(f);d&&e.remove(d),r.set(f,g)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Om(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Bm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,e,t){let n=new WeakMap,s=new Dt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;p===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*S*4*f),C=new hr(w,y,S,f);C.type=qn,C.needsUpdate=!0;let x=A*4;for(let P=0;P<f;P++){let U=g[P],V=d[P],W=b[P],N=y*S*4*P;for(let G=0;G<U.count;G++){let Q=G*x;p===!0&&(s.fromBufferAttribute(U,G),w[N+Q+0]=s.x,w[N+Q+1]=s.y,w[N+Q+2]=s.z,w[N+Q+3]=0),v===!0&&(s.fromBufferAttribute(V,G),w[N+Q+4]=s.x,w[N+Q+5]=s.y,w[N+Q+6]=s.z,w[N+Q+7]=0),M===!0&&(s.fromBufferAttribute(W,G),w[N+Q+8]=s.x,w[N+Q+9]=s.y,w[N+Q+10]=s.z,w[N+Q+11]=W.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new Fe(y,S)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Vm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var km={[Ul]:"LINEAR_TONE_MAPPING",[Fl]:"REINHARD_TONE_MAPPING",[Ol]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[zl]:"CUSTOM_TONE_MAPPING"};function Hm(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Nt;c.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new At([0,2,0,0,2,0],2));let u=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Mt(c,u),h=new gi(-1,1,1,-1,0,1),p=null,v=null,M=!1,g,d=null,b=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let w=0;w<b.length;w++){let C=b[w];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){b=y,A=b.length>0&&b[0].isRenderPass===!0;let S=a.width,w=a.height;b.length>0&&o===null&&(o=new Ot(S,w,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(S,w,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let x=b[C];x.setSize&&x.setSize(S,w)}},this.begin=function(y,S){if(M||y.toneMapping===Wn&&b.length===0)return!1;if(d=S,S!==null){let w=S.width,C=S.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Wn,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=g,M=!0;let w=a,C=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,C,w,S),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,u.defines={},lt.getTransfer(p)===yt&&(u.defines.SRGB_TRANSFER="");let x=km[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var gu=new pn,gc=new Pi(1,1),xu=new hr,vu=new Aa,_u=new gr,Jh=[],Qh=[],jh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),Wt(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),Wt(t,n)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Wt(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function e0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=t.isReversedDepthBuffer()?Oo:Fo,r=gc):r=gu,t.setTexture2D(e||r,s)}function r0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vu,s)}function a0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_u,s)}function o0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xu,s)}function l0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return jm;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(i,e){i.uniform1fv(this.addr,e)}function h0(i,e){let t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function u0(i,e){let t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function d0(i,e){let t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){let t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){let t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){let t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function _0(i,e){i.uniform4iv(this.addr,e)}function y0(i,e){i.uniform1uiv(this.addr,e)}function M0(i,e){i.uniform2uiv(this.addr,e)}function S0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function w0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gc:a=gu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function T0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vu,r[a])}function E0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_u,r[a])}function A0(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xu,r[a])}function C0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return A0}}var xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}},vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function R0(i,e,t){let n=i.name,s=n.length;for(pc.lastIndex=0;;){let r=pc.exec(n),a=pc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nu(t,c===void 0?new xc(o,i,e):new vc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new _c(o),nu(t,f)),t=f}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);R0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function iu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var P0=37297,I0=0;function L0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var su=new Ge;function D0(i){lt._getMatrix(su,lt.workingColorSpace,i);let e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case or:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ru(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+L0(i.getShaderSource(e),o)}else return r}function N0(i,e){let t=D0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var U0={[Ul]:"Linear",[Fl]:"Reinhard",[Ol]:"Cineon",[Bl]:"ACESFilmic",[Vl]:"AgX",[kl]:"Neutral",[zl]:"Custom"};function F0(i,e){let t=U0[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zo=new F;function O0(){lt.getLuminanceCoefficients(zo);let i=zo.x.toFixed(4),e=zo.y.toFixed(4),t=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function z0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ur(i){return i!==""}function au(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(k0,G0)}var H0=new Map;function G0(i,e){let t=et[e];if(t===void 0){let n=H0.get(e);if(n!==void 0)t=et[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yc(t)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(W0,X0)}function X0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var q0={[Sr]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Y0(i){return q0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Z0={[Fi]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function $0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Z0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var K0={[ts]:"ENVMAP_MODE_REFRACTION"};function J0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q0={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Ch]:"ENVMAP_BLENDING_ADD"};function j0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q0[i.combine]||"ENVMAP_BLENDING_NONE"}function eg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Y0(t),c=$0(t),u=J0(t),f=j0(t),h=eg(t),p=B0(t),v=z0(r),M=s.createProgram(),g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(g=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?et.tonemapping_pars_fragment:"",t.toneMapping!==Wn?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=yc(a),a=au(a,t),a=ou(a,t),o=yc(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=b+g+a,y=b+d+o,S=iu(s,s.VERTEX_SHADER,A),w=iu(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(U){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(w)||"",G=V.trim(),Q=W.trim(),J=N.trim(),se=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,w);else{let ie=ru(s,S,"vertex"),oe=ru(s,w,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+ie+`
`+oe)}else G!==""?Ve("WebGLProgram: Program Info Log:",G):(Q===""||J==="")&&($=!1);$&&(U.diagnostics={runnable:se,programLog:G,vertexShader:{log:Q,prefix:g},fragmentShader:{log:J,prefix:d}})}s.deleteShader(S),s.deleteShader(w),x=new Vs(s,M),T=V0(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,P0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=w,this}var ng=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}};function ig(i){return i===zi||i===Pr||i===Ir}function sg(i,e,t,n,s,r){let a=new ur,o=new Mc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,P,U,V,W){let N=U.fog,G=V.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||Q,J),$=se&&se.mapping===wr?se.image.height:null,ie=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ue=oe!==void 0?oe.length:0,De=0;G.morphAttributes.position!==void 0&&(De=1),G.morphAttributes.normal!==void 0&&(De=2),G.morphAttributes.color!==void 0&&(De=3);let St,rt,dt,Z;if(ie){let ot=ai[ie];St=ot.vertexShader,rt=ot.fragmentShader}else{St=x.vertexShader,rt=x.fragmentShader;let ot=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,ot,ft),dt=ot.id,Z=ft.id}let j=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,Ke=!!x.map,Ft=!!x.matcap,Je=!!se,at=!!x.aoMap,vt=!!x.lightMap,it=!!x.bumpMap&&x.wireframe===!1,bt=!!x.normalMap,zt=!!x.displacementMap,Qt=!!x.emissiveMap,Me=!!x.metalnessMap,_t=!!x.roughnessMap,D=x.anisotropy>0,Xt=x.clearcoat>0,gt=x.dispersion>0,E=x.retroreflectivity>0,m=x.iridescence>0,B=x.sheen>0,z=x.transmission>0,K=D&&!!x.anisotropyMap,ce=Xt&&!!x.clearcoatMap,X=Xt&&!!x.clearcoatNormalMap,O=Xt&&!!x.clearcoatRoughnessMap,Y=m&&!!x.iridescenceMap,le=m&&!!x.iridescenceThicknessMap,Ie=B&&!!x.sheenColorMap,xe=B&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Le=!!x.specularColorMap,Ne=!!x.specularIntensityMap,We=z&&!!x.transmissionMap,L=z&&!!x.thicknessMap,pe=!!x.gradientMap,ne=!!x.alphaMap,fe=x.alphaTest>0,Se=!!x.alphaHash,ae=!!x.extensions,_e=Wn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Pe={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:St,fragmentShader:rt,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:Ft,envMap:Je,envMapMode:Je&&se.mapping,envMapCubeUVHeight:$,aoMap:at,lightMap:vt,bumpMap:it,normalMap:bt,displacementMap:zt,emissiveMap:Qt,normalMapObjectSpace:bt&&x.normalMapType===Ih,normalMapTangentSpace:bt&&x.normalMapType===Kl,packedNormalMap:bt&&x.normalMapType===Kl&&ig(x.normalMap.format),metalnessMap:Me,roughnessMap:_t,anisotropy:D,anisotropyMap:K,clearcoat:Xt,clearcoatMap:ce,clearcoatNormalMap:X,clearcoatRoughnessMap:O,dispersion:gt,retroreflection:E,iridescence:m,iridescenceMap:Y,iridescenceThicknessMap:le,sheen:B,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:ge,specularColorMap:Le,specularIntensityMap:Ne,transmission:z,transmissionMap:We,thicknessMap:L,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:fe,alphaHash:Se,combine:x.combine,mapUv:Ke&&v(x.map.channel),aoMapUv:at&&v(x.aoMap.channel),lightMapUv:vt&&v(x.lightMap.channel),bumpMapUv:it&&v(x.bumpMap.channel),normalMapUv:bt&&v(x.normalMap.channel),displacementMapUv:zt&&v(x.displacementMap.channel),emissiveMapUv:Qt&&v(x.emissiveMap.channel),metalnessMapUv:Me&&v(x.metalnessMap.channel),roughnessMapUv:_t&&v(x.roughnessMap.channel),anisotropyMapUv:K&&v(x.anisotropyMap.channel),clearcoatMapUv:ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:X&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(x.sheenRoughnessMap.channel),specularMapUv:ge&&v(x.specularMap.channel),specularColorMapUv:Le&&v(x.specularColorMap.channel),specularIntensityMapUv:Ne&&v(x.specularIntensityMap.channel),transmissionMapUv:We&&v(x.transmissionMap.channel),thicknessMapUv:L&&v(x.thicknessMap.channel),alphaMapUv:ne&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(bt||D),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ke||ne),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:De,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:Qt&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let T=p[x.type],P;if(T){let U=ai[T];P=is.clone(U.uniforms)}else P=x.uniforms;return P}function y(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new tg(i,T,x,s),c.push(P),u.set(T,P)),P}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:C}}function rg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,M,g,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=v,b.materialVariant=a(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=g,b.group=d),e++,b}function l(h,p,v,M,g,d,b){b.reversedDepth===!0&&(g=-g);let A=o(h,p,v,M,g,d);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function c(h,p,v,M,g,d){let b=o(h,p,v,M,g,d);v.transmission>0?n.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,p){t.length>1&&t.sort(h||ag),n.length>1&&n.sort(p||hu),s.length>1&&s.sort(p||hu)}function f(){for(let h=e,p=i.length;h<p;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function og(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new uu,i.set(n,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function cg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hg=0;function ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dg(i){let e=new lg,t=cg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Rt,a=new Rt;function o(c){let u=0,f=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,v=0,M=0,g=0,d=0,b=0,A=0,y=0,S=0,w=0,C=0,x=0,T=0,P=0;c.sort(ug);for(let V=0,W=c.length;V<W;V++){let N=c[V],G=N.color,Q=N.intensity,J=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===zi?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*Q,f+=G.g*Q,h+=G.b*Q;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Q);P++}else if(N.isSunLight){let $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,oe=t.get(N);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[v]=oe,n.sunShadowMap[v]=se;let Ue=ie.getViewportCount();for(let De=0;De<Ue;De++)n.sunShadowMatrix[M+De]=ie.getMatrix(De),n.sunShadowCascade[M+De]=ie._cascadeData[De];M+=Ue,v++}n.sun[p]=$,p++}else if(N.isDirectionalLight){let $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,oe=t.get(N);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,n.directionalShadow[g]=oe,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=$,g++}else if(N.isSpotLight){let $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(G).multiplyScalar(Q),$.distance=J,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[b]=$;let ie=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,ie.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[b]=ie.matrix,N.castShadow){let oe=t.get(N);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,n.spotShadow[b]=oe,n.spotShadowMap[b]=se,C++}b++}else if(N.isRectAreaLight){let $=e.get(N);$.color.copy(G).multiplyScalar(Q),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=$,A++}else if(N.isPointLight){let $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){let ie=N.shadow,oe=t.get(N);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,oe.shadowCameraNear=ie.camera.near,oe.shadowCameraFar=ie.camera.far,n.pointShadow[d]=oe,n.pointShadowMap[d]=se,n.pointShadowMatrix[d]=N.shadow.matrix,w++}n.point[d]=$,d++}else if(N.isHemisphereLight){let $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(Q),$.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[y]=$,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==b||U.rectAreaLength!==A||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==S||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=b,n.rectArea.length=A,n.point.length=d,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.sunLength=p,U.directionalLength=g,U.pointLength=d,U.spotLength=b,U.rectAreaLength=A,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=S,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=P,n.version=hg++)}function l(c,u){let f=0,h=0,p=0,v=0,M=0,g=0,d=u.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let y=c[b];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(y.isSpotLight){let S=n.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),v++}else if(y.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function du(i){let e=new dg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new du(i),e.set(s,[o])):r>=a.length?(o=new du(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],xg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],fu=new Rt,Nr=new F,mc=new F;function vg(i,e,t){let n=new mr,s=new Fe,r=new Fe,a=new Dt,o=new Da,l=new Na,c={},u=t.maxTextureSize,f={[Ui]:nn,[nn]:Ui,[ln]:ln},h=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Nt;v.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Mt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let d=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===hh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Un),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=d!==this.type;W&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=w.length;N<G;N++){let Q=w[N],J=Q.shadow;if(J===void 0){Ve("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let se=J.getFrameExtents();s.multiply(se),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,J.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=$,J.map===null||W===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ds){if(Q.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ot(s.x,s.y,{format:zi,type:Ht,minFilter:tn,magFilter:tn,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new Pi(s.x,s.y,qn),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=ni,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t}else Q.isPointLight?(J.map=new ko(s.x),J.map.depthTexture=new Pa(s.x,Xn)):(J.map=new Ot(s.x,s.y),J.map.depthTexture=new Pi(s.x,s.y,Xn)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=ni,this.type===Sr?(J.map.depthTexture.compareFunction=$?Oo:Fo,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let ie=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Q.isPointLight!==!0&&J.updateMatrices(Q,x);for(let oe=0;oe<ie;oe++){let Ue=J.getCamera(oe);if(Q.isPointLight){let De=J.camera,St=J.matrix,rt=Q.distance||De.far;rt!==De.far&&(De.far=rt,De.updateProjectionMatrix()),Nr.setFromMatrixPosition(Q.matrixWorld),De.position.copy(Nr),mc.copy(De.position),mc.add(gg[oe]),De.up.copy(xg[oe]),De.lookAt(mc),De.updateMatrixWorld(),St.makeTranslation(-Nr.x,-Nr.y,-Nr.z),fu.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),J._frustum.setFromProjectionMatrix(fu,De.coordinateSystem,De.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(J.map),i.clear());let De=J.getViewport(oe);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),V.viewport(a)}n=J.getFrustum(oe),y(C,x,Ue,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Ds&&b(J,x),J.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,U)};function b(w,C){let x=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ot(s.x,s.y,{format:zi,type:Ht}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,p,M,null)}function A(w,C,x,T){let P=null,U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=P.uuid,W=C.uuid,N=c[V];N===void 0&&(N={},c[V]=N);let G=N[W];G===void 0&&(G=P.clone(),N[W]=G,C.addEventListener("dispose",S)),P=G}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Ds?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let V=i.properties.get(P);V.light=x}return P}function y(w,C,x,T,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let W=e.update(w),N=w.material;if(Array.isArray(N)){let G=W.groups;for(let Q=0,J=G.length;Q<J;Q++){let se=G[Q],$=N[se.materialIndex];if($&&$.visible){let ie=A(w,$,T,P);w.onBeforeShadow(i,w,C,x,W,ie,se),i.renderBufferDirect(x,null,W,ie,w,se),w.onAfterShadow(i,w,C,x,W,ie,se)}}}else if(N.visible){let G=A(w,N,T,P);w.onBeforeShadow(i,w,C,x,W,G,null),i.renderBufferDirect(x,null,W,G,w,null),w.onAfterShadow(i,w,C,x,W,G,null)}}let V=w.children;for(let W=0,N=V.length;W<N;W++)y(V[W],C,x,T,P)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function _g(i,e){function t(){let L=!1,pe=new Dt,ne=null,fe=new Dt(0,0,0,0);return{setMask:function(Se){ne!==Se&&!L&&(i.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){L=Se},setClear:function(Se,ae,_e,Pe,ot){ot===!0&&(Se*=Pe,ae*=Pe,_e*=Pe),pe.set(Se,ae,_e,Pe),fe.equals(pe)===!1&&(i.clearColor(Se,ae,_e,Pe),fe.copy(pe))},reset:function(){L=!1,ne=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,pe=!1,ne=null,fe=null,Se=null;return{setReversed:function(ae){if(pe!==ae){let _e=e.get("EXT_clip_control");ae?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;let Pe=Se;Se=null,this.setClear(Pe)}},getReversed:function(){return pe},setTest:function(ae){ae?j(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!L&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(pe&&(ae=Gh[ae]),fe!==ae){switch(ae){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ae}},setLocked:function(ae){L=ae},setClear:function(ae){Se!==ae&&(Se=ae,pe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){L=!1,ne=null,fe=null,Se=null,pe=!1}}}function s(){let L=!1,pe=null,ne=null,fe=null,Se=null,ae=null,_e=null,Pe=null,ot=null;return{setTest:function(ft){L||(ft?j(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(ft){pe!==ft&&!L&&(i.stencilMask(ft),pe=ft)},setFunc:function(ft,gn,An){(ne!==ft||fe!==gn||Se!==An)&&(i.stencilFunc(ft,gn,An),ne=ft,fe=gn,Se=An)},setOp:function(ft,gn,An){(ae!==ft||_e!==gn||Pe!==An)&&(i.stencilOp(ft,gn,An),ae=ft,_e=gn,Pe=An)},setLocked:function(ft){L=ft},setClear:function(ft){ot!==ft&&(i.clearStencil(ft),ot=ft)},reset:function(){L=!1,pe=null,ne=null,fe=null,Se=null,ae=null,_e=null,Pe=null,ot=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,v=[],M=null,g=!1,d=null,b=null,A=null,y=null,S=null,w=null,C=null,x=new Ye(0,0,0),T=0,P=!1,U=null,V=null,W=null,N=null,G=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,se=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec($)[1]),J=se>=1):$.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=se>=2);let ie=null,oe={},Ue=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),St=new Dt().fromArray(Ue),rt=new Dt().fromArray(De);function dt(L,pe,ne,fe){let Se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(L,ae),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ne;_e++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(pe+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ae}let Z={};Z[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ts),it(!1),bt(Pl),j(i.CULL_FACE),at(Un);function j(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function re(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ke(L,pe){return h[L]!==pe?(i.bindFramebuffer(L,pe),h[L]=pe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Te(L,pe){let ne=v,fe=!1;if(L){ne=p.get(pe),ne===void 0&&(ne=[],p.set(pe,ne));let Se=L.textures;if(ne.length!==Se.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,_e=Se.length;ae<_e;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Se.length,fe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ne)}function Ke(L){return M!==L?(i.useProgram(L),M=L,!0):!1}let Ft={[es]:i.FUNC_ADD,[uh]:i.FUNC_SUBTRACT,[dh]:i.FUNC_REVERSE_SUBTRACT};Ft[fh]=i.MIN,Ft[ph]=i.MAX;let Je={[mh]:i.ZERO,[$a]:i.ONE,[gh]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[Sh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[vh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[br]:i.ONE_MINUS_SRC_ALPHA,[Mh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Th]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function at(L,pe,ne,fe,Se,ae,_e,Pe,ot,ft){if(L===Un){g===!0&&(re(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),L!==Za){if(L!==d||ft!==P){if((b!==es||S!==es)&&(i.blendEquation(i.FUNC_ADD),b=es,S=es),ft)switch(L){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kt:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}A=null,y=null,w=null,C=null,x.set(0,0,0),T=0,d=L,P=ft}return}Se=Se||pe,ae=ae||ne,_e=_e||fe,(pe!==b||Se!==S)&&(i.blendEquationSeparate(Ft[pe],Ft[Se]),b=pe,S=Se),(ne!==A||fe!==y||ae!==w||_e!==C)&&(i.blendFuncSeparate(Je[ne],Je[fe],Je[ae],Je[_e]),A=ne,y=fe,w=ae,C=_e),(Pe.equals(x)===!1||ot!==T)&&(i.blendColor(Pe.r,Pe.g,Pe.b,ot),x.copy(Pe),T=ot),d=L,P=!1}function vt(L,pe){L.side===ln?re(i.CULL_FACE):j(i.CULL_FACE);let ne=L.side===nn;pe&&(ne=!ne),it(ne),L.blending===Ns&&L.transparent===!1?at(Un):at(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function bt(L){L!==lh?(j(i.CULL_FACE),L!==V&&(L===Pl?i.cullFace(i.BACK):L===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),V=L}function zt(L){L!==W&&(J&&i.lineWidth(L),W=L)}function Qt(L,pe,ne){L?(j(i.POLYGON_OFFSET_FILL),(N!==pe||G!==ne)&&(N=pe,G=ne,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,ne))):re(i.POLYGON_OFFSET_FILL)}function Me(L){L?j(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function _t(L){L===void 0&&(L=i.TEXTURE0+Q-1),ie!==L&&(i.activeTexture(L),ie=L)}function D(L,pe,ne){ne===void 0&&(ie===null?ne=i.TEXTURE0+Q-1:ne=ie);let fe=oe[ne];fe===void 0&&(fe={type:void 0,texture:void 0},oe[ne]=fe),(fe.type!==L||fe.texture!==pe)&&(ie!==ne&&(i.activeTexture(ne),ie=ne),i.bindTexture(L,pe||Z[L]),fe.type=L,fe.texture=pe)}function Xt(){let L=oe[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function m(){try{i.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function B(){try{i.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ce(){try{i.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function X(){try{i.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function O(){try{i.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Y(){try{i.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function le(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function Ie(L,pe){f[L]!==pe&&(i.pixelStorei(L,pe),f[L]=pe)}function xe(L){St.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),St.copy(L))}function ge(L){rt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function Le(L,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let fe=ne.get(L);fe===void 0&&(fe=i.getUniformBlockIndex(pe,L.name),ne.set(L,fe))}function Ne(L,pe){let fe=c.get(pe).get(L);l.get(pe)!==fe&&(i.uniformBlockBinding(pe,fe,L.__bindingPointIndex),l.set(pe,fe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ie=null,oe={},h={},p=new WeakMap,v=[],M=null,g=!1,d=null,b=null,A=null,y=null,S=null,w=null,C=null,x=new Ye(0,0,0),T=0,P=!1,U=null,V=null,W=null,N=null,G=null,St.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:re,bindFramebuffer:ke,drawBuffers:Te,useProgram:Ke,setBlending:at,setMaterial:vt,setFlipSided:it,setCullFace:bt,setLineWidth:zt,setPolygonOffset:Qt,setScissorTest:Me,activeTexture:_t,bindTexture:D,unbindTexture:Xt,compressedTexImage2D:gt,compressedTexImage3D:E,texImage2D:O,texImage3D:Y,pixelStorei:Ie,getParameter:le,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ce,texStorage3D:X,texSubImage2D:m,texSubImage3D:B,compressedTexSubImage2D:z,compressedTexSubImage3D:K,scissor:xe,viewport:ge,reset:We}}function yg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,f=new Set,h,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,m){return v?new OffscreenCanvas(E,m):cr("canvas")}function g(E,m,B){let z=1,K=gt(E);if((K.width>B||K.height>B)&&(z=B/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(z*K.width),X=Math.floor(z*K.height);h===void 0&&(h=M(ce,X));let O=m?M(ce,X):h;return O.width=ce,O.height=X,O.getContext("2d").drawImage(E,0,0,ce,X),Ve("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+X+")."),O}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function d(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,m,B,z,K,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X;z&&(X=e.get("EXT_texture_norm16"),X||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=m;if(m===i.RED&&(B===i.FLOAT&&(O=i.R32F),B===i.HALF_FLOAT&&(O=i.R16F),B===i.UNSIGNED_BYTE&&(O=i.R8),B===i.UNSIGNED_SHORT&&X&&(O=X.R16_EXT),B===i.SHORT&&X&&(O=X.R16_SNORM_EXT)),m===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(O=i.R8UI),B===i.UNSIGNED_SHORT&&(O=i.R16UI),B===i.UNSIGNED_INT&&(O=i.R32UI),B===i.BYTE&&(O=i.R8I),B===i.SHORT&&(O=i.R16I),B===i.INT&&(O=i.R32I)),m===i.RG&&(B===i.FLOAT&&(O=i.RG32F),B===i.HALF_FLOAT&&(O=i.RG16F),B===i.UNSIGNED_BYTE&&(O=i.RG8),B===i.UNSIGNED_SHORT&&X&&(O=X.RG16_EXT),B===i.SHORT&&X&&(O=X.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(O=i.RG8UI),B===i.UNSIGNED_SHORT&&(O=i.RG16UI),B===i.UNSIGNED_INT&&(O=i.RG32UI),B===i.BYTE&&(O=i.RG8I),B===i.SHORT&&(O=i.RG16I),B===i.INT&&(O=i.RG32I)),m===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(O=i.RGB8UI),B===i.UNSIGNED_SHORT&&(O=i.RGB16UI),B===i.UNSIGNED_INT&&(O=i.RGB32UI),B===i.BYTE&&(O=i.RGB8I),B===i.SHORT&&(O=i.RGB16I),B===i.INT&&(O=i.RGB32I)),m===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),B===i.UNSIGNED_INT&&(O=i.RGBA32UI),B===i.BYTE&&(O=i.RGBA8I),B===i.SHORT&&(O=i.RGBA16I),B===i.INT&&(O=i.RGBA32I)),m===i.RGB&&(B===i.UNSIGNED_SHORT&&X&&(O=X.RGB16_EXT),B===i.SHORT&&X&&(O=X.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),m===i.RGBA){let Y=ce?or:lt.getTransfer(K);B===i.FLOAT&&(O=i.RGBA32F),B===i.HALF_FLOAT&&(O=i.RGBA16F),B===i.UNSIGNED_BYTE&&(O=Y===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&X&&(O=X.RGBA16_EXT),B===i.SHORT&&X&&(O=X.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function S(E,m){let B;return E?m===null||m===Xn||m===Fs?B=i.DEPTH24_STENCIL8:m===qn?B=i.DEPTH32F_STENCIL8:m===Us&&(B=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Xn||m===Fs?B=i.DEPTH_COMPONENT24:m===qn?B=i.DEPTH_COMPONENT32F:m===Us&&(B=i.DEPTH_COMPONENT16),B}function w(E,m){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==tn?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function C(E){let m=E.target;m.removeEventListener("dispose",C),T(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&f.delete(m)}function x(E){let m=E.target;m.removeEventListener("dispose",x),U(m)}function T(E){let m=n.get(E);if(m.__webglInit===void 0)return;let B=E.source,z=p.get(B);if(z){let K=z[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(E),Object.keys(z).length===0&&p.delete(B)}n.remove(E)}function P(E){let m=n.get(E);i.deleteTexture(m.__webglTexture);let B=E.source,z=p.get(B);delete z[m.__cacheKey],a.memory.textures--}function U(E){let m=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(m.__webglFramebuffer[z]))for(let K=0;K<m.__webglFramebuffer[z].length;K++)i.deleteFramebuffer(m.__webglFramebuffer[z][K]);else i.deleteFramebuffer(m.__webglFramebuffer[z]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[z])}else{if(Array.isArray(m.__webglFramebuffer))for(let z=0;z<m.__webglFramebuffer.length;z++)i.deleteFramebuffer(m.__webglFramebuffer[z]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let z=0;z<m.__webglColorRenderbuffer.length;z++)m.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[z]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let B=E.textures;for(let z=0,K=B.length;z<K;z++){let ce=n.get(B[z]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(B[z])}n.remove(E)}let V=0;function W(){V=0}function N(){return V}function G(E){V=E}function Q(){let E=V;return E>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function J(E){let m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function se(E,m){let B=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let z=E.image;if(z===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,E,m);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+m)}function $(E,m){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){re(B,E,m);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+m)}function ie(E,m){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){re(B,E,m);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+m)}function oe(E,m){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){ke(B,E,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+m)}let Ue={[Sa]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},De={[$t]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},St={[Dh]:i.NEVER,[Bh]:i.ALWAYS,[Nh]:i.LESS,[Fo]:i.LEQUAL,[Uh]:i.EQUAL,[Oo]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function rt(E,m){if(m.type===qn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===tn||m.magFilter===Qa||m.magFilter===Tr||m.magFilter===Oi||m.minFilter===tn||m.minFilter===Qa||m.minFilter===Tr||m.minFilter===Oi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ue[m.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ue[m.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ue[m.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,De[m.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,De[m.minFilter]),m.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===$t||m.minFilter!==Tr&&m.minFilter!==Oi||m.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function dt(E,m){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",C));let z=m.source,K=p.get(z);K===void 0&&(K={},p.set(z,K));let ce=J(m);if(ce!==E.__cacheKey){K[ce]===void 0&&(K[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ce].usedTimes++;let X=K[E.__cacheKey];X!==void 0&&(K[E.__cacheKey].usedTimes--,X.usedTimes===0&&P(m)),E.__cacheKey=ce,E.__webglTexture=K[ce].texture}return B}function Z(E,m,B){return Math.floor(Math.floor(E/B)/m)}function j(E,m,B,z){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,B,z,m.data);else{ce.sort((Ie,xe)=>Ie.start-xe.start);let X=0;for(let Ie=1;Ie<ce.length;Ie++){let xe=ce[X],ge=ce[Ie],Le=xe.start+xe.count,Ne=Z(ge.start,m.width,4),We=Z(xe.start,m.width,4);ge.start<=Le+1&&Ne===We&&Z(ge.start+ge.count-1,m.width,4)===Ne?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++X,ce[X]=ge)}ce.length=X+1;let O=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ie=0,xe=ce.length;Ie<xe;Ie++){let ge=ce[Ie],Le=Math.floor(ge.start/4),Ne=Math.ceil(ge.count/4),We=Le%m.width,L=Math.floor(Le/m.width),pe=Ne,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,We,L,pe,ne,B,z,m.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,O),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function re(E,m,B){let z=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(z=i.TEXTURE_3D);let K=dt(E,m),ce=m.source;t.bindTexture(z,E.__webglTexture,i.TEXTURE0+B);let X=n.get(ce);if(ce.version!==X.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let ne=lt.getPrimaries(lt.workingColorSpace),fe=m.colorSpace===xi?null:lt.getPrimaries(m.colorSpace),Se=m.colorSpace===xi||ne===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let Y=g(m.image,!1,s.maxTextureSize);Y=Xt(m,Y);let le=r.convert(m.format,m.colorSpace),Ie=r.convert(m.type),xe=y(m.internalFormat,le,Ie,m.normalized,m.colorSpace,m.isVideoTexture);rt(z,m);let ge,Le=m.mipmaps,Ne=m.isVideoTexture!==!0,We=X.__version===void 0||K===!0,L=ce.dataReady,pe=w(m,Y);if(m.isDepthTexture)xe=S(m.format===Bi,m.type),We&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,xe,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,xe,Y.width,Y.height,0,le,Ie,null));else if(m.isDataTexture)if(Le.length>0){Ne&&We&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let ne=0,fe=Le.length;ne<fe;ne++)ge=Le[ne],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge.width,ge.height,le,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,ne,xe,ge.width,ge.height,0,le,Ie,ge.data);m.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Y.width,Y.height),L&&j(m,Y,le,Ie)):t.texImage2D(i.TEXTURE_2D,0,xe,Y.width,Y.height,0,le,Ie,Y.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ne&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,Le[0].width,Le[0].height,Y.depth);for(let ne=0,fe=Le.length;ne<fe;ne++)if(ge=Le[ne],m.format!==Fn)if(le!==null)if(Ne){if(L)if(m.layerUpdates.size>0){let Se=sc(ge.width,ge.height,m.format,m.type);for(let ae of m.layerUpdates){let _e=ge.data.subarray(ae*Se/ge.data.BYTES_PER_ELEMENT,(ae+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,ge.width,ge.height,1,le,_e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,Y.depth,le,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,xe,ge.width,ge.height,Y.depth,0,ge.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,Y.depth,le,Ie,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,xe,ge.width,ge.height,Y.depth,0,le,Ie,ge.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ne&&We&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let ne=0,fe=Le.length;ne<fe;ne++)ge=Le[ne],m.format!==Fn?le!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ge.width,ge.height,le,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,xe,ge.width,ge.height,0,ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge.width,ge.height,le,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,ne,xe,ge.width,ge.height,0,le,Ie,ge.data)}else if(m.isDataArrayTexture)if(Ne){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,Y.width,Y.height,Y.depth),L)if(m.layerUpdates.size>0){let ne=sc(Y.width,Y.height,m.format,m.type);for(let fe of m.layerUpdates){let Se=Y.data.subarray(fe*ne/Y.data.BYTES_PER_ELEMENT,(fe+1)*ne/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,Y.width,Y.height,1,le,Ie,Se)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,le,Ie,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,Y.width,Y.height,Y.depth,0,le,Ie,Y.data);else if(m.isData3DTexture)Ne?(We&&t.texStorage3D(i.TEXTURE_3D,pe,xe,Y.width,Y.height,Y.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,le,Ie,Y.data)):t.texImage3D(i.TEXTURE_3D,0,xe,Y.width,Y.height,Y.depth,0,le,Ie,Y.data);else if(m.isFramebufferTexture){if(We)if(Ne)t.texStorage2D(i.TEXTURE_2D,pe,xe,Y.width,Y.height);else{let ne=Y.width,fe=Y.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,xe,ne,fe,0,le,Ie,null),ne>>=1,fe>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Y.parentNode!==ne){ne.appendChild(Y),f.add(m),ne.onpaint=fe=>{let Se=fe.changedElements;for(let ae of f)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Se=i.RGBA,ae=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ae,_e,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&We){let ne=gt(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,xe,ne.width,ne.height)}for(let ne=0,fe=Le.length;ne<fe;ne++)ge=Le[ne],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le,Ie,ge):t.texImage2D(i.TEXTURE_2D,ne,xe,le,Ie,ge);m.generateMipmaps=!1}else if(Ne){if(We){let ne=gt(Y);t.texStorage2D(i.TEXTURE_2D,pe,xe,ne.width,ne.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ie,Y)}else t.texImage2D(i.TEXTURE_2D,0,xe,le,Ie,Y);d(m)&&b(z),X.__version=ce.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function ke(E,m,B){if(m.image.length!==6)return;let z=dt(E,m),K=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ce=n.get(K);if(K.version!==ce.__version||z===!0){t.activeTexture(i.TEXTURE0+B);let X=lt.getPrimaries(lt.workingColorSpace),O=m.colorSpace===xi?null:lt.getPrimaries(m.colorSpace),Y=m.colorSpace===xi||X===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let le=m.isCompressedTexture||m.image[0].isCompressedTexture,Ie=m.image[0]&&m.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!le&&!Ie?xe[ae]=g(m.image[ae],!0,s.maxCubemapSize):xe[ae]=Ie?m.image[ae].image:m.image[ae],xe[ae]=Xt(m,xe[ae]);let ge=xe[0],Le=r.convert(m.format,m.colorSpace),Ne=r.convert(m.type),We=y(m.internalFormat,Le,Ne,m.normalized,m.colorSpace),L=m.isVideoTexture!==!0,pe=ce.__version===void 0||z===!0,ne=K.dataReady,fe=w(m,ge);rt(i.TEXTURE_CUBE_MAP,m);let Se;if(le){L&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,We,ge.width,ge.height);for(let ae=0;ae<6;ae++){Se=xe[ae].mipmaps;for(let _e=0;_e<Se.length;_e++){let Pe=Se[_e];m.format!==Fn?Le!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,We,Pe.width,Pe.height,0,Pe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Pe.width,Pe.height,Le,Ne,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,We,Pe.width,Pe.height,0,Le,Ne,Pe.data)}}}else{if(Se=m.mipmaps,L&&pe){Se.length>0&&fe++;let ae=gt(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ie){L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Le,Ne,xe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,xe[ae].width,xe[ae].height,0,Le,Ne,xe[ae].data);for(let _e=0;_e<Se.length;_e++){let ot=Se[_e].image[ae].image;L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,ot.width,ot.height,Le,Ne,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,We,ot.width,ot.height,0,Le,Ne,ot.data)}}else{L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,Ne,xe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Le,Ne,xe[ae]);for(let _e=0;_e<Se.length;_e++){let Pe=Se[_e];L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,Le,Ne,Pe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,We,Le,Ne,Pe.image[ae])}}}d(m)&&b(i.TEXTURE_CUBE_MAP),ce.__version=K.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Te(E,m,B,z,K,ce){let X=r.convert(B.format,B.colorSpace),O=r.convert(B.type),Y=y(B.internalFormat,X,O,B.normalized,B.colorSpace),le=n.get(m),Ie=n.get(B);if(Ie.__renderTarget=m,!le.__hasExternalTextures){let xe=Math.max(1,m.width>>ce),ge=Math.max(1,m.height>>ce);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,Y,xe,ge,m.depth,0,X,O,null):t.texImage2D(K,ce,Y,xe,ge,0,X,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),_t(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,K,Ie.__webglTexture,0,Me(m)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,K,Ie.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,m,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),m.depthBuffer){let z=m.depthTexture,K=z&&z.isDepthTexture?z.type:null,ce=S(m.stencilBuffer,K),X=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(m),ce,m.width,m.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(m),ce,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ce,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,E)}else{let z=m.textures;for(let K=0;K<z.length;K++){let ce=z[K],X=r.convert(ce.format,ce.colorSpace),O=r.convert(ce.type),Y=y(ce.internalFormat,X,O,ce.normalized,ce.colorSpace);_t(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(m),Y,m.width,m.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(m),Y,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,Y,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(E,m,B){let z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),z){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),rt(i.TEXTURE_CUBE_MAP,m.depthTexture);let le=r.convert(m.depthTexture.format),Ie=r.convert(m.depthTexture.type),xe;m.depthTexture.format===ni?xe=i.DEPTH_COMPONENT24:m.depthTexture.format===Bi&&(xe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,m.width,m.height,0,le,Ie,null)}}else se(m.depthTexture,0);let ce=K.__webglTexture,X=Me(m),O=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Y=m.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===ni)_t(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,O,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,Y,O,ce,0);else if(m.depthTexture.format===Bi)_t(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,O,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,Y,O,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(E){let m=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){let z=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),z){let K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=z}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(B)for(let z=0;z<6;z++)Ft(m.__webglFramebuffer[z],E,z);else{let z=E.texture.mipmaps;z&&z.length>0?Ft(m.__webglFramebuffer[0],E,0):Ft(m.__webglFramebuffer,E,0)}else if(B){m.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[z]),m.__webglDepthbuffer[z]===void 0)m.__webglDepthbuffer[z]=i.createRenderbuffer(),Ke(m.__webglDepthbuffer[z],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=m.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}else{let z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ke(m.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,m,B){let z=n.get(E);m!==void 0&&Te(z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Je(E)}function vt(E){let m=E.texture,B=n.get(E),z=n.get(m);E.addEventListener("dispose",x);let K=E.textures,ce=E.isWebGLCubeRenderTarget===!0,X=K.length>1;if(X||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=m.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let O=0;O<6;O++)if(m.mipmaps&&m.mipmaps.length>0){B.__webglFramebuffer[O]=[];for(let Y=0;Y<m.mipmaps.length;Y++)B.__webglFramebuffer[O][Y]=i.createFramebuffer()}else B.__webglFramebuffer[O]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){B.__webglFramebuffer=[];for(let O=0;O<m.mipmaps.length;O++)B.__webglFramebuffer[O]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(X)for(let O=0,Y=K.length;O<Y;O++){let le=n.get(K[O]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&_t(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let O=0;O<K.length;O++){let Y=K[O];B.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[O]);let le=r.convert(Y.format,Y.colorSpace),Ie=r.convert(Y.type),xe=y(Y.internalFormat,le,Ie,Y.normalized,Y.colorSpace,E.isXRRenderTarget===!0),ge=Me(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,B.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),rt(i.TEXTURE_CUBE_MAP,m);for(let O=0;O<6;O++)if(m.mipmaps&&m.mipmaps.length>0)for(let Y=0;Y<m.mipmaps.length;Y++)Te(B.__webglFramebuffer[O][Y],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Y);else Te(B.__webglFramebuffer[O],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);d(m)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){for(let O=0,Y=K.length;O<Y;O++){let le=K[O],Ie=n.get(le),xe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ie.__webglTexture),rt(xe,le),Te(B.__webglFramebuffer,E,le,i.COLOR_ATTACHMENT0+O,xe,0),d(le)&&b(xe)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(O=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,z.__webglTexture),rt(O,m),m.mipmaps&&m.mipmaps.length>0)for(let Y=0;Y<m.mipmaps.length;Y++)Te(B.__webglFramebuffer[Y],E,m,i.COLOR_ATTACHMENT0,O,Y);else Te(B.__webglFramebuffer,E,m,i.COLOR_ATTACHMENT0,O,0);d(m)&&b(O),t.unbindTexture()}E.depthBuffer&&Je(E)}function it(E){let m=E.textures;for(let B=0,z=m.length;B<z;B++){let K=m[B];if(d(K)){let ce=A(E),X=n.get(K).__webglTexture;t.bindTexture(ce,X),b(ce),t.unbindTexture()}}}let bt=[],zt=[];function Qt(E){if(E.samples>0){if(_t(E)===!1){let m=E.textures,B=E.width,z=E.height,K=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(E),O=m.length>1;if(O)for(let le=0;le<m.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);let Y=E.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let le=0;le<m.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[le]);let Ie=n.get(m[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,B,z,0,0,B,z,K,i.NEAREST),l===!0&&(bt.length=0,zt.length=0,bt.push(i.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(bt.push(ce),zt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let le=0;le<m.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,X.__webglColorRenderbuffer[le]);let Ie=n.get(m[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let m=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function Me(E){return Math.min(s.maxSamples,E.samples)}function _t(E){let m=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function D(E){let m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Xt(E,m){let B=E.colorSpace,z=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Qi&&B!==xi&&(lt.getTransfer(B)===yt?(z!==Fn||K!==Tn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",B)),m}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=oe,this.rebindTextures=at,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mg(i,e){function t(n,s=xi){let r,a=lt.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Wl)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Fn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===no)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===io)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===Er||n===Ar||n===Cr||n===Rr)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===Pr||n===mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return r.COMPRESSED_R11_EAC;if(n===po)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pr)return r.COMPRESSED_RG11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===xo||n===vo||n===_o||n===yo||n===Mo||n===So||n===bo||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Io||n===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===No||n===Ir||n===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nt({vertexShader:Sg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null,M=typeof XRWebGLBinding<"u",g=new bc,d={},b=t.getContextAttributes(),A=null,y=null,S=[],w=[],C=new Fe,x=null,T=null,P=new en;P.viewport=new Dt;let U=new en;U.viewport=new Dt;let V=[P,U],W=new qa,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=S[Z];return j===void 0&&(j=new Rs,S[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=S[Z];return j===void 0&&(j=new Rs,S[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=S[Z];return j===void 0&&(j=new Rs,S[Z]=j),j.getHandSpace()};function Q(Z){let j=w.indexOf(Z.inputSource);if(j===-1)return;let re=S[j];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<S.length;Z++){let j=w[Z];j!==null&&(w[Z]=null,S[Z].disconnect(j))}N=null,G=null,g.reset();for(let Z in d)delete d[Z];if(e.setRenderTarget(A),p=null,h=null,f=null,s=null,y=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",se),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ke=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=b.stencil?Bi:ni,ke=b.stencil?Fs:Xn);let Ke={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ot(h.textureWidth,h.textureHeight,{format:Fn,type:Tn,depthTexture:new Pi(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ot(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(Z){for(let j=0;j<Z.removed.length;j++){let re=Z.removed[j],ke=w.indexOf(re);ke>=0&&(w[ke]=null,S[ke].disconnect(re))}for(let j=0;j<Z.added.length;j++){let re=Z.added[j],ke=w.indexOf(re);if(ke===-1){for(let Ke=0;Ke<S.length;Ke++)if(Ke>=w.length){w.push(re),ke=Ke;break}else if(w[Ke]===null){w[Ke]=re,ke=Ke;break}if(ke===-1)break}let Te=S[ke];Te&&Te.connect(re)}}let $=new F,ie=new F;function oe(Z,j,re){$.setFromMatrixPosition(j.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);let ke=$.distanceTo(ie),Te=j.projectionMatrix.elements,Ke=re.projectionMatrix.elements,Ft=Te[14]/(Te[10]-1),Je=Te[14]/(Te[10]+1),at=(Te[9]+1)/Te[5],vt=(Te[9]-1)/Te[5],it=(Te[8]-1)/Te[0],bt=(Ke[8]+1)/Ke[0],zt=Ft*it,Qt=Ft*bt,Me=ke/(-it+bt),_t=Me*-it;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_t),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let D=Ft+Me,Xt=Je+Me,gt=zt-_t,E=Qt+(ke-_t),m=at*Je/Xt*D,B=vt*Je/Xt*D;Z.projectionMatrix.makePerspective(gt,E,m,B,D,Xt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ue(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,re=Z.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(re=g.depthFar)),W.near=U.near=P.near=j,W.far=U.far=P.far=re,(N!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,G=W.far),W.layers.mask=Z.layers.mask|6,P.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let ke=Z.parent,Te=W.cameras;Ue(W,ke);for(let Ke=0;Ke<Te.length;Ke++)Ue(Te[Ke],ke);Te.length===2?oe(W,P,U):W.projectionMatrix.copy(P.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),De(Z,W,ke)};function De(Z,j,re){re===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=As*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(Z){return d[Z]};let St=null;function rt(Z,j){if(u=j.getViewerPose(c||a),v=j,u!==null){let re=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ke=!1;re.length!==W.cameras.length&&(W.cameras.length=0,ke=!0);for(let Je=0;Je<re.length;Je++){let at=re[Je],vt=null;if(p!==null)vt=p.getViewport(at);else{let bt=f.getViewSubImage(h,at);vt=bt.viewport,Je===0&&(e.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(y))}let it=V[Je];it===void 0&&(it=new en,it.layers.enable(Je),it.viewport=new Dt,V[Je]=it),it.matrix.fromArray(at.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(at.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(vt.x,vt.y,vt.width,vt.height),Je===0&&(W.matrix.copy(it.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ke===!0&&W.cameras.push(it)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Je=f.getDepthInformation(re[0]);Je&&Je.isValid&&Je.texture&&g.init(Je,s.renderState)}if(Te&&Te.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Je=0;Je<re.length;Je++){let at=re[Je].camera;if(at){let vt=d[at];vt||(vt=new xr,d[at]=vt);let it=f.getCameraImage(at);vt.sourceTexture=it}}}}for(let re=0;re<S.length;re++){let ke=w[re],Te=S[re];ke!==null&&Te!==void 0&&Te.update(ke,j,c||a)}St&&St(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}let dt=new pu;dt.setAnimationLoop(rt),this.setAnimationLoop=function(Z){St=Z},this.dispose=function(){}}},wg=new Rt,yu=new Ge;yu.set(-1,0,0,0,1,0,0,0,1);function Tg(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,tc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),v(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),M(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,b,A):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===nn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===nn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let b=e.get(d),A=b.envMap,y=b.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yu),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let w=S.program;n.uniformBlockBinding(y,w)}function c(y,S){let w=s[y.id];w===void 0&&(g(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(y,C);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let S=f();y.__bindingPointIndex=S;let w=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],w=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let P=w[x];if(Array.isArray(P))for(let U=0,V=P.length;U<V;U++)p(P[U],x,U,C);else p(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,w,C){if(M(y,S,w,C)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let U=0;U<T.length;U++){let V=T[U],W=d(V);v(V,y.__data,P),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function v(y,S,w){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,w)}function M(y,S,w,C){let x=y.value,T=S+"_"+w;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(y){let S=y.uniforms,w=0,C=16;for(let T=0,P=S.length;T<P;T++){let U=Array.isArray(S[T])?S[T]:[S[T]];for(let V=0,W=U.length;V<W;V++){let N=U[V],G=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,J=G.length;Q<J;Q++){let se=G[Q],$=d(se),ie=w%C,oe=ie%$.boundary,Ue=ie+oe;w+=oe,Ue!==0&&C-Ue<$.storage&&(w+=C-Ue),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=$.storage}}}let x=w%C;return x>0&&(w+=C-x),y.__size=w,y.__cache={},this}function d(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function Cg(){return ri===null&&(ri=new Ca(Ag,16,16,zi,Ht),ri.name="DFG_LUT",ri.minFilter=tn,ri.magFilter=tn,ri.wrapS=ti,ri.wrapT=ti,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Ho=class{constructor(e={}){let{canvas:t=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let M=p,g=new Set([so,io,no]),d=new Set([Tn,Xn,Us,Fs,eo,to]),b=new Uint32Array(4),A=new Int32Array(4),y=new F,S=null,w=null,C=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,V=null,W=null,N=null,G=null;this._outputColorSpace=Sn;let Q=0,J=0,se=null,$=-1,ie=null,oe=new Dt,Ue=new Dt,De=null,St=new Ye(0),rt=0,dt=t.width,Z=t.height,j=1,re=null,ke=null,Te=new Dt(0,0,dt,Z),Ke=new Dt(0,0,dt,Z),Ft=!1,Je=new mr,at=!1,vt=!1,it=new Rt,bt=new F,zt=new Dt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function _t(){return se===null?j:1}let D=n;function Xt(_,I){return t.getContext(_,I)}let gt,E,m,B,z,K,ce,X,O,Y,le,Ie,xe,ge,Le,Ne,We,L,pe,ne,fe,Se,ae;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",gn,!1),D===null){let I="webgl2";if(D=Xt(I,_),D===null)throw Xt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(_){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Xe("WebGLRenderer: "+_.message),_}function _e(){gt=new Um(D),gt.init(),fe=new Mg(D,gt),E=new Tm(D,gt,e,fe),m=new _g(D,gt),E.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),W=D.createFramebuffer(),N=D.createFramebuffer(),G=D.createFramebuffer(),B=new Bm(D),z=new rg,K=new yg(D,gt,m,z,E,fe,B),ce=new Nm(P),X=new zd(D),Se=new bm(D,X),O=new Fm(D,X,B,Se),Y=new Vm(D,O,X,Se,B),L=new zm(D,E,K),Le=new Em(z),le=new sg(P,ce,gt,E,Se,Le),Ie=new Tg(P,z),xe=new og,ge=new fg(gt),We=new Sm(P,ce,m,Y,v,l),Ne=new vg(P,Y,E),ae=new Eg(D,B,E,m),pe=new wm(D,gt,B),ne=new Om(D,gt,B),B.programs=le.programs,P.capabilities=E,P.extensions=gt,P.properties=z,P.renderLists=xe,P.shadowMap=Ne,P.state=m,P.info=B}M!==Tn&&(T=new Hm(M,t.width,t.height,o,s,r));let Pe=new wc(P,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=gt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=gt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(dt,Z,!1))},this.getSize=function(_){return _.set(dt,Z)},this.setSize=function(_,I,q=!0){if(Pe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=_,Z=I,t.width=Math.floor(_*j),t.height=Math.floor(I*j),q===!0&&(t.style.width=_+"px",t.style.height=I+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(dt*j,Z*j).floor()},this.setDrawingBufferSize=function(_,I,q){dt=_,Z=I,j=q,t.width=Math.floor(_*q),t.height=Math.floor(I*q),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(M===Tn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(oe)},this.getViewport=function(_){return _.copy(Te)},this.setViewport=function(_,I,q,k){_.isVector4?Te.set(_.x,_.y,_.z,_.w):Te.set(_,I,q,k),m.viewport(oe.copy(Te).multiplyScalar(j).round())},this.getScissor=function(_){return _.copy(Ke)},this.setScissor=function(_,I,q,k){_.isVector4?Ke.set(_.x,_.y,_.z,_.w):Ke.set(_,I,q,k),m.scissor(Ue.copy(Ke).multiplyScalar(j).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(_){m.setScissorTest(Ft=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){ke=_},this.getClearColor=function(_){return _.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,q=!0){let k=0;if(_){let H=!1;if(se!==null){let de=se.texture.format;H=g.has(de)}if(H){let de=se.texture.type,ve=d.has(de),me=We.getClearColor(),we=We.getClearAlpha(),Re=me.r,qe=me.g,Ze=me.b;ve?(b[0]=Re,b[1]=qe,b[2]=Ze,b[3]=we,D.clearBufferuiv(D.COLOR,0,b)):(A[0]=Re,A[1]=qe,A[2]=Ze,A[3]=we,D.clearBufferiv(D.COLOR,0,A))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),V=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),We.dispose(),xe.dispose(),ge.dispose(),z.dispose(),ce.dispose(),Y.dispose(),Se.dispose(),ae.dispose(),le.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Gr),Pe.removeEventListener("sessionend",xn),On.stop()};function ot(_){_.preventDefault(),Ql("WebGLRenderer: Context Lost."),U=!0}function ft(){Ql("WebGLRenderer: Context Restored."),U=!1;let _=B.autoReset,I=Ne.enabled,q=Ne.autoUpdate,k=Ne.needsUpdate,H=Ne.type;_e(),B.autoReset=_,Ne.enabled=I,Ne.autoUpdate=q,Ne.needsUpdate=k,Ne.type=H}function gn(_){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function An(_){let I=_.target;I.removeEventListener("dispose",An),kr(I)}function kr(_){Hr(_),z.remove(_)}function Hr(_){let I=z.get(_).programs;I!==void 0&&(I.forEach(function(q){le.releaseProgram(q)}),_.isShaderMaterial&&le.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,q,k,H,de){I===null&&(I=Qt);let ve=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=Xi(_,I,q,k,H);m.setMaterial(k,ve);let we=q.index,Re=1;if(k.wireframe===!0){if(we=O.getWireframeAttribute(q),we===void 0)return;Re=2}let qe=q.drawRange,Ze=q.attributes.position,Ae=qe.start*Re,pt=(qe.start+qe.count)*Re;de!==null&&(Ae=Math.max(Ae,de.start*Re),pt=Math.min(pt,(de.start+de.count)*Re)),we!==null?(Ae=Math.max(Ae,0),pt=Math.min(pt,we.count)):Ze!=null&&(Ae=Math.max(Ae,0),pt=Math.min(pt,Ze.count));let Pt=pt-Ae;if(Pt<0||Pt===1/0)return;Se.setup(H,k,me,q,we);let wt,st=pe;if(we!==null&&(wt=X.get(we),st=ne,st.setIndex(wt)),H.isMesh)k.wireframe===!0?(m.setLineWidth(k.wireframeLinewidth*_t()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(H.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),m.setLineWidth(Et*_t()),H.isLineSegments?st.setMode(D.LINES):H.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else H.isPoints?st.setMode(D.POINTS):H.isSprite&&st.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Et=H._multiDrawStarts,ue=H._multiDrawCounts,Yt=H._multiDrawCount,ht=we?X.get(we).bytesPerElement:1,fn=z.get(k).currentProgram.getUniforms();for(let Cn=0;Cn<Yt;Cn++)fn.setValue(D,"_gl_DrawID",Cn),st.render(Et[Cn]/ht,ue[Cn])}else if(H.isInstancedMesh)st.renderInstances(Ae,Pt,H.count);else if(q.isInstancedBufferGeometry){let Et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ue=Math.min(q.instanceCount,Et);st.renderInstances(Ae,Pt,ue)}else st.render(Ae,Pt)};function Zs(_,I,q,k){V!==null&&_.isNodeMaterial&&V.setObject(k,_),at===!0&&Le.setState(_,q,!1),_.transparent===!0&&_.side===ln&&_.forceSinglePass===!1?(_.side=nn,_.needsUpdate=!0,Gi(_,I,k),_.side=Ui,_.needsUpdate=!0,Gi(_,I,k),_.side=ln):Gi(_,I,k)}this.compile=function(_,I,q=null){q===null&&(q=_),V!==null&&V.renderStart(_,I,q),w=ge.get(q),w.init(I),x.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),_!==q&&_.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),vt=this.localClippingEnabled,at=Le.init(this.clippingPlanes,vt),at===!0&&Le.setGlobalState(this.clippingPlanes,I),V!==null&&Ne.render(w.state.shadowsArray,q,I);let k=new Set;return _.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let de=H.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let me=de[ve];Zs(me,q,I,H),k.add(me)}else Zs(de,q,I,H),k.add(de)}),w=x.pop(),V!==null&&V.renderEnd(),k},this.compileAsync=function(_,I,q=null){let k=this.compile(_,I,q);return new Promise(H=>{function de(){if(k.forEach(function(ve){let we=z.get(ve).currentProgram;(we===void 0||we.isReady())&&k.delete(ve)}),k.size===0){H(_);return}setTimeout(de,10)}gt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $s=null;function Ks(_){$s&&$s(_)}function Gr(){On.stop()}function xn(){On.start()}let On=new pu;On.setAnimationLoop(Ks),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(_){$s=_,Pe.setAnimationLoop(_),_===null?On.stop():On.start()},Pe.addEventListener("sessionstart",Gr),Pe.addEventListener("sessionend",xn),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(_,I);let q=Pe.enabled===!0&&Pe.isPresenting===!0,k=T!==null&&(se===null||q)&&T.begin(P,se);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(I),I=Pe.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,I,se),w=ge.get(_,x.length),w.init(I),w.state.textureUnits=K.getTextureUnits(),x.push(w),it.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Je.setFromProjectionMatrix(it,Gn,I.reversedDepth),vt=this.localClippingEnabled,at=Le.init(this.clippingPlanes,vt),S=xe.get(_,C.length),S.init(),C.push(S),Pe.enabled===!0&&Pe.isPresenting===!0){let ve=P.xr.getDepthSensingMesh();ve!==null&&ki(ve,I,-1/0,P.sortObjects)}ki(_,I,0,P.sortObjects),S.finish(),V!==null&&V.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(re,ke),Me=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Me&&We.addToRenderList(S,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Le.beginShadows();let H=w.state.shadowsArray;if(Ne.render(H,_,I),at===!0&&Le.endShadows(),(k&&T.hasRenderPass())===!1){let ve=S.opaque,me=S.transmissive;if(w.setupLights(),I.isArrayCamera){let we=I.cameras;if(me.length>0)for(let Re=0,qe=we.length;Re<qe;Re++){let Ze=we[Re];Hi(ve,me,_,Ze)}Me&&We.render(_);for(let Re=0,qe=we.length;Re<qe;Re++){let Ze=we[Re];qt(S,_,Ze,Ze.viewport)}}else me.length>0&&Hi(ve,me,_,I),Me&&We.render(_),qt(S,_,I)}se!==null&&J===0&&(K.updateMultisampleRenderTarget(se),K.updateRenderTargetMipmap(se)),k&&T.end(P),_.isScene===!0&&_.onAfterRender(P,_,I),Se.resetDefaultState(),$=-1,ie=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),at===!0&&Le.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,V!==null&&V.renderEnd()};function ki(_,I,q,k){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)q=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Je)){k&&zt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);let ve=Y.update(_),me=_.material;me.visible&&S.push(_,ve,me,q,zt.z,null,I)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Je))){let ve=Y.update(_),me=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),zt.copy(_.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),zt.copy(ve.boundingSphere.center)),zt.applyMatrix4(_.matrixWorld).applyMatrix4(it)),Array.isArray(me)){let we=ve.groups;for(let Re=0,qe=we.length;Re<qe;Re++){let Ze=we[Re],Ae=me[Ze.materialIndex];Ae&&Ae.visible&&S.push(_,ve,Ae,q,zt.z,Ze,I)}}else me.visible&&S.push(_,ve,me,q,zt.z,null,I)}}let de=_.children;for(let ve=0,me=de.length;ve<me;ve++)ki(de[ve],I,q,k)}function qt(_,I,q,k){let{opaque:H,transmissive:de,transparent:ve}=_;w.setupLightsView(q),at===!0&&Le.setGlobalState(P.clippingPlanes,q),k&&m.viewport(oe.copy(k)),H.length>0&&vi(H,I,q),de.length>0&&vi(de,I,q),ve.length>0&&vi(ve,I,q),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Hi(_,I,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ae=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Ot(1,1,{generateMipmaps:!0,type:Ae?Ht:Tn,minFilter:Oi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let de=w.state.transmissionRenderTarget[k.id],ve=k.viewport||oe;de.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),we=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(St),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),Me&&We.render(q);let qe=P.toneMapping;P.toneMapping=Wn;let Ze=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),at===!0&&Le.setGlobalState(P.clippingPlanes,k),vi(_,q,k),K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let pt=0,Pt=I.length;pt<Pt;pt++){let wt=I[pt],{object:st,geometry:Et,material:ue,group:Yt}=wt;if(ue.side===ln&&st.layers.test(k.layers)){let ht=ue.side;ue.side=nn,ue.needsUpdate=!0,as(st,q,k,Et,ue,Yt),ue.side=ht,ue.needsUpdate=!0,Ae=!0}}Ae===!0&&(K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de))}P.setRenderTarget(me,we,Re),P.setClearColor(St,rt),Ze!==void 0&&(k.viewport=Ze),P.toneMapping=qe}function vi(_,I,q){let k=I.isScene===!0?I.overrideMaterial:null;for(let H=0,de=_.length;H<de;H++){let ve=_[H],{object:me,geometry:we,group:Re}=ve,qe=ve.material;qe.allowOverride===!0&&k!==null&&(qe=k),me.layers.test(q.layers)&&as(me,I,q,we,qe,Re)}}function as(_,I,q,k,H,de){V!==null&&H.isNodeMaterial&&V.setObject(_,H),_.onBeforeRender(P,I,q,k,H,de),_.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),H.onBeforeRender(P,I,q,k,_,de),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,P.renderBufferDirect(q,I,k,H,_,de),H.side=Ui,H.needsUpdate=!0,P.renderBufferDirect(q,I,k,H,_,de),H.side=ln):P.renderBufferDirect(q,I,k,H,_,de),_.onAfterRender(P,I,q,k,H,de)}function Gi(_,I,q){I.isScene!==!0&&(I=Qt);let k=z.get(_),H=w.state.lights,de=w.state.shadowsArray,ve=H.state.version,me=le.getParameters(_,H.state,de,I,q,w.state.lightProbeGridArray),we=le.getProgramCacheKey(me),Re=k.programs;k.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;let qe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;k.envMap=ce.get(_.envMap||k.environment,qe),k.envMapRotation=k.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Re===void 0&&(_.addEventListener("dispose",An),Re=new Map,k.programs=Re);let Ze=Re.get(we);if(Ze!==void 0){if(k.currentProgram===Ze&&k.lightsStateVersion===ve)return Wi(_,me),Ze}else me.uniforms=le.getUniforms(_),V!==null&&_.isNodeMaterial&&V.build(_,q,me),_.onBeforeCompile(me,P),Ze=le.acquireProgram(me,we),Re.set(we,Ze),k.uniforms=me.uniforms;let Ae=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=Le.uniform),Wi(_,me),k.needsLights=_n(_),k.lightsStateVersion=ve,k.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Ze,k.uniformsList=null,Ze}function Js(_){if(_.uniformsList===null){let I=_.currentProgram.getUniforms();_.uniformsList=Vs.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function Wi(_,I){let q=z.get(_);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function Wr(_,I){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let q=0,k=_.length;q<k;q++){let H=_[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Xi(_,I,q,k,H){I.isScene!==!0&&(I=Qt),K.resetTextureUnits();let de=I.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,me=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:lt.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=ce.get(k.envMap||ve,we),qe=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,Pt=!!q.morphAttributes.color,wt=Wn;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(wt=P.toneMapping);let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=st!==void 0?st.length:0,ue=z.get(k),Yt=w.state.lights;if(at===!0&&(vt===!0||_!==ie)){let Tt=_===ie&&k.id===$;Le.setState(k,_,Tt)}let ht=!1;k.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Yt.state.version||ue.outputColorSpace!==me||H.isBatchedMesh&&ue.batching===!1||!H.isBatchedMesh&&ue.batching===!0||H.isBatchedMesh&&ue.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ue.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ue.instancing===!1||!H.isInstancedMesh&&ue.instancing===!0||H.isSkinnedMesh&&ue.skinning===!1||!H.isSkinnedMesh&&ue.skinning===!0||H.isInstancedMesh&&ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ue.instancingMorph===!1&&H.morphTexture!==null||ue.envMap!==Re||k.fog===!0&&ue.fog!==de||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==Le.numPlanes||ue.numIntersection!==Le.numIntersection)||ue.vertexAlphas!==qe||ue.vertexTangents!==Ze||ue.morphTargets!==Ae||ue.morphNormals!==pt||ue.morphColors!==Pt||ue.toneMapping!==wt||ue.morphTargetsCount!==Et||!!ue.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,ue.__version=k.version);let fn=ue.currentProgram;ht===!0&&(fn=Gi(k,I,H),V&&k.isNodeMaterial&&V.onUpdateProgram(k,fn,ue));let Cn=!1,Kn=!1,_i=!1,xt=fn.getUniforms(),Ut=ue.uniforms;if(m.useProgram(fn.program)&&(Cn=!0,Kn=!0,_i=!0),k.id!==$&&($=k.id,Kn=!0),ue.needsLights){let Tt=Wr(w.state.lightProbeGridArray,H);ue.lightProbeGrid!==Tt&&(ue.lightProbeGrid=Tt,Kn=!0)}if(Cn||ie!==_){m.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",_.projectionMatrix),xt.setValue(D,"viewMatrix",_.matrixWorldInverse);let Bn=xt.map.cameraPosition;Bn!==void 0&&Bn.setValue(D,bt.setFromMatrixPosition(_.matrixWorld)),E.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),ie!==_&&(ie=_,Kn=!0,_i=!0)}if(ue.needsLights&&(Yt.state.sunShadowMap.length>0&&xt.setValue(D,"sunShadowMap",Yt.state.sunShadowMap,K),Yt.state.directionalShadowMap.length>0&&xt.setValue(D,"directionalShadowMap",Yt.state.directionalShadowMap,K),Yt.state.spotShadowMap.length>0&&xt.setValue(D,"spotShadowMap",Yt.state.spotShadowMap,K),Yt.state.pointShadowMap.length>0&&xt.setValue(D,"pointShadowMap",Yt.state.pointShadowMap,K)),H.isSkinnedMesh){xt.setOptional(D,H,"bindMatrix"),xt.setOptional(D,H,"bindMatrixInverse");let Tt=H.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),xt.setValue(D,"boneTexture",Tt.boneTexture,K))}H.isBatchedMesh&&(xt.setOptional(D,H,"batchingTexture"),xt.setValue(D,"batchingTexture",H._matricesTexture,K),xt.setOptional(D,H,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",H._indirectTexture,K),xt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",H._colorsTexture,K));let Jn=q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&L.update(H,q,fn),(Kn||ue.receiveShadow!==H.receiveShadow)&&(ue.receiveShadow=H.receiveShadow,xt.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(Ut.envMapIntensity.value=I.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Cg()),Kn){if(xt.setValue(D,"toneMappingExposure",P.toneMappingExposure),ue.needsLights&&vn(Ut,_i),de&&k.fog===!0&&Ie.refreshFogUniforms(Ut,de),Ie.refreshMaterialUniforms(Ut,k,j,Z,w.state.transmissionRenderTarget[_.id]),ue.needsLights&&ue.lightProbeGrid){let Tt=ue.lightProbeGrid;Ut.probesSH.value=Tt.texture,Ut.probesMin.value.copy(Tt.boundingBox.min),Ut.probesMax.value.copy(Tt.boundingBox.max),Ut.probesResolution.value.copy(Tt.resolution)}Vs.upload(D,Js(ue),Ut,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vs.upload(D,Js(ue),Ut,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(D,"center",H.center),xt.setValue(D,"modelViewMatrix",H.modelViewMatrix),xt.setValue(D,"normalMatrix",H.normalMatrix),xt.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let Tt=k.uniformsGroups;for(let Bn=0,yi=Tt.length;Bn<yi;Bn++){let Xr=Tt[Bn];ae.update(Xr,fn),ae.bind(Xr,fn)}}return fn}function vn(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.sunLights.needsUpdate=I,_.sunLightShadows.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function _n(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(_,I,q){let k=z.get(_);k.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(_.texture).__webglTexture=I,z.get(_.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){let q=z.get(_);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,q=0){se=_,Q=I,J=q;let k=null,H=!1,de=!1;if(_){let me=z.get(_);if(me.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),oe.copy(_.viewport),Ue.copy(_.scissor),De=_.scissorTest,m.viewport(oe),m.scissor(Ue),m.setScissorTest(De),$=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(_);else if(me.__hasExternalTextures)K.rebindTextures(_,z.get(_.texture).__webglTexture,z.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let qe=_.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&z.has(qe)&&(_.width!==qe.image.width||_.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(_)}}let we=_.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);let Re=z.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?k=Re[I][q]:k=Re[I],H=!0):_.samples>0&&K.useMultisampledRTT(_)===!1?k=z.get(_).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[q]:k=Re,oe.copy(_.viewport),Ue.copy(_.scissor),De=_.scissorTest}else oe.copy(Te).multiplyScalar(j).floor(),Ue.copy(Ke).multiplyScalar(j).floor(),De=Ft;if(q!==0&&(k=W),m.bindFramebuffer(D.FRAMEBUFFER,k)&&m.drawBuffers(_,k),m.viewport(oe),m.scissor(Ue),m.setScissorTest(De),H){let me=z.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,q)}else if(de){let me=I;for(let we=0;we<_.textures.length;we++){let Re=z.get(_.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Re.__webglTexture,q,me)}}else if(_!==null&&q!==0){let me=z.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,q)}$=-1};function qi(_){let I=z.get(_);return(I.__readFormat!==_.format||I.__readType!==_.type)&&(I.__readFormat=_.format,I.__readType=_.type,I.__formatReadable=E.textureFormatReadable(_.format),I.__typeReadable=E.textureTypeReadable(_.type)),I}this.readRenderTargetPixels=function(_,I,q,k,H,de,ve,me=0){if(!(_&&_.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){m.bindFramebuffer(D.FRAMEBUFFER,we);try{let Re=_.textures[me],qe=Re.format,Ze=Re.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Ae=qi(Re);if(Ae.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-k&&q>=0&&q<=_.height-H&&D.readPixels(I,q,k,H,fe.convert(qe),fe.convert(Ze),de)}finally{let Re=se!==null?z.get(se).__webglFramebuffer:null;m.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(_,I,q,k,H,de,ve,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we)if(I>=0&&I<=_.width-k&&q>=0&&q<=_.height-H){m.bindFramebuffer(D.FRAMEBUFFER,we);let Re=_.textures[me],qe=Re.format,Ze=Re.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Ae=qi(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(I,q,k,H,fe.convert(qe),fe.convert(Ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Pt=se!==null?z.get(se).__webglFramebuffer:null;m.bindFramebuffer(D.FRAMEBUFFER,Pt);let wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hh(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pt),D.deleteSync(wt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,q=0){let k=Math.pow(2,-q),H=Math.floor(_.image.width*k),de=Math.floor(_.image.height*k),ve=I!==null?I.x:0,me=I!==null?I.y:0;K.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,ve,me,H,de),m.unbindTexture()},this.copyTextureToTexture=function(_,I,q=null,k=null,H=0,de=0){let ve,me,we,Re,qe,Ze,Ae,pt,Pt,wt=_.isCompressedTexture?_.mipmaps[de]:_.image;if(q!==null)ve=q.max.x-q.min.x,me=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,qe=q.min.y,Ze=q.isBox3?q.min.z:0;else{let Ut=Math.pow(2,-H);ve=Math.floor(wt.width*Ut),me=Math.floor(wt.height*Ut),_.isDataArrayTexture?we=wt.depth:_.isData3DTexture?we=Math.floor(wt.depth*Ut):we=1,Re=0,qe=0,Ze=0}k!==null?(Ae=k.x,pt=k.y,Pt=k.z):(Ae=0,pt=0,Pt=0);let st=fe.convert(I.format),Et=fe.convert(I.type),ue;I.isData3DTexture?(K.setTexture3D(I,0),ue=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),ue=D.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),ue=D.TEXTURE_2D),m.activeTexture(D.TEXTURE0),m.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),m.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),m.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let Yt=m.getParameter(D.UNPACK_ROW_LENGTH),ht=m.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=m.getParameter(D.UNPACK_SKIP_PIXELS),Cn=m.getParameter(D.UNPACK_SKIP_ROWS),Kn=m.getParameter(D.UNPACK_SKIP_IMAGES);m.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),m.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),m.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),m.pixelStorei(D.UNPACK_SKIP_ROWS,qe),m.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);let _i=_.isDataArrayTexture||_.isData3DTexture,xt=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){let Ut=z.get(_),Jn=z.get(I),Tt=z.get(Ut.__renderTarget),Bn=z.get(Jn.__renderTarget);m.bindFramebuffer(D.READ_FRAMEBUFFER,Tt.__webglFramebuffer),m.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let yi=0;yi<we;yi++)_i&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(_).__webglTexture,H,Ze+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(I).__webglTexture,de,Pt+yi)),D.blitFramebuffer(Re,qe,ve,me,Ae,pt,ve,me,D.DEPTH_BUFFER_BIT,D.NEAREST);m.bindFramebuffer(D.READ_FRAMEBUFFER,null),m.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||_.isRenderTargetTexture||z.has(_)){let Ut=z.get(_),Jn=z.get(I);m.bindFramebuffer(D.READ_FRAMEBUFFER,N),m.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Tt=0;Tt<we;Tt++)_i?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,H,Ze+Tt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,H),xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jn.__webglTexture,de,Pt+Tt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jn.__webglTexture,de),H!==0?D.blitFramebuffer(Re,qe,ve,me,Ae,pt,ve,me,D.COLOR_BUFFER_BIT,D.NEAREST):xt?D.copyTexSubImage3D(ue,de,Ae,pt,Pt+Tt,Re,qe,ve,me):D.copyTexSubImage2D(ue,de,Ae,pt,Re,qe,ve,me);m.bindFramebuffer(D.READ_FRAMEBUFFER,null),m.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xt?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(ue,de,Ae,pt,Pt,ve,me,we,st,Et,wt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ue,de,Ae,pt,Pt,ve,me,we,st,wt.data):D.texSubImage3D(ue,de,Ae,pt,Pt,ve,me,we,st,Et,wt):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Ae,pt,ve,me,st,Et,wt.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Ae,pt,wt.width,wt.height,st,wt.data):D.texSubImage2D(D.TEXTURE_2D,de,Ae,pt,ve,me,st,Et,wt);m.pixelStorei(D.UNPACK_ROW_LENGTH,Yt),m.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),m.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),m.pixelStorei(D.UNPACK_SKIP_ROWS,Cn),m.pixelStorei(D.UNPACK_SKIP_IMAGES,Kn),de===0&&I.generateMipmaps&&D.generateMipmap(ue),m.unbindTexture()},this.initRenderTarget=function(_){z.get(_).__webglFramebuffer===void 0&&K.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?K.setTextureCube(_,0):_.isData3DTexture?K.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?K.setTexture2DArray(_,0):K.setTexture2D(_,0),m.unbindTexture()},this.resetState=function(){Q=0,J=0,se=null,m.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Pg=new gi(-1,1,1,-1,0,1),Tc=class extends Nt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}},Ig=new Tc,Gs=class{constructor(e){this._mesh=new Mt(Ig,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ws=class extends Yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fr=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xo=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ws(Hs),this.copyPass.material.blending=Un,this.timer=new Mr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fr!==void 0&&(a instanceof Fr?n=!0:a instanceof Xo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yo=class extends Yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Mu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xs=class i extends Yn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:Ht,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ot(r,a,{type:Ht,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Ot(r,a,{type:Ht,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Mu;this.highPassUniforms=is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=is.clone(Hs.uniforms),this.blendMaterial=new nt({uniforms:this.copyUniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,premultipliedAlpha:!0,blending:Kt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new ji,this._fsQuad=new Gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new nt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Xs.BlurDirectionX=new Fe(1,0);Xs.BlurDirectionY=new Fe(0,1);var mn=Math.PI*2,$n=i=>Math.min(1,Math.max(0,i)),rs=(i,e,t)=>Math.min(t,Math.max(e,i)),sn=(i,e,t)=>{let n=$n((t-i)/(e-i));return n*n*(3-2*n)},Ec=i=>1-Math.pow(1-i,3),Lg=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Su=i=>1+2.2*Math.pow(i-1,3)+1.2*Math.pow(i-1,2),Jt=(i,e,t)=>i+(e-i)*t;function Cu(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var rn=i=>new Ye(i),qs=1,Dg=.62,Zo=1.62,Ru=2.26,Pu=.34,oi=Ru+Pu,$o=oi+.5,Ko=.3,Or=oi+5.9,Ac=6.8,Br=oi+9.4,Ng=.8,Zn=1.22,zr=`
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
`,Ug=`
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
`,Fg=`
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
`,En=`
const vec3 CORAL=vec3(1.0,0.216,0.113);
const vec3 CYAN=vec3(0.323,0.768,0.855);
const vec3 CREAM=vec3(0.896,0.871,0.815);
const vec3 GOLD=vec3(1.0,0.62,0.30);
const vec3 WELD=vec3(1.0,0.527,0.162);
`,Og=[1.47,.248,.077],Bg=[.91,.883,.819],Iu="const vec3 SUN=vec3(1.0,0.74,0.60)*2.35;";function bu(i,e,t){return new nt({defines:{TYPE:i},uniforms:{uTime:e.uTime,uCoreDist:e.uCoreDist,uHot:{value:0},uWave:{value:0},uAtmo:{value:rn(t.atmo)},uTint:{value:rn(t.tint||16777215)},uSeed:{value:t.seed||0}},vertexShader:`
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      void main(){
        vO = position;
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uTime, uHot, uWave, uCoreDist, uSeed;
      uniform vec3 uAtmo, uTint;
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      ${zr}
      ${En}
      ${Iu}
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
      }`})}function zg(i,e,t,n){return new nt({uniforms:{uAtmo:{value:rn(e)},uStrength:{value:t},uInner:{value:Math.sqrt(1-1/(n*n))},uWave:{value:0},uHot:{value:0},uCoreDist:i.uCoreDist},vertexShader:`
      varying vec3 vN; varying vec3 vW;
      void main(){
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uAtmo; uniform float uStrength, uInner, uWave, uHot, uCoreDist;
      varying vec3 vN; varying vec3 vW;
      ${En}
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
      }`,side:nn,transparent:!0,blending:Kt,depthWrite:!1})}function Vg(i,e){return new nt({uniforms:{uInner:{value:i},uOuter:{value:e},uPlanetPos:{value:new F},uPlanetR:{value:1},uNormal:{value:new F(0,1,0)},uReveal:{value:0}},vertexShader:`
      varying vec3 vW; varying vec2 vP;
      void main(){
        vP = position.xy;
        vec4 w = modelMatrix * vec4(position,1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uInner, uOuter, uPlanetR, uReveal;
      uniform vec3 uPlanetPos, uNormal;
      varying vec3 vW; varying vec2 vP;
      ${En}
      ${Iu}
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
      }`,side:ln,transparent:!0,depthWrite:!1,blending:Za,blendSrc:$a,blendDst:br})}function kg(i){let e=(i+1)*2,t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e),r=new Float32Array(e);for(let l=0;l<=i;l+=1){let c=l/i*mn,u=(l+1)/i*mn;for(let f=0;f<2;f+=1){let h=l*2+f;t.set([Math.cos(c),0,Math.sin(c)],h*3),n.set([Math.cos(u),0,Math.sin(u)],h*3),s[h]=f?1:-1,r[h]=l/i}}let a=[];for(let l=0;l<i;l+=1){let c=l*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}let o=new Nt;return o.setAttribute("position",new ut(t,3)),o.setAttribute("aNext",new ut(n,3)),o.setAttribute("aSide",new ut(s,1)),o.setAttribute("aU",new ut(r,1)),o.setIndex(a),o}function Hg(i,e){return new nt({uniforms:{uRes:i.uRes,uPx:i.uPx,uCoreDist:i.uCoreDist,uFade:i.uFade,uWidth:{value:e.width??1},uBoost:{value:e.boost??1},uPhase:{value:0},uReveal:{value:e.reveal??1},uBase:{value:e.base??.05},uTrail:{value:e.trail??0},uTrailLen:{value:e.trailLen??.3},uColor:{value:rn(e.color??10150894)},uTrailColor:{value:rn(e.trailColor??16744543)},uGain:{value:e.gain??1}},vertexShader:`
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
      }`,fragmentShader:`
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
      }`,transparent:!0,blending:Kt,depthWrite:!1,side:ln})}var Vr=[{x0:-11,x1:-6,y0:-12,y1:3,coral:!1},{x0:-3,x1:2,y0:-12,y1:11,coral:!0},{x0:5,x1:10,y0:-3,y1:12,coral:!1}],Vi=1/12,Ys=2.1,Cc=16*Math.PI/180,Rc=1.62;function Gg(i,e){let t=Cu(1592598101),n=()=>{let y=0;for(;y===0;)y=t();return Math.sqrt(-2*Math.log(y))*Math.cos(mn*t())},s=new Float32Array(i*3),r=new Float32Array(i*4),a=new Uint8Array(i*4),o=new Float32Array(i),l=Math.cos(Cc),c=Math.sin(Cc),u=Vr.map(y=>y.y1-y.y0+6),f=u.reduce((y,S)=>y+S,0),h=()=>{let y=t()*f;for(let S=0;S<Vr.length;S+=1){if(y<u[S])return Vr[S];y-=u[S]}return Vr[1]},p=[243,240,233],v=[255,128,95],M=[154,227,238],g=[255,206,150],d=(y,S,w)=>[y[0]+(S[0]-y[0])*w,y[1]+(S[1]-y[1])*w,y[2]+(S[2]-y[2])*w],b=.22;for(let y=0;y<i;y+=1){let S,w,C;if(t()<.8){let x=h(),T=x.x1-x.x0,P=x.y1-x.y0,U=x.x0+t()*T,V=x.y0+t()*P,W=(t()*2-1)*Ys,N=t(),G=x.coral?v:p;if(N<.36){let J=t(),se=t()<.5?x.x0-b:x.x1+b,$=t()<.5?x.y0-b:x.y1+b,ie=t()<.62?Ys+b:-Ys-b;J<.58?(U=se,W=ie):J<.86?(V=$,W=ie):(U=se,V=$),S=x.coral?d(v,g,.15):p,w=ie>0?.36:.18,C=1}else{let J=t();J<.62?(W=Ys+b,w=.13,S=G):J<.72?(W=-Ys-b,w=.06,S=G):(U=t()<.5?x.x0-b:x.x1+b,w=.1,S=x.coral?d(v,[255,104,120],.3):d(p,M,.5)),C=0}let Q=U+.5;s[y*3]=(Q*l-V*c)*Vi,s[y*3+1]=(Q*c+V*l)*Vi,s[y*3+2]=W*Vi}else{let x=Rc+n()*.022+(t()<.15?n()*.09:0);s[y*3]=x,s[y*3+1]=t()*mn,s[y*3+2]=n()*.008;let T=t();S=T<.66?d(M,p,t()*.4):T<.86?v:p,w=.3+t()*.25,C=2}a[y*4]=S[0],a[y*4+1]=S[1],a[y*4+2]=S[2],a[y*4+3]=Math.round($n(w/2)*255),o[y]=C+(y<e?8:0),r[y*4]=t(),r[y*4+1]=t(),r[y*4+2]=t(),r[y*4+3]=t()}let A=new Nt;return A.setAttribute("position",new ut(s,3)),A.setAttribute("aSeed",new ut(r,4)),A.setAttribute("aCol",new ut(a,4,!0)),A.setAttribute("aKind",new ut(o,1)),A.boundingSphere=new pi(new F,50),A}var Wg=`
attribute vec4 aSeed; attribute vec4 aCol; attribute float aKind;
uniform float uTime, uScale, uVortex, uPx, uShine, uCollapse, uBurst, uOrbit, uSizeK, uCoreDist, uFlow, uBright, uCoreR, uRevealY;
uniform mat3 uMarkM, uRingM, uVortexM;
varying vec3 vC; varying float vA;
${En}
${Fg}
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
    float land = ${qs.toFixed(3)} + ${Dg.toFixed(3)} * aSeed.x;
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
`,Xg=`
varying vec3 vC; varying float vA;
void main(){
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(c, c);
  if (d2 > 1.0) discard;
  float f = exp(-d2 * 4.2) - 0.015;
  gl_FragColor = vec4(vC * vA * f, 1.0);
}
`;function qg(i,e){if(i<700){let o=1.6*(.17*i)+165;return{x0:0,x1:i,y0:e-112-o,y1:e-112}}let t=rs(.1*i,67.2,168),n=rs(.05*i,20,72),s=rs(.15*e,96,150),r=1.6*t+168;return{x0:0,x1:n+Math.max(3.25*t,360),y0:e-s-r,y1:e-s}}function Lu(i,e){let t=0,n=0,s=i;for(;s&&s!==e;)t+=s.offsetLeft,n+=s.offsetTop,s=s.offsetParent;if(s!==e){let r=i.getBoundingClientRect(),a=e.getBoundingClientRect();return{x0:r.left-a.left,y0:r.top-a.top,x1:r.right-a.left,y1:r.bottom-a.top}}return{x0:t,y0:n,x1:t+i.offsetWidth,y1:n+i.offsetHeight}}function wu(i,e){let t=e.getBoundingClientRect(),n=null,s=o=>{if(!o||!o.width||!o.height)return;let l={x0:o.left-t.left,y0:o.top-t.top,x1:o.right-t.left,y1:o.bottom-t.top};n=n?{x0:Math.min(n.x0,l.x0),y0:Math.min(n.y0,l.y0),x1:Math.max(n.x1,l.x1),y1:Math.max(n.y1,l.y1)}:l},r=document.createRange(),a=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let o=a.nextNode();o;o=a.nextNode())o.nodeValue.trim()&&(r.selectNodeContents(o),s(r.getBoundingClientRect()));r.detach&&r.detach();for(let o of i.querySelectorAll("img, svg, a, button"))o.parentElement&&o.parentElement.closest("svg")||s(o.getBoundingClientRect());return n||Lu(i,e)}function Tu(i){let e=null,t=[],n=[],s=null;for(let r of i.querySelectorAll("[data-hero-avoid]")){if(!r.offsetWidth||!r.offsetHeight)continue;let a=r.dataset.heroAvoid==="copy"?wu(r,i):Lu(r,i);if(r.dataset.heroAvoid!=="copy")t.push(a);else{e=e?{x0:Math.min(e.x0,a.x0),y0:Math.min(e.y0,a.y0),x1:Math.max(e.x1,a.x1),y1:Math.max(e.y1,a.y1)}:a;for(let o of r.children){if(!o.offsetWidth||!o.offsetHeight)continue;let l=wu(o,i);n.push(l),o.tagName==="H1"&&(s=l)}}}return e?{copy:e,extra:t,parts:n,title:s}:null}function Eu(i){return i?[i.copy,...i.extra].map(e=>`${Math.round(e.x0)},${Math.round(e.y0)},${Math.round(e.x1)},${Math.round(e.y1)}`).join(";"):""}function Yg(i,e,t){let n=Math.max(t.x0-i,0,i-t.x1),s=Math.max(t.y0-e,0,e-t.y1);return Math.hypot(n,s)}var Zg=!1,rM=Zg?parseFloat((location.search.match(/[?&]herot=([\d.]+)/)||[])[1]):NaN;function $g(i,e){let t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=window.matchMedia("(pointer: fine)").matches,s=(navigator.hardwareConcurrency||8)<=4,a=(e.clientWidth||window.innerWidth)<700||s,o=t.matches;i.style.visibility="hidden";let l=new Ho({canvas:i,antialias:!1,alpha:!1,stencil:!1,depth:!1,powerPreference:"default"}),c=!1,u=()=>{};l.debug.onShaderError=()=>u(new Error("shader program failed to link")),l.outputColorSpace=Qi,l.setClearColor(0,1);let f={uTime:{value:0},uRes:{value:new Fe(1,1)},uPx:{value:1},uCoreDist:{value:24},uFade:{value:0}},h=new Ps,p=new en(30,1,.1,400),v=new dn;h.add(v);let M=Cu(20260927),g=new Nt;g.setAttribute("position",new ut(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let d=new nt({uniforms:{uTime:f.uTime,uFade:f.uFade,uFocus:{value:new Fe(.65,.57)},uAspect:{value:1.6},uPulse:{value:0},uQ:{value:1},uScale:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,fragmentShader:`
      uniform float uTime, uFade, uAspect, uPulse, uQ, uScale; uniform vec2 uFocus;
      varying vec2 vUv;
      ${Ug}
      ${En}
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
      }`,depthTest:!1,depthWrite:!1}),b=new Mt(g,d);b.frustumCulled=!1,b.renderOrder=-100,h.add(b);let A=a?1600:3200;{let R=new Float32Array(A*3),ee=new Float32Array(A*3),te=new Float32Array(A),be=new Float32Array(A),Ee=[rn(14674175),rn(10150894),rn(15986921),rn(16763304),rn(12169471)],Ce=new F(1,-.42,-.35).normalize(),he=new F(.3,.9,-.25).cross(Ce).normalize(),ze=new F().crossVectors(he,Ce).normalize(),He=new F;for(let mt=0;mt<A;mt+=1){let hn=mt<A*.45;if(hn){let It=M()*mn,Ct=(M()+M()+M()-1.5)*.16;He.copy(Ce).multiplyScalar(Math.cos(It)).addScaledVector(ze,Math.sin(It)).addScaledVector(he,Ct).normalize()}else{let It=M()*2-1,Ct=M()*mn,Rn=Math.sqrt(1-It*It);He.set(Math.cos(Ct)*Rn,It,Math.sin(Ct)*Rn)}let Bt=90+M()*40;R.set([He.x*Bt,He.y*Bt,He.z*Bt],mt*3);let Be=Ee[Math.floor(Math.pow(M(),1.6)*Ee.length)],$e=hn?.18+Math.pow(M(),4)*1.1:.24+Math.pow(M(),3)*1.6;ee.set([Be.r*$e,Be.g*$e,Be.b*$e],mt*3),te[mt]=hn?1.1+Math.pow(M(),5)*2.2:1.3+Math.pow(M(),4)*3,be[mt]=M()}let tt=new Nt;tt.setAttribute("position",new ut(R,3)),tt.setAttribute("aColor",new ut(ee,3)),tt.setAttribute("aSize",new ut(te,1)),tt.setAttribute("aSeed",new ut(be,1));let Qe=new nt({uniforms:{uTime:f.uTime,uPx:f.uPx,uFade:f.uFade},vertexShader:`
        attribute vec3 aColor; attribute float aSize; attribute float aSeed;
        uniform float uTime, uPx, uFade;
        varying vec3 vC;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float tw = 0.6 + 0.4 * sin(uTime * (0.7 + aSeed * 2.2) + aSeed * 60.0);
          gl_PointSize = aSize * uPx;
          vC = aColor * tw * uFade;
        }`,fragmentShader:`
        varying vec3 vC;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c, c) * 4.0;
          float a = exp(-d * 5.0);
          gl_FragColor = vec4(vC * a, 1.0);
        }`,transparent:!0,blending:Kt,depthWrite:!1}),Oe=new mi(tt,Qe);Oe.frustumCulled=!1,Oe.renderOrder=-50,h.add(Oe)}let y=a?200:420,S=new nt({uniforms:{uTime:f.uTime,uPx:f.uPx,uFade:f.uFade,uCoreDist:f.uCoreDist,uSpan:{value:1}},vertexShader:`
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
      }`,fragmentShader:`
      varying vec3 vC;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float a = smoothstep(1.0, 0.0, d);
        a = a * a * (0.6 + 0.4 * smoothstep(0.5, 0.8, d) + 0.6 * exp(-d * d * 12.0));
        gl_FragColor = vec4(vC * a, 1.0);
      }`,transparent:!0,blending:Kt,depthWrite:!1}),w=(()=>{let R=new Float32Array(y*3),ee=new Float32Array(y*3),te=new Float32Array(y),be=new Float32Array(y),Ee=[rn(10150894),rn(16744543),rn(15986921),rn(9412095)];for(let ze=0;ze<y;ze+=1){let He=1.6+Math.pow(M(),.9)*5.6,tt=M()*mn,Qe=(M()-.5)*(.4+He*.25);R.set([Math.cos(tt)*He,Qe,Math.sin(tt)*He],ze*3);let Oe=Ee[Math.floor(M()*(M()<.7?1.9:4))],mt=.08+M()*.3;ee.set([Oe.r*mt,Oe.g*mt,Oe.b*mt],ze*3),te[ze]=1+Math.pow(M(),3)*3,be[ze]=M()}let Ce=new Nt;Ce.setAttribute("position",new ut(R,3)),Ce.setAttribute("aColor",new ut(ee,3)),Ce.setAttribute("aSize",new ut(te,1)),Ce.setAttribute("aSeed",new ut(be,1));let he=new mi(Ce,S);return he.frustumCulled=!1,v.add(he),he})(),C=a?[64,48]:[112,84],x=new nt({uniforms:{uTime:f.uTime,uIgnite:{value:0},uPulse:{value:0},uFlash:{value:0}},vertexShader:`
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      void main(){
        vO = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uTime, uIgnite, uPulse, uFlash;
      varying vec3 vN; varying vec3 vW; varying vec3 vO;
      ${zr}
      ${En}
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
      }`}),T=new Mt(new Ls(1,C[0],C[1]),x);v.add(T);let P=new nt({uniforms:{uTime:f.uTime,uIgnite:{value:0},uPulse:{value:0},uHalf:{value:5.2},uCoreR:{value:Zn},uRays:{value:0}},vertexShader:`
      uniform float uHalf, uCoreR;
      varying vec2 vQ;
      void main(){
        vQ = position.xy * uHalf;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * uHalf * uCoreR;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime, uIgnite, uPulse, uHalf, uRays;
      varying vec2 vQ;
      ${zr}
      ${En}
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
      }`,transparent:!0,blending:Kt,depthWrite:!1}),U=new Mt(new si(2,2),P);U.frustumCulled=!1,v.add(U);let V=new nt({uniforms:{uTime:f.uTime,uGain:{value:0},uInner:{value:1.12},uOuter:{value:2.9}},vertexShader:`
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime, uGain, uInner, uOuter;
      varying vec2 vP;
      ${zr}
      ${En}
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
      }`,transparent:!0,blending:Kt,depthWrite:!1,side:ln}),W=new Mt(new Is(1.12,2.9,a?128:224,6),V);W.rotation.x=-Math.PI/2,W.frustumCulled=!1,v.add(W);let N=new nt({uniforms:{uTime:f.uTime,uGain:{value:0},uRmax:{value:7},uSpan:{value:7}},vertexShader:`
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime, uGain, uRmax, uSpan;
      varying vec2 vP;
      ${zr}
      ${En}
      void main(){
        float r = length(vP) * uSpan;
        float a = atan(vP.y, vP.x);
        float sw = a + uTime * 0.02 + log(r + 1.0) * 1.4;
        float n = snoise(vec3(cos(sw) * 1.4, sin(sw) * 1.4, r * 0.55)) * 0.5 + 0.5;
        float lanes = 0.6 + 0.4 * sin(r * 5.5 + n * 3.0);
        float I = exp(-r * 0.3) * smoothstep(1.7, 3.6, r) * smoothstep(uRmax * 1.02, uRmax * 0.6, r) * (0.2 + 0.9 * n * n) * lanes;
        vec3 col = mix(CORAL * 0.8, CYAN * 0.6, smoothstep(2.5, uRmax, r));
        gl_FragColor = vec4(col * I * 0.1 * uGain, 1.0);
      }`,transparent:!0,blending:Kt,depthWrite:!1,side:ln}),G=new Mt(new si(1,1),N);G.rotation.x=-Math.PI/2,G.frustumCulled=!1,G.renderOrder=-10,v.add(G);let Q=a?700:1500,J=new nt({uniforms:{uTime:f.uTime,uPx:f.uPx,uCoreDist:f.uCoreDist,uScale:{value:0},uGain:{value:0}},vertexShader:`
      attribute vec3 aData;
      uniform float uTime, uPx, uCoreDist, uScale, uGain;
      varying vec3 vC;
      ${En}
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
      }`,fragmentShader:`
      varying vec3 vC;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float a = exp(-dot(c, c) * 18.0);
        gl_FragColor = vec4(vC * a, 1.0);
      }`,transparent:!0,blending:Kt,depthWrite:!1});{let R=new Float32Array(Q*3);for(let be=0;be<Q;be+=1){let Ee=1.2+Math.pow(M(),1.5)*2.2;R.set([Ee,M()*mn,M()],be*3)}let ee=new Nt;ee.setAttribute("position",new ut(new Float32Array(Q*3),3)),ee.setAttribute("aData",new ut(R,3));let te=new mi(ee,J);te.frustumCulled=!1,v.add(te)}let se=new nt({uniforms:{uR:{value:-1},uAmp:{value:0},uTime:f.uTime,uRmax:{value:7},uSharp:{value:140},uWhite:{value:0},uSpan:{value:7}},vertexShader:`
      varying vec2 vP;
      void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uR, uAmp, uTime, uRmax, uSharp, uWhite, uSpan;
      varying vec2 vP;
      ${En}
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
      }`,transparent:!0,blending:Kt,depthWrite:!1,side:ln}),$=new Mt(new si(2,2,1,1),se);$.rotation.x=-Math.PI/2,$.frustumCulled=!1,v.add($);let ie=new Ls(1,a?48:64,a?32:44),oe=new vr(1,1);oe.computeVertexNormals();let Ue=kg(a?192:288),De=[{type:0,r:.3,R:2.45,w:.33,incl:.07,node:.3,a0:.12,tilt:.3,spin:.25,atmo:16737344,atmoS:.45,shell:1.12},{type:1,r:.43,R:3.2,w:.25,incl:-.05,node:1.1,a0:-.28,tilt:.41,spin:.16,atmo:6079743,atmoS:.55,shell:1.08},{type:2,r:.41,R:3.95,w:.2,incl:.09,node:2.2,a0:4.9,tilt:.2,spin:.14,atmo:9076223,atmoS:.4,shell:1.08,moon:!0},{type:3,r:.5,R:4.75,w:.16,incl:-.035,node:.7,a0:.8,tilt:.15,spin:.12,atmo:16758480,atmoS:.3,shell:1.06},{type:4,r:.37,R:5.5,w:.135,incl:.06,node:1.8,a0:4.39,tilt:.5,spin:.4,atmo:10150894,atmoS:.22,shell:1.1},{type:5,r:.7,R:6.3,w:.105,incl:-.025,node:.2,a0:4.41,tilt:.42,spin:.1,atmo:16762250,atmoS:.45,shell:1.07,ring:!0},{type:6,r:.31,R:7.15,w:.085,incl:.075,node:2.9,a0:6.86,tilt:.1,spin:.08,tint:13623551,atmo:10150894,atmoS:.4,shell:1.1}],St=1.45,rt=2.3,dt=[16744543,10150894,16761466,16757711,12098815,15980976,10150894],Z=De.map((R,ee)=>{let te=new dn;te.rotation.set(R.incl,R.node,0,"YXZ"),v.add(te);let be=Hg(f,{width:.85,base:.042,trail:1.05,trailLen:.3,boost:1,color:10150894,trailColor:dt[ee],reveal:0}),Ee=new Mt(Ue,be);Ee.frustumCulled=!1,te.add(Ee);let Ce=new dn;te.add(Ce);let he=new dn;he.rotation.z=R.tilt,Ce.add(he);let ze=bu(R.type,f,{atmo:R.atmo,tint:R.tint,seed:ee*1.37}),He=new Mt(R.type===4?oe:ie,ze);He.scale.setScalar(R.r),he.add(He);let tt=zg(f,R.atmo,R.atmoS,R.shell),Qe=new Mt(ie,tt);Qe.scale.setScalar(R.r*R.shell),he.add(Qe);let Oe={cfg:R,pivot:te,orbit:Ee,orbitMat:be,holder:Ce,tilt:he,mesh:He,mat:ze,atmo:Qe,atmoMat:tt,born:!1,R:R.R,ext:R.r*Math.max(R.shell,1.12)};if(R.ring){let mt=R.r*St,hn=R.r*rt,Bt=Vg(mt,hn),Be=new Mt(new Is(mt,hn,160,1),Bt);Be.rotation.x=-Math.PI/2,he.add(Be),Oe.ring=Be,Oe.ringMat=Bt,Oe.ext=R.r*rt}if(R.moon){let mt=new dn;mt.rotation.x=.35,he.add(mt);let hn=bu(6,f,{atmo:15986921,tint:15985884,seed:9.1}),Bt=new Mt(ie,hn);Bt.scale.setScalar(.085),Bt.position.set(.62,0,0),mt.add(Bt),Oe.moon=Bt,Oe.moonPivot=mt,Oe.moonMat=hn,Oe.ext=.62+.09}return Oe}),j=a?160:320,re={pos:new Float32Array(j*3),col:new Float32Array(j*3),dat:new Float32Array(j*2),vel:new Float32Array(j*3),life:new Float32Array(j),max:new Float32Array(j),size:new Float32Array(j),drag:new Float32Array(j),next:0,alive:0},ke=new Nt,Te=new ut(re.pos,3).setUsage(Lr),Ke=new ut(re.col,3).setUsage(Lr),Ft=new ut(re.dat,2).setUsage(Lr);ke.setAttribute("position",Te),ke.setAttribute("aColor",Ke),ke.setAttribute("aDat",Ft);let Je=new mi(ke,new nt({uniforms:{uPx:f.uPx,uCoreDist:f.uCoreDist},vertexShader:`
        attribute vec3 aColor; attribute vec2 aDat;
        uniform float uPx, uCoreDist;
        varying vec3 vC;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aDat.x * uPx * (uCoreDist / -mv.z);
          vC = aColor * aDat.y;
        }`,fragmentShader:`
        varying vec3 vC;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c, c) * 4.0;
          float a = exp(-d * 6.0) + 0.2 * exp(-d * 1.5);
          gl_FragColor = vec4(vC * a, 1.0);
        }`,transparent:!0,blending:Kt,depthWrite:!1}));Je.frustumCulled=!1,h.add(Je);let at=rn(16751216),vt=rn(10150894),it=rn(16773596);function bt(R,ee,te,be,Ee,Ce,he,ze,He,tt,Qe=1.2){let Oe=re.next;re.next=(re.next+1)%j,re.pos[Oe*3]=R,re.pos[Oe*3+1]=ee,re.pos[Oe*3+2]=te,re.vel[Oe*3]=be,re.vel[Oe*3+1]=Ee,re.vel[Oe*3+2]=Ce,re.life[Oe]=he,re.max[Oe]=he,re.col[Oe*3]=ze.r*He,re.col[Oe*3+1]=ze.g*He,re.col[Oe*3+2]=ze.b*He,re.size[Oe]=tt,re.drag[Oe]=Qe,re.alive=j}function zt(R){if(!re.alive)return;let ee=0;for(let te=0;te<j;te+=1){if(re.life[te]<=0){re.dat[te*2+1]=0;continue}ee+=1,re.life[te]-=R;let be=te*3,Ee=Math.exp(-re.drag[te]*R);re.vel[be]*=Ee,re.vel[be+1]*=Ee,re.vel[be+2]*=Ee,re.pos[be]+=re.vel[be]*R,re.pos[be+1]+=re.vel[be+1]*R,re.pos[be+2]+=re.vel[be+2]*R;let Ce=$n(re.life[te]/re.max[te]);re.dat[te*2]=re.size[te]*(.5+.5*Ce),re.dat[te*2+1]=Ce*Ce*(1-Math.pow(Ce,12))}re.alive=ee?j:0,Te.needsUpdate=!0,Ke.needsUpdate=!0,Ft.needsUpdate=!0}function Qt(){re.life.fill(0),re.dat.fill(0),re.alive=0,Ft.needsUpdate=!0}let Me={built:!1,N:a?8e3:16e3,K:a?450:900,points:null,mat:null,mark:null,flare:null,bars:[],retired:!1},_t={uTime:{value:0},uScale:{value:1},uVortex:{value:5},uPx:f.uPx,uShine:{value:-9},uCollapse:{value:0},uBurst:{value:-1},uOrbit:{value:1},uSizeK:{value:1},uCoreDist:f.uCoreDist,uCoreR:{value:Zn},uFlow:{value:1},uBright:{value:1},uMarkM:{value:new Ge},uRingM:{value:new Ge},uVortexM:{value:new Ge},uRevealY:{value:-9}};{let R=new Rt().makeRotationFromEuler(new Nn(.34,0,-.16,"ZXY"));_t.uRingM.value.setFromMatrix4(R)}let D=(R,ee,te)=>new nt({uniforms:{uHalf:{value:new F(...ee)},uColor:{value:new F(...te)},uBarM:{value:new Rt},uGlow:{value:0},uReveal:{value:-2},uShine:_t.uShine,uCollapse:_t.uCollapse,uEdgeW:{value:.012}},vertexShader:`
        uniform mat4 uBarM;
        varying vec3 vL; varying vec3 vNl; varying vec3 vNv; varying vec3 vVp; varying vec2 vM;
        void main(){
          vL = position; vNl = normal;
          vNv = normalize(normalMatrix * normal);
          vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          vVp = mvp.xyz;
          vM = (uBarM * vec4(position, 1.0)).xy;
          gl_Position = projectionMatrix * mvp;
        }`,fragmentShader:`
        uniform vec3 uHalf, uColor; uniform float uGlow, uReveal, uShine, uCollapse, uEdgeW;
        varying vec3 vL; varying vec3 vNl; varying vec3 vNv; varying vec3 vVp; varying vec2 vM;
        ${En}
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
        }`,transparent:!0,depthWrite:!1});function Xt(){if(Me.built)return;Me.built=!0;let R=Gg(Me.N,Me.K);Me.mat=new nt({uniforms:_t,vertexShader:Wg,fragmentShader:Xg,transparent:!0,blending:Kt,depthWrite:!1,depthTest:!0}),Me.points=new mi(R,Me.mat),Me.points.frustumCulled=!1,Me.points.renderOrder=6,v.add(Me.points),Me.mark=new dn;let ee=new dn;ee.rotation.z=Cc,Me.mark.add(ee);for(let te of Vr){let be=(te.x1-te.x0)/2*Vi,Ee=(te.y1-te.y0)/2*Vi,Ce=Ys*Vi,he=D(te,[be,Ee,Ce],te.coral?Og:Bg),ze=new Mt(new Ii(be*2,Ee*2,Ce*2),he);ze.position.set(((te.x0+te.x1)/2+.5)*Vi,(te.y0+te.y1)/2*Vi,0),ze.renderOrder=5,ze.frustumCulled=!1,ee.add(ze),Me.bars.push(ze)}Me.mark.updateMatrixWorld(!0);for(let te of Me.bars)te.material.uniforms.uBarM.value.copy(ee.matrix).multiply(te.matrix);h.add(Me.mark),Me.flare=new Mt(new si(2,2),new nt({uniforms:{uI:{value:0},uHalo:{value:.3},uCore:{value:1}},vertexShader:`
          varying vec2 vQ;
          void main(){ vQ = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
          uniform float uI, uHalo, uCore;
          varying vec2 vQ;
          ${En}
          void main(){
            float r = length(vQ);
            float core = exp(-r * r * 70.0);
            float glow = exp(-r * r * 11.0);
            float halo = exp(-r * 3.4);
            vec3 hot = mix(vec3(1.0, 0.62, 0.34), vec3(1.0, 0.86, 0.66), core);
            vec3 col = hot * core * 2.4 * uCore + mix(CORAL, WELD, 0.4) * glow * 0.75 + CORAL * halo * uHalo;
            col *= 1.0 - smoothstep(0.75, 1.0, r);
            gl_FragColor = vec4(col * uI, 1.0);
          }`,transparent:!0,blending:Kt,depthTest:!1,depthWrite:!1})),Me.flare.renderOrder=9,Me.flare.frustumCulled=!1,h.add(Me.flare)}function gt(){!Me.built||Me.retired||(Me.retired=!0,Me.mark.visible=!1,Me.flare.visible=!1,Me.points.geometry.setDrawRange(0,Me.K),_t.uFlow.value=0)}o||Xt();let E=a?s?0:2:4,m=E,B=new Ot(2,2,{type:Ht,samples:m}),z=new qo(l,B);z.addPass(new Yo(h,p));let K=new Xs(new Fe(2,2),.55,.42,1);z.addPass(K);let ce=new Ws({uniforms:{tDiffuse:{value:null},uRes:{value:new Fe(1,1)},uTime:{value:0},uExposure:{value:1},uFocus:{value:new Fe(.65,.57)},uEdge:{value:new Fe(.05,.08)},uCalm:{value:new Dt(0,0,1,1)},uCalmAmt:{value:.4},uCalmSoft:{value:80},uHead:{value:80},uToe:{value:.0045},uEdgeSoft:{value:60}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
      }`});ce.needsSwap=!1,z.addPass(ce);let X={fx:.66,fy:.43,el:.4,roll:-.2,fov:30,dist:24,orbK:1,wK:1,Rmax:7.15,markPx:100,narrow:!1,k:1,diskK:1},O={level:0,dprK:1,iv:[],raf:[],gpu:[],heavy:0,light:0,skip:0,probe:!1,backoff:1,idleVsync:0},Y=1,le=1,Ie=.05,xe=.018,ge=.06,Le=.035,Ne=n?1:1.35,We=new F,L=new F;function pe(R,ee,te){p.position.set(Math.sin(R)*Math.cos(ee)*te,Math.sin(ee)*te,Math.cos(R)*Math.cos(ee)*te),p.lookAt(0,0,0),p.updateMatrixWorld(!0)}function ne(R){return Jt(Ng,1,Lg($n((R-(oi-.3))/3.9)))}function fe(R){return .55+Z[R].R*.06}function Se(R,ee,te){let be=Z[R],Ee=be.cfg,Ce=$o+R*Ko,he=$n((ee-Ce)/fe(R)),ze=Ec(he),tt=Ee.a0+Ee.w*(ee-oi)-(1-ze)*1.25,Qe=Jt(.95*Zn,be.R,ze),Oe=Math.sin(he*Math.PI)*.35*X.orbK*(R%2?1:-1);return te.set(Math.cos(tt)*Qe,Oe,Math.sin(tt)*Qe),he}function ae(R){return Math.max(.001,Jt(.14,1,Su($n((R-.4)/.6))))}let _e={bounds:null,forbid:[],focal:1,cache:new Map};function Pe(R,ee){L.copy(R).applyMatrix4(p.matrixWorldInverse);let te=-L.z;L.applyMatrix4(p.projectionMatrix),ee.x=(L.x*.5+.5)*Y,ee.y=(.5-L.y*.5)*le,ee.z=te}let ot=new F;function ft(R,ee,te){let be=_e.bounds;if(R-te<be.x0||R+te>be.x1||ee-te<be.y0||ee+te>be.y1)return!0;for(let Ee of _e.forbid){let Ce=R-rs(R,Ee.x0,Ee.x1),he=ee-rs(ee,Ee.y0,Ee.y1);if(Ce*Ce+he*he<te*te)return!0}return!1}let gn=[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]],An=[[-1,-1],[1,1]];function kr(R,ee,te){let be=te?An:gn,Ee=Ie*Ne+(n?ge:0),Ce=xe*Ne+(n?Le:0);for(let[he,ze]of be){pe(he*Ee,X.el+ze*Ce,R);for(let He=0;He<Z.length;He+=1){let tt=Z[He],Qe=tt.ext*X.wK*1.04;for(let Oe=0;Oe<ee;Oe+=1){let mt=Oe/ee*mn;if(We.set(Math.cos(mt)*tt.R,0,Math.sin(mt)*tt.R).applyMatrix4(tt.pivot.matrixWorld),Pe(We,ot),ot.z<=.1||ft(ot.x,ot.y,Qe*_e.focal/ot.z))return!1}}}if(te)return!0;for(let he=0;he<Z.length;he+=1){let ze=Z[he],He=$o+he*Ko,tt=fe(he);for(let Qe=He+tt*.4;Qe<He+tt+.6;Qe+=.14){pe(Math.sin(Qe*.07)*Ie*Ne,X.el+Math.sin(Qe*.05+1.2)*xe*Ne,R*ne(Qe));let Oe=Se(he,Qe,We);We.applyMatrix4(ze.pivot.matrixWorld),Pe(We,ot);let mt=ze.ext*X.wK*ae(Oe);if(ft(ot.x,ot.y,mt*_e.focal/ot.z))return!1}}return!0}function Hr(){p.fov=X.fov,p.aspect=Y/le,p.updateProjectionMatrix();let R=p.projectionMatrix.elements;R[8]=1-2*X.fx,R[9]=2*X.fy-1,p.projectionMatrixInverse.copy(p.projectionMatrix).invert()}function Zs(R,ee,te,be=4,Ee=200){if(!kr(Ee,R,te))return Ee;for(let Ce=0;Ce<ee;Ce+=1){let he=Math.sqrt(be*Ee);kr(he,R,te)?Ee=he:be=he}return Ee}function $s(){for(let R of Z)R.R=1.45*Zn+(R.cfg.R-1.45)*X.orbK,R.orbit.scale.setScalar(R.R),R.tilt.scale.setScalar(X.wK);X.Rmax=Z[Z.length-1].R,N.uniforms.uRmax.value=X.Rmax,G.scale.setScalar(X.Rmax*2.1),N.uniforms.uSpan.value=X.Rmax*2.1,se.uniforms.uRmax.value=X.Rmax,$.scale.setScalar(X.Rmax*1.05),se.uniforms.uSpan.value=X.Rmax*1.05,S.uniforms.uSpan.value=X.orbK,_t.uOrbit.value=X.orbK,W.scale.setScalar(Zn*X.diskK)}function Ks(){Y=Math.max(1,e.clientWidth||window.innerWidth),le=Math.max(1,e.clientHeight||window.innerHeight);let R=Y/le,ee=Y<700;X.narrow=ee;let te=a?22e5:42e5,be=ee?1.5:1.75,Ee=Math.max(.5,Math.min(window.devicePixelRatio||1,be,Math.sqrt(te/(Y*le)))*O.dprK),Ce=sn(.62,1.35,R);X.k=Ce,X.el=Jt(.62,.46,Ce),X.diskK=Jt(.85,1,Ce),X.roll=Jt(-.08,-.2,Ce),X.fov=Jt(36,30,Ce),X.orbK=Jt(.52,.78,Ce),X.wK=Jt(.86,1,Ce),$s();let he=40,ze=Tu(e);pt=Eu(ze);let He=ze?{...ze.copy}:qg(Y,le);ee&&(He.x0=0,He.x1=Y);let tt={x0:He.x0-he,y0:He.y0-he,x1:He.x1+he,y1:He.y1+he},Qe=80,Oe=!ee&&Ce>=.5&&Y<1300&&!!ze&&ze.parts.length>1;_e.forbid=Oe?ze.parts.map(je=>({x0:je.x0-he,y0:je.y0-he,x1:je.x1+he,y1:je.y1+he})):[tt],Oe&&ze.title&&(He.x1=Math.min(He.x1,ze.title.x1+40));let mt=rs(.05*Y,20,72);if(ze)for(let je of ze.extra)_e.forbid.push({x0:je.x0-16,y0:je.y0-16,x1:je.x1+16,y1:je.y1+16});else ee||_e.forbid.push({x0:Y-mt-420,y0:le-118,x1:Y,y1:le});_e.bounds={x0:ee?mt:10,x1:Y-mt,y0:Qe+10,y1:ee?le:le-Math.max(40,le*.06)},_e.focal=le/(2*Math.tan(ec.degToRad(X.fov)/2)),v.rotation.z=X.roll,v.updateMatrixWorld(!0);let hn={top:Qe+10,bottom:ee||Ce<.5?tt.y0:le-60},Bt=Jt((hn.top+hn.bottom)/2/le,.45,Ce),Be=[],$e=X.el;if(Ce<.5)for(let je of[$e,$e-.12])for(let Vt of[.47,.5,.53])for(let In of[-.04,0])Be.push([Vt,Bt+In,X.roll,je]);else{let je=rs((tt.x1+_e.bounds.x1)/2/Y,.55,.82),Vt=[.62,.67,.72,je-.03,je,je+.03],In=Oe?[Bt-.03,Bt+.02,.52,.56]:[Bt-.03,Bt+.02];for(let jn of[X.roll,X.roll-.1,X.roll-.2])for(let nl of Vt)for(let js of In)Be.push([nl,js,jn,$e])}let It=`${Y}x${le}:${_e.forbid.map(je=>`${Math.round(je.x0)},${Math.round(je.y0)},${Math.round(je.x1)},${Math.round(je.y1)}`).join(";")}`,Ct=_e.cache.get(It),Rn=performance.now();if(!Ct)for(let[je,Vt,In,jn]of Be){X.fx=je,X.fy=Vt,X.el=jn,v.rotation.z=In,v.updateMatrixWorld(!0),Hr();let js=1/Zs(16,9,!0)*(1-.35*Math.abs(je-Jt(.5,.665,Ce))-.4*Math.abs(Vt-Bt)-.3*($e-jn));(!Ct||js>Ct.score)&&(Ct={fx:je,fy:Vt,roll:In,el:jn,score:js})}X.fx=Ct.fx,X.fy=Ct.fy,X.roll=Ct.roll,X.el=Ct.el,v.rotation.z=X.roll,v.updateMatrixWorld(!0),Hr(),Ct.dist||(Ct.dist=Zs(36,16,!1),_e.cache.size>=12&&_e.cache.delete(_e.cache.keys().next().value),_e.cache.set(It,Ct)),X.dist=Ct.dist,X.solveMs=performance.now()-Rn;let jt=X.fx*Y,Qn=X.fy*le,Pn=Math.min(jt-mt,Y-mt-jt),Mi=Math.min(Qn-Qe-12,le-Qn-30);for(let je of _e.forbid){let Vt=Yg(jt,Qn,je);Pn=Math.min(Pn,Vt),Mi=Math.min(Mi,Vt)}X.markPx=Math.max(24,Math.min(Mi/1.34,Pn/(Rc+.12),le*.14,Y*.26)),X.dpr=Ee;let cs=Ee>=1.5?Math.min(E,2):E;for(let je of[z.renderTarget1,z.renderTarget2])je.samples!==cs&&(je.samples=cs,je.dispose());l.setPixelRatio(Ee),l.setSize(Y,le,!1),z.setPixelRatio(Ee),z.setSize(Y,le),f.uRes.value.set(Y*Ee,le*Ee),f.uPx.value=Ee,_t.uSizeK.value=ee?1.05:1.2,_t.uBright.value=ee?.9:1;for(let je of Me.bars)je.material.uniforms.uEdgeW.value=1.25/X.markPx;ce.uniforms.uRes.value.set(Y*Ee,le*Ee),ce.uniforms.uFocus.value.set(X.fx,1-X.fy),ce.uniforms.uEdge.value.set(ee?.035:.045,ee?.05:.07),ce.uniforms.uCalm.value.set(He.x0*Ee,He.y0*Ee,He.x1*Ee,He.y1*Ee),ce.uniforms.uCalmSoft.value=90*Ee,ce.uniforms.uCalmAmt.value=ee?.5:.55,ce.uniforms.uHead.value=Qe*Ee,ce.uniforms.uEdgeSoft.value=(ee?44:64)*Ee,d.uniforms.uFocus.value.set(X.fx,1-X.fy),d.uniforms.uAspect.value=R,d.uniforms.uScale.value=Jt(.7,1,Ce),K.strength=ee?.5:.55,se.uniforms.uSharp.value=ee?260:150}function Gr(){d.uniforms.uQ.value=O.level>=1?0:1,G.visible=O.level<1,O.dprK=O.level>=3?.64:O.level>=2?.8:1,Ks()}let xn={x:0,y:0,tx:0,ty:0};n&&window.addEventListener("pointermove",R=>{xn.tx=R.clientX/window.innerWidth*2-1,xn.ty=R.clientY/window.innerHeight*2-1},{passive:!0});let On=-1,ki=!1,qt=new F,Hi=new F,vi=new Float32Array(Z.length),as=new Dn,Gi=new Nn,Js=new Nn,Wi=new Rt,Wr=R=>{try{window.dispatchEvent(new CustomEvent("blitast:pulse",{detail:R}))}catch{}};function Xi(R,ee,te){f.uTime.value=R,f.uFade.value=sn(0,1.8,R),xn.x+=(xn.tx-xn.x)*Math.min(1,ee*2.5),xn.y+=(xn.ty-xn.y)*Math.min(1,ee*2.5);let be=X.dist*ne(R),Ee=Math.sin(R*.07)*Ie*Ne+xn.x*ge,Ce=X.el+Math.sin(R*.05+1.2)*xe*Ne-xn.y*Le;pe(Ee,Ce,be),f.uCoreDist.value=be;let he=R-oi,ze=he<0?0:Su($n(he/.8)),He=he<-.2?0:Math.exp(-Math.pow((he-.08)/.2,2)),tt=0,Qe=-1,Oe=0,mt=0,hn=X.Rmax;if(he>.02&&he<1){let Be=he-.02;Qe=1+Be*hn*1.1,Oe=(X.narrow?.32:.5)*Math.exp(-Be*1.6)*sn(0,.08,Be),mt=1}if(te&&!ki&&he>=0&&(ki=!0,Wr({ignite:!0,index:-1})),R>Or){let Be=Math.floor((R-Or)/Ac),$e=R-Or-Be*Ac;if(tt=Math.exp(-$e*2.4)*(1-Math.exp(-$e*30)),Qe=1.1+$e*hn*.56,Oe=Math.exp(-$e*.55)*sn(0,.15,$e)*(X.narrow?.3:.5),te&&Be!==On){On=Be,Wr({ignite:!1,index:Be});let It=a?12:26;for(let Ct=0;Ct<It;Ct+=1){let Rn=M()*mn;qt.set(Math.cos(Rn),(M()-.5)*.2,Math.sin(Rn)).normalize().applyQuaternion(v.quaternion);let jt=(1.2+M()*1.4)*X.orbK;bt(qt.x*1.05*Zn,qt.y*1.05*Zn,qt.z*1.05*Zn,qt.x*jt,qt.y*jt,qt.z*jt,.8+M()*.8,M()<.6?at:vt,1.6+M()*1.4,1.6+M()*2,1.4)}}}!te&&R>oi+3&&(tt=0,Qe=-1,Oe=0),T.visible=he>-.05,T.scale.setScalar(Math.max(.001,ze*Zn));let Bt=Jt(.35,1,$n(he/.3))*(1+He*(X.narrow?.4:.6));if(x.uniforms.uIgnite.value=he<0?0:Bt,x.uniforms.uPulse.value=tt,x.uniforms.uFlash.value=He,P.uniforms.uIgnite.value=Bt*sn(-.05,.5,he),P.uniforms.uPulse.value=tt+He*.4,P.uniforms.uCoreR.value=Math.max(.001,ze*Zn),P.uniforms.uRays.value=.8*sn(1.2,3.4,he),J.uniforms.uScale.value=Jt(.3,1,Ec($n((he-.05)/1.4)))*Zn*X.diskK,J.uniforms.uGain.value=sn(.05,1.2,he)*(1+tt*1),V.uniforms.uGain.value=sn(0,1,he)*(1+tt*.8+He*1),W.visible=he>0,d.uniforms.uPulse.value=tt+He,N.uniforms.uGain.value=sn(.3,2.8,he)*(1+tt*.6),se.uniforms.uR.value=Qe,se.uniforms.uAmp.value=Oe,se.uniforms.uWhite.value=mt,$.visible=Oe>.002,Me.built){let Be=_t;Be.uTime.value=R;let $e=_e.focal/be,It=$n((R-Ru)/Pu),Ct=It*It*It;Be.uCollapse.value=It,Be.uScale.value=X.markPx/$e,Be.uShine.value=R<Zo-.3?-9:-2.2+(R-Zo)/.42*4.4,Js.set(Math.PI/2-Jt(.85,.6,X.k),0,X.roll,"ZXY"),Wi.makeRotationFromEuler(Js),Be.uVortexM.value.setFromMatrix4(Wi),Be.uVortex.value=Rc*Be.uScale.value*Jt(.95,1.5,X.k);let Rn=sn(qs+.3,Zo+.3,R);Gi.set(.08*Math.sin(R*.9)*Rn,(.3*Math.sin(R*1.1-1.2)-.08)*Rn*(1-It),It*It*.5,"ZXY"),as.setFromEuler(Gi),Wi.makeRotationFromQuaternion(as),Be.uMarkM.value.setFromMatrix4(Wi);let jt=X.markPx/$e,Qn=.3*sn(0,.45,R)*(1-sn(.8,1.25,R)),Pn=sn(.5,.96,It)*(he<.03?1:Math.exp(-Math.pow((he-.03)/.09,2))),Mi=Qn+Pn*1.7;if(Me.flare.visible=Mi>.002,Me.flare.quaternion.copy(p.quaternion),Me.flare.scale.setScalar(jt*(Qn>Pn?.62:Jt(.95,.5,It))),Me.flare.material.uniforms.uI.value=Mi,Me.flare.material.uniforms.uHalo.value=Qn>Pn?.55:.28,Me.flare.material.uniforms.uCore.value=Qn>Pn?.5:1,he<0){Be.uBurst.value=-1,Be.uFlow.value=1,Me.points.visible=!0,Me.mark.visible=R>qs-.2,Me.mark.position.set(0,0,0),Me.mark.quaternion.copy(p.quaternion).multiply(as),Me.mark.scale.setScalar(Math.max(1e-4,Be.uScale.value*(1-Ct)));let cs=sn(qs-.1,qs+.25,R),je=Jt(-1.35,1.7,sn(qs-.05,Zo-.02,R));Be.uRevealY.value=je;for(let Vt of Me.bars)Vt.material.uniforms.uGlow.value=cs,Vt.material.uniforms.uReveal.value=je;Me.mat.depthTest=!0}else Be.uBurst.value=he,Me.mark.visible=!1,he>2.4&&gt(),Me.points.visible=te||he<2.4,Me.retired&&(Me.flare.visible=!1)}v.updateMatrixWorld();for(let Be=0;Be<Z.length;Be+=1){let $e=Z[Be],It=$e.cfg,Ct=$o+Be*Ko,Rn=fe(Be),jt=Se(Be,R,$e.holder.position),Qn=It.a0+It.w*(R-oi),Pn=R>Ct;$e.holder.visible=Pn,$e.holder.scale.setScalar(ae(jt));let Mi=jt<1?1-sn(.1,.82,jt):0;$e.mat.uniforms.uHot.value=Pn?Mi:0,$e.atmoMat.uniforms.uHot.value=$e.mat.uniforms.uHot.value,$e.mesh.rotation.y=R*It.spin+Be;let cs=(Qn%mn+mn)%mn/mn;$e.orbitMat.uniforms.uPhase.value=cs,$e.orbitMat.uniforms.uReveal.value=Ec($n((R-Ct-Rn*.7)/1.6)),$e.orbit.visible=R>Ct;let je=Qe>0?Math.exp(-Math.pow(($e.R-Qe)/(.7*X.orbK),2))*Oe:0;if($e.mat.uniforms.uWave.value=je,$e.atmoMat.uniforms.uWave.value=je,$e.orbitMat.uniforms.uGain.value=1+je*1.8,$e.ring&&($e.ringMat.uniforms.uReveal.value=sn(.4,1,jt)),$e.moon&&($e.moonPivot.rotation.y=R*.9,$e.moon.visible=jt>.6),te&&Pn&&jt<1)for($e.holder.getWorldPosition(qt),vi[Be]+=ee*(a?22:44);vi[Be]>=1;){vi[Be]-=1;let Vt=.14;bt(qt.x+(M()-.5)*.1,qt.y+(M()-.5)*.1,qt.z+(M()-.5)*.1,(M()-.5)*Vt,(M()-.5)*Vt,(M()-.5)*Vt,.4+M()*.6,M()<.6?at:M()<.5?vt:it,1.1+M()*1.1,1.2+M()*1.8,1.6)}if(te&&!$e.born&&jt>=1){$e.born=!0,$e.holder.getWorldPosition(qt);let Vt=a?8:16;for(let In=0;In<Vt;In+=1){Hi.set(M()-.5,M()-.5,M()-.5).normalize();let jn=(.5+M()*.9)*X.orbK;bt(qt.x,qt.y,qt.z,Hi.x*jn,Hi.y*jn,Hi.z*jn,.4+M()*.6,In%2?vt:at,1.6+M()*1.4,1.4+M()*1.8,2.4)}}}v.updateMatrixWorld();for(let Be of Z)Be.ring&&(Be.mesh.getWorldPosition(Be.ringMat.uniforms.uPlanetPos.value),Be.ringMat.uniforms.uPlanetR.value=Be.cfg.r*X.wK*Be.holder.scale.x,Be.ringMat.uniforms.uNormal.value.set(0,0,1).transformDirection(Be.ring.matrixWorld));w.rotation.y=R*.012,ce.uniforms.uTime.value=R,zt(te?ee:0)}let vn=1e3/60,_n=0,qi=0,_=0,I=0,q=vn,k=!0,H=document.documentElement.classList.contains("is-locked"),de=!1,ve=!1,me=!1,we=0,Re=null,qe=null,Ze=null,Ae=0,pt="",Pt=0;function wt(R){_n=R,ki=R>=oi,On=R>Or?Math.floor((R-Or)/Ac):-1;for(let ee=0;ee<Z.length;ee+=1)Z[ee].born=R>=$o+ee*Ko+fe(ee);Qt()}o&&wt(Br);let st=l.getContext(),Et=null;try{Et=st.getExtension("EXT_disjoint_timer_query_webgl2")}catch{Et=null}let ue={active:null,pending:[],free:[]};function Yt(){ue.active=null,ue.pending.length=0,ue.free.length=0}function ht(){if(!Et||ue.active||ue.pending.length>5)return;let R=ue.free.pop()||st.createQuery();R&&(st.beginQuery(Et.TIME_ELAPSED_EXT,R),ue.active=R)}function fn(){ue.active&&(st.endQuery(Et.TIME_ELAPSED_EXT),ue.pending.push(ue.active),ue.active=null)}function Cn(){if(!Et||!ue.pending.length)return;let R=st.getParameter(Et.GPU_DISJOINT_EXT);for(;ue.pending.length;){let ee=ue.pending[0];if(!st.getQueryParameter(ee,st.QUERY_RESULT_AVAILABLE))break;let te=st.getQueryParameter(ee,st.QUERY_RESULT);ue.pending.shift(),ue.free.push(ee),!R&&te>0&&O.gpu.push(te/1e6)}}let Kn=R=>{let ee=R.slice().sort((te,be)=>te-be);return ee[ee.length>>1]},_i=(R,ee)=>{let te=R.slice().sort((be,Ee)=>be-Ee);return te[Math.min(te.length-1,Math.floor(te.length*ee))]},xt=[1,.85,.85*.64,.85*.41];function Ut(R){O.level=R,O.skip=1,O.heavy=0,O.light=0,Gr()}function Jn(){let R=O.iv.slice().sort((Qe,Oe)=>Qe-Oe),ee=R.slice(0,Math.max(1,Math.floor(R.length*.95))),te=ee.reduce((Qe,Oe)=>Qe+Oe,0)/ee.length,be=O.raf.length>20?_i(O.raf,.2):vn,Ee=Math.min(be,O.idleVsync||be),Ce=Math.max(vn,Ee),he=O.gpu.length>=20?Kn(O.gpu):-1;if(O.iv.length=0,O.raf.length=0,O.gpu.length=0,O.skip>0){O.skip-=1;return}let ze,He;if(he>=0){let Qe=Math.max(vn,be)*.85;ze=he>Qe,He=(O.level>0?he*xt[O.level-1]/xt[O.level]:1/0)<Qe*.6}else ze=te>Ce*1.25+1.5,He=te<Math.max(vn,be)*1.06;if(ze){O.light=0,O.heavy+=1,O.probe&&(O.backoff=Math.min(O.backoff*2,16)),O.probe=!1,O.level<3&&(O.heavy>=2||te>Ce*2)&&Ut(O.level+1);return}if(O.heavy=0,O.probe=!1,!He||O.level===0){O.light=0;return}O.light+=1;let tt=he>=0?3:4*O.backoff;O.light>=tt&&(Ut(O.level-1),O.probe=he<0)}function Tt(R){R>200||(O.iv.push(R),O.iv.length>=90&&Jn())}function Bn(){!de&&!c&&(i.style.visibility="")}function yi(R){let ee=qi?R-qi:0;qi=R;let te=_n>oi+3;if(ee>0&&ee<200&&(q+=(ee-q)*.1,te&&O.raf.push(ee)),I){if(R<I-Math.min(q,vn)*.5)return;I=R-I>vn?R+vn:I+vn}else I=R+vn;let be=_?R-_:vn;_=R;let Ee=Math.min(.05,be/1e3),Ce=!1;Cn(),Xi(_n,Ee,!0);let he=te&&!Ce;he&&ht(),z.render(Ee),fn(),Bn(),_n+=Ee,he&&Tt(be)}function Xr(R){if(!c)try{yi(R)}catch(ee){u(ee)}}function Du(){Me.built&&(Me.points.visible=!1,Me.mark.visible=!1,Me.flare.visible=!1)}function Jo(){if(!(de||!me||c))try{Qt(),Xi(Math.max(_n,Br),0,!1),Du(),z.render(0),Bn(),requestAnimationFrame(()=>{o&&!de&&!c&&!ve&&z.render(0)})}catch(R){u(R)}}function Pc(){if(!(de||!me||c||o||ve))try{Xi(_n,0,!1),z.render(0)}catch(R){u(R)}}function os(){if(!me||c)return;let R=!o&&k&&!H&&!document.hidden&&!de;R&&!ve?(ve=!0,qi=0,_=0,I=0,l.setAnimationLoop(Xr)):!R&&ve&&(ve=!1,l.setAnimationLoop(null))}u=R=>{if(!c){c=!0,ve=!1,i.style.visibility="hidden";try{l.setAnimationLoop(null)}catch{}clearTimeout(Pt),clearTimeout(Ae),Re&&Re.disconnect(),qe&&qe.disconnect(),Ze&&Ze.disconnect(),e.removeEventListener("animationend",el),document.removeEventListener("visibilitychange",os),window.removeEventListener("blitast:modal",Ic),e.classList.add("is-static"),console.warn("[hero] 3D scene disabled:",R&&R.message?R.message:R)}};function Ic(R){H=!!(R&&R.detail&&R.detail.open),os()}let ls="",Qo=0;function Lc(){if(Pt=0,!c)try{Ks(),ls=`${Y}x${le}`,Qo=Y/le,o?Jo():Pc()}catch(R){u(R)}}function jo(){if(c||!we)return;let R=Math.max(1,e.clientWidth||window.innerWidth),ee=Math.max(1,e.clientHeight||window.innerHeight),te=`${R}x${ee}`;if(te===ls)return;clearTimeout(Pt);let be=Math.abs(R/ee/Qo-1)>.2;!ls||be||_e.cache.has(te)?Lc():Pt=setTimeout(Lc,140)}let Dc=(R,ee)=>{R.addEventListener?R.addEventListener("change",ee):R.addListener&&R.addListener(ee)},Nu=(R,ee)=>{R.removeEventListener?R.removeEventListener("change",ee):R.removeListener&&R.removeListener(ee)},Qs=null;function Nc(){Qs&&Nu(Qs,Uc);try{Qs=window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`),Dc(Qs,Uc)}catch{Qs=null}}function Uc(){Nc(),ls="",jo()}Nc(),Re=new ResizeObserver(jo),Re.observe(e);let Fc=e.querySelectorAll("[data-hero-avoid]");function el(){c||!we||(clearTimeout(Ae),Ae=setTimeout(()=>{c||Eu(Tu(e))===pt||(ls="",jo())},160))}if(Fc.length){Ze=new ResizeObserver(el);for(let R of Fc)Ze.observe(R);e.addEventListener("animationend",el)}qe=new IntersectionObserver(R=>{for(let ee of R)k=ee.isIntersecting;os()},{threshold:0}),qe.observe(e),document.addEventListener("visibilitychange",os),window.addEventListener("blitast:modal",Ic),Dc(t,()=>{if(c)return;let R=o;o=t.matches,o!==R&&(wt(Math.max(_n,Br)),os(),o&&Jo())}),i.addEventListener("webglcontextlost",R=>{R.preventDefault(),de=!0,i.style.visibility="hidden",we+=1,ve&&(ve=!1,l.setAnimationLoop(null)),Yt()},!1),i.addEventListener("webglcontextrestored",()=>{if(!c){de=!1,Yt();try{Et&&(Et=st.getExtension("EXT_disjoint_timer_query_webgl2"))}catch{Et=null}zc()}},!1);let Oc=()=>{let R=[];return h.traverse(ee=>{ee.visible||(R.push(ee),ee.visible=!0)}),R},Bc=new Ps,Uu=new gi(-1,1,1,-1,0,1);{let R=new Nt;R.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),R.setAttribute("uv",new At([0,2,0,0,2,0],2));let ee=[K.materialHighPassFilter,...K.separableBlurMaterials,K.compositeMaterial,K.blendMaterial,ce.material];for(let te of ee){let be=new Mt(R,te);be.frustumCulled=!1,Bc.add(be)}}let tl=new en;function Fu(){let R=[];h.traverse(te=>{(te.isMesh||te.isPoints||te.isLine)&&R.push(te)});let ee=[];for(let te=0;te<R.length;te+=3)ee.push(R.slice(te,te+3));return ee}function Ou(R,ee){let te=1+ee%30;for(let Ce of R)Ce.layers.enable(te);tl.copy(p),tl.layers.set(te);let be=Oc(),Ee=l.getRenderTarget();l.setRenderTarget(z.readBuffer),l.render(h,tl),l.setRenderTarget(Ee);for(let Ce of be)Ce.visible=!1;for(let Ce of R)Ce.layers.disable(te)}function Bu(){let R=p.layers.mask;p.layers.disableAll(),z.render(0),p.layers.mask=R}function zu(){me=!0,o?Jo():(os(),ve||Pc())}function Vu(R){let ee=Fu(),te=0,be=0,Ee=[],Ce=he=>{if(!(R!==we||c||de)){be&&Ee.push(he-be),be=he;try{te===0&&Xi(o?Math.max(_n,Br):_n,0,!1);let ze=performance.now();do te<ee.length?Ou(ee[te],te):Bu(),te+=1;while(te<=ee.length&&performance.now()-ze<5)}catch(ze){u(ze);return}if(te<=ee.length){requestAnimationFrame(Ce);return}Ee.length>=3&&(O.idleVsync=Math.max(4,Math.min(...Ee))),zu()}};requestAnimationFrame(Ce)}function zc(){let R=++we;me=!1,i.style.visibility="hidden";let ee=!1,te=()=>{ee||R!==we||c||de||(ee=!0,Vu(R))};try{Ks(),ls=`${Y}x${le}`,Qo=Y/le,Xi(o?Math.max(_n,Br):_n,0,!1);let be=Oc(),Ee=performance.now(),Ce=[l.compileAsync(h,p),l.compileAsync(Bc,Uu)];for(let he of be)he.visible=!1;Promise.all(Ce).then(te,te)}catch{te()}setTimeout(te,7e3)}setTimeout(()=>{!c&&!me&&we===0&&zc()},0)}function Au(){let i=document.querySelector("section.hero"),e=i?i.querySelector("canvas#hero-canvas"):null;if(!i||!e)return;let t=()=>{try{$g(e,i)}catch(r){e.style.display="none",i.classList.add("is-static"),console.warn("[hero] 3D scene unavailable:",r)}},n=()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(t,0)):t()};(()=>{let r=document.fonts&&document.fonts.ready;if(!r)return n();let a=!1,o=()=>{a||(a=!0,n())};r.then(o,o),setTimeout(o,1500)})()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Au,{once:!0}):Au();})();
