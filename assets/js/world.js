var zf=0,uu=1,kf=2;var da=1,Vf=2,us=3,ji=0,cn=1,Vn=2,Rn=0,hs=1,Qi=2,hu=3,fu=4,Gf=5;var Sr=100,Hf=101,Wf=102,Xf=103,qf=104,Yf=200,$f=201,Zf=202,Jf=203,du=204,pu=205,Kf=206,jf=207,Qf=208,td=209,ed=210,nd=211,id=212,rd=213,sd=214,vo=0,yo=1,So=2,ts=3,Mo=4,bo=5,wo=6,Eo=7,mu=0,ad=1,od=2,ai=0,gu=1,_u=2,xu=3,vu=4,yu=5,Su=6,Mu=7;var bu=300,tr=301,Mr=302,rl=303,sl=304,pa=306,Ao=1e3,di=1001,To=1002,Ye=1003,ld=1004;var ma=1005;var He=1006,al=1007;var $n=1008;var Gn=1009,wu=1010,Eu=1011,fs=1012,ol=1013,oi=1014,Pn=1015,Hn=1016,ll=1017,cl=1018,ds=1020,Au=35902,Tu=35899,Cu=1021,Ru=1022,In=1023,pi=1026,er=1027,ul=1028,hl=1029,gi=1030,fl=1031;var dl=1033,ga=33776,_a=33777,xa=33778,va=33779,pl=35840,ml=35841,gl=35842,_l=35843,xl=36196,vl=37492,yl=37496,Sl=37488,Ml=37489,ya=37490,bl=37491,wl=37808,El=37809,Al=37810,Tl=37811,Cl=37812,Rl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Bl=36492,zl=36494,kl=36495,Vl=36283,Gl=36284,Sa=36285,Hl=36286;var Ws=2300,Co=2301,go=2302,iu=2303,ru=2400,su=2401,au=2402;var cd=3200;var Pu=0,ud=1,Ui="",gn="srgb",Xs="srgb-linear",qs="linear",we="srgb";var _o=7680;var hd=519,fd=512,dd=513,pd=514,Wl=515,md=516,gd=517,Xl=518,_d=519,Iu=35044,Lu=35048;var Du="300 es",ii=2e3,Ys=2001;function gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _m(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){let i=es("canvas");return i.style.display="block",i}var cf={},ns=null;function $s(...i){let t="THREE."+i.shift();ns?ns("log",t,...i):console.log(t,...i)}function vd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=vd(i);let t="THREE."+i.shift();if(ns)ns("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=vd(i);let t="THREE."+i.shift();if(ns)ns("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in cf||(cf[t]=!0,Vt(...i))}function yd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Sd={[vo]:yo,[So]:wo,[Mo]:Eo,[ts]:bo,[yo]:vo,[wo]:So,[Eo]:Mo,[bo]:ts},mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uf=1234567,ks=Math.PI/180,is=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Uu(i,t){return(i%t+t)%t}function xm(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function vm(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function ym(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function Sm(i,t=1){return t-Math.abs(Uu(i,t*2)-t)}function Mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Em(i,t){return i+Math.random()*(t-i)}function Am(i){return i*(.5-Math.random())}function Tm(i){i!==void 0&&(uf=i);let t=uf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cm(i){return i*ks}function Rm(i){return i*is}function Pm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dm(i,t,e,n,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),d=s((n-t)/2),m=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nu={DEG2RAD:ks,RAD2DEG:is,generateUUID:Ii,clamp:Kt,euclideanModulo:Uu,mapLinear:xm,inverseLerp:vm,lerp:Vs,damp:ym,pingpong:Sm,smoothstep:Mm,smootherstep:bm,randInt:wm,randFloat:Em,randFloatSpread:Am,seededRandom:Tm,degToRad:Cm,radToDeg:Rm,isPowerOfTwo:Pm,ceilPowerOfTwo:Im,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Dm,normalize:Ce,denormalize:ni},Vu=class Vu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;var Ft=Vu,Bn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(f!==v||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*v;g<0&&(h=-h,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let E=Math.acos(g),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o;let E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-o*d,t[e+2]=l*m+u*d+o*h-c*f,t[e+3]=u*m-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gu=class Gu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;var U=Gu,Dc=new U,hf=new Bn,Hu=class Hu{constructor(t,e,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],v=r[0],g=r[3],p=r[6],E=r[1],A=r[4],y=r[7],S=r[2],w=r[5],C=r[8];return s[0]=a*v+o*E+c*S,s[3]=a*g+o*A+c*w,s[6]=a*p+o*y+c*C,s[1]=l*v+u*E+f*S,s[4]=l*g+u*A+f*w,s[7]=l*p+u*y+f*C,s[2]=h*v+d*E+m*S,s[5]=h*g+d*A+m*w,s[8]=h*p+d*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,m=e*f+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=f*v,t[1]=(r*l-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hu.prototype.isMatrix3=!0;var Jt=Hu,Uc=new Jt,ff=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),df=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Um(){let i={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===we&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xs]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:ff,fromXYZ:df,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:ff,fromXYZ:df,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var he=Um();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,Ro=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fr===void 0&&(Fr=es("canvas")),Fr.width=t.width,Fr.height=t.height;let r=Fr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nm=0,rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Fm=0,Fc=new U,an=class i extends mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,r=di,s=He,a=$n,o=In,c=Gn,l=i.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Ii(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=bu;an.DEFAULT_ANISOTROPY=1;var Wu=class Wu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,y=(d+1)/2,S=(p+1)/2,w=(u+h)/4,C=(f+v)/4,_=(m+g)/4;return A>y&&A>S?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=w/n,s=C/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=C/s,r=_/s),this.set(n,r,s,e),this}let E=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(f-v)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;var ee=Wu,Po=class extends mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new an(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zs=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var il=class il{constructor(t,e,n,r,s,a,o,c,l,u,f,h,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,h,d,m,v,g)}set(t,e,n,r,s,a,o,c,l,u,f,h,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new il().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Or.setFromMatrixColumn(t,0).length(),s=1/Or.setFromMatrixColumn(t,1).length(),a=1/Or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=a*u,d=a*f,m=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,v=l*f;e[0]=h+v*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,m=o*u,v=o*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Om,t,Bm)}lookAt(t,e,n){let r=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Bi.crossVectors(n,Nn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Bi.crossVectors(n,Nn)),Bi.normalize(),qa.crossVectors(Nn,Bi),r[0]=Bi.x,r[4]=qa.x,r[8]=Nn.x,r[1]=Bi.y,r[5]=qa.y,r[9]=Nn.y,r[2]=Bi.z,r[6]=qa.z,r[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],E=n[3],A=n[7],y=n[11],S=n[15],w=r[0],C=r[4],_=r[8],b=r[12],T=r[1],R=r[5],D=r[9],N=r[13],L=r[2],I=r[6],V=r[10],W=r[14],lt=r[3],Z=r[7],rt=r[11],et=r[15];return s[0]=a*w+o*T+c*L+l*lt,s[4]=a*C+o*R+c*I+l*Z,s[8]=a*_+o*D+c*V+l*rt,s[12]=a*b+o*N+c*W+l*et,s[1]=u*w+f*T+h*L+d*lt,s[5]=u*C+f*R+h*I+d*Z,s[9]=u*_+f*D+h*V+d*rt,s[13]=u*b+f*N+h*W+d*et,s[2]=m*w+v*T+g*L+p*lt,s[6]=m*C+v*R+g*I+p*Z,s[10]=m*_+v*D+g*V+p*rt,s[14]=m*b+v*N+g*W+p*et,s[3]=E*w+A*T+y*L+S*lt,s[7]=E*C+A*R+y*I+S*Z,s[11]=E*_+A*D+y*V+S*rt,s[15]=E*b+A*N+y*W+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],E=c*d-l*h,A=o*d-l*f,y=o*h-c*f,S=a*d-l*u,w=a*h-c*u,C=a*f-o*u;return e*(v*E-g*A+p*y)-n*(m*E-g*S+p*w)+r*(m*A-v*S+p*C)-s*(m*y-v*w+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],E=e*o-n*a,A=e*c-r*a,y=e*l-s*a,S=n*c-r*o,w=n*l-s*o,C=r*l-s*c,_=u*v-f*m,b=u*g-h*m,T=u*p-d*m,R=f*g-h*v,D=f*p-d*v,N=h*p-d*g,L=E*N-A*D+y*R+S*T-w*b+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return t[0]=(o*N-c*D+l*R)*I,t[1]=(r*D-n*N-s*R)*I,t[2]=(v*C-g*w+p*S)*I,t[3]=(h*w-f*C-d*S)*I,t[4]=(c*T-a*N-l*b)*I,t[5]=(e*N-r*T+s*b)*I,t[6]=(g*y-m*C-p*A)*I,t[7]=(u*C-h*y+d*A)*I,t[8]=(a*D-o*T+l*_)*I,t[9]=(n*T-e*D-s*_)*I,t[10]=(m*w-v*y+p*E)*I,t[11]=(f*y-u*w-d*E)*I,t[12]=(o*b-a*R-c*_)*I,t[13]=(e*R-n*b+r*_)*I,t[14]=(v*A-m*S-g*E)*I,t[15]=(u*S-f*A+h*E)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,m=s*f,v=a*u,g=a*f,p=o*f,E=c*l,A=c*u,y=c*f,S=n.x,w=n.y,C=n.z;return r[0]=(1-(v+p))*S,r[1]=(d+y)*S,r[2]=(m-A)*S,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+p))*w,r[6]=(g+E)*w,r[7]=0,r[8]=(m+A)*C,r[9]=(g-E)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Or.set(r[0],r[1],r[2]).length(),o=Or.set(r[4],r[5],r[6]).length(),c=Or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);let l=1/a,u=1/o,f=1/c;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,e.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=ii,c=!1){let l=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),m,v;if(c)m=s/(a-s),v=a*s/(a-s);else if(o===ii)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ys)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=ii,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),m,v;if(c)m=1/(a-s),v=a/(a-s);else if(o===ii)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ys)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};il.prototype.isMatrix4=!0;var Ee=il,Or=new U,jn=new Ee,Om=new U(0,0,0),Bm=new U(1,1,1),Bi=new U,qa=new U,Nn=new U,pf=new Ee,mf=new Bn,Wi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mf.setFromEuler(this),this.setFromQuaternion(mf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zm=0,gf=new U,Br=new Bn,Ai=new Ee,Ya=new U,Us=new U,km=new U,Vm=new Bn,_f=new U(1,0,0),xf=new U(0,1,0),vf=new U(0,0,1),yf={type:"added"},Gm={type:"removed"},zr={type:"childadded",child:null},Oc={type:"childremoved",child:null},zn=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Wi,n=new Bn,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Jt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(_f,t)}rotateY(t){return this.rotateOnAxis(xf,t)}rotateZ(t){return this.rotateOnAxis(vf,t)}translateOnAxis(t,e){return gf.copy(t).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_f,t)}translateY(t){return this.translateOnAxis(xf,t)}translateZ(t){return this.translateOnAxis(vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ya.copy(t):Ya.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Us,Ya,this.up):Ai.lookAt(Ya,Us,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Ai),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yf),zr.child=t,this.dispatchEvent(zr),zr.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yf),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zn.DEFAULT_UP=new U(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=Uu(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Bc(a,s,t+1/3),this.g=Bc(a,s,t),this.b=Bc(a,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return he.workingToColorSpace(mn.copy(this),t),Math.round(Kt(mn.r*255,0,255))*65536+Math.round(Kt(mn.g*255,0,255))*256+Math.round(Kt(mn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(mn.copy(this),e);let n=mn.r,r=mn.g,s=mn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=gn){he.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,r=mn.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL($a);let n=Vs(zi.h,$a.h,e),r=Vs(zi.s,$a.s,e),s=Vs(zi.l,$a.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Wt;Wt.NAMES=Md;var pr=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new U,Ti=new U,zc=new U,Ci=new U,kr=new U,Vr=new U,Sf=new U,kc=new U,Vc=new U,Gc=new U,Hc=new ee,Wc=new ee,Xc=new ee,Hi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Qn.subVectors(t,e),r.cross(Qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Qn.subVectors(r,e),Ti.subVectors(n,e),zc.subVectors(t,e);let a=Qn.dot(Qn),o=Qn.dot(Ti),c=Qn.dot(zc),l=Ti.dot(Ti),u=Ti.dot(zc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Hc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Hc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),Xc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Hc,s.x),a.addScaledVector(Wc,s.y),a.addScaledVector(Xc,s.z),a}static isFrontFacing(t,e,n,r){return Qn.subVectors(n,e),Ti.subVectors(t,e),Qn.cross(Ti).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Qn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,a,o;kr.subVectors(r,n),Vr.subVectors(s,n),kc.subVectors(t,n);let c=kr.dot(kc),l=Vr.dot(kc);if(c<=0&&l<=0)return e.copy(n);Vc.subVectors(t,r);let u=kr.dot(Vc),f=Vr.dot(Vc);if(u>=0&&f<=u)return e.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(kr,a);Gc.subVectors(t,s);let d=kr.dot(Gc),m=Vr.dot(Gc);if(m>=0&&d<=m)return e.copy(s);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Vr,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Sf.subVectors(s,r),o=(f-u)/(f-u+(d-m)),e.copy(r).addScaledVector(Sf,o);let p=1/(g+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(kr,a).addScaledVector(Vr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Ja.subVectors(this.max,Ns),Gr.subVectors(t.a,Ns),Hr.subVectors(t.b,Ns),Wr.subVectors(t.c,Ns),ki.subVectors(Hr,Gr),Vi.subVectors(Wr,Hr),cr.subVectors(Gr,Wr);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-cr.z,cr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,cr.z,0,-cr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-cr.y,cr.x,0];return!qc(e,Gr,Hr,Wr,Ja)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,Gr,Hr,Wr,Ja))?!1:(Ka.crossVectors(ki,Vi),e=[Ka.x,Ka.y,Ka.z],qc(e,Gr,Hr,Wr,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,Za=new Mn,Gr=new U,Hr=new U,Wr=new U,ki=new U,Vi=new U,cr=new U,Ns=new U,Ja=new U,Ka=new U,ur=new U;function qc(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ur.fromArray(i,s);let o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),c=t.dot(ur),l=e.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Je=new U,ja=new Ft,Wm=0,Cn=class extends mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var js=class extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xm=new Mn,Fs=new U,Yc=new U,bn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Yc)),this.expandByPoint(Fs.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qm=0,qn=new Ee,$c=new zn,Xr=new U,Fn=new Mn,Os=new Mn,rn=new U,ze=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?js:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Fn.min,Os.min),Fn.expandByPoint(rn),rn.addVectors(Fn.max,Os.max),Fn.expandByPoint(rn)):(Fn.expandByPoint(Os.min),Fn.expandByPoint(Os.max))}Fn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)rn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(rn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)rn.fromBufferAttribute(o,l),c&&(Xr.fromBufferAttribute(t,l),rn.add(Xr)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new U,c[_]=new U;let l=new U,u=new U,f=new U,h=new Ft,d=new Ft,m=new Ft,v=new U,g=new U;function p(_,b,T){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(R),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[_].add(v),o[b].add(v),o[T].add(v),c[_].add(g),c[b].add(g),c[T].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let _=0,b=E.length;_<b;++_){let T=E[_],R=T.start,D=T.count;for(let N=R,L=R+D;N<L;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new U,y=new U,S=new U,w=new U;function C(_){S.fromBufferAttribute(r,_),w.copy(S);let b=o[_];A.copy(b),A.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(w,b);let R=y.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,R)}for(let _=0,b=E.length;_<b;++_){let T=E[_],R=T.start,D=T.count;for(let N=R,L=R+D;N<L;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Cn(h,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new U,ri=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){$s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zc=new U,Ym=new U,$m=new Jt,ei=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Zc.subVectors(n,e).cross(Ym.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Zc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$m.getNormalMatrix(t),r=this.coplanarPoint(Zc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zm=0,Xi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=hs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=pu,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Pi=new U,Jc=new U,Qa=new U,to=new U,mr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Jc.copy(t).add(e).multiplyScalar(.5),Qa.copy(e).sub(t).normalize(),to.copy(this.origin).sub(Jc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Qa),o=to.dot(this.direction),c=-to.dot(Qa),l=to.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=s*u,f>=0)if(h>=-m)if(h<=m){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jc).addScaledVector(Qa,h),d}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);let n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,E=n.y-a.y,A=n.z-a.z,y=Math.abs(c),S=Math.abs(l),w=Math.abs(u),C,_,b,T,R,D,N,L,I,V,W,lt;if(y>=S&&y>=w?(b=c,D=f,I=m,lt=p,c>=0?(C=l,_=u,T=h,R=d,N=v,L=g,V=E,W=A):(C=u,_=l,T=d,R=h,N=g,L=v,V=A,W=E)):S>=w?(b=l,D=h,I=v,lt=E,l>=0?(C=u,_=c,T=d,R=f,N=g,L=m,V=A,W=p):(C=c,_=u,T=f,R=d,N=m,L=g,V=p,W=A)):(b=u,D=d,I=g,lt=A,u>=0?(C=c,_=l,T=f,R=h,N=m,L=v,V=p,W=E):(C=l,_=c,T=h,R=f,N=v,L=m,V=E,W=p)),b===0)return null;let Z=C/b,rt=_/b,et=1/b,Pt=T-Z*D,Et=R-rt*D,fe=N-Z*I,Xt=L-rt*I,le=V-Z*lt,Q=W-rt*lt,st=le*Xt-Q*fe,Ct=Pt*Q-Et*le,$t=fe*Et-Xt*Pt;if(r){if(st<0||Ct<0||$t<0)return null}else if((st<0||Ct<0||$t<0)&&(st>0||Ct>0||$t>0))return null;let bt=st+Ct+$t;if(bt===0)return null;let ie=et*(st*D+Ct*I+$t*lt);return(bt>0?ie<0:ie>0)?null:this.at(ie/bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mf=new Ee,hr=new mr,eo=new bn,bf=new U,no=new U,io=new U,ro=new U,Kc=new U,so=new U,wf=new U,ao=new U,Ne=class extends zn{constructor(t=new ze,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],f=s[c];u!==0&&(Kc.fromBufferAttribute(f,t),a?so.addScaledVector(Kc,u):so.addScaledVector(Kc.sub(e),u))}e.add(so)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),hr.copy(t.ray).recast(t.near),!(eo.containsPoint(hr.origin)===!1&&(hr.intersectSphere(eo,bf)===null||hr.origin.distanceToSquared(bf)>(t.far-t.near)**2))&&(Mf.copy(s).invert(),hr.copy(t.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hr)))}_computeIntersections(t,e,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,S=A;y<S;y+=3){let w=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);r=oo(this,p,t,n,l,u,f,w,C,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let E=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);r=oo(this,a,t,n,l,u,f,E,A,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),A=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,S=A;y<S;y+=3){let w=y,C=y+1,_=y+2;r=oo(this,p,t,n,l,u,f,w,C,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let E=g,A=g+1,y=g+2;r=oo(this,a,t,n,l,u,f,E,A,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Jm(i,t,e,n,r,s,a,o){let c;if(t.side===cn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===ji,o),c===null)return null;ao.copy(o),ao.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function oo(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,no),i.getVertexPosition(c,io),i.getVertexPosition(l,ro);let u=Jm(i,t,e,n,no,io,ro,wf);if(u){let f=new U;Hi.getBarycoord(wf,no,io,ro,f),r&&(u.uv=Hi.getInterpolatedAttribute(r,o,c,l,f,new Ft)),s&&(u.uv1=Hi.getInterpolatedAttribute(s,o,c,l,f,new Ft)),a&&(u.normal=Hi.getInterpolatedAttribute(a,o,c,l,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new U,materialIndex:0};Hi.getNormal(no,io,ro,h.normal),u.face=h,u.barycoord=f}return u}var si=class extends an{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ye,u=Ye,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends Cn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qr=new Ee,Ef=new Ee,lo=[],Af=new Mn,Km=new Ee,Bs=new Ne,zs=new bn,ta=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Km)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),Af.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(Af)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),zs.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qr),Ef.multiplyMatrices(n,qr),Bs.matrixWorld=Ef,Bs.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){let c=lo[a];c.instanceId=s,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(r*this.count),r,this.count,ul,Pn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fr=new bn,jm=new Ft(.5,.5),co=new U,ea=class{constructor(t=new ei,e=new ei,n=new ei,r=new ei,s=new ei,a=new ei){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],E=s[12],A=s[13],y=s[14],S=s[15];if(r[0].setComponents(l-a,d-u,p-m,S-E).normalize(),r[1].setComponents(l+a,d+u,p+m,S+E).normalize(),r[2].setComponents(l+o,d+f,p+v,S+A).normalize(),r[3].setComponents(l-o,d-f,p-v,S-A).normalize(),n)r[4].setComponents(c,h,g,y).normalize(),r[5].setComponents(l-c,d-h,p-g,S-y).normalize();else if(r[4].setComponents(l-c,d-h,p-g,S-y).normalize(),e===ii)r[5].setComponents(l+c,d+h,p+g,S+y).normalize();else if(e===Ys)r[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let e=jm.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(co.x=r.normal.x>0?t.max.x:t.min.x,co.y=r.normal.y>0?t.max.y:t.min.y,co.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Do=class extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tf=new Ee,ou=new mr,uo=new bn,ho=new U,gr=class extends zn{constructor(t=new ze,e=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,t.ray.intersectsSphere(uo)===!1)return;Tf.copy(r).invert(),ou.copy(t.ray).applyMatrix4(Tf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,v=d;m<v;m++){let g=l.getX(m);ho.fromBufferAttribute(f,g),Cf(ho,g,c,r,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,v=d;m<v;m++)ho.fromBufferAttribute(f,m),Cf(ho,m,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Cf(i,t,e,n,r,s,a){let o=ou.distanceSqToPoint(i);if(o<e){let c=new U;ou.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var na=class extends an{constructor(t=[],e=tr,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},as=class extends an{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends an{constructor(t,e,n=oi,r,s,a,o=Ye,c=Ye,l,u=pi,f=1){if(u!==pi&&u!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uo=class extends qi{constructor(t,e=oi,n=tr,r,s,a=Ye,o=Ye,c,l=pi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ia=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},os=class i extends ze{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function m(v,g,p,E,A,y,S,w,C,_,b){let T=y/C,R=S/_,D=y/2,N=S/2,L=w/2,I=C+1,V=_+1,W=0,lt=0,Z=new U;for(let rt=0;rt<V;rt++){let et=rt*R-N;for(let Pt=0;Pt<I;Pt++){let Et=Pt*T-D;Z[v]=Et*E,Z[g]=et*A,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Pt/C),f.push(1-rt/_),W+=1}}for(let rt=0;rt<_;rt++)for(let et=0;et<C;et++){let Pt=h+et+I*rt,Et=h+et+I*(rt+1),fe=h+(et+1)+I*(rt+1),Xt=h+(et+1)+I*rt;c.push(Pt,Et,Xt),c.push(Et,fe,Xt),lt+=6}o.addGroup(d,lt,b),d+=lt,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ls=class i extends ze{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],h=[],d=[],m=0,v=[],g=n/2,p=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function E(){let y=new U,S=new U,w=0,C=(e-t)/n;for(let _=0;_<=s;_++){let b=[],T=_/s,R=T*(e-t)+t;for(let D=0;D<=r;D++){let N=D/r,L=N*c+o,I=Math.sin(L),V=Math.cos(L);S.x=R*I,S.y=-T*n+g,S.z=R*V,f.push(S.x,S.y,S.z),y.set(I,C,V).normalize(),h.push(y.x,y.y,y.z),d.push(N,1-T),b.push(m++)}v.push(b)}for(let _=0;_<r;_++)for(let b=0;b<s;b++){let T=v[b][_],R=v[b+1][_],D=v[b+1][_+1],N=v[b][_+1];(t>0||b!==0)&&(u.push(T,R,N),w+=3),(e>0||b!==s-1)&&(u.push(R,D,N),w+=3)}l.addGroup(p,w,0),p+=w}function A(y){let S=m,w=new Ft,C=new U,_=0,b=y===!0?t:e,T=y===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,g*T,0),h.push(0,T,0),d.push(.5,.5),m++;let R=m;for(let D=0;D<=r;D++){let L=D/r*c+o,I=Math.cos(L),V=Math.sin(L);C.x=b*V,C.y=g*T,C.z=b*I,f.push(C.x,C.y,C.z),h.push(0,T,0),w.x=I*.5+.5,w.y=V*.5*T+.5,d.push(w.x,w.y),m++}for(let D=0;D<r;D++){let N=S+D,L=R+D;y===!0?u.push(L,L+1,N):u.push(L+1,L,N),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class i extends ls{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);let u=n[r],h=n[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new Ft:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,r=[],s=[],a=[],o=new U,c=new Ee;for(let d=0;d<=t;d++){let m=d/t;r[d]=this.getTangentAt(m,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Kt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Kt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sa=class extends Yn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ft){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},No=class extends sa{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fu(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){let a=s*s,o=a*s;return i+t*s+e*a+n*o}}}var Rf=new U,Pf=new U,jc=new Fu,Qc=new Fu,tu=new Fu,Yi=class extends Yn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){let n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Pf.subVectors(r[0],r[1]).add(r[0]),l=Pf);let f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Rf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Rf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),jc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,v,g),Qc.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,v,g),tu.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Qc.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),tu.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(jc.calc(c),Qc.calc(c),tu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function If(i,t,e,n,r){let s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Qm(i,t){let e=1-i;return e*e*t}function tg(i,t){return 2*(1-i)*i*t}function eg(i,t){return i*i*t}function Gs(i,t,e,n){return Qm(i,t)+tg(i,e)+eg(i,n)}function ng(i,t){let e=1-i;return e*e*e*t}function ig(i,t){let e=1-i;return 3*e*e*i*t}function rg(i,t){return 3*(1-i)*i*i*t}function sg(i,t){return i*i*i*t}function Hs(i,t,e,n,r){return ng(i,t)+ig(i,e)+rg(i,n)+sg(i,r)}var Fo=class extends Yn{constructor(t=new Ft,e=new Ft,n=new Ft,r=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ft){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,r.x,s.x,a.x,o.x),Hs(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends Yn{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,r.x,s.x,a.x,o.x),Hs(t,r.y,s.y,a.y,o.y),Hs(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Yn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends Yn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,r.x,s.x,a.x),Gs(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends Yn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,r.x,s.x,a.x),Gs(t,r.y,s.y,a.y),Gs(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(If(o,c.x,l.x,u.x,f.x),If(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ft().fromArray(r))}return this}},ag=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:Yi,CubicBezierCurve:Fo,CubicBezierCurve3:Oo,EllipseCurve:sa,LineCurve:Bo,LineCurve3:zo,QuadraticBezierCurve:ko,QuadraticBezierCurve3:aa,SplineCurve:Vo});var _r=class i extends ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=e/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let E=p*h-a;for(let A=0;A<l;A++){let y=A*f-s;m.push(y,-E,0),v.push(0,0,1),g.push(A/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let A=E+l*p,y=E+l*(p+1),S=E+1+l*(p+1),w=E+1+l*p;d.push(A,y,w),d.push(y,S,w)}this.setIndex(d),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xr=class i extends ze{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new U,h=new U,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let E=[],A=p/n,y=a+A*o,S=t*Math.cos(y),w=Math.sqrt(t*t-S*S),C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let b=_/e,T=r+b*s;f.x=-w*Math.cos(T),f.y=S,f.z=w*Math.sin(T),m.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(b+C,1-A),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let A=u[p][E+1],y=u[p][E],S=u[p+1][E],w=u[p+1][E+1];(p!==0||a>0)&&d.push(A,y,w),(p!==n-1||c<Math.PI)&&d.push(y,S,w)}this.setIndex(d),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vr=class i extends ze{constructor(t=new aa(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,c=new U,l=new Ft,u=new U,f=[],h=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function v(){for(let A=0;A<e;A++)g(A);g(s===!1?e:0),E(),p()}function g(A){u=t.getPointAt(A/e,u);let y=a.normals[A],S=a.binormals[A];for(let w=0;w<=r;w++){let C=w/r*Math.PI*2,_=Math.sin(C),b=-Math.cos(C);c.x=b*y.x+_*S.x,c.y=b*y.y+_*S.y,c.z=b*y.z+_*S.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let y=1;y<=r;y++){let S=(r+1)*(A-1)+(y-1),w=(r+1)*A+(y-1),C=(r+1)*A+y,_=(r+1)*(A-1)+y;m.push(S,w,_),m.push(w,C,_)}}function E(){for(let A=0;A<=e;A++)for(let y=0;y<=r;y++)l.x=A/e,l.y=y/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ag[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},oa=class extends ze{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new U,s=new U;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let m=h,v=h+d;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),E=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,E),Lf(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let u=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),Lf(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Lf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Df(r))r.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Df(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=br(i[e]);for(let r in n)t[r]=n[r]}return t}function Df(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function og(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ma={clone:br,merge:xn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ee().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Go=class extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ho=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wo=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function eu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xo=class extends $i{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:s=t,o=2*e-n;break;case au:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case su:a=t,c=2*n-e;break;case au:a=1,c=n+r[1]-r[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),v=m*m,g=v*m,p=-h*g+2*h*v-h*m,E=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,A=(-1-d)*g+(1.5+d)*v+.5*m,y=d*g-d*v;for(let S=0;S!==o;++S)s[S]=p*a[u+S]+E*a[l+S]+A*a[c+S]+y*a[f+S];return s}},qo=class extends $i{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}},Yo=class extends $i{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},$o=class extends $i{interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(r-e),v=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*v+a[c+g]*m;return s}let h=o*2,d=t-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],p=d*h+m*2,E=f[p],A=f[p+1],y=t*h+m*2,S=u[y],w=u[y+1],C=hg(n,e,E,S,r);s[m]=bd(C,v,A,w,g)}return s}};function bd(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function ug(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function hg(i,t,e,n,r){let s=(i-t)/(r-t);for(let a=0;a<8;a++){let o=bd(s,t,e,n,r)-i;if(Math.abs(o)<1e-10)break;let c=ug(s,t,e,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var kn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),eu(t.settings)&&(n.settings={inTangents:Yr(t.settings.inTangents,Array),outTangents:Yr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Co:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break;case iu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return iu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;eu(this.settings)&&(Uf(this.settings.inTangents,t),Uf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){qt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&_m(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===go,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(r)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let v=e[f+m];if(v!==e[h+m]||v!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,eu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Co;var Zi=class extends kn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ws;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends kn{constructor(t,e,n,r){super(t,e,n,r)}};Zo.prototype.ValueTypeName="color";var Jo=class extends kn{constructor(t,e,n,r){super(t,e,n,r)}};Jo.prototype.ValueTypeName="number";var Ko=class extends $i{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(r-e),l=t*o;for(let u=l+o;l!==u;l+=4)Bn.slerpFlat(s,0,a,l-o,a,l,c);return s}},la=class extends kn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends kn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ws;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends kn{constructor(t,e,n,r){super(t,e,n,r)}};jo.prototype.ValueTypeName="vector";var xo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Nf(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Nf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nf(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(t,e,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wd=new Qo,cs=class{constructor(t){this.manager=t!==void 0?t:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=new WeakMap,tl=class extends cs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=xo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=$r.get(a);f===void 0&&(f=[],$r.set(a,f)),f.push({onLoad:e,onError:r})}return a}let o=es("img");function c(){u(),e&&e(this);let f=$r.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}$r.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),xo.remove(`image:${t}`);let h=$r.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}$r.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xo.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}};var ca=class extends cs{constructor(t){super(t)}load(t,e,n,r){let s=new an,a=new tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var fo=new U,po=new Bn,fi=new U,ua=class extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fo,po,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new U,Ff=new Ft,Of=new Ft,sn=class extends ua{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Of),e.subVectors(Of,Ff)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yr=class extends ua{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ha=class extends ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Zr=-90,Jr=1,el=class extends zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Zr,Jr,t,e);r.layers=this.layers,this.add(r);let s=new sn(Zr,Jr,t,e);s.layers=this.layers,this.add(s);let a=new sn(Zr,Jr,t,e);a.layers=this.layers,this.add(a);let o=new sn(Zr,Jr,t,e);o.layers=this.layers,this.add(o);let c=new sn(Zr,Jr,t,e);c.layers=this.layers,this.add(c);let l=new sn(Zr,Jr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},nl=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bu="\\[\\]\\.:\\/",fg=new RegExp("["+Bu+"]","g"),zu="[^"+Bu+"]",dg="[^"+Bu.replace("\\.","")+"]",pg=/((?:WC+[\/:])*)/.source.replace("WC",zu),mg=/(WCOD+)?/.source.replace("WCOD",dg),gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),xg=new RegExp("^"+pg+mg+gg+_g+"$"),vg=["material","materials","bones","map"],lu=class{constructor(t,e,n){let r=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(t){let e=xg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);vg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=lu;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zS=new Float32Array(1);var Ki=class extends Lo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Xu=class Xu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Xu.prototype.isMatrix2=!0;var cu=Xu;var Bf=new U,mo=new U,Kr=new U,jr=new U,nu=new U,yg=new U,Sg=new U,fa=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Bf.subVectors(t,this.start),mo.subVectors(this.end,this.start);let n=mo.dot(mo);if(n===0)return 0;let s=mo.dot(Bf)/n;return e&&(s=Kt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=yg,n=Sg){let r=10000000000000001e-32,s,a,o=this.start,c=t.start,l=this.end,u=t.end;Kr.subVectors(l,o),jr.subVectors(u,c),nu.subVectors(o,c);let f=Kr.dot(Kr),h=jr.dot(jr),d=jr.dot(nu);if(f<=r&&h<=r)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(f<=r)s=0,a=d/h,a=Kt(a,0,1);else{let m=Kr.dot(nu);if(h<=r)a=0,s=Kt(-m/f,0,1);else{let v=Kr.dot(jr),g=f*h-v*v;g!==0?s=Kt((v*d-m*h)/g,0,1):s=0,a=(v*s+d)/h,a<0?(a=0,s=Kt(-m/f,0,1)):a>1&&(a=1,s=Kt((v-m)/f,0,1))}}return e.copy(o).addScaledVector(Kr,s),n.copy(c).addScaledVector(jr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function ku(i,t,e,n){let r=Mg(n);switch(e){case Cu:return i*t;case ul:return i*t/r.components*r.byteLength;case hl:return i*t/r.components*r.byteLength;case gi:return i*t*2/r.components*r.byteLength;case fl:return i*t*2/r.components*r.byteLength;case Ru:return i*t*3/r.components*r.byteLength;case In:return i*t*4/r.components*r.byteLength;case dl:return i*t*4/r.components*r.byteLength;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:case _l:return Math.max(i,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(t,8)/2;case xl:case vl:case Sl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case ya:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bl:case zl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sa:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mg(i){switch(i){case Gn:case wu:return{byteLength:1,components:1};case fs:case Eu:case Hn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case oi:case ol:case Pn:return{byteLength:4,components:1};case Au:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qd(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function wg(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,b0=`uniform sampler2D dfgLUT;
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
}`,w0=`
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,V_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,$_=`#define PHONG
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
}`,Z_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,j_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Eg,alphahash_pars_fragment:Ag,alphamap_fragment:Tg,alphamap_pars_fragment:Cg,alphatest_fragment:Rg,alphatest_pars_fragment:Pg,aomap_fragment:Ig,aomap_pars_fragment:Lg,batching_pars_vertex:Dg,batching_vertex:Ug,begin_vertex:Ng,beginnormal_vertex:Fg,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Hg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Jg,displacementmap_pars_vertex:Kg,displacementmap_vertex:jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:r0,envmap_pars_fragment:s0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:_0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:u0,fog_pars_fragment:h0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:d0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:x0,lights_toon_pars_fragment:v0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:M0,lights_physical_pars_fragment:b0,lights_fragment_begin:w0,lights_fragment_maps:E0,lights_fragment_end:A0,lightprobes_pars_fragment:T0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:I0,map_fragment:L0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:k0,morphtarget_pars_vertex:V0,morphtarget_vertex:G0,normal_fragment_begin:H0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:j0,opaque_fragment:Q0,packing:t_,premultiplied_alpha_fragment:e_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:r_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:u_,skinbase_vertex:h_,skinning_pars_vertex:f_,skinning_vertex:d_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:S_,uv_pars_vertex:M_,uv_vertex:b_,worldpos_vertex:w_,background_vert:E_,background_frag:A_,backgroundCube_vert:T_,backgroundCube_frag:C_,cube_vert:R_,cube_frag:P_,depth_vert:I_,depth_frag:L_,distance_vert:D_,distance_frag:U_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:z_,meshbasic_frag:k_,meshlambert_vert:V_,meshlambert_frag:G_,meshmatcap_vert:H_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:K_,meshtoon_frag:j_,points_vert:Q_,points_frag:tx,shadow_vert:ex,shadow_frag:nx,sprite_vert:ix,sprite_frag:rx},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},wn={basic:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:xn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:xn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:xn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:xn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:xn([vt.points,vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:xn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:xn([vt.common,vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:xn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:xn([vt.sprite,vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:xn([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:xn([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};wn.physical={uniforms:xn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var ql={r:0,b:0,g:0},sx=new Ee,Yd=new Jt;Yd.set(-1,0,0,0,1,0,0,0,1);function ax(i,t,e,n,r,s){let a=new Wt(0),o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let y=E.backgroundBlurriness>0;A=t.get(A,y)}return A}function m(E){let A=!1,y=d(E);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===pa)?(l===void 0&&(l=new Ne(new os(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:br(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yd),l.material.toneMapped=he.getTransfer(y.colorSpace)!==we,(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ne(new _r(2,2),new Re({name:"BackgroundMaterial",uniforms:br(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=he.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,A){E.getRGB(ql,Ou(i)),e.buffers.color.setClear(ql.r,ql.g,ql.b,A,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:m,addToRenderList:v,dispose:p}}function ox(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(R,D,N,L,I){let V=!1,W=f(R,L,N,D);s!==W&&(s=W,l(s.object)),V=d(R,L,N,I),V&&m(R,L,N,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(R,D,N,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function f(R,D,N,L){let I=L.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let W=R.isInstancedMesh===!0?R.id:0,lt=V[W];lt===void 0&&(lt={},V[W]=lt);let Z=lt[N.id];Z===void 0&&(Z={},lt[N.id]=Z);let rt=Z[I];return rt===void 0&&(rt=h(c()),Z[I]=rt),rt}function h(R){let D=[],N=[],L=[];for(let I=0;I<e;I++)D[I]=0,N[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,D,N,L){let I=s.attributes,V=D.attributes,W=0,lt=N.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let et=I[Z],Pt=V[Z];if(Pt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Pt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Pt=R.instanceColor)),et===void 0||et.attribute!==Pt||Pt&&et.data!==Pt.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function m(R,D,N,L){let I={},V=D.attributes,W=0,lt=N.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let et=V[Z];et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let Pt={};Pt.attribute=et,et&&et.data&&(Pt.data=et.data),I[Z]=Pt,W++}s.attributes=I,s.attributesNum=W,s.index=L}function v(){let R=s.newAttributes;for(let D=0,N=R.length;D<N;D++)R[D]=0}function g(R){p(R,0)}function p(R,D){let N=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;N[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),I[R]!==D&&(i.vertexAttribDivisor(R,D),I[R]=D)}function E(){let R=s.newAttributes,D=s.enabledAttributes;for(let N=0,L=D.length;N<L;N++)D[N]!==R[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function A(R,D,N,L,I,V,W){W===!0?i.vertexAttribIPointer(R,D,N,I,V):i.vertexAttribPointer(R,D,N,L,I,V)}function y(R,D,N,L){v();let I=L.attributes,V=N.getAttributes(),W=D.defaultAttributeValues;for(let lt in V){let Z=V[lt];if(Z.location>=0){let rt=I[lt];if(rt===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor)),rt!==void 0){let et=rt.normalized,Pt=rt.itemSize,Et=t.get(rt);if(Et===void 0)continue;let fe=Et.buffer,Xt=Et.type,le=Et.bytesPerElement,Q=Xt===i.INT||Xt===i.UNSIGNED_INT||rt.gpuType===ol;if(rt.isInterleavedBufferAttribute){let st=rt.data,Ct=st.stride,$t=rt.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<Z.locationSize;bt++)p(Z.location+bt,st.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<Z.locationSize;bt++)g(Z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let bt=0;bt<Z.locationSize;bt++)A(Z.location+bt,Pt/Z.locationSize,Xt,et,Ct*le,($t+Pt/Z.locationSize*bt)*le,Q)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)p(Z.location+st,rt.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<Z.locationSize;st++)g(Z.location+st);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let st=0;st<Z.locationSize;st++)A(Z.location+st,Pt/Z.locationSize,Xt,et,Pt*le,Pt/Z.locationSize*st*le,Q)}}else if(W!==void 0){let et=W[lt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Z.location,et);break;case 3:i.vertexAttrib3fv(Z.location,et);break;case 4:i.vertexAttrib4fv(Z.location,et);break;default:i.vertexAttrib1fv(Z.location,et)}}}}E()}function S(){b();for(let R in n){let D=n[R];for(let N in D){let L=D[N];for(let I in L){let V=L[I];for(let W in V)u(V[W].object),delete V[W];delete L[I]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let N in D){let L=D[N];for(let I in L){let V=L[I];for(let W in V)u(V[W].object),delete V[W];delete L[I]}}delete n[R.id]}function C(R){for(let D in n){let N=n[D];for(let L in N){let I=N[L];if(I[R.id]===void 0)continue;let V=I[R.id];for(let W in V)u(V[W].object),delete V[W];delete I[R.id]}}}function _(R){for(let D in n){let N=n[D],L=R.isInstancedMesh===!0?R.id:0,I=N[L];if(I!==void 0){for(let V in I){let W=I[V];for(let lt in W)u(W[lt].object),delete W[lt];delete I[V]}delete N[L],Object.keys(N).length===0&&delete n[D]}}}function b(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function lx(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Gn&&C!==Pn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Vt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:w}}function ux(i){let t=this,e=null,n=0,r=!1,s=!1,a=new ei,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{let E=s?0:n,A=E*4,y=p.clippingState||null;c.value=y,y=u(m,h,A,d);for(let S=0;S!==A;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=d+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=d;A!==v;++A,y+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var ms=4,hx=6,fx=20,dx=256,ba=new yr,Ed=new Wt,qu=null,Yu=0,$u=0,Zu=!1,px=new U,wr=new U,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:a=256,position:o=px}=s;qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qu,Yu,$u),this._renderer.xr.enabled=Zu,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Hn,format:In,colorSpace:Xs,depthBuffer:!1},r=Ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(s)),this._blurMaterial=_x(s,t,e),this._ggxMaterial=gx(s,t,e)}return r}_compileMaterial(t){let e=new Ne(new ze,t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,r,s){let c=new sn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ed),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new os,new Di({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,p=!0):(g.color.copy(Ed),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));let S=this._cubeSize;ps(r,y*S,A>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===tr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;ps(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ms?n-m+ms:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,ps(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(o,ba),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,ps(t,g,p,3*v,2*v),r.setRenderTarget(t),r.render(o,ba)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-ms?r-this._lodMax+ms:0),h=4*(this._cubeSize-u);ps(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,ba)}};function mx(i){let t=[],e=[],n=i,r=i-ms+1+hx;for(let s=0;s<r;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){let E=p%3*2/3-1,A=p>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];m.set(y,d*h*p);for(let S=0;S<h;S++){let w=u[S*2]*2-1,C=u[S*2+1]*2-1;p===0?wr.set(1,C,w):p===1?wr.set(-w,1,-C):p===2?wr.set(-w,C,1):p===3?wr.set(-1,C,-w):p===4?wr.set(-w,-1,C):wr.set(w,C,-1),wr.toArray(v,(p*h+S)*d)}}let g=new ze;g.setAttribute("position",new Cn(m,d)),g.setAttribute("outputDirection",new Cn(v,d)),e.push(new Ne(g,null)),n>ms&&n--}return{lodMeshes:e,sizeLods:t}}function Ad(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function gx(i,t,e){return new Re({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function _x(i,t,e){return new Re({name:"SphericalGaussianBlur",defines:{SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Td(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Cd(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zl=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new na(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new os(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Rn});s.uniforms.tEquirect.value=e;let a=new Ne(r,s),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=He),new el(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}};function xx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===rl||d===sl)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let v=new Zl(m.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,m=d===rl||d===sl,v=d===tr||d===Mr;if(m||v){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new $l(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return m&&E&&E.height>0||v&&E&&c(E)?(n===null&&(n=new $l(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===rl?h.mapping=tr:d===sl&&(h.mapping=Mr),h}function c(h){let d=0,m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function vx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&dr("WebGLRenderer: "+n+" extension not supported."),r}}}function yx(i,t,e,n){let r={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let E=d.array;v=d.version;for(let A=0,y=E.length;A<y;A+=3){let S=E[A+0],w=E[A+1],C=E[A+2];h.push(S,w,w,C,C,S)}}else{let E=m.array;v=m.version;for(let A=0,y=E.length/3-1;A<y;A+=3){let S=A+0,w=A+1,C=A+2;h.push(S,w,w,C,C,S)}}let g=new(m.count>=65535?js:Ks)(h,1);g.version=v;let p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Sx(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];e.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Mx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function bx(i,t,e){let n=new WeakMap,r=new ee;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;d===!0&&(A=1),m===!0&&(A=2),v===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*f),C=new Zs(w,y,S,f);C.type=Pn,C.needsUpdate=!0;let _=A*4;for(let T=0;T<f;T++){let R=g[T],D=p[T],N=E[T],L=y*S*4*T;for(let I=0;I<R.count;I++){let V=I*_;d===!0&&(r.fromBufferAttribute(R,I),w[L+V+0]=r.x,w[L+V+1]=r.y,w[L+V+2]=r.z,w[L+V+3]=0),m===!0&&(r.fromBufferAttribute(D,I),w[L+V+4]=r.x,w[L+V+5]=r.y,w[L+V+6]=r.z,w[L+V+7]=0),v===!0&&(r.fromBufferAttribute(N,I),w[L+V+8]=r.x,w[L+V+9]=r.y,w[L+V+10]=r.z,w[L+V+11]=N.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Ft(y,S)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function wx(i,t,e,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Ex={[gu]:"LINEAR_TONE_MAPPING",[_u]:"REINHARD_TONE_MAPPING",[xu]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[Su]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function Ax(i,t,e,n,r,s){let a=new _n(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ze;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));let u=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ne(l,u),h=new yr(-1,1,1,-1,0,1),d=null,m=null,v=!1,g,p=null,E=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let w=0;w<E.length;w++){let C=E[w];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){E=y,A=E.length>0&&E[0].isRenderPass===!0;let S=a.width,w=a.height;E.length>0&&o===null&&(o=new _n(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let _=E[C];_.setSize&&_.setSize(S,w)}},this.begin=function(y,S){if(v||y.toneMapping===ai&&E.length===0)return!1;if(p=S,S!==null){let w=S.width,C=S.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ai,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=g,v=!0;let w=a,C=o;for(let _=0;_<E.length;_++){let b=E[_];b.enabled!==!1&&(b.render(y,C,w,S),b.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,u.defines={},he.getTransfer(d)===we&&(u.defines.SRGB_TRANSFER="");let _=Ex[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var $d=new an,ju=new qi(1,1),Zd=new Zs,Jd=new Io,Kd=new na,Rd=[],Pd=[],Id=new Float32Array(16),Ld=new Float32Array(9),Dd=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Rd[r];if(s===void 0&&(s=new Float32Array(r),Rd[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jl(i,t){let e=Pd[t];e===void 0&&(e=new Int32Array(t),Pd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),en(e,n)}}function Lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),en(e,n)}}function Dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),en(e,n)}}function Ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Gx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=e.isReversedDepthBuffer()?Xl:Wl,s=ju):s=$d,e.setTexture2D(t||s,r)}function Hx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jd,r)}function Wx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Kd,r)}function Xx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Zd,r)}function qx(i){switch(i){case 5126:return Tx;case 35664:return Cx;case 35665:return Rx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(i,t){i.uniform1fv(this.addr,t)}function $x(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function Zx(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function Jx(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function Kx(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jx(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qx(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tv(i,t){i.uniform1iv(this.addr,t)}function ev(i,t){i.uniform2iv(this.addr,t)}function nv(i,t){i.uniform3iv(this.addr,t)}function iv(i,t){i.uniform4iv(this.addr,t)}function rv(i,t){i.uniform1uiv(this.addr,t)}function sv(i,t){i.uniform2uiv(this.addr,t)}function av(i,t){i.uniform3uiv(this.addr,t)}function ov(i,t){i.uniform4uiv(this.addr,t)}function lv(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ju:a=$d;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function cv(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Jd,s[a])}function uv(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Kd,s[a])}function hv(i,t,e){let n=this.cache,r=t.length,s=jl(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Zd,s[a])}function fv(i){switch(i){case 5126:return Yx;case 35664:return $x;case 35665:return Zx;case 35666:return Jx;case 35674:return Kx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return hv}}var Qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}},th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fv(e.type)}},eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],n)}}},Ju=/(\w+)(\])?(\[|\.)?/g;function Ud(i,t){i.seq.push(t),i.map[t.id]=t}function dv(i,t,e){let n=i.name,r=n.length;for(Ju.lastIndex=0;;){let s=Ju.exec(n),a=Ju.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ud(e,l===void 0?new Qu(o,i,t):new th(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new eh(o),Ud(e,f)),e=f}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);dv(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&n.push(a)}return n}};function Nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pv=37297,mv=0;function gv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Fd=new Jt;function _v(i){he._getMatrix(Fd,he.workingColorSpace,i);let t=`mat3( ${Fd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Od(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+gv(i.getShaderSource(t),o)}else return s}function xv(i,t){let e=_v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var vv={[gu]:"Linear",[_u]:"Reinhard",[xu]:"Cineon",[vu]:"ACESFilmic",[Su]:"AgX",[Mu]:"Neutral",[yu]:"Custom"};function yv(i,t){let e=vv[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yl=new U;function Sv(){he.getLuminanceCoefficients(Yl);let i=Yl.x.toFixed(4),t=Yl.y.toFixed(4),e=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function bv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ea(i){return i!==""}function Bd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(Ev,Tv)}var Av=new Map;function Tv(i,t){let e=ae[t];if(e===void 0){let n=Av.get(t);if(n!==void 0)e=ae[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nh(e)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(i){return i.replace(Cv,Rv)}function Rv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Pv={[da]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Iv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[tr]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function Dv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uv={[Mr]:"ENVMAP_MODE_REFRACTION"};function Nv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fv={[mu]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function Ov(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[i.combine]||"ENVMAP_BLENDING_NONE"}function Bv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zv(i,t,e,n){let r=i.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Iv(e),l=Dv(e),u=Nv(e),f=Ov(e),h=Bv(e),d=Mv(e),m=bv(s),v=r.createProgram(),g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ea).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(g=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ae.tonemapping_pars_fragment:"",e.toneMapping!==ai?yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,xv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),a=nh(a),a=Bd(a,e),a=zd(a,e),o=nh(o),o=Bd(o,e),o=zd(o,e),a=kd(a),o=kd(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+g+a,y=E+p+o,S=Nd(r,r.VERTEX_SHADER,A),w=Nd(r,r.FRAGMENT_SHADER,y);r.attachShader(v,S),r.attachShader(v,w),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(v)||"",N=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(w)||"",I=D.trim(),V=N.trim(),W=L.trim(),lt=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,w);else{let rt=Od(r,S,"vertex"),et=Od(r,w,"fragment");qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+rt+`
`+et)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(V===""||W==="")&&(Z=!1);Z&&(R.diagnostics={runnable:lt,programLog:I,vertexShader:{log:V,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(S),r.deleteShader(w),_=new gs(r,v),b=wv(r,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,pv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}var kv=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=kv++,this.code=t,this.usedTimes=0}};function Vv(i){return i===gi||i===ya||i===Sa}function Gv(i,t,e,n,r,s){let a=new Js,o=new ih,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,b,T,R,D,N){let L=R.fog,I=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,lt=t.get(_.envMap||V,W),Z=lt&&lt.mapping===pa?lt.image.height:null,rt=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Pt=et!==void 0?et.length:0,Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let fe,Xt,le,Q;if(rt){let Te=wn[rt];fe=Te.vertexShader,Xt=Te.fragmentShader}else{fe=_.vertexShader,Xt=_.fragmentShader;let Te=o.getVertexShaderStage(_),ve=o.getFragmentShaderStage(_);o.update(_,Te,ve),le=Te.id,Q=ve.id}let st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),$t=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,ie=!!_.map,Xe=!!_.matcap,te=!!lt,ce=!!_.aoMap,be=!!_.lightMap,kt=!!_.bumpMap&&_.wireframe===!1,Fe=!!_.normalMap,ke=!!_.displacementMap,ln=!!_.emissiveMap,De=!!_.metalnessMap,Ve=!!_.roughnessMap,z=_.anisotropy>0,Ze=_.clearcoat>0,ge=_.dispersion>0,P=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,$=_.transmission>0,j=z&&!!_.anisotropyMap,ft=Ze&&!!_.clearcoatMap,gt=Ze&&!!_.clearcoatNormalMap,tt=Ze&&!!_.clearcoatRoughnessMap,at=x&&!!_.iridescenceMap,mt=x&&!!_.iridescenceThicknessMap,Nt=O&&!!_.sheenColorMap,yt=O&&!!_.sheenRoughnessMap,pt=!!_.specularMap,Tt=!!_.specularColorMap,Bt=!!_.specularIntensityMap,Zt=$&&!!_.transmissionMap,B=$&&!!_.thicknessMap,_t=!!_.gradientMap,it=!!_.alphaMap,xt=_.alphaTest>0,Mt=!!_.alphaHash,ct=!!_.extensions,Ot=ai;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Dt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:Xt,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:$t,instancingColor:$t&&D.instanceColor!==null,instancingMorph:$t&&D.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:Xe,envMap:te,envMapMode:te&&lt.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:be,bumpMap:kt,normalMap:Fe,displacementMap:ke,emissiveMap:ln,normalMapObjectSpace:Fe&&_.normalMapType===ud,normalMapTangentSpace:Fe&&_.normalMapType===Pu,packedNormalMap:Fe&&_.normalMapType===Pu&&Vv(_.normalMap.format),metalnessMap:De,roughnessMap:Ve,anisotropy:z,anisotropyMap:j,clearcoat:Ze,clearcoatMap:ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:tt,dispersion:ge,retroreflection:P,iridescence:x,iridescenceMap:at,iridescenceThicknessMap:mt,sheen:O,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:pt,specularColorMap:Tt,specularIntensityMap:Bt,transmission:$,transmissionMap:Zt,thicknessMap:B,gradientMap:_t,opaque:_.transparent===!1&&_.blending===hs&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:xt,alphaHash:Mt,combine:_.combine,mapUv:ie&&m(_.map.channel),aoMapUv:ce&&m(_.aoMap.channel),lightMapUv:be&&m(_.lightMap.channel),bumpMapUv:kt&&m(_.bumpMap.channel),normalMapUv:Fe&&m(_.normalMap.channel),displacementMapUv:ke&&m(_.displacementMap.channel),emissiveMapUv:ln&&m(_.emissiveMap.channel),metalnessMapUv:De&&m(_.metalnessMap.channel),roughnessMapUv:Ve&&m(_.roughnessMap.channel),anisotropyMapUv:j&&m(_.anisotropyMap.channel),clearcoatMapUv:ft&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(_.sheenRoughnessMap.channel),specularMapUv:pt&&m(_.specularMap.channel),specularColorMapUv:Tt&&m(_.specularColorMap.channel),specularIntensityMapUv:Bt&&m(_.specularIntensityMap.channel),transmissionMapUv:Zt&&m(_.transmissionMap.channel),thicknessMapUv:B&&m(_.thicknessMap.channel),alphaMapUv:it&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Fe||z),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(ie||it),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Et,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:ln&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)b.push(T),b.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(b,_),E(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let b=d[_.type],T;if(b){let R=wn[b];T=Ma.clone(R.uniforms)}else T=_.uniforms;return T}function y(_,b){let T=u.get(b);return T!==void 0?++T.usedTimes:(T=new zv(i,b,_,r),l.push(T),u.set(b,T)),T}function S(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:C}}function Hv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Wv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,v,g,p){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},i[t]=E):(E.id=h.id,E.object=h,E.geometry=d,E.material=m,E.materialVariant=a(h),E.groupOrder=v,E.renderOrder=h.renderOrder,E.z=g,E.group=p),t++,E}function c(h,d,m,v,g,p,E){E.reversedDepth===!0&&(g=-g);let A=o(h,d,m,v,g,p);m.transmission>0?n.push(A):m.transparent===!0?r.push(A):e.push(A)}function l(h,d,m,v,g,p){let E=o(h,d,m,v,g,p);m.transmission>0?n.unshift(E):m.transparent===!0?r.unshift(E):e.unshift(E)}function u(h,d){e.length>1&&e.sort(h||Wv),n.length>1&&n.sort(d||Gd),r.length>1&&r.sort(d||Gd)}function f(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Xv(){let i=new WeakMap;function t(n,r){let s=i.get(n),a;return s===void 0?(a=new Hd,i.set(n,[a])):r>=s.length?(a=new Hd,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Yv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $v=0;function Zv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jv(i){let t=new qv,e=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let r=new U,s=new Ee,a=new Ee;function o(l){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,E=0,A=0,y=0,S=0,w=0,C=0,_=0,b=0,T=0;l.sort(Zv);for(let D=0,N=l.length;D<N;D++){let L=l[D],I=L.color,V=L.intensity,W=L.distance,lt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===gi?lt=L.shadow.map.texture:lt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=I.r*V,f+=I.g*V,h+=I.b*V;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],V);T++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,et=e.get(L);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=lt;let Pt=rt.getViewportCount();for(let Et=0;Et<Pt;Et++)n.sunShadowMatrix[v+Et]=rt.getMatrix(Et),n.sunShadowCascade[v+Et]=rt._cascadeData[Et];v+=Pt,m++}n.sun[d]=Z,d++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,et=e.get(L);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=lt,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=Z,g++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(I).multiplyScalar(V),Z.distance=W,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[E]=Z;let rt=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,rt.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[E]=rt.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,n.spotShadow[E]=et,n.spotShadowMap[E]=lt,C++}E++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(I).multiplyScalar(V),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Z,A++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let rt=L.shadow,et=e.get(L);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,et.shadowCameraNear=rt.camera.near,et.shadowCameraFar=rt.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=lt,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(V),Z.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[y]=Z,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==E||R.rectAreaLength!==A||R.hemiLength!==y||R.numSunShadows!==m||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==_||R.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.sunLength=d,R.directionalLength=g,R.pointLength=p,R.spotLength=E,R.rectAreaLength=A,R.hemiLength=y,R.numSunShadows=m,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=_,R.numLightProbes=T,n.version=$v++)}function c(l,u){let f=0,h=0,d=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let y=l[E];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Wd(i){let t=new Jv(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Kv(i){let t=new WeakMap;function e(r,s=0){let a=t.get(r),o;return a===void 0?(o=new Wd(i),t.set(r,[o])):s>=a.length?(o=new Wd(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,ty=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ey=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Xd=new Ee,wa=new U,Ku=new U;function ny(i,t,e){let n=new ea,r=new Ft,s=new Ft,a=new ee,o=new Ho,c=new Wo,l={},u=e.maxTextureSize,f={[ji]:cn,[cn]:ji,[Vn]:Vn},h=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:jv,fragmentShader:Qv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let p=this.type;this.render=function(w,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Vf&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=da);let b=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Rn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=w.length;L<I;L++){let V=w[L],W=V.shadow;if(W===void 0){Vt("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let lt=W.getFrameExtents();r.multiply(lt),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/lt.x),r.x=s.x*lt.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/lt.y),r.y=s.y*lt.y,W.mapSize.y=s.y));let Z=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===us){if(V.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new _n(r.x,r.y,{format:gi,type:Hn,minFilter:He,magFilter:He,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new qi(r.x,r.y,Pn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=pi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye}else V.isPointLight?(W.map=new Zl(r.x),W.map.depthTexture=new Uo(r.x,oi)):(W.map=new _n(r.x,r.y),W.map.depthTexture=new qi(r.x,r.y,oi)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=pi,this.type===da?(W.map.depthTexture.compareFunction=Z?Xl:Wl,W.map.depthTexture.minFilter=He,W.map.depthTexture.magFilter=He):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);let rt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,_);for(let et=0;et<rt;et++){let Pt=W.getCamera(et);if(V.isPointLight){let Et=W.camera,fe=W.matrix,Xt=V.distance||Et.far;Xt!==Et.far&&(Et.far=Xt,Et.updateProjectionMatrix()),wa.setFromMatrixPosition(V.matrixWorld),Et.position.copy(wa),Ku.copy(Et.position),Ku.add(ty[et]),Et.up.copy(ey[et]),Et.lookAt(Ku),Et.updateMatrixWorld(),fe.makeTranslation(-wa.x,-wa.y,-wa.z),Xd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xd,Et.coordinateSystem,Et.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,et),i.clear();else{et===0&&(i.setRenderTarget(W.map),i.clear());let Et=W.getViewport(et);a.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),D.viewport(a)}n=W.getFrustum(et),y(C,_,Pt,V,this.type)}W.isPointLightShadow!==!0&&this.type===us&&E(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,T,R)};function E(w,C){let _=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(r.x,r.y,{format:gi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,_,d,v,null)}function A(w,C,_,b){let T=null,R=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)T=R;else if(T=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=T.uuid,N=C.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let I=L[N];I===void 0&&(I=T.clone(),L[N]=I,C.addEventListener("dispose",S)),T=I}if(T.visible=C.visible,T.wireframe=C.wireframe,b===us?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=i.properties.get(T);D.light=_}return T}function y(w,C,_,b,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===us)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let N=t.update(w),L=w.material;if(Array.isArray(L)){let I=N.groups;for(let V=0,W=I.length;V<W;V++){let lt=I[V],Z=L[lt.materialIndex];if(Z&&Z.visible){let rt=A(w,Z,b,T);w.onBeforeShadow(i,w,C,_,N,rt,lt),i.renderBufferDirect(_,null,N,rt,w,lt),w.onAfterShadow(i,w,C,_,N,rt,lt)}}}else if(L.visible){let I=A(w,L,b,T);w.onBeforeShadow(i,w,C,_,N,I,null),i.renderBufferDirect(_,null,N,I,w,null),w.onAfterShadow(i,w,C,_,N,I,null)}}let D=w.children;for(let N=0,L=D.length;N<L;N++)y(D[N],C,_,b,T)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let b=l[_],T=w.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function iy(i,t){function e(){let B=!1,_t=new ee,it=null,xt=new ee(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!B&&(i.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){B=Mt},setClear:function(Mt,ct,Ot,Dt,Te){Te===!0&&(Mt*=Dt,ct*=Dt,Ot*=Dt),_t.set(Mt,ct,Ot,Dt),xt.equals(_t)===!1&&(i.clearColor(Mt,ct,Ot,Dt),xt.copy(_t))},reset:function(){B=!1,it=null,xt.set(-1,0,0,0)}}}function n(){let B=!1,_t=!1,it=null,xt=null,Mt=null;return{setReversed:function(ct){if(_t!==ct){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;let Dt=Mt;Mt=null,this.setClear(Dt)}},getReversed:function(){return _t},setTest:function(ct){ct?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ct){it!==ct&&!B&&(i.depthMask(ct),it=ct)},setFunc:function(ct){if(_t&&(ct=Sd[ct]),xt!==ct){switch(ct){case vo:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=ct}},setLocked:function(ct){B=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,_t&&(ct=1-ct),i.clearDepth(ct))},reset:function(){B=!1,it=null,xt=null,Mt=null,_t=!1}}}function r(){let B=!1,_t=null,it=null,xt=null,Mt=null,ct=null,Ot=null,Dt=null,Te=null;return{setTest:function(ve){B||(ve?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ve){_t!==ve&&!B&&(i.stencilMask(ve),_t=ve)},setFunc:function(ve,Dn,Wn){(it!==ve||xt!==Dn||Mt!==Wn)&&(i.stencilFunc(ve,Dn,Wn),it=ve,xt=Dn,Mt=Wn)},setOp:function(ve,Dn,Wn){(ct!==ve||Ot!==Dn||Dt!==Wn)&&(i.stencilOp(ve,Dn,Wn),ct=ve,Ot=Dn,Dt=Wn)},setLocked:function(ve){B=ve},setClear:function(ve){Te!==ve&&(i.clearStencil(ve),Te=ve)},reset:function(){B=!1,_t=null,it=null,xt=null,Mt=null,ct=null,Ot=null,Dt=null,Te=null}}}let s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,E=null,A=null,y=null,S=null,w=null,C=null,_=new Wt(0,0,0),b=0,T=!1,R=null,D=null,N=null,L=null,I=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,lt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=lt>=2);let rt=null,et={},Pt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),fe=new ee().fromArray(Pt),Xt=new ee().fromArray(Et);function le(B,_t,it,xt){let Mt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(B,ct),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<it;Ot++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(_t+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return ct}let Q={};Q[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ts),kt(!1),Fe(uu),st(i.CULL_FACE),ce(Rn);function st(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Ct(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function $t(B,_t){return h[B]!==_t?(i.bindFramebuffer(B,_t),h[B]=_t,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function bt(B,_t){let it=m,xt=!1;if(B){it=d.get(_t),it===void 0&&(it=[],d.set(_t,it));let Mt=B.textures;if(it.length!==Mt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ot=Mt.length;ct<Ot;ct++)it[ct]=i.COLOR_ATTACHMENT0+ct;it.length=Mt.length,xt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,xt=!0);xt&&i.drawBuffers(it)}function ie(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let Xe={[Sr]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};Xe[Xf]=i.MIN,Xe[qf]=i.MAX;let te={[Yf]:i.ZERO,[$f]:i.ONE,[Zf]:i.SRC_COLOR,[du]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Kf]:i.DST_ALPHA,[Jf]:i.ONE_MINUS_SRC_COLOR,[pu]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(B,_t,it,xt,Mt,ct,Ot,Dt,Te,ve){if(B===Rn){g===!0&&(Ct(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),B!==Gf){if(B!==p||ve!==T){if((E!==Sr||S!==Sr)&&(i.blendEquation(i.FUNC_ADD),E=Sr,S=Sr),ve)switch(B){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",B);break}else switch(B){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hu:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",B);break}A=null,y=null,w=null,C=null,_.set(0,0,0),b=0,p=B,T=ve}return}Mt=Mt||_t,ct=ct||it,Ot=Ot||xt,(_t!==E||Mt!==S)&&(i.blendEquationSeparate(Xe[_t],Xe[Mt]),E=_t,S=Mt),(it!==A||xt!==y||ct!==w||Ot!==C)&&(i.blendFuncSeparate(te[it],te[xt],te[ct],te[Ot]),A=it,y=xt,w=ct,C=Ot),(Dt.equals(_)===!1||Te!==b)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Te),_.copy(Dt),b=Te),p=B,T=!1}function be(B,_t){B.side===Vn?Ct(i.CULL_FACE):st(i.CULL_FACE);let it=B.side===cn;_t&&(it=!it),kt(it),B.blending===hs&&B.transparent===!1?ce(Rn):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);let xt=B.stencilWrite;o.setTest(xt),xt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ln(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(B){R!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),R=B)}function Fe(B){B!==zf?(st(i.CULL_FACE),B!==D&&(B===uu?i.cullFace(i.BACK):B===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),D=B}function ke(B){B!==N&&(W&&i.lineWidth(B),N=B)}function ln(B,_t,it){B?(st(i.POLYGON_OFFSET_FILL),(L!==_t||I!==it)&&(L=_t,I=it,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,it))):Ct(i.POLYGON_OFFSET_FILL)}function De(B){B?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Ve(B){B===void 0&&(B=i.TEXTURE0+V-1),rt!==B&&(i.activeTexture(B),rt=B)}function z(B,_t,it){it===void 0&&(rt===null?it=i.TEXTURE0+V-1:it=rt);let xt=et[it];xt===void 0&&(xt={type:void 0,texture:void 0},et[it]=xt),(xt.type!==B||xt.texture!==_t)&&(rt!==it&&(i.activeTexture(it),rt=it),i.bindTexture(B,_t||Q[B]),xt.type=B,xt.texture=_t)}function Ze(){let B=et[rt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function O(){try{i.texSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function ft(){try{i.texStorage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function gt(){try{i.texStorage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function tt(){try{i.texImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function at(){try{i.texImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function mt(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Nt(B,_t){f[B]!==_t&&(i.pixelStorei(B,_t),f[B]=_t)}function yt(B){fe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function pt(B){Xt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Xt.copy(B))}function Tt(B,_t){let it=l.get(_t);it===void 0&&(it=new WeakMap,l.set(_t,it));let xt=it.get(B);xt===void 0&&(xt=i.getUniformBlockIndex(_t,B.name),it.set(B,xt))}function Bt(B,_t){let xt=l.get(_t).get(B);c.get(_t)!==xt&&(i.uniformBlockBinding(_t,xt,B.__bindingPointIndex),c.set(_t,xt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},rt=null,et={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,E=null,A=null,y=null,S=null,w=null,C=null,_=new Wt(0,0,0),b=0,T=!1,R=null,D=null,N=null,L=null,I=null,fe.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:Ct,bindFramebuffer:$t,drawBuffers:bt,useProgram:ie,setBlending:ce,setMaterial:be,setFlipSided:kt,setCullFace:Fe,setLineWidth:ke,setPolygonOffset:ln,setScissorTest:De,activeTexture:Ve,bindTexture:z,unbindTexture:Ze,compressedTexImage2D:ge,compressedTexImage3D:P,texImage2D:tt,texImage3D:at,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Tt,uniformBlockBinding:Bt,texStorage2D:ft,texStorage3D:gt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:yt,viewport:pt,reset:Zt}}function ry(i,t,e,n,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,x){return m?new OffscreenCanvas(P,x):es("canvas")}function g(P,x,O){let $=1,j=ge(P);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ft=Math.floor($*j.width),gt=Math.floor($*j.height);h===void 0&&(h=v(ft,gt));let tt=x?v(ft,gt):h;return tt.width=ft,tt.height=gt,tt.getContext("2d").drawImage(P,0,0,ft,gt),Vt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+gt+")."),tt}else return"data"in P&&Vt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function p(P){return P.generateMipmaps}function E(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,x,O,$,j,ft=!1){if(P!==null){if(i[P]!==void 0)return i[P];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt;$&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=x;if(x===i.RED&&(O===i.FLOAT&&(tt=i.R32F),O===i.HALF_FLOAT&&(tt=i.R16F),O===i.UNSIGNED_BYTE&&(tt=i.R8),O===i.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),O===i.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.R8UI),O===i.UNSIGNED_SHORT&&(tt=i.R16UI),O===i.UNSIGNED_INT&&(tt=i.R32UI),O===i.BYTE&&(tt=i.R8I),O===i.SHORT&&(tt=i.R16I),O===i.INT&&(tt=i.R32I)),x===i.RG&&(O===i.FLOAT&&(tt=i.RG32F),O===i.HALF_FLOAT&&(tt=i.RG16F),O===i.UNSIGNED_BYTE&&(tt=i.RG8),O===i.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),O===i.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RG8UI),O===i.UNSIGNED_SHORT&&(tt=i.RG16UI),O===i.UNSIGNED_INT&&(tt=i.RG32UI),O===i.BYTE&&(tt=i.RG8I),O===i.SHORT&&(tt=i.RG16I),O===i.INT&&(tt=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),O===i.UNSIGNED_INT&&(tt=i.RGB32UI),O===i.BYTE&&(tt=i.RGB8I),O===i.SHORT&&(tt=i.RGB16I),O===i.INT&&(tt=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),O===i.UNSIGNED_INT&&(tt=i.RGBA32UI),O===i.BYTE&&(tt=i.RGBA8I),O===i.SHORT&&(tt=i.RGBA16I),O===i.INT&&(tt=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),O===i.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),x===i.RGBA){let at=ft?qs:he.getTransfer(j);O===i.FLOAT&&(tt=i.RGBA32F),O===i.HALF_FLOAT&&(tt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(tt=at===we?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),O===i.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(P,x){let O;return P?x===null||x===oi||x===ds?O=i.DEPTH24_STENCIL8:x===Pn?O=i.DEPTH32F_STENCIL8:x===fs&&(O=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===oi||x===ds?O=i.DEPTH_COMPONENT24:x===Pn?O=i.DEPTH_COMPONENT32F:x===fs&&(O=i.DEPTH_COMPONENT16),O}function w(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function C(P){let x=P.target;x.removeEventListener("dispose",C),b(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(P){let x=P.target;x.removeEventListener("dispose",_),R(x)}function b(P){let x=n.get(P);if(x.__webglInit===void 0)return;let O=P.source,$=d.get(O);if($){let j=$[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(P),Object.keys($).length===0&&d.delete(O)}n.remove(P)}function T(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let O=P.source,$=d.get(O);delete $[x.__cacheKey],a.memory.textures--}function R(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let j=0;j<x.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[$][j]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=P.textures;for(let $=0,j=O.length;$<j;$++){let ft=n.get(O[$]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(P)}let D=0;function N(){D=0}function L(){return D}function I(P){D=P}function V(){let P=D;return P>=r.maxTextures&&Vt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function W(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function lt(P,x){let O=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){let $=P.image;if($===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(O,P,x);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Z(P,x){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Ct(O,P,x);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function rt(P,x){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Ct(O,P,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function et(P,x){let O=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){$t(O,P,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Pt={[Ao]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Et={[Ye]:i.NEAREST,[ld]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[al]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},fe={[fd]:i.NEVER,[_d]:i.ALWAYS,[dd]:i.LESS,[Wl]:i.LEQUAL,[pd]:i.EQUAL,[Xl]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function Xt(P,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===al||x.magFilter===ma||x.magFilter===$n||x.minFilter===He||x.minFilter===al||x.minFilter===ma||x.minFilter===$n)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Pt[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Pt[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Pt[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Et[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Et[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==ma&&x.minFilter!==$n||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(P,x){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",C));let $=x.source,j=d.get($);j===void 0&&(j={},d.set($,j));let ft=W(x);if(ft!==P.__cacheKey){j[ft]===void 0&&(j[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[ft].usedTimes++;let gt=j[P.__cacheKey];gt!==void 0&&(j[P.__cacheKey].usedTimes--,gt.usedTimes===0&&T(x)),P.__cacheKey=ft,P.__webglTexture=j[ft].texture}return O}function Q(P,x,O){return Math.floor(Math.floor(P/O)/x)}function st(P,x,O,$){let ft=P.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,$,x.data);else{ft.sort((Nt,yt)=>Nt.start-yt.start);let gt=0;for(let Nt=1;Nt<ft.length;Nt++){let yt=ft[gt],pt=ft[Nt],Tt=yt.start+yt.count,Bt=Q(pt.start,x.width,4),Zt=Q(yt.start,x.width,4);pt.start<=Tt+1&&Bt===Zt&&Q(pt.start+pt.count-1,x.width,4)===Bt?yt.count=Math.max(yt.count,pt.start+pt.count-yt.start):(++gt,ft[gt]=pt)}ft.length=gt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Nt=0,yt=ft.length;Nt<yt;Nt++){let pt=ft[Nt],Tt=Math.floor(pt.start/4),Bt=Math.ceil(pt.count/4),Zt=Tt%x.width,B=Math.floor(Tt/x.width),_t=Bt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Zt,B,_t,it,O,$,x.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function Ct(P,x,O){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let j=le(P,x),ft=x.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+O);let gt=n.get(ft);if(ft.version!==gt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=he.getPrimaries(he.workingColorSpace),xt=x.colorSpace===Ui?null:he.getPrimaries(x.colorSpace),Mt=x.colorSpace===Ui||it===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let at=g(x.image,!1,r.maxTextureSize);at=Ze(x,at);let mt=s.convert(x.format,x.colorSpace),Nt=s.convert(x.type),yt=y(x.internalFormat,mt,Nt,x.normalized,x.colorSpace,x.isVideoTexture);Xt($,x);let pt,Tt=x.mipmaps,Bt=x.isVideoTexture!==!0,Zt=gt.__version===void 0||j===!0,B=ft.dataReady,_t=w(x,at);if(x.isDepthTexture)yt=S(x.format===er,x.type),Zt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,yt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,yt,at.width,at.height,0,mt,Nt,null));else if(x.isDataTexture)if(Tt.length>0){Bt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Tt[0].width,Tt[0].height);for(let it=0,xt=Tt.length;it<xt;it++)pt=Tt[it],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,mt,Nt,pt.data):e.texImage2D(i.TEXTURE_2D,it,yt,pt.width,pt.height,0,mt,Nt,pt.data);x.generateMipmaps=!1}else Bt?(Zt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,at.width,at.height),B&&st(x,at,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,yt,at.width,at.height,0,mt,Nt,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,Tt[0].width,Tt[0].height,at.depth);for(let it=0,xt=Tt.length;it<xt;it++)if(pt=Tt[it],x.format!==In)if(mt!==null)if(Bt){if(B)if(x.layerUpdates.size>0){let Mt=ku(pt.width,pt.height,x.format,x.type);for(let ct of x.layerUpdates){let Ot=pt.data.subarray(ct*Mt/pt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ct,pt.width,pt.height,1,mt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,at.depth,mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,yt,pt.width,pt.height,at.depth,0,pt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,at.depth,mt,Nt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,yt,pt.width,pt.height,at.depth,0,mt,Nt,pt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Bt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Tt[0].width,Tt[0].height);for(let it=0,xt=Tt.length;it<xt;it++)pt=Tt[it],x.format!==In?mt!==null?Bt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,yt,pt.width,pt.height,0,pt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?B&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,mt,Nt,pt.data):e.texImage2D(i.TEXTURE_2D,it,yt,pt.width,pt.height,0,mt,Nt,pt.data)}else if(x.isDataArrayTexture)if(Bt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,at.width,at.height,at.depth),B)if(x.layerUpdates.size>0){let it=ku(at.width,at.height,x.format,x.type);for(let xt of x.layerUpdates){let Mt=at.data.subarray(xt*it/at.data.BYTES_PER_ELEMENT,(xt+1)*it/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,at.width,at.height,1,mt,Nt,Mt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Nt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,at.width,at.height,at.depth,0,mt,Nt,at.data);else if(x.isData3DTexture)Bt?(Zt&&e.texStorage3D(i.TEXTURE_3D,_t,yt,at.width,at.height,at.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Nt,at.data)):e.texImage3D(i.TEXTURE_3D,0,yt,at.width,at.height,at.depth,0,mt,Nt,at.data);else if(x.isFramebufferTexture){if(Zt)if(Bt)e.texStorage2D(i.TEXTURE_2D,_t,yt,at.width,at.height);else{let it=at.width,xt=at.height;for(let Mt=0;Mt<_t;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,yt,it,xt,0,mt,Nt,null),it>>=1,xt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),at.parentNode!==it){it.appendChild(at),f.add(x),it.onpaint=xt=>{let Mt=xt.changedElements;for(let ct of f)Mt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Mt=i.RGBA,ct=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,ct,Ot,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Bt&&Zt){let it=ge(Tt[0]);e.texStorage2D(i.TEXTURE_2D,_t,yt,it.width,it.height)}for(let it=0,xt=Tt.length;it<xt;it++)pt=Tt[it],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,mt,Nt,pt):e.texImage2D(i.TEXTURE_2D,it,yt,mt,Nt,pt);x.generateMipmaps=!1}else if(Bt){if(Zt){let it=ge(at);e.texStorage2D(i.TEXTURE_2D,_t,yt,it.width,it.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,at)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Nt,at);p(x)&&E($),gt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function $t(P,x,O){if(x.image.length!==6)return;let $=le(P,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+O);let ft=n.get(j);if(j.version!==ft.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let gt=he.getPrimaries(he.workingColorSpace),tt=x.colorSpace===Ui?null:he.getPrimaries(x.colorSpace),at=x.colorSpace===Ui||gt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let mt=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!mt&&!Nt?yt[ct]=g(x.image[ct],!0,r.maxCubemapSize):yt[ct]=Nt?x.image[ct].image:x.image[ct],yt[ct]=Ze(x,yt[ct]);let pt=yt[0],Tt=s.convert(x.format,x.colorSpace),Bt=s.convert(x.type),Zt=y(x.internalFormat,Tt,Bt,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,_t=ft.__version===void 0||$===!0,it=j.dataReady,xt=w(x,pt);Xt(i.TEXTURE_CUBE_MAP,x);let Mt;if(mt){B&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Zt,pt.width,pt.height);for(let ct=0;ct<6;ct++){Mt=yt[ct].mipmaps;for(let Ot=0;Ot<Mt.length;Ot++){let Dt=Mt[Ot];x.format!==In?Tt!==null?B?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,Dt.width,Dt.height,Tt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Zt,Dt.width,Dt.height,0,Dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,Dt.width,Dt.height,Tt,Bt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Zt,Dt.width,Dt.height,0,Tt,Bt,Dt.data)}}}else{if(Mt=x.mipmaps,B&&_t){Mt.length>0&&xt++;let ct=ge(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Zt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Nt){B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Tt,Bt,yt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,yt[ct].width,yt[ct].height,0,Tt,Bt,yt[ct].data);for(let Ot=0;Ot<Mt.length;Ot++){let Te=Mt[Ot].image[ct].image;B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,Te.width,Te.height,Tt,Bt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Zt,Te.width,Te.height,0,Tt,Bt,Te.data)}}else{B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt,Bt,yt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,Tt,Bt,yt[ct]);for(let Ot=0;Ot<Mt.length;Ot++){let Dt=Mt[Ot];B?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,Tt,Bt,Dt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Zt,Tt,Bt,Dt.image[ct])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),ft.__version=j.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function bt(P,x,O,$,j,ft){let gt=s.convert(O.format,O.colorSpace),tt=s.convert(O.type),at=y(O.internalFormat,gt,tt,O.normalized,O.colorSpace),mt=n.get(x),Nt=n.get(O);if(Nt.__renderTarget=x,!mt.__hasExternalTextures){let yt=Math.max(1,x.width>>ft),pt=Math.max(1,x.height>>ft);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,at,yt,pt,x.depth,0,gt,tt,null):e.texImage2D(j,ft,at,yt,pt,0,gt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,Nt.__webglTexture,0,De(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,Nt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(P,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let $=x.depthTexture,j=$&&$.isDepthTexture?$.type:null,ft=S(x.stencilBuffer,j),gt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(x),ft,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,P)}else{let $=x.textures;for(let j=0;j<$.length;j++){let ft=$[j],gt=s.convert(ft.format,ft.colorSpace),tt=s.convert(ft.type),at=y(ft.internalFormat,gt,tt,ft.normalized,ft.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(x),at,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(P,x,O){let $=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,x.depthTexture);let mt=s.convert(x.depthTexture.format),Nt=s.convert(x.depthTexture.type),yt;x.depthTexture.format===pi?yt=i.DEPTH_COMPONENT24:x.depthTexture.format===er&&(yt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,yt,x.width,x.height,0,mt,Nt,null)}}else lt(x.depthTexture,0);let ft=j.__webglTexture,gt=De(x),tt=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,at=x.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===pi)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,ft,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,ft,0);else if(x.depthTexture.format===er)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,ft,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(P){let x=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=$}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)Xe(x.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?Xe(x.__webglFramebuffer[0],P,0):Xe(x.__webglFramebuffer,P,0)}else if(O){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),ie(x.__webglDepthbuffer[$],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}else{let $=P.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ie(x.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,x,O){let $=n.get(P);x!==void 0&&bt($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&te(P)}function be(P){let x=P.texture,O=n.get(P),$=n.get(x);P.addEventListener("dispose",_);let j=P.textures,ft=P.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),ft){O.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[tt]=[];for(let at=0;at<x.mipmaps.length;at++)O.__webglFramebuffer[tt][at]=i.createFramebuffer()}else O.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let tt=0;tt<x.mipmaps.length;tt++)O.__webglFramebuffer[tt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(gt)for(let tt=0,at=j.length;tt<at;tt++){let mt=n.get(j[tt]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ve(P)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let at=j[tt];O.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[tt]);let mt=s.convert(at.format,at.colorSpace),Nt=s.convert(at.type),yt=y(at.internalFormat,mt,Nt,at.normalized,at.colorSpace,P.isXRRenderTarget===!0),pt=De(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,O.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,x);for(let tt=0;tt<6;tt++)if(x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)bt(O.__webglFramebuffer[tt][at],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else bt(O.__webglFramebuffer[tt],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(x)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let tt=0,at=j.length;tt<at;tt++){let mt=j[tt],Nt=n.get(mt),yt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Nt.__webglTexture),Xt(yt,mt),bt(O.__webglFramebuffer,P,mt,i.COLOR_ATTACHMENT0+tt,yt,0),p(mt)&&E(yt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,$.__webglTexture),Xt(tt,x),x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)bt(O.__webglFramebuffer[at],P,x,i.COLOR_ATTACHMENT0,tt,at);else bt(O.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,tt,0);p(x)&&E(tt),e.unbindTexture()}P.depthBuffer&&te(P)}function kt(P){let x=P.textures;for(let O=0,$=x.length;O<$;O++){let j=x[O];if(p(j)){let ft=A(P),gt=n.get(j).__webglTexture;e.bindTexture(ft,gt),E(ft),e.unbindTexture()}}}let Fe=[],ke=[];function ln(P){if(P.samples>0){if(Ve(P)===!1){let x=P.textures,O=P.width,$=P.height,j=i.COLOR_BUFFER_BIT,ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(P),tt=x.length>1;if(tt)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=P.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);let Nt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,j,i.NEAREST),c===!0&&(Fe.length=0,ke.length=0,Fe.push(i.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Fe.push(ft),ke.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);let Nt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function De(P){return Math.min(r.maxSamples,P.samples)}function Ve(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(P){let x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function Ze(P,x){let O=P.colorSpace,$=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Xs&&O!==Ui&&(he.getTransfer(O)===we?($!==In||j!==Gn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",O)),x}function ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=lt,this.setTexture2DArray=Z,this.setTexture3D=rt,this.setTextureCube=et,this.rebindTextures=ce,this.setupRenderTarget=be,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function sy(i,t){function e(n,r=Ui){let s,a=he.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wu)return i.BYTE;if(n===Eu)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Cu)return i.ALPHA;if(n===Ru)return i.RGB;if(n===In)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===ga||n===_a||n===xa||n===va)if(a===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===vl||n===yl||n===Sl||n===Ml||n===ya||n===bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xl||n===vl)return a===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sl)return s.COMPRESSED_R11_EAC;if(n===Ml)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ya)return s.COMPRESSED_RG11_EAC;if(n===bl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===El||n===Al||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===zl||n===kl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bl)return a===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Gl||n===Sa||n===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ia(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:ay,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends mi{constructor(t,e){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,v=typeof XRWebGLBinding<"u",g=new sh,p={},E=e.getContextAttributes(),A=null,y=null,S=[],w=[],C=new Ft,_=null,b=null,T=new sn;T.viewport=new ee;let R=new sn;R.viewport=new ee;let D=[T,R],N=new nl,L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=S[Q];return st===void 0&&(st=new ss,S[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=S[Q];return st===void 0&&(st=new ss,S[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=S[Q];return st===void 0&&(st=new ss,S[Q]=st),st.getHandSpace()};function V(Q){let st=w.indexOf(Q.inputSource);if(st===-1)return;let Ct=S[st];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,l||a),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<S.length;Q++){let st=w[Q];st!==null&&(w[Q]=null,S[Q].disconnect(st))}L=null,I=null,g.reset();for(let Q in p)delete p[Q];if(t.setRenderTarget(A),d=null,h=null,f=null,r=null,y=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),b!==null){let Q=b.camera;Q.fov=b.fov,Q.zoom=b.zoom,Q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",W),r.addEventListener("inputsourceschange",lt),E.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,$t=null,bt=null;E.depth&&(bt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=E.stencil?er:pi,$t=E.stencil?ds:oi);let ie={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ie),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new _n(h.textureWidth,h.textureHeight,{format:In,type:Gn,depthTexture:new qi(h.textureWidth,h.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ct={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _n(d.framebufferWidth,d.framebufferHeight,{format:In,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(Q){for(let st=0;st<Q.removed.length;st++){let Ct=Q.removed[st],$t=w.indexOf(Ct);$t>=0&&(w[$t]=null,S[$t].disconnect(Ct))}for(let st=0;st<Q.added.length;st++){let Ct=Q.added[st],$t=w.indexOf(Ct);if($t===-1){for(let ie=0;ie<S.length;ie++)if(ie>=w.length){w.push(Ct),$t=ie;break}else if(w[ie]===null){w[ie]=Ct,$t=ie;break}if($t===-1)break}let bt=S[$t];bt&&bt.connect(Ct)}}let Z=new U,rt=new U;function et(Q,st,Ct){Z.setFromMatrixPosition(st.matrixWorld),rt.setFromMatrixPosition(Ct.matrixWorld);let $t=Z.distanceTo(rt),bt=st.projectionMatrix.elements,ie=Ct.projectionMatrix.elements,Xe=bt[14]/(bt[10]-1),te=bt[14]/(bt[10]+1),ce=(bt[9]+1)/bt[5],be=(bt[9]-1)/bt[5],kt=(bt[8]-1)/bt[0],Fe=(ie[8]+1)/ie[0],ke=Xe*kt,ln=Xe*Fe,De=$t/(-kt+Fe),Ve=De*-kt;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ve),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),bt[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let z=Xe+De,Ze=te+De,ge=ke-Ve,P=ln+($t-Ve),x=ce*te/Ze*z,O=be*te/Ze*z;Q.projectionMatrix.makePerspective(ge,P,x,O,z,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Pt(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let st=Q.near,Ct=Q.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),N.near=R.near=T.near=st,N.far=R.far=T.far=Ct,(L!==N.near||I!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,I=N.far),N.layers.mask=Q.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let $t=Q.parent,bt=N.cameras;Pt(N,$t);for(let ie=0;ie<bt.length;ie++)Pt(bt[ie],$t);bt.length===2?et(N,T,R):N.projectionMatrix.copy(T.projectionMatrix),b===null&&Q.isPerspectiveCamera&&(b={camera:Q,fov:Q.fov,zoom:Q.zoom}),Et(Q,N,$t)};function Et(Q,st,Ct){Ct===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=is*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Q){return p[Q]};let fe=null;function Xt(Q,st){if(u=st.getViewerPose(l||a),m=st,u!==null){let Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let $t=!1;Ct.length!==N.cameras.length&&(N.cameras.length=0,$t=!0);for(let te=0;te<Ct.length;te++){let ce=Ct[te],be=null;if(d!==null)be=d.getViewport(ce);else{let Fe=f.getViewSubImage(h,ce);be=Fe.viewport,te===0&&(t.setRenderTargetTextures(y,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(y))}let kt=D[te];kt===void 0&&(kt=new sn,kt.layers.enable(te),kt.viewport=new ee,D[te]=kt),kt.matrix.fromArray(ce.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ce.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(be.x,be.y,be.width,be.height),te===0&&(N.matrix.copy(kt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),$t===!0&&N.cameras.push(kt)}let bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let te=f.getDepthInformation(Ct[0]);te&&te.isValid&&te.texture&&g.init(te,r.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let te=0;te<Ct.length;te++){let ce=Ct[te].camera;if(ce){let be=p[ce];be||(be=new ia,p[ce]=be);let kt=f.getCameraImage(ce);be.sourceTexture=kt}}}}for(let Ct=0;Ct<S.length;Ct++){let $t=w[Ct],bt=S[Ct];$t!==null&&bt!==void 0&&bt.update($t,st,l||a)}fe&&fe(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let le=new qd;le.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){fe=Q},this.dispose=function(){}}},ly=new Ee,jd=new Jt;jd.set(-1,0,0,0,1,0,0,0,1);function cy(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ou(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,E,A):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),A=E.envMap,y=E.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function uy(i,t,e,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let w=S.program;n.uniformBlockBinding(y,w)}function l(y,S){let w=r[y.id];w===void 0&&(g(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",E));let C=S.program;n.updateUBOMapping(y,C);let _=t.render.frame;s[y.id]!==_&&(h(y),s[y.id]=_)}function u(y){let S=f();y.__bindingPointIndex=S;let w=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=r[y.id],w=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,b=w.length;_<b;_++){let T=w[_];if(Array.isArray(T))for(let R=0,D=T.length;R<D;R++)d(T[R],_,R,C);else d(T,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,w,C){if(v(y,S,w,C)===!0){let _=y.__offset,b=y.value;if(Array.isArray(b)){let T=0;for(let R=0;R<b.length;R++){let D=b[R],N=p(D);m(D,y.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,w){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,w)}function v(y,S,w,C){let _=y.value,b=S+"_"+w;if(C[b]===void 0)return typeof _=="number"||typeof _=="boolean"?C[b]=_:ArrayBuffer.isView(_)?C[b]=_.slice():C[b]=_.clone(),!0;{let T=C[b];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return C[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(y){let S=y.uniforms,w=0,C=16;for(let b=0,T=S.length;b<T;b++){let R=Array.isArray(S[b])?S[b]:[S[b]];for(let D=0,N=R.length;D<N;D++){let L=R[D],I=Array.isArray(L.value)?L.value:[L.value];for(let V=0,W=I.length;V<W;V++){let lt=I[V],Z=p(lt),rt=w%C,et=rt%Z.boundary,Pt=rt+et;w+=et,Pt!==0&&C-Pt<Z.storage&&(w+=C-Pt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Z.storage}}}let _=w%C;return _>0&&(w+=C-_),y.__size=w,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),S}function E(y){let S=y.target;S.removeEventListener("dispose",E);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function A(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}var hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function fy(){return _i===null&&(_i=new si(hy,16,16,gi,Hn),_i.name="DFG_LUT",_i.minFilter=He,_i.magFilter=He,_i.wrapS=di,_i.wrapT=di,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Jl=class{constructor(t={}){let{canvas:e=xd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Gn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=d,g=new Set([dl,fl,hl]),p=new Set([Gn,oi,fs,ds,ll,cl]),E=new Uint32Array(4),A=new Int32Array(4),y=new U,S=null,w=null,C=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,D=null,N=null,L=null,I=null;this._outputColorSpace=gn;let V=0,W=0,lt=null,Z=-1,rt=null,et=new ee,Pt=new ee,Et=null,fe=new Wt(0),Xt=0,le=e.width,Q=e.height,st=1,Ct=null,$t=null,bt=new ee(0,0,le,Q),ie=new ee(0,0,le,Q),Xe=!1,te=new ea,ce=!1,be=!1,kt=new Ee,Fe=new U,ke=new ee,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ve(){return lt===null?st:1}let z=n;function Ze(M,F){return e.getContext(M,F)}let ge,P,x,O,$,j,ft,gt,tt,at,mt,Nt,yt,pt,Tt,Bt,Zt,B,_t,it,xt,Mt,ct;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),z===null){let F="webgl2";if(z=Ze(F,M),z===null)throw Ze(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(M){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),qt("WebGLRenderer: "+M.message),M}function Ot(){ge=new vx(z),ge.init(),xt=new sy(z,ge),P=new cx(z,ge,t,xt),x=new iy(z,ge),P.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),N=z.createFramebuffer(),L=z.createFramebuffer(),I=z.createFramebuffer(),O=new Mx(z),$=new Hv,j=new ry(z,ge,x,$,P,xt,O),ft=new xx(T),gt=new wg(z),Mt=new ox(z,gt),tt=new yx(z,gt,O,Mt),at=new wx(z,tt,gt,Mt,O),B=new bx(z,P,j),Tt=new ux($),mt=new Gv(T,ft,ge,P,Mt,Tt),Nt=new cy(T,$),yt=new Xv,pt=new Kv(ge),Zt=new ax(T,ft,x,at,m,c),Bt=new ny(T,at,P),ct=new uy(z,O,P,x),_t=new lx(z,ge,O),it=new Sx(z,ge,O),O.programs=mt.programs,T.capabilities=P,T.extensions=ge,T.properties=$,T.renderLists=yt,T.shadowMap=Bt,T.state=x,T.info=O}v!==Gn&&(b=new Ax(v,e.width,e.height,o,r,s));let Dt=new ah(T,z);this.xr=Dt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(M){M!==void 0&&(st=M,this.setSize(le,Q,!1))},this.getSize=function(M){return M.set(le,Q)},this.setSize=function(M,F,Y=!0){if(Dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=M,Q=F,e.width=Math.floor(M*st),e.height=Math.floor(F*st),Y===!0&&(e.style.width=M+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(le*st,Q*st).floor()},this.setDrawingBufferSize=function(M,F,Y){le=M,Q=F,st=Y,e.width=Math.floor(M*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===Gn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,F,Y,X){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,F,Y,X),x.viewport(et.copy(bt).multiplyScalar(st).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,F,Y,X){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,F,Y,X),x.scissor(Pt.copy(ie).multiplyScalar(st).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){x.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){Ct=M},this.setTransparentSort=function(M){$t=M},this.getClearColor=function(M){return M.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Y=!0){let X=0;if(M){let G=!1;if(lt!==null){let dt=lt.texture.format;G=g.has(dt)}if(G){let dt=lt.texture.type,Rt=p.has(dt),St=Zt.getClearColor(),It=Zt.getClearAlpha(),Lt=St.r,Qt=St.g,re=St.b;Rt?(E[0]=Lt,E[1]=Qt,E[2]=re,E[3]=It,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=Lt,A[1]=Qt,A[2]=re,A[3]=It,z.clearBufferiv(z.COLOR,0,A))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Zt.dispose(),yt.dispose(),pt.dispose(),$.dispose(),ft.dispose(),at.dispose(),Mt.dispose(),ct.dispose(),mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Ir),Dt.removeEventListener("sessionend",Fi),Jn.stop()};function Te(M){M.preventDefault(),$s("WebGLRenderer: Context Lost."),R=!0}function ve(){$s("WebGLRenderer: Context Restored."),R=!1;let M=O.autoReset,F=Bt.enabled,Y=Bt.autoUpdate,X=Bt.needsUpdate,G=Bt.type;Ot(),O.autoReset=M,Bt.enabled=F,Bt.autoUpdate=Y,Bt.needsUpdate=X,Bt.type=G}function Dn(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Wn(M){let F=M.target;F.removeEventListener("dispose",Wn),Pr(F)}function Pr(M){rr(M),$.remove(M)}function rr(M){let F=$.get(M).programs;F!==void 0&&(F.forEach(function(Y){mt.releaseProgram(Y)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Y,X,G,dt){F===null&&(F=ln);let Rt=G.isMesh&&G.matrixWorld.determinantAffine()<0,St=Ic(M,F,Y,X,G);x.setMaterial(X,Rt);let It=Y.index,Lt=1;if(X.wireframe===!0){if(It=tt.getWireframeAttribute(Y),It===void 0)return;Lt=2}let Qt=Y.drawRange,re=Y.attributes.position,wt=Qt.start*Lt,pe=(Qt.start+Qt.count)*Lt;dt!==null&&(wt=Math.max(wt,dt.start*Lt),pe=Math.min(pe,(dt.start+dt.count)*Lt)),It!==null?(wt=Math.max(wt,0),pe=Math.min(pe,It.count)):re!=null&&(wt=Math.max(wt,0),pe=Math.min(pe,re.count));let Be=pe-wt;if(Be<0||Be===1/0)return;Mt.setup(G,X,St,Y,It);let Ue,ye=_t;if(It!==null&&(Ue=gt.get(It),ye=it,ye.setIndex(Ue)),G.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*Ve()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(G.isLine){let je=X.linewidth;je===void 0&&(je=1),x.setLineWidth(je*Ve()),G.isLineSegments?ye.setMode(z.LINES):G.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else G.isPoints?ye.setMode(z.POINTS):G.isSprite&&ye.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let je=G._multiDrawStarts,At=G._multiDrawCounts,Qe=G._multiDrawCount,ue=It?gt.get(It).bytesPerElement:1,yn=$.get(X).currentProgram.getUniforms();for(let Un=0;Un<Qe;Un++)yn.setValue(z,"_gl_DrawID",Un),ye.render(je[Un]/ue,At[Un])}else if(G.isInstancedMesh)ye.renderInstances(wt,Be,G.count);else if(Y.isInstancedBufferGeometry){let je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,je);ye.renderInstances(wt,Be,At)}else ye.render(wt,Be)};function Ni(M,F,Y,X){D!==null&&M.isNodeMaterial&&D.setObject(X,M),ce===!0&&Tt.setState(M,Y,!1),M.transparent===!0&&M.side===Vn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,Ei(M,F,X),M.side=ji,M.needsUpdate=!0,Ei(M,F,X),M.side=Vn):Ei(M,F,X)}this.compile=function(M,F,Y=null){Y===null&&(Y=M),D!==null&&D.renderStart(M,F,Y),w=pt.get(Y),w.init(F),_.push(w),Y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==Y&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),be=this.localClippingEnabled,ce=Tt.init(this.clippingPlanes,be),ce===!0&&Tt.setGlobalState(this.clippingPlanes,F),D!==null&&Bt.render(w.state.shadowsArray,Y,F);let X=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let Rt=0;Rt<dt.length;Rt++){let St=dt[Rt];Ni(St,Y,F,G),X.add(St)}else Ni(dt,Y,F,G),X.add(dt)}),w=_.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(M,F,Y=null){let X=this.compile(M,F,Y);return new Promise(G=>{function dt(){if(X.forEach(function(Rt){let It=$.get(Rt).currentProgram;(It===void 0||It.isReady())&&X.delete(Rt)}),X.size===0){G(M);return}setTimeout(dt,10)}ge.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ls=null;function Ga(M){Ls&&Ls(M)}function Ir(){Jn.stop()}function Fi(){Jn.start()}let Jn=new qd;Jn.setAnimationLoop(Ga),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){Ls=M,Dt.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},Dt.addEventListener("sessionstart",Ir),Dt.addEventListener("sessionend",Fi),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(M,F);let Y=Dt.enabled===!0&&Dt.isPresenting===!0,X=b!==null&&(lt===null||Y)&&b.begin(T,lt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,F,lt),w=pt.get(M,_.length),w.init(F),w.state.textureUnits=j.getTextureUnits(),_.push(w),kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(kt,ii,F.reversedDepth),be=this.localClippingEnabled,ce=Tt.init(this.clippingPlanes,be),S=yt.get(M,C.length),S.init(),C.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Rt=T.xr.getDepthSensingMesh();Rt!==null&&Lr(Rt,F,-1/0,T.sortObjects)}Lr(M,F,0,T.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),T.sortObjects===!0&&S.sort(Ct,$t),De=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,De&&Zt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Tt.beginShadows();let G=w.state.shadowsArray;if(Bt.render(G,M,F),ce===!0&&Tt.endShadows(),(X&&b.hasRenderPass())===!1){let Rt=S.opaque,St=S.transmissive;if(w.setupLights(),F.isArrayCamera){let It=F.cameras;if(St.length>0)for(let Lt=0,Qt=It.length;Lt<Qt;Lt++){let re=It[Lt];sr(Rt,St,M,re)}De&&Zt.render(M);for(let Lt=0,Qt=It.length;Lt<Qt;Lt++){let re=It[Lt];Ha(S,M,re,re.viewport)}}else St.length>0&&sr(Rt,St,M,F),De&&Zt.render(M),Ha(S,M,F)}lt!==null&&W===0&&(j.updateMultisampleRenderTarget(lt),j.updateRenderTargetMipmap(lt)),X&&b.end(T),M.isScene===!0&&M.onAfterRender(T,M,F),Mt.resetDefaultState(),Z=-1,rt=null,_.pop(),_.length>0?(w=_[_.length-1],j.setTextureUnits(w.state.textureUnits),ce===!0&&Tt.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,D!==null&&D.renderEnd()};function Lr(M,F,Y,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(te)){X&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(kt);let Rt=at.update(M),St=M.material;St.visible&&S.push(M,Rt,St,Y,ke.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(te))){let Rt=at.update(M),St=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ke.copy(Rt.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(kt)),Array.isArray(St)){let It=Rt.groups;for(let Lt=0,Qt=It.length;Lt<Qt;Lt++){let re=It[Lt],wt=St[re.materialIndex];wt&&wt.visible&&S.push(M,Rt,wt,Y,ke.z,re,F)}}else St.visible&&S.push(M,Rt,St,Y,ke.z,null,F)}}let dt=M.children;for(let Rt=0,St=dt.length;Rt<St;Rt++)Lr(dt[Rt],F,Y,X)}function Ha(M,F,Y,X){let{opaque:G,transmissive:dt,transparent:Rt}=M;w.setupLightsView(Y),ce===!0&&Tt.setGlobalState(T.clippingPlanes,Y),X&&x.viewport(et.copy(X)),G.length>0&&Dr(G,F,Y),dt.length>0&&Dr(dt,F,Y),Rt.length>0&&Dr(Rt,F,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function sr(M,F,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let wt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new _n(1,1,{generateMipmaps:!0,type:wt?Hn:Gn,minFilter:$n,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let dt=w.state.transmissionRenderTarget[X.id],Rt=X.viewport||et;dt.setSize(Rt.z*T.transmissionResolutionScale,Rt.w*T.transmissionResolutionScale);let St=T.getRenderTarget(),It=T.getActiveCubeFace(),Lt=T.getActiveMipmapLevel();T.setRenderTarget(dt),T.getClearColor(fe),Xt=T.getClearAlpha(),Xt<1&&T.setClearColor(16777215,.5),T.clear(),De&&Zt.render(Y);let Qt=T.toneMapping;T.toneMapping=ai;let re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),ce===!0&&Tt.setGlobalState(T.clippingPlanes,X),Dr(M,Y,X),j.updateMultisampleRenderTarget(dt),j.updateRenderTargetMipmap(dt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let pe=0,Be=F.length;pe<Be;pe++){let Ue=F[pe],{object:ye,geometry:je,material:At,group:Qe}=Ue;if(At.side===Vn&&ye.layers.test(X.layers)){let ue=At.side;At.side=cn,At.needsUpdate=!0,An(ye,Y,X,je,At,Qe),At.side=ue,At.needsUpdate=!0,wt=!0}}wt===!0&&(j.updateMultisampleRenderTarget(dt),j.updateRenderTargetMipmap(dt))}T.setRenderTarget(St,It,Lt),T.setClearColor(fe,Xt),re!==void 0&&(X.viewport=re),T.toneMapping=Qt}function Dr(M,F,Y){let X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,dt=M.length;G<dt;G++){let Rt=M[G],{object:St,geometry:It,group:Lt}=Rt,Qt=Rt.material;Qt.allowOverride===!0&&X!==null&&(Qt=X),St.layers.test(Y.layers)&&An(St,F,Y,It,Qt,Lt)}}function An(M,F,Y,X,G,dt){D!==null&&G.isNodeMaterial&&D.setObject(M,G),M.onBeforeRender(T,F,Y,X,G,dt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(T,F,Y,X,M,dt),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,T.renderBufferDirect(Y,F,X,G,M,dt),G.side=ji,G.needsUpdate=!0,T.renderBufferDirect(Y,F,X,G,M,dt),G.side=Vn):T.renderBufferDirect(Y,F,X,G,M,dt),M.onAfterRender(T,F,Y,X,G,dt)}function Ei(M,F,Y){F.isScene!==!0&&(F=ln);let X=$.get(M),G=w.state.lights,dt=w.state.shadowsArray,Rt=G.state.version,St=mt.getParameters(M,G.state,dt,F,Y,w.state.lightProbeGridArray),It=mt.getProgramCacheKey(St),Lt=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=ft.get(M.envMap||X.environment,Qt),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Lt===void 0&&(M.addEventListener("dispose",Wn),Lt=new Map,X.programs=Lt);let re=Lt.get(It);if(re!==void 0){if(X.currentProgram===re&&X.lightsStateVersion===Rt)return Ur(M,St),re}else St.uniforms=mt.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,Y,St),M.onBeforeCompile(St,T),re=mt.acquireProgram(St,It),Lt.set(It,re),X.uniforms=St.uniforms;let wt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=Tt.uniform),Ur(M,St),X.needsLights=Ds(M),X.lightsStateVersion=Rt,X.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.sunLights.value=G.state.sun,wt.sunLightShadows.value=G.state.sunShadow,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.sunShadowMatrix.value=G.state.sunShadowMatrix,wt.sunShadowCascade.value=G.state.sunShadowCascade,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=re,X.uniformsList=null,re}function ar(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=gs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Ur(M,F){let Y=$.get(M);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Wa(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Y=0,X=M.length;Y<X;Y++){let G=M[Y];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Ic(M,F,Y,X,G){F.isScene!==!0&&(F=ln),j.resetTextureUnits();let dt=F.fog,Rt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,St=lt===null?T.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:he.workingColorSpace,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Lt=ft.get(X.envMap||Rt,It),Qt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,re=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color,Ue=ai;X.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ue=T.toneMapping);let ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,je=ye!==void 0?ye.length:0,At=$.get(X),Qe=w.state.lights;if(ce===!0&&(be===!0||M!==rt)){let nt=M===rt&&X.id===Z;Tt.setState(X,M,nt)}let ue=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Qe.state.version||At.outputColorSpace!==St||G.isBatchedMesh&&At.batching===!1||!G.isBatchedMesh&&At.batching===!0||G.isBatchedMesh&&At.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&At.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&At.instancing===!1||!G.isInstancedMesh&&At.instancing===!0||G.isSkinnedMesh&&At.skinning===!1||!G.isSkinnedMesh&&At.skinning===!0||G.isInstancedMesh&&At.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&At.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&At.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&At.instancingMorph===!1&&G.morphTexture!==null||At.envMap!==Lt||X.fog===!0&&At.fog!==dt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Tt.numPlanes||At.numIntersection!==Tt.numIntersection)||At.vertexAlphas!==Qt||At.vertexTangents!==re||At.morphTargets!==wt||At.morphNormals!==pe||At.morphColors!==Be||At.toneMapping!==Ue||At.morphTargetsCount!==je||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,At.__version=X.version);let yn=At.currentProgram;ue===!0&&(yn=Ei(X,F,G),D&&X.isNodeMaterial&&D.onUpdateProgram(X,yn,At));let Un=!1,k=!1,q=!1,H=yn.getUniforms(),J=At.uniforms;if(x.useProgram(yn.program)&&(Un=!0,k=!0,q=!0),X.id!==Z&&(Z=X.id,k=!0),At.needsLights){let nt=Wa(w.state.lightProbeGridArray,G);At.lightProbeGrid!==nt&&(At.lightProbeGrid=nt,k=!0)}if(Un||rt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),H.setValue(z,"projectionMatrix",M.projectionMatrix),H.setValue(z,"viewMatrix",M.matrixWorldInverse);let K=H.map.cameraPosition;K!==void 0&&K.setValue(z,Fe.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&H.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&H.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),rt!==M&&(rt=M,k=!0,q=!0)}if(At.needsLights&&(Qe.state.sunShadowMap.length>0&&H.setValue(z,"sunShadowMap",Qe.state.sunShadowMap,j),Qe.state.directionalShadowMap.length>0&&H.setValue(z,"directionalShadowMap",Qe.state.directionalShadowMap,j),Qe.state.spotShadowMap.length>0&&H.setValue(z,"spotShadowMap",Qe.state.spotShadowMap,j),Qe.state.pointShadowMap.length>0&&H.setValue(z,"pointShadowMap",Qe.state.pointShadowMap,j)),G.isSkinnedMesh){H.setOptional(z,G,"bindMatrix"),H.setOptional(z,G,"bindMatrixInverse");let nt=G.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),H.setValue(z,"boneTexture",nt.boneTexture,j))}G.isBatchedMesh&&(H.setOptional(z,G,"batchingTexture"),H.setValue(z,"batchingTexture",G._matricesTexture,j),H.setOptional(z,G,"batchingIdTexture"),H.setValue(z,"batchingIdTexture",G._indirectTexture,j),H.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&H.setValue(z,"batchingColorTexture",G._colorsTexture,j));let ht=Y.morphAttributes;if((ht.position!==void 0||ht.normal!==void 0||ht.color!==void 0)&&B.update(G,Y,yn),(k||At.receiveShadow!==G.receiveShadow)&&(At.receiveShadow=G.receiveShadow,H.setValue(z,"receiveShadow",G.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(J.envMapIntensity.value=F.environmentIntensity),J.dfgLUT!==void 0&&(J.dfgLUT.value=fy()),k){if(H.setValue(z,"toneMappingExposure",T.toneMappingExposure),At.needsLights&&Lc(J,q),dt&&X.fog===!0&&Nt.refreshFogUniforms(J,dt),Nt.refreshMaterialUniforms(J,X,st,Q,w.state.transmissionRenderTarget[M.id]),At.needsLights&&At.lightProbeGrid){let nt=At.lightProbeGrid;J.probesSH.value=nt.texture,J.probesMin.value.copy(nt.boundingBox.min),J.probesMax.value.copy(nt.boundingBox.max),J.probesResolution.value.copy(nt.resolution)}gs.upload(z,ar(At),J,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gs.upload(z,ar(At),J,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&H.setValue(z,"center",G.center),H.setValue(z,"modelViewMatrix",G.modelViewMatrix),H.setValue(z,"normalMatrix",G.normalMatrix),H.setValue(z,"modelMatrix",G.matrixWorld),X.uniformsGroups!==void 0){let nt=X.uniformsGroups;for(let K=0,ot=nt.length;K<ot;K++){let ut=nt[K];ct.update(ut,yn),ct.bind(ut,yn)}}return yn}function Lc(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Ds(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(M,F,Y){let X=$.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(M.texture).__webglTexture=F,$.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let Y=$.get(M);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,Y=0){lt=M,V=F,W=Y;let X=null,G=!1,dt=!1;if(M){let St=$.get(M);if(St.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,St.__webglFramebuffer),et.copy(M.viewport),Pt.copy(M.scissor),Et=M.scissorTest,x.viewport(et),x.scissor(Pt),x.setScissorTest(Et),Z=-1;return}else if(St.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(St.__hasExternalTextures)j.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qt=M.depthTexture;if(St.__boundDepthTexture!==Qt){if(Qt!==null&&$.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}let It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);let Lt=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?X=Lt[F][Y]:X=Lt[F],G=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?X=$.get(M).__webglMultisampledFramebuffer:Array.isArray(Lt)?X=Lt[Y]:X=Lt,et.copy(M.viewport),Pt.copy(M.scissor),Et=M.scissorTest}else et.copy(bt).multiplyScalar(st).floor(),Pt.copy(ie).multiplyScalar(st).floor(),Et=Xe;if(Y!==0&&(X=N),x.bindFramebuffer(z.FRAMEBUFFER,X)&&x.drawBuffers(M,X),x.viewport(et),x.scissor(Pt),x.setScissorTest(Et),G){let St=$.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,Y)}else if(dt){let St=F;for(let It=0;It<M.textures.length;It++){let Lt=$.get(M.textures[It]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+It,Lt.__webglTexture,Y,St)}}else if(M!==null&&Y!==0){let St=$.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,Y)}Z=-1};function Oi(M){let F=$.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=P.textureFormatReadable(M.format),F.__typeReadable=P.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,Y,X,G,dt,Rt,St=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){x.bindFramebuffer(z.FRAMEBUFFER,It);try{let Lt=M.textures[St],Qt=Lt.format,re=Lt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+St);let wt=Oi(Lt);if(wt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&Y>=0&&Y<=M.height-G&&z.readPixels(F,Y,X,G,xt.convert(Qt),xt.convert(re),dt)}finally{let Lt=lt!==null?$.get(lt).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(M,F,Y,X,G,dt,Rt,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(F>=0&&F<=M.width-X&&Y>=0&&Y<=M.height-G){x.bindFramebuffer(z.FRAMEBUFFER,It);let Lt=M.textures[St],Qt=Lt.format,re=Lt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+St);let wt=Oi(Lt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,dt.byteLength,z.STREAM_READ),z.readPixels(F,Y,X,G,xt.convert(Qt),xt.convert(re),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Be=lt!==null?$.get(lt).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Be);let Ue=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await yd(z,Ue,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,dt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(pe),z.deleteSync(Ue),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Y=0){let X=Math.pow(2,-Y),G=Math.floor(M.image.width*X),dt=Math.floor(M.image.height*X),Rt=F!==null?F.x:0,St=F!==null?F.y:0;j.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Rt,St,G,dt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,Y=null,X=null,G=0,dt=0){let Rt,St,It,Lt,Qt,re,wt,pe,Be,Ue=M.isCompressedTexture?M.mipmaps[dt]:M.image;if(Y!==null)Rt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Qt=Y.min.y,re=Y.isBox3?Y.min.z:0;else{let J=Math.pow(2,-G);Rt=Math.floor(Ue.width*J),St=Math.floor(Ue.height*J),M.isDataArrayTexture?It=Ue.depth:M.isData3DTexture?It=Math.floor(Ue.depth*J):It=1,Lt=0,Qt=0,re=0}X!==null?(wt=X.x,pe=X.y,Be=X.z):(wt=0,pe=0,Be=0);let ye=xt.convert(F.format),je=xt.convert(F.type),At;F.isData3DTexture?(j.setTexture3D(F,0),At=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),At=z.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),At=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Qe=x.getParameter(z.UNPACK_ROW_LENGTH),ue=x.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=x.getParameter(z.UNPACK_SKIP_PIXELS),Un=x.getParameter(z.UNPACK_SKIP_ROWS),k=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(z.UNPACK_SKIP_IMAGES,re);let q=M.isDataArrayTexture||M.isData3DTexture,H=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let J=$.get(M),ht=$.get(F),nt=$.get(J.__renderTarget),K=$.get(ht.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,nt.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let ot=0;ot<It;ot++)q&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(M).__webglTexture,G,re+ot),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(F).__webglTexture,dt,Be+ot)),z.blitFramebuffer(Lt,Qt,Rt,St,wt,pe,Rt,St,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||$.has(M)){let J=$.get(M),ht=$.get(F);x.bindFramebuffer(z.READ_FRAMEBUFFER,L),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let nt=0;nt<It;nt++)q?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.__webglTexture,G,re+nt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,J.__webglTexture,G),H?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.__webglTexture,dt,Be+nt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ht.__webglTexture,dt),G!==0?z.blitFramebuffer(Lt,Qt,Rt,St,wt,pe,Rt,St,z.COLOR_BUFFER_BIT,z.NEAREST):H?z.copyTexSubImage3D(At,dt,wt,pe,Be+nt,Lt,Qt,Rt,St):z.copyTexSubImage2D(At,dt,wt,pe,Lt,Qt,Rt,St);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else H?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(At,dt,wt,pe,Be,Rt,St,It,ye,je,Ue.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(At,dt,wt,pe,Be,Rt,St,It,ye,Ue.data):z.texSubImage3D(At,dt,wt,pe,Be,Rt,St,It,ye,je,Ue):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,dt,wt,pe,Rt,St,ye,je,Ue.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,dt,wt,pe,Ue.width,Ue.height,ye,Ue.data):z.texSubImage2D(z.TEXTURE_2D,dt,wt,pe,Rt,St,ye,je,Ue);x.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),x.pixelStorei(z.UNPACK_SKIP_ROWS,Un),x.pixelStorei(z.UNPACK_SKIP_IMAGES,k),dt===0&&F.generateMipmaps&&z.generateMipmap(At),x.unbindTexture()},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){V=0,W=0,lt=null,x.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Qd=new Mn,Ql=new U,Er=class extends ha{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new me(t,3)),this.setAttribute("uv",new me(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceStart",new ri(n,3,0)),this.setAttribute("instanceEnd",new ri(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceColorStart",new ri(n,3,0)),this.setAttribute("instanceColorEnd",new ri(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new oa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Qd.setFromBufferAttribute(e),this.boundingBox.union(Qd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ql.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ql)),Ql.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ql));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:Ma.merge([vt.common,vt.fog,vt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ar=class extends Re{constructor(t){super({type:"LineMaterial",uniforms:Ma.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var oh=new ee,tp=new U,ep=new U,un=new ee,hn=new ee,xi=new ee,lh=new U,ch=new Ee,fn=new fa,np=new U,tc=new Mn,ec=new bn,vi=new ee,yi,Tr;function ip(i,t,e){return vi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),vi.multiplyScalar(1/vi.w),vi.x=Tr/e.width,vi.y=Tr/e.height,vi.applyMatrix4(i.projectionMatrixInverse),vi.multiplyScalar(1/vi.w),Math.abs(Math.max(vi.x,vi.y))}function dy(i,t){let e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,c=a;o<c;o++){fn.start.fromBufferAttribute(r,o),fn.end.fromBufferAttribute(s,o),fn.applyMatrix4(e);let l=new U,u=new U;yi.distanceSqToSegment(fn.start,fn.end,u,l),u.distanceTo(l)<Tr*.5&&t.push({point:u,pointOnLine:l,distance:yi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function py(i,t,e){let n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),f=-t.near;yi.at(1,xi),xi.w=1,xi.applyMatrix4(t.matrixWorldInverse),xi.applyMatrix4(n),xi.multiplyScalar(1/xi.w),xi.x*=s.x/2,xi.y*=s.y/2,xi.z=0,lh.copy(xi),ch.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,d=u;h<d;h++){if(un.fromBufferAttribute(c,h),hn.fromBufferAttribute(l,h),un.w=1,hn.w=1,un.applyMatrix4(ch),hn.applyMatrix4(ch),un.z>f&&hn.z>f)continue;if(un.z>f){let A=un.z-hn.z,y=(un.z-f)/A;un.lerp(hn,y)}else if(hn.z>f){let A=hn.z-un.z,y=(hn.z-f)/A;hn.lerp(un,y)}un.applyMatrix4(n),hn.applyMatrix4(n),un.multiplyScalar(1/un.w),hn.multiplyScalar(1/hn.w),un.x*=s.x/2,un.y*=s.y/2,hn.x*=s.x/2,hn.y*=s.y/2,fn.start.copy(un),fn.start.z=0,fn.end.copy(hn),fn.end.z=0;let v=fn.closestPointToPointParameter(lh,!0);fn.at(v,np);let g=Nu.lerp(un.z,hn.z,v),p=g>=-1&&g<=1,E=lh.distanceTo(np)<Tr*.5;if(p&&E){fn.start.fromBufferAttribute(c,h),fn.end.fromBufferAttribute(l,h),fn.start.applyMatrix4(a),fn.end.applyMatrix4(a);let A=new U,y=new U;yi.distanceSqToSegment(fn.start,fn.end,y,A),e.push({point:y,pointOnLine:A,distance:yi.origin.distanceTo(y),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Aa=class extends Ne{constructor(t=new Er,e=new Ar({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)tp.fromBufferAttribute(e,a),ep.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+tp.distanceTo(ep);let s=new Ki(r,2,1);return t.setAttribute("instanceDistanceStart",new ri(s,1,0)),t.setAttribute("instanceDistanceEnd",new ri(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;yi=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;Tr=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ec.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Tr*.5;else{let f=Math.max(r.near,ec.distanceToPoint(yi.origin));l=ip(r,f,c.resolution)}if(ec.radius+=l,yi.intersectsSphere(ec)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),tc.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Tr*.5;else{let f=Math.max(r.near,tc.distanceToPoint(yi.origin));u=ip(r,f,c.resolution)}tc.expandByScalar(u),yi.intersectsBox(tc)!==!1&&(n?dy(this,e):py(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(oh),this.material.uniforms.resolution.value.set(oh.z,oh.w))}};var Si=6371,xs=Math.PI/180,$e=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),li=(i,t,e)=>{let n=$e((e-i)/(t-i));return n*n*(3-2*n)},We=(i,t,e=1)=>{let n=i*xs,r=t*xs;return new U(Math.cos(n)*Math.sin(r)*e,Math.sin(n)*e,Math.cos(n)*Math.cos(r)*e)},my=i=>[Math.asin($e(i.y,-1,1))/xs,Math.atan2(i.x,i.z)/xs];function dh(i,t,e){i.aspect=t/e;let n=t>900;i.setViewOffset(t,e,n?-t*.2:0,n?0:e*.18,t,e),i.updateProjectionMatrix()}var rp=new U(0,1,0),gy=new U;function ph(i,t,e,n,r,s){let a=We(t.lat,t.lon),o=We(e.lat,e.lon),c=a.angleTo(o),l=c<1e-6?a:a.clone().multiplyScalar(Math.sin((1-n)*c)).add(o.clone().multiplyScalar(Math.sin(n*c))).divideScalar(Math.sin(c));l.normalize();let u=c*Si,f=1+Math.min(2.2,u/Math.max(t.alt,e.alt,400)*.35)*Math.sin(Math.PI*n),h=Math.exp(Math.log(t.alt)*(1-n)+Math.log(e.alt)*n)*f*(r/s<.8?1.7:1),d=1+h/Si,m=h<2500?24*(1-h/2500):0,v=((t.tilt??m)*(1-n)+(e.tilt??m)*n)*xs,g=((t.ground||0)*(1-n)+(e.ground||0)*n)/Si,p=new U().crossVectors(l,new U().crossVectors(rp,l)).normalize().negate();return i.position.copy(l).multiplyScalar(d+g).addScaledVector(p,Math.tan(v)*(d-1)*1.2),i.up.copy(rp),i.lookAt(gy.copy(l).multiplyScalar(1+g-li(2500,6e3,h))),i.near=Math.max(2e-6,(d-1)*.15),i.far=d+3,i.updateProjectionMatrix(),h}var _y=new bn(new U,1),uh=new mr,sp=new U,hh=new Ft;function fh(i,t,e,n,r){return hh.set(t/n*2-1,1-e/r*2),uh.origin.copy(i.position),uh.direction.set(hh.x,hh.y,.5).unproject(i).sub(i.position).normalize(),uh.intersectSphere(_y,sp)?my(sp):null}var xy=(i,t)=>{let e=We(i[0],i[1]),n=We(t[0],t[1]);return e.angleTo(n)*Si},Cr=new sn(32,1,5e-4,100);function ap(i,t,e,n=.14){dh(Cr,t,e),ph(Cr,i,i,0,t,e),Cr.updateMatrixWorld(!0);let r=[],s=12,a=0;for(let S=0;S<=s;S++)for(let w=0;w<=s;w++){let C=fh(Cr,w/s*t,S/s*e,t,e);C?r.push(C):a++}let o=We(i.lat,i.lon).project(Cr),c=(o.x*.5+.5)*t,l=(.5-o.y*.5)*e,u=fh(Cr,c-40,l,t,e),f=fh(Cr,c+40,l,t,e),h=u&&f?xy(u,f)/80:0;if(a||r.length<4)return{box:null,kmPerPx:h};let d=r.map(([,S])=>i.lon+((S-i.lon)%360+540)%360-180),m=r.map(([S])=>S),[v,g,p,E]=[Math.min(...d),Math.max(...d),Math.min(...m),Math.max(...m)],A=(g-v)*n,y=(E-p)*n;return v-=A,g+=A,p=Math.max(-89.5,p-y),E=Math.min(89.5,E+y),{box:[v,p,g,E],kmPerPx:h}}function op(i,t,e,n){let r=(i[1]+i[3])/2*xs,s=(i[2]-i[0])*111.32*Math.cos(r),a=(i[3]-i[1])*110.57,o=s/t,c=a/t,l=Math.min(1,e/Math.max(o,c),Math.sqrt(n/(o*c)));return o=Math.round($e(o*l,256,e)),c=Math.round($e(c*l,128,e)),{W:o,H:c,texelKm:Math.max(s/o,a/c)}}var Ke=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){let e=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){let t=this._partials,e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}};function*vy(i){for(let t of i)yield*t}function vs(i){return Array.from(vy(i))}var de=1e-6,lp=1e-12,oe=Math.PI,En=oe/2,ys=oe/4,nn=oe*2,dn=180/oe,_e=oe/180,xe=Math.abs,cp=Math.atan,vn=Math.atan2,ne=Math.cos;var jt=Math.sin,up=Math.sign||function(i){return i>0?1:i<0?-1:0},on=Math.sqrt;function hp(i){return i>1?0:i<-1?oe:Math.acos(i)}function ci(i){return i>1?En:i<-1?-En:Math.asin(i)}function mh(i){return(i=jt(i/2))*i}function Ae(){}function nc(i,t){i&&dp.hasOwnProperty(i.type)&&dp[i.type](i,t)}var fp={Feature:function(i,t){nc(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)nc(e[n].geometry,t)}},dp={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){gh(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)gh(e[n],t,0)},Polygon:function(i,t){pp(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)pp(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)nc(e[n],t)}};function gh(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function pp(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)gh(i[e],t,1);t.polygonEnd()}function Zn(i,t){i&&fp.hasOwnProperty(i.type)?fp[i.type](i,t):nc(i,t)}var _h=new Ke,ic=new Ke,mp,gp,xh,vh,yh,Ta={point:Ae,lineStart:Ae,lineEnd:Ae,polygonStart:function(){_h=new Ke,Ta.lineStart=yy,Ta.lineEnd=Sy},polygonEnd:function(){var i=+_h;ic.add(i<0?nn+i:i),this.lineStart=this.lineEnd=this.point=Ae},sphere:function(){ic.add(nn)}};function yy(){Ta.point=My}function Sy(){_p(mp,gp)}function My(i,t){Ta.point=_p,mp=i,gp=t,i*=_e,t*=_e,xh=i,vh=ne(t=t/2+ys),yh=jt(t)}function _p(i,t){i*=_e,t*=_e,t=t/2+ys;var e=i-xh,n=e>=0?1:-1,r=n*e,s=ne(t),a=jt(t),o=yh*a,c=vh*s+o*ne(r),l=o*n*jt(r);_h.add(vn(l,c)),xh=i,vh=s,yh=a}function rc(i){return ic=new Ke,Zn(i,Ta),ic*2}function Ca(i){return[vn(i[1],i[0]),ci(i[2])]}function Mi(i){var t=i[0],e=i[1],n=ne(e);return[n*ne(t),n*jt(t),jt(e)]}function Ra(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Ss(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function sc(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function Pa(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ia(i){var t=on(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function La(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Sh(i,t){return xe(i)>oe&&(i-=Math.round(i/nn)*nn),[i,t]}Sh.invert=Sh;function Sp(i,t,e){return(i%=nn)?t||e?La(vp(i),yp(t,e)):vp(i):t||e?yp(t,e):Sh}function xp(i){return function(t,e){return t+=i,xe(t)>oe&&(t-=Math.round(t/nn)*nn),[t,e]}}function vp(i){var t=xp(i);return t.invert=xp(-i),t}function yp(i,t){var e=ne(i),n=jt(i),r=ne(t),s=jt(t);function a(o,c){var l=ne(c),u=ne(o)*l,f=jt(o)*l,h=jt(c),d=h*e+u*n;return[vn(f*r-d*s,u*e-h*n),ci(d*r+f*s)]}return a.invert=function(o,c){var l=ne(c),u=ne(o)*l,f=jt(o)*l,h=jt(c),d=h*r-f*s;return[vn(f*r+h*s,u*e+d*n),ci(d*e-u*n)]},a}function bp(i,t,e,n,r,s){if(e){var a=ne(t),o=jt(t),c=n*e;r==null?(r=t+n*nn,s=t-c/2):(r=Mp(a,r),s=Mp(a,s),(n>0?r<s:r>s)&&(r+=n*nn));for(var l,u=r;n>0?u>s:u<s;u-=c)l=Ca([a,-o*ne(u),-o*jt(u)]),i.point(l[0],l[1])}}function Mp(i,t){t=Mi(t),t[0]-=i,Ia(t);var e=hp(-t[1]);return((-t[2]<0?-e:e)+nn-de)%nn}function ac(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Ae,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Ms(i,t){return xe(i[0]-t[0])<de&&xe(i[1]-t[1])<de}function oc(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function lc(i,t,e,n,r){var s=[],a=[],o,c;if(i.forEach(function(m){if(!((v=m.length-1)<=0)){var v,g=m[0],p=m[v],E;if(Ms(g,p)){if(!g[2]&&!p[2]){for(r.lineStart(),o=0;o<v;++o)r.point((g=m[o])[0],g[1]);r.lineEnd();return}p[0]+=2*de}s.push(E=new oc(g,m,null,!0)),a.push(E.o=new oc(g,null,E,!1)),s.push(E=new oc(p,m,null,!1)),a.push(E.o=new oc(p,null,E,!0))}}),!!s.length){for(a.sort(t),wp(s),wp(a),o=0,c=a.length;o<c;++o)a[o].e=e=!e;for(var l=s[0],u,f;;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,c=u.length;o<c;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function wp(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function Mh(i){return xe(i[0])<=oe?i[0]:up(i[0])*((xe(i[0])+oe)%nn-oe)}function Ep(i,t){var e=Mh(t),n=t[1],r=jt(n),s=[jt(e),-ne(e),0],a=0,o=0,c=new Ke;r===1?n=En+de:r===-1&&(n=-En-de);for(var l=0,u=i.length;l<u;++l)if(h=(f=i[l]).length)for(var f,h,d=f[h-1],m=Mh(d),v=d[1]/2+ys,g=jt(v),p=ne(v),E=0;E<h;++E,m=y,g=w,p=C,d=A){var A=f[E],y=Mh(A),S=A[1]/2+ys,w=jt(S),C=ne(S),_=y-m,b=_>=0?1:-1,T=b*_,R=T>oe,D=g*w;if(c.add(vn(D*b*jt(T),p*C+D*ne(T))),a+=R?_+b*nn:_,R^m>=e^y>=e){var N=Ss(Mi(d),Mi(A));Ia(N);var L=Ss(s,N);Ia(L);var I=(R^_>=0?-1:1)*ci(L[2]);(n>I||n===I&&(N[0]||N[1]))&&(o+=R^_>=0?1:-1)}}return(a<-de||a<de&&c<-lp)^o&1}function cc(i,t,e,n){return function(r){var s=t(r),a=ac(),o=t(a),c=!1,l,u,f,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=p,h.lineStart=E,h.lineEnd=A,u=[],l=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,u=vs(u);var y=Ep(l,n);u.length?(c||(r.polygonStart(),c=!0),lc(u,wy,y,e,r)):y&&(c||(r.polygonStart(),c=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(y,S){i(y,S)&&r.point(y,S)}function m(y,S){s.point(y,S)}function v(){h.point=m,s.lineStart()}function g(){h.point=d,s.lineEnd()}function p(y,S){f.push([y,S]),o.point(y,S)}function E(){o.lineStart(),f=[]}function A(){p(f[0][0],f[0][1]),o.lineEnd();var y=o.clean(),S=a.result(),w,C=S.length,_,b,T;if(f.pop(),l.push(f),f=null,!!C){if(y&1){if(b=S[0],(_=b.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),w=0;w<_;++w)r.point((T=b[w])[0],T[1]);r.lineEnd()}return}C>1&&y&2&&S.push(S.pop().concat(S.shift())),u.push(S.filter(by))}}return h}}function by(i){return i.length>1}function wy(i,t){return((i=i.x)[0]<0?i[1]-En-de:En-i[1])-((t=t.x)[0]<0?t[1]-En-de:En-t[1])}var bh=cc(function(){return!0},Ey,Ty,[-oe,-En]);function Ey(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?oe:-oe,c=xe(s-t);xe(c-oe)<de?(i.point(t,e=(e+a)/2>0?En:-En),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&c>=oe&&(xe(t-n)<de&&(t-=n*de),xe(s-o)<de&&(s-=o*de),e=Ay(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function Ay(i,t,e,n){var r,s,a=jt(i-e);return xe(a)>de?cp((jt(t)*(s=ne(n))*jt(e)-jt(n)*(r=ne(t))*jt(i))/(r*s*a)):(t+n)/2}function Ty(i,t,e,n){var r;if(i==null)r=e*En,n.point(-oe,r),n.point(0,r),n.point(oe,r),n.point(oe,0),n.point(oe,-r),n.point(0,-r),n.point(-oe,-r),n.point(-oe,0),n.point(-oe,r);else if(xe(i[0]-t[0])>de){var s=i[0]<t[0]?oe:-oe;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function Ap(i){var t=ne(i),e=2*_e,n=t>0,r=xe(t)>de;function s(u,f,h,d){bp(d,i,e,h,u,f)}function a(u,f){return ne(u)*ne(f)>t}function o(u){var f,h,d,m,v;return{lineStart:function(){m=d=!1,v=1},point:function(g,p){var E=[g,p],A,y=a(g,p),S=n?y?0:l(g,p):y?l(g+(g<0?oe:-oe),p):0;if(!f&&(m=d=y)&&u.lineStart(),y!==d&&(A=c(f,E),(!A||Ms(f,A)||Ms(E,A))&&(E[2]=1)),y!==d)v=0,y?(u.lineStart(),A=c(E,f),u.point(A[0],A[1])):(A=c(f,E),u.point(A[0],A[1],2),u.lineEnd()),f=A;else if(r&&f&&n^y){var w;!(S&h)&&(w=c(E,f,!0))&&(v=0,n?(u.lineStart(),u.point(w[0][0],w[0][1]),u.point(w[1][0],w[1][1]),u.lineEnd()):(u.point(w[1][0],w[1][1]),u.lineEnd(),u.lineStart(),u.point(w[0][0],w[0][1],3)))}y&&(!f||!Ms(f,E))&&u.point(E[0],E[1]),f=E,d=y,h=S},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return v|(m&&d)<<1}}}function c(u,f,h){var d=Mi(u),m=Mi(f),v=[1,0,0],g=Ss(d,m),p=Ra(g,g),E=g[0],A=p-E*E;if(!A)return!h&&u;var y=t*p/A,S=-t*E/A,w=Ss(v,g),C=Pa(v,y),_=Pa(g,S);sc(C,_);var b=w,T=Ra(C,b),R=Ra(b,b),D=T*T-R*(Ra(C,C)-1);if(!(D<0)){var N=on(D),L=Pa(b,(-T-N)/R);if(sc(L,C),L=Ca(L),!h)return L;var I=u[0],V=f[0],W=u[1],lt=f[1],Z;V<I&&(Z=I,I=V,V=Z);var rt=V-I,et=xe(rt-oe)<de,Pt=et||rt<de;if(!et&&lt<W&&(Z=W,W=lt,lt=Z),Pt?et?W+lt>0^L[1]<(xe(L[0]-I)<de?W:lt):W<=L[1]&&L[1]<=lt:rt>oe^(I<=L[0]&&L[0]<=V)){var Et=Pa(b,(-T+N)/R);return sc(Et,C),[L,Ca(Et)]}}}function l(u,f){var h=n?i:oe-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return cc(a,o,s,n?[0,-i]:[-oe,i-oe])}function Tp(i,t,e,n,r,s){var a=i[0],o=i[1],c=t[0],l=t[1],u=0,f=1,h=c-a,d=l-o,m;if(m=e-a,!(!h&&m>0)){if(m/=h,h<0){if(m<u)return;m<f&&(f=m)}else if(h>0){if(m>f)return;m>u&&(u=m)}if(m=r-a,!(!h&&m<0)){if(m/=h,h<0){if(m>f)return;m>u&&(u=m)}else if(h>0){if(m<u)return;m<f&&(f=m)}if(m=n-o,!(!d&&m>0)){if(m/=d,d<0){if(m<u)return;m<f&&(f=m)}else if(d>0){if(m>f)return;m>u&&(u=m)}if(m=s-o,!(!d&&m<0)){if(m/=d,d<0){if(m>f)return;m>u&&(u=m)}else if(d>0){if(m<u)return;m<f&&(f=m)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var Da=1e9,uc=-Da;function wh(i,t,e,n){function r(l,u){return i<=l&&l<=e&&t<=u&&u<=n}function s(l,u,f,h){var d=0,m=0;if(l==null||(d=a(l,f))!==(m=a(u,f))||c(l,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==m);else h.point(u[0],u[1])}function a(l,u){return xe(l[0]-i)<de?u>0?0:3:xe(l[0]-e)<de?u>0?2:1:xe(l[1]-t)<de?u>0?1:0:u>0?3:2}function o(l,u){return c(l.x,u.x)}function c(l,u){var f=a(l,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-l[1]:f===1?l[0]-u[0]:f===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,f=ac(),h,d,m,v,g,p,E,A,y,S,w,C={point:_,lineStart:D,lineEnd:N,polygonStart:T,polygonEnd:R};function _(I,V){r(I,V)&&u.point(I,V)}function b(){for(var I=0,V=0,W=d.length;V<W;++V)for(var lt=d[V],Z=1,rt=lt.length,et=lt[0],Pt,Et,fe=et[0],Xt=et[1];Z<rt;++Z)Pt=fe,Et=Xt,et=lt[Z],fe=et[0],Xt=et[1],Et<=n?Xt>n&&(fe-Pt)*(n-Et)>(Xt-Et)*(i-Pt)&&++I:Xt<=n&&(fe-Pt)*(n-Et)<(Xt-Et)*(i-Pt)&&--I;return I}function T(){u=f,h=[],d=[],w=!0}function R(){var I=b(),V=w&&I,W=(h=vs(h)).length;(V||W)&&(l.polygonStart(),V&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),W&&lc(h,o,I,s,l),l.polygonEnd()),u=l,h=d=m=null}function D(){C.point=L,d&&d.push(m=[]),S=!0,y=!1,E=A=NaN}function N(){h&&(L(v,g),p&&y&&f.rejoin(),h.push(f.result())),C.point=_,y&&u.lineEnd()}function L(I,V){var W=r(I,V);if(d&&m.push([I,V]),S)v=I,g=V,p=W,S=!1,W&&(u.lineStart(),u.point(I,V));else if(W&&y)u.point(I,V);else{var lt=[E=Math.max(uc,Math.min(Da,E)),A=Math.max(uc,Math.min(Da,A))],Z=[I=Math.max(uc,Math.min(Da,I)),V=Math.max(uc,Math.min(Da,V))];Tp(lt,Z,i,t,e,n)?(y||(u.lineStart(),u.point(lt[0],lt[1])),u.point(Z[0],Z[1]),W||u.lineEnd(),w=!1):W&&(u.lineStart(),u.point(I,V),w=!1)}E=I,A=V,y=W}return C}}var Eh,Ah,hc,fc,bs={sphere:Ae,point:Ae,lineStart:Cy,lineEnd:Ae,polygonStart:Ae,polygonEnd:Ae};function Cy(){bs.point=Py,bs.lineEnd=Ry}function Ry(){bs.point=bs.lineEnd=Ae}function Py(i,t){i*=_e,t*=_e,Ah=i,hc=jt(t),fc=ne(t),bs.point=Iy}function Iy(i,t){i*=_e,t*=_e;var e=jt(t),n=ne(t),r=xe(i-Ah),s=ne(r),a=jt(r),o=n*a,c=fc*e-hc*n*s,l=hc*e+fc*n*s;Eh.add(vn(on(o*o+c*c),l)),Ah=i,hc=e,fc=n}function Cp(i){return Eh=new Ke,Zn(i,bs),+Eh}var Th=[null,null],Ly={type:"LineString",coordinates:Th};function dc(i,t){return Th[0]=i,Th[1]=t,Cp(Ly)}function pc(i,t){var e=i[0]*_e,n=i[1]*_e,r=t[0]*_e,s=t[1]*_e,a=ne(n),o=jt(n),c=ne(s),l=jt(s),u=a*ne(e),f=a*jt(e),h=c*ne(r),d=c*jt(r),m=2*ci(on(mh(s-n)+a*c*mh(r-e))),v=jt(m),g=m?function(p){var E=jt(p*=m)/v,A=jt(m-p)/v,y=A*u+E*h,S=A*f+E*d,w=A*o+E*l;return[vn(S,y)*dn,vn(w,on(y*y+S*S))*dn]}:function(){return[e*dn,n*dn]};return g.distance=m,g}var Ua=i=>i;var Ch=new Ke,Rh=new Ke,Rp,Pp,Ph,Ih,nr={point:Ae,lineStart:Ae,lineEnd:Ae,polygonStart:function(){nr.lineStart=Dy,nr.lineEnd=Ny},polygonEnd:function(){nr.lineStart=nr.lineEnd=nr.point=Ae,Ch.add(xe(Rh)),Rh=new Ke},result:function(){var i=Ch/2;return Ch=new Ke,i}};function Dy(){nr.point=Uy}function Uy(i,t){nr.point=Ip,Rp=Ph=i,Pp=Ih=t}function Ip(i,t){Rh.add(Ih*i-Ph*t),Ph=i,Ih=t}function Ny(){Ip(Rp,Pp)}var Lh=nr;var ws=1/0,mc=ws,Na=-ws,gc=Na,Fy={point:Oy,lineStart:Ae,lineEnd:Ae,polygonStart:Ae,polygonEnd:Ae,result:function(){var i=[[ws,mc],[Na,gc]];return Na=gc=-(mc=ws=1/0),i}};function Oy(i,t){i<ws&&(ws=i),i>Na&&(Na=i),t<mc&&(mc=t),t>gc&&(gc=t)}var Es=Fy;var Dh=0,Uh=0,Fa=0,_c=0,xc=0,As=0,Nh=0,Fh=0,Oa=0,Up,Np,bi,wi,ui={point:Rr,lineStart:Lp,lineEnd:Dp,polygonStart:function(){ui.lineStart=ky,ui.lineEnd=Vy},polygonEnd:function(){ui.point=Rr,ui.lineStart=Lp,ui.lineEnd=Dp},result:function(){var i=Oa?[Nh/Oa,Fh/Oa]:As?[_c/As,xc/As]:Fa?[Dh/Fa,Uh/Fa]:[NaN,NaN];return Dh=Uh=Fa=_c=xc=As=Nh=Fh=Oa=0,i}};function Rr(i,t){Dh+=i,Uh+=t,++Fa}function Lp(){ui.point=By}function By(i,t){ui.point=zy,Rr(bi=i,wi=t)}function zy(i,t){var e=i-bi,n=t-wi,r=on(e*e+n*n);_c+=r*(bi+i)/2,xc+=r*(wi+t)/2,As+=r,Rr(bi=i,wi=t)}function Dp(){ui.point=Rr}function ky(){ui.point=Gy}function Vy(){Fp(Up,Np)}function Gy(i,t){ui.point=Fp,Rr(Up=bi=i,Np=wi=t)}function Fp(i,t){var e=i-bi,n=t-wi,r=on(e*e+n*n);_c+=r*(bi+i)/2,xc+=r*(wi+t)/2,As+=r,r=wi*i-bi*t,Nh+=r*(bi+i),Fh+=r*(wi+t),Oa+=r*3,Rr(bi=i,wi=t)}var Oh=ui;function vc(i){this._context=i}vc.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,nn);break}}},result:Ae};var zh=new Ke,Bh,Op,Bp,Ba,za,yc={point:Ae,lineStart:function(){yc.point=Hy},lineEnd:function(){Bh&&zp(Op,Bp),yc.point=Ae},polygonStart:function(){Bh=!0},polygonEnd:function(){Bh=null},result:function(){var i=+zh;return zh=new Ke,i}};function Hy(i,t){yc.point=zp,Op=Ba=i,Bp=za=t}function zp(i,t){Ba-=i,za-=t,zh.add(on(Ba*Ba+za*za)),Ba=i,za=t}var kh=yc;var kp,Sc,Vp,Gp,Ts=class{constructor(t){this._append=t==null?Hp:Wy(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==Vp||this._append!==Sc){let n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Vp=n,Sc=this._append,Gp=this._,this._=r}this._+=Gp;break}}}result(){let t=this._;return this._="",t.length?t:null}};function Hp(i){let t=1;this._+=i[0];for(let e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function Wy(i){let t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return Hp;if(t!==kp){let e=10**t;kp=t,Sc=function(r){let s=1;this._+=r[0];for(let a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return Sc}function Vh(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),Zn(o,r(s))),s.result()}return a.area=function(o){return Zn(o,r(Lh)),Lh.result()},a.measure=function(o){return Zn(o,r(kh)),kh.result()},a.bounds=function(o){return Zn(o,r(Es)),Es.result()},a.centroid=function(o){return Zn(o,r(Oh)),Oh.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,Ua):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new Ts(e)):new vc(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{let c=Math.floor(o);if(!(c>=0))throw new RangeError(`invalid digits: ${o}`);e=c}return t===null&&(s=new Ts(e)),a},a.projection(i).digits(e).context(t)}function Hh(i){return{stream:Cs(i)}}function Cs(i){return function(t){var e=new Gh;for(var n in i)e[n]=i[n];return e.stream=t,e}}function Gh(){}Gh.prototype={constructor:Gh,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Wh(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),Zn(e,i.stream(Es)),t(Es.result()),n!=null&&i.clipExtent(n),i}function Xh(i,t,e){return Wh(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,c=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,c])},e)}function Wp(i,t,e){return Xh(i,[[0,0],t],e)}function Xp(i,t,e){return Wh(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function qp(i,t,e){return Wh(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var Yp=16,Xy=ne(30*_e);function qh(i,t){return+t?Yy(i,t):qy(i)}function qy(i){return Cs({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function Yy(i,t){function e(n,r,s,a,o,c,l,u,f,h,d,m,v,g){var p=l-n,E=u-r,A=p*p+E*E;if(A>4*t&&v--){var y=a+h,S=o+d,w=c+m,C=on(y*y+S*S+w*w),_=ci(w/=C),b=xe(xe(w)-1)<de||xe(s-f)<de?(s+f)/2:vn(S,y),T=i(b,_),R=T[0],D=T[1],N=R-n,L=D-r,I=E*N-p*L;(I*I/A>t||xe((p*N+E*L)/A-.5)>.3||a*h+o*d+c*m<Xy)&&(e(n,r,s,a,o,c,R,D,b,y/=C,S/=C,w,v,g),g.point(R,D),e(R,D,b,y,S,w,l,u,f,h,d,m,v,g))}}return function(n){var r,s,a,o,c,l,u,f,h,d,m,v,g={point:p,lineStart:E,lineEnd:y,polygonStart:function(){n.polygonStart(),g.lineStart=S},polygonEnd:function(){n.polygonEnd(),g.lineStart=E}};function p(_,b){_=i(_,b),n.point(_[0],_[1])}function E(){f=NaN,g.point=A,n.lineStart()}function A(_,b){var T=Mi([_,b]),R=i(_,b);e(f,h,u,d,m,v,f=R[0],h=R[1],u=_,d=T[0],m=T[1],v=T[2],Yp,n),n.point(f,h)}function y(){g.point=p,n.lineEnd()}function S(){E(),g.point=w,g.lineEnd=C}function w(_,b){A(r=_,b),s=f,a=h,o=d,c=m,l=v,g.point=A}function C(){e(f,h,u,d,m,v,s,a,r,o,c,l,Yp,n),g.lineEnd=y,y()}return g}}var $y=Cs({point:function(i,t){this.stream.point(i*_e,t*_e)}});function Zy(i){return Cs({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function Jy(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function $p(i,t,e,n,r,s){if(!s)return Jy(i,t,e,n,r);var a=ne(s),o=jt(s),c=a*i,l=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function m(v,g){return v*=n,g*=r,[c*v-l*g+t,e-l*v-c*g]}return m.invert=function(v,g){return[n*(u*v-f*g+h),r*(d-f*v-u*g)]},m}function Yh(i){return Ky(function(){return i})()}function Ky(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,c=0,l=0,u,f=0,h=1,d=1,m=null,v=bh,g=null,p,E,A,y=Ua,S=.5,w,C,_,b,T;function R(I){return _(I[0]*_e,I[1]*_e)}function D(I){return I=_.invert(I[0],I[1]),I&&[I[0]*dn,I[1]*dn]}R.stream=function(I){return b&&T===I?b:b=$y(Zy(u)(v(w(y(T=I)))))},R.preclip=function(I){return arguments.length?(v=I,m=void 0,L()):v},R.postclip=function(I){return arguments.length?(y=I,g=p=E=A=null,L()):y},R.clipAngle=function(I){return arguments.length?(v=+I?Ap(m=I*_e):(m=null,bh),L()):m*dn},R.clipExtent=function(I){return arguments.length?(y=I==null?(g=p=E=A=null,Ua):wh(g=+I[0][0],p=+I[0][1],E=+I[1][0],A=+I[1][1]),L()):g==null?null:[[g,p],[E,A]]},R.scale=function(I){return arguments.length?(e=+I,N()):e},R.translate=function(I){return arguments.length?(n=+I[0],r=+I[1],N()):[n,r]},R.center=function(I){return arguments.length?(s=I[0]%360*_e,a=I[1]%360*_e,N()):[s*dn,a*dn]},R.rotate=function(I){return arguments.length?(o=I[0]%360*_e,c=I[1]%360*_e,l=I.length>2?I[2]%360*_e:0,N()):[o*dn,c*dn,l*dn]},R.angle=function(I){return arguments.length?(f=I%360*_e,N()):f*dn},R.reflectX=function(I){return arguments.length?(h=I?-1:1,N()):h<0},R.reflectY=function(I){return arguments.length?(d=I?-1:1,N()):d<0},R.precision=function(I){return arguments.length?(w=qh(C,S=I*I),L()):on(S)},R.fitExtent=function(I,V){return Xh(R,I,V)},R.fitSize=function(I,V){return Wp(R,I,V)},R.fitWidth=function(I,V){return Xp(R,I,V)},R.fitHeight=function(I,V){return qp(R,I,V)};function N(){var I=$p(e,0,0,h,d,f).apply(null,t(s,a)),V=$p(e,n-I[0],r-I[1],h,d,f);return u=Sp(o,c,l),C=La(t,V),_=La(u,C),w=qh(C,S),L()}function L(){return b=T=null,R}return function(){return t=i.apply(this,arguments),R.invert=t.invert&&D,N()}}function Mc(i,t){return[i,t]}Mc.invert=Mc;function $h(){return Yh(Mc).scale(152.63)}function Zh(i){return i}function bc(i){if(i==null)return Zh;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,c){c||(t=e=0);var l=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;l<u;)f[l]=o[l],++l;return f}}function Zp(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function hi(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return Jp(i,e)})}:Jp(i,t)}function Jp(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=wc(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function wc(i,t){var e=bc(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,m=h.length;d<m;++d)f.push(e(h[d],d));u<0&&Zp(f,m)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function c(u){return u.map(o)}function l(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(l)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=c(u.arcs);break;case"MultiPolygon":h=u.arcs.map(c);break;default:return null}return{type:f,coordinates:h}}return l(t)}function Jh(i,t){var e={},n={},r={},s=[],a=-1;t.forEach(function(l,u){var f=i.arcs[l<0?~l:l],h;f.length<3&&!f[1][0]&&!f[1][1]&&(h=t[++a],t[a]=l,t[u]=h)}),t.forEach(function(l){var u=o(l),f=u[0],h=u[1],d,m;if(d=r[f])if(delete r[d.end],d.push(l),d.end=h,m=n[h]){delete n[m.start];var v=m===d?d:d.concat(m);n[v.start=d.start]=r[v.end=m.end]=v}else n[d.start]=r[d.end]=d;else if(d=n[h])if(delete n[d.start],d.unshift(l),d.start=f,m=r[f]){delete r[m.end];var g=m===d?d:m.concat(d);n[g.start=m.start]=r[g.end=d.end]=g}else n[d.start]=r[d.end]=d;else d=[l],n[d.start=f]=r[d.end=h]=d});function o(l){var u=i.arcs[l<0?~l:l],f=u[0],h;return i.transform?(h=[0,0],u.forEach(function(d){h[0]+=d[0],h[1]+=d[1]})):h=u[u.length-1],l<0?[h,f]:[f,h]}function c(l,u){for(var f in l){var h=l[f];delete u[h.start],delete h.start,delete h.end,h.forEach(function(d){e[d<0?~d:d]=1}),s.push(h)}}return c(r,n),c(n,r),t.forEach(function(l){e[l<0?~l:l]||s.push([l])}),s}function Ec(i){return wc(i,Kp.apply(this,arguments))}function Kp(i,t,e){var n,r,s;if(arguments.length>1)n=jy(i,t,e);else for(r=0,n=new Array(s=i.arcs.length);r<s;++r)n[r]=r;return{type:"MultiLineString",arcs:Jh(i,n)}}function jy(i,t,e){var n=[],r=[],s;function a(f){var h=f<0?~f:f;(r[h]||(r[h]=[])).push({i:f,g:s})}function o(f){f.forEach(a)}function c(f){f.forEach(o)}function l(f){f.forEach(c)}function u(f){switch(s=f,f.type){case"GeometryCollection":f.geometries.forEach(u);break;case"LineString":o(f.arcs);break;case"MultiLineString":case"Polygon":c(f.arcs);break;case"MultiPolygon":l(f.arcs);break}}return u(t),r.forEach(e==null?function(f){n.push(f[0].i)}:function(f){e(f[0].g,f[f.length-1].g)&&n.push(f[0].i)}),n}var Ac=Math.PI/180,Ps=i=>{let[t,e,n]=i.split("-").map(Number);return Date.UTC(t,e-1,n)/864e5},Ln={land:"#2a303d",natural:"#a3adc2",soviet:"#9b2c35",bloc:"#6e3a3c",west:"#2d4a6e",neutral:"#4b5160",focus:"#a084ee"},eS=.42,nS="#151925",jp=(i,t,e,n,r=.382)=>{i.beginPath();for(let s=0;s<10;s++){let a=-Math.PI/2+s*Math.PI/5,o=s%2?n*r:n;i.lineTo(t+Math.cos(a)*o,e+Math.sin(a)*o)}i.closePath()},iS={us:{aspect:1.9,at:[52.455,13.255,.2,.27],draw(i,t,e,n,r,s){for(let u=0;u<13;u++)i.fillStyle=u%2?"#ffffff":"#b22234",i.fillRect(t,e+u*r/13,n,r/13+.5);let a=.76*r,o=7*r/13,c=.0308*r;i.fillStyle="#3c3b6e",i.fillRect(t,e,a,o),i.fillStyle="#ffffff";let l=s<"1959-07-04"?Array(6).fill(8):s<"1960-07-04"?Array(7).fill(7):[6,5,6,5,6,5,6,5,6];l.forEach((u,f)=>{let h=l.length===9&&f%2,d=l.length===9?6:u;for(let m=0;m<u;m++)jp(i,t+a*((m+(h?1:.5))/d),e+o*(f+.5)/l.length,c),i.fill()})}},uk:{aspect:2,at:[52.51,13.2,.5,.5],draw(i,t,e,n,r){let s=r/30;i.fillStyle="#012169",i.fillRect(t,e,n,r),i.save(),i.beginPath(),i.rect(t,e,n,r),i.clip(),i.lineCap="butt";for(let[a,o]of[[6*s,"#ffffff"],[2*s,"#c8102e"]])i.strokeStyle=o,i.lineWidth=a,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+r),i.moveTo(t+n,e),i.lineTo(t,e+r),i.stroke();i.restore();for(let[a,o]of[[10*s,"#ffffff"],[6*s,"#c8102e"]])i.fillStyle=o,i.fillRect(t+n/2-a/2,e,a,r),i.fillRect(t,e+r/2-a/2,n,a)}},fr:{aspect:1.5,at:[52.585,13.31,.5,.5],draw(i,t,e,n,r){["#0055a4","#ffffff","#ef4135"].forEach((s,a)=>{i.fillStyle=s,i.fillRect(t+a*n/3,e,n/3+.5,r)})}},su:{aspect:2,at:[52.53,13.475,.135,.3],draw(i,t,e,n,r){i.fillStyle="#cc0000",i.fillRect(t,e,n,r);let s=.24*r,a=t+.27*r,o=e+.36*r,c="#ffd700";i.strokeStyle=c,i.lineWidth=.014*r,i.lineJoin="miter",jp(i,a,e+.12*r,.065*r),i.stroke(),i.lineCap="round",i.lineWidth=.09*s,i.beginPath(),i.arc(a+.04*s,o-.04*s,.4*s,.75*Math.PI,-.8*Math.PI,!0),i.stroke(),i.beginPath(),i.moveTo(a-.24*s,o+.24*s),i.lineTo(a-.42*s,o+.42*s),i.stroke(),i.beginPath(),i.moveTo(a-.36*s,o+.36*s),i.lineTo(a+.16*s,o-.16*s),i.stroke(),i.lineWidth=.15*s,i.lineCap="butt",i.beginPath(),i.moveTo(a+.06*s,o-.3*s),i.lineTo(a+.3*s,o-.06*s),i.stroke()}}},rS={us:[52.43,13.36,"AMERICAN SECTOR"],uk:[52.49,13.19,"BRITISH SECTOR"],fr:[52.6,13.31,"FRENCH SECTOR"],su:[52.47,13.52,"SOVIET SECTOR"]},sS={focus:.4,soviet:.82,bloc:.8,west:.85,neutral:.8},aS="rgba(44, 52, 70, 0.996)",oS="rgba(76, 122, 172, 0.996)",lS=i=>{let t=parseInt(i.slice(1),16),e=n=>Math.round(n+(255-n)*.38);return`rgb(${e(t>>16)},${e(t>>8&255)},${e(t&255)})`},cS="1961-08-13",Qp="1989-11-09",uS="1951-02-01",hS=i=>rc(i)>2*Math.PI?{type:"Polygon",coordinates:i.coordinates.map(t=>t.slice().reverse())}:i,Rs=i=>{let t=i.geometry;if(!t)return i;let e=n=>rc({type:"Polygon",coordinates:n})>2*Math.PI?n.map(r=>r.slice().reverse()):n;return t.type==="Polygon"?i.geometry={type:"Polygon",coordinates:e(t.coordinates)}:t.type==="MultiPolygon"&&(i.geometry={type:"MultiPolygon",coordinates:t.coordinates.map(e)}),i};function tm(i){let t=i.objects.cshapes||i.objects.countries,e=hi(i,t).features.map(s=>Rs({...s,from:s.properties.from?Ps(s.properties.from):-1/0,to:s.properties.to?Ps(s.properties.to):1/0})),n=i.objects.sectors?{sectors:hi(i,i.objects.sectors).features.map(Rs),wall:hi(i,i.objects.wall).features,strip:hi(i,i.objects.strip).features.map(Rs),staaken:i.objects.staaken?hi(i,i.objects.staaken).features.map(Rs):[]}:null,r=i.objects.rivers?{rivers:hi(i,i.objects.rivers).features,lakes:hi(i,i.objects.lakes).features.map(Rs),deep:hi(i,i.objects.deep).features.map(Rs),box:i.waterBox||[-26,33,50,72]}:null;return{countries:e,land:hi(i,i.objects.land),berlin:n,water:r}}var Kh=(i,t)=>{let e=Ps(t==="modern"||!t?"2000-01-01":t);return i.filter(n=>n.from<=e&&e<n.to)};function fS(i,t,e,n=[-180,-90,180,90],r=0){let s=i.getContext("2d"),a=i.width,o=i.height;s.setTransform(1,0,0,-1,0,o);let c=n[2]-n[0]>=360,l=a/((n[2]-n[0])*Ac),u=a/(n[2]-n[0]),f=o/(n[3]-n[1]),h=c?$h().scale(l).translate([-l*n[0]*Ac,l*n[3]*Ac]).precision(.1):Hh({point(b,T){this.stream.point((b-n[0])*u,(n[3]-T)*f)}}),d=Vh(h,s),m=e.fill||{},v=e.borders,g=Kh(t.countries,v),p=(n[2]-n[0])*111.32*Math.cos((n[1]+n[3])/2*Ac)/a,E=c?0:r||.55,A=!c&&t.water,y=p<.05?11:p<.15?9:p<.4?7:p<1?6:p<2.5?5:4;s.clearRect(0,0,a,o);let S=A&&A.box;if(A&&n[0]<S[2]&&n[2]>S[0]&&n[1]<S[3]&&n[3]>S[1]){let b=Math.max(0,(S[0]-n[0])*u),T=Math.min(a,(S[2]-n[0])*u),R=Math.max(0,(n[3]-S[3])*f),D=Math.min(o,(n[3]-S[1])*f);s.fillStyle=aS,s.fillRect(b,R,T-b,D-R),s.globalCompositeOperation="destination-out";for(let N of A.deep)s.beginPath(),d(N),s.fill("evenodd");s.globalCompositeOperation="source-over"}s.fillStyle=v==="none"?Ln.natural:Ln.land,s.beginPath(),d(t.land),s.fill("evenodd"),s.save(),s.clip("evenodd");let w=c?1.5:3;for(let b of g){let T=m[b.properties.key];if(!T)continue;let R=Ln[T]||Ln.land;s.globalAlpha=sS[T]??.8,s.fillStyle=R,s.beginPath(),d(b),s.fill(),s.save(),s.clip(),s.globalAlpha=.5,s.strokeStyle=lS(R),s.lineWidth=w*2,s.lineJoin="round",s.stroke(),s.restore()}if(s.globalAlpha=1,e.city==="berlin"&&t.berlin)for(let b of t.berlin.sectors){let T=iS[b.properties.sector],[[R,D],[N,L]]=d.bounds(b),[I,V,W,lt]=T.at,Z=(V-n[0])*u,rt=(n[3]-I)*f,et=Math.max(N-R,(L-D)*T.aspect),Pt=et/T.aspect,Et=Math.min(R,Math.max(N-et,Z-W*et)),fe=Math.min(D,Math.max(L-Pt,rt-lt*Pt)),Xt=b.properties.sector==="uk"&&v>=uS?t.berlin.staaken:[];s.save(),s.beginPath(),d(b);for(let le of Xt)d(le);s.clip("evenodd"),s.fillStyle=nS,s.fillRect(R,D,N-R,L-D),s.globalAlpha=eS,T.draw(s,Et,fe,et,Pt,v),s.restore()}if(s.restore(),A){let b=A.lakes.filter(D=>D.properties.r<=y),T=A.rivers.filter(D=>D.properties.r<=y),R=()=>{for(let D of b)s.beginPath(),d(D),s.fill("evenodd");s.lineJoin=s.lineCap="round";for(let D of T){let N=D.properties.r;s.lineWidth=(N<=3?2.2:N<=6?1.6:N<=9?1.1:.8)/E,s.beginPath(),d(D),s.stroke()}};s.globalCompositeOperation="destination-out",R(),s.globalCompositeOperation="source-over",s.fillStyle=s.strokeStyle=oS,R()}let C=e.focus||[];if(C.length){s.save(),s.strokeStyle=Ln.focus,s.globalAlpha=.85,s.lineWidth=Math.max(1,a/2600),s.lineJoin="round";for(let b of g)C.includes(b.properties.key)&&(s.beginPath(),d(b),s.stroke());s.restore()}if(e.city==="berlin"&&t.berlin){if(v>=cS){s.fillStyle="rgba(232, 226, 255, 0.34)";for(let b of t.berlin.strip)s.beginPath(),d(b),s.fill()}s.strokeStyle="rgba(255, 255, 255, 0.28)",s.lineWidth=Math.max(1,a/2400);for(let b of t.berlin.sectors)s.beginPath(),d(b),s.stroke();if(!c){s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(255, 255, 255, 0.92)",s.shadowColor="rgba(6, 7, 12, 0.85)";for(let b of t.berlin.sectors){let[T,R,D]=rS[b.properties.sector],N=(R-n[0])*u,L=(n[3]-T)*f;if(N<0||N>a||L<0||L>o)continue;let[[I],[V]]=d.bounds(b),W=Math.min(12/E,.75*(V-I)/(.72*D.length));W*E<6||(s.font=`500 ${W.toFixed(1)}px "Plex Mono", ui-monospace, Menlo, monospace`,s.letterSpacing=`${(W*.12).toFixed(1)}px`,s.shadowBlur=W*.6,s.fillText(D,N,L))}s.letterSpacing="0px",s.shadowBlur=0,s.shadowColor="transparent"}}else if(n[2]-n[0]<360){let b=Math.max(4,Math.round(Math.max(a,o)/220));for(let T of g)(m[T.properties.key]==="focus"||C.includes(T.properties.key))&&(s.save(),s.beginPath(),d(T),s.clip(),s.globalCompositeOperation="lighter",s.filter=`blur(${b}px)`,s.globalAlpha=.35,s.strokeStyle=Ln.focus,s.lineWidth=b*2,s.stroke(),s.restore())}for(let b of e.areas||[]){let T=b.points.map(([R,D])=>[D,R]);(T[0][0]!==T.at(-1)[0]||T[0][1]!==T.at(-1)[1])&&T.push(T[0]),s.fillStyle=Ln[b.fill]||Ln.west,s.beginPath(),d(hS({type:"Polygon",coordinates:[T]})),s.fill()}}function dS(i,t,e,n,r){let s=new Uint8Array(n*r*4),a=n/(e[2]-e[0]),o=r/(e[3]-e[1]),c=Ps(t==="modern"||!t?"2000-01-01":t);return i.countries.forEach((l,u)=>{if(!(l.from<=c&&c<l.to)||!l.geometry)return;let f=u+1,h=f&255,d=f>>8,m=l.geometry.type==="Polygon"?[l.geometry.coordinates]:l.geometry.type==="MultiPolygon"?l.geometry.coordinates:[];for(let v of m){let g=[],p=1/0,E=-1/0,A=1/0,y=-1/0;for(let T of v)for(let R=1;R<T.length;R++){let D=(T[R-1][0]-e[0])*a,N=(T[R-1][1]-e[1])*o,L=(T[R][0]-e[0])*a,I=(T[R][1]-e[1])*o;if(D<A&&(A=D),D>y&&(y=D),N===I)continue;let V=N<I?[N,I,D,(L-D)/(I-N)]:[I,N,L,(D-L)/(N-I)];g.push(V),V[0]<p&&(p=V[0]),V[1]>E&&(E=V[1])}if(!g.length||y<0||A>n||E<0||p>r)continue;g.sort((T,R)=>T[0]-R[0]);let S=Math.max(0,Math.ceil(p-.5)),w=Math.min(r-1,Math.floor(E-.5)),C=0,_=[],b=[];for(let T=S;T<=w;T++){let R=T+.5;for(;C<g.length&&g[C][0]<=R;)_.push(g[C++]);b.length=0;for(let N=_.length-1;N>=0;N--){let L=_[N];if(L[1]<=R){_[N]=_[_.length-1],_.pop();continue}L[0]<=R&&b.push(L[2]+(R-L[0])*L[3])}b.sort((N,L)=>N-L);let D=T*n*4;for(let N=0;N+1<b.length;N+=2){let L=Math.max(0,Math.ceil(b[N]-.5)),I=Math.min(n-1,Math.floor(b[N+1]-.5));for(let V=L;V<=I;V++){let W=D+V*4;s[W]=h,s[W+1]=d,s[W+3]=255}}}}}),s}function jh(i,t,e){let n=performance.now();if(t.kind==="ids")return{ids:dS(i,t.date,t.box,t.W,t.H),ms:performance.now()-n};let r=e(t.W,t.H);return fS(r,i,t.map,t.box,t.css),{canvas:r,ms:performance.now()-n}}var Tc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",nm="float luma(vec3 c){ return dot(c, vec3(.2126, .7152, .0722)); }",pS=`uniform sampler2D uSrc; uniform float uThr; varying vec2 vUv; ${nm}
  void main(){ vec3 c = texture2D(uSrc, vUv).rgb; float l = luma(c), k = .06;
    float s = clamp(l - uThr + k, 0., 2. * k); s = s * s / (4. * k + 1e-4); float w = max(s, l - uThr) / max(l, 1e-4);
    gl_FragColor = vec4(c * w, 1.); }`,mS=`uniform sampler2D uSrc; uniform vec2 uPx; varying vec2 vUv;
  vec3 t(vec2 o){ return texture2D(uSrc, vUv + o * uPx).rgb; }
  void main(){ vec3 c = t(vec2(0)) * .125 + (t(vec2(-1,-1)) + t(vec2(1,-1)) + t(vec2(-1,1)) + t(vec2(1,1))) * .125
    + (t(vec2(-2,0)) + t(vec2(2,0)) + t(vec2(0,-2)) + t(vec2(0,2))) * .0625
    + (t(vec2(-2,-2)) + t(vec2(2,-2)) + t(vec2(-2,2)) + t(vec2(2,2))) * .03125;
    gl_FragColor = vec4(c, 1.); }`,gS=`uniform sampler2D uSrc; uniform vec2 uPx; uniform float uW; varying vec2 vUv;
  vec3 t(vec2 o){ return texture2D(uSrc, vUv + o * uPx).rgb; }
  void main(){ vec3 c = (t(vec2(-1,-1)) + t(vec2(1,-1)) + t(vec2(-1,1)) + t(vec2(1,1))) * .0625
    + (t(vec2(-1,0)) + t(vec2(1,0)) + t(vec2(0,-1)) + t(vec2(0,1))) * .125 + t(vec2(0)) * .25;
    gl_FragColor = vec4(c * uW, 1.); }`,_S=`uniform sampler2D uSrc, uBloom; uniform float uBloomK, uExposure, uShoulder, uGrade, uVignette, uGrain, uDim, uDimSide;
  uniform vec2 uRes; varying vec2 vUv; ${nm}
  float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    vec3 c = texture2D(uSrc, vUv).rgb * uExposure + texture2D(uBloom, vUv).rgb * uBloomK;
    // a soft shoulder on brightness only: below uShoulder nothing changes, above it light rolls off instead of clipping
    float l = luma(c), s = uShoulder;
    float lm = l < s ? l : s + (1. - s) * (1. - exp(-(l - s) / (1. - s)));
    c *= lm / max(l, 1e-5);
    // grade: shadows a touch cooler, highlights a touch warmer; coloured pixels (map fills, data) are left alone
    float chroma = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
    float neutral = 1. - smoothstep(.02, .12, chroma);
    float sh = (1. - smoothstep(0., .25, lm)) * uGrade * neutral, hi = smoothstep(.6, 1., lm) * uGrade * neutral;
    c *= vec3(1. - .5 * sh, 1., 1. + .6 * sh) * vec3(1. + .25 * hi, 1. + .08 * hi, 1. - .2 * hi);
    // the reading grade: the half of the screen behind the panel is a little darker while a panel is read
    if (uDim > 0.) c *= 1. - .12 * uDim * (uDimSide < .5 ? 1. - smoothstep(.36, .56, vUv.x) : 1. - smoothstep(.38, .62, vUv.y));
    vec2 q = vUv - .5; q.x *= uRes.x / uRes.y;
    c *= 1. - uVignette * smoothstep(.35, 1.05, length(q));
    c += (h1(floor(gl_FragCoord.xy)) - .5) * uGrain * (1. - .6 * lm);
    gl_FragColor = vec4(c, 1.);
  }`,xS=i=>{i.userData.srgbOut=!0;let t=i.onBeforeCompile;i.onBeforeCompile=(n,r)=>{t?.call(i,n,r),n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>","gl_FragColor = sRGBTransferOETF( gl_FragColor );")};let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>(e?e():"")+"|srgbOut",i.needsUpdate=!0},Cc=i=>{let t=new Ne(new _r(2,2),i);t.frustumCulled=!1;let e=new pr;return e.add(t),{s:e,m:t}},Rc=new yr(-1,1,1,-1,0,1),Qh=new Wt,vS=new Wt,em=(i,t,e=0)=>new _n(Math.max(1,i),Math.max(1,t),{type:Hn,format:In,minFilter:He,magFilter:He,depthBuffer:e>0,samples:e});function tf(i,{levels:t=5,phone:e=!1,samples:n=null}={}){let r=e?3:t,s=new Re({vertexShader:Tc,fragmentShader:pS,uniforms:{uSrc:{value:null},uThr:{value:.84}},blending:Rn,depthTest:!1}),a=new Re({vertexShader:Tc,fragmentShader:mS,uniforms:{uSrc:{value:null},uPx:{value:new Ft}},blending:Rn,depthTest:!1}),o=new Re({vertexShader:Tc,fragmentShader:gS,uniforms:{uSrc:{value:null},uPx:{value:new Ft},uW:{value:1}},blending:Qi,depthTest:!1,transparent:!0}),c=new Re({vertexShader:Tc,fragmentShader:_S,blending:Rn,depthTest:!1,uniforms:{uSrc:{value:null},uBloom:{value:null},uBloomK:{value:.5},uExposure:{value:1},uShoulder:{value:.8},uGrade:{value:.5},uVignette:{value:0},uGrain:{value:.012},uRes:{value:new Ft(1,1)},uDim:{value:0},uDimSide:{value:0}}}),l=Cc(s),u=Cc(a),f=Cc(o),h=Cc(c),d=null,m=[],v=c.uniforms;return{set bloom(p){v.uBloomK.value=p},get bloom(){return v.uBloomK.value},set exposure(p){v.uExposure.value=p},get exposure(){return v.uExposure.value},set grade(p){v.uGrade.value=p},set shoulder(p){v.uShoulder.value=p},dim(p,E=!1){v.uDim.value=p,v.uDimSide.value=E?1:0},set vignette(p){v.uVignette.value=p},set grain(p){v.uGrain.value=p},setSize(p,E,A){let y=Math.round(p*A),S=Math.round(E*A);d?.dispose(),m.forEach(_=>_.dispose()),d=em(y,S,n??(A>=1.5?2:4)),m=[];let w=y>>1,C=S>>1;for(let _=0;_<r;_++)m.push(em(w,C)),w=Math.max(1,w>>1),C=Math.max(1,C>>1);v.uRes.value.set(y,S)},render(p,E){p.traverse(y=>{let S=y.material;S&&!S.userData.srgbOut&&xS(S)}),i.getClearColor(Qh);let A=i.getClearAlpha();if(i.setClearColor(vS.copy(Qh).convertLinearToSRGB(),A),i.setRenderTarget(d),i.clear(),i.render(p,E),i.setClearColor(Qh,A),v.uBloomK.value>0){s.uniforms.uSrc.value=d.texture,i.setRenderTarget(m[0]),i.render(l.s,Rc);for(let y=1;y<r;y++)a.uniforms.uSrc.value=m[y-1].texture,a.uniforms.uPx.value.set(1/m[y-1].width,1/m[y-1].height),i.setRenderTarget(m[y]),i.render(u.s,Rc);i.autoClear=!1;for(let y=r-1;y>0;y--)o.uniforms.uSrc.value=m[y].texture,o.uniforms.uPx.value.set(1/m[y].width,1/m[y].height),i.setRenderTarget(m[y-1]),i.render(f.s,Rc);i.autoClear=!0}c.uniforms.uSrc.value=d.texture,c.uniforms.uBloom.value=m[0].texture,i.setRenderTarget(null),i.render(h.s,Rc)},dispose(){d?.dispose(),m.forEach(p=>p.dispose()),[s,a,o,c].forEach(p=>p.dispose())}}}var ka={divergent:"#4fd6c4",convergent:"#ff5a4f",collision:"#ffb347",transform:"#c9b3ff"},ir=[[0,"#ff5a4f"],[70,"#ffb347"],[300,"#6fd3ff"],[700,"#8f86ff"]],ef="#ff8a3d",nf={4:"#fff3a3",5:"#ffd166",6:"#ffa94d",7:"#ff7a3d",8:"#ff4f3a",9:"#e0233d",10:"#a3123a"},im={4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X"},yS=`
  attribute vec4 aInfo;                 // magnitude (quakes), depth km, year, type (volcanoes)
  uniform float uKind, uOpacity, uY0, uY1, uNow, uMinMag, uPx, uScale;
  uniform vec4 uTypes;
  uniform vec3 uC0, uC1, uC2, uC3, uVolc;
  varying vec3 vColor; varying float vAlpha;
  vec3 depthColor(float d) {
    if (d < 70.0) return mix(uC0, uC1, d / 70.0);
    if (d < 300.0) return mix(uC1, uC2, (d - 70.0) / 230.0);
    return mix(uC2, uC3, clamp((d - 300.0) / 400.0, 0.0, 1.0));
  }
  void main() {
    float on = uOpacity;
    float size;
    if (uKind < 0.5) {
      on *= step(uMinMag, aInfo.x + 0.001) * step(uY0, aInfo.z) * step(aInfo.z, uY1);
      size = 1.6 + (aInfo.x - 5.5) * 2.6;
      vColor = depthColor(aInfo.y);
      // playing through the years: a quake appears when the clock passes it, flares, then settles
      if (uNow > 0.0) {
        float age = uNow - aInfo.z;
        on *= step(0.0, age);
        float flare = exp(-age * 2.5);
        size *= 1.0 + 2.2 * flare; vColor = mix(vColor, vec3(1.0), flare * 0.6);
      }
    } else {
      float t = aInfo.w;
      on *= t < 0.5 ? uTypes.x : t < 1.5 ? uTypes.y : t < 2.5 ? uTypes.z : uTypes.w;
      size = 7.0; vColor = uVolc;
    }
    vAlpha = on;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on > 0.001 ? size * uPx * uScale : 0.0;
  }`,SS=`
  uniform float uKind;
  varying vec3 vColor; varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord;
    float a;
    if (uKind < 0.5) { float d = length(p - 0.5); a = smoothstep(0.5, 0.36, d); }
    else { // a triangle, point up, with a dark edge so neighbours stay apart
      float y = p.y, w = (y - 0.12) * 0.62;
      float inside = step(0.12, y) * step(y, 0.88) * step(abs(p.x - 0.5), w);
      float edge = step(0.2, y) * step(y, 0.8) * step(abs(p.x - 0.5), w - 0.07);
      if (inside < 0.5) discard;
      gl_FragColor = vec4(mix(vec3(0.05), vColor, edge), vAlpha); return;
    }
    if (a < 0.02) discard;
    gl_FragColor = vec4(vColor, a * vAlpha * 0.9);
  }`;function rm(i,t){let e=t.data.length/(i==="quakes"?5:1),n=new Float32Array(e*3),r=new Float32Array(e*4);for(let l=0;l<e;l++){let u,f,h,d,m,v;if(i==="quakes")[u,f,d,h,m]=t.data.slice(l*5,l*5+5),v=0;else{let p=t.data[l];[u,f]=p,h=0,d=0,m=p[3]||0,v=p[2]}let g=We(f,u,1.0004);n.set([g.x,g.y,g.z],l*3),r.set([h,d,m,v],l*4)}let s=new ze;s.setAttribute("position",new me(n,3)),s.setAttribute("aInfo",new me(r,4));let a=l=>new Wt(l),o=new Re({vertexShader:yS,fragmentShader:SS,transparent:!0,depthWrite:!1,uniforms:{uKind:{value:i==="quakes"?0:1},uOpacity:{value:0},uY0:{value:0},uY1:{value:1e4},uNow:{value:0},uMinMag:{value:0},uPx:{value:1},uScale:{value:1},uTypes:{value:[1,1,1,1]},uC0:{value:a(ir[0][1])},uC1:{value:a(ir[1][1])},uC2:{value:a(ir[2][1])},uC3:{value:a(ir[3][1])},uVolc:{value:a(ef)}}}),c=new gr(s,o);return c.frustumCulled=!1,c.visible=!1,c.renderOrder=3,{obj:c,set(l,u,f,h,d){let m=o.uniforms;if(c.visible=u>.001,m.uOpacity.value=u,!l)return;m.uMinMag.value=l.minMag||0,m.uY0.value=l.years?l.years[0]:0,m.uY1.value=l.years?l.years[1]+1:1e4,m.uNow.value=f,m.uPx.value=h,m.uScale.value=d;let v=l.types;m.uTypes.value=v?[0,1,2,3].map(g=>v.includes(g)?1:0):[1,1,1,1]}}}function sm(i,t){return(t===!0?Object.keys(ka):t).filter(e=>i[e]).map(e=>[e,i[e].map(n=>n.p)])}async function am(i,t){let e=await(await fetch(`${i}${t}.json`)).json(),n=await createImageBitmap(await(await fetch(`${i}${t}.png`)).blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(n.width,n.height):Object.assign(document.createElement("canvas"),{width:n.width,height:n.height})).getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0);let a=s.getImageData(0,0,n.width,n.height).data,o=new Float32Array(n.width*n.height);for(let d=0;d<o.length;d++)o[d]=a[d*4]*65536+a[d*4+1]*256+a[d*4+2]-1e3;let[c,l,u,f]=e.box;return{meta:e,at:(d,m)=>{let v=(m-c)/(u-c)*e.width-.5,g=(f-d)/(f-l)*e.height-.5,p=Math.max(0,Math.min(e.width-2,Math.floor(v))),E=Math.max(0,Math.min(e.height-2,Math.floor(g))),A=Math.max(0,Math.min(1,v-p)),y=Math.max(0,Math.min(1,g-E)),S=e.width;return(o[E*S+p]*(1-A)+o[E*S+p+1]*A)*(1-y)+(o[(E+1)*S+p]*(1-A)+o[(E+1)*S+p+1]*A)*y}}}var om=6371e3,MS=`
  attribute float aH; attribute float aEdge;
  varying float vH; varying float vEdge; varying vec3 vN;
  void main() { vH = aH; vEdge = aEdge; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,bS=`
  uniform vec3 uLight; uniform float uOpacity, uTopo, uContour, uLo, uHi;
  varying float vH; varying float vEdge; varying vec3 vN;
  void main() {
    float t = clamp((vH - uLo) / max(1.0, uHi - uLo), 0.0, 1.0);
    // low ground the natural globe's grey-blue, rising to pale stone and white near the top
    vec3 base = mix(vec3(0.36, 0.40, 0.50), vec3(0.78, 0.76, 0.72), smoothstep(0.0, 0.7, t));
    base = mix(base, vec3(0.97), smoothstep(0.8, 0.98, t));
    float lit = 0.35 + 0.75 * max(0.0, dot(normalize(vN), normalize(uLight)));
    vec3 col = base * mix(lit, 1.0, uTopo * 0.7); // the map flattens the shading
    if (uContour > 0.0) {
      float f = vH / uContour, w = fwidth(f);
      float line = 1.0 - smoothstep(0.0, w * 1.4, abs(fract(f - 0.5) - 0.5));
      float index = 1.0 - step(0.5, abs(mod(floor(f + 0.5), 5.0))); // every fifth line is an index contour
      col = mix(col, vec3(0.55, 0.30, 0.12), line * uTopo * (0.65 + 0.35 * index));
    }
    gl_FragColor = vec4(col, uOpacity * smoothstep(0.0, 0.06, vEdge));
  }`;function lm(i,t,e,n){let{BufferGeometry:r,Float32BufferAttribute:s,Mesh:a,ShaderMaterial:o,Vector3:c}=n,{meta:l,at:u}=i,[f,h,d,m]=l.box,v=Math.min(200,Math.round(l.width/3)),g=Math.round(v*l.height/l.width),p=[],E=[],A=[],y=[];for(let _=0;_<=g;_++)for(let b=0;b<=v;b++){let T=m-_/g*(m-h),R=f+b/v*(d-f),D=u(T,R),N=We(T,R,1+Math.max(0,D)*t/om);p.push(N.x,N.y,N.z),E.push(D),A.push(Math.min(b/v,1-b/v,_/g,1-_/g))}for(let _=0;_<g;_++)for(let b=0;b<v;b++){let T=_*(v+1)+b,R=T+1,D=T+v+1,N=D+1;y.push(T,D,R,R,D,N)}let S=new r;S.setAttribute("position",new s(p,3)),S.setAttribute("aH",new s(E,1)),S.setAttribute("aEdge",new s(A,1)),S.setIndex(y),S.computeVertexNormals();let w=new o({vertexShader:MS,fragmentShader:bS,transparent:!0,depthWrite:!0,uniforms:{uLight:{value:e},uOpacity:{value:0},uTopo:{value:0},uContour:{value:0},uLo:{value:l.min},uHi:{value:l.max}}}),C=new a(S,w);return C.frustumCulled=!1,C.visible=!1,C.renderOrder=2,C}function rf(i,t,e,n,r=240){let s=[],a=[],c=Math.PI/180,u=((f,h)=>6371*Math.acos(Math.min(1,Math.sin(f[0]*c)*Math.sin(h[0]*c)+Math.cos(f[0]*c)*Math.cos(h[0]*c)*Math.cos((h[1]-f[1])*c))))(t,e);for(let f=0;f<=r;f++){let h=f/r,d=t[0]+(e[0]-t[0])*h,m=t[1]+(e[1]-t[1])*h,v=i.at(d,m);s.push(We(d,m,1+(Math.max(0,v)*n+40)/om)),a.push({d:u*h,h:v})}return{pts:s,prof:a,total:u}}var wS=[{name:"Inner core",r0:0,r1:1220,c:"#fff1b8"},{name:"Outer core",r0:1220,r1:3480,c:"#ffb04a"},{name:"Mantle",r0:3480,r1:6250,c:"#d9542f"},{name:"Crust",r0:6250,r1:6371,c:"#a3adc2"}];function cm(i,t){let{BufferGeometry:e,Float32BufferAttribute:n,Mesh:r,MeshBasicMaterial:s,Group:a,Color:o,DoubleSide:c}=t,l=new a;l.visible=!1;let u=[0,1,0],f=v=>{let g=We(0,v);return[g.x,g.y,g.z]},h=(v,g,p,E,A)=>{let y=[];for(let C=0;C<90;C++){let _=C*Math.PI/180,b=(C+1)*Math.PI/180,T=(I,V)=>[0,1,2].map(W=>(Math.cos(I)*v[W]+Math.sin(I)*g[W])*V/6371),R=T(_,p),D=T(_,E),N=T(b,p),L=T(b,E);y.push(...R,...D,...L,...R,...L,...N)}let S=new e;S.setAttribute("position",new n(y,3));let w=new r(S,new s({color:new o(A),side:c,transparent:!0,opacity:1}));return w.frustumCulled=!1,w},d={a:[],b:[],eq:[]};for(let v of wS)d.a.push(h(f(i),u,v.r0,v.r1,v.c)),d.b.push(h(f(i+90),u,v.r0,v.r1,v.c)),d.eq.push(h(f(i),f(i+90),v.r0,v.r1,v.c));let m=new a;return d.b.forEach(v=>m.add(v)),l.add(m),[...d.a,...d.eq].forEach(v=>l.add(v)),{g:l,set(v,g){l.visible=g>.001&&v>.001,m.rotation.y=-(1-v)*Math.PI/2;let p=Math.round(90*v)*6;d.eq.forEach(E=>{E.geometry.setDrawRange(0,p),E.material.opacity=g}),[...d.a,...d.b].forEach(E=>{E.material.opacity=g})}}}var um=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,sf={military:"#ff5a4f",people:"#ffd59a",pressure:"#c9b3ff",capital:"#7ef0c2",trade:"#9db7ff"},of={"iron-curtain":"#dfe6f2",wall:"#ffffff"},ES=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],hm={sequential:["#14243f","#1d4f6e","#1f8a7a","#58c48b","#e8d867","#f59e4c"],diverging:["#d9662f","#b5603d","#5b4a48","#3a3f4c","#3e5878","#3b78bf","#62a8f0"]},fm={sequential:0,diverging:1},AS={NGDP_RPCH:[-8,8,"diverging"],PCPIPCH:[0,15,"sequential"],LUR:[0,20,"sequential"],BCA_NGDPD:[-10,10,"diverging"],GGXCNL_NGDP:[-12,12,"diverging"],GGXWDG_NGDP:[0,150,"sequential"],POLICY_RATE:[0,20,"sequential"],GINI:[25,60,"sequential"],CO2_PC:[0,20,"sequential"]},TS=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16));function Va(i){let[t,e,n]=i.domain?[...i.domain,i.scale||"sequential"]:AS[i.id]||[0,100,"sequential"],r=i.scale||n,s=hm[r].map(TS);return{color:o=>{let c=$e((o-t)/(e-t))*(s.length-1),l=Math.min(s.length-2,Math.floor(c)),u=c-l,f=s[l].map((h,d)=>Math.round(h+(s[l+1][d]-h)*u));return`rgb(${f[0]},${f[1]},${f[2]})`},d0:t,d1:e,kind:r,stops:hm[r]}}function Is(i,t,e){let n=i&&i[t.id];if(!n)return null;let r=n.values[e];if(!r)return null;if(n.months){let[a,o]=String(t.month||`${t.year}-12`).split("-").map(Number),[c,l]=n.months[0].split("-").map(Number),u=(a-c)*12+(o-l);for(;u>=0&&r[u]==null;)u--;return u>=0?r[u]:null}let s=t.year-n.years[0];if(n.latestOnly){for(;s>=0&&r[s]==null;)s--;return s>=0?r[s]:null}return r[s]??null}var af=i=>(Math.abs(i)>=100?Math.round(i):+i.toFixed(1)).toLocaleString("en-GB"),dm=(i,t)=>i&&t&&i.id===t.id&&String(i.domain)===String(t.domain)&&i.scale===t.scale,pm=`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,CS=`
  uniform sampler2D uGA, uDA, uGB, uDB, uRelW, uRelE, uTA, uTB;
  uniform vec4 uBoxA, uBoxB, uRelBox;
#ifdef HAS_DATA
  uniform sampler2D uIGA, uIDA, uIGB, uIDB, uVal, uRamp;
#endif
  uniform vec4 uSlotA, uSlotB;      // x: value row (< 0: no data layer), y: d0, z: d1, w: ramp row
  uniform float uWA, uWB;           // inside each state, how far its values have moved towards the other state's row
  uniform float uMix, uHatch, uLook; uniform vec3 uLight, uOcean, uOceanLift, uRim, uFocus, uCut;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  vec2 lonlat() { return vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0); }
  vec3 lin(vec3 c) { return pow(c, vec3(2.2)); }
#ifdef HAS_DATA
  float idAt(sampler2D t, ivec2 p) { vec4 c = texelFetch(t, p, 0); return floor(c.r * 255.0 + 0.5) + 256.0 * floor(c.g * 255.0 + 0.5); }
  vec2 valAt(float row, float id) { return texelFetch(uVal, ivec2(int(id) - 1, int(row)), 0).rg; }
  vec3 rampAt(float v, vec4 slot) {
    float t = clamp((v - slot.y) / (slot.z - slot.y), 0.0, 1.0);
    return texture2D(uRamp, vec2((t * 255.0 + 0.5) / 256.0, (slot.w + 0.5) / 2.0)).rgb;
  }
  vec3 hatch() {
    float s = step(0.86, fract(dot(vW, vec3(0.71, 0.5, -0.5)) * uHatch));
    return lin(mix(vec3(0.153, 0.173, 0.216), vec3(0.235, 0.259, 0.31), s));
  }
  // colour of one country: its value in this state's row, blended towards the other row by w (same indicator only)
  vec4 dataOf(float id, vec4 own, vec4 other, float w) {
    vec2 a = valAt(own.x, id);
    vec2 b = other.x >= 0.0 && w > 0.0 ? valAt(other.x, id) : a;
    bool ha = a.r > -1e8, hb = b.r > -1e8;
    vec3 c = ha && hb ? rampAt(mix(a.r, b.r, w), own) : mix(ha ? rampAt(a.r, own) : hatch(), hb ? rampAt(b.r, own) : hatch(), w);
    return vec4(c, mix(a.g, b.g, w));
  }
  // four taps, coloured first and filtered after, so borders between colours stay smooth at any zoom
  vec4 dataTex(sampler2D t, vec2 uv, vec4 own, vec4 other, float w, out float cover) {
    vec2 size = vec2(textureSize(t, 0));
    vec2 tc = uv * size - 0.5; vec2 f = fract(tc); ivec2 i0 = ivec2(floor(tc)); ivec2 mx = ivec2(size) - 1;
    vec4 acc = vec4(0.0); cover = 0.0;
    for (int k = 0; k < 4; k++) {
      ivec2 o = ivec2(k & 1, k >> 1);
      float wt = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y);
      float id = idAt(t, clamp(i0 + o, ivec2(0), mx));
      if (id > 0.5) { acc += dataOf(id, own, other, w) * wt; cover += wt; }
    }
    return cover > 0.0 ? acc / cover : vec4(0.0);
  }
  // a state's data layer over its painted colour
  vec4 withData(vec4 col, sampler2D ig, sampler2D id, vec2 q, float inD, vec4 own, vec4 other, float w, out float focus) {
    focus = 0.0;
    if (own.x < 0.0) return col;
    float cg, cd = 0.0;
    vec4 dg = dataTex(ig, vUv, own, other, w, cg), dd = dg;
    if (inD > 0.0) dd = dataTex(id, q, own, other, w, cd);
    float cover = mix(cg, cd, inD); vec4 dat = mix(dg, dd, inD);
    focus = dat.a * cover;
    return vec4(mix(col.rgb, dat.rgb, cover), max(col.a, cover));
  }
#endif
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene
  vec4 state(sampler2D g, sampler2D d, vec4 box, out vec2 q, out float inD) {
    vec4 col = texture2D(g, vUv);
    q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    inD = e > 0.0 ? smoothstep(0.0, 0.05, e) : 0.0;
    if (inD > 0.0) col = mix(col, texture2D(d, q), inD);
    return col;
  }
  // screen pixels across one texel of a texture sampled at uv (large when the camera is much closer than it was made for)
  float spread(vec2 uv, vec2 size) { vec2 t = uv * size; return 1.0 / max(1e-6, max(length(dFdx(t)), length(dFdy(t)))); }
  // shaded relief, faded to its mean where one of its texels would cover more than ~2\u20134 screen pixels: a
  // blurred blob reads as a smudge, not as terrain
  float relief() {
    vec2 q = (lonlat() - uRelBox.xy) / (uRelBox.zw - uRelBox.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float w = texture2D(uRelW, vUv).r;
    float r = e > 0.0 ? mix(w, texture2D(uRelE, q).r, smoothstep(0.0, 0.04, e)) : w;
    // the image's mean (its 1 \xD7 1 mip), so fading out flattens the terrain without changing the overall brightness
    float avg = e > 0.0 ? textureLod(uRelE, q, 12.0).r : textureLod(uRelW, vUv, 12.0).r;
    float px = e > 0.0 ? spread(q, vec2(textureSize(uRelE, 0))) : spread(vUv, vec2(textureSize(uRelW, 0)));
    return mix(r, avg, smoothstep(1.5, 4.0, px));
  }
  // the state's own shaded terrain (Copernicus DEM tiles) where it has some, else the base relief. Like the base relief it
  // fades out where one of its texels would cover more than a few screen pixels, and towards the edges of its box
  float terrain(sampler2D t, vec4 box, float base) {
    vec2 q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    if (e <= 0.0) return base;
    vec4 c = texture2D(t, q);
    float r = mix(c.r, 0.75, smoothstep(2.0, 5.0, spread(q, vec2(textureSize(t, 0)))));
    return mix(base, r, c.a * smoothstep(0.0, 0.03, e));
  }
  void main() {
    // the Earth cut open (uCut: first longitude, how far open 0..1, on): the northern octant from there is removed
    if (uCut.z > 0.5) { vec2 q = lonlat(); if (q.y > 0.0 && mod(q.x - uCut.x + 360.0, 360.0) < 90.0 * uCut.y) discard; }
    float fa = 0.0, fb = 0.0, ia, ib; vec2 qa, qb;
    vec4 a = state(uGA, uDA, uBoxA, qa, ia);
    vec4 b = uMix > 0.0 ? state(uGB, uDB, uBoxB, qb, ib) : a;
#ifdef HAS_DATA
    a = withData(a, uIGA, uIDA, qa, ia, uSlotA, uSlotB, uWA, fa);
    if (uMix > 0.0) b = withData(b, uIGB, uIDB, qb, ib, uSlotB, uSlotA, uWB, fb); else b = a;
#endif
    if (uMix <= 0.0) fb = fa;
    vec4 land = mix(a, b, uMix);
    float focus = mix(fa, fb, uMix);
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float lit = 0.42 + 0.58 * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
    float base = relief();
    float rel = mix(terrain(uTA, uBoxA, base), terrain(uTB, uBoxB, base), uMix);
    float shade = clamp(0.2 + 0.93 * rel, 0.48, 1.24);
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    vec3 ocean = mix(uOcean, uOceanLift, 0.5 + 0.5 * n.y) * (0.75 + 0.25 * lit);
    vec3 lc = land.rgb * (1.0 + 0.28 * focus) + uFocus * 0.06 * focus;
    // land (alpha 255) takes the terrain shading; painted water (shelf, lakes, rivers: alpha 254) is lit by the globe only
    float water = step(0.5, land.a) * (1.0 - smoothstep(0.9965, 0.999, land.a));
    vec3 col = mix(ocean, mix(lc * lit * shade, land.rgb * (0.8 + 0.2 * lit), water), clamp(land.a / 0.996, 0.0, 1.0));
    // a fine film grain on land, one device pixel per grain, so large fills read as a surface and not as plastic
    float grain = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
    col *= 1.0 + (grain - 0.5) * 0.05 * land.a;
    if (uLook > 0.5) {
      // the light's look (design plan \xA78.3): the sun glints on open water and painted water, its roughness swaying
      // slowly like wind on the sea, and the rim glows only on the lit side
      vec3 L = normalize(uLight), hv = normalize(L + v);
      float wm = max(1.0 - clamp(land.a / 0.996, 0.0, 1.0), water);
      vec2 g = vUv * vec2(720.0, 360.0);
      float wind = fract(sin(dot(floor(g), vec2(127.1, 311.7))) * 43758.5453);
      float a = 0.11 + 0.06 * wind, a2 = a * a, nh = max(dot(n, hv), 0.0);
      float D = a2 / (3.14159 * pow(nh * nh * (a2 - 1.0) + 1.0, 2.0));
      float F = 0.02 + 0.98 * pow(1.0 - max(dot(v, hv), 0.0), 5.0);
      col += vec3(1.0, 0.95, 0.86) * D * F * max(dot(n, L), 0.0) * 0.22 * wm;
      col += uRim * rim * 0.55 * (0.3 + 0.7 * smoothstep(-0.3, 0.5, dot(n, L)));
    } else col += uRim * rim * 0.55;
    gl_FragColor = vec4(col, 1.0);
  }`,RS=`
  uniform vec3 uRim, uLight; uniform float uLook; varying vec3 vN; varying vec3 vW;
  void main() {
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float f = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 2.4);
    if (uLook > 0.5) {
      // one scattering, cheaply: bright where the sun is, a warm band at the day's edge, a thin bright limb
      float sun = dot(n, normalize(uLight));
      float day = smoothstep(-0.35, 0.3, sun), edge = exp(-pow((sun + 0.05) / 0.18, 2.0));
      vec3 c = mix(uRim, vec3(1.0, 0.62, 0.4), edge * 0.55);
      gl_FragColor = vec4(c * (1.0 + 0.6 * pow(f, 6.0)), f * 0.9 * mix(0.22, 1.1, day));
    } else gl_FragColor = vec4(uRim, f * 0.9);
  }`,PS=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,IS=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float head = smoothstep(uDraw - 0.12, uDraw, vUv.x);
    gl_FragColor = vec4(uColor * (1.0 + head * 0.6), uOpacity * (0.8 + 0.45 * head));
  }`;function LS(i,t=1.0015){let e=[];for(let r of i)for(let s=1;s<r.length;s++){let a=r[s-1],o=r[s];if(Math.abs(a[0]-o[0])>180)continue;let c=We(a[1],a[0],t),l=We(o[1],o[0],t);e.push(c.x,c.y,c.z,l.x,l.y,l.z)}let n=new ze;return n.setAttribute("position",new me(e,3)),n}var Pc=(i,t,e)=>{let n=LS(i,1).getAttribute("position").array,r=new Ar({color:t,linewidth:e,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),s=new Aa(new Er().setPositions(n),r);return s.frustumCulled=!1,s},DS=i=>{let t=i.geometry;return t?(t.type==="Polygon"?[t.coordinates]:t.type==="MultiPolygon"?t.coordinates:[]).flat():[]};function US(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n];if(!n){e.push(We(r[0],r[1],t));continue}let s=i[n-1],a=pc([s[1],s[0]],[r[1],r[0]]),o=Math.max(1,Math.ceil(dc([s[1],s[0]],[r[1],r[0]])/.002));for(let c=1;c<=o;c++){let[l,u]=a(c/o);e.push(We(u,l,t))}}return e}var lf=(i,t=0)=>new Re({uniforms:{uColor:{value:new Wt(i)},uDraw:{value:0},uOpacity:{value:0},uDash:{value:t},uTime:{value:0}},vertexShader:PS,fragmentShader:IS,transparent:!0,depthWrite:!1,blending:Qi});function mm(i,t,e,n){let r=[i[1],i[0]],s=[t[1],t[0]],a=pc(r,s),o=dc(r,s),c=$e(o*.22,2e-5,.07),l=[];for(let g=0;g<=48;g++){let p=g/48,[E,A]=a(p);l.push(We(A,E,1.002+Math.sin(Math.PI*p)*c))}let u=$e(n/Si*.0032,6e-5,.004),f=new Yi(l),h=lf(e),d=new Ne(new vr(f,96,u,6,!1),h),m=new Ne(new ra(u*3.2,u*9,10),new Di({color:e,transparent:!0,opacity:0,depthWrite:!1}));m.position.copy(f.getPointAt(1)),m.quaternion.copy(new Bn().setFromUnitVectors(new U(0,1,0),f.getTangentAt(1)));let v=new On;return v.add(d,m),v.userData={mat:h,head:m},v}var NS=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,FS=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float h = vUv.y;
    vec3 c = uColor * (0.45 + 0.55 * h) + vec3(0.35) * smoothstep(0.82, 1.0, h);
    gl_FragColor = vec4(c, uOpacity * (0.7 + 0.3 * h));
  }`;function OS(i,t,e,n){let r=[],s=[],a=[];for(let u of i){if(u.properties.kind!==t||!u.geometry)continue;let f=u.geometry.type==="LineString"?[u.geometry.coordinates]:u.geometry.type==="MultiLineString"?u.geometry.coordinates:[];for(let h of f){if(h.length<2)continue;let d=[0];for(let g=1;g<h.length;g++)d.push(d[g-1]+Math.hypot((h[g][0]-h[g-1][0])*.61,h[g][1]-h[g-1][1]));let m=d.at(-1)||1,v=r.length/3;h.forEach(([g,p],E)=>{let A=We(p,g,1.000002),y=We(p,g,1+e/Si);if(r.push(A.x,A.y,A.z,y.x,y.y,y.z),s.push(d[E]/m,0,d[E]/m,1),E){let S=v+(E-1)*2;a.push(S,S+1,S+2,S+1,S+3,S+2)}})}}if(!r.length)return null;let o=new ze;o.setAttribute("position",new me(r,3)),o.setAttribute("uv",new me(s,2)),o.setIndex(a);let c=new Re({uniforms:{uColor:{value:new Wt(t==="front"?of.wall:"#a99be0")},uDraw:{value:0},uOpacity:{value:0},uDash:{value:n},uTime:{value:0}},vertexShader:NS,fragmentShader:FS,transparent:!0,depthWrite:!1,side:Vn}),l=new Ne(o,c);return l.frustumCulled=!1,l}function BS(i,t,e){let n=new Map,r=null,s="main";if(!!t&&typeof Worker<"u"&&typeof OffscreenCanvas<"u"&&(()=>{try{return!!new OffscreenCanvas(1,1).getContext("2d")}catch{return!1}})())try{r=new Worker(new URL("./world-paint.js",import.meta.url),{type:"module"}),s="worker",r.onmessage=({data:d})=>{if(d.failed||d.ready){d.failed&&o();return}let m=n.get(d.key);n.delete(d.key),m&&e(m,d.bitmap?{bitmap:d.bitmap}:{ids:d.ids},d.ms,"worker")},r.onerror=o,r.postMessage({type:"init",url:new URL(t,location.href).href,focus:Ln.focus})}catch{r=null,s="main"}function o(){if(s!=="main"){s="main";try{r.terminate()}catch{}for(let d of n.values())f(d)}}let c=d=>window.requestIdleCallback?requestIdleCallback(d,{timeout:400}):setTimeout(d,16),l=[],u=!1;function f(d){l.push(d),h()}function h(){u||!l.length||(u=!0,c(()=>{let d=l.shift();if(u=!1,n.has(d.key)){n.delete(d.key);let m=jh(i,d,(v,g)=>{let p=document.createElement("canvas");return p.width=v,p.height=g,p});e(d,m.ids?{ids:m.ids}:{canvas:m.canvas},m.ms,"main")}h()}))}return{get mode(){return s},has:d=>n.has(d),request(d,m=!1){n.has(d.key)||(n.set(d.key,d),s==="worker"?r.postMessage(d):m?(l.unshift(d),h()):f(d))},now(d){let m=jh(i,d,(v,g)=>{let p=document.createElement("canvas");return p.width=v,p.height=g,p});e(d,m.ids?{ids:m.ids}:{canvas:m.canvas},m.ms,"main")},destroy(){r&&r.terminate()}}}async function TT(i,{scenes:t,hero:e,data:n,dataUrl:r,relief:s,terrain:a=null,layers:o=null,light:c="fixed",values:l=null,accent:u=null,reduced:f=!1,look:h=0,dprCap:d=null,onFrame:m}={}){u&&(Ln.focus=u);let v=document.createElement("canvas");v.className="world__canvas",i.appendChild(v);let g;try{g=new Jl({canvas:v,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return v.remove(),null}g.setClearColor(329226,1);let p=matchMedia("(max-width: 760px)").matches,E=new pr,A=new sn(32,1,5e-4,100),y=new On;E.add(y);let S={paints:[],boxes:{},frames:0,skipped:0,frameMs:0,worstFrameMs:0,painter:""},w=!0,C=tm(n),{countries:_,berlin:b}=C,T=new Map(_.filter(k=>k.properties.lat!=null).map(k=>[k.properties.key,k.properties])),R=k=>k<0?e:t[k],D={};{let k=new Set;for(let q of[e,...t]){for(let H of q.map.points||[])k.add(H.id);q.map.plates&&k.add("plates"),q.map.isolines&&o&&o.shake&&(o[`shake:${q.map.isolines.id}`]=`${o.shake}${q.map.isolines.id}.json`,k.add(`shake:${q.map.isolines.id}`))}await Promise.all([...k].filter(q=>o&&o[q]).map(async q=>{try{D[q]=await(await fetch(o[q])).json()}catch{}}))}let N=k=>!!(l&&k&&k.map.data&&l[k.map.data.id]),L=_.length,I=t.length+1,V=new Float32Array(L*I*2).fill(-1e9);[e,...t].forEach((k,q)=>{if(!N(k))return;let H=new Set(k.map.focus||[]);_.forEach((J,ht)=>{let nt=Is(l,k.map.data,J.properties.key),K=(q*L+ht)*2;V[K]=nt??-1e9,V[K+1]=H.has(J.properties.key)?1:0})});let W=new si(V,L,I,gi,Pn);W.minFilter=W.magFilter=Ye,W.needsUpdate=!0;let lt=new Uint8Array(256*2*4);for(let[k,q]of Object.entries(fm)){let H=Va({id:"",domain:[0,255],scale:k});for(let J=0;J<256;J++){let[ht,nt,K]=H.color(J).match(/\d+/g).map(Number),ot=(q*256+J)*4;lt.set([ht,nt,K,255],ot)}}let Z=new si(lt,256,2);Z.colorSpace=gn,Z.minFilter=Z.magFilter=He,Z.needsUpdate=!0;let rt=k=>{let q=R(k);if(!N(q))return new ee(-1,0,1,0);let H=Va(q.map.data);return new ee(k+1,H.d0,H.d1,fm[H.kind])},et=2048,Pt=Math.min(p?2048:4096,g.capabilities.maxTextureSize),Et=p?2048*1280:4096*2560,fe=p?.5:.55,Xt=[i.clientWidth||innerWidth,i.clientHeight||innerHeight],le=(k,q)=>`${Math.round(k/120)}x${Math.round(q/120)}`,Q=(p?96:320)*2**20,st=new Map,Ct=g.capabilities.getMaxAnisotropy(),$t=(k,q)=>{let H;return q.ids?(H=new si(q.ids,k.W,k.H),H.minFilter=H.magFilter=Ye,H.generateMipmaps=!1):(H=q.bitmap?new an(q.bitmap):new as(q.canvas),H.colorSpace=gn,H.anisotropy=Ct,H.minFilter=$n,H.generateMipmaps=!0),H.flipY=!1,H.needsUpdate=!0,H},bt=BS(C,r,(k,q,H,J)=>{st.set(k.key,{tex:$t(k,q),used:performance.now(),bytes:k.W*k.H*4*(q.ids?1:4/3)}),S.paints.push({kind:k.kind,ms:Math.round(H),where:J,size:`${k.W}x${k.H}`}),ie(),w=!0});S.painter=bt.mode;function ie(){let k=0;for(let q of st.values())k+=q.bytes;if(!(k<=Q))for(let[q,H]of[...st.entries()].sort((J,ht)=>J[1].used-ht[1].used)){if(k<=Q||st.size<=4)break;H.tex.dispose(),st.delete(q),k-=H.bytes}}let Xe=k=>{let q=R(k),H=N(q),J={borders:q.map.borders,fill:q.map.fill,city:H?null:q.map.city,areas:q.map.areas,focus:H?[]:q.map.focus},{lat:ht,lon:nt}=q.camera,K=ap(q.camera,Xt[0],Xt[1]),ot=K.box||[nt-75,Math.max(-89.5,ht-60),nt+75,Math.min(89.5,ht+60)],ut=op(ot,Math.max(.003,(K.kmPerPx||40)*fe),Pt,Et);S.boxes[k]={box:ot.map(Pe=>+Pe.toFixed(2)),size:`${ut.W}x${ut.H}`,texelKm:+ut.texelKm.toFixed(3),kmPerPx:+K.kmPerPx.toFixed(3)};let Gt=Pe=>+Pe.toFixed(3),Ht=`${ot.map(Gt).join(",")}|${ut.W}x${ut.H}`,se={g:{kind:"paint",key:`g|${JSON.stringify({...J,city:null})}`,map:{...J,city:null},box:[-180,-90,180,90],W:et,H:et/2},d:{kind:"paint",key:`d|${JSON.stringify(J)}|${Ht}`,map:J,box:ot,W:ut.W,H:ut.H,css:ut.texelKm/Math.max(1e-6,K.kmPerPx||ut.texelKm)}};return H&&(se.ig={kind:"ids",key:`ig|${J.borders}`,date:J.borders,box:[-180,-90,180,90],W:et,H:et/2},se.id={kind:"ids",key:`id|${J.borders}|${Ht}`,date:J.borders,box:ot,W:ut.W,H:ut.H}),{jobs:se,box:new ee(...ot),kmPerPx:K.kmPerPx}},te=new Map,ce=k=>(te.has(k)||te.set(k,Xe(k)),te.get(k));function be(k,q=!1){let H=ce(k),J={box:H.box},ht=performance.now(),nt=!0;for(let[K,ot]of Object.entries(H.jobs)){let ut=st.get(ot.key);ut?(ut.used=ht,J[K]=ut.tex):(nt=!1,bt.request(ot,q))}return nt?J:null}let kt=new si(new Uint8Array(4),1,1);kt.needsUpdate=!0;let ke=await(async k=>{let q=k?await fetch(k).then(H=>H.ok?H.json():null).catch(()=>null):null;return q?{...q,base:new URL(".",new URL(k,location.href)),levels:q.levels.map(H=>({...H,has:new Set(H.tiles)}))}:null})(a),ln=ke?ke.levels:[],De=new Set;async function Ve(k,q,[H,J,ht,nt],K,ot){let ut=document.createElement("canvas");ut.width=K,ut.height=ot;let Gt=ut.getContext("2d");Gt.imageSmoothingQuality="high";let Ht=!1,Se=K/(ht-H);for(let se of q){if(se!==q[0]&&se.ppd>Se*3)continue;let Pe=[];for(let Yt=Math.floor((H+180)/se.deg);Yt<=Math.floor((ht+180)/se.deg);Yt++)for(let Ut=Math.floor((J+90)/se.deg);Ut<=Math.floor((nt+90)/se.deg);Ut++)se.has.has(`${Yt}_${Ut}`)&&Pe.push([Yt,Ut]);let Me=await Promise.all(Pe.map(([Yt,Ut])=>fetch(new URL(`${se.z}/${Yt}_${Ut}.jpg`,k)).then(zt=>zt.blob()).then(zt=>createImageBitmap(zt)).catch(()=>null)));Pe.forEach(([Yt,Ut],zt)=>{let Ie=Me[zt];if(!Ie)return;let Le=Yt*se.deg-180,Ge=(Ut+1)*se.deg-90,Tn=Math.floor((Le-H)/(ht-H)*K),Nr=Math.ceil((Le+se.deg-H)/(ht-H)*K),or=Math.floor((nt-Ge)/(nt-J)*ot),Xn=Math.ceil((nt-Ge+se.deg)/(nt-J)*ot);Gt.drawImage(Ie,Tn,or,Nr-Tn,Xn-or),Ie.close(),Ht=!0})}return Ht?ut:null}let z=(k,q,H,J)=>{let ht=new as(k);ht.minFilter=$n,ht.anisotropy=Ct,st.set(q,{tex:ht,used:performance.now(),bytes:H*J*4*4/3}),ie(),w=!0};function Ze(k){if(!ln.length)return null;let q=R(k),H=ce(k);if(q.camera.alt>2500)return null;let J=H.kmPerPx&&H.kmPerPx<.45,ht=ln.filter(Yt=>Yt.z<=1||J&&Yt.z===2).sort((Yt,Ut)=>Yt.ppd-Ut.ppd),nt=ht.at(-1),[K,ot,ut,Gt]=H.box.toArray(),Ht=Math.min(1,2048/((ut-K)*nt.ppd),2048/((Gt-ot)*nt.ppd)),Se=Math.max(64,Math.round((ut-K)*nt.ppd*Ht)),se=Math.max(64,Math.round((Gt-ot)*nt.ppd*Ht)),Pe=`t|${H.box.toArray().map(Yt=>Yt.toFixed(3)).join(",")}|${nt.z}|${Se}x${se}`,Me=st.get(Pe);return Me?(Me.used=performance.now(),Me.tex):(De.has(Pe)||(De.add(Pe),Ve(ke.base,ht,[K,ot,ut,Gt],Se,se).then(Yt=>{De.delete(Pe),Yt&&z(Yt,Pe,Se,se)})),null)}let ge=new si(new Uint8Array([219,219,219,255]),1,1);ge.needsUpdate=!0;let P=new U(-.6,.55,.9),x=new Wt("#8f86ff"),O={uGA:{value:null},uDA:{value:null},uGB:{value:null},uDB:{value:null},uIGA:{value:kt},uIDA:{value:kt},uIGB:{value:kt},uIDB:{value:kt},uVal:{value:W},uRamp:{value:Z},uSlotA:{value:new ee(-1,0,1,0)},uSlotB:{value:new ee(-1,0,1,0)},uWA:{value:0},uWB:{value:1},uBoxA:{value:new ee},uBoxB:{value:new ee},uRelW:{value:ge},uRelE:{value:ge},uTA:{value:kt},uTB:{value:kt},uQA:{value:kt},uQB:{value:kt},uQBoxA:{value:new ee},uQBoxB:{value:new ee},uRelBox:{value:new ee(...s?.europeBox||[0,0,1,1])},uMix:{value:0},uHatch:{value:60},uLook:{value:h?1:0},uLight:{value:P},uCut:{value:new U(0,0,0)},uOcean:{value:new Wt("#06080d")},uOceanLift:{value:new Wt("#0c1220")},uRim:{value:x},uFocus:{value:new Wt(Ln.focus)}};if(s){let k=new ca,q=H=>(H.minFilter=$n,H.anisotropy=Ct,H);k.load(s.world,H=>{O.uRelW.value=q(H),w=!0}),k.load(s.europe,H=>{O.uRelE.value=q(H),w=!0})}let $=new Ne(p?new xr(1,384,192):new xr(1,512,256),new Re({uniforms:O,vertexShader:pm,fragmentShader:CS,defines:{...l?{HAS_DATA:""}:{}}}));$.rotation.y=-Math.PI/2;let j=new Ne(new xr(1.06,96,64),new Re({uniforms:{uRim:{value:x},uLight:{value:P},uLook:{value:h?1:0}},vertexShader:pm,fragmentShader:RS,side:cn,transparent:!0,blending:Qi,depthWrite:!1}));y.add($,j);{let q=new Float32Array(5400);for(let J=0;J<1800;J++){let ht=new U().randomDirection().multiplyScalar(30+Math.random()*30);q.set([ht.x,ht.y,ht.z],J*3)}let H=new ze;H.setAttribute("position",new me(q,3)),E.add(new gr(H,new Re({vertexShader:"void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.75,0.72,1.0,0.35); }",transparent:!0,depthWrite:!1})))}let ft=new Map,gt=n.objects.cshapes||n.objects.countries,tt=k=>{if(k==="none")return null;if(ft.has(k))return ft.get(k);let q=ht=>!ht.properties||!ht.properties.from||!k||k==="modern"||ht.properties.from<=k&&k<ht.properties.to,H=Ec(n,gt,(ht,nt)=>ht!==nt&&q(ht)&&q(nt)).coordinates,J=Pc(H,l?"#0b0e15":"#c8cde0",1.25);return y.add(J),ft.set(k,J),J},at=new Map,mt=new Map,Nt=k=>{if(k<0||k>=t.length)return null;if(mt.has(k))return mt.get(k);let q=t[k],H=new On,J=[];if((q.map.arrows||[]).forEach(K=>{let ot=mm(K.from,K.to,sf[K.kind]||"#fff",q.camera.alt);H.add(ot),J.push({type:"arrow",m:ot})}),(q.map.flows||[]).forEach(K=>{let ot=T.get(K.from),ut=T.get(K.to);if(!ot||!ut)return;let Gt=mm([ot.lat,ot.lon],[ut.lat,ut.lon],sf[K.kind]||sf.capital,q.camera.alt);H.add(Gt),J.push({type:"arrow",m:Gt,flow:!0})}),q.map.plates&&D.plates)for(let[K,ot]of sm(D.plates,q.map.plates)){let ut=Pc(ot,ka[K],1.8);H.add(ut),J.push({type:"outline",m:ut,mat:ut.material})}let ht=q.map.isolines&&D[`shake:${q.map.isolines.id}`];if(ht)for(let[K,ot]of Object.entries(ht.levels)){let ut=Pc(ot,nf[K]||"#fff",+K>=8?2.2:1.6);H.add(ut),J.push({type:"outline",m:ut,mat:ut.material})}if(N(q)&&(q.map.focus||[]).length){let K=Kh(_,q.map.borders).filter(ut=>q.map.focus.includes(ut.properties.key)).flatMap(DS),ot=Pc(K,Ln.focus,2);H.add(ot),J.push({type:"outline",m:ot,mat:ot.material})}(q.map.lines||[]).forEach(K=>{if(K.kind==="wall"&&b){let Pe=q.map.borders>=Qp,Me=$e(q.camera.alt*.006,.08,.5);for(let Yt of["front","rear"]){let Ut=OS(b.wall,Yt,Yt==="front"?Me:Me*.6,Pe?7:0);Ut&&(H.add(Ut),J.push({type:"line",m:Ut,mat:Ut.material,k:Yt==="front"?1:.55,dash:Pe}))}return}if(K.kind==="iron-curtain"){if(!n.objects.cshapes)return;let Pe=Ps(q.map.borders),Me=Le=>Le.properties.from<=q.map.borders&&q.map.borders<Le.properties.to,Yt=["FRG","AUT"],Ut=["GDR","CSK","HUN"],zt=Ec(n,n.objects.cshapes,(Le,Ge)=>Le!==Ge&&Me(Le)&&Me(Ge)&&(Yt.includes(Le.properties.key)&&Ut.includes(Ge.properties.key)||Ut.includes(Le.properties.key)&&Yt.includes(Ge.properties.key))),Ie=$e(q.camera.alt/Si*.0021,12e-6,.003);for(let Le of zt.coordinates){if(Le.length<2||!Pe)continue;let Ge=Le.map(([Xn,Xa])=>We(Xa,Xn,1.0008)),Tn=0;for(let Xn=1;Xn<Ge.length;Xn++)Tn+=Ge[Xn].distanceTo(Ge[Xn-1]);let Nr=lf(of["iron-curtain"],Math.max(6,Tn*1800)),or=new Ne(new vr(new Yi(Ge,!1,"centripetal"),Math.min(1600,Ge.length*3),Ie,5,!1),Nr);H.add(or),J.push({type:"line",m:or,mat:Nr,k:1,dash:!0})}return}let ot=K.kind==="wall",ut=US(K.points,ot?1.00003:1.0008),Gt=K.points[0][0]===K.points.at(-1)[0]&&K.points[0][1]===K.points.at(-1)[1],Ht=$e(q.camera.alt/Si*(ot?.0016:.0021),12e-6,.003),Se=lf(of[K.kind]||"#fff",ot?0:90),se=new Ne(new vr(new Yi(ut,Gt,"centripetal"),Math.min(1200,ut.length*3),Ht,5,!1),Se);H.add(se),J.push({type:"line",m:se,mat:Se,k:1,dash:!ot})}),H.visible=!1,y.add(H);let nt={g:H,items:J};return mt.set(k,nt),nt},yt=(k,q,H,J)=>{let ht=Nt(k);if(!ht)return!1;ht.g.visible=H>.001;let nt=at.has(t[k].panel)?at.get(t[k].panel):1,K=!1;return ht.items.forEach((ot,ut)=>{if(ot.type==="arrow"){let Gt=$e(q*1.25-ut*.12)*(ot.flow?nt:1);ot.m.userData.mat.uniforms.uDraw.value=f?ot.flow?nt>.5?1:0:1:Gt,ot.m.userData.mat.uniforms.uOpacity.value=H,ot.m.userData.head.material.opacity=H*li(.92,1,ot.m.userData.mat.uniforms.uDraw.value)}else ot.type==="outline"?(ot.mat.opacity=H*.9,ot.mat.resolution=St,ot.m.scale.setScalar(It)):(ot.mat.uniforms.uDraw.value=f?1:$e(q*1.1),ot.mat.uniforms.uOpacity.value=H*.95*ot.k,ot.mat.uniforms.uTime.value=J,ot.dash&&H>.001&&!f&&(K=!0))}),K},pt=[...T.keys()],Tt=new ta(new ls(1,1,1,10,1,!1).translate(0,.5,0),new Di({color:"#ffffff",transparent:!0,opacity:.92,depthWrite:!0}),Math.max(1,pt.length));Tt.instanceMatrix.setUsage(Lu),Tt.frustumCulled=!1,Tt.visible=!1,y.add(Tt);let Bt=pt.map(k=>{let q=T.get(k);return We(q.lat,q.lon).normalize()}),Zt=new Map,B=k=>{if(Zt.has(k))return Zt.get(k);let q=R(k),H=q.map.spikes,J=new Float32Array(pt.length);if(H&&l){let nt=Va(H).d1;pt.forEach((K,ot)=>{let ut=Is(l,H,K);J[ot]=ut==null||ut<=0?0:Math.min(1.4,ut/nt)})}let ht={h:J,on:!!H,alt:q.camera.alt,spec:H};return Zt.set(k,ht),ht},_t=new Ee,it=new Bn,xt=new U,Mt=new U,ct=new U(0,1,0),Ot=new Wt,Dt=new Wt("#ffffff"),Te="";function ve(k,q,H,J){let ht=B(k),nt=B(q),K=(ht.on?1-H:0)+(nt.on?H:0);if(Tt.visible=K>.01,!Tt.visible)return;let ot=`${k}|${q}|${H.toFixed(4)}|${Math.round(J)}`;if(ot===Te)return;Te=ot;let ut=.3,Gt=$e(Math.sqrt(J/6e3)*.0032,.0012,.006);pt.forEach((Ht,Se)=>{let se=ht.on?ht.h[Se]:0,Pe=nt.on?nt.h[Se]:0,Me=(se+(Pe-se)*H)*K,Yt=Bt[Se];it.setFromUnitVectors(ct,Yt),xt.copy(Yt).multiplyScalar(1.0006),Mt.set(Gt,Math.max(1e-6,Me*ut),Gt),_t.compose(xt,it,Mt),Tt.setMatrixAt(Se,_t),Ot.set(Ln.focus).lerp(Dt,$e(Me/Math.max(K,.001)/1.2)*.7),Tt.setColorAt(Se,Ot)}),Tt.instanceMatrix.needsUpdate=!0,Tt.instanceColor&&(Tt.instanceColor.needsUpdate=!0)}let Dn=.8,Wn=Object.fromEntries(["quakes","volcanoes"].filter(k=>D[k]).map(k=>{let q=rm(k,D[k]);return y.add(q.obj),[k,q]})),Pr=(k,q)=>k&&(k.map.points||[]).find(H=>H.id===q),rr=null,Ni=null;function Ls(k,q,H,J,ht){let nt=!1;rr=null;let K=$e(1.15-Math.log10(ht/6e3)*.35,.8,1.8),ot=g.getPixelRatio(),ut=!1;for(let[Gt,Ht]of Object.entries(Wn)){let Se=Pr(k,Gt),se=Pr(q,Gt),Pe=(Se?1-H:0)+(se?H:0),Me=H<.5?Se||se:se||Se,Yt=0;if(Me&&Me.play&&!f&&Pe>.001){let[Ut,zt]=Me.years||[2e3,2025];Ni==null&&(Ni=J);let Ie=zt-Ut+4,Le=(J-Ni)*Dn;Yt=Ut+Le%Ie,nt=!0,ut=!0,rr=Math.min(zt,Math.floor(Yt))}Ht.set(Me,Pe,Yt,ot,K)}return ut||(Ni=null),nt}let Ga={BufferGeometry:ze,Float32BufferAttribute:me,Mesh:Ne,ShaderMaterial:Re,MeshBasicMaterial:Di,Group:On,Color:Wt,DoubleSide:Vn,Vector3:U},Ir=new Map,Fi=new Map,Jn=k=>(Ir.has(k)||Ir.set(k,o&&o.dem?am(o.dem,k).catch(()=>null):Promise.resolve(null)),Ir.get(k)),Lr=k=>{let q=R(k),H=q&&q.map.relief3d;if(!H)return null;let J=`${H.site}|${H.exag||1}|${JSON.stringify(q.map.section||null)}`;return Fi.has(J)?Fi.get(J):(Fi.set(J,null),Jn(H.site).then(ht=>{if(!ht)return;let nt=new On,K=lm(ht,H.exag||1,P,Ga);nt.add(K);let ot=null;if(q.map.section){let{pts:ut}=rf(ht,q.map.section.from,q.map.section.to,H.exag||1),Gt=[];for(let Ht=1;Ht<ut.length;Ht++)Gt.push(ut[Ht-1].x,ut[Ht-1].y,ut[Ht-1].z,ut[Ht].x,ut[Ht].y,ut[Ht].z);ot=new Aa(new Er().setPositions(Gt),new Ar({color:"#ffffff",linewidth:2.5,transparent:!0,opacity:0,depthTest:!1})),ot.frustumCulled=!1,ot.renderOrder=4,nt.add(ot)}nt.visible=!1,y.add(nt),Fi.set(J,{g:nt,m:K,line:ot}),w=!0}),null)};function Ha(k,q,H,J,ht){let nt=new Map,K=(ot,ut,Gt)=>{if(ut&&ut.map.relief3d&&Gt>.001){let Ht=Lr(ot);Ht&&nt.set(Ht,{s:ut,op:(nt.get(Ht)?.op||0)+Gt})}};K(H,k,1-ht),K(J,q,ht);for(let ot of Fi.values())ot&&!nt.has(ot)&&(ot.g.visible=!1);for(let[ot,{s:ut,op:Gt}]of nt){let Ht=ut.map.relief3d;ot.g.visible=!0,ot.m.visible=!0;let Se=ot.m.material.uniforms;Se.uOpacity.value=Gt,Se.uTopo.value=Ht.topo||0,Se.uContour.value=Ht.contours||0,ot.line&&(ot.line.material.opacity=Gt,ot.line.material.resolution=St)}}let sr=new Map;function Dr(k,q,H){let J=k&&k.map.cutaway,ht=q&&q.map.cutaway,nt=H<.5?J||ht:ht||J,K=(J?1-H:0)+(ht?H:0);for(let ut of sr.values())ut.g.visible=!1;if(!nt||K<.001){O.uCut.value.set(0,0,0),j.visible=!0;return}if(!sr.has(nt.lon)){let ut=cm(nt.lon,Ga);y.add(ut.g),sr.set(nt.lon,ut)}let ot=f?1:um($e(K));sr.get(nt.lon).set(ot,1),O.uCut.value.set(nt.lon,ot,1),j.visible=ot<.02}let An=document.createElement("div");An.className="world__legend",i.appendChild(An),An.innerHTML='<div class="world__lg"></div>';let Ei="",ar="",Ur=[],Wa=k=>k.month?`${ES[+k.month.slice(5)-1]} ${k.month.slice(0,4)}`:String(k.year);function Ic(k){let q=Pr(k,"quakes"),H=Pr(k,"volcanoes"),J=k.map.plates&&D.plates,ht=k.map.isolines&&D[`shake:${k.map.isolines.id}`];if(ht){let K=Object.keys(ht.levels).map(Number).sort((ot,ut)=>ot-ut);return`<p class="mono world__ind"><span>Shaking intensity, Modified Mercalli scale</span> \xB7 <span class="world__yr"><b>M ${ht.mag}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${K.map(ot=>nf[ot]).join(",")})"></div></div>
        <div class="world__ticks mono">${K.map(ot=>`<span>${im[ot]}</span>`).join("")}</div>
        <p class="mono world__unit">Each line joins places that shook equally hard</p>
        <p class="world__src">${ht.source}.</p>`}let nt=q&&q.years?`${q.years[0]}\u2013${q.years[1]}`:"2000\u20132025";return`${q?`<p class="mono world__ind"><span>Earthquakes, magnitude ${q.minMag||5.5}+</span> \xB7 <span class="world__yr"><b>${nt}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${ir.map(K=>K[1]).join(",")})"></div></div>
        <div class="world__ticks mono">${ir.map((K,ot)=>`<span>${K[0]}${ot===ir.length-1?" km":""}</span>`).join("")}</div>
        <p class="mono world__unit">Colour: depth of focus \xB7 size: magnitude</p>`:""}
      ${H?`<p class="mono world__key"><i style="--c:${ef}" class="is-tri"></i>Volcanoes that erupted in the last 10,000 years</p>`:""}
      ${J?`<p class="mono world__key">${(k.map.plates===!0?Object.keys(ka):k.map.plates).map(K=>`<i style="--c:${ka[K]}"></i>${{divergent:"Spreading",convergent:"Subduction",collision:"Collision",transform:"Transform"}[K]}`).join(" ")}</p>`:""}
      <p class="world__src">${[q&&"Earthquakes: USGS ComCat",H&&"Volcanoes: Smithsonian GVP",J&&"Plates: PB2002 (Bird 2003)"].filter(Boolean).join(". ")}.</p>`}function Lc(k,q,H){let J=H<.5?k:q,ht=J&&(J.map.data||J.map.spikes),nt=J&&J.map.data&&J.map.spikes,K=ht&&l&&l[ht.id]?`${ht.id}|${ht.domain}|${nt?nt.id:""}|${(J.map.focus||[]).join()}`:"",ot=!K&&J&&((J.map.points||[]).length||J.map.plates&&D.plates||J.map.isolines);if(ot&&(K=`pts|${JSON.stringify(J.map.points||[])}|${JSON.stringify(J.map.plates||"")}|${JSON.stringify(J.map.isolines||"")}`),ot&&K!==Ei){Ei=K,An.classList.add("is-on");let Ut=An.firstElementChild,zt=Ut.cloneNode(!1);zt.innerHTML=Ic(J),Ut.classList.add("is-out"),zt.classList.add("is-in"),An.appendChild(zt),requestAnimationFrame(()=>zt.classList.remove("is-in")),setTimeout(()=>Ut.remove(),f?0:450)}if(ot){let Ut=An.lastElementChild.querySelector(".world__yr b");Ut&&rr!=null&&Ut.textContent!==String(rr)&&(Ut.textContent=String(rr));return}if(K!==Ei&&(Ei=K,ar="",An.classList.toggle("is-on",!!K),K)){let Ut=l[ht.id],zt=Va(ht),Ie=J.map.data&&J.map.focus||[],Le=An.firstElementChild,Ge=Le.cloneNode(!1);Ge.innerHTML=`<p class="mono world__ind"><span>${Ut.label}</span> \xB7 <span class="world__yr"><b></b></span><span class="world__fc"></span></p>
          <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${zt.stops.join(",")})"></div>
            ${Ie.map(Tn=>`<i class="world__tick" data-k="${Tn}"><span>${Tn}</span></i>`).join("")}</div>
          <div class="world__ticks mono"><span>${zt.d0<0?"":"\u2264 "}${af(zt.d0)}</span>${zt.kind==="diverging"?"<span>0</span>":""}<span>\u2265 ${af(zt.d1)}</span></div>
          <p class="mono world__unit">${Ut.unit}${J.map.data?' \xB7 <i class="world__nodata"></i> no data':""}</p>
          ${nt&&l[nt.id]?`<p class="mono world__spk"><i></i>Height \xB7 ${l[nt.id].label} \xB7 <span class="world__spkm"></span></p>`:""}
          <p class="world__src">${Ut.source}${nt&&l[nt.id]?". "+l[nt.id].source:""}</p>`,Le.classList.add("is-out"),Ge.classList.add("is-in"),An.appendChild(Ge),requestAnimationFrame(()=>Ge.classList.remove("is-in")),setTimeout(()=>Le.remove(),f?0:450),Ur=Ie.map(Tn=>({k:Tn,el:Ge.querySelector(`[data-k="${Tn}"]`)}))}if(!K)return;let ut=An.lastElementChild,Gt=l[ht.id],Ht=Va(ht),Se=J.map.data&&dm(k?.map.data,q?.map.data),se=Wa(ht),Pe=Gt.forecastFrom&&+String(ht.month||ht.year).slice(0,4)>=Gt.forecastFrom?" \xB7 IMF projection":"";if(se!==ar){let Ut=ut.querySelector(".world__yr"),zt=Ut.firstElementChild,Ie=document.createElement("b");Ie.textContent=se,ar&&!f?(Ie.className="is-in",Ut.appendChild(Ie),zt.className="is-out",requestAnimationFrame(()=>Ie.classList.remove("is-in")),setTimeout(()=>zt.remove(),400)):Ut.replaceChildren(Ie),ut.querySelector(".world__fc").textContent=Pe,ar=se}if(nt){let Ut=ut.querySelector(".world__spkm"),zt=Wa(nt);Ut&&Ut.textContent!==zt&&(Ut.textContent=zt)}for(let Ut of Ur){let zt=k&&k.map.data?Is(l,k.map.data,Ut.k):null,Ie=q&&q.map.data?Is(l,q.map.data,Ut.k):null,Le=Se&&zt!=null&&Ie!=null?zt+(Ie-zt)*H:H<.5?zt:Ie;Ut.x=Le==null?null:$e((Le-Ht.d0)/(Ht.d1-Ht.d0))*100,Ut.el.style.opacity=Le==null?0:1,Le!=null&&(Ut.el.style.left=`${Ut.x.toFixed(2)}%`)}let Me=[];for(let Ut of Ur.filter(zt=>zt.x!=null).sort((zt,Ie)=>zt.x-Ie.x)){let zt=0;for(;Me[zt]!=null&&Ut.x-Me[zt]<11;)zt++;Me[zt]=Ut.x,Ut.row!==zt&&(Ut.row=zt,Ut.el.style.setProperty("--row",Math.min(zt,2)))}let Yt=ut.querySelector(".world__rampbox");Yt&&+Yt.dataset.rows!==Me.length&&(Yt.dataset.rows=Me.length,Yt.style.setProperty("--rows",Math.max(0,Math.min(Me.length,3)-1)))}let Ds=document.createElement("div");Ds.className="world__labels",i.appendChild(Ds);let Oi=new Map,M=k=>{if(Oi.has(k))return Oi.get(k);let q=R(k),H=N(q)?(q.map.focus||[]).map(nt=>T.get(nt)).filter(Boolean).map(nt=>({at:[nt.lat,nt.lon],label:nt.name,key:nt.key})):[],J=[...q.map.markers||[],...H].map(nt=>{let K=document.createElement("div");return K.className="world__marker",K.innerHTML=`<i></i><span>${nt.label}</span>${nt.key?'<b class="mono"></b>':""}`,Ds.appendChild(K),{el:K,at:nt.at,v:We(nt.at[0],nt.at[1],1.000002),key:nt.key,val:nt.key?K.querySelector("b"):null,text:""}}),ht=q.map.relief3d;return ht&&J.length&&Jn(ht.site).then(nt=>{nt&&(J.forEach(K=>{K.v=We(K.at[0],K.at[1],1+(Math.max(0,nt.at(K.at[0],K.at[1]))*(ht.exag||1)+30)/6371e3)}),w=!0)}),Oi.set(k,J),J},F=d,Y=h>=2?tf(g,{phone:p}):null,X=()=>Y?Y.render(E,A):g.render(E,A),G=1,dt=1,Rt=new U,St=new Ft(1,1),It=1.0015;function Lt(){G=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight,g.setPixelRatio(Math.min(devicePixelRatio||1,F??(p?1.5:1.75))),g.setSize(G,dt,!1),dh(A,G,dt),Y&&Y.setSize(G,dt,g.getPixelRatio()),St.set(G,dt),le(G,dt)!==le(...Xt)&&(Xt=[G,dt],te.clear());for(let k of Oi.values())k.forEach(q=>{q.w=0});w=!0}let Qt=-1,re=NaN,wt=!1,pe=!0,Be=0,Ue=performance.now(),ye=new U,je=null,At=null;function Qe(k,q,H){M(k).forEach((J,ht)=>{let nt=J.v.clone().normalize().dot(Rt.copy(A.position).sub(J.v).normalize());ye.copy(J.v).project(A);let K=(ye.x*.5+.5)*G,ot=(-ye.y*.5+.5)*dt,ut=nt>.05&&ye.z<1&&K>-40&&K<G+40&&ot>-20&&ot<dt+20;if(J.el.style.transform=`translate3d(${K.toFixed(1)}px, ${ot.toFixed(1)}px, 0)`,J.el.style.opacity=ut?$e(q*1.8-ht*.14):0,J.key){let Ht=H(J.key),Se=l[R(k).map.data.id].unit.startsWith("%")?"%":"",se=Ht==null?"no data":af(Ht)+Se;se!==J.text&&(J.val.textContent=se,J.text=se,J.w=0)}ut&&!J.w&&(J.w=J.el.offsetWidth);let Gt=(J.w||160)+12;J.el.classList.toggle("is-left",K+Gt>G&&(K-Gt>0||K>G-K))})}function ue(k){if(Be=requestAnimationFrame(ue),!pe)return;let q=t.length,H=$e(Qt,-1,q-1),J=H<0&&!f;if(!w&&H===re&&!J&&!wt){S.skipped++;return}let ht=performance.now();w=!1,re=H;let nt=(k-Ue)/1e3,K=Math.floor(H),ot=H-K,ut=Math.min(K+1,q-1),Gt=R(K),Ht=R(ut),Se=K>=0&&Gt.panel!=null&&Gt.panel===Ht.panel,se=f?ot<.5?0:1:um(li(.08,.92,ot)),Pe={...e.camera,lon:e.camera.lon+(f?0:Math.sin(nt*.06)*12)},Me=ph(A,K<0?Pe:Gt.camera,ut<0?Pe:Ht.camera,se,G,dt);if(It=1+$e(Me/Si*.002,1e-6,.0015),c==="camera"){let qe=A.position.clone().normalize(),Kn=new U(0,1,0).cross(qe).normalize(),lr=qe.clone().cross(Kn);P.copy(qe).addScaledVector(Kn,-.75).addScaledVector(lr,.6)}let Yt=be(K,!0)||je||At,Ut=be(ut,!0)||Yt;if(!Yt){X();return}je=Yt,At=Ut,O.uGA.value=Yt.g,O.uDA.value=Yt.d,O.uBoxA.value=Yt.box,O.uIGA.value=Yt.ig||kt,O.uIDA.value=Yt.id||kt,O.uGB.value=Ut.g,O.uDB.value=Ut.d,O.uBoxB.value=Ut.box,O.uIGB.value=Ut.ig||kt,O.uIDB.value=Ut.id||kt;let zt=f?ot<.5?0:1:li(.35,.65,ot),Ie=f?ot<.5?0:1:Se?li(.1,.9,ot):zt,Le=N(Gt)&&N(Ht)&&dm(Gt.map.data,Ht.map.data);O.uSlotA.value=Yt.ig?rt(K):new ee(-1,0,1,0),O.uSlotB.value=Ut.ig?rt(ut):new ee(-1,0,1,0),O.uWA.value=Le?Ie:0,O.uWB.value=Le?1-Ie:0,O.uMix.value=ut===K?0:zt,O.uTA.value=Ze(K)||kt,O.uTB.value=ut===K?O.uTA.value:Ze(ut)||kt,O.uHatch.value=12e5/Math.max(60,Me);let Ge=tt(Gt.map.borders),Tn=tt(Ht.map.borders);for(let qe of ft.values())qe.material.opacity=0,qe.material.resolution=St,qe.scale.setScalar(It);let Nr=Gt.map.city?.4:1,or=Ht.map.city?.4:1;Ge&&(Ge.material.opacity+=.28*(1-zt)*Nr),Tn&&(Tn.material.opacity+=.28*zt*or),ve(K,ut,zt,Me),wt=Ls(Gt,Ht,zt,nt,Me),Ha(K>=0?Gt:null,Ht,K,ut,ut===K?0:zt),Dr(Gt,Ht,ut===K?0:zt),Lc(Gt,Ht,Ie);for(let[qe,Kn]of mt)qe!==K&&qe!==ut&&(Kn.g.visible=!1);if(Se){if(wt=yt(K,1,1,nt)||wt,ut!==K){let qe=Nt(ut);qe&&(qe.g.visible=!1)}}else K>=0&&(wt=yt(K,1,1-li(.05,.4,ot),nt)||wt),ut!==K&&(wt=yt(ut,li(.55,1,ot),li(.5,.8,ot),nt)||wt);let Xn=qe=>{let Kn=N(Gt)?Is(l,Gt.map.data,qe):null,lr=N(Ht)?Is(l,Ht.map.data,qe):null;return Le&&Kn!=null&&lr!=null?Kn+(lr-Kn)*Ie:Ie<.5?Kn:lr};for(let[qe,Kn]of Oi)qe!==K&&qe!==ut&&Kn.forEach(lr=>{lr.el.style.opacity=0});Se?(Qe(K,1,Xn),ut!==K&&M(ut).forEach(qe=>{qe.el.style.opacity=0})):(Qe(K,1-li(.1,.45,ot),Xn),ut!==K&&Qe(ut,li(.6,.95,ot),Xn)),X(),m&&m(H);let Xa=performance.now()-ht;S.frames++,S.frameMs+=Xa,S.worstFrameMs=Math.max(S.worstFrameMs,Xa)}let yn=new ResizeObserver(Lt);yn.observe(i);let Un=new IntersectionObserver(([k])=>{pe=k.isIntersecting,w=!0});Un.observe(i),addEventListener("visibilitychange",()=>{pe=!document.hidden,w=!0}),Lt();for(let k of[-1,0])for(let q of Object.values(ce(k).jobs))st.has(q.key)||bt.now(q);return Be=requestAnimationFrame(ue),{setProgress(k){Qt=k},setGate(k,q){at.get(k)!==q&&(at.set(k,q),w=!0)},pointOf:k=>T.get(k),prepare(k){k>=-1&&k<t.length&&(be(k),Ze(k),Nt(k),M(k),Lr(k))},replay(){Ni=null,w=!0},setQuality({dpr:k,look:q}){F=k,O.uLook.value=j.material.uniforms.uLook.value=q?1:0,q>=2&&!Y&&(Y=tf(g,{phone:p})),q<2&&Y&&(Y.dispose(),Y=null),Lt()},async profile(k,q,H){let J=await Jn(k);return J?rf(J,q,H,1):null},stats:S,get post(){return Y},camera:A,destroy(){cancelAnimationFrame(Be),yn.disconnect(),Un.disconnect(),bt.destroy(),g.dispose()}}}export{Ln as PALETTE,TT as createWorld,af as fmtValue,We as ll,Va as scaleOf,Is as valueOf};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
