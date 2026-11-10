var Ed=0,ku=1,Ad=2;var Pa=1,Td=2,Ms=3,xr=0,_n=1,Kn=2,mi=0,bs=1,Ji=2,Vu=3,Gu=4,Cd=5;var Ur=100,Rd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Nd=202,Fd=203,Hu=204,Wu=205,Od=206,Bd=207,zd=208,kd=209,Vd=210,Gd=211,Hd=212,Wd=213,Xd=214,qo=0,Yo=1,$o=2,ds=3,Zo=4,Jo=5,Ko=6,jo=7,Xu=0,qd=1,Yd=2,gi=0,qu=1,Yu=2,$u=3,Zu=4,Ju=5,Ku=6,ju=7;var Qu=300,_r=301,Nr=302,Pl=303,Il=304,Ia=306,Qo=1e3,wi=1001,tl=1002,tn=1003,$d=1004;var La=1005;var rn=1006,Ll=1007;var ai=1008;var jn=1009,th=1010,eh=1011,ws=1012,Dl=1013,xi=1014,Vn=1015,Gn=1016,Ul=1017,Nl=1018,Es=1020,nh=35902,ih=35899,rh=1021,sh=1022,Qn=1023,Ei=1026,vr=1027,Fl=1028,Ol=1029,Ti=1030,Bl=1031;var zl=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,kl=35840,Vl=35841,Gl=35842,Hl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,$l=37489,Oa=37490,Zl=37491,Jl=37808,Kl=37809,jl=37810,Ql=37811,tc=37812,ec=37813,nc=37814,ic=37815,rc=37816,sc=37817,ac=37818,oc=37819,lc=37820,cc=37821,uc=36492,hc=36494,fc=36495,dc=36283,pc=36284,Ba=36285,mc=36286;var sa=2300,el=2301,Ho=2302,Du=2303,Uu=2400,Nu=2401,Fu=2402;var Zd=3200;var ah=0,Jd=1,Ki="",gn="srgb",aa="srgb-linear",oa="linear",De="srgb";var Wo=7680;var Kd=519,jd=512,Qd=513,tp=514,gc=515,ep=516,np=517,xc=518,ip=519,oh=35044,lh=35048;var ch="300 es",di=2e3,la=2001;function ag(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){let i=ps("canvas");return i.style.display="block",i}var Yf={},ms=null;function ca(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function sp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=sp(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=sp(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rr(...i){let t=i.join(" ");t in Yf||(Yf[t]=!0,Wt(...i))}function ap(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var op={[qo]:Yo,[$o]:Ko,[Zo]:jo,[ds]:Jo,[Yo]:qo,[Ko]:$o,[jo]:Zo,[Jo]:ds},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=1234567,ea=Math.PI/180,gs=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function uh(i,t){return(i%t+t)%t}function lg(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function cg(i,t,e){return i!==t?(e-i)/(t-i):0}function na(i,t,e){return(1-e)*i+e*t}function ug(i,t,e,n){return na(i,t,1-Math.exp(-e*n))}function hg(i,t=1){return t-Math.abs(uh(i,t*2)-t)}function fg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mg(i,t){return i+Math.random()*(t-i)}function gg(i){return i*(.5-Math.random())}function xg(i){i!==void 0&&($f=i);let t=$f+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _g(i){return i*ea}function vg(i){return i*gs}function yg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bg(i,t,e,n,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hh={DEG2RAD:ea,RAD2DEG:gs,generateUUID:qi,clamp:te,euclideanModulo:uh,mapLinear:lg,inverseLerp:cg,lerp:na,damp:ug,pingpong:hg,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:xg,degToRad:_g,radToDeg:vg,isPowerOfTwo:yg,ceilPowerOfTwo:Sg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:bg,normalize:Oe,denormalize:fi},xh=class xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;var It=xh,ri=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(f!==v||c!==h||l!==d||u!==g){let p=c*h+l*d+u*g+f*v;p<0&&(h=-h,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let E=Math.acos(p),A=Math.sin(E);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A,c=c*m+h*o,l=l*m+d*o,u=u*m+g*o,f=f*m+v*o}else{c=c*m+h*o,l=l*m+d*o,u=u*m+g*o,f=f*m+v*o;let E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_h=class _h{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lu.copy(this).projectOnVector(t),this.sub(lu)}reflect(t){return this.sub(lu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;var D=_h,lu=new D,Zf=new ri,vh=class vh{constructor(t,e,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=r[0],p=r[3],m=r[6],E=r[1],A=r[4],y=r[7],S=r[2],w=r[5],C=r[8];return s[0]=a*v+o*E+c*S,s[3]=a*p+o*A+c*w,s[6]=a*m+o*y+c*C,s[1]=l*v+u*E+f*S,s[4]=l*p+u*A+f*w,s[7]=l*m+u*y+f*C,s[2]=h*v+d*E+g*S,s[5]=h*p+d*A+g*w,s[8]=h*m+d*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(r*l-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(t,e)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-t)),this}translate(t,e){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vh.prototype.isMatrix3=!0;var jt=vh,cu=new jt,Jf=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===De&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Jf,fromXYZ:Kf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Jf,fromXYZ:Kf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var xe=wg();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xr===void 0&&(Xr=ps("canvas")),Xr.width=t.width,Xr.height=t.height;let r=Xr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eg=0,xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(uu(r[a].image)):s.push(uu(r[a]))}else s=uu(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Ag=0,hu=new D,hn=class i extends Ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,r=wi,s=rn,a=ai,o=Qn,c=jn,l=i.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=qi(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Qu;hn.DEFAULT_ANISOTROPY=1;var yh=class yh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,y=(d+1)/2,S=(m+1)/2,w=(u+h)/4,C=(f+v)/4,x=(g+p)/4;return A>y&&A>S?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=w/n,s=C/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=x/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=C/s,r=x/s),this.set(n,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-v)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;var re=yh,il=class extends Ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new hn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rl=class Rl{constructor(t,e,n,r,s,a,o,c,l,u,f,h,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,h,d,g,v,p)}set(t,e,n,r,s,a,o,c,l,u,f,h,d,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/qr.setFromMatrixColumn(t,0).length(),s=1/qr.setFromMatrixColumn(t,1).length(),a=1/qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tg,t,Cg)}lookAt(t,e,n){let r=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),er.crossVectors(n,qn),er.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),er.crossVectors(n,qn)),er.normalize(),xo.crossVectors(qn,er),r[0]=er.x,r[4]=xo.x,r[8]=qn.x,r[1]=er.y,r[5]=xo.y,r[9]=qn.y,r[2]=er.z,r[6]=xo.z,r[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],E=n[3],A=n[7],y=n[11],S=n[15],w=r[0],C=r[4],x=r[8],b=r[12],T=r[1],R=r[5],U=r[9],N=r[13],L=r[2],I=r[6],k=r[10],X=r[14],ot=r[3],$=r[7],st=r[11],it=r[15];return s[0]=a*w+o*T+c*L+l*ot,s[4]=a*C+o*R+c*I+l*$,s[8]=a*x+o*U+c*k+l*st,s[12]=a*b+o*N+c*X+l*it,s[1]=u*w+f*T+h*L+d*ot,s[5]=u*C+f*R+h*I+d*$,s[9]=u*x+f*U+h*k+d*st,s[13]=u*b+f*N+h*X+d*it,s[2]=g*w+v*T+p*L+m*ot,s[6]=g*C+v*R+p*I+m*$,s[10]=g*x+v*U+p*k+m*st,s[14]=g*b+v*N+p*X+m*it,s[3]=E*w+A*T+y*L+S*ot,s[7]=E*C+A*R+y*I+S*$,s[11]=E*x+A*U+y*k+S*st,s[15]=E*b+A*N+y*X+S*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15],E=c*d-l*h,A=o*d-l*f,y=o*h-c*f,S=a*d-l*u,w=a*h-c*u,C=a*f-o*u;return e*(v*E-p*A+m*y)-n*(g*E-p*S+m*w)+r*(g*A-v*S+m*C)-s*(g*y-v*w+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],E=e*o-n*a,A=e*c-r*a,y=e*l-s*a,S=n*c-r*o,w=n*l-s*o,C=r*l-s*c,x=u*v-f*g,b=u*p-h*g,T=u*m-d*g,R=f*p-h*v,U=f*m-d*v,N=h*m-d*p,L=E*N-A*U+y*R+S*T-w*b+C*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return t[0]=(o*N-c*U+l*R)*I,t[1]=(r*U-n*N-s*R)*I,t[2]=(v*C-p*w+m*S)*I,t[3]=(h*w-f*C-d*S)*I,t[4]=(c*T-a*N-l*b)*I,t[5]=(e*N-r*T+s*b)*I,t[6]=(p*y-g*C-m*A)*I,t[7]=(u*C-h*y+d*A)*I,t[8]=(a*U-o*T+l*x)*I,t[9]=(n*T-e*U-s*x)*I,t[10]=(g*w-v*y+m*E)*I,t[11]=(f*y-u*w-d*E)*I,t[12]=(o*b-a*R-c*x)*I,t[13]=(e*R-n*b+r*x)*I,t[14]=(v*A-g*S-p*E)*I,t[15]=(u*S-f*A+h*E)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,g=s*f,v=a*u,p=a*f,m=o*f,E=c*l,A=c*u,y=c*f,S=n.x,w=n.y,C=n.z;return r[0]=(1-(v+m))*S,r[1]=(d+y)*S,r[2]=(g-A)*S,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+m))*w,r[6]=(p+E)*w,r[7]=0,r[8]=(g+A)*C,r[9]=(p-E)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=qr.set(r[0],r[1],r[2]).length(),o=qr.set(r[4],r[5],r[6]).length(),c=qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);let l=1/a,u=1/o,f=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,e.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=di,c=!1){let l=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===di)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===la)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=di,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===di)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===la)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Rl.prototype.isMatrix4=!0;var Pe=Rl,qr=new D,li=new Pe,Tg=new D(0,0,0),Cg=new D(1,1,1),er=new D,xo=new D,qn=new D,jf=new Pe,Qf=new ri,ar=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ar.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rg=0,td=new D,Yr=new ri,ki=new Pe,_o=new D,qs=new D,Pg=new D,Ig=new ri,ed=new D(1,0,0),nd=new D(0,1,0),id=new D(0,0,1),rd={type:"added"},Lg={type:"removed"},$r={type:"childadded",child:null},fu={type:"childremoved",child:null},kn=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ar,n=new ri,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new jt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(qs,_o,this.up):ki.lookAt(_o,qs,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ki),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),$r.child=t,this.dispatchEvent($r),$r.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lg),fu.child=t,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kn.DEFAULT_UP=new D(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},vo={h:0,s:0,l:0};function du(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=xe.workingColorSpace){if(t=uh(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=du(a,s,t+1/3),this.g=du(a,s,t),this.b=du(a,s,t-1/3)}return xe.colorSpaceToWorking(this,r),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return xe.workingToColorSpace(An.copy(this),t),Math.round(te(An.r*255,0,255))*65536+Math.round(te(An.g*255,0,255))*256+Math.round(te(An.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(An.copy(this),e);let n=An.r,r=An.g,s=An.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=gn){xe.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,r=An.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(vo);let n=na(nr.h,vo.h,e),r=na(nr.s,vo.s,e),s=na(nr.l,vo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Gt;Gt.NAMES=lp;var or=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new D,Vi=new D,pu=new D,Gi=new D,Zr=new D,Jr=new D,sd=new D,mu=new D,gu=new D,xu=new D,_u=new re,vu=new re,yu=new re,Xi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ci.subVectors(t,e),r.cross(ci);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ci.subVectors(r,e),Vi.subVectors(n,e),pu.subVectors(t,e);let a=ci.dot(ci),o=ci.dot(Vi),c=ci.dot(pu),l=Vi.dot(Vi),u=Vi.dot(pu),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return _u.setScalar(0),vu.setScalar(0),yu.setScalar(0),_u.fromBufferAttribute(t,e),vu.fromBufferAttribute(t,n),yu.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(_u,s.x),a.addScaledVector(vu,s.y),a.addScaledVector(yu,s.z),a}static isFrontFacing(t,e,n,r){return ci.subVectors(n,e),Vi.subVectors(t,e),ci.cross(Vi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ci.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,a,o;Zr.subVectors(r,n),Jr.subVectors(s,n),mu.subVectors(t,n);let c=Zr.dot(mu),l=Jr.dot(mu);if(c<=0&&l<=0)return e.copy(n);gu.subVectors(t,r);let u=Zr.dot(gu),f=Jr.dot(gu);if(u>=0&&f<=u)return e.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Zr,a);xu.subVectors(t,s);let d=Zr.dot(xu),g=Jr.dot(xu);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Jr,o);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return sd.subVectors(s,r),o=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(sd,o);let m=1/(p+v+h);return a=v*m,o=h*m,e.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ui):ui.fromBufferAttribute(s,a),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),So.subVectors(this.max,Ys),Kr.subVectors(t.a,Ys),jr.subVectors(t.b,Ys),Qr.subVectors(t.c,Ys),ir.subVectors(jr,Kr),rr.subVectors(Qr,jr),Er.subVectors(Kr,Qr);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Er.z,Er.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Er.z,0,-Er.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Er.y,Er.x,0];return!Su(e,Kr,jr,Qr,So)||(e=[1,0,0,0,1,0,0,0,1],!Su(e,Kr,jr,Qr,So))?!1:(Mo.crossVectors(ir,rr),e=[Mo.x,Mo.y,Mo.z],Su(e,Kr,jr,Qr,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hi=[new D,new D,new D,new D,new D,new D,new D,new D],ui=new D,yo=new Pn,Kr=new D,jr=new D,Qr=new D,ir=new D,rr=new D,Er=new D,Ys=new D,So=new D,Mo=new D,Ar=new D;function Su(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ar.fromArray(i,s);let o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),c=t.dot(Ar),l=e.dot(Ar),u=n.dot(Ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var nn=new D,bo=new It,Ug=0,zn=class extends Ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var da=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ng=new Pn,$s=new D,Mu=new D,In=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ng.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($s,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Mu)),this.expandByPoint($s.copy(t.center).sub(Mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fg=0,ii=new Pe,bu=new kn,ts=new D,Yn=new Pn,Zs=new Pn,cn=new D,We=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ag(t)?da:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return bu.lookAt(t),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Yn.min,Zs.min),Yn.expandByPoint(cn),cn.addVectors(Yn.max,Zs.max),Yn.expandByPoint(cn)):(Yn.expandByPoint(Zs.min),Yn.expandByPoint(Zs.max))}Yn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)cn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(cn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)cn.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(t,l),cn.add(ts)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,u=new D,f=new D,h=new It,d=new It,g=new It,v=new D,p=new D;function m(x,b,T){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,T),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[x].add(v),o[b].add(v),o[T].add(v),c[x].add(p),c[b].add(p),c[T].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,b=E.length;x<b;++x){let T=E[x],R=T.start,U=T.count;for(let N=R,L=R+U;N<L;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new D,y=new D,S=new D,w=new D;function C(x){S.fromBufferAttribute(r,x),w.copy(S);let b=o[x];A.copy(b),A.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(w,b);let R=y.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,b=E.length;x<b;++x){let T=E[x],R=T.start,U=T.count;for(let N=R,L=R+U;N<L;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,f=new D;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new zn(h,u,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Rn=new D,Zn=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new zn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wu=new D,Og=new D,Bg=new jt,hi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=wu.subVectors(n,e).cross(Og.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(wu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bg.getNormalMatrix(t),r=this.coplanarPoint(wu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zg=0,$i=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=bs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Wu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vs=class extends $i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Js=new D,ns=new D,is=new D,rs=new It,Ks=new It,cp=new Pe,wo=new D,js=new D,Eo=new D,ad=new It,Eu=new It,od=new It,ma=class extends kn{constructor(t=new vs){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pa(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Zn(n,3,0,!1)),es.setAttribute("uv",new Zn(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new It(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),cp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Ao(wo.set(-.5,-.5,0),is,a,ns,r,s),Ao(js.set(.5,-.5,0),is,a,ns,r,s),Ao(Eo.set(.5,.5,0),is,a,ns,r,s),ad.set(0,0),Eu.set(1,0),od.set(1,1);let o=t.ray.intersectTriangle(wo,js,Eo,!1,Js);if(o===null&&(Ao(js.set(-.5,.5,0),is,a,ns,r,s),Eu.set(0,1),o=t.ray.intersectTriangle(wo,Eo,js,!1,Js),o===null))return;let c=t.ray.origin.distanceTo(Js);c<t.near||c>t.far||e.push({distance:c,point:Js.clone(),uv:Xi.getInterpolation(Js,wo,js,Eo,ad,Eu,od,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ao(i,t,e,n,r,s){rs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Ks.x=s*rs.x-r*rs.y,Ks.y=r*rs.x+s*rs.y):Ks.copy(rs),i.copy(t),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(cp)}var Wi=new D,Au=new D,To=new D,Co=new D,Pr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Au.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(Au);let s=t.distanceTo(e)*.5,a=-this.direction.dot(To),o=Co.dot(this.direction),c=-Co.dot(To),l=Co.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Au).addScaledVector(To,h),d}intersectSphere(t,e){if(t.radius<0)return null;Wi.subVectors(t.center,this.origin);let n=Wi.dot(this.direction),r=Wi.dot(Wi)-n*n,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,E=n.y-a.y,A=n.z-a.z,y=Math.abs(c),S=Math.abs(l),w=Math.abs(u),C,x,b,T,R,U,N,L,I,k,X,ot;if(y>=S&&y>=w?(b=c,U=f,I=g,ot=m,c>=0?(C=l,x=u,T=h,R=d,N=v,L=p,k=E,X=A):(C=u,x=l,T=d,R=h,N=p,L=v,k=A,X=E)):S>=w?(b=l,U=h,I=v,ot=E,l>=0?(C=u,x=c,T=d,R=f,N=p,L=g,k=A,X=m):(C=c,x=u,T=f,R=d,N=g,L=p,k=m,X=A)):(b=u,U=d,I=p,ot=A,u>=0?(C=c,x=l,T=f,R=h,N=g,L=v,k=m,X=E):(C=l,x=c,T=h,R=f,N=v,L=g,k=E,X=m)),b===0)return null;let $=C/b,st=x/b,it=1/b,Pt=T-$*U,Et=R-st*U,_e=N-$*I,Yt=L-st*I,me=k-$*ot,tt=X-st*ot,at=me*Yt-tt*_e,Tt=Pt*tt-Et*me,Zt=_e*Et-Yt*Pt;if(r){if(at<0||Tt<0||Zt<0)return null}else if((at<0||Tt<0||Zt<0)&&(at>0||Tt>0||Zt>0))return null;let wt=at+Tt+Zt;if(wt===0)return null;let ae=it*(at*U+Tt*I+Zt*ot);return(wt>0?ae<0:ae>0)?null:this.at(ae/wt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lr=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new Pe,Tr=new Pr,Ro=new In,cd=new D,Po=new D,Io=new D,Lo=new D,Tu=new D,Do=new D,ud=new D,Uo=new D,ke=class extends kn{constructor(t=new We,e=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],f=s[c];u!==0&&(Tu.fromBufferAttribute(f,t),a?Do.addScaledVector(Tu,u):Do.addScaledVector(Tu.sub(e),u))}e.add(Do)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Tr.copy(t.ray).recast(t.near),!(Ro.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ro,cd)===null||Tr.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,S=A;y<S;y+=3){let w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);r=No(this,m,t,n,l,u,f,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let E=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);r=No(this,a,t,n,l,u,f,E,A,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),A=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,S=A;y<S;y+=3){let w=y,C=y+1,x=y+2;r=No(this,m,t,n,l,u,f,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let E=p,A=p+1,y=p+2;r=No(this,a,t,n,l,u,f,E,A,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function kg(i,t,e,n,r,s,a,o){let c;if(t.side===_n?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===xr,o),c===null)return null;Uo.copy(o),Uo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:i}}function No(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Po),i.getVertexPosition(c,Io),i.getVertexPosition(l,Lo);let u=kg(i,t,e,n,Po,Io,Lo,ud);if(u){let f=new D;Xi.getBarycoord(ud,Po,Io,Lo,f),r&&(u.uv=Xi.getInterpolatedAttribute(r,o,c,l,f,new It)),s&&(u.uv1=Xi.getInterpolatedAttribute(s,o,c,l,f,new It)),a&&(u.normal=Xi.getInterpolatedAttribute(a,o,c,l,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};Xi.getNormal(Po,Io,Lo,h.normal),u.face=h,u.barycoord=f}return u}var pi=class extends hn{constructor(t=null,e=1,n=1,r,s,a,o,c,l=tn,u=tn,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends zn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new Pe,hd=new Pe,Fo=[],fd=new Pn,Vg=new Pe,Qs=new ke,ta=new In,xa=class extends ke{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Vg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),fd.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(fd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),ta.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),t.ray.intersectsSphere(ta)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),hd.multiplyMatrices(n,ss),Qs.matrixWorld=hd,Qs.raycast(t,Fo);for(let a=0,o=Fo.length;a<o;a++){let c=Fo[a];c.instanceId=s,c.object=this,e.push(c)}Fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(r*this.count),r,this.count,Fl,Vn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new In,Gg=new It(.5,.5),Oo=new D,_a=class{constructor(t=new hi,e=new hi,n=new hi,r=new hi,s=new hi,a=new hi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di,n=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],v=s[9],p=s[10],m=s[11],E=s[12],A=s[13],y=s[14],S=s[15];if(r[0].setComponents(l-a,d-u,m-g,S-E).normalize(),r[1].setComponents(l+a,d+u,m+g,S+E).normalize(),r[2].setComponents(l+o,d+f,m+v,S+A).normalize(),r[3].setComponents(l-o,d-f,m-v,S-A).normalize(),n)r[4].setComponents(c,h,p,y).normalize(),r[5].setComponents(l-c,d-h,m-p,S-y).normalize();else if(r[4].setComponents(l-c,d-h,m-p,S-y).normalize(),e===di)r[5].setComponents(l+c,d+h,m+p,S+y).normalize();else if(e===la)r[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);let e=Gg.distanceTo(t.center);return Cr.radius=.7071067811865476+e,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Oo.x=r.normal.x>0?t.max.x:t.min.x,Oo.y=r.normal.y>0?t.max.y:t.min.y,Oo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sl=class extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dd=new Pe,Ou=new Pr,Bo=new In,zo=new D,cr=class extends kn{constructor(t=new We,e=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;dd.copy(r).invert(),Ou.copy(t.ray).applyMatrix4(dd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=h,v=d;g<v;g++){let p=l.getX(g);zo.fromBufferAttribute(f,p),pd(zo,p,c,r,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,v=d;g<v;g++)zo.fromBufferAttribute(f,g),pd(zo,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function pd(i,t,e,n,r,s,a){let o=Ou.distanceSqToPoint(i);if(o<e){let c=new D;Ou.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends hn{constructor(t=[],e=_r,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ir=class extends hn{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ur=class extends hn{constructor(t,e,n=xi,r,s,a,o=tn,c=tn,l,u=Ei,f=1){if(u!==Ei&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},al=class extends ur{constructor(t,e=xi,n=_r,r,s,a=tn,o=tn,c,l=Ei){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ya=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ys=class i extends We{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function g(v,p,m,E,A,y,S,w,C,x,b){let T=y/C,R=S/x,U=y/2,N=S/2,L=w/2,I=C+1,k=x+1,X=0,ot=0,$=new D;for(let st=0;st<k;st++){let it=st*R-N;for(let Pt=0;Pt<I;Pt++){let Et=Pt*T-U;$[v]=Et*E,$[p]=it*A,$[m]=L,l.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[m]=w>0?1:-1,u.push($.x,$.y,$.z),f.push(Pt/C),f.push(1-st/x),X+=1}}for(let st=0;st<x;st++)for(let it=0;it<C;it++){let Pt=h+it+I*st,Et=h+it+I*(st+1),_e=h+(it+1)+I*(st+1),Yt=h+(it+1)+I*st;c.push(Pt,Et,Yt),c.push(Et,_e,Yt),ot+=6}o.addGroup(d,ot,b),d+=ot,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Sa=class i extends We{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],h=[],d=[],g=0,v=[],p=n/2,m=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function E(){let y=new D,S=new D,w=0,C=(e-t)/n;for(let x=0;x<=s;x++){let b=[],T=x/s,R=T*(e-t)+t;for(let U=0;U<=r;U++){let N=U/r,L=N*c+o,I=Math.sin(L),k=Math.cos(L);S.x=R*I,S.y=-T*n+p,S.z=R*k,f.push(S.x,S.y,S.z),y.set(I,C,k).normalize(),h.push(y.x,y.y,y.z),d.push(N,1-T),b.push(g++)}v.push(b)}for(let x=0;x<r;x++)for(let b=0;b<s;b++){let T=v[b][x],R=v[b+1][x],U=v[b+1][x+1],N=v[b][x+1];(t>0||b!==0)&&(u.push(T,R,N),w+=3),(e>0||b!==s-1)&&(u.push(R,U,N),w+=3)}l.addGroup(m,w,0),m+=w}function A(y){let S=g,w=new It,C=new D,x=0,b=y===!0?t:e,T=y===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,p*T,0),h.push(0,T,0),d.push(.5,.5),g++;let R=g;for(let U=0;U<=r;U++){let L=U/r*c+o,I=Math.cos(L),k=Math.sin(L);C.x=b*k,C.y=p*T,C.z=b*I,f.push(C.x,C.y,C.z),h.push(0,T,0),w.x=I*.5+.5,w.y=k*.5*T+.5,d.push(w.x,w.y),g++}for(let U=0;U<r;U++){let N=S+U,L=R+U;y===!0?u.push(L,L+1,N):u.push(L+1,L,N),x+=3}l.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);let u=n[r],h=n[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new It:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,r=[],s=[],a=[],o=new D,c=new Pe;for(let d=0;d<=t;d++){let g=d/t;r[d]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(te(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ma=class extends si{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new It){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ol=class extends Ma{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){let a=s*s,o=a*s;return i+t*s+e*a+n*o}}}var md=new D,gd=new D,Cu=new fh,Ru=new fh,Pu=new fh,hr=class extends si{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){let n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(gd.subVectors(r[0],r[1]).add(r[0]),l=gd);let f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(md.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=md),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Cu.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,v,p),Ru.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,v,p),Pu.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Cu.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ru.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Pu.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Cu.calc(c),Ru.calc(c),Pu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xd(i,t,e,n,r){let s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Hg(i,t){let e=1-i;return e*e*t}function Wg(i,t){return 2*(1-i)*i*t}function Xg(i,t){return i*i*t}function ia(i,t,e,n){return Hg(i,t)+Wg(i,e)+Xg(i,n)}function qg(i,t){let e=1-i;return e*e*e*t}function Yg(i,t){let e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function Zg(i,t){return i*i*i*t}function ra(i,t,e,n,r){return qg(i,t)+Yg(i,e)+$g(i,n)+Zg(i,r)}var ll=class extends si{constructor(t=new It,e=new It,n=new It,r=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new It){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ra(t,r.x,s.x,a.x,o.x),ra(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cl=class extends si{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ra(t,r.x,s.x,a.x,o.x),ra(t,r.y,s.y,a.y,o.y),ra(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends si{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends si{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends si{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ia(t,r.x,s.x,a.x),ia(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends si{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ia(t,r.x,s.x,a.x),ia(t,r.y,s.y,a.y),ia(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(xd(o,c.x,l.x,u.x,f.x),xd(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new It().fromArray(r))}return this}},Jg=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:hr,CubicBezierCurve:ll,CubicBezierCurve3:cl,EllipseCurve:Ma,LineCurve:ul,LineCurve3:hl,QuadraticBezierCurve:fl,QuadraticBezierCurve3:ba,SplineCurve:dl});var fr=class i extends We{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let E=m*h-a;for(let A=0;A<l;A++){let y=A*f-s;g.push(y,-E,0),v.push(0,0,1),p.push(A/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){let A=E+l*m,y=E+l*(m+1),S=E+1+l*(m+1),w=E+1+l*m;d.push(A,y,w),d.push(y,S,w)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Lr=class i extends We{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new D,h=new D,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let E=[],A=m/n,y=a+A*o,S=t*Math.cos(y),w=Math.sqrt(t*t-S*S),C=0;m===0&&a===0?C=.5/e:m===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let b=x/e,T=r+b*s;f.x=-w*Math.cos(T),f.y=S,f.z=w*Math.sin(T),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(b+C,1-A),E.push(l++)}u.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){let A=u[m][E+1],y=u[m][E],S=u[m+1][E],w=u[m+1][E+1];(m!==0||a>0)&&d.push(A,y,w),(m!==n-1||c<Math.PI)&&d.push(y,S,w)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dr=class i extends We{constructor(t=new ba(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new It,u=new D,f=[],h=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function v(){for(let A=0;A<e;A++)p(A);p(s===!1?e:0),E(),m()}function p(A){u=t.getPointAt(A/e,u);let y=a.normals[A],S=a.binormals[A];for(let w=0;w<=r;w++){let C=w/r*Math.PI*2,x=Math.sin(C),b=-Math.cos(C);c.x=b*y.x+x*S.x,c.y=b*y.y+x*S.y,c.z=b*y.z+x*S.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let A=1;A<=e;A++)for(let y=1;y<=r;y++){let S=(r+1)*(A-1)+(y-1),w=(r+1)*A+(y-1),C=(r+1)*A+y,x=(r+1)*(A-1)+y;g.push(S,w,x),g.push(w,C,x)}}function E(){for(let A=0;A<=e;A++)for(let y=0;y<=r;y++)l.x=A/e,l.y=y/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},wa=class extends We{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new D,s=new D;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,v=h+d;g<v;g+=3)for(let p=0;p<3;p++){let m=o.getX(g+p),E=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,E),_d(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let u=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),_d(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new ce(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function _d(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function Fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(vd(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(vd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=Fr(i[e]);for(let r in n)t[r]=n[r]}return t}function vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var za={clone:Fr,merge:Tn},jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(r.value);break;case"v2":this.uniforms[n].value=new It().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new re().fromArray(r.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pl=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ml=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gl=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Iu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var dr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends dr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nu:s=t,o=2*e-n;break;case Fu:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nu:a=t,c=2*n-e;break;case Fu:a=1,c=n+r[1]-r[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,E=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,A=(-1-d)*p+(1.5+d)*v+.5*g,y=d*p-d*v;for(let S=0;S!==o;++S)s[S]=m*a[u+S]+E*a[l+S]+A*a[c+S]+y*a[f+S];return s}},_l=class extends dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}},vl=class extends dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},yl=class extends dr{interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(r-e),v=1-g;for(let p=0;p!==o;++p)s[p]=a[l+p]*v+a[c+p]*g;return s}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[l+g],p=a[c+g],m=d*h+g*2,E=f[m],A=f[m+1],y=t*h+g*2,S=u[y],w=u[y+1],C=e0(n,e,E,S,r);s[g]=up(C,v,A,w,p)}return s}};function up(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function t0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function e0(i,t,e,n,r){let s=(i-t)/(r-t);for(let a=0;a<8;a++){let o=up(s,t,e,n,r)-i;if(Math.abs(o)<1e-10)break;let c=t0(s,t,e,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Jn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Iu(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new yl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case el:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case Du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return el;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Iu(this.settings)&&(yd(this.settings.inTangents,t),yd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){qt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&og(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(r)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[h+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Iu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function yd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=el;var pr=class extends Jn{constructor(t,e,n){super(t,e,n)}};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=sa;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends Jn{constructor(t,e,n,r){super(t,e,n,r)}};Sl.prototype.ValueTypeName="color";var Ml=class extends Jn{constructor(t,e,n,r){super(t,e,n,r)}};Ml.prototype.ValueTypeName="number";var bl=class extends dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(r-e),l=t*o;for(let u=l+o;l!==u;l+=4)ri.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ea=class extends Jn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Jn{constructor(t,e,n){super(t,e,n)}};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=sa;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Jn{constructor(t,e,n,r){super(t,e,n,r)}};wl.prototype.ValueTypeName="vector";var Xo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Sd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Sd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Sd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var El=class{constructor(t,e,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new El,Ss=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=new WeakMap,Al=class extends Ss{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Xo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=os.get(a);f===void 0&&(f=[],os.set(a,f)),f.push({onLoad:e,onError:r})}return a}let o=ps("img");function c(){u(),e&&e(this);let f=os.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}os.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),Xo.remove(`image:${t}`);let h=os.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(f)}os.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xo.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}};var Aa=class extends Ss{constructor(t){super(t)}load(t,e,n,r){let s=new hn,a=new Al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var ko=new D,Vo=new ri,bi=new D,Ta=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ko,Vo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Vo,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ko,Vo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Vo,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sr=new D,Md=new It,bd=new It,un=class extends Ta{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,Md,bd),e.subVectors(bd,Md)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zi=class extends Ta{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ca=class extends We{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ls=-90,cs=1,Tl=class extends kn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(ls,cs,t,e);r.layers=this.layers,this.add(r);let s=new un(ls,cs,t,e);s.layers=this.layers,this.add(s);let a=new un(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new un(ls,cs,t,e);o.layers=this.layers,this.add(o);let c=new un(ls,cs,t,e);c.layers=this.layers,this.add(c);let l=new un(ls,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cl=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ph="\\[\\]\\.:\\/",n0=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",i0="[^"+ph.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",mh),s0=/(WCOD+)?/.source.replace("WCOD",i0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),l0=new RegExp("^"+r0+s0+a0+o0+"$"),c0=["material","materials","bones","map"],Bu=class{constructor(t,e,n){let r=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(t){let e=l0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);c0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Bu;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CM=new Float32Array(1);var gr=class extends pa{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Sh=class Sh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Sh.prototype.isMatrix2=!0;var zu=Sh;var wd=new D,Go=new D,us=new D,hs=new D,Lu=new D,u0=new D,h0=new D,Ra=class{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){wd.subVectors(t,this.start),Go.subVectors(this.end,this.start);let n=Go.dot(Go);if(n===0)return 0;let s=Go.dot(wd)/n;return e&&(s=te(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=u0,n=h0){let r=10000000000000001e-32,s,a,o=this.start,c=t.start,l=this.end,u=t.end;us.subVectors(l,o),hs.subVectors(u,c),Lu.subVectors(o,c);let f=us.dot(us),h=hs.dot(hs),d=hs.dot(Lu);if(f<=r&&h<=r)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(f<=r)s=0,a=d/h,a=te(a,0,1);else{let g=us.dot(Lu);if(h<=r)a=0,s=te(-g/f,0,1);else{let v=us.dot(hs),p=f*h-v*v;p!==0?s=te((v*d-g*h)/p,0,1):s=0,a=(v*s+d)/h,a<0?(a=0,s=te(-g/f,0,1)):a>1&&(a=1,s=te((v-g)/f,0,1))}}return e.copy(o).addScaledVector(us,s),n.copy(c).addScaledVector(hs,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function gh(i,t,e,n){let r=f0(n);switch(e){case rh:return i*t;case Fl:return i*t/r.components*r.byteLength;case Ol:return i*t/r.components*r.byteLength;case Ti:return i*t*2/r.components*r.byteLength;case Bl:return i*t*2/r.components*r.byteLength;case sh:return i*t*3/r.components*r.byteLength;case Qn:return i*t*4/r.components*r.byteLength;case zl:return i*t*4/r.components*r.byteLength;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case Gl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Xl:case Yl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ql:case Oa:case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uc:case hc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(i){switch(i){case jn:case th:return{byteLength:1,components:1};case ws:case eh:case Gn:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case xi:case Dl:case Vn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dp(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function p0(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,dx=`uniform sampler2D dfgLUT;
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
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
}`,M_=`#if DEPTH_PACKING == 3200
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
}`,b_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,O_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,k_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,H_=`uniform float size;
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:x0,alphamap_pars_fragment:_0,alphatest_fragment:v0,alphatest_pars_fragment:y0,aomap_fragment:S0,aomap_pars_fragment:M0,batching_pars_vertex:b0,batching_vertex:w0,begin_vertex:E0,beginnormal_vertex:A0,bsdfs:T0,iridescence_fragment:C0,bumpmap_pars_fragment:R0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:U0,color_pars_fragment:N0,color_pars_vertex:F0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:k0,displacementmap_pars_vertex:V0,displacementmap_vertex:G0,emissivemap_fragment:H0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:ox,envmap_vertex:K0,fog_vertex:j0,fog_pars_vertex:Q0,fog_fragment:tx,fog_pars_fragment:ex,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:rx,lights_lambert_pars_fragment:sx,lights_pars_begin:ax,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:ux,lights_phong_pars_fragment:hx,lights_physical_fragment:fx,lights_physical_pars_fragment:dx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,lightprobes_pars_fragment:xx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:Sx,map_fragment:Mx,map_pars_fragment:bx,map_particle_fragment:wx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Tx,morphinstance_vertex:Cx,morphcolor_vertex:Rx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Ux,normal_pars_fragment:Nx,normal_pars_vertex:Fx,normal_vertex:Ox,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Hx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:t_,skinbase_vertex:e_,skinning_pars_vertex:n_,skinning_vertex:i_,skinnormal_vertex:r_,specularmap_fragment:s_,specularmap_pars_fragment:a_,tonemapping_fragment:o_,tonemapping_pars_fragment:l_,transmission_fragment:c_,transmission_pars_fragment:u_,uv_pars_fragment:h_,uv_pars_vertex:f_,uv_vertex:d_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,backgroundCube_vert:x_,backgroundCube_frag:__,cube_vert:v_,cube_frag:y_,depth_vert:S_,depth_frag:M_,distance_vert:b_,distance_frag:w_,equirect_vert:E_,equirect_frag:A_,linedashed_vert:T_,linedashed_frag:C_,meshbasic_vert:R_,meshbasic_frag:P_,meshlambert_vert:I_,meshlambert_frag:L_,meshmatcap_vert:D_,meshmatcap_frag:U_,meshnormal_vert:N_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:B_,meshphysical_vert:z_,meshphysical_frag:k_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:H_,points_frag:W_,shadow_vert:X_,shadow_frag:q_,sprite_vert:Y_,sprite_frag:$_},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ln={basic:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Tn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Tn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Tn([yt.points,yt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Tn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Tn([yt.common,yt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Tn([yt.sprite,yt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Tn([yt.common,yt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Tn([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ln.physical={uniforms:Tn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var _c={r:0,b:0,g:0},Z_=new Pe,Up=new jt;Up.set(-1,0,0,0,1,0,0,0,1);function J_(i,t,e,n,r,s){let a=new Gt(0),o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let y=E.backgroundBlurriness>0;A=t.get(A,y)}return A}function g(E){let A=!1,y=d(E);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===Ia)?(l===void 0&&(l=new ke(new ys(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Fr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Up),l.material.toneMapped=xe.getTransfer(y.colorSpace)!==De,(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ke(new fr(2,2),new Be({name:"BackgroundMaterial",uniforms:Fr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=xe.getTransfer(y.colorSpace)!==De,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,A){E.getRGB(_c,dh(i)),e.buffers.color.setClear(_c.r,_c.g,_c.b,A,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:v,dispose:m}}function K_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(R,U,N,L,I){let k=!1,X=f(R,L,N,U);s!==X&&(s=X,l(s.object)),k=d(R,L,N,I),k&&g(R,L,N,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(R,U,N,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function f(R,U,N,L){let I=L.wireframe===!0,k=n[U.id];k===void 0&&(k={},n[U.id]=k);let X=R.isInstancedMesh===!0?R.id:0,ot=k[X];ot===void 0&&(ot={},k[X]=ot);let $=ot[N.id];$===void 0&&($={},ot[N.id]=$);let st=$[I];return st===void 0&&(st=h(c()),$[I]=st),st}function h(R){let U=[],N=[],L=[];for(let I=0;I<e;I++)U[I]=0,N[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,U,N,L){let I=s.attributes,k=U.attributes,X=0,ot=N.getAttributes();for(let $ in ot)if(ot[$].location>=0){let it=I[$],Pt=k[$];if(Pt===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Pt=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Pt=R.instanceColor)),it===void 0||it.attribute!==Pt||Pt&&it.data!==Pt.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function g(R,U,N,L){let I={},k=U.attributes,X=0,ot=N.getAttributes();for(let $ in ot)if(ot[$].location>=0){let it=k[$];it===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(it=R.instanceColor));let Pt={};Pt.attribute=it,it&&it.data&&(Pt.data=it.data),I[$]=Pt,X++}s.attributes=I,s.attributesNum=X,s.index=L}function v(){let R=s.newAttributes;for(let U=0,N=R.length;U<N;U++)R[U]=0}function p(R){m(R,0)}function m(R,U){let N=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;N[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),I[R]!==U&&(i.vertexAttribDivisor(R,U),I[R]=U)}function E(){let R=s.newAttributes,U=s.enabledAttributes;for(let N=0,L=U.length;N<L;N++)U[N]!==R[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function A(R,U,N,L,I,k,X){X===!0?i.vertexAttribIPointer(R,U,N,I,k):i.vertexAttribPointer(R,U,N,L,I,k)}function y(R,U,N,L){v();let I=L.attributes,k=N.getAttributes(),X=U.defaultAttributeValues;for(let ot in k){let $=k[ot];if($.location>=0){let st=I[ot];if(st===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),st!==void 0){let it=st.normalized,Pt=st.itemSize,Et=t.get(st);if(Et===void 0)continue;let _e=Et.buffer,Yt=Et.type,me=Et.bytesPerElement,tt=Yt===i.INT||Yt===i.UNSIGNED_INT||st.gpuType===Dl;if(st.isInterleavedBufferAttribute){let at=st.data,Tt=at.stride,Zt=st.offset;if(at.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)m($.location+wt,at.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let wt=0;wt<$.locationSize;wt++)p($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let wt=0;wt<$.locationSize;wt++)A($.location+wt,Pt/$.locationSize,Yt,it,Tt*me,(Zt+Pt/$.locationSize*wt)*me,tt)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<$.locationSize;at++)m($.location+at,st.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<$.locationSize;at++)p($.location+at);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let at=0;at<$.locationSize;at++)A($.location+at,Pt/$.locationSize,Yt,it,Pt*me,Pt/$.locationSize*at*me,tt)}}else if(X!==void 0){let it=X[ot];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}E()}function S(){b();for(let R in n){let U=n[R];for(let N in U){let L=U[N];for(let I in L){let k=L[I];for(let X in k)u(k[X].object),delete k[X];delete L[I]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let N in U){let L=U[N];for(let I in L){let k=L[I];for(let X in k)u(k[X].object),delete k[X];delete L[I]}}delete n[R.id]}function C(R){for(let U in n){let N=n[U];for(let L in N){let I=N[L];if(I[R.id]===void 0)continue;let k=I[R.id];for(let X in k)u(k[X].object),delete k[X];delete I[R.id]}}}function x(R){for(let U in n){let N=n[U],L=R.isInstancedMesh===!0?R.id:0,I=N[L];if(I!==void 0){for(let k in I){let X=I[k];for(let ot in X)u(X[ot].object),delete X[ot];delete I[k]}delete N[L],Object.keys(N).length===0&&delete n[U]}}}function b(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function j_(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Q_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Qn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&C!==Vn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Wt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:w}}function tv(i){let t=this,e=null,n=0,r=!1,s=!1,a=new hi,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let E=s?0:n,A=E*4,y=m.clippingState||null;c.value=y,y=u(g,h,A,d);for(let S=0;S!==A;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=d+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,y=d;A!==v;++A,y+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var Ts=4,ev=6,nv=20,iv=256,ka=new Zi,fp=new Gt,Mh=null,bh=0,wh=0,Eh=!1,rv=new D,Or=new D,yc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:a=256,position:o=rv}=s;Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Mh,bh,wh),this._renderer.xr.enabled=Eh,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Gn,format:Qn,colorSpace:aa,depthBuffer:!1},r=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sv(s)),this._blurMaterial=ov(s,t,e),this._ggxMaterial=av(s,t,e)}return r}_compileMaterial(t){let e=new ke(new We,t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,r,s){let c=new un(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(fp),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new ys,new lr({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,m=!0):(p.color.copy(fp),m=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));let S=this._cubeSize;As(r,y*S,A>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===_r||t.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;As(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-Ts?n-g+Ts:0),m=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,As(s,p,m,3*v,2*v),r.setRenderTarget(s),r.render(o,ka),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,As(t,p,m,3*v,2*v),r.setRenderTarget(t),r.render(o,ka)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Ts?r-this._lodMax+Ts:0),h=4*(this._cubeSize-u);As(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,ka)}};function sv(i){let t=[],e=[],n=i,r=i-Ts+1+ev;for(let s=0;s<r;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,A=m>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(y,d*h*m);for(let S=0;S<h;S++){let w=u[S*2]*2-1,C=u[S*2+1]*2-1;m===0?Or.set(1,C,w):m===1?Or.set(-w,1,-C):m===2?Or.set(-w,C,1):m===3?Or.set(-1,C,-w):m===4?Or.set(-w,-1,C):Or.set(w,C,-1),Or.toArray(v,(m*h+S)*d)}}let p=new We;p.setAttribute("position",new zn(g,d)),p.setAttribute("outputDirection",new zn(v,d)),e.push(new ke(p,null)),n>Ts&&n--}return{lodMeshes:e,sizeLods:t}}function dp(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function av(i,t,e){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ov(i,t,e){return new Be({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function pp(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function mp(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new va(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ys(5,5,5),s=new Be({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:mi});s.uniforms.tEquirect.value=e;let a=new ke(r,s),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=rn),new Tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}};function lv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Pl||d===Il)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Sc(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Pl||d===Il,v=d===_r||d===Nr;if(g||v){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new yc(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let E=h.image;return g&&E&&E.height>0||v&&E&&c(E)?(n===null&&(n=new yc(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===Pl?h.mapping=_r:d===Il&&(h.mapping=Nr),h}function c(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function cv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Rr("WebGLRenderer: "+n+" extension not supported."),r}}}function uv(i,t,e,n){let r={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let E=d.array;v=d.version;for(let A=0,y=E.length;A<y;A+=3){let S=E[A+0],w=E[A+1],C=E[A+2];h.push(S,w,w,C,C,S)}}else{let E=g.array;v=g.version;for(let A=0,y=E.length/3-1;A<y;A+=3){let S=A+0,w=A+1,C=A+2;h.push(S,w,w,C,C,S)}}let p=new(g.count>=65535?da:fa)(h,1);p.version=v;let m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function hv(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let v=0;for(let p=0;p<d;p++)v+=h[p];e.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function fv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function dv(i,t,e){let n=new WeakMap,r=new re;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*f),C=new ua(w,y,S,f);C.type=Vn,C.needsUpdate=!0;let x=A*4;for(let T=0;T<f;T++){let R=p[T],U=m[T],N=E[T],L=y*S*4*T;for(let I=0;I<R.count;I++){let k=I*x;d===!0&&(r.fromBufferAttribute(R,I),w[L+k+0]=r.x,w[L+k+1]=r.y,w[L+k+2]=r.z,w[L+k+3]=0),g===!0&&(r.fromBufferAttribute(U,I),w[L+k+4]=r.x,w[L+k+5]=r.y,w[L+k+6]=r.z,w[L+k+7]=0),v===!0&&(r.fromBufferAttribute(N,I),w[L+k+8]=r.x,w[L+k+9]=r.y,w[L+k+10]=r.z,w[L+k+11]=N.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new It(y,S)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function pv(i,t,e,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var mv={[qu]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[$u]:"CINEON_TONE_MAPPING",[Zu]:"ACES_FILMIC_TONE_MAPPING",[Ku]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function gv(i,t,e,n,r,s){let a=new xn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new We;l.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ce([0,2,0,0,2,0],2));let u=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ke(l,u),h=new Zi(-1,1,1,-1,0,1),d=null,g=null,v=!1,p,m=null,E=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let w=0;w<E.length;w++){let C=E[w];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){E=y,A=E.length>0&&E[0].isRenderPass===!0;let S=a.width,w=a.height;E.length>0&&o===null&&(o=new xn(S,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),c=new xn(S,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let x=E[C];x.setSize&&x.setSize(S,w)}},this.begin=function(y,S){if(v||y.toneMapping===gi&&E.length===0)return!1;if(m=S,S!==null){let w=S.width,C=S.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=gi,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=p,v=!0;let w=a,C=o;for(let x=0;x<E.length;x++){let b=E[x];b.enabled!==!1&&(b.render(y,C,w,S),b.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,u.defines={},xe.getTransfer(d)===De&&(u.defines.SRGB_TRANSFER="");let x=mv[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(f,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Np=new hn,Ch=new ur(1,1),Fp=new ua,Op=new rl,Bp=new va,gp=[],xp=[],_p=new Float32Array(16),vp=new Float32Array(9),yp=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wc(i,t){let e=xp[t];e===void 0&&(e=new Int32Array(t),xp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function Sv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),on(e,n)}}function Mv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),on(e,n)}}function bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),on(e,n)}}function wv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function Cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function Lv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=e.isReversedDepthBuffer()?xc:gc,s=Ch):s=Np,e.setTexture2D(t||s,r)}function Dv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Op,r)}function Uv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bp,r)}function Nv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fp,r)}function Fv(i){switch(i){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return yv;case 35674:return Sv;case 35675:return Mv;case 35676:return bv;case 5124:case 35670:return wv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Tv;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Ov(i,t){i.uniform1fv(this.addr,t)}function Bv(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function zv(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function kv(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Vv(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gv(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hv(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wv(i,t){i.uniform1iv(this.addr,t)}function Xv(i,t){i.uniform2iv(this.addr,t)}function qv(i,t){i.uniform3iv(this.addr,t)}function Yv(i,t){i.uniform4iv(this.addr,t)}function $v(i,t){i.uniform1uiv(this.addr,t)}function Zv(i,t){i.uniform2uiv(this.addr,t)}function Jv(i,t){i.uniform3uiv(this.addr,t)}function Kv(i,t){i.uniform4uiv(this.addr,t)}function jv(i,t,e){let n=this.cache,r=t.length,s=wc(e,r);an(n,s)||(i.uniform1iv(this.addr,s),on(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ch:a=Np;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Qv(i,t,e){let n=this.cache,r=t.length,s=wc(e,r);an(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Op,s[a])}function ty(i,t,e){let n=this.cache,r=t.length,s=wc(e,r);an(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bp,s[a])}function ey(i,t,e){let n=this.cache,r=t.length,s=wc(e,r);an(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Fp,s[a])}function ny(i){switch(i){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Vv;case 35675:return Gv;case 35676:return Hv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return $v;case 36294:return Zv;case 36295:return Jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ey}}var Rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fv(e.type)}},Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ny(e.type)}},Ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function Sp(i,t){i.seq.push(t),i.map[t.id]=t}function iy(i,t,e){let n=i.name,r=n.length;for(Ah.lastIndex=0;;){let s=Ah.exec(n),a=Ah.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Sp(e,l===void 0?new Rh(o,i,t):new Ph(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ih(o),Sp(e,f)),e=f}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);iy(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&n.push(a)}return n}};function Mp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ry=37297,sy=0;function ay(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var bp=new jt;function oy(i){xe._getMatrix(bp,xe.workingColorSpace,i);let t=`mat3( ${bp.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ay(i.getShaderSource(t),o)}else return s}function ly(i,t){let e=oy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cy={[qu]:"Linear",[Yu]:"Reinhard",[$u]:"Cineon",[Zu]:"ACESFilmic",[Ku]:"AgX",[ju]:"Neutral",[Ju]:"Custom"};function uy(i,t){let e=cy[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vc=new D;function hy(){xe.getLuminanceCoefficients(vc);let i=vc.x.toFixed(4),t=vc.y.toFixed(4),e=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function dy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function py(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ga(i){return i!==""}function Ep(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ap(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var my=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(i){return i.replace(my,xy)}var gy=new Map;function xy(i,t){let e=le[t];if(e===void 0){let n=gy.get(t);if(n!==void 0)e=le[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lh(e)}var _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(i){return i.replace(_y,vy)}function vy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var yy={[Pa]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function Sy(i){return yy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var My={[_r]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function by(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":My[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wy={[Nr]:"ENVMAP_MODE_REFRACTION"};function Ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function Ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[i.combine]||"ENVMAP_BLENDING_NONE"}function Cy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ry(i,t,e,n){let r=i.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sy(e),l=by(e),u=Ey(e),f=Ty(e),h=Cy(e),d=fy(e),g=dy(s),v=r.createProgram(),p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`)):(p=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),m=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?le.tonemapping_pars_fragment:"",e.toneMapping!==gi?uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,ly("linearToOutputTexel",e.outputColorSpace),hy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ga).join(`
`)),a=Lh(a),a=Ep(a,e),a=Ap(a,e),o=Lh(o),o=Ep(o,e),o=Ap(o,e),a=Tp(a),o=Tp(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=E+p+a,y=E+m+o,S=Mp(r,r.VERTEX_SHADER,A),w=Mp(r,r.FRAGMENT_SHADER,y);r.attachShader(v,S),r.attachShader(v,w),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(v)||"",N=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(w)||"",I=U.trim(),k=N.trim(),X=L.trim(),ot=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,w);else{let st=wp(r,S,"vertex"),it=wp(r,w,"fragment");qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+st+`
`+it)}else I!==""?Wt("WebGLProgram: Program Info Log:",I):(k===""||X==="")&&($=!1);$&&(R.diagnostics={runnable:ot,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:m}})}r.deleteShader(S),r.deleteShader(w),x=new Cs(r,v),b=py(r,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,ry)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}var Py=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=Py++,this.code=t,this.usedTimes=0}};function Iy(i){return i===Ti||i===Oa||i===Ba}function Ly(i,t,e,n,r,s){let a=new ha,o=new Dh,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,b,T,R,U,N){let L=R.fog,I=U.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ot=t.get(x.envMap||k,X),$=ot&&ot.mapping===Ia?ot.image.height:null,st=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Wt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let it=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Pt=it!==void 0?it.length:0,Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let _e,Yt,me,tt;if(st){let Ne=Ln[st];_e=Ne.vertexShader,Yt=Ne.fragmentShader}else{_e=x.vertexShader,Yt=x.fragmentShader;let Ne=o.getVertexShaderStage(x),we=o.getFragmentShaderStage(x);o.update(x,Ne,we),me=Ne.id,tt=we.id}let at=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Zt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,ae=!!x.map,je=!!x.matcap,ie=!!ot,ge=!!x.aoMap,Ie=!!x.lightMap,Ht=!!x.bumpMap&&x.wireframe===!1,Xe=!!x.normalMap,Je=!!x.displacementMap,dn=!!x.emissiveMap,ze=!!x.metalnessMap,He=!!x.roughnessMap,z=x.anisotropy>0,Qe=x.clearcoat>0,ve=x.dispersion>0,P=x.retroreflectivity>0,_=x.iridescence>0,G=x.sheen>0,q=x.transmission>0,Q=z&&!!x.anisotropyMap,ht=Qe&&!!x.clearcoatMap,_t=Qe&&!!x.clearcoatNormalMap,et=Qe&&!!x.clearcoatRoughnessMap,Z=_&&!!x.iridescenceMap,gt=_&&!!x.iridescenceThicknessMap,Ft=G&&!!x.sheenColorMap,St=G&&!!x.sheenRoughnessMap,mt=!!x.specularMap,zt=!!x.specularColorMap,Vt=!!x.specularIntensityMap,$t=q&&!!x.transmissionMap,B=q&&!!x.thicknessMap,xt=!!x.gradientMap,rt=!!x.alphaMap,dt=x.alphaTest>0,pt=!!x.alphaHash,ct=!!x.extensions,Bt=gi;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Nt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:Yt,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&U.instanceColor!==null,instancingMorph:Zt&&U.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:je,envMap:ie,envMapMode:ie&&ot.mapping,envMapCubeUVHeight:$,aoMap:ge,lightMap:Ie,bumpMap:Ht,normalMap:Xe,displacementMap:Je,emissiveMap:dn,normalMapObjectSpace:Xe&&x.normalMapType===Jd,normalMapTangentSpace:Xe&&x.normalMapType===ah,packedNormalMap:Xe&&x.normalMapType===ah&&Iy(x.normalMap.format),metalnessMap:ze,roughnessMap:He,anisotropy:z,anisotropyMap:Q,clearcoat:Qe,clearcoatMap:ht,clearcoatNormalMap:_t,clearcoatRoughnessMap:et,dispersion:ve,retroreflection:P,iridescence:_,iridescenceMap:Z,iridescenceThicknessMap:gt,sheen:G,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:mt,specularColorMap:zt,specularIntensityMap:Vt,transmission:q,transmissionMap:$t,thicknessMap:B,gradientMap:xt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:dt,alphaHash:pt,combine:x.combine,mapUv:ae&&g(x.map.channel),aoMapUv:ge&&g(x.aoMap.channel),lightMapUv:Ie&&g(x.lightMap.channel),bumpMapUv:Ht&&g(x.bumpMap.channel),normalMapUv:Xe&&g(x.normalMap.channel),displacementMapUv:Je&&g(x.displacementMap.channel),emissiveMapUv:dn&&g(x.emissiveMap.channel),metalnessMapUv:ze&&g(x.metalnessMap.channel),roughnessMapUv:He&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(x.sheenRoughnessMap.channel),specularMapUv:mt&&g(x.specularMap.channel),specularColorMapUv:zt&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:$t&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:rt&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Xe||z),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(ae||rt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Tt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Et,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&xe.getTransfer(x.map.colorSpace)===De,decodeVideoTextureEmissive:dn&&x.emissiveMap.isVideoTexture===!0&&xe.getTransfer(x.emissiveMap.colorSpace)===De,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kn,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)b.push(T),b.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(m(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=d[x.type],T;if(b){let R=Ln[b];T=za.clone(R.uniforms)}else T=x.uniforms;return T}function y(x,b){let T=u.get(b);return T!==void 0?++T.usedTimes:(T=new Ry(i,b,x,r),l.push(T),u.set(b,T)),T}function S(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:C}}function Dy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,p,m){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[t]=E):(E.id=h.id,E.object=h,E.geometry=d,E.material=g,E.materialVariant=a(h),E.groupOrder=v,E.renderOrder=h.renderOrder,E.z=p,E.group=m),t++,E}function c(h,d,g,v,p,m,E){E.reversedDepth===!0&&(p=-p);let A=o(h,d,g,v,p,m);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):e.push(A)}function l(h,d,g,v,p,m){let E=o(h,d,g,v,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?r.unshift(E):e.unshift(E)}function u(h,d){e.length>1&&e.sort(h||Uy),n.length>1&&n.sort(d||Rp),r.length>1&&r.sort(d||Rp)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Ny(){let i=new WeakMap;function t(n,r){let s=i.get(n),a;return s===void 0?(a=new Pp,i.set(n,[a])):r>=s.length?(a=new Pp,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var By=0;function zy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ky(i){let t=new Fy,e=Oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Pe,a=new Pe;function o(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,E=0,A=0,y=0,S=0,w=0,C=0,x=0,b=0,T=0;l.sort(zy);for(let U=0,N=l.length;U<N;U++){let L=l[U],I=L.color,k=L.intensity,X=L.distance,ot=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ti?ot=L.shadow.map.texture:ot=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],k);T++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,it=e.get(L);it.shadowIntensity=st.intensity,it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=ot;let Pt=st.getViewportCount();for(let Et=0;Et<Pt;Et++)n.sunShadowMatrix[v+Et]=st.getMatrix(Et),n.sunShadowCascade[v+Et]=st._cascadeData[Et];v+=Pt,g++}n.sun[d]=$,d++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,it=e.get(L);it.shadowIntensity=st.intensity,it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=$,p++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(I).multiplyScalar(k),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[E]=$;let st=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,st.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[E]=st.matrix,L.castShadow){let it=e.get(L);it.shadowIntensity=st.intensity,it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,n.spotShadow[E]=it,n.spotShadowMap[E]=ot,C++}E++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(I).multiplyScalar(k),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=$,A++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let st=L.shadow,it=e.get(L);it.shadowIntensity=st.intensity,it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,it.shadowCameraNear=st.camera.near,it.shadowCameraFar=st.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=ot,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=$,m++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(k),$.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[y]=$,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==E||R.rectAreaLength!==A||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==x||R.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.sunLength=d,R.directionalLength=p,R.pointLength=m,R.spotLength=E,R.rectAreaLength=A,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=x,R.numLightProbes=T,n.version=By++)}function c(l,u){let f=0,h=0,d=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let y=l[E];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Ip(i){let t=new ky(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Vy(i){let t=new WeakMap;function e(r,s=0){let a=t.get(r),o;return a===void 0?(o=new Ip(i),t.set(r,[o])):s>=a.length?(o=new Ip(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`,Wy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Xy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Lp=new Pe,Va=new D,Th=new D;function qy(i,t,e){let n=new _a,r=new It,s=new It,a=new re,o=new ml,c=new gl,l={},u=e.maxTextureSize,f={[xr]:_n,[_n]:xr,[Kn]:Kn},h=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Gy,fragmentShader:Hy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new We;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ke(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let m=this.type;this.render=function(w,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Td&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pa);let b=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=m!==this.type;N&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,I=w.length;L<I;L++){let k=w[L],X=k.shadow;if(X===void 0){Wt("WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ot=X.getFrameExtents();r.multiply(ot),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,X.mapSize.y=s.y));let $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||N===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ms){if(k.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new xn(r.x,r.y,{format:Ti,type:Gn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),X.map.texture.name=k.name+".shadowMap",X.map.depthTexture=new ur(r.x,r.y,Vn),X.map.depthTexture.name=k.name+".shadowMapDepth",X.map.depthTexture.format=Ei,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn}else k.isPointLight?(X.map=new Sc(r.x),X.map.depthTexture=new al(r.x,xi)):(X.map=new xn(r.x,r.y),X.map.depthTexture=new ur(r.x,r.y,xi)),X.map.depthTexture.name=k.name+".shadowMap",X.map.depthTexture.format=Ei,this.type===Pa?(X.map.depthTexture.compareFunction=$?xc:gc,X.map.depthTexture.minFilter=rn,X.map.depthTexture.magFilter=rn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);let st=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();k.isPointLight!==!0&&X.updateMatrices(k,x);for(let it=0;it<st;it++){let Pt=X.getCamera(it);if(k.isPointLight){let Et=X.camera,_e=X.matrix,Yt=k.distance||Et.far;Yt!==Et.far&&(Et.far=Yt,Et.updateProjectionMatrix()),Va.setFromMatrixPosition(k.matrixWorld),Et.position.copy(Va),Th.copy(Et.position),Th.add(Wy[it]),Et.up.copy(Xy[it]),Et.lookAt(Th),Et.updateMatrixWorld(),_e.makeTranslation(-Va.x,-Va.y,-Va.z),Lp.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Lp,Et.coordinateSystem,Et.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,it),i.clear();else{it===0&&(i.setRenderTarget(X.map),i.clear());let Et=X.getViewport(it);a.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),U.viewport(a)}n=X.getFrustum(it),y(C,x,Pt,k,this.type)}X.isPointLightShadow!==!0&&this.type===Ms&&E(X,x),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,T,R)};function E(w,C){let x=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new xn(r.x,r.y,{format:Ti,type:Gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,d,v,null)}function A(w,C,x,b){let T=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)T=R;else if(T=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=T.uuid,N=C.uuid,L=l[U];L===void 0&&(L={},l[U]=L);let I=L[N];I===void 0&&(I=T.clone(),L[N]=I,C.addEventListener("dispose",S)),T=I}if(T.visible=C.visible,T.wireframe=C.wireframe,b===Ms?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=i.properties.get(T);U.light=x}return T}function y(w,C,x,b,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Ms)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let N=t.update(w),L=w.material;if(Array.isArray(L)){let I=N.groups;for(let k=0,X=I.length;k<X;k++){let ot=I[k],$=L[ot.materialIndex];if($&&$.visible){let st=A(w,$,b,T);w.onBeforeShadow(i,w,C,x,N,st,ot),i.renderBufferDirect(x,null,N,st,w,ot),w.onAfterShadow(i,w,C,x,N,st,ot)}}}else if(L.visible){let I=A(w,L,b,T);w.onBeforeShadow(i,w,C,x,N,I,null),i.renderBufferDirect(x,null,N,I,w,null),w.onAfterShadow(i,w,C,x,N,I,null)}}let U=w.children;for(let N=0,L=U.length;N<L;N++)y(U[N],C,x,b,T)}function S(w){w.target.removeEventListener("dispose",S);for(let x in l){let b=l[x],T=w.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function Yy(i,t){function e(){let B=!1,xt=new re,rt=null,dt=new re(0,0,0,0);return{setMask:function(pt){rt!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),rt=pt)},setLocked:function(pt){B=pt},setClear:function(pt,ct,Bt,Nt,Ne){Ne===!0&&(pt*=Nt,ct*=Nt,Bt*=Nt),xt.set(pt,ct,Bt,Nt),dt.equals(xt)===!1&&(i.clearColor(pt,ct,Bt,Nt),dt.copy(xt))},reset:function(){B=!1,rt=null,dt.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,rt=null,dt=null,pt=null;return{setReversed:function(ct){if(xt!==ct){let Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),xt=ct;let Nt=pt;pt=null,this.setClear(Nt)}},getReversed:function(){return xt},setTest:function(ct){ct?at(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!B&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(xt&&(ct=op[ct]),dt!==ct){switch(ct){case qo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ct}},setLocked:function(ct){B=ct},setClear:function(ct){pt!==ct&&(pt=ct,xt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){B=!1,rt=null,dt=null,pt=null,xt=!1}}}function r(){let B=!1,xt=null,rt=null,dt=null,pt=null,ct=null,Bt=null,Nt=null,Ne=null;return{setTest:function(we){B||(we?at(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(we){xt!==we&&!B&&(i.stencilMask(we),xt=we)},setFunc:function(we,Nn,Wn){(rt!==we||dt!==Nn||pt!==Wn)&&(i.stencilFunc(we,Nn,Wn),rt=we,dt=Nn,pt=Wn)},setOp:function(we,Nn,Wn){(ct!==we||Bt!==Nn||Nt!==Wn)&&(i.stencilOp(we,Nn,Wn),ct=we,Bt=Nn,Nt=Wn)},setLocked:function(we){B=we},setClear:function(we){Ne!==we&&(i.clearStencil(we),Ne=we)},reset:function(){B=!1,xt=null,rt=null,dt=null,pt=null,ct=null,Bt=null,Nt=null,Ne=null}}}let s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],v=null,p=!1,m=null,E=null,A=null,y=null,S=null,w=null,C=null,x=new Gt(0,0,0),b=0,T=!1,R=null,U=null,N=null,L=null,I=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ot>=1):$.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ot>=2);let st=null,it={},Pt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),_e=new re().fromArray(Pt),Yt=new re().fromArray(Et);function me(B,xt,rt,dt){let pt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(B,ct),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<rt;Bt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(xt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ct}let tt={};tt[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(ds),Ht(!1),Xe(ku),at(i.CULL_FACE),ge(mi);function at(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Tt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Zt(B,xt){return h[B]!==xt?(i.bindFramebuffer(B,xt),h[B]=xt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function wt(B,xt){let rt=g,dt=!1;if(B){rt=d.get(xt),rt===void 0&&(rt=[],d.set(xt,rt));let pt=B.textures;if(rt.length!==pt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Bt=pt.length;ct<Bt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=pt.length,dt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,dt=!0);dt&&i.drawBuffers(rt)}function ae(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let je={[Ur]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};je[Id]=i.MIN,je[Ld]=i.MAX;let ie={[Dd]:i.ZERO,[Ud]:i.ONE,[Nd]:i.SRC_COLOR,[Hu]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[Wu]:i.ONE_MINUS_SRC_ALPHA,[kd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(B,xt,rt,dt,pt,ct,Bt,Nt,Ne,we){if(B===mi){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(at(i.BLEND),p=!0),B!==Cd){if(B!==m||we!==T){if((E!==Ur||S!==Ur)&&(i.blendEquation(i.FUNC_ADD),E=Ur,S=Ur),we)switch(B){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",B);break}else switch(B){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vu:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",B);break}A=null,y=null,w=null,C=null,x.set(0,0,0),b=0,m=B,T=we}return}pt=pt||xt,ct=ct||rt,Bt=Bt||dt,(xt!==E||pt!==S)&&(i.blendEquationSeparate(je[xt],je[pt]),E=xt,S=pt),(rt!==A||dt!==y||ct!==w||Bt!==C)&&(i.blendFuncSeparate(ie[rt],ie[dt],ie[ct],ie[Bt]),A=rt,y=dt,w=ct,C=Bt),(Nt.equals(x)===!1||Ne!==b)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Ne),x.copy(Nt),b=Ne),m=B,T=!1}function Ie(B,xt){B.side===Kn?Tt(i.CULL_FACE):at(i.CULL_FACE);let rt=B.side===_n;xt&&(rt=!rt),Ht(rt),B.blending===bs&&B.transparent===!1?ge(mi):ge(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);let dt=B.stencilWrite;o.setTest(dt),dt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),dn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(B){R!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),R=B)}function Xe(B){B!==Ed?(at(i.CULL_FACE),B!==U&&(B===ku?i.cullFace(i.BACK):B===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),U=B}function Je(B){B!==N&&(X&&i.lineWidth(B),N=B)}function dn(B,xt,rt){B?(at(i.POLYGON_OFFSET_FILL),(L!==xt||I!==rt)&&(L=xt,I=rt,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,rt))):Tt(i.POLYGON_OFFSET_FILL)}function ze(B){B?at(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function He(B){B===void 0&&(B=i.TEXTURE0+k-1),st!==B&&(i.activeTexture(B),st=B)}function z(B,xt,rt){rt===void 0&&(st===null?rt=i.TEXTURE0+k-1:rt=st);let dt=it[rt];dt===void 0&&(dt={type:void 0,texture:void 0},it[rt]=dt),(dt.type!==B||dt.texture!==xt)&&(st!==rt&&(i.activeTexture(rt),st=rt),i.bindTexture(B,xt||tt[B]),dt.type=B,dt.texture=xt)}function Qe(){let B=it[st];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function G(){try{i.texSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function ht(){try{i.texStorage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function _t(){try{i.texStorage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function et(){try{i.texImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function Z(){try{i.texImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function gt(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Ft(B,xt){f[B]!==xt&&(i.pixelStorei(B,xt),f[B]=xt)}function St(B){_e.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function mt(B){Yt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Yt.copy(B))}function zt(B,xt){let rt=l.get(xt);rt===void 0&&(rt=new WeakMap,l.set(xt,rt));let dt=rt.get(B);dt===void 0&&(dt=i.getUniformBlockIndex(xt,B.name),rt.set(B,dt))}function Vt(B,xt){let dt=l.get(xt).get(B);c.get(xt)!==dt&&(i.uniformBlockBinding(xt,dt,B.__bindingPointIndex),c.set(xt,dt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},st=null,it={},h={},d=new WeakMap,g=[],v=null,p=!1,m=null,E=null,A=null,y=null,S=null,w=null,C=null,x=new Gt(0,0,0),b=0,T=!1,R=null,U=null,N=null,L=null,I=null,_e.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:Tt,bindFramebuffer:Zt,drawBuffers:wt,useProgram:ae,setBlending:ge,setMaterial:Ie,setFlipSided:Ht,setCullFace:Xe,setLineWidth:Je,setPolygonOffset:dn,setScissorTest:ze,activeTexture:He,bindTexture:z,unbindTexture:Qe,compressedTexImage2D:ve,compressedTexImage3D:P,texImage2D:et,texImage3D:Z,pixelStorei:Ft,getParameter:gt,updateUBOMapping:zt,uniformBlockBinding:Vt,texStorage2D:ht,texStorage3D:_t,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:St,viewport:mt,reset:$t}}function $y(i,t,e,n,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,_){return g?new OffscreenCanvas(P,_):ps("canvas")}function p(P,_,G){let q=1,Q=ve(P);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(q*Q.width),_t=Math.floor(q*Q.height);h===void 0&&(h=v(ht,_t));let et=_?v(ht,_t):h;return et.width=ht,et.height=_t,et.getContext("2d").drawImage(P,0,0,ht,_t),Wt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ht+"x"+_t+")."),et}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function E(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,_,G,q,Q,ht=!1){if(P!==null){if(i[P]!==void 0)return i[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _t;q&&(_t=t.get("EXT_texture_norm16"),_t||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=_;if(_===i.RED&&(G===i.FLOAT&&(et=i.R32F),G===i.HALF_FLOAT&&(et=i.R16F),G===i.UNSIGNED_BYTE&&(et=i.R8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.R16_EXT),G===i.SHORT&&_t&&(et=_t.R16_SNORM_EXT)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.R8UI),G===i.UNSIGNED_SHORT&&(et=i.R16UI),G===i.UNSIGNED_INT&&(et=i.R32UI),G===i.BYTE&&(et=i.R8I),G===i.SHORT&&(et=i.R16I),G===i.INT&&(et=i.R32I)),_===i.RG&&(G===i.FLOAT&&(et=i.RG32F),G===i.HALF_FLOAT&&(et=i.RG16F),G===i.UNSIGNED_BYTE&&(et=i.RG8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.RG16_EXT),G===i.SHORT&&_t&&(et=_t.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RG8UI),G===i.UNSIGNED_SHORT&&(et=i.RG16UI),G===i.UNSIGNED_INT&&(et=i.RG32UI),G===i.BYTE&&(et=i.RG8I),G===i.SHORT&&(et=i.RG16I),G===i.INT&&(et=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGB8UI),G===i.UNSIGNED_SHORT&&(et=i.RGB16UI),G===i.UNSIGNED_INT&&(et=i.RGB32UI),G===i.BYTE&&(et=i.RGB8I),G===i.SHORT&&(et=i.RGB16I),G===i.INT&&(et=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),G===i.UNSIGNED_INT&&(et=i.RGBA32UI),G===i.BYTE&&(et=i.RGBA8I),G===i.SHORT&&(et=i.RGBA16I),G===i.INT&&(et=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_SHORT&&_t&&(et=_t.RGB16_EXT),G===i.SHORT&&_t&&(et=_t.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),_===i.RGBA){let Z=ht?oa:xe.getTransfer(Q);G===i.FLOAT&&(et=i.RGBA32F),G===i.HALF_FLOAT&&(et=i.RGBA16F),G===i.UNSIGNED_BYTE&&(et=Z===De?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.RGBA16_EXT),G===i.SHORT&&_t&&(et=_t.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(P,_){let G;return P?_===null||_===xi||_===Es?G=i.DEPTH24_STENCIL8:_===Vn?G=i.DEPTH32F_STENCIL8:_===ws&&(G=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===Es?G=i.DEPTH_COMPONENT24:_===Vn?G=i.DEPTH_COMPONENT32F:_===ws&&(G=i.DEPTH_COMPONENT16),G}function w(P,_){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function C(P){let _=P.target;_.removeEventListener("dispose",C),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(P){let _=P.target;_.removeEventListener("dispose",x),R(_)}function b(P){let _=n.get(P);if(_.__webglInit===void 0)return;let G=P.source,q=d.get(G);if(q){let Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(P),Object.keys(q).length===0&&d.delete(G)}n.remove(P)}function T(P){let _=n.get(P);i.deleteTexture(_.__webglTexture);let G=P.source,q=d.get(G);delete q[_.__cacheKey],a.memory.textures--}function R(P){let _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=P.textures;for(let q=0,Q=G.length;q<Q;q++){let ht=n.get(G[q]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(P)}let U=0;function N(){U=0}function L(){return U}function I(P){U=P}function k(){let P=U;return P>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function X(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function ot(P,_){let G=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let q=P.image;if(q===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(G,P,_);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function $(P,_){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Tt(G,P,_);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function st(P,_){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Tt(G,P,_);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function it(P,_){let G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Zt(G,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}let Pt={[Qo]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},Et={[tn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Ll]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},_e={[jd]:i.NEVER,[ip]:i.ALWAYS,[Qd]:i.LESS,[gc]:i.LEQUAL,[tp]:i.EQUAL,[xc]:i.GEQUAL,[ep]:i.GREATER,[np]:i.NOTEQUAL};function Yt(P,_){if(_.type===Vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Ll||_.magFilter===La||_.magFilter===ai||_.minFilter===rn||_.minFilter===Ll||_.minFilter===La||_.minFilter===ai)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Pt[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Pt[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Pt[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Et[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==La&&_.minFilter!==ai||_.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function me(P,_){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",C));let q=_.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let ht=X(_);if(ht!==P.__cacheKey){Q[ht]===void 0&&(Q[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ht].usedTimes++;let _t=Q[P.__cacheKey];_t!==void 0&&(Q[P.__cacheKey].usedTimes--,_t.usedTimes===0&&T(_)),P.__cacheKey=ht,P.__webglTexture=Q[ht].texture}return G}function tt(P,_,G){return Math.floor(Math.floor(P/G)/_)}function at(P,_,G,q){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,q,_.data);else{ht.sort((Ft,St)=>Ft.start-St.start);let _t=0;for(let Ft=1;Ft<ht.length;Ft++){let St=ht[_t],mt=ht[Ft],zt=St.start+St.count,Vt=tt(mt.start,_.width,4),$t=tt(St.start,_.width,4);mt.start<=zt+1&&Vt===$t&&tt(mt.start+mt.count-1,_.width,4)===Vt?St.count=Math.max(St.count,mt.start+mt.count-St.start):(++_t,ht[_t]=mt)}ht.length=_t+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,St=ht.length;Ft<St;Ft++){let mt=ht[Ft],zt=Math.floor(mt.start/4),Vt=Math.ceil(mt.count/4),$t=zt%_.width,B=Math.floor(zt/_.width),xt=Vt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,xt,rt,G,q,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Tt(P,_,G){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let Q=me(P,_),ht=_.source;e.bindTexture(q,P.__webglTexture,i.TEXTURE0+G);let _t=n.get(ht);if(ht.version!==_t.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=xe.getPrimaries(xe.workingColorSpace),dt=_.colorSpace===Ki?null:xe.getPrimaries(_.colorSpace),pt=_.colorSpace===Ki||rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=p(_.image,!1,r.maxTextureSize);Z=Qe(_,Z);let gt=s.convert(_.format,_.colorSpace),Ft=s.convert(_.type),St=y(_.internalFormat,gt,Ft,_.normalized,_.colorSpace,_.isVideoTexture);Yt(q,_);let mt,zt=_.mipmaps,Vt=_.isVideoTexture!==!0,$t=_t.__version===void 0||Q===!0,B=ht.dataReady,xt=w(_,Z);if(_.isDepthTexture)St=S(_.format===vr,_.type),$t&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,St,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,gt,Ft,null));else if(_.isDataTexture)if(zt.length>0){Vt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let rt=0,dt=zt.length;rt<dt;rt++)mt=zt[rt],Vt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,gt,Ft,mt.data):e.texImage2D(i.TEXTURE_2D,rt,St,mt.width,mt.height,0,gt,Ft,mt.data);_.generateMipmaps=!1}else Vt?($t&&e.texStorage2D(i.TEXTURE_2D,xt,St,Z.width,Z.height),B&&at(_,Z,gt,Ft)):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,gt,Ft,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,zt[0].width,zt[0].height,Z.depth);for(let rt=0,dt=zt.length;rt<dt;rt++)if(mt=zt[rt],_.format!==Qn)if(gt!==null)if(Vt){if(B)if(_.layerUpdates.size>0){let pt=gh(mt.width,mt.height,_.format,_.type);for(let ct of _.layerUpdates){let Bt=mt.data.subarray(ct*pt/mt.data.BYTES_PER_ELEMENT,(ct+1)*pt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,mt.width,mt.height,1,gt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,Z.depth,gt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,St,mt.width,mt.height,Z.depth,0,mt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,Z.depth,gt,Ft,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,St,mt.width,mt.height,Z.depth,0,gt,Ft,mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Vt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,St,zt[0].width,zt[0].height);for(let rt=0,dt=zt.length;rt<dt;rt++)mt=zt[rt],_.format!==Qn?gt!==null?Vt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,St,mt.width,mt.height,0,mt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,gt,Ft,mt.data):e.texImage2D(i.TEXTURE_2D,rt,St,mt.width,mt.height,0,gt,Ft,mt.data)}else if(_.isDataArrayTexture)if(Vt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,St,Z.width,Z.height,Z.depth),B)if(_.layerUpdates.size>0){let rt=gh(Z.width,Z.height,_.format,_.type);for(let dt of _.layerUpdates){let pt=Z.data.subarray(dt*rt/Z.data.BYTES_PER_ELEMENT,(dt+1)*rt/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,Z.width,Z.height,1,gt,Ft,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,gt,Ft,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,Z.width,Z.height,Z.depth,0,gt,Ft,Z.data);else if(_.isData3DTexture)Vt?($t&&e.texStorage3D(i.TEXTURE_3D,xt,St,Z.width,Z.height,Z.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,gt,Ft,Z.data)):e.texImage3D(i.TEXTURE_3D,0,St,Z.width,Z.height,Z.depth,0,gt,Ft,Z.data);else if(_.isFramebufferTexture){if($t)if(Vt)e.texStorage2D(i.TEXTURE_2D,xt,St,Z.width,Z.height);else{let rt=Z.width,dt=Z.height;for(let pt=0;pt<xt;pt++)e.texImage2D(i.TEXTURE_2D,pt,St,rt,dt,0,gt,Ft,null),rt>>=1,dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Z.parentNode!==rt){rt.appendChild(Z),f.add(_),rt.onpaint=dt=>{let pt=dt.changedElements;for(let ct of f)pt.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let pt=i.RGBA,ct=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,ct,Bt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Vt&&$t){let rt=ve(zt[0]);e.texStorage2D(i.TEXTURE_2D,xt,St,rt.width,rt.height)}for(let rt=0,dt=zt.length;rt<dt;rt++)mt=zt[rt],Vt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt,Ft,mt):e.texImage2D(i.TEXTURE_2D,rt,St,gt,Ft,mt);_.generateMipmaps=!1}else if(Vt){if($t){let rt=ve(Z);e.texStorage2D(i.TEXTURE_2D,xt,St,rt.width,rt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ft,Z)}else e.texImage2D(i.TEXTURE_2D,0,St,gt,Ft,Z);m(_)&&E(q),_t.__version=ht.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Zt(P,_,G){if(_.image.length!==6)return;let q=me(P,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let ht=n.get(Q);if(Q.version!==ht.__version||q===!0){e.activeTexture(i.TEXTURE0+G);let _t=xe.getPrimaries(xe.workingColorSpace),et=_.colorSpace===Ki?null:xe.getPrimaries(_.colorSpace),Z=_.colorSpace===Ki||_t===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let gt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!gt&&!Ft?St[ct]=p(_.image[ct],!0,r.maxCubemapSize):St[ct]=Ft?_.image[ct].image:_.image[ct],St[ct]=Qe(_,St[ct]);let mt=St[0],zt=s.convert(_.format,_.colorSpace),Vt=s.convert(_.type),$t=y(_.internalFormat,zt,Vt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,xt=ht.__version===void 0||q===!0,rt=Q.dataReady,dt=w(_,mt);Yt(i.TEXTURE_CUBE_MAP,_);let pt;if(gt){B&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,mt.width,mt.height);for(let ct=0;ct<6;ct++){pt=St[ct].mipmaps;for(let Bt=0;Bt<pt.length;Bt++){let Nt=pt[Bt];_.format!==Qn?zt!==null?B?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Nt.width,Nt.height,zt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,$t,Nt.width,Nt.height,0,Nt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Nt.width,Nt.height,zt,Vt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,$t,Nt.width,Nt.height,0,zt,Vt,Nt.data)}}}else{if(pt=_.mipmaps,B&&xt){pt.length>0&&dt++;let ct=ve(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,$t,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ft){B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,zt,Vt,St[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,$t,St[ct].width,St[ct].height,0,zt,Vt,St[ct].data);for(let Bt=0;Bt<pt.length;Bt++){let Ne=pt[Bt].image[ct].image;B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Ne.width,Ne.height,zt,Vt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,$t,Ne.width,Ne.height,0,zt,Vt,Ne.data)}}else{B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Vt,St[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,$t,zt,Vt,St[ct]);for(let Bt=0;Bt<pt.length;Bt++){let Nt=pt[Bt];B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,zt,Vt,Nt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,$t,zt,Vt,Nt.image[ct])}}}m(_)&&E(i.TEXTURE_CUBE_MAP),ht.__version=Q.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function wt(P,_,G,q,Q,ht){let _t=s.convert(G.format,G.colorSpace),et=s.convert(G.type),Z=y(G.internalFormat,_t,et,G.normalized,G.colorSpace),gt=n.get(_),Ft=n.get(G);if(Ft.__renderTarget=_,!gt.__hasExternalTextures){let St=Math.max(1,_.width>>ht),mt=Math.max(1,_.height>>ht);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ht,Z,St,mt,_.depth,0,_t,et,null):e.texImage2D(Q,ht,Z,St,mt,0,_t,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Ft.__webglTexture,0,ze(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Ft.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){let q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ht=S(_.stencilBuffer,Q),_t=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(_),ht,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(_),ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,P)}else{let q=_.textures;for(let Q=0;Q<q.length;Q++){let ht=q[Q],_t=s.convert(ht.format,ht.colorSpace),et=s.convert(ht.type),Z=y(ht.internalFormat,_t,et,ht.normalized,ht.colorSpace);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze(_),Z,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze(_),Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(P,_,G){let q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let gt=s.convert(_.depthTexture.format),Ft=s.convert(_.depthTexture.type),St;_.depthTexture.format===Ei?St=i.DEPTH_COMPONENT24:_.depthTexture.format===vr&&(St=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,St,_.width,_.height,0,gt,Ft,null)}}else ot(_.depthTexture,0);let ht=Q.__webglTexture,_t=ze(_),et=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Z=_.depthTexture.format===vr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,ht,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,ht,0);else if(_.depthTexture.format===vr)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,ht,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(P){let _=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)je(_.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?je(_.__webglFramebuffer[0],P,0):je(_.__webglFramebuffer,P,0)}else if(G){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),ae(_.__webglDepthbuffer[q],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ae(_.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,_,G){let q=n.get(P);_!==void 0&&wt(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ie(P)}function Ie(P){let _=P.texture,G=n.get(P),q=n.get(_);P.addEventListener("dispose",x);let Q=P.textures,ht=P.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),ht){G.__webglFramebuffer=[];for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[et]=[];for(let Z=0;Z<_.mipmaps.length;Z++)G.__webglFramebuffer[et][Z]=i.createFramebuffer()}else G.__webglFramebuffer[et]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let et=0;et<_.mipmaps.length;et++)G.__webglFramebuffer[et]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_t)for(let et=0,Z=Q.length;et<Z;et++){let gt=n.get(Q[et]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&He(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let Z=Q[et];G.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[et]);let gt=s.convert(Z.format,Z.colorSpace),Ft=s.convert(Z.type),St=y(Z.internalFormat,gt,Ft,Z.normalized,Z.colorSpace,P.isXRRenderTarget===!0),mt=ze(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,G.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)wt(G.__webglFramebuffer[et][Z],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Z);else wt(G.__webglFramebuffer[et],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let et=0,Z=Q.length;et<Z;et++){let gt=Q[et],Ft=n.get(gt),St=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),Yt(St,gt),wt(G.__webglFramebuffer,P,gt,i.COLOR_ATTACHMENT0+et,St,0),m(gt)&&E(St)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,q.__webglTexture),Yt(et,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)wt(G.__webglFramebuffer[Z],P,_,i.COLOR_ATTACHMENT0,et,Z);else wt(G.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,et,0);m(_)&&E(et),e.unbindTexture()}P.depthBuffer&&ie(P)}function Ht(P){let _=P.textures;for(let G=0,q=_.length;G<q;G++){let Q=_[G];if(m(Q)){let ht=A(P),_t=n.get(Q).__webglTexture;e.bindTexture(ht,_t),E(ht),e.unbindTexture()}}}let Xe=[],Je=[];function dn(P){if(P.samples>0){if(He(P)===!1){let _=P.textures,G=P.width,q=P.height,Q=i.COLOR_BUFFER_BIT,ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(P),et=_.length>1;if(et)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let Z=P.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[gt]);let Ft=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,Q,i.NEAREST),c===!0&&(Xe.length=0,Je.length=0,Xe.push(i.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Xe.push(ht),Je.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[gt]);let Ft=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ze(P){return Math.min(r.maxSamples,P.samples)}function He(P){let _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(P){let _=a.render.frame;u.get(P)!==_&&(u.set(P,_),P.update())}function Qe(P,_){let G=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==aa&&G!==Ki&&(xe.getTransfer(G)===De?(q!==Qn||Q!==jn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",G)),_}function ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=I,this.setTexture2D=ot,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=it,this.rebindTextures=ge,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zy(i,t){function e(n,r=Ki){let s,a=xe.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return i.BYTE;if(n===eh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Dl)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===sh)return i.RGB;if(n===Qn)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===Da||n===Ua||n===Na||n===Fa)if(a===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Vl||n===Gl||n===Hl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Oa||n===Zl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wl||n===Xl)return a===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ql)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return s.COMPRESSED_R11_EAC;if(n===$l)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return s.COMPRESSED_RG11_EAC;if(n===Zl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jl)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===hc||n===fc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uc)return a===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===pc||n===Ba||n===mc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:Jy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends Ai{constructor(t,e){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",p=new Nh,m={},E=e.getContextAttributes(),A=null,y=null,S=[],w=[],C=new It,x=null,b=null,T=new un;T.viewport=new re;let R=new un;R.viewport=new re;let U=[T,R],N=new Cl,L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=S[tt];return at===void 0&&(at=new _s,S[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=S[tt];return at===void 0&&(at=new _s,S[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=S[tt];return at===void 0&&(at=new _s,S[tt]=at),at.getHandSpace()};function k(tt){let at=w.indexOf(tt.inputSource);if(at===-1)return;let Tt=S[at];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,l||a),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ot);for(let tt=0;tt<S.length;tt++){let at=w[tt];at!==null&&(w[tt]=null,S[tt].disconnect(at))}L=null,I=null,p.reset();for(let tt in m)delete m[tt];if(t.setRenderTarget(A),d=null,h=null,f=null,r=null,y=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),b!==null){let tt=b.camera;tt.fov=b.fov,tt.zoom=b.zoom,tt.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ot),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Zt=null,wt=null;E.depth&&(wt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=E.stencil?vr:Ei,Zt=E.stencil?Es:xi);let ae={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new xn(h.textureWidth,h.textureHeight,{format:Qn,type:jn,depthTexture:new ur(h.textureWidth,h.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Tt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Tt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xn(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(tt){for(let at=0;at<tt.removed.length;at++){let Tt=tt.removed[at],Zt=w.indexOf(Tt);Zt>=0&&(w[Zt]=null,S[Zt].disconnect(Tt))}for(let at=0;at<tt.added.length;at++){let Tt=tt.added[at],Zt=w.indexOf(Tt);if(Zt===-1){for(let ae=0;ae<S.length;ae++)if(ae>=w.length){w.push(Tt),Zt=ae;break}else if(w[ae]===null){w[ae]=Tt,Zt=ae;break}if(Zt===-1)break}let wt=S[Zt];wt&&wt.connect(Tt)}}let $=new D,st=new D;function it(tt,at,Tt){$.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(Tt.matrixWorld);let Zt=$.distanceTo(st),wt=at.projectionMatrix.elements,ae=Tt.projectionMatrix.elements,je=wt[14]/(wt[10]-1),ie=wt[14]/(wt[10]+1),ge=(wt[9]+1)/wt[5],Ie=(wt[9]-1)/wt[5],Ht=(wt[8]-1)/wt[0],Xe=(ae[8]+1)/ae[0],Je=je*Ht,dn=je*Xe,ze=Zt/(-Ht+Xe),He=ze*-Ht;if(at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(He),tt.translateZ(ze),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),wt[10]===-1)tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let z=je+ze,Qe=ie+ze,ve=Je-He,P=dn+(Zt-He),_=ge*ie/Qe*z,G=Ie*ie/Qe*z;tt.projectionMatrix.makePerspective(ve,P,_,G,z,Qe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Pt(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;let at=tt.near,Tt=tt.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),N.near=R.near=T.near=at,N.far=R.far=T.far=Tt,(L!==N.near||I!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,I=N.far),N.layers.mask=tt.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let Zt=tt.parent,wt=N.cameras;Pt(N,Zt);for(let ae=0;ae<wt.length;ae++)Pt(wt[ae],Zt);wt.length===2?it(N,T,R):N.projectionMatrix.copy(T.projectionMatrix),b===null&&tt.isPerspectiveCamera&&(b={camera:tt,fov:tt.fov,zoom:tt.zoom}),Et(tt,N,Zt)};function Et(tt,at,Tt){Tt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=gs*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(tt){c=tt,h!==null&&(h.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(tt){return m[tt]};let _e=null;function Yt(tt,at){if(u=at.getViewerPose(l||a),g=at,u!==null){let Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Zt=!1;Tt.length!==N.cameras.length&&(N.cameras.length=0,Zt=!0);for(let ie=0;ie<Tt.length;ie++){let ge=Tt[ie],Ie=null;if(d!==null)Ie=d.getViewport(ge);else{let Xe=f.getViewSubImage(h,ge);Ie=Xe.viewport,ie===0&&(t.setRenderTargetTextures(y,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(y))}let Ht=U[ie];Ht===void 0&&(Ht=new un,Ht.layers.enable(ie),Ht.viewport=new re,U[ie]=Ht),Ht.matrix.fromArray(ge.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ge.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ie===0&&(N.matrix.copy(Ht.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Zt===!0&&N.cameras.push(Ht)}let wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let ie=f.getDepthInformation(Tt[0]);ie&&ie.isValid&&ie.texture&&p.init(ie,r.renderState)}if(wt&&wt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let ie=0;ie<Tt.length;ie++){let ge=Tt[ie].camera;if(ge){let Ie=m[ge];Ie||(Ie=new ya,m[ge]=Ie);let Ht=f.getCameraImage(ge);Ie.sourceTexture=Ht}}}}for(let Tt=0;Tt<S.length;Tt++){let Zt=w[Tt],wt=S[Tt];Zt!==null&&wt!==void 0&&wt.update(Zt,at,l||a)}_e&&_e(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let me=new Dp;me.setAnimationLoop(Yt),this.setAnimationLoop=function(tt){_e=tt},this.dispose=function(){}}},jy=new Pe,zp=new jt;zp.set(-1,0,0,0,1,0,0,0,1);function Qy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,dh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,E,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,E,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E=t.get(m),A=E.envMap,y=E.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tS(i,t,e,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let w=S.program;n.uniformBlockBinding(y,w)}function l(y,S){let w=r[y.id];w===void 0&&(p(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",E));let C=S.program;n.updateUBOMapping(y,C);let x=t.render.frame;s[y.id]!==x&&(h(y),s[y.id]=x)}function u(y){let S=f();y.__bindingPointIndex=S;let w=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=r[y.id],w=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,b=w.length;x<b;x++){let T=w[x];if(Array.isArray(T))for(let R=0,U=T.length;R<U;R++)d(T[R],x,R,C);else d(T,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,w,C){if(v(y,S,w,C)===!0){let x=y.__offset,b=y.value;if(Array.isArray(b)){let T=0;for(let R=0;R<b.length;R++){let U=b[R],N=m(U);g(U,y.__data,T),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,w){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,w)}function v(y,S,w,C){let x=y.value,b=S+"_"+w;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:ArrayBuffer.isView(x)?C[b]=x.slice():C[b]=x.clone(),!0;{let T=C[b];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return C[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function p(y){let S=y.uniforms,w=0,C=16;for(let b=0,T=S.length;b<T;b++){let R=Array.isArray(S[b])?S[b]:[S[b]];for(let U=0,N=R.length;U<N;U++){let L=R[U],I=Array.isArray(L.value)?L.value:[L.value];for(let k=0,X=I.length;k<X;k++){let ot=I[k],$=m(ot),st=w%C,it=st%$.boundary,Pt=st+it;w+=it,Pt!==0&&C-Pt<$.storage&&(w+=C-Pt),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=$.storage}}}let x=w%C;return x>0&&(w+=C-x),y.__size=w,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),S}function E(y){let S=y.target;S.removeEventListener("dispose",E);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function A(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}var eS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function nS(){return Ci===null&&(Ci=new pi(eS,16,16,Ti,Gn),Ci.name="DFG_LUT",Ci.minFilter=rn,Ci.magFilter=rn,Ci.wrapS=wi,Ci.wrapT=wi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Mc=class{constructor(t={}){let{canvas:e=rp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=jn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,p=new Set([zl,Bl,Ol]),m=new Set([jn,xi,ws,Es,Ul,Nl]),E=new Uint32Array(4),A=new Int32Array(4),y=new D,S=null,w=null,C=[],x=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,U=null,N=null,L=null,I=null;this._outputColorSpace=gn;let k=0,X=0,ot=null,$=-1,st=null,it=new re,Pt=new re,Et=null,_e=new Gt(0),Yt=0,me=e.width,tt=e.height,at=1,Tt=null,Zt=null,wt=new re(0,0,me,tt),ae=new re(0,0,me,tt),je=!1,ie=new _a,ge=!1,Ie=!1,Ht=new Pe,Xe=new D,Je=new re,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function He(){return ot===null?at:1}let z=n;function Qe(M,O){return e.getContext(M,O)}let ve,P,_,G,q,Q,ht,_t,et,Z,gt,Ft,St,mt,zt,Vt,$t,B,xt,rt,dt,pt,ct;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),z===null){let O="webgl2";if(z=Qe(O,M),z===null)throw Qe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(M){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),qt("WebGLRenderer: "+M.message),M}function Bt(){ve=new cv(z),ve.init(),dt=new Zy(z,ve),P=new Q_(z,ve,t,dt),_=new Yy(z,ve),P.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),N=z.createFramebuffer(),L=z.createFramebuffer(),I=z.createFramebuffer(),G=new fv(z),q=new Dy,Q=new $y(z,ve,_,q,P,dt,G),ht=new lv(T),_t=new p0(z),pt=new K_(z,_t),et=new uv(z,_t,G,pt),Z=new pv(z,et,_t,pt,G),B=new dv(z,P,Q),zt=new tv(q),gt=new Ly(T,ht,ve,P,pt,zt),Ft=new Qy(T,q),St=new Ny,mt=new Vy(ve),$t=new J_(T,ht,_,Z,g,c),Vt=new qy(T,Z,P),ct=new tS(z,G,P,_),xt=new j_(z,ve,G),rt=new hv(z,ve,G),G.programs=gt.programs,T.capabilities=P,T.extensions=ve,T.properties=q,T.renderLists=St,T.shadowMap=Vt,T.state=_,T.info=G}v!==jn&&(b=new gv(v,e.width,e.height,o,r,s));let Nt=new Fh(T,z);this.xr=Nt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(M){M!==void 0&&(at=M,this.setSize(me,tt,!1))},this.getSize=function(M){return M.set(me,tt)},this.setSize=function(M,O,J=!0){if(Nt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=M,tt=O,e.width=Math.floor(M*at),e.height=Math.floor(O*at),J===!0&&(e.style.width=M+"px",e.style.height=O+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(me*at,tt*at).floor()},this.setDrawingBufferSize=function(M,O,J){me=M,tt=O,at=J,e.width=Math.floor(M*J),e.height=Math.floor(O*J),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(v===jn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,O,J,H){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,O,J,H),_.viewport(it.copy(wt).multiplyScalar(at).round())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,O,J,H){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,O,J,H),_.scissor(Pt.copy(ae).multiplyScalar(at).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){_.setScissorTest(je=M)},this.setOpaqueSort=function(M){Tt=M},this.setTransparentSort=function(M){Zt=M},this.getClearColor=function(M){return M.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,J=!0){let H=0;if(M){let W=!1;if(ot!==null){let Mt=ot.texture.format;W=p.has(Mt)}if(W){let Mt=ot.texture.type,At=m.has(Mt),bt=$t.getClearColor(),Dt=$t.getClearAlpha(),Ot=bt.r,Qt=bt.g,ne=bt.b;At?(E[0]=Ot,E[1]=Qt,E[2]=ne,E[3]=Dt,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=Ot,A[1]=Qt,A[2]=ne,A[3]=Dt,z.clearBufferiv(z.COLOR,0,A))}else H|=z.COLOR_BUFFER_BIT}O&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),$t.dispose(),St.dispose(),mt.dispose(),q.dispose(),ht.dispose(),Z.dispose(),pt.dispose(),ct.dispose(),gt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",co),Nt.removeEventListener("sessionend",uo),ti.stop()};function Ne(M){M.preventDefault(),ca("WebGLRenderer: Context Lost."),R=!0}function we(){ca("WebGLRenderer: Context Restored."),R=!1;let M=G.autoReset,O=Vt.enabled,J=Vt.autoUpdate,H=Vt.needsUpdate,W=Vt.type;Bt(),G.autoReset=M,Vt.enabled=O,Vt.autoUpdate=J,Vt.needsUpdate=H,Vt.type=W}function Nn(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Wn(M){let O=M.target;O.removeEventListener("dispose",Wn),eu(O)}function eu(M){oo(M),q.remove(M)}function oo(M){let O=q.get(M).programs;O!==void 0&&(O.forEach(function(J){gt.releaseProgram(J)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,J,H,W,Mt){O===null&&(O=dn);let At=W.isMesh&&W.matrixWorld.determinantAffine()<0,bt=Ws(M,O,J,H,W);_.setMaterial(H,At);let Dt=J.index,Ot=1;if(H.wireframe===!0){if(Dt=et.getWireframeAttribute(J),Dt===void 0)return;Ot=2}let Qt=J.drawRange,ne=J.attributes.position,Lt=Qt.start*Ot,Ee=(Qt.start+Qt.count)*Ot;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Ot),Ee=Math.min(Ee,(Mt.start+Mt.count)*Ot)),Dt!==null?(Lt=Math.max(Lt,0),Ee=Math.min(Ee,Dt.count)):ne!=null&&(Lt=Math.max(Lt,0),Ee=Math.min(Ee,ne.count));let $e=Ee-Lt;if($e<0||$e===1/0)return;pt.setup(W,H,bt,J,Dt);let Jt,Le=xt;if(Dt!==null&&(Jt=_t.get(Dt),Le=rt,Le.setIndex(Jt)),W.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*He()),Le.setMode(z.LINES)):Le.setMode(z.TRIANGLES);else if(W.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),_.setLineWidth(Re*He()),W.isLineSegments?Le.setMode(z.LINES):W.isLineLoop?Le.setMode(z.LINE_LOOP):Le.setMode(z.LINE_STRIP)}else W.isPoints?Le.setMode(z.POINTS):W.isSprite&&Le.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Re=W._multiDrawStarts,vt=W._multiDrawCounts,pn=W._multiDrawCount,ue=Dt?_t.get(Dt).bytesPerElement:1,wn=q.get(H).currentProgram.getUniforms();for(let Fn=0;Fn<pn;Fn++)wn.setValue(z,"_gl_DrawID",Fn),Le.render(Re[Fn]/ue,vt[Fn])}else if(W.isInstancedMesh)Le.renderInstances(Lt,$e,W.count);else if(J.isInstancedBufferGeometry){let Re=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Re);Le.renderInstances(Lt,$e,vt)}else Le.render(Lt,$e)};function lo(M,O,J,H){U!==null&&M.isNodeMaterial&&U.setObject(H,M),ge===!0&&zt.setState(M,J,!1),M.transparent===!0&&M.side===Kn&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,Si(M,O,H),M.side=xr,M.needsUpdate=!0,Si(M,O,H),M.side=Kn):Si(M,O,H)}this.compile=function(M,O,J=null){J===null&&(J=M),U!==null&&U.renderStart(M,O,J),w=mt.get(J),w.init(O),x.push(w),J.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),M!==J&&M.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ie=this.localClippingEnabled,ge=zt.init(this.clippingPlanes,Ie),ge===!0&&zt.setGlobalState(this.clippingPlanes,O),U!==null&&Vt.render(w.state.shadowsArray,J,O);let H=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){let bt=Mt[At];lo(bt,J,O,W),H.add(bt)}else lo(Mt,J,O,W),H.add(Mt)}),w=x.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(M,O,J=null){let H=this.compile(M,O,J);return new Promise(W=>{function Mt(){if(H.forEach(function(At){let Dt=q.get(At).currentProgram;(Dt===void 0||Dt.isReady())&&H.delete(At)}),H.size===0){W(M);return}setTimeout(Mt,10)}ve.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Hr=null;function nu(M){Hr&&Hr(M)}function co(){ti.stop()}function uo(){ti.start()}let ti=new Dp;ti.setAnimationLoop(nu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){Hr=M,Nt.setAnimationLoop(M),M===null?ti.stop():ti.start()},Nt.addEventListener("sessionstart",co),Nt.addEventListener("sessionend",uo),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(M,O);let J=Nt.enabled===!0&&Nt.isPresenting===!0,H=b!==null&&(ot===null||J)&&b.begin(T,ot);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(O),O=Nt.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,O,ot),w=mt.get(M,x.length),w.init(O),w.state.textureUnits=Q.getTextureUnits(),x.push(w),Ht.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix(Ht,di,O.reversedDepth),Ie=this.localClippingEnabled,ge=zt.init(this.clippingPlanes,Ie),S=St.get(M,C.length),S.init(),C.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let At=T.xr.getDepthSensingMesh();At!==null&&Ni(At,O,-1/0,T.sortObjects)}Ni(M,O,0,T.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),T.sortObjects===!0&&S.sort(Tt,Zt),ze=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ze&&$t.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&zt.beginShadows();let W=w.state.shadowsArray;if(Vt.render(W,M,O),ge===!0&&zt.endShadows(),(H&&b.hasRenderPass())===!1){let At=S.opaque,bt=S.transmissive;if(w.setupLights(),O.isArrayCamera){let Dt=O.cameras;if(bt.length>0)for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let ne=Dt[Ot];ho(At,bt,M,ne)}ze&&$t.render(M);for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let ne=Dt[Ot];Qi(S,M,ne,ne.viewport)}}else bt.length>0&&ho(At,bt,M,O),ze&&$t.render(M),Qi(S,M,O)}ot!==null&&X===0&&(Q.updateMultisampleRenderTarget(ot),Q.updateRenderTargetMipmap(ot)),H&&b.end(T),M.isScene===!0&&M.onAfterRender(T,M,O),pt.resetDefaultState(),$=-1,st=null,x.pop(),x.length>0?(w=x[x.length-1],Q.setTextureUnits(w.state.textureUnits),ge===!0&&zt.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,U!==null&&U.renderEnd()};function Ni(M,O,J,H){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ie)){H&&Je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ht);let At=Z.update(M),bt=M.material;bt.visible&&S.push(M,At,bt,J,Je.z,null,O)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ie))){let At=Z.update(M),bt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Je.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Je.copy(At.boundingSphere.center)),Je.applyMatrix4(M.matrixWorld).applyMatrix4(Ht)),Array.isArray(bt)){let Dt=At.groups;for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let ne=Dt[Ot],Lt=bt[ne.materialIndex];Lt&&Lt.visible&&S.push(M,At,Lt,J,Je.z,ne,O)}}else bt.visible&&S.push(M,At,bt,J,Je.z,null,O)}}let Mt=M.children;for(let At=0,bt=Mt.length;At<bt;At++)Ni(Mt[At],O,J,H)}function Qi(M,O,J,H){let{opaque:W,transmissive:Mt,transparent:At}=M;w.setupLightsView(J),ge===!0&&zt.setGlobalState(T.clippingPlanes,J),H&&_.viewport(it.copy(H)),W.length>0&&Mr(W,O,J),Mt.length>0&&Mr(Mt,O,J),At.length>0&&Mr(At,O,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ho(M,O,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Lt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new xn(1,1,{generateMipmaps:!0,type:Lt?Gn:jn,minFilter:ai,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[H.id],At=H.viewport||it;Mt.setSize(At.z*T.transmissionResolutionScale,At.w*T.transmissionResolutionScale);let bt=T.getRenderTarget(),Dt=T.getActiveCubeFace(),Ot=T.getActiveMipmapLevel();T.setRenderTarget(Mt),T.getClearColor(_e),Yt=T.getClearAlpha(),Yt<1&&T.setClearColor(16777215,.5),T.clear(),ze&&$t.render(J);let Qt=T.toneMapping;T.toneMapping=gi;let ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ge===!0&&zt.setGlobalState(T.clippingPlanes,H),Mr(M,J,H),Q.updateMultisampleRenderTarget(Mt),Q.updateRenderTargetMipmap(Mt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Ee=0,$e=O.length;Ee<$e;Ee++){let Jt=O[Ee],{object:Le,geometry:Re,material:vt,group:pn}=Jt;if(vt.side===Kn&&Le.layers.test(H.layers)){let ue=vt.side;vt.side=_n,vt.needsUpdate=!0,Wr(Le,J,H,Re,vt,pn),vt.side=ue,vt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Q.updateMultisampleRenderTarget(Mt),Q.updateRenderTargetMipmap(Mt))}T.setRenderTarget(bt,Dt,Ot),T.setClearColor(_e,Yt),ne!==void 0&&(H.viewport=ne),T.toneMapping=Qt}function Mr(M,O,J){let H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Mt=M.length;W<Mt;W++){let At=M[W],{object:bt,geometry:Dt,group:Ot}=At,Qt=At.material;Qt.allowOverride===!0&&H!==null&&(Qt=H),bt.layers.test(J.layers)&&Wr(bt,O,J,Dt,Qt,Ot)}}function Wr(M,O,J,H,W,Mt){U!==null&&W.isNodeMaterial&&U.setObject(M,W),M.onBeforeRender(T,O,J,H,W,Mt),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(T,O,J,H,M,Mt),W.transparent===!0&&W.side===Kn&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,T.renderBufferDirect(J,O,H,W,M,Mt),W.side=xr,W.needsUpdate=!0,T.renderBufferDirect(J,O,H,W,M,Mt),W.side=Kn):T.renderBufferDirect(J,O,H,W,M,Mt),M.onAfterRender(T,O,J,H,W,Mt)}function Si(M,O,J){O.isScene!==!0&&(O=dn);let H=q.get(M),W=w.state.lights,Mt=w.state.shadowsArray,At=W.state.version,bt=gt.getParameters(M,W.state,Mt,O,J,w.state.lightProbeGridArray),Dt=gt.getProgramCacheKey(bt),Ot=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=ht.get(M.envMap||H.environment,Qt),H.envMapRotation=H.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",Wn),Ot=new Map,H.programs=Ot);let ne=Ot.get(Dt);if(ne!==void 0){if(H.currentProgram===ne&&H.lightsStateVersion===At)return Hs(M,bt),ne}else bt.uniforms=gt.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,J,bt),M.onBeforeCompile(bt,T),ne=gt.acquireProgram(bt,Dt),Ot.set(Dt,ne),H.uniforms=bt.uniforms;let Lt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),Hs(M,bt),H.needsLights=fo(M),H.lightsStateVersion=At,H.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.sunLights.value=W.state.sun,Lt.sunLightShadows.value=W.state.sunShadow,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.sunShadowMatrix.value=W.state.sunShadowMatrix,Lt.sunShadowCascade.value=W.state.sunShadowCascade,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=ne,H.uniformsList=null,ne}function tr(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Hs(M,O){let J=q.get(M);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function br(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let J=0,H=M.length;J<H;J++){let W=M[J];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Ws(M,O,J,H,W){O.isScene!==!0&&(O=dn),Q.resetTextureUnits();let Mt=O.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,bt=ot===null?T.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xe.workingColorSpace,Dt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=ht.get(H.envMap||At,Dt),Qt=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ne=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!J.morphAttributes.position,Ee=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color,Jt=gi;H.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Jt=T.toneMapping);let Le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Re=Le!==void 0?Le.length:0,vt=q.get(H),pn=w.state.lights;if(ge===!0&&(Ie===!0||M!==st)){let Fe=M===st&&H.id===$;zt.setState(H,M,Fe)}let ue=!1;H.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==pn.state.version||vt.outputColorSpace!==bt||W.isBatchedMesh&&vt.batching===!1||!W.isBatchedMesh&&vt.batching===!0||W.isBatchedMesh&&vt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&vt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&vt.instancing===!1||!W.isInstancedMesh&&vt.instancing===!0||W.isSkinnedMesh&&vt.skinning===!1||!W.isSkinnedMesh&&vt.skinning===!0||W.isInstancedMesh&&vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&vt.instancingMorph===!1&&W.morphTexture!==null||vt.envMap!==Ot||H.fog===!0&&vt.fog!==Mt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==zt.numPlanes||vt.numIntersection!==zt.numIntersection)||vt.vertexAlphas!==Qt||vt.vertexTangents!==ne||vt.morphTargets!==Lt||vt.morphNormals!==Ee||vt.morphColors!==$e||vt.toneMapping!==Jt||vt.morphTargetsCount!==Re||!!vt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,vt.__version=H.version);let wn=vt.currentProgram;ue===!0&&(wn=Si(H,O,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,wn,vt));let Fn=!1,ei=!1,Fi=!1,he=wn.getUniforms(),qe=vt.uniforms;if(_.useProgram(wn.program)&&(Fn=!0,ei=!0,Fi=!0),H.id!==$&&($=H.id,ei=!0),vt.needsLights){let Fe=br(w.state.lightProbeGridArray,W);vt.lightProbeGrid!==Fe&&(vt.lightProbeGrid=Fe,ei=!0)}if(Fn||st!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(z,"projectionMatrix",M.projectionMatrix),he.setValue(z,"viewMatrix",M.matrixWorldInverse);let On=he.map.cameraPosition;On!==void 0&&On.setValue(z,Xe.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,ei=!0,Fi=!0)}if(vt.needsLights&&(pn.state.sunShadowMap.length>0&&he.setValue(z,"sunShadowMap",pn.state.sunShadowMap,Q),pn.state.directionalShadowMap.length>0&&he.setValue(z,"directionalShadowMap",pn.state.directionalShadowMap,Q),pn.state.spotShadowMap.length>0&&he.setValue(z,"spotShadowMap",pn.state.spotShadowMap,Q),pn.state.pointShadowMap.length>0&&he.setValue(z,"pointShadowMap",pn.state.pointShadowMap,Q)),W.isSkinnedMesh){he.setOptional(z,W,"bindMatrix"),he.setOptional(z,W,"bindMatrixInverse");let Fe=W.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),he.setValue(z,"boneTexture",Fe.boneTexture,Q))}W.isBatchedMesh&&(he.setOptional(z,W,"batchingTexture"),he.setValue(z,"batchingTexture",W._matricesTexture,Q),he.setOptional(z,W,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",W._indirectTexture,Q),he.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",W._colorsTexture,Q));let ni=J.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&B.update(W,J,wn),(ei||vt.receiveShadow!==W.receiveShadow)&&(vt.receiveShadow=W.receiveShadow,he.setValue(z,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(qe.envMapIntensity.value=O.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=nS()),ei){if(he.setValue(z,"toneMappingExposure",T.toneMappingExposure),vt.needsLights&&iu(qe,Fi),Mt&&H.fog===!0&&Ft.refreshFogUniforms(qe,Mt),Ft.refreshMaterialUniforms(qe,H,at,tt,w.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){let Fe=vt.lightProbeGrid;qe.probesSH.value=Fe.texture,qe.probesMin.value.copy(Fe.boundingBox.min),qe.probesMax.value.copy(Fe.boundingBox.max),qe.probesResolution.value.copy(Fe.resolution)}Cs.upload(z,tr(vt),qe,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cs.upload(z,tr(vt),qe,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(z,"center",W.center),he.setValue(z,"modelViewMatrix",W.modelViewMatrix),he.setValue(z,"normalMatrix",W.normalMatrix),he.setValue(z,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Fe=H.uniformsGroups;for(let On=0,mn=Fe.length;On<mn;On++){let mo=Fe[On];ct.update(mo,wn),ct.bind(mo,wn)}}return wn}function iu(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function fo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(M,O,J){let H=q.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=O,q.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let J=q.get(M);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,J=0){ot=M,k=O,X=J;let H=null,W=!1,Mt=!1;if(M){let bt=q.get(M);if(bt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,bt.__webglFramebuffer),it.copy(M.viewport),Pt.copy(M.scissor),Et=M.scissorTest,_.viewport(it),_.scissor(Pt),_.setScissorTest(Et),$=-1;return}else if(bt.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(bt.__hasExternalTextures)Q.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qt=M.depthTexture;if(bt.__boundDepthTexture!==Qt){if(Qt!==null&&q.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}let Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Mt=!0);let Ot=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?H=Ot[O][J]:H=Ot[O],W=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?H=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[J]:H=Ot,it.copy(M.viewport),Pt.copy(M.scissor),Et=M.scissorTest}else it.copy(wt).multiplyScalar(at).floor(),Pt.copy(ae).multiplyScalar(at).floor(),Et=je;if(J!==0&&(H=N),_.bindFramebuffer(z.FRAMEBUFFER,H)&&_.drawBuffers(M,H),_.viewport(it),_.scissor(Pt),_.setScissorTest(Et),W){let bt=q.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,J)}else if(Mt){let bt=O;for(let Dt=0;Dt<M.textures.length;Dt++){let Ot=q.get(M.textures[Dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,J,bt)}}else if(M!==null&&J!==0){let bt=q.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bt.__webglTexture,J)}$=-1};function po(M){let O=q.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=P.textureFormatReadable(M.format),O.__typeReadable=P.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,J,H,W,Mt,At,bt=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){_.bindFramebuffer(z.FRAMEBUFFER,Dt);try{let Ot=M.textures[bt],Qt=Ot.format,ne=Ot.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Lt=po(Ot);if(Lt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-H&&J>=0&&J<=M.height-W&&z.readPixels(O,J,H,W,dt.convert(Qt),dt.convert(ne),Mt)}finally{let Ot=ot!==null?q.get(ot).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,O,J,H,W,Mt,At,bt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt)if(O>=0&&O<=M.width-H&&J>=0&&J<=M.height-W){_.bindFramebuffer(z.FRAMEBUFFER,Dt);let Ot=M.textures[bt],Qt=Ot.format,ne=Ot.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Lt=po(Ot);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(O,J,H,W,dt.convert(Qt),dt.convert(ne),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let $e=ot!==null?q.get(ot).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,$e);let Jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ap(z,Jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ee),z.deleteSync(Jt),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,J=0){let H=Math.pow(2,-J),W=Math.floor(M.image.width*H),Mt=Math.floor(M.image.height*H),At=O!==null?O.x:0,bt=O!==null?O.y:0;Q.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,At,bt,W,Mt),_.unbindTexture()},this.copyTextureToTexture=function(M,O,J=null,H=null,W=0,Mt=0){let At,bt,Dt,Ot,Qt,ne,Lt,Ee,$e,Jt=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if(J!==null)At=J.max.x-J.min.x,bt=J.max.y-J.min.y,Dt=J.isBox3?J.max.z-J.min.z:1,Ot=J.min.x,Qt=J.min.y,ne=J.isBox3?J.min.z:0;else{let qe=Math.pow(2,-W);At=Math.floor(Jt.width*qe),bt=Math.floor(Jt.height*qe),M.isDataArrayTexture?Dt=Jt.depth:M.isData3DTexture?Dt=Math.floor(Jt.depth*qe):Dt=1,Ot=0,Qt=0,ne=0}H!==null?(Lt=H.x,Ee=H.y,$e=H.z):(Lt=0,Ee=0,$e=0);let Le=dt.convert(O.format),Re=dt.convert(O.type),vt;O.isData3DTexture?(Q.setTexture3D(O,0),vt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),vt=z.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),vt=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let pn=_.getParameter(z.UNPACK_ROW_LENGTH),ue=_.getParameter(z.UNPACK_IMAGE_HEIGHT),wn=_.getParameter(z.UNPACK_SKIP_PIXELS),Fn=_.getParameter(z.UNPACK_SKIP_ROWS),ei=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,Jt.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),_.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(z.UNPACK_SKIP_IMAGES,ne);let Fi=M.isDataArrayTexture||M.isData3DTexture,he=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let qe=q.get(M),ni=q.get(O),Fe=q.get(qe.__renderTarget),On=q.get(ni.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,Fe.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let mn=0;mn<Dt;mn++)Fi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(M).__webglTexture,W,ne+mn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Mt,$e+mn)),z.blitFramebuffer(Ot,Qt,At,bt,Lt,Ee,At,bt,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||q.has(M)){let qe=q.get(M),ni=q.get(O);_.bindFramebuffer(z.READ_FRAMEBUFFER,L),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let Fe=0;Fe<Dt;Fe++)Fi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.__webglTexture,W,ne+Fe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qe.__webglTexture,W),he?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ni.__webglTexture,Mt,$e+Fe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ni.__webglTexture,Mt),W!==0?z.blitFramebuffer(Ot,Qt,At,bt,Lt,Ee,At,bt,z.COLOR_BUFFER_BIT,z.NEAREST):he?z.copyTexSubImage3D(vt,Mt,Lt,Ee,$e+Fe,Ot,Qt,At,bt):z.copyTexSubImage2D(vt,Mt,Lt,Ee,Ot,Qt,At,bt);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else he?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(vt,Mt,Lt,Ee,$e,At,bt,Dt,Le,Re,Jt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(vt,Mt,Lt,Ee,$e,At,bt,Dt,Le,Jt.data):z.texSubImage3D(vt,Mt,Lt,Ee,$e,At,bt,Dt,Le,Re,Jt):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,Lt,Ee,At,bt,Le,Re,Jt.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,Lt,Ee,Jt.width,Jt.height,Le,Jt.data):z.texSubImage2D(z.TEXTURE_2D,Mt,Lt,Ee,At,bt,Le,Re,Jt);_.pixelStorei(z.UNPACK_ROW_LENGTH,pn),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue),_.pixelStorei(z.UNPACK_SKIP_PIXELS,wn),_.pixelStorei(z.UNPACK_SKIP_ROWS,Fn),_.pixelStorei(z.UNPACK_SKIP_IMAGES,ei),Mt===0&&O.generateMipmaps&&z.generateMipmap(vt),_.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){k=0,X=0,ot=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var kp=new Pn,Ec=new D,Br=class extends Ca{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ce(t,3)),this.setAttribute("uv",new ce(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new gr(e,6,1);return this.setAttribute("instanceStart",new Zn(n,3,0)),this.setAttribute("instanceEnd",new Zn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new gr(e,6,1);return this.setAttribute("instanceColorStart",new Zn(n,3,0)),this.setAttribute("instanceColorEnd",new Zn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new wa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),kp.setFromBufferAttribute(e),this.boundingBox.union(kp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ec.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ec)),Ec.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ec));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};yt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new It},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ln.line={uniforms:za.merge([yt.common,yt.fog,yt.line]),vertexShader:`
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
		`};var zr=class extends Be{constructor(t){super({type:"LineMaterial",uniforms:za.clone(Ln.line.uniforms),vertexShader:Ln.line.vertexShader,fragmentShader:Ln.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Oh=new re,Vp=new D,Gp=new D,vn=new re,yn=new re,Ri=new re,Bh=new D,zh=new Pe,Sn=new Ra,Hp=new D,Ac=new Pn,Tc=new In,Pi=new re,Ii,kr;function Wp(i,t,e){return Pi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Pi.multiplyScalar(1/Pi.w),Pi.x=kr/e.width,Pi.y=kr/e.height,Pi.applyMatrix4(i.projectionMatrixInverse),Pi.multiplyScalar(1/Pi.w),Math.abs(Math.max(Pi.x,Pi.y))}function iS(i,t){let e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,c=a;o<c;o++){Sn.start.fromBufferAttribute(r,o),Sn.end.fromBufferAttribute(s,o),Sn.applyMatrix4(e);let l=new D,u=new D;Ii.distanceSqToSegment(Sn.start,Sn.end,u,l),u.distanceTo(l)<kr*.5&&t.push({point:u,pointOnLine:l,distance:Ii.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function rS(i,t,e){let n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),f=-t.near;Ii.at(1,Ri),Ri.w=1,Ri.applyMatrix4(t.matrixWorldInverse),Ri.applyMatrix4(n),Ri.multiplyScalar(1/Ri.w),Ri.x*=s.x/2,Ri.y*=s.y/2,Ri.z=0,Bh.copy(Ri),zh.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,d=u;h<d;h++){if(vn.fromBufferAttribute(c,h),yn.fromBufferAttribute(l,h),vn.w=1,yn.w=1,vn.applyMatrix4(zh),yn.applyMatrix4(zh),vn.z>f&&yn.z>f)continue;if(vn.z>f){let A=vn.z-yn.z,y=(vn.z-f)/A;vn.lerp(yn,y)}else if(yn.z>f){let A=yn.z-vn.z,y=(yn.z-f)/A;yn.lerp(vn,y)}vn.applyMatrix4(n),yn.applyMatrix4(n),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=s.x/2,vn.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,Sn.start.copy(vn),Sn.start.z=0,Sn.end.copy(yn),Sn.end.z=0;let v=Sn.closestPointToPointParameter(Bh,!0);Sn.at(v,Hp);let p=hh.lerp(vn.z,yn.z,v),m=p>=-1&&p<=1,E=Bh.distanceTo(Hp)<kr*.5;if(m&&E){Sn.start.fromBufferAttribute(c,h),Sn.end.fromBufferAttribute(l,h),Sn.start.applyMatrix4(a),Sn.end.applyMatrix4(a);let A=new D,y=new D;Ii.distanceSqToSegment(Sn.start,Sn.end,y,A),e.push({point:y,pointOnLine:A,distance:Ii.origin.distanceTo(y),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Ha=class extends ke{constructor(t=new Br,e=new zr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)Vp.fromBufferAttribute(e,a),Gp.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Vp.distanceTo(Gp);let s=new gr(r,2,1);return t.setAttribute("instanceDistanceStart",new Zn(s,1,0)),t.setAttribute("instanceDistanceEnd",new Zn(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ii=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;kr=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Tc.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=kr*.5;else{let f=Math.max(r.near,Tc.distanceToPoint(Ii.origin));l=Wp(r,f,c.resolution)}if(Tc.radius+=l,Ii.intersectsSphere(Tc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ac.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=kr*.5;else{let f=Math.max(r.near,Ac.distanceToPoint(Ii.origin));u=Wp(r,f,c.resolution)}Ac.expandByScalar(u),Ii.intersectsBox(Ac)!==!1&&(n?iS(this,e):rS(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Oh),this.material.uniforms.resolution.value.set(Oh.z,Oh.w))}};var Hn=6371,ji=Math.PI/180,Ze=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Mn=(i,t,e)=>{let n=Ze((e-i)/(t-i));return n*n*(3-2*n)},Ge=(i,t,e=1)=>{let n=i*ji,r=t*ji;return new D(Math.cos(n)*Math.sin(r)*e,Math.sin(n)*e,Math.cos(n)*Math.cos(r)*e)},sS=i=>[Math.asin(Ze(i.y,-1,1))/ji,Math.atan2(i.x,i.z)/ji];function Hh(i,t,e){i.aspect=t/e;let n=t>900;i.setViewOffset(t,e,0,n?e*.06:e*.1,t,e),i.updateProjectionMatrix()}var Xp=new D(0,1,0),aS=new D;function Wa(i,t,e,n,r,s){let a=Ge(t.lat,t.lon),o=Ge(e.lat,e.lon),c=a.angleTo(o),l=c<1e-6?a:a.clone().multiplyScalar(Math.sin((1-n)*c)).add(o.clone().multiplyScalar(Math.sin(n*c))).divideScalar(Math.sin(c));l.normalize();let u=c*Hn,f=1+Math.min(2.2,u/Math.max(t.alt,e.alt,400)*.35)*Math.sin(Math.PI*n),h=Math.exp(Math.log(t.alt)*(1-n)+Math.log(e.alt)*n)*f*(r/s<.8?1.7:1),d=1+h/Hn,g=h<2500?24*(1-h/2500):0,v=((t.tilt??g)*(1-n)+(e.tilt??g)*n)*ji,p=((t.ground||0)*(1-n)+(e.ground||0)*n)/Hn,m=new D().crossVectors(l,new D().crossVectors(Xp,l)).normalize().negate(),E=((t.heading??0)*(1-n)+(e.heading??0)*n)*ji;return E&&m.applyAxisAngle(l,-E),i.position.copy(l).multiplyScalar(d+p).addScaledVector(m,Math.tan(v)*(d-1)*1.2),i.up.copy(Xp).multiplyScalar(1-Mn(0,30*ji,v)).addScaledVector(l,Mn(0,30*ji,v)).normalize(),i.lookAt(aS.copy(l).multiplyScalar(1+p-Mn(2500,6e3,h))),i.near=Math.max(2e-6,(d-1)*.15),i.far=d+3,i.updateProjectionMatrix(),h}var oS=new In(new D,1),kh=new Pr,qp=new D,Vh=new It;function Gh(i,t,e,n,r){return Vh.set(t/n*2-1,1-e/r*2),kh.origin.copy(i.position),kh.direction.set(Vh.x,Vh.y,.5).unproject(i).sub(i.position).normalize(),kh.intersectSphere(oS,qp)?sS(qp):null}var lS=(i,t)=>{let e=Ge(i[0],i[1]),n=Ge(t[0],t[1]);return e.angleTo(n)*Hn},Vr=new un(32,1,5e-4,100);function Yp(i,t,e,n=.14){Hh(Vr,t,e),Wa(Vr,i,i,0,t,e),Vr.updateMatrixWorld(!0);let r=[],s=12,a=0;for(let S=0;S<=s;S++)for(let w=0;w<=s;w++){let C=Gh(Vr,w/s*t,S/s*e,t,e);C?r.push(C):a++}let o=Ge(i.lat,i.lon).project(Vr),c=(o.x*.5+.5)*t,l=(.5-o.y*.5)*e,u=Gh(Vr,c-40,l,t,e),f=Gh(Vr,c+40,l,t,e),h=u&&f?lS(u,f)/80:0;if(a||r.length<4)return{box:null,kmPerPx:h};let d=r.map(([,S])=>i.lon+((S-i.lon)%360+540)%360-180),g=r.map(([S])=>S),[v,p,m,E]=[Math.min(...d),Math.max(...d),Math.min(...g),Math.max(...g)],A=(p-v)*n,y=(E-m)*n;return v-=A,p+=A,m=Math.max(-89.5,m-y),E=Math.min(89.5,E+y),{box:[v,m,p,E],kmPerPx:h}}function $p(i,t,e,n){let r=(i[1]+i[3])/2*ji,s=(i[2]-i[0])*111.32*Math.cos(r),a=(i[3]-i[1])*110.57,o=s/t,c=a/t,l=Math.min(1,e/Math.max(o,c),Math.sqrt(n/(o*c)));return o=Math.round(Ze(o*l,256,e)),c=Math.round(Ze(c*l,128,e)),{W:o,H:c,texelKm:Math.max(s/o,a/c)}}var sn=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){let e=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){let t=this._partials,e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}};function*cS(i){for(let t of i)yield*t}function Ps(i){return Array.from(cS(i))}var ye=1e-6,Zp=1e-12,pe=Math.PI,Dn=pe/2,Is=pe/4,ln=pe*2,bn=180/pe,Te=pe/180,Ce=Math.abs,Jp=Math.atan,Cn=Math.atan2,se=Math.cos;var ee=Math.sin,Kp=Math.sign||function(i){return i>0?1:i<0?-1:0},fn=Math.sqrt;function jp(i){return i>1?0:i<-1?pe:Math.acos(i)}function _i(i){return i>1?Dn:i<-1?-Dn:Math.asin(i)}function Wh(i){return(i=ee(i/2))*i}function Ue(){}function Cc(i,t){i&&tm.hasOwnProperty(i.type)&&tm[i.type](i,t)}var Qp={Feature:function(i,t){Cc(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)Cc(e[n].geometry,t)}},tm={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Xh(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Xh(e[n],t,0)},Polygon:function(i,t){em(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)em(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)Cc(e[n],t)}};function Xh(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function em(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Xh(i[e],t,1);t.polygonEnd()}function oi(i,t){i&&Qp.hasOwnProperty(i.type)?Qp[i.type](i,t):Cc(i,t)}var qh=new sn,Rc=new sn,nm,im,Yh,$h,Zh,Xa={point:Ue,lineStart:Ue,lineEnd:Ue,polygonStart:function(){qh=new sn,Xa.lineStart=uS,Xa.lineEnd=hS},polygonEnd:function(){var i=+qh;Rc.add(i<0?ln+i:i),this.lineStart=this.lineEnd=this.point=Ue},sphere:function(){Rc.add(ln)}};function uS(){Xa.point=fS}function hS(){rm(nm,im)}function fS(i,t){Xa.point=rm,nm=i,im=t,i*=Te,t*=Te,Yh=i,$h=se(t=t/2+Is),Zh=ee(t)}function rm(i,t){i*=Te,t*=Te,t=t/2+Is;var e=i-Yh,n=e>=0?1:-1,r=n*e,s=se(t),a=ee(t),o=Zh*a,c=$h*s+o*se(r),l=o*n*ee(r);qh.add(Cn(l,c)),Yh=i,$h=s,Zh=a}function Pc(i){return Rc=new sn,oi(i,Xa),Rc*2}function qa(i){return[Cn(i[1],i[0]),_i(i[2])]}function Li(i){var t=i[0],e=i[1],n=se(e);return[n*se(t),n*ee(t),ee(e)]}function Ya(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Ls(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ic(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function $a(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Za(i){var t=fn(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function Ja(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function Jh(i,t){return Ce(i)>pe&&(i-=Math.round(i/ln)*ln),[i,t]}Jh.invert=Jh;function lm(i,t,e){return(i%=ln)?t||e?Ja(am(i),om(t,e)):am(i):t||e?om(t,e):Jh}function sm(i){return function(t,e){return t+=i,Ce(t)>pe&&(t-=Math.round(t/ln)*ln),[t,e]}}function am(i){var t=sm(i);return t.invert=sm(-i),t}function om(i,t){var e=se(i),n=ee(i),r=se(t),s=ee(t);function a(o,c){var l=se(c),u=se(o)*l,f=ee(o)*l,h=ee(c),d=h*e+u*n;return[Cn(f*r-d*s,u*e-h*n),_i(d*r+f*s)]}return a.invert=function(o,c){var l=se(c),u=se(o)*l,f=ee(o)*l,h=ee(c),d=h*r-f*s;return[Cn(f*r+h*s,u*e+d*n),_i(d*e-u*n)]},a}function um(i,t,e,n,r,s){if(e){var a=se(t),o=ee(t),c=n*e;r==null?(r=t+n*ln,s=t-c/2):(r=cm(a,r),s=cm(a,s),(n>0?r<s:r>s)&&(r+=n*ln));for(var l,u=r;n>0?u>s:u<s;u-=c)l=qa([a,-o*se(u),-o*ee(u)]),i.point(l[0],l[1])}}function cm(i,t){t=Li(t),t[0]-=i,Za(t);var e=jp(-t[1]);return((-t[2]<0?-e:e)+ln-ye)%ln}function Lc(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Ue,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Ds(i,t){return Ce(i[0]-t[0])<ye&&Ce(i[1]-t[1])<ye}function Dc(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function Uc(i,t,e,n,r){var s=[],a=[],o,c;if(i.forEach(function(g){if(!((v=g.length-1)<=0)){var v,p=g[0],m=g[v],E;if(Ds(p,m)){if(!p[2]&&!m[2]){for(r.lineStart(),o=0;o<v;++o)r.point((p=g[o])[0],p[1]);r.lineEnd();return}m[0]+=2*ye}s.push(E=new Dc(p,g,null,!0)),a.push(E.o=new Dc(p,null,E,!1)),s.push(E=new Dc(m,g,null,!1)),a.push(E.o=new Dc(m,null,E,!0))}}),!!s.length){for(a.sort(t),hm(s),hm(a),o=0,c=a.length;o<c;++o)a[o].e=e=!e;for(var l=s[0],u,f;;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,c=u.length;o<c;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function hm(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function Kh(i){return Ce(i[0])<=pe?i[0]:Kp(i[0])*((Ce(i[0])+pe)%ln-pe)}function fm(i,t){var e=Kh(t),n=t[1],r=ee(n),s=[ee(e),-se(e),0],a=0,o=0,c=new sn;r===1?n=Dn+ye:r===-1&&(n=-Dn-ye);for(var l=0,u=i.length;l<u;++l)if(h=(f=i[l]).length)for(var f,h,d=f[h-1],g=Kh(d),v=d[1]/2+Is,p=ee(v),m=se(v),E=0;E<h;++E,g=y,p=w,m=C,d=A){var A=f[E],y=Kh(A),S=A[1]/2+Is,w=ee(S),C=se(S),x=y-g,b=x>=0?1:-1,T=b*x,R=T>pe,U=p*w;if(c.add(Cn(U*b*ee(T),m*C+U*se(T))),a+=R?x+b*ln:x,R^g>=e^y>=e){var N=Ls(Li(d),Li(A));Za(N);var L=Ls(s,N);Za(L);var I=(R^x>=0?-1:1)*_i(L[2]);(n>I||n===I&&(N[0]||N[1]))&&(o+=R^x>=0?1:-1)}}return(a<-ye||a<ye&&c<-Zp)^o&1}function Nc(i,t,e,n){return function(r){var s=t(r),a=Lc(),o=t(a),c=!1,l,u,f,h={point:d,lineStart:v,lineEnd:p,polygonStart:function(){h.point=m,h.lineStart=E,h.lineEnd=A,u=[],l=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=p,u=Ps(u);var y=fm(l,n);u.length?(c||(r.polygonStart(),c=!0),Uc(u,pS,y,e,r)):y&&(c||(r.polygonStart(),c=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(y,S){i(y,S)&&r.point(y,S)}function g(y,S){s.point(y,S)}function v(){h.point=g,s.lineStart()}function p(){h.point=d,s.lineEnd()}function m(y,S){f.push([y,S]),o.point(y,S)}function E(){o.lineStart(),f=[]}function A(){m(f[0][0],f[0][1]),o.lineEnd();var y=o.clean(),S=a.result(),w,C=S.length,x,b,T;if(f.pop(),l.push(f),f=null,!!C){if(y&1){if(b=S[0],(x=b.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),w=0;w<x;++w)r.point((T=b[w])[0],T[1]);r.lineEnd()}return}C>1&&y&2&&S.push(S.pop().concat(S.shift())),u.push(S.filter(dS))}}return h}}function dS(i){return i.length>1}function pS(i,t){return((i=i.x)[0]<0?i[1]-Dn-ye:Dn-i[1])-((t=t.x)[0]<0?t[1]-Dn-ye:Dn-t[1])}var jh=Nc(function(){return!0},mS,xS,[-pe,-Dn]);function mS(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?pe:-pe,c=Ce(s-t);Ce(c-pe)<ye?(i.point(t,e=(e+a)/2>0?Dn:-Dn),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&c>=pe&&(Ce(t-n)<ye&&(t-=n*ye),Ce(s-o)<ye&&(s-=o*ye),e=gS(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function gS(i,t,e,n){var r,s,a=ee(i-e);return Ce(a)>ye?Jp((ee(t)*(s=se(n))*ee(e)-ee(n)*(r=se(t))*ee(i))/(r*s*a)):(t+n)/2}function xS(i,t,e,n){var r;if(i==null)r=e*Dn,n.point(-pe,r),n.point(0,r),n.point(pe,r),n.point(pe,0),n.point(pe,-r),n.point(0,-r),n.point(-pe,-r),n.point(-pe,0),n.point(-pe,r);else if(Ce(i[0]-t[0])>ye){var s=i[0]<t[0]?pe:-pe;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function dm(i){var t=se(i),e=2*Te,n=t>0,r=Ce(t)>ye;function s(u,f,h,d){um(d,i,e,h,u,f)}function a(u,f){return se(u)*se(f)>t}function o(u){var f,h,d,g,v;return{lineStart:function(){g=d=!1,v=1},point:function(p,m){var E=[p,m],A,y=a(p,m),S=n?y?0:l(p,m):y?l(p+(p<0?pe:-pe),m):0;if(!f&&(g=d=y)&&u.lineStart(),y!==d&&(A=c(f,E),(!A||Ds(f,A)||Ds(E,A))&&(E[2]=1)),y!==d)v=0,y?(u.lineStart(),A=c(E,f),u.point(A[0],A[1])):(A=c(f,E),u.point(A[0],A[1],2),u.lineEnd()),f=A;else if(r&&f&&n^y){var w;!(S&h)&&(w=c(E,f,!0))&&(v=0,n?(u.lineStart(),u.point(w[0][0],w[0][1]),u.point(w[1][0],w[1][1]),u.lineEnd()):(u.point(w[1][0],w[1][1]),u.lineEnd(),u.lineStart(),u.point(w[0][0],w[0][1],3)))}y&&(!f||!Ds(f,E))&&u.point(E[0],E[1]),f=E,d=y,h=S},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return v|(g&&d)<<1}}}function c(u,f,h){var d=Li(u),g=Li(f),v=[1,0,0],p=Ls(d,g),m=Ya(p,p),E=p[0],A=m-E*E;if(!A)return!h&&u;var y=t*m/A,S=-t*E/A,w=Ls(v,p),C=$a(v,y),x=$a(p,S);Ic(C,x);var b=w,T=Ya(C,b),R=Ya(b,b),U=T*T-R*(Ya(C,C)-1);if(!(U<0)){var N=fn(U),L=$a(b,(-T-N)/R);if(Ic(L,C),L=qa(L),!h)return L;var I=u[0],k=f[0],X=u[1],ot=f[1],$;k<I&&($=I,I=k,k=$);var st=k-I,it=Ce(st-pe)<ye,Pt=it||st<ye;if(!it&&ot<X&&($=X,X=ot,ot=$),Pt?it?X+ot>0^L[1]<(Ce(L[0]-I)<ye?X:ot):X<=L[1]&&L[1]<=ot:st>pe^(I<=L[0]&&L[0]<=k)){var Et=$a(b,(-T+N)/R);return Ic(Et,C),[L,qa(Et)]}}}function l(u,f){var h=n?i:pe-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return Nc(a,o,s,n?[0,-i]:[-pe,i-pe])}function pm(i,t,e,n,r,s){var a=i[0],o=i[1],c=t[0],l=t[1],u=0,f=1,h=c-a,d=l-o,g;if(g=e-a,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<f&&(f=g)}else if(h>0){if(g>f)return;g>u&&(u=g)}if(g=r-a,!(!h&&g<0)){if(g/=h,h<0){if(g>f)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<f&&(f=g)}if(g=n-o,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>u&&(u=g)}if(g=s-o,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<f&&(f=g)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var Ka=1e9,Fc=-Ka;function Qh(i,t,e,n){function r(l,u){return i<=l&&l<=e&&t<=u&&u<=n}function s(l,u,f,h){var d=0,g=0;if(l==null||(d=a(l,f))!==(g=a(u,f))||c(l,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==g);else h.point(u[0],u[1])}function a(l,u){return Ce(l[0]-i)<ye?u>0?0:3:Ce(l[0]-e)<ye?u>0?2:1:Ce(l[1]-t)<ye?u>0?1:0:u>0?3:2}function o(l,u){return c(l.x,u.x)}function c(l,u){var f=a(l,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-l[1]:f===1?l[0]-u[0]:f===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,f=Lc(),h,d,g,v,p,m,E,A,y,S,w,C={point:x,lineStart:U,lineEnd:N,polygonStart:T,polygonEnd:R};function x(I,k){r(I,k)&&u.point(I,k)}function b(){for(var I=0,k=0,X=d.length;k<X;++k)for(var ot=d[k],$=1,st=ot.length,it=ot[0],Pt,Et,_e=it[0],Yt=it[1];$<st;++$)Pt=_e,Et=Yt,it=ot[$],_e=it[0],Yt=it[1],Et<=n?Yt>n&&(_e-Pt)*(n-Et)>(Yt-Et)*(i-Pt)&&++I:Yt<=n&&(_e-Pt)*(n-Et)<(Yt-Et)*(i-Pt)&&--I;return I}function T(){u=f,h=[],d=[],w=!0}function R(){var I=b(),k=w&&I,X=(h=Ps(h)).length;(k||X)&&(l.polygonStart(),k&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),X&&Uc(h,o,I,s,l),l.polygonEnd()),u=l,h=d=g=null}function U(){C.point=L,d&&d.push(g=[]),S=!0,y=!1,E=A=NaN}function N(){h&&(L(v,p),m&&y&&f.rejoin(),h.push(f.result())),C.point=x,y&&u.lineEnd()}function L(I,k){var X=r(I,k);if(d&&g.push([I,k]),S)v=I,p=k,m=X,S=!1,X&&(u.lineStart(),u.point(I,k));else if(X&&y)u.point(I,k);else{var ot=[E=Math.max(Fc,Math.min(Ka,E)),A=Math.max(Fc,Math.min(Ka,A))],$=[I=Math.max(Fc,Math.min(Ka,I)),k=Math.max(Fc,Math.min(Ka,k))];pm(ot,$,i,t,e,n)?(y||(u.lineStart(),u.point(ot[0],ot[1])),u.point($[0],$[1]),X||u.lineEnd(),w=!1):X&&(u.lineStart(),u.point(I,k),w=!1)}E=I,A=k,y=X}return C}}var tf,ef,Oc,Bc,Us={sphere:Ue,point:Ue,lineStart:_S,lineEnd:Ue,polygonStart:Ue,polygonEnd:Ue};function _S(){Us.point=yS,Us.lineEnd=vS}function vS(){Us.point=Us.lineEnd=Ue}function yS(i,t){i*=Te,t*=Te,ef=i,Oc=ee(t),Bc=se(t),Us.point=SS}function SS(i,t){i*=Te,t*=Te;var e=ee(t),n=se(t),r=Ce(i-ef),s=se(r),a=ee(r),o=n*a,c=Bc*e-Oc*n*s,l=Oc*e+Bc*n*s;tf.add(Cn(fn(o*o+c*c),l)),ef=i,Oc=e,Bc=n}function mm(i){return tf=new sn,oi(i,Us),+tf}var nf=[null,null],MS={type:"LineString",coordinates:nf};function zc(i,t){return nf[0]=i,nf[1]=t,mm(MS)}function kc(i,t){var e=i[0]*Te,n=i[1]*Te,r=t[0]*Te,s=t[1]*Te,a=se(n),o=ee(n),c=se(s),l=ee(s),u=a*se(e),f=a*ee(e),h=c*se(r),d=c*ee(r),g=2*_i(fn(Wh(s-n)+a*c*Wh(r-e))),v=ee(g),p=g?function(m){var E=ee(m*=g)/v,A=ee(g-m)/v,y=A*u+E*h,S=A*f+E*d,w=A*o+E*l;return[Cn(S,y)*bn,Cn(w,fn(y*y+S*S))*bn]}:function(){return[e*bn,n*bn]};return p.distance=g,p}var ja=i=>i;var rf=new sn,sf=new sn,gm,xm,af,of,yr={point:Ue,lineStart:Ue,lineEnd:Ue,polygonStart:function(){yr.lineStart=bS,yr.lineEnd=ES},polygonEnd:function(){yr.lineStart=yr.lineEnd=yr.point=Ue,rf.add(Ce(sf)),sf=new sn},result:function(){var i=rf/2;return rf=new sn,i}};function bS(){yr.point=wS}function wS(i,t){yr.point=_m,gm=af=i,xm=of=t}function _m(i,t){sf.add(of*i-af*t),af=i,of=t}function ES(){_m(gm,xm)}var lf=yr;var Ns=1/0,Vc=Ns,Qa=-Ns,Gc=Qa,AS={point:TS,lineStart:Ue,lineEnd:Ue,polygonStart:Ue,polygonEnd:Ue,result:function(){var i=[[Ns,Vc],[Qa,Gc]];return Qa=Gc=-(Vc=Ns=1/0),i}};function TS(i,t){i<Ns&&(Ns=i),i>Qa&&(Qa=i),t<Vc&&(Vc=t),t>Gc&&(Gc=t)}var Fs=AS;var cf=0,uf=0,to=0,Hc=0,Wc=0,Os=0,hf=0,ff=0,eo=0,Sm,Mm,Di,Ui,vi={point:Gr,lineStart:vm,lineEnd:ym,polygonStart:function(){vi.lineStart=PS,vi.lineEnd=IS},polygonEnd:function(){vi.point=Gr,vi.lineStart=vm,vi.lineEnd=ym},result:function(){var i=eo?[hf/eo,ff/eo]:Os?[Hc/Os,Wc/Os]:to?[cf/to,uf/to]:[NaN,NaN];return cf=uf=to=Hc=Wc=Os=hf=ff=eo=0,i}};function Gr(i,t){cf+=i,uf+=t,++to}function vm(){vi.point=CS}function CS(i,t){vi.point=RS,Gr(Di=i,Ui=t)}function RS(i,t){var e=i-Di,n=t-Ui,r=fn(e*e+n*n);Hc+=r*(Di+i)/2,Wc+=r*(Ui+t)/2,Os+=r,Gr(Di=i,Ui=t)}function ym(){vi.point=Gr}function PS(){vi.point=LS}function IS(){bm(Sm,Mm)}function LS(i,t){vi.point=bm,Gr(Sm=Di=i,Mm=Ui=t)}function bm(i,t){var e=i-Di,n=t-Ui,r=fn(e*e+n*n);Hc+=r*(Di+i)/2,Wc+=r*(Ui+t)/2,Os+=r,r=Ui*i-Di*t,hf+=r*(Di+i),ff+=r*(Ui+t),eo+=r*3,Gr(Di=i,Ui=t)}var df=vi;function Xc(i){this._context=i}Xc.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,ln);break}}},result:Ue};var mf=new sn,pf,wm,Em,no,io,qc={point:Ue,lineStart:function(){qc.point=DS},lineEnd:function(){pf&&Am(wm,Em),qc.point=Ue},polygonStart:function(){pf=!0},polygonEnd:function(){pf=null},result:function(){var i=+mf;return mf=new sn,i}};function DS(i,t){qc.point=Am,wm=no=i,Em=io=t}function Am(i,t){no-=i,io-=t,mf.add(fn(no*no+io*io)),no=i,io=t}var gf=qc;var Tm,Yc,Cm,Rm,Bs=class{constructor(t){this._append=t==null?Pm:US(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==Cm||this._append!==Yc){let n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Cm=n,Yc=this._append,Rm=this._,this._=r}this._+=Rm;break}}}result(){let t=this._;return this._="",t.length?t:null}};function Pm(i){let t=1;this._+=i[0];for(let e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function US(i){let t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return Pm;if(t!==Tm){let e=10**t;Tm=t,Yc=function(r){let s=1;this._+=r[0];for(let a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return Yc}function xf(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),oi(o,r(s))),s.result()}return a.area=function(o){return oi(o,r(lf)),lf.result()},a.measure=function(o){return oi(o,r(gf)),gf.result()},a.bounds=function(o){return oi(o,r(Fs)),Fs.result()},a.centroid=function(o){return oi(o,r(df)),df.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,ja):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new Bs(e)):new Xc(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{let c=Math.floor(o);if(!(c>=0))throw new RangeError(`invalid digits: ${o}`);e=c}return t===null&&(s=new Bs(e)),a},a.projection(i).digits(e).context(t)}function vf(i){return{stream:zs(i)}}function zs(i){return function(t){var e=new _f;for(var n in i)e[n]=i[n];return e.stream=t,e}}function _f(){}_f.prototype={constructor:_f,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function yf(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),oi(e,i.stream(Fs)),t(Fs.result()),n!=null&&i.clipExtent(n),i}function Sf(i,t,e){return yf(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,c=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,c])},e)}function Im(i,t,e){return Sf(i,[[0,0],t],e)}function Lm(i,t,e){return yf(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function Dm(i,t,e){return yf(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var Um=16,NS=se(30*Te);function Mf(i,t){return+t?OS(i,t):FS(i)}function FS(i){return zs({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function OS(i,t){function e(n,r,s,a,o,c,l,u,f,h,d,g,v,p){var m=l-n,E=u-r,A=m*m+E*E;if(A>4*t&&v--){var y=a+h,S=o+d,w=c+g,C=fn(y*y+S*S+w*w),x=_i(w/=C),b=Ce(Ce(w)-1)<ye||Ce(s-f)<ye?(s+f)/2:Cn(S,y),T=i(b,x),R=T[0],U=T[1],N=R-n,L=U-r,I=E*N-m*L;(I*I/A>t||Ce((m*N+E*L)/A-.5)>.3||a*h+o*d+c*g<NS)&&(e(n,r,s,a,o,c,R,U,b,y/=C,S/=C,w,v,p),p.point(R,U),e(R,U,b,y,S,w,l,u,f,h,d,g,v,p))}}return function(n){var r,s,a,o,c,l,u,f,h,d,g,v,p={point:m,lineStart:E,lineEnd:y,polygonStart:function(){n.polygonStart(),p.lineStart=S},polygonEnd:function(){n.polygonEnd(),p.lineStart=E}};function m(x,b){x=i(x,b),n.point(x[0],x[1])}function E(){f=NaN,p.point=A,n.lineStart()}function A(x,b){var T=Li([x,b]),R=i(x,b);e(f,h,u,d,g,v,f=R[0],h=R[1],u=x,d=T[0],g=T[1],v=T[2],Um,n),n.point(f,h)}function y(){p.point=m,n.lineEnd()}function S(){E(),p.point=w,p.lineEnd=C}function w(x,b){A(r=x,b),s=f,a=h,o=d,c=g,l=v,p.point=A}function C(){e(f,h,u,d,g,v,s,a,r,o,c,l,Um,n),p.lineEnd=y,y()}return p}}var BS=zs({point:function(i,t){this.stream.point(i*Te,t*Te)}});function zS(i){return zs({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function kS(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function Nm(i,t,e,n,r,s){if(!s)return kS(i,t,e,n,r);var a=se(s),o=ee(s),c=a*i,l=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function g(v,p){return v*=n,p*=r,[c*v-l*p+t,e-l*v-c*p]}return g.invert=function(v,p){return[n*(u*v-f*p+h),r*(d-f*v-u*p)]},g}function bf(i){return VS(function(){return i})()}function VS(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,c=0,l=0,u,f=0,h=1,d=1,g=null,v=jh,p=null,m,E,A,y=ja,S=.5,w,C,x,b,T;function R(I){return x(I[0]*Te,I[1]*Te)}function U(I){return I=x.invert(I[0],I[1]),I&&[I[0]*bn,I[1]*bn]}R.stream=function(I){return b&&T===I?b:b=BS(zS(u)(v(w(y(T=I)))))},R.preclip=function(I){return arguments.length?(v=I,g=void 0,L()):v},R.postclip=function(I){return arguments.length?(y=I,p=m=E=A=null,L()):y},R.clipAngle=function(I){return arguments.length?(v=+I?dm(g=I*Te):(g=null,jh),L()):g*bn},R.clipExtent=function(I){return arguments.length?(y=I==null?(p=m=E=A=null,ja):Qh(p=+I[0][0],m=+I[0][1],E=+I[1][0],A=+I[1][1]),L()):p==null?null:[[p,m],[E,A]]},R.scale=function(I){return arguments.length?(e=+I,N()):e},R.translate=function(I){return arguments.length?(n=+I[0],r=+I[1],N()):[n,r]},R.center=function(I){return arguments.length?(s=I[0]%360*Te,a=I[1]%360*Te,N()):[s*bn,a*bn]},R.rotate=function(I){return arguments.length?(o=I[0]%360*Te,c=I[1]%360*Te,l=I.length>2?I[2]%360*Te:0,N()):[o*bn,c*bn,l*bn]},R.angle=function(I){return arguments.length?(f=I%360*Te,N()):f*bn},R.reflectX=function(I){return arguments.length?(h=I?-1:1,N()):h<0},R.reflectY=function(I){return arguments.length?(d=I?-1:1,N()):d<0},R.precision=function(I){return arguments.length?(w=Mf(C,S=I*I),L()):fn(S)},R.fitExtent=function(I,k){return Sf(R,I,k)},R.fitSize=function(I,k){return Im(R,I,k)},R.fitWidth=function(I,k){return Lm(R,I,k)},R.fitHeight=function(I,k){return Dm(R,I,k)};function N(){var I=Nm(e,0,0,h,d,f).apply(null,t(s,a)),k=Nm(e,n-I[0],r-I[1],h,d,f);return u=lm(o,c,l),C=Ja(t,k),x=Ja(u,C),w=Mf(C,S),L()}function L(){return b=T=null,R}return function(){return t=i.apply(this,arguments),R.invert=t.invert&&U,N()}}function $c(i,t){return[i,t]}$c.invert=$c;function wf(){return bf($c).scale(152.63)}function Ef(i){return i}function Zc(i){if(i==null)return Ef;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,c){c||(t=e=0);var l=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;l<u;)f[l]=o[l],++l;return f}}function Fm(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function yi(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return Om(i,e)})}:Om(i,t)}function Om(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=Jc(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function Jc(i,t){var e=Zc(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,g=h.length;d<g;++d)f.push(e(h[d],d));u<0&&Fm(f,g)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function c(u){return u.map(o)}function l(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(l)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=c(u.arcs);break;case"MultiPolygon":h=u.arcs.map(c);break;default:return null}return{type:f,coordinates:h}}return l(t)}function Af(i,t){var e={},n={},r={},s=[],a=-1;t.forEach(function(l,u){var f=i.arcs[l<0?~l:l],h;f.length<3&&!f[1][0]&&!f[1][1]&&(h=t[++a],t[a]=l,t[u]=h)}),t.forEach(function(l){var u=o(l),f=u[0],h=u[1],d,g;if(d=r[f])if(delete r[d.end],d.push(l),d.end=h,g=n[h]){delete n[g.start];var v=g===d?d:d.concat(g);n[v.start=d.start]=r[v.end=g.end]=v}else n[d.start]=r[d.end]=d;else if(d=n[h])if(delete n[d.start],d.unshift(l),d.start=f,g=r[f]){delete r[g.end];var p=g===d?d:g.concat(d);n[p.start=g.start]=r[p.end=d.end]=p}else n[d.start]=r[d.end]=d;else d=[l],n[d.start=f]=r[d.end=h]=d});function o(l){var u=i.arcs[l<0?~l:l],f=u[0],h;return i.transform?(h=[0,0],u.forEach(function(d){h[0]+=d[0],h[1]+=d[1]})):h=u[u.length-1],l<0?[h,f]:[f,h]}function c(l,u){for(var f in l){var h=l[f];delete u[h.start],delete h.start,delete h.end,h.forEach(function(d){e[d<0?~d:d]=1}),s.push(h)}}return c(r,n),c(n,r),t.forEach(function(l){e[l<0?~l:l]||s.push([l])}),s}function Kc(i){return Jc(i,Bm.apply(this,arguments))}function Bm(i,t,e){var n,r,s;if(arguments.length>1)n=GS(i,t,e);else for(r=0,n=new Array(s=i.arcs.length);r<s;++r)n[r]=r;return{type:"MultiLineString",arcs:Af(i,n)}}function GS(i,t,e){var n=[],r=[],s;function a(f){var h=f<0?~f:f;(r[h]||(r[h]=[])).push({i:f,g:s})}function o(f){f.forEach(a)}function c(f){f.forEach(o)}function l(f){f.forEach(c)}function u(f){switch(s=f,f.type){case"GeometryCollection":f.geometries.forEach(u);break;case"LineString":o(f.arcs);break;case"MultiLineString":case"Polygon":c(f.arcs);break;case"MultiPolygon":l(f.arcs);break}}return u(t),r.forEach(e==null?function(f){n.push(f[0].i)}:function(f){e(f[0].g,f[f.length-1].g)&&n.push(f[0].i)}),n}var jc=Math.PI/180,Vs=i=>{let[t,e,n]=i.split("-").map(Number);return Date.UTC(t,e-1,n)/864e5},Un={land:"#2a303d",natural:"#a3adc2",soviet:"#9b2c35",bloc:"#6e3a3c",west:"#2d4a6e",neutral:"#4b5160",focus:"#a084ee"},XS=.42,qS="#151925",zm=(i,t,e,n,r=.382)=>{i.beginPath();for(let s=0;s<10;s++){let a=-Math.PI/2+s*Math.PI/5,o=s%2?n*r:n;i.lineTo(t+Math.cos(a)*o,e+Math.sin(a)*o)}i.closePath()},YS={us:{aspect:1.9,at:[52.455,13.255,.2,.27],draw(i,t,e,n,r,s){for(let u=0;u<13;u++)i.fillStyle=u%2?"#ffffff":"#b22234",i.fillRect(t,e+u*r/13,n,r/13+.5);let a=.76*r,o=7*r/13,c=.0308*r;i.fillStyle="#3c3b6e",i.fillRect(t,e,a,o),i.fillStyle="#ffffff";let l=s<"1959-07-04"?Array(6).fill(8):s<"1960-07-04"?Array(7).fill(7):[6,5,6,5,6,5,6,5,6];l.forEach((u,f)=>{let h=l.length===9&&f%2,d=l.length===9?6:u;for(let g=0;g<u;g++)zm(i,t+a*((g+(h?1:.5))/d),e+o*(f+.5)/l.length,c),i.fill()})}},uk:{aspect:2,at:[52.51,13.2,.5,.5],draw(i,t,e,n,r){let s=r/30;i.fillStyle="#012169",i.fillRect(t,e,n,r),i.save(),i.beginPath(),i.rect(t,e,n,r),i.clip(),i.lineCap="butt";for(let[a,o]of[[6*s,"#ffffff"],[2*s,"#c8102e"]])i.strokeStyle=o,i.lineWidth=a,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+r),i.moveTo(t+n,e),i.lineTo(t,e+r),i.stroke();i.restore();for(let[a,o]of[[10*s,"#ffffff"],[6*s,"#c8102e"]])i.fillStyle=o,i.fillRect(t+n/2-a/2,e,a,r),i.fillRect(t,e+r/2-a/2,n,a)}},fr:{aspect:1.5,at:[52.585,13.31,.5,.5],draw(i,t,e,n,r){["#0055a4","#ffffff","#ef4135"].forEach((s,a)=>{i.fillStyle=s,i.fillRect(t+a*n/3,e,n/3+.5,r)})}},su:{aspect:2,at:[52.53,13.475,.135,.3],draw(i,t,e,n,r){i.fillStyle="#cc0000",i.fillRect(t,e,n,r);let s=.24*r,a=t+.27*r,o=e+.36*r,c="#ffd700";i.strokeStyle=c,i.lineWidth=.014*r,i.lineJoin="miter",zm(i,a,e+.12*r,.065*r),i.stroke(),i.lineCap="round",i.lineWidth=.09*s,i.beginPath(),i.arc(a+.04*s,o-.04*s,.4*s,.75*Math.PI,-.8*Math.PI,!0),i.stroke(),i.beginPath(),i.moveTo(a-.24*s,o+.24*s),i.lineTo(a-.42*s,o+.42*s),i.stroke(),i.beginPath(),i.moveTo(a-.36*s,o+.36*s),i.lineTo(a+.16*s,o-.16*s),i.stroke(),i.lineWidth=.15*s,i.lineCap="butt",i.beginPath(),i.moveTo(a+.06*s,o-.3*s),i.lineTo(a+.3*s,o-.06*s),i.stroke()}}},$S={us:[52.43,13.36,"AMERICAN SECTOR"],uk:[52.49,13.19,"BRITISH SECTOR"],fr:[52.6,13.31,"FRENCH SECTOR"],su:[52.47,13.52,"SOVIET SECTOR"]},km=(i,t)=>{let e=parseInt(i.slice(1),16);return`rgb(${[e>>16,e>>8&255,e&255].map(r=>Math.round(r+(255-r)*t)).join(",")})`},ZS={focus:.3,soviet:.82,bloc:.8,west:.85,neutral:.8},JS="rgba(44, 52, 70, 0.996)",KS="rgba(76, 122, 172, 0.996)",jS=i=>{let t=parseInt(i.slice(1),16),e=n=>Math.round(n+(255-n)*.38);return`rgb(${e(t>>16)},${e(t>>8&255)},${e(t&255)})`},QS="1961-08-13",Vm="1989-11-09",tM="1951-02-01",eM=i=>Pc(i)>2*Math.PI?{type:"Polygon",coordinates:i.coordinates.map(t=>t.slice().reverse())}:i,ks=i=>{let t=i.geometry;if(!t)return i;let e=n=>Pc({type:"Polygon",coordinates:n})>2*Math.PI?n.map(r=>r.slice().reverse()):n;return t.type==="Polygon"?i.geometry={type:"Polygon",coordinates:e(t.coordinates)}:t.type==="MultiPolygon"&&(i.geometry={type:"MultiPolygon",coordinates:t.coordinates.map(e)}),i};function Gm(i){let t=i.objects.cshapes||i.objects.countries,e=yi(i,t).features.map(s=>ks({...s,from:s.properties.from?Vs(s.properties.from):-1/0,to:s.properties.to?Vs(s.properties.to):1/0})),n=i.objects.sectors?{sectors:yi(i,i.objects.sectors).features.map(ks),wall:yi(i,i.objects.wall).features,strip:yi(i,i.objects.strip).features.map(ks),staaken:i.objects.staaken?yi(i,i.objects.staaken).features.map(ks):[]}:null,r=i.objects.rivers?{rivers:yi(i,i.objects.rivers).features,lakes:yi(i,i.objects.lakes).features.map(ks),deep:yi(i,i.objects.deep).features.map(ks),box:i.waterBox||[-26,33,50,72]}:null;return{countries:e,land:yi(i,i.objects.land),berlin:n,water:r}}var Tf=(i,t)=>{let e=Vs(t==="modern"||!t?"2000-01-01":t);return i.filter(n=>n.from<=e&&e<n.to)};function nM(i,t,e,n=[-180,-90,180,90],r=0){let s=i.getContext("2d"),a=i.width,o=i.height;s.setTransform(1,0,0,-1,0,o);let c=n[2]-n[0]>=360,l=a/((n[2]-n[0])*jc),u=a/(n[2]-n[0]),f=o/(n[3]-n[1]),h=c?wf().scale(l).translate([-l*n[0]*jc,l*n[3]*jc]).precision(.1):vf({point(b,T){this.stream.point((b-n[0])*u,(n[3]-T)*f)}}),d=xf(h,s),g=e.fill||{},v=e.borders,p=Tf(t.countries,v),m=(n[2]-n[0])*111.32*Math.cos((n[1]+n[3])/2*jc)/a,E=c?0:r||.55,A=!c&&t.water,y=m<.05?11:m<.15?9:m<.4?7:m<1?6:m<2.5?5:4;s.clearRect(0,0,a,o);let S=A&&A.box;if(A&&n[0]<S[2]&&n[2]>S[0]&&n[1]<S[3]&&n[3]>S[1]){let b=Math.max(0,(S[0]-n[0])*u),T=Math.min(a,(S[2]-n[0])*u),R=Math.max(0,(n[3]-S[3])*f),U=Math.min(o,(n[3]-S[1])*f);s.fillStyle=JS,s.fillRect(b,R,T-b,U-R),s.globalCompositeOperation="destination-out";for(let N of A.deep)s.beginPath(),d(N),s.fill("evenodd");s.globalCompositeOperation="source-over"}s.fillStyle=v==="none"?Un.natural:Un.land,s.beginPath(),d(t.land),s.fill("evenodd"),s.save(),s.clip("evenodd");let w=c?1.5:3;for(let b of p){let T=g[b.properties.key];if(!T)continue;let R=T==="focus"?km(Un.focus,.5):Un[T]||Un.land;s.globalAlpha=ZS[T]??.8,s.fillStyle=R,s.beginPath(),d(b),s.fill(),T!=="focus"&&(s.save(),s.clip(),s.globalAlpha=.5,s.strokeStyle=jS(R),s.lineWidth=w*2,s.lineJoin="round",s.stroke(),s.restore())}if(s.globalAlpha=1,e.city==="berlin"&&t.berlin)for(let b of t.berlin.sectors){let T=YS[b.properties.sector],[[R,U],[N,L]]=d.bounds(b),[I,k,X,ot]=T.at,$=(k-n[0])*u,st=(n[3]-I)*f,it=Math.max(N-R,(L-U)*T.aspect),Pt=it/T.aspect,Et=Math.min(R,Math.max(N-it,$-X*it)),_e=Math.min(U,Math.max(L-Pt,st-ot*Pt)),Yt=b.properties.sector==="uk"&&v>=tM?t.berlin.staaken:[];s.save(),s.beginPath(),d(b);for(let me of Yt)d(me);s.clip("evenodd"),s.fillStyle=qS,s.fillRect(R,U,N-R,L-U),s.globalAlpha=XS,T.draw(s,Et,_e,it,Pt,v),s.restore()}if(s.restore(),A){let b=A.lakes.filter(U=>U.properties.r<=y),T=A.rivers.filter(U=>U.properties.r<=y),R=()=>{for(let U of b)s.beginPath(),d(U),s.fill("evenodd");s.lineJoin=s.lineCap="round";for(let U of T){let N=U.properties.r;s.lineWidth=(N<=3?2.2:N<=6?1.6:N<=9?1.1:.8)/E,s.beginPath(),d(U),s.stroke()}};s.globalCompositeOperation="destination-out",R(),s.globalCompositeOperation="source-over",s.fillStyle=s.strokeStyle=KS,R()}let C=e.focus||[];if(C.length){s.save(),s.strokeStyle=km(Un.focus,.4),s.globalAlpha=.32,s.lineWidth=Math.max(1,a/2600),s.lineJoin="round";for(let b of p)C.includes(b.properties.key)&&(s.beginPath(),d(b),s.stroke());s.restore()}if(e.city==="berlin"&&t.berlin){if(v>=QS){s.fillStyle="rgba(232, 226, 255, 0.34)";for(let b of t.berlin.strip)s.beginPath(),d(b),s.fill()}s.strokeStyle="rgba(255, 255, 255, 0.28)",s.lineWidth=Math.max(1,a/2400);for(let b of t.berlin.sectors)s.beginPath(),d(b),s.stroke();if(!c){s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(255, 255, 255, 0.92)",s.shadowColor="rgba(6, 7, 12, 0.85)";for(let b of t.berlin.sectors){let[T,R,U]=$S[b.properties.sector],N=(R-n[0])*u,L=(n[3]-T)*f;if(N<0||N>a||L<0||L>o)continue;let[[I],[k]]=d.bounds(b),X=Math.min(12/E,.75*(k-I)/(.72*U.length));X*E<6||(s.font=`500 ${X.toFixed(1)}px "Plex Mono", ui-monospace, Menlo, monospace`,s.letterSpacing=`${(X*.12).toFixed(1)}px`,s.shadowBlur=X*.6,s.fillText(U,N,L))}s.letterSpacing="0px",s.shadowBlur=0,s.shadowColor="transparent"}}else if(n[2]-n[0]<360){let b=Math.max(6,Math.round(Math.max(a,o)/110));for(let T of p)(g[T.properties.key]==="focus"||C.includes(T.properties.key))&&(s.save(),s.beginPath(),d(T),s.clip(),s.globalCompositeOperation="lighter",s.filter=`blur(${b}px)`,s.globalAlpha=.2,s.strokeStyle=Un.focus,s.lineWidth=b*2,s.stroke(),s.restore())}for(let b of e.areas||[]){let T=b.points.map(([R,U])=>[U,R]);(T[0][0]!==T.at(-1)[0]||T[0][1]!==T.at(-1)[1])&&T.push(T[0]),s.fillStyle=Un[b.fill]||Un.west,s.beginPath(),d(eM({type:"Polygon",coordinates:[T]})),s.fill()}}function iM(i,t,e,n,r){let s=new Uint8Array(n*r*4),a=n/(e[2]-e[0]),o=r/(e[3]-e[1]),c=Vs(t==="modern"||!t?"2000-01-01":t);return i.countries.forEach((l,u)=>{if(!(l.from<=c&&c<l.to)||!l.geometry)return;let f=u+1,h=f&255,d=f>>8,g=l.geometry.type==="Polygon"?[l.geometry.coordinates]:l.geometry.type==="MultiPolygon"?l.geometry.coordinates:[];for(let v of g){let p=[],m=1/0,E=-1/0,A=1/0,y=-1/0;for(let T of v)for(let R=1;R<T.length;R++){let U=(T[R-1][0]-e[0])*a,N=(T[R-1][1]-e[1])*o,L=(T[R][0]-e[0])*a,I=(T[R][1]-e[1])*o;if(U<A&&(A=U),U>y&&(y=U),N===I)continue;let k=N<I?[N,I,U,(L-U)/(I-N)]:[I,N,L,(U-L)/(N-I)];p.push(k),k[0]<m&&(m=k[0]),k[1]>E&&(E=k[1])}if(!p.length||y<0||A>n||E<0||m>r)continue;p.sort((T,R)=>T[0]-R[0]);let S=Math.max(0,Math.ceil(m-.5)),w=Math.min(r-1,Math.floor(E-.5)),C=0,x=[],b=[];for(let T=S;T<=w;T++){let R=T+.5;for(;C<p.length&&p[C][0]<=R;)x.push(p[C++]);b.length=0;for(let N=x.length-1;N>=0;N--){let L=x[N];if(L[1]<=R){x[N]=x[x.length-1],x.pop();continue}L[0]<=R&&b.push(L[2]+(R-L[0])*L[3])}b.sort((N,L)=>N-L);let U=T*n*4;for(let N=0;N+1<b.length;N+=2){let L=Math.max(0,Math.ceil(b[N]-.5)),I=Math.min(n-1,Math.floor(b[N+1]-.5));for(let k=L;k<=I;k++){let X=U+k*4;s[X]=h,s[X+1]=d,s[X+3]=255}}}}}),s}function Cf(i,t,e){let n=performance.now();if(t.kind==="ids")return{ids:iM(i,t.date,t.box,t.W,t.H),ms:performance.now()-n};let r=e(t.W,t.H);return nM(r,i,t.map,t.box,t.css),{canvas:r,ms:performance.now()-n}}var Hm="float luma(vec3 c){ return dot(c, vec3(.2126, .7152, .0722)); }",jT=`uniform sampler2D uSrc; uniform float uThr; varying vec2 vUv; ${Hm}
  void main(){ vec3 c = texture2D(uSrc, vUv).rgb; float l = luma(c), k = .06;
    float s = clamp(l - uThr + k, 0., 2. * k); s = s * s / (4. * k + 1e-4); float w = max(s, l - uThr) / max(l, 1e-4);
    gl_FragColor = vec4(c * w, 1.); }`;var QT=`uniform sampler2D uSrc, uBloom; uniform float uBloomK, uExposure, uShoulder, uGrade, uVignette, uGrain, uDim, uDimSide;
  uniform vec2 uRes; varying vec2 vUv; ${Hm}
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
  }`,Wm=i=>{i.userData.srgbOut=!0;let t=i.onBeforeCompile;i.onBeforeCompile=(n,r)=>{t?.call(i,n,r),n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>","gl_FragColor = sRGBTransferOETF( gl_FragColor );")};let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>(e?e():"")+"|srgbOut",i.needsUpdate=!0};var tC=new Zi(-1,1,1,-1,0,1),eC=new Gt,nC=new Gt;var rM="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",sM=`
  uniform sampler2D tScene; uniform vec2 uRes; uniform float uGrain, uExp, uSat, uDim, uDisplay, uDof, uSoft;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main() {
    vec2 c = vUv - 0.5; float r = length(c * vec2(uRes.x / uRes.y, 1.0));
    float k = smoothstep(0.38, 1.0, r);
    // the lens: colour fringes and softness grow towards the edges of the frame
    vec2 dir = c * (uDisplay > 0.5 ? 0.006 : 0.012) * k, px = 1.0 / uRes;
    vec3 col = vec3(texture2D(tScene, vUv + dir).r, texture2D(tScene, vUv).g, texture2D(tScene, vUv - dir).b);
    // and a long lens's depth: in a shot tilted towards the horizon the far ground, at the top of the frame, goes soft
    float kd = max(max(k, uDof * smoothstep(0.6, 0.97, vUv.y)), uSoft);
    vec3 soft = vec3(0.0);
    // the six taps turn a little from pixel to pixel, so a small bright light goes soft instead of into a hexagon
    float turn = hash(gl_FragCoord.xy * 0.71) * 1.0472;
    for (int i = 0; i < 6; i++) { float a = float(i) * 1.0472 + turn; soft += texture2D(tScene, vUv + vec2(cos(a), sin(a)) * px * (1.0 + 7.0 * kd)).rgb; }
    col = mix(col, soft / 6.0, kd * 0.85);
    if (uDisplay > 0.5) {
      // the globe's frame: toned by its brightness alone, so a map's hues stay its legend's, and even its strongest
      // colour gives up a little of itself to the grade
      col = pow(max(col, vec3(0.0)), vec3(2.2));
      float l0 = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col *= aces(vec3(l0 * uExp)).g / max(l0, 1e-4);
    } else col = aces(col * uExp);
    // the grade: almost monochrome, shadows a little cold and highlights a little warm; only strong colour keeps its hue
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    float chroma = max(col.r, max(col.g, col.b)) - min(col.r, min(col.g, col.b));
    col = mix(vec3(l), col, max(uSat, smoothstep(0.12, 0.32, chroma) * (uDisplay > 0.5 ? 0.72 : 1.0)));
    col *= mix(vec3(0.9, 0.95, 1.06), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, l));
    // a film's lower third: the foot of the frame darkens a little, where the words stand
    col *= (1.0 - 0.62 * pow(r, 2.3)) * uDim * (1.0 - 0.42 * smoothstep(0.42, 0.0, vUv.y));
    col = pow(col, vec3(1.0 / 2.2));
    col += (hash(floor(gl_FragCoord.xy)) - 0.5) * uGrain;
    gl_FragColor = vec4(col, 1.0);
  }`;function Rf(i,{phone:t=!1,exposure:e=1,grain:n=.035,sat:r=.18,display:s=!1}={}){let a=new xn(4,4,{type:Gn,samples:t?0:4}),o={tScene:{value:a.texture},uRes:{value:new It},uGrain:{value:n},uExp:{value:e},uSat:{value:r},uDim:{value:1},uDisplay:{value:s?1:0},uDof:{value:0},uSoft:{value:0}},c=new Gt,l=new Gt,u=new or,f=new Zi(-1,1,1,-1,0,1);return u.add(new ke(new fr(2,2),new Be({uniforms:o,vertexShader:rM,fragmentShader:sM,depthTest:!1,depthWrite:!1}))),{uniforms:o,setSize(h,d){a.setSize(h,d),o.uRes.value.set(h,d)},render(h,d){if(!s){i.setRenderTarget(a),i.render(h,d),i.setRenderTarget(null),i.render(u,f);return}h.traverse(v=>{let p=v.material;p&&!Array.isArray(p)&&!p.userData.srgbOut&&Wm(p)}),i.getClearColor(c);let g=i.getClearAlpha();i.setClearColor(l.copy(c).convertLinearToSRGB(),g),i.setRenderTarget(a),i.clear(),i.render(h,d),i.setClearColor(c,g),i.setRenderTarget(null),i.render(u,f)},dispose(){a.dispose()}}}var ro={divergent:"#4fd6c4",convergent:"#ff5a4f",collision:"#ffb347",transform:"#c9b3ff"},Sr=[[0,"#ff5a4f"],[70,"#ffb347"],[300,"#6fd3ff"],[700,"#8f86ff"]],Pf="#ff8a3d",If={4:"#fff3a3",5:"#ffd166",6:"#ffa94d",7:"#ff7a3d",8:"#ff4f3a",9:"#e0233d",10:"#a3123a"},Xm={4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X"},aM=`
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
  }`,oM=`
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
  }`;function qm(i,t){let e=t.data.length/(i==="quakes"?5:1),n=new Float32Array(e*3),r=new Float32Array(e*4);for(let l=0;l<e;l++){let u,f,h,d,g,v;if(i==="quakes")[u,f,d,h,g]=t.data.slice(l*5,l*5+5),v=0;else{let m=t.data[l];[u,f]=m,h=0,d=0,g=m[3]||0,v=m[2]}let p=Ge(f,u,1.0004);n.set([p.x,p.y,p.z],l*3),r.set([h,d,g,v],l*4)}let s=new We;s.setAttribute("position",new ce(n,3)),s.setAttribute("aInfo",new ce(r,4));let a=l=>new Gt(l),o=new Be({vertexShader:aM,fragmentShader:oM,transparent:!0,depthWrite:!1,uniforms:{uKind:{value:i==="quakes"?0:1},uOpacity:{value:0},uY0:{value:0},uY1:{value:1e4},uNow:{value:0},uMinMag:{value:0},uPx:{value:1},uScale:{value:1},uTypes:{value:[1,1,1,1]},uC0:{value:a(Sr[0][1])},uC1:{value:a(Sr[1][1])},uC2:{value:a(Sr[2][1])},uC3:{value:a(Sr[3][1])},uVolc:{value:a(Pf)}}}),c=new cr(s,o);return c.frustumCulled=!1,c.visible=!1,c.renderOrder=3,{obj:c,set(l,u,f,h,d){let g=o.uniforms;if(c.visible=u>.001,g.uOpacity.value=u,!l)return;g.uMinMag.value=l.minMag||0,g.uY0.value=l.years?l.years[0]:0,g.uY1.value=l.years?l.years[1]+1:1e4,g.uNow.value=f,g.uPx.value=h,g.uScale.value=d;let v=l.types;g.uTypes.value=v?[0,1,2,3].map(p=>v.includes(p)?1:0):[1,1,1,1]}}}function Ym(i,t){return(t===!0?Object.keys(ro):t).filter(e=>i[e]).map(e=>[e,i[e].map(n=>n.p)])}async function Lf(i,t){let e=await(await fetch(`${i}${t}.json`)).json(),n=await createImageBitmap(await(await fetch(`${i}${t}.png`)).blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(n.width,n.height):Object.assign(document.createElement("canvas"),{width:n.width,height:n.height})).getContext("2d",{willReadFrequently:!0});s.drawImage(n,0,0);let a=s.getImageData(0,0,n.width,n.height).data,o=new Float32Array(n.width*n.height);for(let d=0;d<o.length;d++)o[d]=a[d*4]*65536+a[d*4+1]*256+a[d*4+2]-1e3;let[c,l,u,f]=e.box;return{meta:e,at:(d,g)=>{let v=(g-c)/(u-c)*e.width-.5,p=(f-d)/(f-l)*e.height-.5,m=Math.max(0,Math.min(e.width-2,Math.floor(v))),E=Math.max(0,Math.min(e.height-2,Math.floor(p))),A=Math.max(0,Math.min(1,v-m)),y=Math.max(0,Math.min(1,p-E)),S=e.width;return(o[E*S+m]*(1-A)+o[E*S+m+1]*A)*(1-y)+(o[(E+1)*S+m]*(1-A)+o[(E+1)*S+m+1]*A)*y}}}var $m=6371e3,lM=`
  attribute float aH; attribute float aEdge;
  varying float vH; varying float vEdge; varying vec3 vN;
  void main() { vH = aH; vEdge = aEdge; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,cM=`
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
  }`;function Zm(i,t,e,n){let{BufferGeometry:r,Float32BufferAttribute:s,Mesh:a,ShaderMaterial:o,Vector3:c}=n,{meta:l,at:u}=i,[f,h,d,g]=l.box,v=Math.min(200,Math.round(l.width/3)),p=Math.round(v*l.height/l.width),m=[],E=[],A=[],y=[];for(let x=0;x<=p;x++)for(let b=0;b<=v;b++){let T=g-x/p*(g-h),R=f+b/v*(d-f),U=u(T,R),N=Ge(T,R,1+Math.max(0,U)*t/$m);m.push(N.x,N.y,N.z),E.push(U),A.push(Math.min(b/v,1-b/v,x/p,1-x/p))}for(let x=0;x<p;x++)for(let b=0;b<v;b++){let T=x*(v+1)+b,R=T+1,U=T+v+1,N=U+1;y.push(T,U,R,R,U,N)}let S=new r;S.setAttribute("position",new s(m,3)),S.setAttribute("aH",new s(E,1)),S.setAttribute("aEdge",new s(A,1)),S.setIndex(y),S.computeVertexNormals();let w=new o({vertexShader:lM,fragmentShader:cM,transparent:!0,depthWrite:!0,uniforms:{uLight:{value:e},uOpacity:{value:0},uTopo:{value:0},uContour:{value:0},uLo:{value:l.min},uHi:{value:l.max}}}),C=new a(S,w);return C.frustumCulled=!1,C.visible=!1,C.renderOrder=2,C}function Df(i,t,e,n,r=240){let s=[],a=[],c=Math.PI/180,u=((f,h)=>6371*Math.acos(Math.min(1,Math.sin(f[0]*c)*Math.sin(h[0]*c)+Math.cos(f[0]*c)*Math.cos(h[0]*c)*Math.cos((h[1]-f[1])*c))))(t,e);for(let f=0;f<=r;f++){let h=f/r,d=t[0]+(e[0]-t[0])*h,g=t[1]+(e[1]-t[1])*h,v=i.at(d,g);s.push(Ge(d,g,1+(Math.max(0,v)*n+40)/$m)),a.push({d:u*h,h:v})}return{pts:s,prof:a,total:u}}var uM=[{name:"Inner core",r0:0,r1:1220,c:"#fff1b8"},{name:"Outer core",r0:1220,r1:3480,c:"#ffb04a"},{name:"Mantle",r0:3480,r1:6250,c:"#d9542f"},{name:"Crust",r0:6250,r1:6371,c:"#a3adc2"}];function Jm(i,t){let{BufferGeometry:e,Float32BufferAttribute:n,Mesh:r,MeshBasicMaterial:s,Group:a,Color:o,DoubleSide:c}=t,l=new a;l.visible=!1;let u=[0,1,0],f=v=>{let p=Ge(0,v);return[p.x,p.y,p.z]},h=(v,p,m,E,A)=>{let y=[];for(let C=0;C<90;C++){let x=C*Math.PI/180,b=(C+1)*Math.PI/180,T=(I,k)=>[0,1,2].map(X=>(Math.cos(I)*v[X]+Math.sin(I)*p[X])*k/6371),R=T(x,m),U=T(x,E),N=T(b,m),L=T(b,E);y.push(...R,...U,...L,...R,...L,...N)}let S=new e;S.setAttribute("position",new n(y,3));let w=new r(S,new s({color:new o(A),side:c,transparent:!0,opacity:1}));return w.frustumCulled=!1,w},d={a:[],b:[],eq:[]};for(let v of uM)d.a.push(h(f(i),u,v.r0,v.r1,v.c)),d.b.push(h(f(i+90),u,v.r0,v.r1,v.c)),d.eq.push(h(f(i),f(i+90),v.r0,v.r1,v.c));let g=new a;return d.b.forEach(v=>g.add(v)),l.add(g),[...d.a,...d.eq].forEach(v=>l.add(v)),{g:l,set(v,p){l.visible=p>.001&&v>.001,g.rotation.y=-(1-v)*Math.PI/2;let m=Math.round(90*v)*6;d.eq.forEach(E=>{E.geometry.setDrawRange(0,m),E.material.opacity=p}),[...d.a,...d.b].forEach(E=>{E.material.opacity=p})}}}var Qc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Uf={military:"#ff8f5e",people:"#ffd59a",pressure:"#c9b3ff",capital:"#7ef0c2",trade:"#9db7ff"},Ff={"iron-curtain":"#dfe6f2",wall:"#ffffff"},hM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Km={sequential:["#14243f","#1d4f6e","#1f8a7a","#58c48b","#e8d867","#f59e4c"],diverging:["#d9662f","#b5603d","#5b4a48","#3a3f4c","#3e5878","#3b78bf","#62a8f0"]},jm={sequential:0,diverging:1},fM={NGDP_RPCH:[-8,8,"diverging"],PCPIPCH:[0,15,"sequential"],LUR:[0,20,"sequential"],BCA_NGDPD:[-10,10,"diverging"],GGXCNL_NGDP:[-12,12,"diverging"],GGXWDG_NGDP:[0,150,"sequential"],POLICY_RATE:[0,20,"sequential"],GINI:[25,60,"sequential"],CO2_PC:[0,20,"sequential"]},dM=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16));function so(i){let[t,e,n]=i.domain?[...i.domain,i.scale||"sequential"]:fM[i.id]||[0,100,"sequential"],r=i.scale||n,s=Km[r].map(dM);return{color:o=>{let c=Ze((o-t)/(e-t))*(s.length-1),l=Math.min(s.length-2,Math.floor(c)),u=c-l,f=s[l].map((h,d)=>Math.round(h+(s[l+1][d]-h)*u));return`rgb(${f[0]},${f[1]},${f[2]})`},d0:t,d1:e,kind:r,stops:Km[r]}}function Gs(i,t,e){let n=i&&i[t.id];if(!n)return null;let r=n.values[e];if(!r)return null;if(n.months){let[a,o]=String(t.month||`${t.year}-12`).split("-").map(Number),[c,l]=n.months[0].split("-").map(Number),u=(a-c)*12+(o-l);for(;u>=0&&r[u]==null;)u--;return u>=0?r[u]:null}let s=t.year-n.years[0];if(n.latestOnly){for(;s>=0&&r[s]==null;)s--;return s>=0?r[s]:null}return r[s]??null}var Nf=i=>(Math.abs(i)>=100?Math.round(i):+i.toFixed(1)).toLocaleString("en-GB"),Qm=(i,t)=>i&&t&&i.id===t.id&&String(i.domain)===String(t.domain)&&i.scale===t.scale,tg=`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,pM=`
  attribute float aH; uniform float uLift;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(normalize(position) * (1.0 + aH * uLift), 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,eg=`
  uniform sampler2D uGA, uDA, uGB, uDB, uRelW, uRelE, uTA, uTB;
  uniform vec4 uBoxA, uBoxB, uRelBox;
#ifdef HAS_DATA
  uniform sampler2D uIGA, uIDA, uIGB, uIDB, uVal, uRamp;
#endif
  uniform vec4 uSlotA, uSlotB;      // x: value row (< 0: no data layer), y: d0, z: d1, w: ramp row
  uniform float uWA, uWB;           // inside each state, how far its values have moved towards the other state's row
  uniform float uMix, uHatch, uLook, uFloor, uHaze; uniform vec3 uLight, uKey, uOcean, uOceanLift, uRim, uFocus, uCut;
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
    // what the night keeps is not flat: a soft key from the upper left of the frame (a film's night lighting, not the
    // moon) shades slopes, so raised ground keeps its shape in the dark
    float keep = uFloor * (0.25 + 1.6 * max(dot(n, normalize(uKey)), 0.0));
    float lit = keep + (1.0 - keep) * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
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
      // the light's look (design plan \xA78.3): the sun glints on open water and painted water, one soft lobe,
      // and the rim glows only on the lit side
      vec3 L = normalize(uLight), hv = normalize(L + v);
      float wm = max(1.0 - clamp(land.a / 0.996, 0.0, 1.0), water);
      // one roughness for the whole sea: varied per 0.5\xB0 cell (even blended between cells) the sharp glint showed the
      // cells as squares wherever the sun caught the water
      float a = 0.13, a2 = a * a, nh = max(dot(n, hv), 0.0);
      float D = a2 / (3.14159 * pow(nh * nh * (a2 - 1.0) + 1.0, 2.0));
      float F = 0.02 + 0.98 * pow(1.0 - max(dot(v, hv), 0.0), 5.0);
      col += vec3(1.0, 0.95, 0.86) * min(D, 5.0) * F * max(dot(n, L), 0.0) * 0.16 * wm; // capped: seen from far off the lobe had burned out
      col += uRim * rim * 0.55 * (0.3 + 0.7 * smoothstep(-0.3, 0.5, dot(n, L)));
    } else col += uRim * rim * 0.55;
    // aerial perspective: ground seen far off and low lies behind more air, which takes the sky's light there: pale by
    // day, warm where the sun stands near the horizon, blue-black by night. Looking straight down there is almost none.
    {
      float dist = length(cameraPosition - vW), calt = max(length(cameraPosition) - 1.0, 1e-4);
      float h = uHaze * (1.0 - exp(-max(0.0, dist / calt - 1.15) * 0.35));
      float sunAt = dot(n, normalize(uLight));
      vec3 sky = mix(vec3(0.012, 0.016, 0.03), vec3(0.22, 0.27, 0.35), smoothstep(-0.1, 0.5, sunAt));
      // the warm band where the sun is low: thin, and only where the air is seen at length (from far off it had burned
      // into a yellow crescent along the limb)
      sky += vec3(0.32, 0.14, 0.05) * exp(-pow((sunAt + 0.03) / 0.08, 2.0));
      col = mix(col, sky, clamp(h, 0.0, 0.85));
    }
    gl_FragColor = vec4(col, 1.0);
  }`,mM=`
  uniform vec3 uRim, uLight; uniform float uLook; varying vec3 vN; varying vec3 vW;
  void main() {
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float f = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 2.4);
    if (uLook > 0.5) {
      // one scattering, cheaply: bright where the sun is, a warm band at the day's edge, a thin bright limb
      float sun = dot(n, normalize(uLight));
      float day = smoothstep(-0.35, 0.3, sun), edge = exp(-pow((sun + 0.05) / 0.18, 2.0));
      vec3 c = mix(uRim, vec3(1.0, 0.62, 0.4), edge * 0.35); // a thin warm band: stronger, it burned into a yellow crescent
      gl_FragColor = vec4(c * (1.0 + 0.6 * pow(f, 6.0)), f * 0.9 * mix(0.22, 1.1, day));
    } else gl_FragColor = vec4(uRim, f * 0.9);
  }`,gM=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,xM=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime, uPulse, uPhase; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float head = smoothstep(uDraw - 0.12, uDraw, vUv.x);
    if (uPulse > 0.0) {
      // a movement as light, not as a sign: a faint trail low over the ground, pulses running along it the way it goes
      // (a column on the move), its leading edge the brightest, its start fading out of the dark
      float run = fract(vUv.x * uPulse - uTime * 0.32 + uPhase);
      float p = pow(smoothstep(0.0, 1.0, run), 6.0);
      float tail = smoothstep(0.0, 0.2, vUv.x);
      gl_FragColor = vec4(uColor * (0.32 + 1.2 * p + 1.5 * head), uOpacity * tail * (0.3 + 0.7 * max(p, head)));
      return;
    }
    gl_FragColor = vec4(uColor * (1.0 + head * 0.6), uOpacity * (0.8 + 0.45 * head));
  }`;function _M(i,t=1.0015){let e=[];for(let r of i)for(let s=1;s<r.length;s++){let a=r[s-1],o=r[s];if(Math.abs(a[0]-o[0])>180)continue;let c=Ge(a[1],a[0],t),l=Ge(o[1],o[0],t);e.push(c.x,c.y,c.z,l.x,l.y,l.z)}let n=new We;return n.setAttribute("position",new ce(e,3)),n}var tu=(i,t,e)=>{let n=_M(i,1).getAttribute("position").array,r=new zr({color:t,linewidth:e,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),s=new Ha(new Br().setPositions(n),r);return s.frustumCulled=!1,s},vM=i=>{let t=i.geometry;return t?(t.type==="Polygon"?[t.coordinates]:t.type==="MultiPolygon"?t.coordinates:[]).flat():[]};function yM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n];if(!n){e.push(Ge(r[0],r[1],t));continue}let s=i[n-1],a=kc([s[1],s[0]],[r[1],r[0]]),o=Math.max(1,Math.ceil(zc([s[1],s[0]],[r[1],r[0]])/.002));for(let c=1;c<=o;c++){let[l,u]=a(c/o);e.push(Ge(u,l,t))}}return e}var Of=(i,t=0,e=0,n=0)=>new Be({uniforms:{uColor:{value:new Gt(i)},uDraw:{value:0},uOpacity:{value:0},uDash:{value:t},uTime:{value:0},uPulse:{value:e},uPhase:{value:n}},vertexShader:gM,fragmentShader:xM,transparent:!0,depthWrite:!1,blending:Ji}),SM=`
  uniform vec3 uLight; uniform float uPx, uZoom; attribute float aPop; varying float vA;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0); vec3 n = normalize(wp.xyz);
    float facing = dot(n, normalize(cameraPosition - wp.xyz));
    float dark = smoothstep(0.06, -0.22, dot(n, normalize(uLight)));
    float big = clamp(sqrt(aPop / 3000.0), 0.0, 1.0);
    // towns crowd together towards the limb and from far off: there they would add up into a band of light, so they fade
    vA = facing > 0.02 ? dark * (0.3 + 0.7 * big) * smoothstep(0.05, 0.4, facing) * smoothstep(0.65, 1.1, uZoom) : 0.0;
    // far towns are smaller: seen low across the land they shrink towards the horizon instead of hanging like stars
    float near = clamp((length(cameraPosition) - 1.0) / max(length(cameraPosition - wp.xyz), 1e-5) * 2.2, 0.18, 1.0);
    vA *= near;
    gl_PointSize = vA > 0.0 ? uPx * uZoom * near * (4.0 + 14.0 * big) : 0.0;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,MM=`
  varying float vA;
  void main() {
    // a bright core and a wide faint halo, as a town's lights seen through the air
    float r = length(gl_PointCoord - 0.5) * 2.0, a = exp(-r * r * 9.0) + 0.22 * exp(-r * r * 2.2) * (1.0 - r);
    gl_FragColor = vec4(vec3(1.0, 0.76, 0.5) * max(a, 0.0) * vA * 1.3, 1.0);
  }`,ao=null;function bM(){if(ao)return ao;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255, 226, 180, 1)"),e.addColorStop(.12,"rgba(255, 196, 140, 0.55)"),e.addColorStop(.4,"rgba(255, 160, 100, 0.12)"),e.addColorStop(1,"rgba(255, 140, 80, 0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ao=new Ir(i),ao.colorSpace=gn,ao}function ng(i,t,e,n,r){let s=[i[1],i[0]],a=[t[1],t[0]],o=kc(s,a),c=zc(s,a),l=Ze(c*.035,2e-5,.04),u=[];for(let p=0;p<=48;p++){let m=p/48,[E,A]=o(m);u.push(Ge(A,E,1.0015+Math.sin(Math.PI*m)*l))}let f=Ze(n/Hn*.0016,4e-5,.002),h=Ze(c*Hn/45,3,12),d=new $n,g=[],v=r==="military"?[-1,0,1]:[0];for(let p of v){let m=p*f*5,E=m?u.map((y,S)=>{let w=u[Math.min(u.length-1,S+1)],C=u[Math.max(0,S-1)],x=new D().subVectors(w,C).cross(y).normalize();return y.clone().addScaledVector(x,m)}):u,A=Of(e,0,h,p*.31);d.add(new ke(new Dr(new hr(E),96,p?f*.7:f,6,!1),A)),g.push(A)}return d.userData={mats:g,mat:g[0]},d}var wM=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,EM=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float h = vUv.y;
    vec3 c = uColor * (0.45 + 0.55 * h) + vec3(0.35) * smoothstep(0.82, 1.0, h);
    gl_FragColor = vec4(c, uOpacity * (0.7 + 0.3 * h));
  }`;function AM(i,t,e,n){let r=[],s=[],a=[];for(let u of i){if(u.properties.kind!==t||!u.geometry)continue;let f=u.geometry.type==="LineString"?[u.geometry.coordinates]:u.geometry.type==="MultiLineString"?u.geometry.coordinates:[];for(let h of f){if(h.length<2)continue;let d=[0];for(let p=1;p<h.length;p++)d.push(d[p-1]+Math.hypot((h[p][0]-h[p-1][0])*.61,h[p][1]-h[p-1][1]));let g=d.at(-1)||1,v=r.length/3;h.forEach(([p,m],E)=>{let A=Ge(m,p,1.000002),y=Ge(m,p,1+e/Hn);if(r.push(A.x,A.y,A.z,y.x,y.y,y.z),s.push(d[E]/g,0,d[E]/g,1),E){let S=v+(E-1)*2;a.push(S,S+1,S+2,S+1,S+3,S+2)}})}}if(!r.length)return null;let o=new We;o.setAttribute("position",new ce(r,3)),o.setAttribute("uv",new ce(s,2)),o.setIndex(a);let c=new Be({uniforms:{uColor:{value:new Gt(t==="front"?Ff.wall:"#a99be0")},uDraw:{value:0},uOpacity:{value:0},uDash:{value:n},uTime:{value:0}},vertexShader:wM,fragmentShader:EM,transparent:!0,depthWrite:!1,side:Kn}),l=new ke(o,c);return l.frustumCulled=!1,l}function TM(i,t,e){let n=new Map,r=null,s="main";if(!!t&&typeof Worker<"u"&&typeof OffscreenCanvas<"u"&&(()=>{try{return!!new OffscreenCanvas(1,1).getContext("2d")}catch{return!1}})())try{r=new Worker(new URL("./world-paint.js",import.meta.url),{type:"module"}),s="worker",r.onmessage=({data:d})=>{if(d.failed||d.ready){d.failed&&o();return}let g=n.get(d.key);n.delete(d.key),g&&e(g,d.bitmap?{bitmap:d.bitmap}:{ids:d.ids},d.ms,"worker")},r.onerror=o,r.postMessage({type:"init",url:new URL(t,location.href).href,focus:Un.focus})}catch{r=null,s="main"}function o(){if(s!=="main"){s="main";try{r.terminate()}catch{}for(let d of n.values())f(d)}}let c=d=>window.requestIdleCallback?requestIdleCallback(d,{timeout:400}):setTimeout(d,16),l=[],u=!1;function f(d){l.push(d),h()}function h(){u||!l.length||(u=!0,c(()=>{let d=l.shift();if(u=!1,n.has(d.key)){n.delete(d.key);let g=Cf(i,d,(v,p)=>{let m=document.createElement("canvas");return m.width=v,m.height=p,m});e(d,g.ids?{ids:g.ids}:{canvas:g.canvas},g.ms,"main")}h()}))}return{get mode(){return s},has:d=>n.has(d),request(d,g=!1){n.has(d.key)||(n.set(d.key,d),s==="worker"?r.postMessage(d):g?(l.unshift(d),h()):f(d))},now(d){let g=Cf(i,d,(v,p)=>{let m=document.createElement("canvas");return m.width=v,m.height=p,m});e(d,g.ids?{ids:g.ids}:{canvas:g.canvas},g.ms,"main")},destroy(){r&&r.terminate()}}}async function wC(i,{scenes:t,hero:e,data:n,dataUrl:r,relief:s,terrain:a=null,layers:o=null,light:c="fixed",values:l=null,accent:u=null,reduced:f=!1,look:h=0,dprCap:d=null,onFrame:g}={}){u&&(Un.focus=u);let v=document.createElement("canvas");v.className="world__canvas",i.appendChild(v);let p;try{p=new Mc({canvas:v,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),v.dataset.gl=""}catch{return v.remove(),null}p.setClearColor(329226,1);let m=matchMedia("(max-width: 760px)").matches,E=new or,A=new un(32,1,5e-4,100),y=new $n;E.add(y);let S={paints:[],boxes:{},frames:0,skipped:0,frameMs:0,worstFrameMs:0,painter:""},w=!0,C=Gm(n),{countries:x,berlin:b}=C,T=new Map(x.filter(F=>F.properties.lat!=null).map(F=>[F.properties.key,F.properties])),R=F=>F<0?e:t[F],U={};{let F=new Set;for(let V of[e,...t]){for(let Y of V.map.points||[])F.add(Y.id);V.map.plates&&F.add("plates"),V.map.isolines&&o&&o.shake&&(o[`shake:${V.map.isolines.id}`]=`${o.shake}${V.map.isolines.id}.json`,F.add(`shake:${V.map.isolines.id}`))}await Promise.all([...F].filter(V=>o&&o[V]).map(async V=>{try{U[V]=await(await fetch(o[V])).json()}catch{}}))}let N=F=>!!(l&&F&&F.map.data&&l[F.map.data.id]),L=x.length,I=t.length+1,k=new Float32Array(L*I*2).fill(-1e9);[e,...t].forEach((F,V)=>{if(!N(F))return;let Y=new Set(F.map.focus||[]);x.forEach((j,ft)=>{let lt=Gs(l,F.map.data,j.properties.key),nt=(V*L+ft)*2;k[nt]=lt??-1e9,k[nt+1]=Y.has(j.properties.key)?1:0})});let X=new pi(k,L,I,Ti,Vn);X.minFilter=X.magFilter=tn,X.needsUpdate=!0;let ot=new Uint8Array(256*2*4);for(let[F,V]of Object.entries(jm)){let Y=so({id:"",domain:[0,255],scale:F});for(let j=0;j<256;j++){let[ft,lt,nt]=Y.color(j).match(/\d+/g).map(Number),K=(V*256+j)*4;ot.set([ft,lt,nt,255],K)}}let $=new pi(ot,256,2);$.colorSpace=gn,$.minFilter=$.magFilter=rn,$.needsUpdate=!0;let st=F=>{let V=R(F);if(!N(V))return new re(-1,0,1,0);let Y=so(V.map.data);return new re(F+1,Y.d0,Y.d1,jm[Y.kind])},it=2048,Pt=Math.min(m?2048:4096,p.capabilities.maxTextureSize),Et=m?2048*1280:4096*2560,_e=m?.5:.55,Yt=[i.clientWidth||innerWidth||1440,i.clientHeight||innerHeight||900],me=(F,V)=>`${Math.round(F/120)}x${Math.round(V/120)}`,tt=(m?96:320)*2**20,at=new Map,Tt=p.capabilities.getMaxAnisotropy(),Zt=(F,V)=>{let Y;return V.ids?(Y=new pi(V.ids,F.W,F.H),Y.minFilter=Y.magFilter=tn,Y.generateMipmaps=!1):(Y=V.bitmap?new hn(V.bitmap):new Ir(V.canvas),Y.colorSpace=gn,Y.anisotropy=Tt,Y.minFilter=ai,Y.generateMipmaps=!0),Y.flipY=!1,Y.needsUpdate=!0,Y},wt=TM(C,r,(F,V,Y,j)=>{at.set(F.key,{tex:Zt(F,V),used:performance.now(),bytes:F.W*F.H*4*(V.ids?1:4/3)}),S.paints.push({kind:F.kind,ms:Math.round(Y),where:j,size:`${F.W}x${F.H}`}),ae(),w=!0});S.painter=wt.mode;function ae(){let F=0;for(let V of at.values())F+=V.bytes;if(!(F<=tt))for(let[V,Y]of[...at.entries()].sort((j,ft)=>j[1].used-ft[1].used)){if(F<=tt||at.size<=4)break;Y.tex.dispose(),at.delete(V),F-=Y.bytes}}let je=F=>{let V=R(F),Y=N(V),j={borders:V.map.borders,fill:V.map.fill,city:Y?null:V.map.city,areas:V.map.areas,focus:Y?[]:V.map.focus},{lat:ft,lon:lt}=V.camera,nt=Yp(V.camera,Yt[0],Yt[1]);Number.isFinite(nt.kmPerPx)||(nt.kmPerPx=40);let K=nt.box&&nt.box.every(Number.isFinite)?nt.box:[lt-75,Math.max(-89.5,ft-60),lt+75,Math.min(89.5,ft+60)],ut=$p(K,Math.max(.003,(nt.kmPerPx||40)*_e),Pt,Et);S.boxes[F]={box:K.map(Kt=>+Kt.toFixed(2)),size:`${ut.W}x${ut.H}`,texelKm:+ut.texelKm.toFixed(3),kmPerPx:+nt.kmPerPx.toFixed(3)};let Ct=Kt=>+Kt.toFixed(3),Rt=`${K.map(Ct).join(",")}|${ut.W}x${ut.H}`,Se={g:{kind:"paint",key:`g|${JSON.stringify({...j,city:null})}`,map:{...j,city:null},box:[-180,-90,180,90],W:it,H:it/2},d:{kind:"paint",key:`d|${JSON.stringify(j)}|${Rt}`,map:j,box:K,W:ut.W,H:ut.H,css:ut.texelKm/Math.max(1e-6,nt.kmPerPx||ut.texelKm)}};return Y&&(Se.ig={kind:"ids",key:`ig|${j.borders}`,date:j.borders,box:[-180,-90,180,90],W:it,H:it/2},Se.id={kind:"ids",key:`id|${j.borders}|${Rt}`,date:j.borders,box:K,W:ut.W,H:ut.H}),{jobs:Se,box:new re(...K),kmPerPx:nt.kmPerPx}},ie=new Map,ge=F=>(ie.has(F)||ie.set(F,je(F)),ie.get(F));function Ie(F,V=!1){let Y=ge(F),j={box:Y.box},ft=performance.now(),lt=!0;for(let[nt,K]of Object.entries(Y.jobs)){let ut=at.get(K.key);ut?(ut.used=ft,j[nt]=ut.tex):(lt=!1,wt.request(K,V))}return lt?j:null}let Ht=new pi(new Uint8Array(4),1,1);Ht.needsUpdate=!0;let Je=await(async F=>{let V=F?await fetch(F).then(Y=>Y.ok?Y.json():null).catch(()=>null):null;return V?{...V,base:new URL(".",new URL(F,location.href)),levels:V.levels.map(Y=>({...Y,has:new Set(Y.tiles)}))}:null})(a),dn=Je?Je.levels:[],ze=new Set,He=new Set,z=!1,Qe=null,ve=null,P=F=>{z||(z=!0,He=new Set,Qe=F,ve=null,queueMicrotask(()=>{z=!1})),He.add(F)};async function _(F,V,[Y,j,ft,lt],nt,K,ut){let Ct=document.createElement("canvas");Ct.width=nt,Ct.height=K;let Rt=Ct.getContext("2d");Rt.imageSmoothingQuality="high";let Xt=!1,Se=nt/(ft-Y);for(let Kt of V){if(Kt!==V[0]&&!ut())return null;if(Kt!==V[0]&&Kt.ppd>Se*3)continue;let Me=[];for(let Ut=Math.floor((Y+180)/Kt.deg);Ut<=Math.floor((ft+180)/Kt.deg);Ut++)for(let kt=Math.floor((j+90)/Kt.deg);kt<=Math.floor((lt+90)/Kt.deg);kt++)Kt.has.has(`${Ut}_${kt}`)&&Me.push([Ut,kt]);let fe=await Promise.all(Me.map(([Ut,kt])=>fetch(new URL(`${Kt.z}/${Ut}_${kt}.jpg`,F)).then(be=>be.blob()).then(be=>createImageBitmap(be)).catch(()=>null)));Me.forEach(([Ut,kt],be)=>{let oe=fe[be];if(!oe)return;let Ae=Ut*Kt.deg-180,Ve=(kt+1)*Kt.deg-90,en=Math.floor((Ae-Y)/(ft-Y)*nt),Xn=Math.ceil((Ae+Kt.deg-Y)/(ft-Y)*nt),Ke=Math.floor((lt-Ve)/(lt-j)*K),Oi=Math.ceil((lt-Ve+Kt.deg)/(lt-j)*K);Rt.drawImage(oe,en,Ke,Xn-en,Oi-Ke),oe.close(),Xt=!0})}return Xt?Ct:null}let G=(F,V,Y,j)=>{let ft=new Ir(F);ft.minFilter=ai,ft.anisotropy=Tt,at.set(V,{tex:ft,used:performance.now(),bytes:Y*j*4*4/3}),ae(),w=!0};function q(F){if(!dn.length)return null;let V=R(F),Y=ge(F);if(V.camera.alt>2500)return null;let j=Y.kmPerPx&&Y.kmPerPx<.45,ft=dn.filter(fe=>fe.z<=1||j&&fe.z===2).sort((fe,Ut)=>fe.ppd-Ut.ppd),lt=ft.at(-1),[nt,K,ut,Ct]=Y.box.toArray(),Rt=Math.min(1,2048/((ut-nt)*lt.ppd),2048/((Ct-K)*lt.ppd)),Xt=Math.max(64,Math.round((ut-nt)*lt.ppd*Rt)),Se=Math.max(64,Math.round((Ct-K)*lt.ppd*Rt)),Kt=`t|${Y.box.toArray().map(fe=>fe.toFixed(3)).join(",")}|${lt.z}|${Xt}x${Se}`,Me=at.get(Kt);return Me?(Me.used=performance.now(),Me.tex):(F===Qe&&(ve=Kt),ze.has(Kt)||!He.has(F)||F!==Qe&&ze.has(ve)||(ze.add(Kt),_(Je.base,ft,[nt,K,ut,Ct],Xt,Se,()=>He.has(F)).then(fe=>{ze.delete(Kt),fe&&(G(fe,Kt,Xt,Se),Kt===ve&&(Qe=ve=null,He.forEach(q)))})),null)}let Q=new pi(new Uint8Array([219,219,219,255]),1,1);Q.needsUpdate=!0;let ht=new D(-.6,.55,.9),_t=ht.clone(),et=new Gt("#a9b9d8"),Z={uGA:{value:null},uDA:{value:null},uGB:{value:null},uDB:{value:null},uIGA:{value:Ht},uIDA:{value:Ht},uIGB:{value:Ht},uIDB:{value:Ht},uVal:{value:X},uRamp:{value:$},uSlotA:{value:new re(-1,0,1,0)},uSlotB:{value:new re(-1,0,1,0)},uWA:{value:0},uWB:{value:1},uBoxA:{value:new re},uBoxB:{value:new re},uRelW:{value:Q},uRelE:{value:Q},uTA:{value:Ht},uTB:{value:Ht},uQA:{value:Ht},uQB:{value:Ht},uQBoxA:{value:new re},uQBoxB:{value:new re},uRelBox:{value:new re(...s?.europeBox||[0,0,1,1])},uMix:{value:0},uHatch:{value:60},uLook:{value:h?1:0},uLight:{value:ht},uKey:{value:new D(0,1,0)},uFloor:{value:.42},uHaze:{value:.5},uCut:{value:new D(0,0,0)},uOcean:{value:new Gt("#06080d")},uOceanLift:{value:new Gt("#0c1220")},uRim:{value:et},uFocus:{value:new Gt(Un.focus)}};if(s){let F=new Aa,V=Y=>(Y.minFilter=ai,Y.anisotropy=Tt,Y);F.load(s.world,Y=>{Z.uRelW.value=V(Y),w=!0}),F.load(s.europe,Y=>{Z.uRelE.value=V(Y),w=!0})}let gt=new ke(m?new Lr(1,384,192):new Lr(1,512,256),new Be({uniforms:Z,vertexShader:tg,fragmentShader:eg,defines:{...l?{HAS_DATA:""}:{}}}));gt.rotation.y=-Math.PI/2;let Ft=new ke(new Lr(1.06,96,64),new Be({uniforms:{uRim:{value:et},uLight:{value:ht},uLook:{value:h?1:0}},vertexShader:tg,fragmentShader:mM,side:_n,transparent:!0,blending:Ji,depthWrite:!1}));y.add(gt,Ft);let St={uLight:{value:ht},uPx:{value:1},uZoom:{value:1}};fetch(new URL("../data/towns.json",import.meta.url)).then(F=>F.json()).then(F=>{let V=new Float32Array(F.length*3),Y=new Float32Array(F.length);F.forEach(([lt,nt,K],ut)=>{let Ct=Ge(nt,lt,1.0004);V.set([Ct.x,Ct.y,Ct.z],ut*3),Y[ut]=K});let j=new We;j.setAttribute("position",new ce(V,3)),j.setAttribute("aPop",new ce(Y,1));let ft=new cr(j,new Be({uniforms:St,vertexShader:SM,fragmentShader:MM,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ji}));ft.frustumCulled=!1,y.add(ft),w=!0}).catch(()=>{});{let V=new Float32Array(5400);for(let j=0;j<1800;j++){let ft=new D().randomDirection().multiplyScalar(30+Math.random()*30);V.set([ft.x,ft.y,ft.z],j*3)}let Y=new We;Y.setAttribute("position",new ce(V,3)),E.add(new cr(Y,new Be({vertexShader:"void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.75,0.72,1.0,0.35); }",transparent:!0,depthWrite:!1})))}let mt=new Map,zt=n.objects.cshapes||n.objects.countries,Vt=F=>{if(F==="none")return null;if(mt.has(F))return mt.get(F);let V=ft=>!ft.properties||!ft.properties.from||!F||F==="modern"||ft.properties.from<=F&&F<ft.properties.to,Y=Kc(n,zt,(ft,lt)=>ft!==lt&&V(ft)&&V(lt)).coordinates,j=tu(Y,l?"#0b0e15":"#c8cde0",1.25);return y.add(j),mt.set(F,j),j},$t=new Map,B=new Map,xt=F=>{if(F<0||F>=t.length)return null;if(B.has(F))return B.get(F);let V=t[F],Y=new $n,j=[];if((V.map.arrows||[]).forEach(nt=>{let K=ng(nt.from,nt.to,Uf[nt.kind]||"#fff",V.camera.alt,nt.kind);Y.add(K),j.push({type:"arrow",m:K})}),(V.map.flows||[]).forEach(nt=>{let K=T.get(nt.from),ut=T.get(nt.to);if(!K||!ut)return;let Ct=ng([K.lat,K.lon],[ut.lat,ut.lon],Uf[nt.kind]||Uf.capital,V.camera.alt);Y.add(Ct),j.push({type:"arrow",m:Ct,flow:!0})}),(V.map.markers||[]).forEach(nt=>{let K=new ma(new vs({map:bM(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ji}));K.position.copy(Ge(nt.at[0],nt.at[1],1.0002));let ut=V.camera.alt/Hn*.09;K.scale.set(ut,ut,1),Y.add(K),j.push({type:"glow",m:K})}),V.map.plates&&U.plates)for(let[nt,K]of Ym(U.plates,V.map.plates)){let ut=tu(K,ro[nt],1.8);Y.add(ut),j.push({type:"outline",m:ut,mat:ut.material})}let ft=V.map.isolines&&U[`shake:${V.map.isolines.id}`];if(ft)for(let[nt,K]of Object.entries(ft.levels)){let ut=tu(K,If[nt]||"#fff",+nt>=8?2.2:1.6);Y.add(ut),j.push({type:"outline",m:ut,mat:ut.material})}if(N(V)&&(V.map.focus||[]).length){let nt=Tf(x,V.map.borders).filter(ut=>V.map.focus.includes(ut.properties.key)).flatMap(vM),K=tu(nt,Un.focus,2);Y.add(K),j.push({type:"outline",m:K,mat:K.material})}(V.map.lines||[]).forEach(nt=>{if(nt.kind==="wall"&&b){let Kt=V.map.borders>=Vm,Me=Ze(V.camera.alt*.006,.08,.5);for(let fe of["front","rear"]){let Ut=AM(b.wall,fe,fe==="front"?Me:Me*.6,Kt?7:0);Ut&&(Y.add(Ut),j.push({type:"line",m:Ut,mat:Ut.material,k:fe==="front"?1:.55,dash:Kt}))}return}if(nt.kind==="iron-curtain"){if(!n.objects.cshapes)return;let Kt=Vs(V.map.borders),Me=oe=>oe.properties.from<=V.map.borders&&V.map.borders<oe.properties.to,fe=["FRG","AUT"],Ut=["GDR","CSK","HUN"],kt=Kc(n,n.objects.cshapes,(oe,Ae)=>oe!==Ae&&Me(oe)&&Me(Ae)&&(fe.includes(oe.properties.key)&&Ut.includes(Ae.properties.key)||Ut.includes(oe.properties.key)&&fe.includes(Ae.properties.key))),be=Ze(V.camera.alt/Hn*.0021,12e-6,.003);for(let oe of kt.coordinates){if(oe.length<2||!Kt)continue;let Ae=oe.map(([Ke,Oi])=>Ge(Oi,Ke,1.0008)),Ve=0;for(let Ke=1;Ke<Ae.length;Ke++)Ve+=Ae[Ke].distanceTo(Ae[Ke-1]);let en=Of(Ff["iron-curtain"],Math.max(6,Ve*1800)),Xn=new ke(new Dr(new hr(Ae,!1,"centripetal"),Math.min(1600,Ae.length*3),be,5,!1),en);Y.add(Xn),j.push({type:"line",m:Xn,mat:en,k:1,dash:!0})}return}let K=nt.kind==="wall",ut=yM(nt.points,K?1.00003:1.0008),Ct=nt.points[0][0]===nt.points.at(-1)[0]&&nt.points[0][1]===nt.points.at(-1)[1],Rt=Ze(V.camera.alt/Hn*(K?.0016:.0021),12e-6,.003),Xt=Of(Ff[nt.kind]||"#fff",K?0:90),Se=new ke(new Dr(new hr(ut,Ct,"centripetal"),Math.min(1200,ut.length*3),Rt,5,!1),Xt);Y.add(Se),j.push({type:"line",m:Se,mat:Xt,k:1,dash:!K})}),Y.visible=!1,y.add(Y);let lt={g:Y,items:j};return B.set(F,lt),lt},rt=(F,V,Y,j)=>{let ft=xt(F);if(!ft)return!1;ft.g.visible=Y>.001;let lt=$t.has(t[F].panel)?$t.get(t[F].panel):1,nt=!1;return ft.items.forEach((K,ut)=>{if(K.type==="arrow"){let Ct=Ze(V*1.25-ut*.12)*(K.flow?lt:1);for(let Rt of K.m.userData.mats)Rt.uniforms.uDraw.value=f?K.flow?lt>.5?1:0:1:Ct,Rt.uniforms.uOpacity.value=Y,Rt.uniforms.uTime.value=j;Y>.001&&!f&&performance.now()-On<8e3&&(nt=!0)}else K.type==="glow"?K.m.material.opacity=Y*Fe:K.type==="outline"?(K.mat.opacity=Y*.9,K.mat.resolution=ue,K.m.scale.setScalar(wn)):(K.mat.uniforms.uDraw.value=f?1:Ze(V*1.1),K.mat.uniforms.uOpacity.value=Y*.95*K.k,K.mat.uniforms.uTime.value=j,K.dash&&Y>.001&&!f&&(nt=!0))}),nt},dt=[...T.keys()],pt=new xa(new Sa(1,1,1,10,1,!1).translate(0,.5,0),new lr({color:"#ffffff",transparent:!0,opacity:.92,depthWrite:!0}),Math.max(1,dt.length));pt.instanceMatrix.setUsage(lh),pt.frustumCulled=!1,pt.visible=!1,y.add(pt);let ct=dt.map(F=>{let V=T.get(F);return Ge(V.lat,V.lon).normalize()}),Bt=new Map,Nt=F=>{if(Bt.has(F))return Bt.get(F);let V=R(F),Y=V.map.spikes,j=new Float32Array(dt.length);if(Y&&l){let lt=so(Y).d1;dt.forEach((nt,K)=>{let ut=Gs(l,Y,nt);j[K]=ut==null||ut<=0?0:Math.min(1.4,ut/lt)})}let ft={h:j,on:!!Y,alt:V.camera.alt,spec:Y};return Bt.set(F,ft),ft},Ne=new Pe,we=new ri,Nn=new D,Wn=new D,eu=new D(0,1,0),oo=new Gt,lo=new Gt("#ffffff"),Hr="";function nu(F,V,Y,j){let ft=Nt(F),lt=Nt(V),nt=(ft.on?1-Y:0)+(lt.on?Y:0);if(pt.visible=nt>.01,!pt.visible)return;let K=`${F}|${V}|${Y.toFixed(4)}|${Math.round(j)}`;if(K===Hr)return;Hr=K;let ut=.3,Ct=Ze(Math.sqrt(j/6e3)*.0032,.0012,.006);dt.forEach((Rt,Xt)=>{let Se=ft.on?ft.h[Xt]:0,Kt=lt.on?lt.h[Xt]:0,Me=(Se+(Kt-Se)*Y)*nt,fe=ct[Xt];we.setFromUnitVectors(eu,fe),Nn.copy(fe).multiplyScalar(1.0006),Wn.set(Ct,Math.max(1e-6,Me*ut),Ct),Ne.compose(Nn,we,Wn),pt.setMatrixAt(Xt,Ne),oo.set(Un.focus).lerp(lo,Ze(Me/Math.max(nt,.001)/1.2)*.7),pt.setColorAt(Xt,oo)}),pt.instanceMatrix.needsUpdate=!0,pt.instanceColor&&(pt.instanceColor.needsUpdate=!0)}let co=.8,uo=Object.fromEntries(["quakes","volcanoes"].filter(F=>U[F]).map(F=>{let V=qm(F,U[F]);return y.add(V.obj),[F,V]})),ti=(F,V)=>F&&(F.map.points||[]).find(Y=>Y.id===V),Ni=null,Qi=null;function ho(F,V,Y,j,ft){let lt=!1;Ni=null;let nt=Ze(1.15-Math.log10(ft/6e3)*.35,.8,1.8),K=p.getPixelRatio(),ut=!1;for(let[Ct,Rt]of Object.entries(uo)){let Xt=ti(F,Ct),Se=ti(V,Ct),Kt=(Xt?1-Y:0)+(Se?Y:0),Me=Y<.5?Xt||Se:Se||Xt,fe=0;if(Me&&Me.play&&!f&&Kt>.001){let[Ut,kt]=Me.years||[2e3,2025];Qi==null&&(Qi=j);let be=kt-Ut+4,oe=(j-Qi)*co;fe=Ut+oe%be,lt=!0,ut=!0,Ni=Math.min(kt,Math.floor(fe))}Rt.set(Me,Kt,fe,K,nt)}return ut||(Qi=null),lt}let Mr={BufferGeometry:We,Float32BufferAttribute:ce,Mesh:ke,ShaderMaterial:Be,MeshBasicMaterial:lr,Group:$n,Color:Gt,DoubleSide:Kn,Vector3:D},Wr=new Map,Si=new Map,tr=F=>{if(!Wr.has(F)){let V,Y=new Promise(j=>{V=j}).then(()=>o&&o.dem?Lf(o.dem,F).catch(()=>null):null);Y.go=V,Wr.set(F,Y)}return Wr.get(F)},Hs=F=>{let V=R(F),Y=V&&V.map.relief3d;if(!Y)return null;let j=`${Y.site}|${Y.exag||1}|${JSON.stringify(V.map.section||null)}`;return Si.has(j)?Si.get(j):(Si.set(j,null),tr(Y.site).then(ft=>{if(!ft)return;let lt=new $n,nt=Zm(ft,Y.exag||1,ht,Mr);lt.add(nt);let K=null;if(V.map.section){let{pts:ut}=Df(ft,V.map.section.from,V.map.section.to,Y.exag||1),Ct=[];for(let Rt=1;Rt<ut.length;Rt++)Ct.push(ut[Rt-1].x,ut[Rt-1].y,ut[Rt-1].z,ut[Rt].x,ut[Rt].y,ut[Rt].z);K=new Ha(new Br().setPositions(Ct),new zr({color:"#ffffff",linewidth:2.5,transparent:!0,opacity:0,depthTest:!1})),K.frustumCulled=!1,K.renderOrder=4,lt.add(K)}lt.visible=!1,y.add(lt),Si.set(j,{g:lt,m:nt,line:K}),w=!0}),null)},br=new Map,Ws=new Map,iu=F=>(Ws.has(F)||Ws.set(F,o&&o.ground?Lf(o.ground,F).catch(()=>null):Promise.resolve(null)),Ws.get(F)),fo=F=>{let V=F&&F.map.ground3d;return V?br.has(V.site)?br.get(V.site):(br.set(V.site,null),iu(V.site).then(Y=>{if(!Y)return;let{meta:j,at:ft}=Y,[lt,nt,K,ut]=j.box,Ct=V.exag||1,Rt=m?160:260,Xt=Math.round(Rt*j.height/j.width),Se=[],Kt=[],Me=[],fe=[];for(let oe=0;oe<=Xt;oe++)for(let Ae=0;Ae<=Rt;Ae++){let Ve=ut-oe/Xt*(ut-nt),en=lt+Ae/Rt*(K-lt),Xn=Math.min(Ae/Rt,1-Ae/Rt,oe/Xt,1-oe/Xt),Ke=Math.max(0,ft(Ve,en))*Mn(0,.08,Xn),Oi=Ge(Ve,en,1+Ke*Ct/(Hn*1e3));Se.push(Oi.x,Oi.y,Oi.z),Kt.push((en+180)/360,(Ve+90)/180),Me.push(Ke)}for(let oe=0;oe<Xt;oe++)for(let Ae=0;Ae<Rt;Ae++){let Ve=oe*(Rt+1)+Ae,en=Ve+1,Xn=Ve+Rt+1,Ke=Xn+1;fe.push(Ve,Xn,en,en,Xn,Ke)}let Ut=new We;Ut.setAttribute("position",new ce(Se,3)),Ut.setAttribute("uv",new ce(Kt,2)),Ut.setAttribute("aH",new ce(Me,1)),Ut.setIndex(fe),Ut.computeVertexNormals();let kt=new Be({uniforms:{...Z,uLift:{value:0}},vertexShader:pM,fragmentShader:eg,defines:gt.material.defines,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),be=new ke(Ut,kt);be.frustumCulled=!1,be.visible=!1,be.userData.exag=Ct,y.add(be),br.set(V.site,be),w=!0}),null):null};function po(F,V,Y){let j=fo(F),ft=fo(V);for(let lt of br.values())lt&&lt!==j&&lt!==ft&&(lt.visible=!1);for(let[lt,nt]of[[j,1-Y],[ft,Y]]){if(!lt)continue;let K=(lt===j?1-Y:0)+(lt===ft?Y:0);lt.visible=K>.001,lt.material.uniforms.uLift.value=(f?K>.5?1:0:Qc(Ze(K)))*lt.userData.exag/(Hn*1e3)}}function M(F,V,Y,j,ft){let lt=new Map,nt=(K,ut,Ct)=>{if(ut&&ut.map.relief3d&&Ct>.001){let Rt=Hs(K);Rt&&lt.set(Rt,{s:ut,op:(lt.get(Rt)?.op||0)+Ct})}};nt(Y,F,1-ft),nt(j,V,ft);for(let K of Si.values())K&&!lt.has(K)&&(K.g.visible=!1);for(let[K,{s:ut,op:Ct}]of lt){let Rt=ut.map.relief3d;K.g.visible=!0,K.m.visible=!0;let Xt=K.m.material.uniforms;Xt.uOpacity.value=Ct,Xt.uTopo.value=Rt.topo||0,Xt.uContour.value=Rt.contours||0,K.line&&(K.line.material.opacity=Ct,K.line.material.resolution=ue)}}let O=new Map;function J(F,V,Y){let j=F&&F.map.cutaway,ft=V&&V.map.cutaway,lt=Y<.5?j||ft:ft||j,nt=(j?1-Y:0)+(ft?Y:0);for(let ut of O.values())ut.g.visible=!1;if(!lt||nt<.001){Z.uCut.value.set(0,0,0),Ft.visible=!0;return}if(!O.has(lt.lon)){let ut=Jm(lt.lon,Mr);y.add(ut.g),O.set(lt.lon,ut)}let K=f?1:Qc(Ze(nt));O.get(lt.lon).set(K,1),Z.uCut.value.set(lt.lon,K,1),Ft.visible=K<.02}let H=document.createElement("div");H.className="world__legend",i.appendChild(H),H.innerHTML='<div class="world__lg"></div>';let W="",Mt="",At=[],bt=F=>F.month?`${hM[+F.month.slice(5)-1]} ${F.month.slice(0,4)}`:String(F.year);function Dt(F){let V=ti(F,"quakes"),Y=ti(F,"volcanoes"),j=F.map.plates&&U.plates,ft=F.map.isolines&&U[`shake:${F.map.isolines.id}`];if(ft){let nt=Object.keys(ft.levels).map(Number).sort((K,ut)=>K-ut);return`<p class="mono world__ind"><span>Shaking intensity, Modified Mercalli scale</span> \xB7 <span class="world__yr"><b>M ${ft.mag}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${nt.map(K=>If[K]).join(",")})"></div></div>
        <div class="world__ticks mono">${nt.map(K=>`<span>${Xm[K]}</span>`).join("")}</div>
        <p class="mono world__unit">Each line joins places that shook equally hard</p>
        <p class="world__src">${ft.source}.</p>`}let lt=V&&V.years?`${V.years[0]}\u2013${V.years[1]}`:"2000\u20132025";return`${V?`<p class="mono world__ind"><span>Earthquakes, magnitude ${V.minMag||5.5}+</span> \xB7 <span class="world__yr"><b>${lt}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${Sr.map(nt=>nt[1]).join(",")})"></div></div>
        <div class="world__ticks mono">${Sr.map((nt,K)=>`<span>${nt[0]}${K===Sr.length-1?" km":""}</span>`).join("")}</div>
        <p class="mono world__unit">Colour: depth of focus \xB7 size: magnitude</p>`:""}
      ${Y?`<p class="mono world__key"><i style="--c:${Pf}" class="is-tri"></i>Volcanoes that erupted in the last 10,000 years</p>`:""}
      ${j?`<p class="mono world__key">${(F.map.plates===!0?Object.keys(ro):F.map.plates).map(nt=>`<i style="--c:${ro[nt]}"></i>${{divergent:"Spreading",convergent:"Subduction",collision:"Collision",transform:"Transform"}[nt]}`).join(" ")}</p>`:""}
      <p class="world__src">${[V&&"Earthquakes: USGS ComCat",Y&&"Volcanoes: Smithsonian GVP",j&&"Plates: PB2002 (Bird 2003)"].filter(Boolean).join(". ")}.</p>`}function Ot(F,V,Y){let j=Y<.5?F:V,ft=j&&(j.map.data||j.map.spikes),lt=j&&j.map.data&&j.map.spikes,nt=ft&&l&&l[ft.id]?`${ft.id}|${ft.domain}|${lt?lt.id:""}|${(j.map.focus||[]).join()}`:"",K=!nt&&j&&((j.map.points||[]).length||j.map.plates&&U.plates||j.map.isolines);if(K&&(nt=`pts|${JSON.stringify(j.map.points||[])}|${JSON.stringify(j.map.plates||"")}|${JSON.stringify(j.map.isolines||"")}`),K&&nt!==W){W=nt,H.classList.add("is-on");let Ut=H.firstElementChild,kt=Ut.cloneNode(!1);kt.innerHTML=Dt(j),Ut.classList.add("is-out"),kt.classList.add("is-in"),H.appendChild(kt),requestAnimationFrame(()=>kt.classList.remove("is-in")),setTimeout(()=>Ut.remove(),f?0:450)}if(K){let Ut=H.lastElementChild.querySelector(".world__yr b");Ut&&Ni!=null&&Ut.textContent!==String(Ni)&&(Ut.textContent=String(Ni));return}if(nt!==W&&(W=nt,Mt="",H.classList.toggle("is-on",!!nt),nt)){let Ut=l[ft.id],kt=so(ft),be=j.map.data&&j.map.focus||[],oe=H.firstElementChild,Ae=oe.cloneNode(!1);Ae.innerHTML=`<p class="mono world__ind"><span>${Ut.label}</span> \xB7 <span class="world__yr"><b></b></span><span class="world__fc"></span></p>
          <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${kt.stops.join(",")})"></div>
            ${be.map(Ve=>`<i class="world__tick" data-k="${Ve}"><span>${Ve}</span></i>`).join("")}</div>
          <div class="world__ticks mono"><span>${kt.d0<0?"":"\u2264 "}${Nf(kt.d0)}</span>${kt.kind==="diverging"?"<span>0</span>":""}<span>\u2265 ${Nf(kt.d1)}</span></div>
          <p class="mono world__unit">${Ut.unit}${j.map.data?' \xB7 <i class="world__nodata"></i> no data':""}</p>
          ${lt&&l[lt.id]?`<p class="mono world__spk"><i></i>Height \xB7 ${l[lt.id].label} \xB7 <span class="world__spkm"></span></p>`:""}
          <p class="world__src">${Ut.source}${lt&&l[lt.id]?". "+l[lt.id].source:""}</p>`,oe.classList.add("is-out"),Ae.classList.add("is-in"),H.appendChild(Ae),requestAnimationFrame(()=>Ae.classList.remove("is-in")),setTimeout(()=>oe.remove(),f?0:450),At=be.map(Ve=>({k:Ve,el:Ae.querySelector(`[data-k="${Ve}"]`)}))}if(!nt)return;let ut=H.lastElementChild,Ct=l[ft.id],Rt=so(ft),Xt=j.map.data&&Qm(F?.map.data,V?.map.data),Se=bt(ft),Kt=Ct.forecastFrom&&+String(ft.month||ft.year).slice(0,4)>=Ct.forecastFrom?" \xB7 IMF projection":"";if(Se!==Mt){let Ut=ut.querySelector(".world__yr"),kt=Ut.firstElementChild,be=document.createElement("b");be.textContent=Se,Mt&&!f?(be.className="is-in",Ut.appendChild(be),kt.className="is-out",requestAnimationFrame(()=>be.classList.remove("is-in")),setTimeout(()=>kt.remove(),400)):Ut.replaceChildren(be),ut.querySelector(".world__fc").textContent=Kt,Mt=Se}if(lt){let Ut=ut.querySelector(".world__spkm"),kt=bt(lt);Ut&&Ut.textContent!==kt&&(Ut.textContent=kt)}for(let Ut of At){let kt=F&&F.map.data?Gs(l,F.map.data,Ut.k):null,be=V&&V.map.data?Gs(l,V.map.data,Ut.k):null,oe=Xt&&kt!=null&&be!=null?kt+(be-kt)*Y:Y<.5?kt:be;Ut.x=oe==null?null:Ze((oe-Rt.d0)/(Rt.d1-Rt.d0))*100,Ut.el.style.opacity=oe==null?0:1,oe!=null&&(Ut.el.style.left=`${Ut.x.toFixed(2)}%`)}let Me=[];for(let Ut of At.filter(kt=>kt.x!=null).sort((kt,be)=>kt.x-be.x)){let kt=0;for(;Me[kt]!=null&&Ut.x-Me[kt]<11;)kt++;Me[kt]=Ut.x,Ut.row!==kt&&(Ut.row=kt,Ut.el.style.setProperty("--row",Math.min(kt,2)))}let fe=ut.querySelector(".world__rampbox");fe&&+fe.dataset.rows!==Me.length&&(fe.dataset.rows=Me.length,fe.style.setProperty("--rows",Math.max(0,Math.min(Me.length,3)-1)))}let Qt=document.createElement("div");Qt.className="world__labels",i.appendChild(Qt);let ne=new Map,Lt=F=>{if(ne.has(F))return ne.get(F);let V=R(F),Y=N(V)?(V.map.focus||[]).map(lt=>T.get(lt)).filter(Boolean).map(lt=>({at:[lt.lat,lt.lon],label:lt.name,key:lt.key})):[],j=[...V.map.markers||[],...Y].map(lt=>{let nt=document.createElement("div");return nt.className="world__marker",nt.innerHTML=`<i></i><span>${lt.label}</span>${lt.key?'<b class="mono"></b>':""}`,Qt.appendChild(nt),lt.dy&&nt.style.setProperty("--dy",`${lt.dy}px`),{el:nt,at:lt.at,v:Ge(lt.at[0],lt.at[1],1.000002),key:lt.key,val:lt.key?nt.querySelector("b"):null,text:""}}),ft=V.map.relief3d;return ft&&j.length&&tr(ft.site).then(lt=>{lt&&(j.forEach(nt=>{nt.v=Ge(nt.at[0],nt.at[1],1+(Math.max(0,lt.at(nt.at[0],nt.at[1]))*(ft.exag||1)+30)/6371e3)}),w=!0)}),ne.set(F,j),j},Ee=d,$e={phone:m,exposure:1.5,sat:.2,grain:.03,display:!0},Jt=h>=1?Rf(p,$e):null,Le=()=>Jt?Jt.render(E,A):p.render(E,A),Re=1,vt=1,pn=new D,ue=new It(1,1),wn=1.0015;function Fn(){let F=i.clientWidth||innerWidth,V=i.clientHeight||innerHeight;if(!(!F||!V)){Re=F,vt=V,p.setPixelRatio(Math.min(devicePixelRatio||1,Ee??(m?1.5:1.75))),p.setSize(Re,vt,!1),Hh(A,Re,vt),Jt&&Jt.setSize(Math.round(Re*p.getPixelRatio()),Math.round(vt*p.getPixelRatio())),ue.set(Re,vt),me(Re,vt)!==me(...Yt)&&(Yt=[Re,vt],ie.clear());for(let Y of ne.values())Y.forEach(j=>{j.w=0});w=!0}}let ei=-1,Fi=NaN,he=!1,qe=!0,ni=0,Fe=0,On=0,mn=null,mo=performance.now(),go=new D,Bf=null,zf=null;function ru(F,V,Y){Lt(F).forEach((j,ft)=>{let lt=j.v.clone().normalize().dot(pn.copy(A.position).sub(j.v).normalize());go.copy(j.v).project(A);let nt=(go.x*.5+.5)*Re,K=(-go.y*.5+.5)*vt,ut=lt>.05&&go.z<1&&nt>-40&&nt<Re+40&&K>-20&&K<vt+20;if(j.el.style.transform=`translate3d(${nt.toFixed(1)}px, ${K.toFixed(1)}px, 0)`,j.el.style.opacity=ut?Ze(V*1.8-ft*.14):0,j.key){let Rt=Y(j.key),Xt=l[R(F).map.data.id].unit.startsWith("%")?"%":"",Se=Rt==null?"no data":Nf(Rt)+Xt;Se!==j.text&&(j.val.textContent=Se,j.text=Se,j.w=0)}ut&&!j.w&&(j.w=j.el.offsetWidth);let Ct=(j.w||160)+12;j.el.classList.toggle("is-left",nt+Ct>Re&&(nt-Ct>0||nt>Re-nt))})}function kf(F){if(ni=requestAnimationFrame(kf),!qe)return;let V=t.length,Y=Ze(ei,-1,V-1),j=Y<0&&!f,ft=!f&&F-On<7e3;if(!w&&Y===Fi&&!j&&!he&&!ft){S.skipped++;return}let lt=performance.now();w=!1,Fi=Y;let nt=(F-mo)/1e3,K=Math.floor(Y),ut=Y-K,Ct=Math.min(K+1,V-1),Rt=R(K),Xt=R(Ct),Se=K>=0&&Rt.panel!=null&&Rt.panel===Xt.panel,Kt=f?ut<.5?0:1:Qc(Mn(.08,.92,ut)),Me={...e.camera,lon:e.camera.lon+(f?0:Math.sin(nt*.06)*12)},fe=f?0:1-Mn(0,7e3,F-On),Ut=de=>fe>.002?{...de,alt:de.alt*(1+.025*fe),heading:(de.heading||0)+.9*fe}:de,kt=mn&&mn.from,be=kt?f?mn.t<.5?0:1:Qc(Mn(.08,.92,mn.t)):0,oe=kt?Wa(A,mn.from,mn.to,be,Re,vt):mn?Wa(A,mn,mn,0,Re,vt):Wa(A,Ut(K<0?Me:Rt.camera),Ut(Ct<0?Me:Xt.camera),Kt,Re,vt);wn=1+Ze(oe/Hn*.002,1e-6,.0015);{let de=A.position.clone().normalize(),Bn=new D(0,1,0).cross(de).normalize(),zi=de.clone().cross(Bn);Z.uKey.value.copy(de).addScaledVector(Bn,-.9).addScaledVector(zi,.7).normalize()}if(c==="camera"){let de=A.position.clone().normalize(),Bn=new D(0,1,0).cross(de).normalize(),zi=de.clone().cross(Bn);ht.copy(de).addScaledVector(Bn,-.75).addScaledVector(zi,.6)}else ht.copy(_t);let Ae=de=>de&&de.sky||{},Ve=kt?{}:Ae(Rt),en=Ae(kt?Rt:Xt),Xn=ht.clone(),Ke=kt?be:Kt,Oi=Ve.sun?Ge(Ve.sun[0],Ve.sun[1]):Xn,ig=en.sun?Ge(en.sun[0],en.sun[1]):Xn;(Ve.sun||en.sun)&&ht.copy(Oi).lerp(ig,Ke).normalize(),Z.uFloor.value=(Ve.floor??.42)*(1-Ke)+(en.floor??.42)*Ke,Fe=Mn(.1,-.15,A.position.clone().normalize().dot(ht.clone().normalize())),Jt&&(Jt.uniforms.uExp.value=$e.exposure*((Ve.exposure??1)*(1-Ke)+(en.exposure??1)*Ke)),Z.uHaze.value=(Ve.haze??.5)*(1-Ke)+(en.haze??.5)*Ke;let su=de=>de&&de.camera&&de.camera.tilt||0;Jt&&(Jt.uniforms.uDof.value=Mn(30,62,kt?su(Rt)*be:su(Rt)*(1-Kt)+su(Xt)*Kt)*.9),St.uPx.value=p.getPixelRatio(),St.uZoom.value=Ze(1600/Math.max(oe,1),.6,2.2);let Hf=ut===0,Mi=Ie(K,!0)||Bf||zf,wr=Hf?Mi:Ie(Ct,!0)||Mi;if(!Mi){Le();return}Bf=Mi,zf=wr,Z.uGA.value=Mi.g,Z.uDA.value=Mi.d,Z.uBoxA.value=Mi.box,Z.uIGA.value=Mi.ig||Ht,Z.uIDA.value=Mi.id||Ht,Z.uGB.value=wr.g,Z.uDB.value=wr.d,Z.uBoxB.value=wr.box,Z.uIGB.value=wr.ig||Ht,Z.uIDB.value=wr.id||Ht;let Bi=f?ut<.5?0:1:Mn(.35,.65,ut),Xs=f?ut<.5?0:1:Se?Mn(.1,.9,ut):Bi,au=N(Rt)&&N(Xt)&&Qm(Rt.map.data,Xt.map.data);Z.uSlotA.value=Mi.ig?st(K):new re(-1,0,1,0),Z.uSlotB.value=wr.ig?st(Ct):new re(-1,0,1,0),Z.uWA.value=au?Xs:0,Z.uWB.value=au?1-Xs:0,Z.uMix.value=Ct===K?0:Bi,Z.uTA.value=q(K)||Ht,Z.uTB.value=Ct===K||Hf?Z.uTA.value:q(Ct)||Ht,Z.uHatch.value=12e5/Math.max(60,oe);let Wf=Vt(Rt.map.borders),Xf=Vt(Xt.map.borders);for(let de of mt.values())de.material.opacity=0,de.material.resolution=ue,de.scale.setScalar(wn);let rg=Rt.map.city?.4:1,sg=Xt.map.city?.4:1;Wf&&(Wf.material.opacity+=.28*(1-Bi)*rg),Xf&&(Xf.material.opacity+=.28*Bi*sg),nu(K,Ct,Bi,oe),he=ho(Rt,Xt,Bi,nt,oe),M(K>=0?Rt:null,Xt,K,Ct,Ct===K?0:Bi),po(K>=0?Rt:null,Xt,Ct===K?0:Bi),J(Rt,Xt,Ct===K?0:Bi),Ot(Rt,Xt,Xs);for(let[de,Bn]of B)de!==K&&de!==Ct&&(Bn.g.visible=!1);if(Se){if(he=rt(K,1,1,nt)||he,Ct!==K){let de=xt(Ct);de&&(de.g.visible=!1)}}else K>=0&&(he=rt(K,1,1-Mn(.05,.4,ut),nt)||he),Ct!==K&&(he=rt(Ct,Mn(.55,1,ut),Mn(.5,.8,ut),nt)||he);let ou=de=>{let Bn=N(Rt)?Gs(l,Rt.map.data,de):null,zi=N(Xt)?Gs(l,Xt.map.data,de):null;return au&&Bn!=null&&zi!=null?Bn+(zi-Bn)*Xs:Xs<.5?Bn:zi};for(let[de,Bn]of ne)de!==K&&de!==Ct&&Bn.forEach(zi=>{zi.el.style.opacity=0});Se?(ru(K,1,ou),Ct!==K&&Lt(Ct).forEach(de=>{de.el.style.opacity=0})):(ru(K,1-Mn(.1,.45,ut),ou),Ct!==K&&ru(Ct,Mn(.6,.95,ut),ou)),Le(),g&&g(Y);let qf=performance.now()-lt;S.frames++,S.frameMs+=qf,S.worstFrameMs=Math.max(S.worstFrameMs,qf)}let Vf=new ResizeObserver(Fn);Vf.observe(i);let Gf=new IntersectionObserver(([F])=>{qe=F.isIntersecting,w=!0});Gf.observe(i),addEventListener("visibilitychange",()=>{qe=!document.hidden,w=!0}),Fn();for(let F of[-1,0])for(let V of Object.values(ge(F).jobs))at.has(V.key)||wt.now(V);return ni=requestAnimationFrame(kf),{setProgress(F){F!==ei&&(On=performance.now()),ei=F},setCamera(F){mn=F,F||(On=-1e9),w=!0},setGate(F,V){$t.get(F)!==V&&($t.set(F,V),w=!0)},pointOf:F=>T.get(F),prepare(F){F>=-1&&F<t.length&&(Ie(F),xt(F),Lt(F),Hs(F))},heights(F){if(F<0||F>=t.length)return;P(F),q(F);let V=R(F).map.relief3d;V&&tr(V.site).go()},replay(){Qi=null,w=!0},setQuality({dpr:F,look:V}){Ee=F,Z.uLook.value=Ft.material.uniforms.uLook.value=V?1:0,V>=1&&!Jt&&(Jt=Rf(p,$e)),V<1&&Jt&&(Jt.dispose(),Jt=null),Fn()},async profile(F,V,Y){let j=await tr(F);return j?Df(j,V,Y,1):null},heightsReady:F=>tr(F).then(Boolean),stats:S,get post(){return Jt},setSoft(F){Jt&&Jt.uniforms.uSoft.value!==F&&(Jt.uniforms.uSoft.value=F,w=!0)},setDim(F){Jt&&Jt.uniforms.uDim.value!==F&&(Jt.uniforms.uDim.value=F,w=!0)},camera:A,destroy(){cancelAnimationFrame(ni),Vf.disconnect(),Gf.disconnect(),wt.destroy(),p.dispose()}}}export{Un as PALETTE,wC as createWorld,Nf as fmtValue,Ge as ll,so as scaleOf,Gs as valueOf};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
