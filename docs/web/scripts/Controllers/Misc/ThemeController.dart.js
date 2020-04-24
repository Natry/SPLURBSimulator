{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.Hv(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uN"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uN"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uN(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={tO:function tO(a){this.a=a},
rl:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wJ:function(a,b,c,d){var t=new H.oM(a,b,c,[d])
t.eO(a,b,c,d)
return t},
du:function(a,b,c,d){if(!!J.az(a).$ist)return new H.h1(a,b,[c,d])
return new H.hy(a,b,[c,d])},
jr:function(){return new P.dT("No element")},
wi:function(){return new P.dT("Too few elements")},
jP:function(a,b,c,d){if(c-b<=32)H.FX(a,b,c,d)
else H.FW(a,b,c,d)},
FX:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bf(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cy(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FW:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.al(a3+a4,2)
p=q-t
o=q+t
n=J.bf(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cy(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cy(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cy(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cy(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.b_(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.az(c)
if(b.R(c,0))continue
if(b.a1(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dD(c)
if(b.aA(c,0)){--f
continue}else{a=f-1
if(b.a1(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.ee(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cy(a5.$2(d,j),0))for(;!0;)if(J.cy(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ee(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.n(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.n(a2,b))
n.i(a2,b,j)
H.jP(a2,a3,g-2,a5)
H.jP(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b_(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b_(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b_(a5.$2(d,j),0))for(;!0;)if(J.b_(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ee(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jP(a2,g,f,a5)}else H.jP(a2,g,f,a5)},
kV:function kV(a){this.a=a},
t:function t(){},
ev:function ev(){},
oM:function oM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ew:function ew(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hy:function hy(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h1:function h1(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jx:function jx(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fl:function fl(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dz:function dz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eM:function eM(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iB:function iB(){},
pa:function pa(){},
hS:function hS(){},
ki:function(a,b){var t=a.bq(b)
if(!u.globalState.d.cy)u.globalState.f.bC()
return t},
xK:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.az(s).$isp)throw H.k(P.dG("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.qr(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vE()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pY(P.tU(null,H.eR),0)
r=P.C
s.z=new H.v(0,null,null,null,null,null,0,[r,H.fB])
s.ch=new H.v(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qq()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zC,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Gh)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a0(null,null,null,r)
p=new H.fs(0,null,!1)
o=new H.fB(s,new H.v(0,null,null,null,null,null,0,[r,H.fs]),q,u.createNewIsolate(),p,new H.dH(H.rC()),new H.dH(H.rC()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
q.h(0,0)
o.da(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fH(a,{func:1,args:[,]}))o.bq(new H.rD(t,a))
else if(H.fH(a,{func:1,args:[,,]}))o.bq(new H.rE(t,a))
else o.bq(a)
u.globalState.f.bC()},
Gh:function(a){var t=P.hu(["command","print","msg",a])
return new H.dC(!0,P.i0(null,P.C)).av(t)},
zE:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zF()
return},
zF:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
zC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eP(!0,[]).aV(b.data)
s=J.bf(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eP(!0,[]).aV(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eP(!0,[]).aV(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a0(null,null,null,k)
i=new H.fs(0,null,!1)
h=new H.fB(s,new H.v(0,null,null,null,null,null,0,[k,H.fs]),j,u.createNewIsolate(),i,new H.dH(H.rC()),new H.dH(H.rC()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
j.h(0,0)
h.da(0,i)
u.globalState.f.a.aI(0,new H.eR(h,new H.mn(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bC()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fK(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bC()
break
case"close":u.globalState.ch.am(0,$.$get$vF().n(0,a))
a.terminate()
u.globalState.f.bC()
break
case"log":H.zB(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hu(["command","print","msg",t])
k=new H.dC(!0,P.i0(null,P.C)).av(k)
s.toString
self.postMessage(k)}else P.fI(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
zB:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hu(["command","log","msg",a])
r=new H.dC(!0,P.i0(null,P.C)).av(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cx(q)
t=H.cw(q)
s=P.lr(t)
throw H.k(s)}},
zD:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wx=$.wx+("_"+s)
$.wy=$.wy+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fK(f,["spawned",new H.fC(s,r),q,t.r])
r=new H.mo(a,b,c,d,t)
if(e===!0){t.dQ(q,q)
u.globalState.f.a.aI(0,new H.eR(t,r,"start isolate"))}else r.$0()},
G3:function(a,b){var t=new H.p2(!0,!1,null)
t.eP(a,b)
return t},
GA:function(a){return new H.eP(!0,[]).aV(new H.dC(!1,P.i0(null,P.C)).av(a))},
rD:function rD(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
qr:function qr(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
fB:function fB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
qm:function qm(a,b){this.a=a
this.b=b},
pY:function pY(a,b){this.a=a
this.b=b},
pZ:function pZ(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(){},
mn:function mn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mo:function mo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pK:function pK(){},
fC:function fC(b,a){this.b=b
this.a=a},
qt:function qt(a,b){this.a=a
this.b=b},
i3:function i3(b,c,a){this.b=b
this.c=c
this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a,b){this.a=a
this.b=b},
p4:function p4(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
yG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gb7(a)
s=P.d3(t,!0,H.ar(t,"n",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.c0)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.c0)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.b_(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.l_(l,k+1,n,s,[b,c])
return new H.fX(k,n,s,[b,c])}return new H.kZ(P.EF(a,null,null),[b,c])},
yH:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
Hb:function(a){return u.types[a]},
xF:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.az(a).$isaG},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cK(a)
if(typeof t!=="string")throw H.k(H.by(a))
return t},
Fv:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nV(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eA:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ud:function(a,b){if(b==null)throw H.k(new P.bN(a,null,null))
return b.$1(a)},
fq:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ud(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ud(a,c)}if(b<2||b>36)throw H.k(P.bG(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a2(q,o)|32)>r)return H.ud(a,c)}return parseInt(a,b)},
wv:function(a,b){return b.$1(a)},
wz:function(a,b){var t,s
H.GV(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wv(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rI(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wv(a,b)}return t},
nN:function(a){var t,s,r,q,p,o,n,m
t=J.az(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.az(a).$iseJ){p=C.w(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a2(q,0)===36)q=C.c.af(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rv(H.km(a),0,null),u.mangledGlobalNames)},
jJ:function(a){return"Instance of '"+H.nN(a)+"'"},
F2:function(){if(!!self.location)return self.location.href
return},
wu:function(a){var t,s,r,q,p
t=J.cl(a)
if(typeof t!=="number")return t.ep()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
F7:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c0)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.by(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aS(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.by(q))}return H.wu(t)},
wB:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.c0)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.by(q))
if(q<0)throw H.k(H.by(q))
if(q>65535)return H.F7(a)}return H.wu(a)},
F8:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ep()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hL:function(a){var t
if(typeof a!=="number")return H.ag(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aS(t,10))>>>0,56320|t&1023)}}throw H.k(P.bG(a,0,1114111,null,null))},
cZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ww:function(a){return a.b?H.cZ(a).getUTCFullYear()+0:H.cZ(a).getFullYear()+0},
uf:function(a){return a.b?H.cZ(a).getUTCMonth()+1:H.cZ(a).getMonth()+1},
ue:function(a){return a.b?H.cZ(a).getUTCDate()+0:H.cZ(a).getDate()+0},
F3:function(a){return a.b?H.cZ(a).getUTCHours()+0:H.cZ(a).getHours()+0},
F5:function(a){return a.b?H.cZ(a).getUTCMinutes()+0:H.cZ(a).getMinutes()+0},
F6:function(a){return a.b?H.cZ(a).getUTCSeconds()+0:H.cZ(a).getSeconds()+0},
F4:function(a){return a.b?H.cZ(a).getUTCMilliseconds()+0:H.cZ(a).getMilliseconds()+0},
ug:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.by(a))
return a[b]},
wA:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.by(a))
a[b]=c},
ag:function(a){throw H.k(H.by(a))},
w:function(a,b){if(a==null)J.cl(a)
throw H.k(H.c5(a,b))},
c5:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d1(!0,b,"index",null)
t=J.cl(a)
if(!(b<0)){if(typeof t!=="number")return H.ag(t)
s=b>=t}else s=!0
if(s)return P.bA(b,a,"index",null,t)
return P.jL(b,"index",null)},
H_:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d1(!0,a,"start",null)
if(a<0||a>c)return new P.eB(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d1(!0,b,"end",null)
if(b<a||b>c)return new P.eB(a,c,!0,b,"end","Invalid value")}return new P.d1(!0,b,"end",null)},
by:function(a){return new P.d1(!0,a,null,null)},
kk:function(a){if(typeof a!=="number")throw H.k(H.by(a))
return a},
uM:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.by(a))
return a},
GV:function(a){if(typeof a!=="string")throw H.k(H.by(a))
return a},
k:function(a){var t
if(a==null)a=new P.fo()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xM})
t.name=""}else t.toString=H.xM
return t},
xM:function(){return J.cK(this.dartException)},
aZ:function(a){throw H.k(a)},
c0:function(a){throw H.k(new P.bQ(a))},
dU:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.p7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wS:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tQ:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mH(a,s,t?null:b.receiver)},
cx:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rF(a)
if(a==null)return
if(a instanceof H.ha)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aS(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tQ(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jD(p,null))}}if(a instanceof TypeError){o=$.$get$wM()
n=$.$get$wN()
m=$.$get$wO()
l=$.$get$wP()
k=$.$get$wT()
j=$.$get$wU()
i=$.$get$wR()
$.$get$wQ()
h=$.$get$wW()
g=$.$get$wV()
f=o.aD(s)
if(f!=null)return t.$1(H.tQ(s,f))
else{f=n.aD(s)
if(f!=null){f.method="call"
return t.$1(H.tQ(s,f))}else{f=m.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=k.aD(s)
if(f==null){f=j.aD(s)
if(f==null){f=i.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=h.aD(s)
if(f==null){f=g.aD(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jD(s,f==null?null:f.method))}}return t.$1(new H.p9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jT()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d1(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jT()
return a},
cw:function(a){var t
if(a instanceof H.ha)return a.b
if(a==null)return new H.ke(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ke(a,null)},
Hk:function(a){if(a==null||typeof a!='object')return J.dF(a)
else return H.eA(a)},
xC:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hg:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ki(b,new H.rq(a))
case 1:return H.ki(b,new H.rr(a,d))
case 2:return H.ki(b,new H.rs(a,d,e))
case 3:return H.ki(b,new H.rt(a,d,e,f))
case 4:return H.ki(b,new H.ru(a,d,e,f,g))}throw H.k(P.lr("Unsupported number of arguments for wrapped closure"))},
dl:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hg)
a.$identity=t
return t},
yC:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.az(c).$isp){t.$reflectionInfo=c
r=H.Fv(t).r}else r=c
q=d?Object.create(new H.ol().constructor.prototype):Object.create(new H.fQ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dI
$.dI=J.ed(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.va(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hb,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.v7:H.rM
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.va(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yz:function(a,b,c,d){var t=H.rM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
va:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yB(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yz(s,!q,t,b)
if(s===0){q=$.dI
$.dI=J.ed(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fR
if(p==null){p=H.kO("self")
$.fR=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dI
$.dI=J.ed(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fR
if(p==null){p=H.kO("self")
$.fR=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
yA:function(a,b,c,d){var t,s
t=H.rM
s=H.v7
switch(b?-1:a){case 0:throw H.k(new H.o_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yB:function(a,b){var t,s,r,q,p,o,n,m
t=H.yy()
s=$.v6
if(s==null){s=H.kO("receiver")
$.v6=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yA(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dI
$.dI=J.ed(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dI
$.dI=J.ed(o,1)
return new Function(s+H.y(o)+"}")()},
uN:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.az(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yC(a,b,t,!!d,e,f)},
rM:function(a){return a.a},
v7:function(a){return a.c},
yy:function(){var t=$.fR
if(t==null){t=H.kO("self")
$.fR=t}return t},
kO:function(a){var t,s,r,q,p
t=new H.fQ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hn:function(a,b){var t=J.bf(b)
throw H.k(H.v9(H.nN(a),t.K(b,3,t.gm(b))))},
i7:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.az(a)[b]
else t=!0
if(t)return a
H.Hn(a,b)},
xB:function(a){var t=J.az(a)
return"$S" in t?t.$S():null},
fH:function(a,b){var t
if(a==null)return!1
t=H.xB(a)
return t==null?!1:H.uQ(t,b)},
v9:function(a,b){return new H.kT("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hv:function(a){throw H.k(new P.lb(a))},
rC:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xD:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dV(a,null)},
a:function(a,b){a.$ti=b
return a},
km:function(a){if(a==null)return
return a.$ti},
xE:function(a,b){return H.uS(a["$as"+H.y(b)],H.km(a))},
ar:function(a,b,c){var t=H.xE(a,b)
return t==null?null:t[c]},
Q:function(a,b){var t=H.km(a)
return t==null?null:t[b]},
dE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rv(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dE(t,b)
return H.GF(a,b)}return"unknown-reified-type"},
GF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.H9(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dE(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
rv:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cb("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dE(o,c)}return q?"":"<"+t.A(0)+">"},
kn:function(a){var t,s
if(a instanceof H.f0){t=H.xB(a)
if(t!=null)return H.dE(t,null)}s=J.az(a).constructor.builtin$cls
if(a==null)return s
return s+H.rv(a.$ti,0,null)},
uS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dY:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.km(a)
s=J.az(a)
if(s[b]==null)return!1
return H.xw(H.uS(s[d],t),c)},
Hu:function(a,b,c,d){if(a==null)return a
if(H.dY(a,b,c,d))return a
throw H.k(H.v9(H.nN(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rv(c,0,null),u.mangledGlobalNames)))},
xw:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d0(a[s],b[s]))return!1
return!0},
eT:function(a,b,c){return a.apply(b,H.xE(b,c))},
GW:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ac"||b.builtin$cls==="cS"
if(b==null)return!0
t=H.km(a)
a=J.az(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uQ(r.apply(a,null),b)}return H.d0(s,b)},
d0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cS")return!0
if('func' in b)return H.uQ(a,b)
if('func' in a)return b.builtin$cls==="HB"||b.builtin$cls==="ac"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xw(H.uS(o,t),r)},
xv:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d0(t,p)||H.d0(p,t)))return!1}return!0},
GM:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d0(p,o)||H.d0(o,p)))return!1}return!0},
uQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d0(t,s)||H.d0(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xv(r,q,!1))return!1
if(!H.xv(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}}return H.GM(a.named,b.named)},
HN:function(a){var t=$.uO
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HM:function(a){return H.eA(a)},
HL:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hh:function(a){var t,s,r,q,p,o
t=$.uO.$1(a)
s=$.rj[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rp[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xu.$2(a,t)
if(t!=null){s=$.rj[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rp[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uR(r)
$.rj[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rp[t]=r
return r}if(p==="-"){o=H.uR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xG(a,r)
if(p==="*")throw H.k(new P.eI(t))
if(u.leafTags[t]===true){o=H.uR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xG(a,r)},
xG:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ry(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uR:function(a){return J.ry(a,!1,null,!!a.$isaG)},
Hi:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ry(t,!1,null,!!t.$isaG)
else return J.ry(t,c,null,null)},
He:function(){if(!0===$.uP)return
$.uP=!0
H.Hf()},
Hf:function(){var t,s,r,q,p,o,n,m
$.rj=Object.create(null)
$.rp=Object.create(null)
H.Hd()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xH.$1(p)
if(o!=null){n=H.Hi(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hd:function(){var t,s,r,q,p,o,n
t=C.P()
t=H.fG(C.Q,H.fG(C.R,H.fG(C.v,H.fG(C.v,H.fG(C.T,H.fG(C.S,H.fG(C.U(C.w),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uO=new H.rm(p)
$.xu=new H.rn(o)
$.xH=new H.ro(n)},
fG:function(a,b){return a(b)||b},
tL:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bN("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hs:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xL:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hq){q=b.gdz()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aZ(H.by(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GK:function(a){return a},
Ht:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aU(0,a),t=new H.k2(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.xl().$1(C.c.K(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.xl().$1(C.c.af(a,s)))
return t.charCodeAt(0)==0?t:t},
kZ:function kZ(a,$ti){this.a=a
this.$ti=$ti},
kY:function kY(){},
fX:function fX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
l_:function l_(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nV:function nV(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
p7:function p7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jD:function jD(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c){this.a=a
this.b=b
this.c=c},
p9:function p9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
rF:function rF(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
rq:function rq(a){this.a=a},
rr:function rr(a,b){this.a=a
this.b=b},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ru:function ru(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
oQ:function oQ(){},
ol:function ol(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kT:function kT(a){this.a=a},
o_:function o_(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
v:function v(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mG:function mG(a){this.a=a},
mF:function mF(a){this.a=a},
mQ:function mQ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mR:function mR(a,$ti){this.a=a
this.$ti=$ti},
mS:function mS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
ro:function ro(a){this.a=a},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a,b){this.a=a
this.b=b},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dG("Invalid length "+H.y(a)))
return a},
xi:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dG("Invalid view offsetInBytes "+H.y(b)))},
xk:function(a){return a},
F0:function(a){return new Int8Array(H.xk(a))},
cR:function(a,b,c){H.xi(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Gz:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aA()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.H_(a,b,c))
return b},
fm:function fm(){},
ey:function ey(){},
nf:function nf(){},
jA:function jA(){},
hC:function hC(){},
hE:function hE(){},
hG:function hG(){},
hD:function hD(){},
hF:function hF(){},
hH:function hH(){},
ng:function ng(){},
nh:function nh(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
nl:function nl(){},
nm:function nm(){},
jB:function jB(){},
fn:function fn(){},
H9:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Hm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
az:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ju.prototype
return J.jt.prototype}if(typeof a=="string")return J.et.prototype
if(a==null)return J.mD.prototype
if(typeof a=="boolean")return J.mC.prototype
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.rk(a)},
ry:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rk:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uP==null){H.He()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eI("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tP()]
if(p!=null)return p
p=H.Hh(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.H
if(s===Object.prototype)return C.H
if(typeof q=="function"){Object.defineProperty(q,$.$get$tP(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
wj:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EE:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a2(a,b)
if(s!==32&&s!==13&&!J.wj(s))break;++b}return b},
tK:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.X(a,t)
if(s!==32&&s!==13&&!J.wj(s))break}return b},
bf:function(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.rk(a)},
da:function(a){if(a==null)return a
if(a.constructor==Array)return J.es.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.rk(a)},
dD:function(a){if(typeof a=="number")return J.fk.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eJ.prototype
return a},
kl:function(a){if(typeof a=="number")return J.fk.prototype
if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eJ.prototype
return a},
db:function(a){if(typeof a=="string")return J.et.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eJ.prototype
return a},
bo:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eu.prototype
return a}if(a instanceof P.ac)return a
return J.rk(a)},
ed:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kl(a).T(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.az(a).R(a,b)},
uT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dD(a).ar(a,b)},
cy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dD(a).aA(a,b)},
ee:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dD(a).a1(a,b)},
uU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kl(a).aq(a,b)},
i8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xF(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).n(a,b)},
kq:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xF(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.da(a).i(a,b,c)},
xN:function(a,b){return J.da(a).h(a,b)},
xO:function(a,b,c,d){return J.bo(a).fK(a,b,c,d)},
xP:function(a,b){return J.db(a).aU(a,b)},
dZ:function(a,b){return J.bo(a).fM(a,b)},
uV:function(a){return J.bo(a).fO(a)},
xQ:function(a,b,c){return J.dD(a).ab(a,b,c)},
xR:function(a,b){return J.kl(a).ax(a,b)},
xS:function(a,b){return J.bo(a).ay(a,b)},
xT:function(a,b){return J.bf(a).ac(a,b)},
kr:function(a,b,c){return J.bf(a).dU(a,b,c)},
xU:function(a,b){return J.bo(a).fX(a,b)},
uW:function(a,b){return J.da(a).S(a,b)},
xV:function(a,b,c,d){return J.da(a).bX(a,b,c,d)},
ks:function(a){return J.dD(a).ai(a)},
xW:function(a,b){return J.da(a).a5(a,b)},
uX:function(a){return J.bo(a).gdS(a)},
xX:function(a){return J.bo(a).gbp(a)},
fJ:function(a){return J.bo(a).gap(a)},
xY:function(a){return J.bo(a).gcG(a)},
dF:function(a){return J.az(a).ga3(a)},
rG:function(a){return J.bf(a).gV(a)},
uY:function(a){return J.bo(a).gW(a)},
cJ:function(a){return J.da(a).gU(a)},
cl:function(a){return J.bf(a).gm(a)},
kt:function(a){return J.bo(a).gG(a)},
xZ:function(a){return J.bo(a).ghL(a)},
y_:function(a){return J.bo(a).ghM(a)},
uZ:function(a){return J.az(a).gaa(a)},
rH:function(a){return J.bo(a).gaH(a)},
y0:function(a,b){return J.bo(a).bH(a,b)},
y1:function(a,b){return J.bf(a).bf(a,b)},
v_:function(a,b,c,d,e){return J.bo(a).bu(a,b,c,d,e)},
v0:function(a,b){return J.da(a).au(a,b)},
y2:function(a,b,c){return J.db(a).e7(a,b,c)},
v1:function(a,b){return J.bo(a).hy(a,b)},
y3:function(a,b,c,d){return J.bo(a).hI(a,b,c,d)},
ku:function(a,b,c){return J.db(a).cS(a,b,c)},
y4:function(a,b,c){return J.db(a).hK(a,b,c)},
fK:function(a,b){return J.bo(a).b5(a,b)},
v2:function(a,b){return J.bo(a).sbp(a,b)},
y5:function(a,b){return J.da(a).d1(a,b)},
eU:function(a,b){return J.db(a).eC(a,b)},
y6:function(a,b){return J.db(a).af(a,b)},
v3:function(a){return J.dD(a).l(a)},
y7:function(a){return J.da(a).an(a)},
y8:function(a,b){return J.dD(a).bD(a,b)},
cK:function(a){return J.az(a).A(a)},
y9:function(a){return J.db(a).hQ(a)},
rI:function(a){return J.db(a).bh(a)},
ya:function(a){return J.db(a).ei(a)},
f:function f(){},
mC:function mC(){},
mD:function mD(){},
hr:function hr(){},
nI:function nI(){},
eJ:function eJ(){},
eu:function eu(){},
es:function es($ti){this.$ti=$ti},
tN:function tN($ti){this.$ti=$ti},
i9:function i9(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fk:function fk(){},
ju:function ju(){},
jt:function jt(){},
et:function et(){}},P={
G8:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dl(new P.pH(t),1)).observe(s,{childList:true})
return new P.pG(t,s,r)}else if(self.setImmediate!=null)return P.GO()
return P.GP()},
G9:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dl(new P.pI(a),0))},
Ga:function(a){++u.globalState.f.b
self.setImmediate(H.dl(new P.pJ(a),0))},
Gb:function(a){P.ux(C.q,a)},
bw:function(a,b){P.xg(null,a)
return b.gha()},
cB:function(a,b){P.xg(a,b)},
bv:function(a,b){J.xS(b,a)},
bu:function(a,b){b.cC(H.cx(a),H.cw(a))},
xg:function(a,b){var t,s,r,q
t=new P.r1(b)
s=new P.r2(b)
r=J.az(a)
if(!!r.$isbk)a.cs(t,s)
else if(!!r.$isco)a.c2(t,s)
else{q=new P.bk(0,$.an,null,[null])
q.a=4
q.c=a
q.cs(t,null)}},
bx:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.an.toString
return new P.rc(t)},
xm:function(a,b){if(H.fH(a,{func:1,args:[P.cS,P.cS]})){b.toString
return a}else{b.toString
return a}},
zi:function(a,b){var t=new P.bk(0,$.an,null,[b])
P.wL(C.q,new P.rd(a,t))
return t},
vA:function(a,b,c){var t
if(a==null)a=new P.fo()
t=$.an
if(t!==C.e)t.toString
t=new P.bk(0,t,null,[c])
t.dd(a,b)
return t},
zj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bk(0,$.an,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.m3(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.c0)(a),++l){q=a[l]
p=t.b
q.c2(new P.m2(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bk(0,$.an,null,[null])
m.dc(C.r)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cx(j)
n=H.cw(j)
if(t.b===0||!1)return P.vA(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.kg(new P.bk(0,$.an,null,[a]),[a])},
xj:function(a,b,c){$.an.toString
a.ak(b,c)},
Ge:function(a,b){var t=new P.bk(0,$.an,null,[b])
t.a=4
t.c=a
return t},
x8:function(a,b){var t,s,r
b.a=1
try{a.c2(new P.q7(b),new P.q8(b))}catch(r){t=H.cx(r)
s=H.cw(r)
P.xI(new P.q9(b,t,s))}},
q6:function(a,b){var t,s,r
for(;a.gfo();)a=a.c
t=a.gck()
s=b.c
if(t){b.c=null
r=b.bQ(s)
b.a=a.a
b.c=a.c
P.fA(b,r)}else{b.a=2
b.c=a
a.dD(s)}},
fA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fJ(p)
n=p.gaG()
s.toString
P.kj(null,null,s,o,n)}return}for(;b.gcn()!=null;b=m){m=b.a
b.a=null
P.fA(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdZ()||b.gdY()){k=b.gfI()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fJ(p)
n=p.gaG()
s.toString
P.kj(null,null,s,o,n)
return}j=$.an
if(j==null?k!=null:j!==k)$.an=k
else j=null
if(b.gdY())new P.qe(t,r,q,b).$0()
else if(s){if(b.gdZ())new P.qd(r,b,l).$0()}else if(b.ghh())new P.qc(t,r,b).$0()
if(j!=null)$.an=j
s=r.b
if(!!J.az(s).$isco){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bQ(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q6(s,i)
return}}i=b.b
b=i.bP()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GH:function(){var t,s
for(;t=$.fE,t!=null;){$.i5=null
s=t.b
$.fE=s
if(s==null)$.i4=null
t.a.$0()}},
GJ:function(){$.uK=!0
try{P.GH()}finally{$.i5=null
$.uK=!1
if($.fE!=null)$.$get$uG().$1(P.xx())}},
xt:function(a){var t=new P.k3(a,null)
if($.fE==null){$.i4=t
$.fE=t
if(!$.uK)$.$get$uG().$1(P.xx())}else{$.i4.b=t
$.i4=t}},
GI:function(a){var t,s,r
t=$.fE
if(t==null){P.xt(a)
$.i5=$.i4
return}s=new P.k3(a,null)
r=$.i5
if(r==null){s.b=t
$.i5=s
$.fE=s}else{s.b=r.b
r.b=s
$.i5=s
if(s.b==null)$.i4=s}},
xI:function(a){var t=$.an
if(C.e===t){P.fF(null,null,C.e,a)
return}t.toString
P.fF(null,null,t,t.cA(a,!0))},
HH:function(a,b){return new P.qM(null,a,!1,[b])},
xq:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cx(o)
s=H.cw(o)
$.an.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fJ(r)
q=n
p=r.gaG()
c.$2(q,p)}}},
Gy:function(a,b,c,d){var t=a.bV(0)
if(!!J.az(t).$isco&&t!==$.$get$hj())t.c4(new P.r4(b,c,d))
else b.ak(c,d)},
xh:function(a,b){return new P.r3(a,b)},
uJ:function(a,b,c){var t=a.bV(0)
if(!!J.az(t).$isco&&t!==$.$get$hj())t.c4(new P.r5(b,c))
else b.aC(c)},
Gd:function(a,b,c,d,e,f,g){var t,s
t=$.an
s=e?1:0
s=new P.hZ(a,null,null,null,null,t,s,null,null,[f,g])
s.eS(b,c,d,e,g)
s.eV(a,b,c,d,e,f,g)
return s},
Gx:function(a,b,c){$.an.toString
a.bJ(b,c)},
wL:function(a,b){var t=$.an
if(t===C.e){t.toString
return P.ux(a,b)}return P.ux(a,t.cA(b,!0))},
ux:function(a,b){var t=C.a.al(a.a,1000)
return H.G3(t<0?0:t,b)},
kj:function(a,b,c,d,e){var t={}
t.a=d
P.GI(new P.rb(t,e))},
xn:function(a,b,c,d){var t,s
s=$.an
if(s===c)return d.$0()
$.an=c
t=s
try{s=d.$0()
return s}finally{$.an=t}},
xp:function(a,b,c,d,e){var t,s
s=$.an
if(s===c)return d.$1(e)
$.an=c
t=s
try{s=d.$1(e)
return s}finally{$.an=t}},
xo:function(a,b,c,d,e,f){var t,s
s=$.an
if(s===c)return d.$2(e,f)
$.an=c
t=s
try{s=d.$2(e,f)
return s}finally{$.an=t}},
fF:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cA(d,!(!t||!1))
P.xt(d)},
pH:function pH(a){this.a=a},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a){this.a=a},
pJ:function pJ(a){this.a=a},
r1:function r1(a){this.a=a},
r2:function r2(a){this.a=a},
rc:function rc(a){this.a=a},
co:function co(){},
rd:function rd(a,b){this.a=a
this.b=b},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m2:function m2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(){},
k4:function k4(){},
dX:function dX(a,$ti){this.a=a
this.$ti=$ti},
kg:function kg(a,$ti){this.a=a
this.$ti=$ti},
k8:function k8(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bk:function bk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q3:function q3(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
q7:function q7(a){this.a=a},
q8:function q8(a){this.a=a},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
qe:function qe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qf:function qf(a){this.a=a},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
dj:function dj(){},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(){},
oA:function oA(a){this.a=a},
oD:function oD(a){this.a=a},
oE:function oE(a,b){this.a=a
this.b=b},
oB:function oB(a,b){this.a=a
this.b=b},
oC:function oC(a){this.a=a},
oF:function oF(a,b){this.a=a
this.b=b},
oG:function oG(a,b){this.a=a
this.b=b},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function ow(a){this.a=a},
oq:function oq(){},
dk:function dk(){},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(a){this.a=a},
k6:function k6(){},
pS:function pS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pU:function pU(b,c,a){this.b=b
this.c=c
this.a=a},
pT:function pT(){},
qu:function qu(){},
qv:function qv(a,b){this.a=a
this.b=b},
qL:function qL(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qM:function qM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qs:function qs(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eX:function eX(a,b){this.a=a
this.b=b},
r0:function r0(){},
rb:function rb(a,b){this.a=a
this.b=b},
qy:function qy(){},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
Gf:function(a,b){var t=a[b]
return t===a?null:t},
uI:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uH:function(){var t=Object.create(null)
P.uI(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wl:function(a,b,c){return H.xC(a,new H.v(0,null,null,null,null,null,0,[b,c]))},
cE:function(a,b){return new H.v(0,null,null,null,null,null,0,[a,b])},
mT:function(){return new H.v(0,null,null,null,null,null,0,[null,null])},
hu:function(a){return H.xC(a,new H.v(0,null,null,null,null,null,0,[null,null]))},
i0:function(a,b){return new P.kb(0,null,null,null,null,null,0,[a,b])},
Gg:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qh(0,null,null,null,null,[d,e])},
tH:function(a,b,c){var t,s
if(P.uL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i6()
s.push(a)
try{P.GG(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wI(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jq:function(a,b,c){var t,s,r
if(P.uL(a))return b+"..."+c
t=new P.cb(b)
s=$.$get$i6()
s.push(a)
try{r=t
r.N=P.wI(r.gN(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uL:function(a){var t,s
for(t=0;s=$.$get$i6(),t<s.length;++t)if(a===s[t])return!0
return!1},
GG:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cJ(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.y(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.F()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.F();n=m,m=l){l=t.gO();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.y(n)
p=H.y(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
wk:function(a,b,c,d,e){return new H.v(0,null,null,null,null,null,0,[d,e])},
EF:function(a,b,c){var t=P.wk(null,null,null,b,c)
a.a5(0,new P.rg(t))
return t},
EG:function(a,b,c,d,e){var t=P.wk(null,null,null,d,e)
P.EL(t,a,b,c)
return t},
a0:function(a,b,c,d){return new P.ka(0,null,null,null,null,null,0,[d])},
tT:function(a,b){var t,s
t=P.a0(null,null,null,b)
for(s=J.cJ(a);s.F();)t.h(0,s.gO())
return t},
wq:function(a){var t,s,r
t={}
if(P.uL(a))return"{...}"
s=new P.cb("")
try{$.$get$i6().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a5(0,new P.n6(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i6()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
EL:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.c0)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
tU:function(a,b){var t=new P.mU(null,0,0,0,[b])
t.eN(a,b)
return t},
qh:function qh(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qk:function qk(a){this.a=a},
qi:function qi(a,$ti){this.a=a
this.$ti=$ti},
qj:function qj(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kb:function kb(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ka:function ka(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ql:function ql(){},
fj:function fj(){},
hp:function hp(){},
rg:function rg(a){this.a=a},
jv:function jv(){},
hJ:function hJ(){},
aR:function aR(){},
qT:function qT(){},
jw:function jw(){},
eK:function eK(a,$ti){this.a=a
this.$ti=$ti},
n6:function n6(a,b){this.a=a
this.b=b},
mU:function mU(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qp:function qp(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oa:function oa(){},
o9:function o9(){},
v5:function(a,b,c,d,e,f){if(C.d.bI(f,4)!==0)throw H.k(new P.bN("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.k(new P.bN("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bN("Invalid base64 padding, more than two '=' characters",a,b))},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
fV:function fV(){},
fY:function fY(){},
lm:function lm(){},
pi:function pi(a){this.a=a},
pj:function pj(a){this.a=a},
qV:function qV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qX:function qX(a){this.a=a},
qW:function qW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G1:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bG(b,0,J.cl(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bG(c,b,J.cl(a),null,null))
s=J.cJ(a)
for(r=0;r<b;++r)if(!s.F())throw H.k(P.bG(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gO())
else for(r=b;r<c;++r){if(!s.F())throw H.k(P.bG(c,b,r,null,null))
q.push(s.gO())}return H.wB(q)},
wI:function(a,b,c){var t=J.cJ(b)
if(!t.F())return a
if(c.length===0){do a+=H.y(t.gO())
while(t.F())}else{a+=H.y(t.gO())
for(;t.F();)a=a+c+H.y(t.gO())}return a},
yF:function(a,b){return J.xR(a,b)},
yJ:function(a,b){var t=new P.e2(a,b)
t.d7(a,b)
return t},
yK:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
yL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ii:function(a){if(a>=10)return""+a
return"0"+a},
vm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.z2(a)},
z2:function(a){var t=J.az(a)
if(!!t.$isf0)return t.A(a)
return H.jJ(a)},
dG:function(a){return new P.d1(!1,null,null,a)},
e_:function(a,b,c){return new P.d1(!0,a,b,c)},
yc:function(a){return new P.d1(!1,null,a,"Must not be null")},
wD:function(a){return new P.eB(null,null,!1,null,null,a)},
jL:function(a,b,c){return new P.eB(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.eB(b,c,!0,a,d,"Invalid value")},
di:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.ag(a)
if(!(0>a)){if(typeof c!=="number")return H.ag(c)
t=a>c}else t=!0
if(t)throw H.k(P.bG(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.ag(b)
if(!(a>b)){if(typeof c!=="number")return H.ag(c)
t=b>c}else t=!0
if(t)throw H.k(P.bG(b,a,c,"end",f))
return b}return c},
bA:function(a,b,c,d,e){var t=e!=null?e:J.cl(b)
return new P.mj(b,t,!0,a,c,"Index out of range")},
lr:function(a){return new P.q2(a)},
d3:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cJ(a);s.F();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
EH:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d3(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fI:function(a){H.Hm(H.y(a))},
dx:function(a,b,c){return new H.hq(a,H.tL(a,!1,!0,!1),null,null)},
oL:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.di(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a1()
s=c<t}else s=!0
return H.wB(s?C.b.c6(a,b,c):a)}if(!!J.az(a).$isfn)return H.F8(a,b,P.di(b,c,a.length,null,null,null))
return P.G1(a,b,c)},
wY:function(){var t=H.F2()
if(t!=null)return P.wZ(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
wZ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a2(a,b+4)^58)*3|C.c.a2(a,b)^100|C.c.a2(a,b+1)^97|C.c.a2(a,b+2)^116|C.c.a2(a,b+3)^97)>>>0
if(s===0)return P.wX(b>0||c<c?C.c.K(a,b,c):a,5,null).gek()
else if(s===32)return P.wX(C.c.K(a,t,c),0,null).gek()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xr(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ar()
if(p>=b)if(P.xr(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.T()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a1()
if(typeof l!=="number")return H.ag(l)
if(k<l)l=k
if(typeof m!=="number")return m.a1()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a1()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a1()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aB(a,"..",m)))h=l>m+2&&C.c.aB(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aB(a,"file",b)){if(o<=b){if(!C.c.aB(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.K(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.az(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aB(a,"http",b)){if(q&&n+3===m&&C.c.aB(a,"80",n+1))if(b===0&&!0){a=C.c.az(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aB(a,"https",b)){if(q&&n+4===m&&C.c.aB(a,"443",n+1))if(b===0&&!0){a=C.c.az(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.c.K(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qK(a,p,o,n,m,l,k,i,null)}return P.Gj(a,b,c,p,o,n,m,l,k,i)},
x0:function(a,b){return C.b.h7(a.split("&"),P.mT(),new P.pf(b))},
G4:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pc(a)
s=H.cC(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.X(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fq(C.c.K(a,p,q),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fq(C.c.K(a,p,c),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
x_:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pd(a)
s=new P.pe(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.X(a,q)
if(m===58){if(q===b){++q
if(C.c.X(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.b_(C.b.gb8(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.G4(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.as()
h=j[1]
if(typeof h!=="number")return H.ag(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.as()
i=j[3]
if(typeof i!=="number")return H.ag(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.az(e).R(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d0()
i=C.d.aS(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
Gj:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gr(a,b,d)
else{if(d===b)P.i2(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gs(a,t,e-1):""
r=P.Gn(a,e,f,!1)
if(typeof f!=="number")return f.T()
q=f+1
if(typeof g!=="number")return H.ag(g)
p=q<g?P.Gp(H.fq(C.c.K(a,q,g),null,new P.re(a,f)),j):null}else{s=""
r=null
p=null}o=P.Go(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a1()
n=h<i?P.Gq(a,h+1,i,null):null
return new P.kh(j,s,r,p,o,n,i<c?P.Gm(a,i+1,c):null,null,null,null,null,null)},
xa:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i2:function(a,b,c){throw H.k(new P.bN(c,a,b))},
Gp:function(a,b){if(a!=null&&J.b_(a,P.xa(b)))return
return a},
Gn:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.X(a,b)===91){if(typeof c!=="number")return c.aj()
t=c-1
if(C.c.X(a,t)!==93)P.i2(a,b,"Missing end `]` to match `[` in host")
P.x_(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.ag(c)
s=b
for(;s<c;++s)if(C.c.X(a,s)===58){P.x_(a,b,c)
return"["+a+"]"}return P.Gu(a,b,c)},
Gu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.ag(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.X(a,t)
if(p===37){o=P.xf(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cb("")
m=C.c.K(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.C,n)
n=(C.C[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cb("")
if(s<t){r.N+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i2(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.X(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cb("")
m=C.c.K(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.xb(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Gr:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xd(C.c.a2(a,b)))P.i2(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a2(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i2(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.Gk(s?a.toLowerCase():a)},
Gk:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gs:function(a,b,c){var t=P.fD(a,b,c,C.Z,!1)
return t==null?C.c.K(a,b,c):t},
Go:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fD(a,b,c,C.E,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ae(r,"/"))r="/"+r
return P.Gt(r,e,f)},
Gt:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ae(a,"/"))return P.Gv(a,!t||c)
return P.Gw(a)},
Gq:function(a,b,c,d){var t=P.fD(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
Gm:function(a,b,c){var t=P.fD(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
xf:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.X(a,b+1)
r=C.c.X(a,t)
q=H.rl(s)
p=H.rl(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aS(o,4)
if(t>=8)return H.w(C.B,t)
t=(C.B[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hL(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
xb:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a2("0123456789ABCDEF",a>>>4)
t[2]=C.c.a2("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fE(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a2("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a2("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.oL(t,0,null)},
fD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.db(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a1()
if(typeof c!=="number")return H.ag(c)
if(!(r<c))break
c$0:{o=s.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xf(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i2(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.X(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xb(o)}}if(p==null)p=new P.cb("")
p.N+=C.c.K(a,q,r)
p.N+=H.y(m)
if(typeof l!=="number")return H.ag(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a1()
if(q<c)p.N+=s.K(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xe:function(a){if(C.c.ae(a,"."))return!0
return C.c.bf(a,"/.")!==-1},
Gw:function(a){var t,s,r,q,p,o,n
if(!P.xe(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c0)(s),++p){o=s[p]
if(J.b_(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bg(t,"/")},
Gv:function(a,b){var t,s,r,q,p,o
if(!P.xe(a))return!b?P.xc(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c0)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b_(C.b.gb8(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.rG(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b_(C.b.gb8(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.xc(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bg(t,"/")},
xc:function(a){var t,s,r,q
t=J.bf(a)
s=t.gm(a)
if(typeof s!=="number")return s.ar()
if(s>=2&&P.xd(t.X(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.ag(s)
if(!(r<s))break
q=t.X(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.af(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gl:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.X(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dG("Invalid URL encoding"))}}return t},
qU:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.ag(c)
t=J.db(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.X(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.p!==d)p=!1
else p=!0
if(p)return t.K(a,b,c)
else o=new H.kV(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.X(a,s)
if(q>127)throw H.k(P.dG("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dG("Truncated URI"))
o.push(P.Gl(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pj(!1).fV(o)},
xd:function(a){var t=a|32
return 97<=t&&t<=122},
wX:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bf(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ag(o)
if(!(r<o))break
c$0:{p=s.X(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bN("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bN("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.ag(o)
if(!(r<o))break
p=s.X(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb8(t)
if(p!==44||r!==m+7||!s.aB(a,"base64",m+1))throw H.k(new P.bN("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.I.hv(0,a,o,s.gm(a))
else{l=P.fD(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.az(a,o,s.gm(a),l)}return new P.pb(a,t,c)},
GD:function(){var t,s,r,q,p
t=P.EH(22,new P.r8(),!0,P.d8)
s=new P.r7(t)
r=new P.r9()
q=new P.ra()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
xr:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xs()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a2(a,s)^96
p=J.i8(r,q>95?31:q)
if(typeof p!=="number")return p.aF()
d=p&31
o=C.d.aS(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
d9:function d9(){},
bH:function bH(){},
e2:function e2(a,b){this.a=a
this.b=b},
W:function W(){},
dJ:function dJ(a){this.a=a},
lj:function lj(){},
lk:function lk(){},
ei:function ei(){},
fo:function fo(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mj:function mj(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eI:function eI(a){this.a=a},
dT:function dT(a){this.a=a},
bQ:function bQ(a){this.a=a},
nv:function nv(){},
jT:function jT(){},
lb:function lb(a){this.a=a},
q2:function q2(a){this.a=a},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(a,bM,$ti){this.a=a
this.bM=bM
this.$ti=$ti},
C:function C(){},
n:function n(){},
js:function js(){},
p:function p(){},
be:function be(){},
cS:function cS(){},
dm:function dm(){},
ac:function ac(){},
dv:function dv(){},
eC:function eC(){},
dS:function dS(){},
B:function B(){},
cb:function cb(N){this.N=N},
eL:function eL(){},
pf:function pf(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
re:function re(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(){},
r7:function r7(a){this.a=a},
r9:function r9(){},
ra:function ra(){},
qK:function qK(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pR:function pR(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
xy:function(a){var t,s,r,q,p
if(a==null)return
t=P.mT()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.c0)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GX:function(a){var t,s
t=new P.bk(0,$.an,null,[null])
s=new P.dX(t,[null])
a.then(H.dl(new P.rh(s),1))["catch"](H.dl(new P.ri(s),1))
return t},
rS:function(){var t=$.vj
if(t==null){t=J.kr(window.navigator.userAgent,"Opera",0)
$.vj=t}return t},
vl:function(){var t=$.vk
if(t==null){t=P.rS()!==!0&&J.kr(window.navigator.userAgent,"WebKit",0)
$.vk=t}return t},
yM:function(){var t,s
t=$.vg
if(t!=null)return t
s=$.vh
if(s==null){s=J.kr(window.navigator.userAgent,"Firefox",0)
$.vh=s}if(s)t="-moz-"
else{s=$.vi
if(s==null){s=P.rS()!==!0&&J.kr(window.navigator.userAgent,"Trident/",0)
$.vi=s}if(s)t="-ms-"
else t=P.rS()===!0?"-o-":"-webkit-"}$.vg=t
return t},
qP:function qP(){},
qR:function qR(a,b){this.a=a
this.b=b},
pD:function pD(){},
pE:function pE(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
l1:function l1(){},
l2:function l2(a){this.a=a},
GB:function(a){var t,s,r
t=new P.bk(0,$.an,null,[null])
s=new P.kg(t,[null])
a.toString
r=W.S
W.eQ(a,"success",new P.r6(a,s),!1,r)
W.eQ(a,"error",s.gdT(),!1,r)
return t},
ld:function ld(){},
r6:function r6(a,b){this.a=a
this.b=b},
mi:function mi(){},
ns:function ns(){},
hM:function hM(){},
p5:function p5(){},
Gi:function(a){var t=new P.qw(0,0)
t.eW(a)
return t},
qn:function qn(){},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(){},
bT:function bT(){},
kv:function kv(){},
ef:function ef(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lI:function lI(){},
lX:function lX(){},
cq:function cq(){},
mg:function mg(){},
d2:function d2(){},
mM:function mM(){},
iP:function iP(){},
j8:function j8(){},
n7:function n7(){},
n8:function n8(){},
d4:function d4(){},
np:function np(){},
iQ:function iQ(){},
j9:function j9(){},
nF:function nF(){},
nK:function nK(){},
o5:function o5(){},
oK:function oK(){},
iR:function iR(){},
ja:function ja(){},
kC:function kC(a){this.a=a},
cc:function cc(){},
oN:function oN(){},
oP:function oP(){},
eH:function eH(){},
oW:function oW(){},
d7:function d7(){},
p6:function p6(){},
iS:function iS(){},
jb:function jb(){},
ph:function ph(){},
pl:function pl(){},
pm:function pm(){},
i_:function i_(){},
qC:function qC(){},
qD:function qD(){},
qE:function qE(){},
bg:function bg(){},
d8:function d8(){},
fO:function fO(){},
eY:function eY(){},
fP:function fP(){},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
bB:function bB(){},
e0:function e0(){},
l0:function l0(){},
kx:function kx(){},
nX:function nX(){},
qY:function qY(){},
jS:function jS(){},
iT:function iT(){},
jc:function jc(){}},W={
yb:function(a){var t=document.createElement("a")
return t},
yw:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yx:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yI:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gc:function(a){var t=new W.pO(a,null)
t.eT(a)
return t},
vB:function(a,b,c){return W.vC(a,null,null,b,null,null,null,c).b0(new W.mc())},
vC:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e7
s=new P.bk(0,$.an,null,[t])
r=new P.dX(s,[t])
q=new XMLHttpRequest()
C.N.hx(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HG
W.eQ(q,"load",new W.md(r,q),!1,t)
W.eQ(q,"error",r.gdT(),!1,t)
q.send()
return s},
vD:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eQ:function(a,b,c,d,e){var t=W.GL(new W.q1(c))
t=new W.q0(0,a,b,t,!1,[e])
t.eU(a,b,c,!1,e)
return t},
GC:function(a){var t
if(!!J.az(a).$iseh)return a
t=new P.k1([],[],!1)
t.c=!0
return t.b2(a)},
GL:function(a){var t=$.an
if(t===C.e)return a
return t.fQ(a,!0)},
al:function al(){},
eV:function eV(){},
ky:function ky(){},
eZ:function eZ(){},
cL:function cL(){},
kG:function kG(){},
h4:function h4(){},
h7:function h7(){},
kK:function kK(){},
f_:function f_(){},
kN:function kN(){},
fU:function fU(){},
eg:function eg(){},
kX:function kX(){},
id:function id(){},
fZ:function fZ(){},
l3:function l3(){},
l4:function l4(){},
h_:function h_(){},
h0:function h0(){},
l5:function l5(){},
bM:function bM(){},
f2:function f2(){},
iH:function iH(){},
pO:function pO(a,b){this.a=a
this.b=b},
jE:function jE(){},
pP:function pP(){},
ig:function ig(){},
l6:function l6(){},
l7:function l7(){},
lc:function lc(){},
f3:function f3(){},
ih:function ih(){},
eh:function eh(){},
ij:function ij(){},
ik:function ik(){},
lf:function lf(){},
il:function il(){},
im:function im(){},
iI:function iI(){},
j1:function j1(){},
io:function io(){},
ip:function ip(){},
k7:function k7(a,$ti){this.a=a
this.$ti=$ti},
dq:function dq(){},
ll:function ll(){},
h2:function h2(){},
h3:function h3(){},
S:function S(){},
aH:function aH(){},
lT:function lT(){},
ce:function ce(){},
fb:function fb(){},
iJ:function iJ(){},
j2:function j2(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lZ:function lZ(){},
m_:function m_(){},
iD:function iD(){},
cp:function cp(){},
m9:function m9(){},
fc:function fc(){},
iK:function iK(){},
j3:function j3(){},
iF:function iF(){},
e7:function e7(){},
mc:function mc(){},
md:function md(a,b){this.a=a
this.b=b},
hk:function hk(){},
mf:function mf(){},
hl:function hl(){},
fe:function fe(){},
ml:function ml(){},
mJ:function mJ(){},
hs:function hs(){},
ht:function ht(){},
n0:function n0(){},
n5:function n5(){},
hA:function hA(){},
jy:function jy(){},
n9:function n9(){},
na:function na(){},
hB:function hB(){},
cr:function cr(){},
jz:function jz(){},
iU:function iU(){},
jd:function jd(){},
nn:function nn(){},
no:function no(){},
ay:function ay(){},
jC:function jC(){},
iV:function iV(){},
je:function je(){},
nr:function nr(){},
nw:function nw(){},
nA:function nA(){},
nC:function nC(){},
e8:function e8(){},
nH:function nH(){},
cg:function cg(){},
jI:function jI(){},
iW:function iW(){},
jf:function jf(){},
nM:function nM(){},
jM:function jM(){},
fu:function fu(){},
jO:function jO(){},
o8:function o8(){},
ob:function ob(){},
oc:function oc(){},
od:function od(){},
cs:function cs(){},
jQ:function jQ(){},
h5:function h5(){},
h8:function h8(){},
hN:function hN(){},
ct:function ct(){},
jR:function jR(){},
iX:function iX(){},
jg:function jg(){},
fv:function fv(){},
oh:function oh(){},
ci:function ci(){},
oi:function oi(){},
oj:function oj(){},
op:function op(){},
ck:function ck(){},
eb:function eb(){},
oS:function oS(){},
oU:function oU(){},
cT:function cT(){},
cH:function cH(){},
oX:function oX(){},
iY:function iY(){},
jh:function jh(){},
oY:function oY(){},
h6:function h6(){},
h9:function h9(){},
p1:function p1(){},
cv:function cv(){},
jV:function jV(){},
iZ:function iZ(){},
ji:function ji(){},
fx:function fx(){},
jW:function jW(){},
ec:function ec(){},
pg:function pg(){},
pk:function pk(){},
fy:function fy(){},
jX:function jX(){},
pp:function pp(){},
jZ:function jZ(){},
pw:function pw(){},
eN:function eN(){},
fz:function fz(){},
pN:function pN(){},
hW:function hW(){},
j_:function j_(){},
jj:function jj(){},
k5:function k5(){},
j0:function j0(){},
jk:function jk(){},
pV:function pV(){},
pW:function pW(){},
k9:function k9(){},
iL:function iL(){},
j4:function j4(){},
qg:function qg(){},
i1:function i1(){},
iM:function iM(){},
j5:function j5(){},
qG:function qG(){},
kd:function kd(){},
iN:function iN(){},
j6:function j6(){},
kf:function kf(){},
iO:function iO(){},
j7:function j7(){},
qZ:function qZ(){},
r_:function r_(){},
pX:function pX(a){this.a=a},
q_:function q_(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hX:function hX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q0:function q0(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q1:function q1(a){this.a=a},
bz:function bz(){},
hI:function hI(a){this.a=a},
qH:function qH(){},
qI:function qI(){},
qJ:function qJ(){},
pQ:function pQ(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ez:function ez(){},
qS:function qS(){},
qF:function qF(a,b){this.a=a
this.b=b}},T={
tf:function(a,b,c,d){var t
H.Hu(a,"$isp",[P.C],"$asp")
t=new T.hm(a,null,d,b,null)
t.eM(a,b,c,d)
return t},
wt:function(a,b){return new T.nx(0,a,new Uint8Array(H.cC(b==null?32768:b)))},
G6:function(a){var t=new T.pz(-1,0,0,0,0,null,null,"",[])
t.eQ(a)
return t},
G7:function(a,b){var t=new T.pA(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eR(a,b)
return t},
fd:function(a){var t=new T.me(null,0,2147483647)
t.eL(a)
return t},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy},
dc:function dc(a){this.a=a},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nx:function nx(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pA:function pA(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db},
pB:function pB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy},
py:function py(a){this.a=a},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kM:function kM(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
kP:function kP(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
le:function le(){},
m7:function m7(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
FU:function(){var t=$.$get$jN()
t=t.gba(t)
return new H.dz(t,new T.o0(),[H.ar(t,"n",0)])},
Fx:function(a,b,c,d){var t,s
t=[P.B]
s=H.a([],t)
t=new T.ft("Glitch",0.01,0.01,0.01,s,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a5),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.N]),H.a([],[A.fS]),1)
t.a8(a,b,c,d)
return t},
o0:function o0(){},
ft:function ft(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
bZ:function bZ(a,b){this.a=a
this.b=b},
yQ:function(a,b,c,d){var t,s,r,q
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ag(s[q],8)
return t.b1(b)},
yP:function(a,b,c,d){var t,s,r,q,p
t=H.cC(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yO:function(a,b,c,d){var t,s,r,q,p
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
s=d.gcL()
r=C.f.ai(Math.log(H.kk(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ag(q[p],r)
return t.b1(b)},
yN:function(a,b,c,d){var t,s,r,q,p,o
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;++o){r=p.a6(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kw:function kw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bC:function bC(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ic:function ic(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mb:function mb(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mK:function mK(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},n3:function n3(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},o7:function o7(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},fp:function fp(){},uy:function uy(){},uz:function uz(){},uA:function uA(){},rY:function rY(){},t0:function t0(){},rP:function rP(){},ui:function ui(){},uC:function uC(){},uD:function uD(){},kS:function kS(){},ua:function ua(){},u5:function u5(){},mP:function mP(){},rT:function rT(){},rK:function rK(){},l9:function l9(){},tS:function tS(){},la:function la(){},nB:function nB(){},up:function up(){},um:function um(){},uq:function uq(){},rJ:function rJ(){},m4:function m4(){},kQ:function kQ(){},rO:function rO(){},rN:function rN(){},ub:function ub(){},ur:function ur(){},uc:function uc(){},t_:function t_(){},rZ:function rZ(){},uo:function uo(){},un:function un(){},oZ:function oZ(){},ut:function ut(){},rQ:function rQ(){},rR:function rR(){},uB:function uB(){},hz:function hz(){},tY:function tY(){},tZ:function tZ(){},u_:function u_(){},u0:function u0(){},uj:function uj(){},uk:function uk(){},ul:function ul(){},tX:function tX(){},u2:function u2(){},u3:function u3(){},tc:function tc(){},td:function td(){},te:function te(){},u4:function u4(){},u1:function u1(){},rL:function rL(){},uv:function uv(){},uw:function uw(){},uu:function uu(){}},K={bP:function bP(a,b){this.a=a
this.b=b},mN:function mN(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},o2:function o2(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yv:function(){var t=$.$get$ia()
t=t.gba(t)
return new H.dz(t,new L.kz(),[H.ar(t,"n",0)])},
yd:function(a,b,c,d){var t,s,r
t=P.B
s=A.e1
r=P.C
r=new L.aS(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b0,L.e("#FF9B00"),!0)
r.j(0,$.b2,L.e("#FF9B00"),!0)
r.j(0,$.b1,L.e("#FF8700"),!0)
r.j(0,$.bb,L.e("#7F7F7F"),!0)
r.j(0,$.ba,L.e("#727272"),!0)
r.j(0,$.b4,L.e("#A3A3A3"),!0)
r.j(0,$.b5,L.e("#999999"),!0)
r.j(0,$.b3,L.e("#898989"),!0)
r.j(0,$.b9,L.e("#EFEFEF"),!0)
r.j(0,$.b8,L.e("#DBDBDB"),!0)
r.j(0,$.b7,L.e("#C6C6C6"),!0)
r.j(0,$.b6,L.e("#ADADAD"),!0)
s=[t]
t=new L.eW(0.01,0.01,0.01,0.5,a,new H.v(0,null,null,null,null,null,0,[X.F,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.N]),H.a([],[A.fS]),Q.J(null,null,A.a5))
t.ah(a,b,c,d)
return t},
e:function(a){if(C.c.ae(a,"#"))return A.vc(C.c.af(a,1))
else return A.vc(a)},
kz:function kz(){},
eW:function eW(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o4:function o4(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},M={kB:function kB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fT:function fT(a,b){this.a=a
this.b=b},l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},hb:function hb(){},bt:function bt(a,b){this.a=a
this.b=b},ok:function ok(a){this.a=a},ps:function ps(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},U={kF:function kF(){},n2:function n2(a){this.a=a},nu:function nu(a){this.a=a},oH:function oH(){},oI:function oI(a){this.a=a},oJ:function oJ(a){this.a=a},lh:function lh(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,br,bs,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.br=br
_.bs=bs
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},lJ:function lJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},n4:function n4(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},b:function b(a){this.a=a},R:function R(b,c,a){this.b=b
this.c=c
this.a=a},ae:function ae(z,a,b,c,d,e,f,r,x,y){var _=this
_.z=z
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},p_:function p_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
G5:function(a){if(J.db(a).ae(a," "))return C.c.af(a,1)
return a},
pt:function pt(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
pv:function pv(a,b){this.a=a
this.b=b}},O={kH:function kH(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},c8:function c8(){},dn:function dn(){},kL:function kL(a){this.a=a},eG:function eG(){},iq:function iq(){},
rw:function(){var t=0,s=P.bp(),r
var $async$rw=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:$.xz=!0
A.ko()
W.vB(C.c.aq("../",N.u9())+"navbar.txt",null,null).b0(O.Hj())
W.eQ(window,"error",new O.rx(),!1,W.S)
t=2
return P.cB(A.ko(),$async$rw)
case 2:r=document.querySelector("#story")
O.H2(r)
O.H0(r)
O.H1(r)
return P.bv(null,s)}})
return P.bw($async$rw,s)},
H2:function(a){var t,s,r,q,p,o,n,m,l,k
for(t=B.zz(),s=J.cJ(t.a),t=new H.eM(s,t.b,[H.Q(t,0)]),r=[W.ez],q=J.bo(a);t.F();){p=s.gO()
o=J.kt(p)
for(n=p.gb_(),n=n.gb7(n),n=n.gU(n),m="";n.F();){l=n.gO()
m+="Weight: "+H.y(p.gb_().n(0,l))+", Contents: "+l.aP()}k="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.y(o)+"</div> <div class = 'themes'>"+m+"</div> </div>"
n=new W.hI(H.a([],r))
n.cw("span",null,null,null)
q.bu(a,"beforeend",k,C.h,n)}},
H0:function(a){var t,s,r,q,p,o,n,m,l,k
for(t=L.yv(),s=J.cJ(t.a),t=new H.eM(s,t.b,[H.Q(t,0)]),r=[W.ez],q=J.bo(a);t.F();){p=s.gO()
o=J.kt(p)
for(n=p.gb_(),n=n.gb7(n),n=n.gU(n),m="";n.F();){l=n.gO()
m+="Weight: "+H.y(p.gb_().n(0,l))+", Contents: "+l.aP()}k="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.y(o)+"</div> <div class = 'themes'>"+m+"</div> </div>"
n=new W.hI(H.a([],r))
n.cw("span",null,null,null)
q.bu(a,"beforeend",k,C.h,n)}},
H1:function(a){var t,s,r,q,p,o,n,m,l,k
for(t=T.FU(),s=J.cJ(t.a),t=new H.eM(s,t.b,[H.Q(t,0)]),r=[W.ez],q=J.bo(a);t.F();){p=s.gO()
o=J.kt(p)
for(n=p.gb_(),n=n.gb7(n),n=n.gU(n),m="";n.F();){l=n.gO()
m+="Weight: "+H.y(p.gb_().n(0,l))+", Contents: "+l.aP()}k="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.y(o)+"</div> <div class = 'themes'>"+m+"</div> </div>"
n=new W.hI(H.a([],r))
n.cw("span",null,null,null)
q.bu(a,"beforeend",k,C.h,n)}},
rx:function rx(){},
Hl:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.u9()
a=J.y4(a,P.dx("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rA(t))
s=document
J.v_(s.querySelector("#navbar"),"beforeend",a,C.h,null)
if(J.b_(O.Ha("seerOfVoid",null),"true"))P.zi(new O.rB(),P.cS)
r=new P.e2(Date.now(),!1)
if(H.uf(r)===4&&H.ue(r)===1)J.uX(s.querySelector("body")).h(0,"voidbody")
q=H.uf(r)
p=H.ue(r)
o=C.a.A(H.ww(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jK(null,null)
k.d_(H.fq(l,null,null))
k.hu()
if($.FV||k.a.cK()>0.99)H.i7(s.querySelector("#today"),"$iseV").href=C.c.aq("../",t)+"dead_index.html?seed="+l
else H.i7(s.querySelector("#today"),"$iseV").href=C.c.aq("../",t)+"index2.html?seed="+l},
Ha:function(a,b){var t,s,r,q
t=P.wY().gcQ().n(0,a)
if(t!=null)t=P.qU(t,0,J.cl(t),C.p,!1)
if(t!=null)return t
s=$.xJ
if(s.length!==0){r=J.y6(window.location.href,J.y1(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wZ(H.xL(s,q,"")+"?"+$.xJ,0,null).gcQ().n(0,a)}return},
Hw:function(){var t,s,r,q
t=document
J.uX(t.querySelector("body")).h(0,"voidbody")
s=new W.k7(t.querySelectorAll(".void"),[null])
for(t=new H.ew(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.xX(J.rH(r))
if(q==="none"||q.length===0)O.Hq(r)
else O.Hc(r)}},
Hq:function(a){var t,s
if(a==null)return
t=J.bo(a)
s=t.gaH(a)
J.v2(s,!!t.$ishN?"inline":"block")},
Hc:function(a){if(a==null)return
J.v2(J.rH(a),"none")},
Hr:function(a){var t,s,r,q
if($.xz)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fI("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eU(s,",")
if(!J.xT(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cx(q)
P.fI("Saving isn't possible....you don't have local storage")}},
rA:function rA(a){this.a=a},
rB:function rB(){},
rz:function rz(){},
cY:function cY(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oV:function oV(a){this.a=a},nU:function nU(a){this.a=a},kR:function kR(a){this.a=a},m5:function m5(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},m6:function m6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},nq:function nq(b,a){this.b=b
this.a=a},dR:function dR(a,b){this.a=a
this.b=b},a6:function a6(a,b){this.a=a
this.b=b},dd:function dd(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},bU:function bU(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},P:function P(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ie:function ie(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d_:function d_(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kU:function kU(c,a,b){this.c=c
this.a=a
this.b=b},bD:function bD(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hK:function hK(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iC:function iC(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jH:function jH(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},o3:function o3(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},oe:function oe(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},dQ:function dQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ne:function(){var t=0,s=P.bp(),r,q
var $async$ne=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:P.fI("loading big bads")
r=$
q=J
t=2
return P.cB(A.ex("BigBadLists/bigBads.txt",!1,!1,null),$async$ne)
case 2:r.ws=q.eU(b,P.dx("\n|\r",!0,!1))
return P.bv(null,s)}})
return P.bw($async$ne,s)},
GU:function(a){var t,s,r,q,p,o
t=J.eU(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.c0)(t),++q){p=t[q]
o=J.bf(p)
r+=" "+(J.y9(o.n(p,0))+o.af(p,1))}return r}},A={kW:function kW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
i:function(a,b,c,d,e){var t=new A.a5(c,e,null,null,a,!1,P.a0(null,null,null,G.a1),0,3)
t.H(a,b,c,!1,e)
return t},
a5:function a5(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
mB:function mB(){},
mA:function mA(){},
fS:function fS(){},
fW:function(a,b,c,d){var t=new A.e1(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eK(a,b,c,d)
return t},
vb:function(a,b,c,d){var t=A.fW(0,0,0,255)
t.b=C.a.ab(C.d.ai(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.ai(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.ai(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.ai(d*255),0,255)
return t},
yD:function(a,b){if(b){if(typeof a!=="number")return a.aF()
return A.fW((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aF()
return A.fW((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vc:function(a){return A.yD(H.fq(a,16,new A.rf()),a.length>=8)},
e1:function e1(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
rf:function rf(){},
wp:function(){if($.wn)return
$.wn=!0
Z.z9()},
ex:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$ex=P.bx(function(e,f){if(e===1)return P.bu(f,s)
while(true)switch(t){case 0:A.wp()
t=$.$get$cX().Y(0,a)?3:5
break
case 3:q=$.$get$cX().n(0,a)
p=J.az(q)
if(!!p.$isdQ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cu(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.y(J.uZ(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tW==null?8:9
break
case 8:t=10
return P.cB(A.n_(),$async$ex)
case 10:case 9:n=$.tW.eo(a)
t=n!=null?11:12
break
case 11:t=13
return P.cB(A.mV(n),$async$ex)
case 13:if(!$.$get$cX().Y(0,a))$.$get$cX().i(0,a,new Y.dQ(a,null,H.a([],[[P.f1,,]]),[null]))
r=$.$get$cX().n(0,a).b
t=1
break
case 12:case 7:r=A.EJ(a,!1,d)
t=1
break
case 4:case 1:return P.bv(r,s)}})
return P.bw($async$ex,s)},
n_:function(){var t=0,s=P.bp(),r
var $async$n_=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cB(A.ex("manifest/manifest.txt",!1,!0,$.vx),$async$n_)
case 2:r.tW=b
return P.bv(null,s)}})
return P.bw($async$n_,s)},
EI:function(a){if(!$.$get$cX().Y(0,a))$.$get$cX().i(0,a,new Y.dQ(a,null,H.a([],[[P.f1,,]]),[null]))
return $.$get$cX().n(0,a)},
EJ:function(a,b,c){var t
if($.$get$cX().Y(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vw(C.b.gb8(a.split("."))).a
t=A.EI(a)
c.aZ(A.wm(a,!1)).b0(new A.mY(t))
return t.cu(0)},
mV:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mV=P.bx(function(b,a0){if(b===1)return P.bu(a0,s)
while(true)switch(t){case 0:t=3
return P.cB(A.ex(a+".bundle",!1,!0,null),$async$mV)
case 3:q=a0
p=C.c.K(a,0,C.c.e4(a,$.$get$wo()))
o=P.cS
n=new P.dX(new P.bk(0,$.an,null,[o]),[o])
m=H.a([],[P.co])
for(o=J.xY(q),l=o.length,k=[[P.f1,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.c0)(o),++i){h=o[i]
g=J.bo(h)
f=Z.vw(C.b.gb8(J.eU(g.gG(h),"."))).a
e=p+"/"+H.y(g.gG(h))
if($.$get$cX().Y(0,e)){m.push(A.ex(e,!1,!1,null))
continue}d=H.i7(g.gbe(h),"$isd8")
if(!$.$get$cX().Y(0,e))$.$get$cX().i(0,e,new Y.dQ(e,null,H.a([],k),j))
c=$.$get$cX().n(0,e)
m.push(c.cu(0))
f.b6(d.buffer).b0(new A.mW(f,c))}P.zj(m,null,!1).b0(new A.mX(n))
r=n.a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$mV,s)},
hv:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$hv=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:if($.$get$tV().Y(0,a)){r=$.$get$tV().n(0,a)
t=1
break}q=W.fu
p=new P.bk(0,$.an,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eQ(n,"load",new A.mZ(new P.dX(p,[q]),n),!1,W.S)
n.src=A.wm(a,!1)
r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$hv,s)},
wm:function(a,b){if(C.c.ae(a,"/")){a=C.c.af(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.aq("../",N.u9())+a},
mY:function mY(a){this.a=a},
mW:function mW(a,b){this.a=a
this.b=b},
mX:function mX(a){this.a=a},
mZ:function mZ(a,b){this.a=a
this.b=b},
nz:function nz(){},
jF:function jF(){},
jK:function jK(a,b){this.a=a
this.b=b},
ko:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ko=P.bx(function(a0,a1){if(a0===1)return P.bu(a1,s)
while(true)switch(t){case 0:if($.xA){t=1
break}$.xA=!0
D.G0()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.a9
H.a([],p)
o=new G.bI(null,n,o,0.6)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["ceramic"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["bone"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.2)
$.$get$c().h(0,o)
$.aX=o
o=H.a(["wood"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aE=o
o=H.a(["rubber"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.ca=o
o=H.a(["paper"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.K=o
o=H.a(["cloth","fabric"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.aO=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bV=o
o=H.a(["flesh","meat","muscle"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bi=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bI(null,n,o,3.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.cf=o
o=H.a(["plant","leaf","vine"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aQ=o
o=H.a(["feathery"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,-0.1)
$.$get$c().h(0,o)
$.br=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bI(null,n,o,0.1)
$.$get$c().h(0,o)
$.bX=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bI(null,n,o,-13)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["stone","rock","concrete"],p)
n=$.u
H.a([],p)
o=new G.bI(null,n,o,0.3)
$.$get$c().h(0,o)
$.au=o
o=H.a(["legendary"],p)
n=$.mz
H.a([],p)
o=new G.bI(null,n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mz
H.a([],p)
o=new G.bI(null,n,o,40.37)
$.$get$c().h(0,o)
$.En=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.as=o
o=$.tG
H.a([],p)
o=new G.aJ(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aP=o
o=$.tG
H.a([],p)
o=new G.aJ(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ak=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bh=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c4=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.aW=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bW=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aD=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bd=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ah=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.at=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.aT=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bq=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.mz
H.a([],p)
o=new G.aJ(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.T=o
o=$.mz
H.a([],p)
o=new G.aJ(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.U=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aw=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aI=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aF=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.aY=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bO=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bl=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c9=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.af=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aK=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a8=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bj=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ad(null,n,o,0.1)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.er=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ms=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vI=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tl=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ho=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mr=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.fg=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.we=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.to=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.hn=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vK=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.fi=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.th=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.aC=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.jm=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.jo=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.ti=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tm=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,1.3)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vL=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.dN=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.eq=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.mv=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.jn=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["a pizza cutter"],p)
n=$.a3
H.a([],p)
o=new G.ad(null,n,o,0.4)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a1
l=[m]
k=H.a([$.D,$.as,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a([],p)
n=$.u
k=H.a([$.af,$.as],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aX,$.au],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aX,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.vG=o
o=H.a([],p)
n=$.u
k=H.a([$.aY,$.aF],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.au],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.cf,$.aE],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.X,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bi],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.vM=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bX,$.bi],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bX,$.bi,$.bl],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Ultraviolet"],p)
n=$.tF
k=H.a([$.aP,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aP,$.ak,$.as],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bW],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.ao,$.aO],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.tj=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.ao,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.ao,$.ca],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.ao,$.aX],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.aX,$.bR],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.au,$.aO,$.bi],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ao,$.bO],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.au,$.aO],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.tk=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.aw,$.aA,$.aT,$.Y,$.ah,$.bW,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aW,$.ak,$.as,$.a_,$.aD,$.Y,$.ah,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bX,$.aI,$.am,$.aT],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aW,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.aX,$.as,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bW,$.cf],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aL,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.zN=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aL,$.aK,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.vH=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.as],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aN,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.aV,$.O],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aL,$.aV,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.zR=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aL,$.af],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.aY,$.bd],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bS,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aL,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bl,$.am,$.as],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aP,$.ap,$.as],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aN],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.bj],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.aW,$.aD,$.aX],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["green sun"],p)
n=$.tG
k=H.a([$.ap,$.c4,$.aP],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tF
k=H.a([$.ak,$.ah],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.aP],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.as,$.ak,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c4,$.bn],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.zG=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aX,$.bi,$.at],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aX,$.bi],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.aV,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a8],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a8],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ah,$.bd],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.af,$.a8],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.as,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ah,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Bach's"],p)
n=$.a9
k=H.a([$.Y,$.a8],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.zP=o
o=H.a(["Mozart's"],p)
n=$.a9
k=H.a([$.a2,$.a8],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.a9
k=H.a([$.Y,$.c4],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["Feynman's"],p)
n=$.a9
k=H.a([$.Y,$.aT],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["Ziptie"],p)
n=$.a9
k=H.a([$.aE,$.aV],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mx=o
o=H.a(["Sassacre"],p)
n=$.a9
k=H.a([$.c9,$.aT],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.af,$.c9],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aV,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mu=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aT,$.aU],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.ap,$.aA],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.K,$.ao],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.af,$.c9,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.zM=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aP,$.bn],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bn],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.as],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a8],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.au,$.a8],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.at,$.bi,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aT,$.a8,$.aU,$.aW],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.af,$.am,$.bS],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.ap,$.ao],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bl,$.ao],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bl,$.ao,$.as],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bl,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.am,$.ao],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a8,$.am,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.af],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aE,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.K,$.bd],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.ao,$.bd],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c4,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.au,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.aw],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bd,$.aw,$.ah],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fh=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bd,$.a8,$.ah],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.bd,$.bl],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.ap,$.bl],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.am,$.bl],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["winter's","season's"],p)
n=$.a9
k=H.a([$.bh,$.bl],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.a9
k=H.a([$.a2,$.bl],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Santa Saws"],p)
n=$.a9
k=H.a([$.a2,$.bl,$.as],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Santa Sleighs"],p)
n=$.a9
k=H.a([$.ho,$.as],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Santa Claws"],p)
n=$.a9
k=H.a([$.ho,$.mq],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Sandy Claws"],p)
n=$.a9
k=H.a([$.ho,$.mq,$.au],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Silent Night"],p)
n=$.a9
k=H.a([$.ho,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.a9
k=H.a([$.aW,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bi,$.c4,$.bX],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c4,$.a7,$.ao],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c4,$.a7,$.ao,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a([],p)
n=$.q
k=H.a([$.af,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c4,$.au],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.ca],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.as,$.au],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aL,$.au],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aE,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.am,$.bn],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aE,$.aY],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.aY],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bi,$.aY],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.cf,$.aY],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.af,$.aA],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.aw,$.bR],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bd,$.bR],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.as],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.aA,$.ao],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.aA,$.ao,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.am,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a2,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.af,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.c9,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aN,$.aT],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bd,$.aT],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ah,$.aT],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.aY,$.aN],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["stradivarius"],p)
n=$.a9
k=H.a([$.ah,$.bd,$.X,$.a8],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aN],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.at],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.tg=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a7,$.at],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bn],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.at,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["*Hyun-ae"],p)
n=$.a9
k=H.a([$.at,$.a7,$.aA],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c9,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ah,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.as,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.af,$.ca],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aN,$.a8],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.zQ=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ao],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.am,$.bO],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aE,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.ca,$.as],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aE,$.as],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aU,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aU,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aO,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aO,$.au,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.vN=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.ca,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.aw,$.ah],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.tn=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aT,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bS,$.aT],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aN,$.am,$.ah],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bX,$.aU,$.aW],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.am,$.ah],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.bd],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.tp=o
o=H.a(["platinum"],p)
n=$.u
k=H.a([$.aP,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mw=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bW,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.cf],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.au,$.ah],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.au,$.c9],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bm,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aU,$.a8],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.at,$.aN],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ao,$.aN],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aN],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bd,$.aN],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.am,$.aF,$.aT],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bi],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ap,$.bn],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bn,$.aE],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.aP,$.bm],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c4],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ap],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.au,$.ap],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bS],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.as,$.am,$.ah],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aA,$.aT],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.aw,$.aP],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.zJ=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.aw,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.au,$.bi],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.au],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a2,$.at],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ao,$.ah],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aO,$.aw,$.bd],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.aV,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.au,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.K,$.aQ],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aE],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bm,$.bq,$.ao],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jp=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.vJ=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bV,$.bi],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bV,$.ap],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bj,$.tz,$.at],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bi,$.bm],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.zH=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aA,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.zO=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aA,$.bh],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aA,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.am,$.ap],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bh],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bh,$.aV],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a([],p)
n=$.q
k=H.a([$.bh,$.bq],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Ghost Rider's"],p)
n=$.a9
k=H.a([$.eq,$.ap,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.bl],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Duelist's"],p)
n=$.a9
k=H.a([$.aK,$.ah],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bS],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aU,$.aW],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bX,$.a8],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bX,$.aw],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.bj,$.bd],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.at,$.aW,$.bm,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bm,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ao,$.bn],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.ak,$.aN],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aF,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bm,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aF,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aO,$.c4],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aT,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bR],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bn,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bn,$.af],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.aY,$.br],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aF,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.ak,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aL,$.as],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aU],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.ah],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aQ],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aO,$.bS],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Miner's"],p)
n=$.a9
k=H.a([$.au,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a8,$.at],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bi,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.au,$.bO],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.zI=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bO,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.af],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aQ,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.aP],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aP,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bq,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bi,$.bd],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.aw],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.O,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bW,$.aX],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aU,$.aX],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.Y,$.aX],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aT,$.aX],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.aY],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aU,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aU,$.bn],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bO,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.zL=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ap,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aO],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aX,$.aW],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Berserker's"],p)
n=$.a9
k=H.a([$.a2,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["Clerical"],p)
n=$.a9
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.ap],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c4,$.aP],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aY,$.ap],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aU,$.ap],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aU,$.c9],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bV,$.aU],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aT,$.bm],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aQ],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.zK=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aA,$.aQ],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aT,$.af],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bO],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.aw,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.as,$.aT],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bX,$.aT],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.aw,$.aQ],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bO,$.aQ],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.br],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aQ,$.ao,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.aV,$.at],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bq,$.at],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.bl],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.ap],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.aV,$.c9],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aA],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aP,$.Y,$.aO,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bV,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ap,$.br],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a8,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.aX],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.aX],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aX,$.aI,$.ao],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ap],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bR,$.aQ],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.ao],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bi],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aL,$.cf],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aX,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.au,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.zS=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aO,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aO,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aO,$.aE],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bR,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aQ,$.bX],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aQ,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aQ,$.af],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aO,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aQ,$.ca],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aQ,$.aE],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a8,$.aW],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bm,$.a8],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bm,$.a7,$.a8],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aQ,$.cf],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aX,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aX,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aX,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aX,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aX,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aX,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.u
k=H.a([$.X,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.u
k=H.a([$.X,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.X,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.u
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,null,n,o,0))
o=H.a(["Birch"],p)
n=$.u
k=H.a([$.X,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,null,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,null,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.a9
k=H.a([$.X,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.u
k=H.a([$.X,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.u
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.u
k=H.a([$.X,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.u
k=H.a([$.aE,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.u
k=H.a([$.K,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.u
k=H.a([$.au,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.au,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.u
k=H.a([$.au,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.u
k=H.a([$.au,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.u
k=H.a([$.au,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.u
k=H.a([$.au,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.u
k=H.a([$.au,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.u
k=H.a([$.au,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.au,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.O,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.O,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.O,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.O,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.u
k=H.a([$.O,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.u
k=H.a([$.O,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.u
k=H.a([$.O,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.u
k=H.a([$.O,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,null,n,o,0))
o=H.a(["RedFlag"],p)
n=$.u
k=H.a([$.O,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,null,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.u
k=H.a([$.O,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.u
k=H.a([$.O,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.u
k=H.a([$.O,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.a9
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.u
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.u
k=H.a([$.aQ,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.u
k=H.a([$.aE,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.u
k=H.a([$.U,$.T],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bj,$.aN,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bm,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bm,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.a9
k=H.a([$.bm,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.a9
k=H.a([$.a_,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.a9
k=H.a([$.Y,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.a_,$.aE,$.bh,$.af],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dN,$.X,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.a9
k=H.a([$.ak,$.a2,$.bj,$.aF,$.aW],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Kingly"],p)
n=$.a9
k=H.a([$.aW,$.af,$.c9,$.a2,$.bj],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["Jack"],p)
n=$.a9
k=H.a([$.aL,$.as,$.D,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aN,$.X,$.U,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.D,$.Y,$.U],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.aC,$.K,$.Y,$.U,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.K,$.Y,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.a9
k=H.a([$.a_,$.aP,$.D,$.aL,$.as,$.er],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.a9
k=H.a([$.a_,$.K,$.bq,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.a9
k=H.a([$.a_,$.a2,$.O,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.a9
k=H.a([$.a_,$.aF,$.aX,$.D,$.fi,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.a9
k=H.a([$.a_,$.au,$.ah,$.jn,$.af],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.O,$.bd,$.aw,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bd,$.aw,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aE,$.a7,$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.a2,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.aw,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.K
i=$.Y
i=H.a([k,j,i,$.aC,i,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.u
i=H.a([$.a_,$.aw,$.bR,$.af,$.fg,$.at],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["Meddler's"],p)
n=$.a9
i=H.a([$.a_,$.aC,$.K,$.bq,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.a9
i=H.a([$.a2,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.D,$.ak,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.D,$.aO,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aN,$.X,$.am,$.bh,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.ap,$.D,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.K,$.aC,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.at,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.a9
i=H.a([$.a_,$.bj,$.br,$.aP,$.a8,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.a_,$.aI,$.aO,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.a_,$.aP,$.bW,$.au,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.a9
i=H.a([$.a_,$.aF,$.au,$.ah,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.a9
i=H.a([$.a_,$.ao,$.bq,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.a9
i=H.a([$.a_,$.D,$.a8,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.aO,$.c4,$.aP,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.a9
i=H.a([$.D,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.u
i=H.a([$.D,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.u
i=H.a([$.D,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.u
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.u
i=H.a([$.bR,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.u
i=H.a([$.bR,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,null,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bR,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,null,n,o,0))
o=H.a(["Plate"],p)
n=$.u
i=H.a([$.bR,$.af],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,null,n,o,0))
o=H.a(["Terracotta"],p)
n=$.u
i=H.a([$.bR,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.u
i=H.a([$.bR,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,null,n,o,0))
o=H.a(["Vinyl"],p)
n=$.u
i=H.a([$.bR,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,null,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bR,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,null,n,o,0))
o=H.a(["Tiled"],p)
n=$.u
i=H.a([$.bR,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,null,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bR,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,null,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bS,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,null,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bS,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,null,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bS,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,null,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bS,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,null,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bS,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bS,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.a9
i=H.a([$.bS,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.u
i=H.a([$.bS,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.u
i=H.a([$.bS,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.u
i=H.a([$.bS,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.a9
i=H.a([$.X,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.u
i=H.a([$.X,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.u
i=H.a([$.X,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.u
i=H.a([$.aE,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.ca,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.ca,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.ca,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.u
i=H.a([$.au,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.u
i=H.a([$.au,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.au,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bV,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.u
i=H.a([$.bV,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bV,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.u
i=H.a([$.bV,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.u
i=H.a([$.bV,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bV,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bV,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bi,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bi,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bi,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bi,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bm,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bm,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bm,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bm,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.cf,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.cf,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.a9
i=H.a([$.cf,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.cf,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aQ,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aQ,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.u
i=H.a([$.aQ,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.u
i=H.a([$.aQ,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.u
i=H.a([$.aQ,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aQ,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aQ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aQ,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.br,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.u
i=H.a([$.br,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.u
i=H.a([$.br,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.u
i=H.a([$.br,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.u
i=H.a([$.br,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.u
i=H.a([$.br,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.u
i=H.a([$.br,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.tF
i=H.a([$.br,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.br,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bX,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,null,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.as,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,null,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.as,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,null,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.aW,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ao,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.u
i=H.a([$.ao,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ao,$.af],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c9,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c9,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.a9
i=H.a([$.aK,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.a9
i=H.a([$.aK,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.a9
i=H.a([$.aK,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aK,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.u
i=H.a([$.aP,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.u
i=H.a([$.a8,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bW,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bW,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.a9
i=H.a([$.bW,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.a9
i=H.a([$.aP,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aP,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aP,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aP,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.a9
i=H.a([$.ak,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ak,$.a2,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.ak,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ak,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.a9
i=H.a([$.ak,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.a9
i=H.a([$.bh,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bh,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bh,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bO,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bn,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bn,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bn,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bn,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bn,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bn,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bn,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bn,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bl,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bO,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bO,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bO,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bO,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bO,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bO,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a8,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a8,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,null,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a8,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,null,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a8,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,null,n,o,0))
o=H.a(["Piper's"],p)
n=$.a9
i=H.a([$.a8,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,null,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a8,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a8,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a8,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a8,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bq,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bq,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,null,n,o,0))
o=H.a(["Doctor's"],p)
n=$.a9
i=H.a([$.Y,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,null,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.aV,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,null,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.aV,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,null,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.aV,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,null,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.aV,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.aw,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.aY,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aY,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ao,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,null,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aA,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,null,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,null,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.at,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,null,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.at,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,null,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.a9
i=H.a([$.aA,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aA,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aA,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aA,$.aU,$.aC,$.jo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ao,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ao,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ao,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ao,$.aT,$.a7,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aX,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bS,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,null,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,null,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aE,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.ca,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.K,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.a9
i=H.a([$.aO,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bi,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ap,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.aA,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.a9
i=H.a([$.aQ,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aI,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bj,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.a9
i=H.a([$.bW,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.ak,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.ap,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.ap,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.ap,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bd,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bd,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bd,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aF,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aU,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aA,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bj,$.aN,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bj,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.er,$.tw,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.au,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.br,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aW,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.wE==null){o=$.mq
n=$.aL
l=$.as
k=$.aX
j=new U.ae(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a0(null,null,null,m),0,3)
j.H("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.wE=j}o=$.$get$ai();(o&&C.b).sm(o,0)
o=$.$get$ai()
n=$.O
l=$.vV
k=new U.ae(n,null,null,null,null,"Speedo",!1,P.a0(null,null,null,m),0,3)
k.H("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$ai()
o=$.er
n=$.as
l=$.D
j=$.aL
i=new U.ae(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a0(null,null,null,m),0,3)
i.H("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.ms
o=$.af
j=$.D
l=new U.ae(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a0(null,null,null,m),0,3)
l.H("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$ai()
i=$.tB
k=$.aK
j=$.D
o=new U.ae(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a0(null,null,null,m),0,3)
o.H("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$ai()
l=$.tv
i=$.aK
j=$.D
k=new U.ae(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a0(null,null,null,m),0,3)
k.H("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$ai()
o=$.w9
l=$.aK
j=$.D
i=new U.ae(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a0(null,null,null,m),0,3)
i.H("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$ai()
k=$.vI
o=$.aL
j=$.as
l=$.D
n=new U.ae(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a0(null,null,null,m),0,3)
n.H("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$ai()
i=$.tl
k=$.aL
l=$.as
j=$.D
o=new U.ae(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a0(null,null,null,m),0,3)
o.H("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.ho
i=$.af
j=$.bR
l=new U.ae(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a0(null,null,null,m),0,3)
l.H("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.wc
n=$.as
j=$.D
i=new U.ae(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a0(null,null,null,m),0,3)
i.H("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$ai()
l=$.vL
o=$.as
j=$.D
n=new U.ae(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a0(null,null,null,m),0,3)
n.H("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$ai()
i=$.vR
l=$.aL
j=$.D
o=new U.ae(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a0(null,null,null,m),0,3)
o.H("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$ai()
n=$.tu
i=$.br
j=$.bm
l=new U.ae(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a0(null,null,null,m),0,3)
l.H("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$ai()
o=$.fg
n=$.c9
j=$.au
i=$.af
k=new U.ae(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a0(null,null,null,m),0,3)
k.H("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.tm
o=$.aE
i=$.bW
j=new U.ae(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a0(null,null,null,m),0,3)
j.H("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$ai()
k=$.tt
l=$.D
i=$.aL
o=new U.ae(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a0(null,null,null,m),0,3)
o.H("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$ai()
j=$.tD
k=$.X
i=$.af
l=new U.ae(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a0(null,null,null,m),0,3)
l.H("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$ai()
o=$.wf
j=$.aV
i=$.O
k=new U.ae(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a0(null,null,null,m),0,3)
k.H("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$ai()
l=$.ti
o=$.aK
i=$.au
j=$.O
n=$.aL
h=new U.ae(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a0(null,null,null,m),0,3)
h.H("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$ai()
k=$.jo
l=$.X
n=$.af
j=new U.ae(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a0(null,null,null,m),0,3)
j.H("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$ai()
h=$.jm
k=$.X
n=new U.ae(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a0(null,null,null,m),0,3)
n.H("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$ai()
j=$.aC
h=$.K
k=$.af
l=new U.ae(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a0(null,null,null,m),0,3)
l.H("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$ai()
n=$.w5
j=$.D
k=$.af
h=new U.ae(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a0(null,null,null,m),0,3)
h.H("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$ai()
l=$.th
n=$.as
k=$.D
j=$.af
i=new U.ae(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a0(null,null,null,m),0,3)
i.H("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.w0
l=$.X
j=$.aL
k=new U.ae(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a0(null,null,null,m),0,3)
k.H("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.fi
h=$.D
j=$.af
l=new U.ae(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a0(null,null,null,m),0,3)
l.H("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.vK
i=$.X
j=$.af
h=new U.ae(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a0(null,null,null,m),0,3)
h.H("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.wg
k=$.aE
j=$.af
i=new U.ae(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a0(null,null,null,m),0,3)
i.H("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.wd
l=$.X
j=$.aK
k=new U.ae(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a0(null,null,null,m),0,3)
k.H("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.wb
h=$.D
j=$.as
l=new U.ae(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a0(null,null,null,m),0,3)
l.H("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tr
i=$.D
j=$.aK
h=new U.ae(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a0(null,null,null,m),0,3)
h.H("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mr
k=$.D
j=$.bn
i=new U.ae(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a0(null,null,null,m),0,3)
i.H("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.fg
l=$.ca
j=$.af
k=new U.ae(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a0(null,null,null,m),0,3)
k.H("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.we
h=$.D
j=$.aL
l=new U.ae(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a0(null,null,null,m),0,3)
l.H("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.mp
i=$.K
j=$.as
h=new U.ae(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a0(null,null,null,m),0,3)
h.H("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.to
k=$.D
j=$.af
i=new U.ae(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a0(null,null,null,m),0,3)
i.H("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.hn
l=$.aY
j=$.O
k=new U.ae(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a0(null,null,null,m),0,3)
k.H("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.eq
h=$.D
j=$.aV
l=new U.ae(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a0(null,null,null,m),0,3)
l.H("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tE
i=$.D
j=$.af
h=new U.ae(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a0(null,null,null,m),0,3)
h.H("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.wa
k=$.D
j=$.af
i=new U.ae(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a0(null,null,null,m),0,3)
i.H("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.tC
l=$.X
j=$.af
k=new U.ae(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a0(null,null,null,m),0,3)
k.H("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.tz
h=$.X
j=$.aD
l=new U.ae(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a0(null,null,null,m),0,3)
l.H("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tA
i=$.D
j=$.as
h=new U.ae(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a0(null,null,null,m),0,3)
h.H("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.mv
k=$.D
j=$.Y
i=new U.ae(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a0(null,null,null,m),0,3)
i.H("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.jn
l=$.au
j=$.c9
k=new U.ae(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a0(null,null,null,m),0,3)
k.H("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.vU
h=$.X
j=$.af
l=new U.ae(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a0(null,null,null,m),0,3)
l.H("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.w_
i=$.D
j=$.as
h=new U.ae(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a0(null,null,null,m),0,3)
h.H("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$ai()
l=$.w8
k=$.D
j=$.as
i=new U.ae(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a0(null,null,null,m),0,3)
i.H("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$ai()
h=$.w7
l=$.D
j=$.c9
k=new U.ae(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a0(null,null,null,m),0,3)
k.H("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$ai()
i=$.dN
h=$.X
j=$.af
l=new U.ae(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a0(null,null,null,m),0,3)
l.H("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$ai()
k=$.tw
i=$.D
j=$.as
m=new U.ae(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a0(null,null,null,m),0,3)
m.H("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bC("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bL().push(m)
$.vp=m
m=new S.bC("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bL().push(m)
$.t7=m
m=new S.bC("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bL().push(m)
$.e3=m
m=new S.bC("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bL().push(m)
$.el=m
m=new S.bC("Turtle","click",null,null)
m.b="Turtle"
$.$get$bL().push(m)
$.f9=m
m=new S.bC("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bL().push(m)
$.dM=m
m=new S.bC("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bL().push(m)
$.eo=m
m=new S.bC("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bL().push(m)
$.hc=m
m=new S.bC("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bL().push(m)
$.t1=m
m=new S.bC("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bL().push(m)
$.lN=m
m=new S.bC("Snake","hiss",null,null)
m.b="Snake"
$.$get$bL().push(m)
$.t9=m
m=new S.bC("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bL().push(m)
$.it=m
m=new S.bC("Mole","snuff",null,null)
m.b="Mole"
$.$get$bL().push(m)
$.vr=m
m=new S.bC("Bird","tweet",null,null)
m.b="Bird"
$.$get$bL().push(m)
$.lL=m
m=new S.bC("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bL().push(m)
$.lS=m
m=new S.bC("Newt","skitter",null,null)
m.b="Newt"
$.$get$bL().push(m)
$.vs=m
m=new S.bC("Spider","skitter",null,null)
m.b="Spider"
$.$get$bL().push(m)
$.iA=m
m=new S.bC("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bL().push(m)
$.iu=m
m=new S.bC("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bL().push(m)
$.f6=m
m=new S.ic("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bL().push(m)
$.z6=m
m=new S.ic("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bL().push(m)
$.z3=m
m=new S.mb("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bL().push(m)
$.z5=m
m=new S.bC("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bL().push(m)
$.vq=m
$.z7=H.a([$.t9,$.it,$.vs,$.t7,$.el,$.e3,$.f9,$.hc,$.t1,$.lN],[S.bC])
m=new T.bZ(0,"spices")
$.$get$ch().push(m)
$.hh=m
m=new T.bZ($.e5,"fresh baked bread")
$.$get$ch().push(m)
$.f4=m
m=new T.bZ($.e5,"sweetness")
$.$get$ch().push(m)
$.cn=m
m=new T.bZ($.e5,"nature")
$.$get$ch().push(m)
$.c7=m
m=new T.bZ(0,"salt")
$.$get$ch().push(m)
$.lR=m
m=new T.bZ($.cO,"rot")
$.$get$ch().push(m)
$.cW=m
m=new T.bZ($.cO,"feet")
$.$get$ch().push(m)
$.z4=m
m=new T.bZ(0,"oil")
$.$get$ch().push(m)
$.en=m
m=new T.bZ(0,"chlorine")
$.$get$ch().push(m)
$.t3=m
m=new T.bZ(0,"nothing in particular")
$.$get$ch().push(m)
$.iz=m
m=new T.bZ(0,"gunpowder")
$.$get$ch().push(m)
$.ek=m
m=new T.bZ(0,"must")
$.$get$ch().push(m)
$.f7=m
m=new T.bZ($.e5,"zoo animals")
$.$get$ch().push(m)
$.cN=m
m=new T.bZ($.cO,"sweat")
$.$get$ch().push(m)
$.e4=m
m=new T.bZ(0,"ozone")
$.$get$ch().push(m)
$.hf=m
m=new T.bZ(0,"deceit")
$.$get$ch().push(m)
$.c2=m
m=new T.bZ($.cO,"blood")
$.$get$ch().push(m)
$.df=m
m=new T.bZ($.cO,"smoke")
$.$get$ch().push(m)
$.f8=m
m=new K.bP($.cO,"creepy")
$.$get$c6().push(m)
$.c1=m
m=new K.bP($.e5,"calm")
$.$get$c6().push(m)
$.aM=m
m=new K.bP($.cO,"frantic")
$.$get$c6().push(m)
$.cd=m
m=new K.bP(0,"like nothing")
$.$get$c6().push(m)
$.iy=m
m=new K.bP($.e5,"energizing")
$.$get$c6().push(m)
$.c3=m
m=new K.bP(0,"studious")
$.$get$c6().push(m)
$.cA=m
m=new K.bP(0,"dangerous")
$.$get$c6().push(m)
$.dg=m
m=new K.bP(0,"glamorous")
$.$get$c6().push(m)
$.dK=m
m=new K.bP(0,"romantic")
$.$get$c6().push(m)
$.hg=m
m=new K.bP($.e5,"creative")
$.$get$c6().push(m)
$.f5=m
m=new K.bP(0,"lucky")
$.$get$c6().push(m)
$.lO=m
m=new K.bP(0,"happy")
$.$get$c6().push(m)
$.dr=m
m=new K.bP(0,"heroic")
$.$get$c6().push(m)
$.dh=m
m=new K.bP($.cO,"stupid")
$.$get$c6().push(m)
$.dt=m
m=new K.bP(0,"lucky")
$.$get$c6().push(m)
$.lO=m
m=new K.bP(0,"claustrophobic")
$.$get$c6().push(m)
$.vo=m
m=new K.bP(0,"overheated")
$.$get$c6().push(m)
$.lP=m
m=new K.bP($.cO,"confusing")
$.$get$c6().push(m)
$.lM=m
m=new K.bP(0,"contemplatative")
$.$get$c6().push(m)
$.cV=m
m=new M.bt(0,"clanking")
$.$get$bJ().push(m)
$.cM=m
m=new M.bt(0,"laughing")
$.$get$bJ().push(m)
$.cz=m
m=new M.bt($.e5,"rustling")
$.$get$bJ().push(m)
$.bc=m
m=new M.bt($.cO,"screaming")
$.$get$bJ().push(m)
$.ep=m
m=new M.bt($.cO,"foot steps")
$.$get$bJ().push(m)
$.iw=m
m=new M.bt($.cO,"beeping")
$.$get$bJ().push(m)
$.ej=m
m=new M.bt($.cO,"whispering")
$.$get$bJ().push(m)
$.vu=m
m=new M.bt(0,"clacking")
$.$get$bJ().push(m)
$.hd=m
m=new M.bt(0,"applause")
$.$get$bJ().push(m)
$.cD=m
m=new M.bt(0,"jazz")
$.$get$bJ().push(m)
$.em=m
m=new M.bt(0,"disco")
$.$get$bJ().push(m)
$.t5=m
m=new M.bt(0,"drums")
$.$get$bJ().push(m)
$.he=m
m=new M.bt(0,"echoing")
$.$get$bJ().push(m)
$.iv=m
m=new M.bt($.cO,"roaring")
$.$get$bJ().push(m)
$.lQ=m
m=new M.bt($.cO,"gunfire")
$.$get$bJ().push(m)
$.ix=m
m=new M.bt(0,"music")
$.$get$bJ().push(m)
$.cm=m
m=new M.bt(0,"singing")
$.$get$bJ().push(m)
$.t8=m
m=new M.bt(0,"chanting")
$.$get$bJ().push(m)
$.t2=m
m=new M.bt(0,"whistling")
$.$get$bJ().push(m)
$.fa=m
m=new M.bt($.e5,"nature")
$.$get$bJ().push(m)
$.ds=m
m=new M.bt(0,"croaking")
$.$get$bJ().push(m)
$.t4=m
m=new M.bt(0,"silence")
$.$get$bJ().push(m)
$.dL=m
m=new M.bt(0,"pulsing")
$.$get$bJ().push(m)
$.t6=m
m=new M.bt(0,"ticking")
$.$get$bJ().push(m)
$.vt=m
m=H.a([],p)
o=[X.F,P.W]
n=A.a5
l=E.N
k=[l]
j=[A.fS]
m=new S.mK(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.v(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Knight",3,!0,!1)
$.FC=m
m=P.l(H.a([new E.N($.cu,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o7(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.v(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Seer",6,!0,!1)
$.FO=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kH("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.v(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Bard",9,!0,!1)
$.Fy=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m8("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.v(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Heir",8,!0,!1)
$.FB=m
m=H.a([],p)
m=new U.n4(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.v(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Maid",0,!0,!1)
$.FF=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nY(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.v(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Rogue",4,!0,!1)
$.FK=m
m=H.a([],p)
m=new V.ny(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.v(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Page",1,!0,!1)
$.FI=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.p_(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.v(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Thief",7,!0,!1)
$.FR=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oO(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.v(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sylph",5,!0,!1)
$.FQ=m
m=H.a([],p)
m=new N.nO("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.v(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Prince",10,!0,!1)
$.FJ=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new M.ps("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.v(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Witch",11,!0,!1)
$.FT=m
m=P.l(H.a([new E.N($.cu,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n3("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.v(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Mage",2,!0,!1)
$.FE=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.N($.cu,3,!1),new E.N($.wG,-2,!1)],k),l)
e=H.a([],p)
m=new E.po("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.v(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Waste",12,!1,!1)
$.FS=m
m=H.a([],p)
m=new Y.o3("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.v(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scout",13,!1,!1)
$.FM=m
m=P.l(H.a([new E.N($.cu,0.5,!1)],k),l)
i=H.a([],p)
m=new L.o4("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.v(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scribe",15,!1,!1)
$.FN=m
m=P.l(H.a([new E.N($.cu,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o1(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.v(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sage",14,!1,!1)
$.FL=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m6("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.v(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Guide",16,!1,!1)
$.FA=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.N($.cu,3,!1)],k),l)
g=H.a([],p)
m=new Y.m5(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.v(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Grace",17,!1,!1)
$.Fz=m
m=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nc("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.v(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Muse",18,!1,!1)
$.FG=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.N($.cu,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n1("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.v(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Lord",19,!1,!1)
$.FD=m
m=P.l(H.a([new E.N($.cu,-0.1,!1),new E.N($.dy,1,!1)],k),l)
i=H.a([],p)
m=new Y.oe("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.v(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Smith",20,!1,!1)
$.FP=m
$.FH=T.Fx("Null",255,!1,!0)
m=A.e1
i=P.C
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#EFEFEF"),!0)
h.j(0,$.b1,L.e("#DEDEDE"),!0)
h.j(0,$.bb,L.e("#FF2106"),!0)
h.j(0,$.ba,L.e("#B01200"),!0)
h.j(0,$.b4,L.e("#2F2F30"),!0)
h.j(0,$.b5,L.e("#1D1D1D"),!0)
h.j(0,$.b3,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#030303"),!0)
h.j(0,$.b8,L.e("#242424"),!0)
h.j(0,$.b7,L.e("#333333"),!0)
h.j(0,$.b6,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.N($.dy,2,!0),new E.N($.eE,1,!0),new E.N($.eF,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new N.og(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(0,"Space",!0,!1)
$.ys=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff0000"),!0)
a.j(0,$.b2,L.e("#FF2106"),!0)
a.j(0,$.b1,L.e("#AD1604"),!0)
a.j(0,$.bb,L.e("#030303"),!0)
a.j(0,$.ba,L.e("#242424"),!0)
a.j(0,$.b4,L.e("#510606"),!0)
a.j(0,$.b5,L.e("#3C0404"),!0)
a.j(0,$.b3,L.e("#1F0000"),!0)
a.j(0,$.b9,L.e("#B70D0E"),!0)
a.j(0,$.b8,L.e("#970203"),!0)
a.j(0,$.b7,L.e("#8E1516"),!0)
a.j(0,$.b6,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.N($.hP,2,!0),new E.N($.eF,1,!0),new E.N($.eD,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new N.p0(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(1,"Time",!0,!1)
$.yt=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3399ff"),!0)
h.j(0,$.b2,L.e("#10E0FF"),!0)
h.j(0,$.b1,L.e("#00A4BB"),!0)
h.j(0,$.bb,L.e("#FEFD49"),!0)
h.j(0,$.ba,L.e("#D6D601"),!0)
h.j(0,$.b4,L.e("#0052F3"),!0)
h.j(0,$.b5,L.e("#0046D1"),!0)
h.j(0,$.b3,L.e("#003396"),!0)
h.j(0,$.b9,L.e("#0087EB"),!0)
h.j(0,$.b8,L.e("#0070ED"),!0)
h.j(0,$.b7,L.e("#006BE1"),!0)
h.j(0,$.b6,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.N($.eF,2,!0),new E.N($.d6,1,!0),new E.N($.eE,-1,!0),new E.N($.ea,-1,!0),new E.N($.cu,0.05,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.kP(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(2,"Breath",!0,!1)
$.yf=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#003300"),!0)
a.j(0,$.b2,L.e("#0F0F0F"),!0)
a.j(0,$.b1,L.e("#010101"),!0)
a.j(0,$.bb,L.e("#E8C15E"),!0)
a.j(0,$.ba,L.e("#C7A140"),!0)
a.j(0,$.b4,L.e("#1E211E"),!0)
a.j(0,$.b5,L.e("#141614"),!0)
a.j(0,$.b3,L.e("#0B0D0B"),!0)
a.j(0,$.b9,L.e("#204020"),!0)
a.j(0,$.b8,L.e("#11200F"),!0)
a.j(0,$.b7,L.e("#192C16"),!0)
a.j(0,$.b6,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.N($.dy,2,!0),new E.N($.eD,1,!0),new E.N($.hP,-1,!0),new E.N($.eE,-1,!0),new E.N($.cu,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new U.lh(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(3,"Doom",!0,!1)
$.yg=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#993300"),!0)
h.j(0,$.b2,L.e("#BA1016"),!0)
h.j(0,$.b1,L.e("#820B0F"),!0)
h.j(0,$.bb,L.e("#381B76"),!0)
h.j(0,$.ba,L.e("#1E0C47"),!0)
h.j(0,$.b4,L.e("#290704"),!0)
h.j(0,$.b5,L.e("#230200"),!0)
h.j(0,$.b3,L.e("#110000"),!0)
h.j(0,$.b9,L.e("#3D190A"),!0)
h.j(0,$.b8,L.e("#2C1207"),!0)
h.j(0,$.b7,L.e("#5C2913"),!0)
h.j(0,$.b6,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.N($.ea,2,!0),new E.N($.d6,1,!0),new E.N($.dy,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.kM(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(4,"Blood",!0,!1)
$.ye=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff3399"),!0)
a.j(0,$.b2,L.e("#BD1864"),!0)
a.j(0,$.b1,L.e("#780F3F"),!0)
a.j(0,$.bb,L.e("#1D572E"),!0)
a.j(0,$.ba,L.e("#11371D"),!0)
a.j(0,$.b4,L.e("#4C1026"),!0)
a.j(0,$.b5,L.e("#3C0D1F"),!0)
a.j(0,$.b3,L.e("#260914"),!0)
a.j(0,$.b9,L.e("#6B0829"),!0)
a.j(0,$.b8,L.e("#4A0818"),!0)
a.j(0,$.b7,L.e("#55142A"),!0)
a.j(0,$.b6,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.N($.ea,1,!0),new E.kA(null,1,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new T.m7(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(5,"Heart",!0,!1)
$.yi=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3da35a"),!0)
h.j(0,$.b2,L.e("#06FFC9"),!0)
h.j(0,$.b1,L.e("#04A885"),!0)
h.j(0,$.bb,L.e("#6E0E2E"),!0)
h.j(0,$.ba,L.e("#4A0818"),!0)
h.j(0,$.b4,L.e("#1D572E"),!0)
h.j(0,$.b5,L.e("#164524"),!0)
h.j(0,$.b3,L.e("#11371D"),!0)
h.j(0,$.b9,L.e("#3DA35A"),!0)
h.j(0,$.b8,L.e("#2E7A43"),!0)
h.j(0,$.b7,L.e("#3B7E4F"),!0)
h.j(0,$.b6,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.N($.eD,2,!0),new E.N($.hP,1,!0),new E.N($.dy,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new V.nb(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(6,"Mind",!0,!1)
$.yo=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff9933"),!0)
a.j(0,$.b2,L.e("#FEFD49"),!0)
a.j(0,$.b1,L.e("#FEC910"),!0)
a.j(0,$.bb,L.e("#10E0FF"),!0)
a.j(0,$.ba,L.e("#00A4BB"),!0)
a.j(0,$.b4,L.e("#FA4900"),!0)
a.j(0,$.b5,L.e("#E94200"),!0)
a.j(0,$.b3,L.e("#C33700"),!0)
a.j(0,$.b9,L.e("#FF8800"),!0)
a.j(0,$.b8,L.e("#D66E04"),!0)
a.j(0,$.b7,L.e("#E76700"),!0)
a.j(0,$.b6,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.N($.hO,2,!0),new E.N($.eD,1,!0),new E.N($.d6,-1,!0),new E.N($.eE,-1,!0),new E.N($.cu,0.2,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new G.mO(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(7,"Light",!0,!1)
$.yn=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#000066"),!0)
h.j(0,$.b2,L.e("#0B1030"),!0)
h.j(0,$.b1,L.e("#04091A"),!0)
h.j(0,$.bb,L.e("#CCC4B5"),!0)
h.j(0,$.ba,L.e("#A89F8D"),!0)
h.j(0,$.b4,L.e("#00164F"),!0)
h.j(0,$.b5,L.e("#00103C"),!0)
h.j(0,$.b3,L.e("#00071A"),!0)
h.j(0,$.b9,L.e("#033476"),!0)
h.j(0,$.b8,L.e("#02285B"),!0)
h.j(0,$.b7,L.e("#004CB2"),!0)
h.j(0,$.b6,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fN(D.us(),null,3,!0),new E.fN(D.us(),null,-1,!0),new E.N($.hP,-1,!0),new E.N($.cu,0.2,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Q.pn(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(8,"Void",!0,!1)
$.yu=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#9900cc"),!0)
a.j(0,$.b2,L.e("#974AA7"),!0)
a.j(0,$.b1,L.e("#6B347D"),!0)
a.j(0,$.bb,L.e("#3D190A"),!0)
a.j(0,$.ba,L.e("#2C1207"),!0)
a.j(0,$.b4,L.e("#7C3FBA"),!0)
a.j(0,$.b5,L.e("#6D34A6"),!0)
a.j(0,$.b3,L.e("#592D86"),!0)
a.j(0,$.b9,L.e("#381B76"),!0)
a.j(0,$.b8,L.e("#1E0C47"),!0)
a.j(0,$.b7,L.e("#281D36"),!0)
a.j(0,$.b6,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.N($.hQ,2,!0),new E.N($.eF,1,!0),new E.N($.d6,-1,!0),new E.N($.ea,-1,!0),new E.N($.cu,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new E.nT(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(9,"Rage",!0,!1)
$.yq=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#ffcc66"),!0)
h.j(0,$.b2,L.e("#FDF9EC"),!0)
h.j(0,$.b1,L.e("#D6C794"),!0)
h.j(0,$.bb,L.e("#164524"),!0)
h.j(0,$.ba,L.e("#06280C"),!0)
h.j(0,$.b4,L.e("#FFC331"),!0)
h.j(0,$.b5,L.e("#F7BB2C"),!0)
h.j(0,$.b3,L.e("#DBA523"),!0)
h.j(0,$.b9,L.e("#FFE094"),!0)
h.j(0,$.b8,L.e("#E8C15E"),!0)
h.j(0,$.b7,L.e("#F6C54A"),!0)
h.j(0,$.b6,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.N($.d6,2,!0),new E.N($.hO,1,!0),new E.fN(D.us(),null,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new X.ma(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(10,"Hope",!0,!1)
$.yj=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#494132"),!0)
a.j(0,$.b2,L.e("#76C34E"),!0)
a.j(0,$.b1,L.e("#4F8234"),!0)
a.j(0,$.bb,L.e("#00164F"),!0)
a.j(0,$.ba,L.e("#00071A"),!0)
a.j(0,$.b4,L.e("#605542"),!0)
a.j(0,$.b5,L.e("#494132"),!0)
a.j(0,$.b3,L.e("#2D271E"),!0)
a.j(0,$.b9,L.e("#CCC4B5"),!0)
a.j(0,$.b8,L.e("#A89F8D"),!0)
a.j(0,$.b7,L.e("#A29989"),!0)
a.j(0,$.b6,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.N($.eE,2,!0),new E.N($.hQ,1,!0),new E.N($.dy,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new K.mN(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(11,"Life",!0,!1)
$.ym=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#9630BF"),!0)
h.j(0,$.b2,L.e("#cc87e8"),!0)
h.j(0,$.b1,L.e("#9545b7"),!0)
h.j(0,$.bb,L.e("#ae769b"),!0)
h.j(0,$.ba,L.e("#8f577c"),!0)
h.j(0,$.b4,L.e("#9630bf"),!0)
h.j(0,$.b5,L.e("#693773"),!0)
h.j(0,$.b3,L.e("#4c2154"),!0)
h.j(0,$.b9,L.e("#fcf9bd"),!0)
h.j(0,$.b8,L.e("#e0d29e"),!0)
h.j(0,$.b7,L.e("#bdb968"),!0)
h.j(0,$.b6,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.N($.dy,3,!0),new E.N($.d6,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Z.li(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ah(12,"Dream",!1,!1)
$.yh=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#003300"),!0)
a.j(0,$.b2,L.e("#383838"),!0)
a.j(0,$.b1,L.e("#000000"),!0)
a.j(0,$.bb,L.e("#2b1130"),!0)
a.j(0,$.ba,L.e("#130017"),!0)
a.j(0,$.b4,L.e("#eba900"),!0)
a.j(0,$.b5,L.e("#c28900"),!0)
a.j(0,$.b3,L.e("#855900"),!0)
a.j(0,$.b9,L.e("#ffd800"),!0)
a.j(0,$.b8,L.e("#d1a900"),!0)
a.j(0,$.b7,L.e("#44244d"),!0)
a.j(0,$.b6,L.e("#271128"),!0)
b=P.l(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),q)
c=P.l(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),q)
d=P.l(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),q)
e=P.l(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),q)
f=P.l(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),q)
g=P.l(H.a([new E.N($.eD,2,!0),new E.N($.d6,1,!0),new E.N($.eF,-2,!0),new E.N($.cu,-0.1,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new Q.mL(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ah(14,"Law",!1,!1)
$.yl=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#00ff00"),!0)
h.j(0,$.b1,L.e("#00ff00"),!0)
h.j(0,$.bb,L.e("#00ff00"),!0)
h.j(0,$.ba,L.e("#00cf00"),!0)
h.j(0,$.b4,L.e("#171717"),!0)
h.j(0,$.b5,L.e("#080808"),!0)
h.j(0,$.b3,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#616161"),!0)
h.j(0,$.b8,L.e("#3b3b3b"),!0)
h.j(0,$.b7,L.e("#4a4a4a"),!0)
h.j(0,$.b6,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.N($.hQ,13,!0)],k),l)
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#FF9B00"),!0)
b.j(0,$.b2,L.e("#FF9B00"),!0)
b.j(0,$.b1,L.e("#FF8700"),!0)
b.j(0,$.bb,L.e("#7F7F7F"),!0)
b.j(0,$.ba,L.e("#727272"),!0)
b.j(0,$.b4,L.e("#A3A3A3"),!0)
b.j(0,$.b5,L.e("#999999"),!0)
b.j(0,$.b3,L.e("#898989"),!0)
b.j(0,$.b9,L.e("#EFEFEF"),!0)
b.j(0,$.b8,L.e("#DBDBDB"),!0)
b.j(0,$.b7,L.e("#C6C6C6"),!0)
b.j(0,$.b6,L.e("#ADADAD"),!0)
b=new K.o2(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ah(13,"Sauce",!1,!0)
$.yr=b
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#080808"),!0)
b.j(0,$.b2,L.e("#BA1016"),!0)
b.j(0,$.b1,L.e("#820B0F"),!0)
b.j(0,$.bb,L.e("#381B76"),!0)
b.j(0,$.ba,L.e("#1E0C47"),!0)
b.j(0,$.b4,L.e("#290704"),!0)
b.j(0,$.b5,L.e("#230200"),!0)
b.j(0,$.b3,L.e("#110000"),!0)
b.j(0,$.b9,L.e("#3D190A"),!0)
b.j(0,$.b8,L.e("#2C1207"),!0)
b.j(0,$.b7,L.e("#5C2913"),!0)
b.j(0,$.b6,L.e("#4C1F0D"),!0)
c=P.l(H.a(["Bonds","Unions","Ink","Color","Nostalgia"],p),q)
d=P.l(H.a(["FRIEND HOARDER YOUTH","INKSTERMINATOR","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Investor","Investigator","Idealist","Inhabitant","Innovator","Interpreter"],p),q)
f=P.l(H.a(["Ink","Flow","Charge","Awakening","Friendship","Trusting","Union","Team","Fresh","Vim","Chorus"],p),q)
g=P.l(H.a(["Ink","Hestia","Bastet","Bes","Vesta","Eleos","Frigg","Debella","Juno","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes","Cthulhu","The Kraken","Akkorokamui","Kanaloa"],p),q)
h=P.l(H.a([new E.N($.ea,2,!0),new E.N($.eF,1,!0),new E.N($.dy,-2,!0)],k),l)
m=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b0,L.e("#FF9B00"),!0)
m.j(0,$.b2,L.e("#FF9B00"),!0)
m.j(0,$.b1,L.e("#FF8700"),!0)
m.j(0,$.bb,L.e("#7F7F7F"),!0)
m.j(0,$.ba,L.e("#727272"),!0)
m.j(0,$.b4,L.e("#A3A3A3"),!0)
m.j(0,$.b5,L.e("#999999"),!0)
m.j(0,$.b3,L.e("#898989"),!0)
m.j(0,$.b9,L.e("#EFEFEF"),!0)
m.j(0,$.b8,L.e("#DBDBDB"),!0)
m.j(0,$.b7,L.e("#C6C6C6"),!0)
m.j(0,$.b6,L.e("#ADADAD"),!0)
j=new V.mk(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.v(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ah(15,"Ink",!1,!1)
$.yk=j
$.yp=L.yd(255,"Null",!1,!0)
j=P.l(H.a([new E.N($.d6,1,!0),new E.N($.hO,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nd(j,q,m,h,g,!1,f,e,d,c,1,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cQ(q)
$.zr=q
q=P.l(H.a([new E.N($.eD,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kw(q,m,j,i,h,!1,g,f,e,d,13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cQ(q)
$.zk=q
q=P.l(H.a([new E.N($.hQ,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kB(q,m,j,i,h,!1,g,f,e,d,4,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cQ(q)
$.zl=q
q=P.l(H.a([new E.N($.hP,-1,!0),new E.N($.hO,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kW(q,m,j,i,h,!1,g,f,e,d,0,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cQ(q)
$.zm=q
q=P.l(H.a([new E.N($.d6,-1,!0),new E.N($.eE,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l8(q,m,j,i,h,!1,g,f,e,d,2,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cQ(q)
$.zn=q
q=P.l(H.a([new E.N($.d6,1,!0),new E.N($.ea,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lg(q,m,j,i,h,!1,g,f,e,d,8,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cQ(q)
$.zo=q
q=P.l(H.a([new E.N($.hO,1,!0),new E.N($.dy,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lJ(q,m,j,i,h,!1,g,f,e,d,7,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cQ(q)
$.zp=q
q=P.l(H.a([new E.N($.hQ,1,!0),new E.N($.eE,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mI(q,m,j,i,h,!1,g,f,e,d,6,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cQ(q)
$.zq=q
q=P.l(H.a([new E.N($.eF,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nL(q,m,j,i,h,!1,g,f,e,d,9,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cQ(q)
$.zt=q
q=P.l(H.a([new E.N($.ea,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nZ(q,m,j,i,h,!1,g,f,e,d,12,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cQ(q)
$.zu=q
q=P.l(H.a([new E.N($.d6,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.of(q,m,j,i,h,!1,g,f,e,d,11,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cQ(q)
$.zv=q
q=P.l(H.a([new E.N($.ea,-1,!0),new E.N($.d6,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oT(q,m,j,i,h,!1,g,f,e,d,5,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cQ(q)
$.zx=q
q=P.l(H.a([new E.N($.eD,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.px(q,m,j,i,h,!1,g,f,e,d,3,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cQ(q)
$.zy=q
q=P.l(H.a([new E.N($.dy,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oR(q,m,j,i,h,!1,g,f,e,d,10,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cQ(q)
$.zw=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.ff(!0,q,l,k,p,-13,new H.v(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.D()
q.E()
B.cQ(q)
$.zs=q
A.wp()
t=3
return P.cB(Y.ne(),$async$ko)
case 3:case 1:return P.bv(r,s)}})
return P.bw($async$ko,s)}},V={lg:function lg(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},m0:function m0(a){this.a=a},mk:function mk(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},nb:function nb(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},ny:function ny(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},oT:function oT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
z1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
s=Math.pow(256,e)
c.toString
r=H.cR(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ag(n-1,p)
t.ag(a,8)}return t.b1(b)},
z0:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
rX:function(a){return new V.lq(a)},
rW:function(a){return new V.lp(a)},
yY:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
s=d.gcL()
r=C.f.ai(Math.log(H.kk(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ag(m-1,o)
t.ag(a,r)}return t.b1(b)},
yX:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
rV:function(a){return new V.lo(a)},
rU:function(a){return new V.ln(a)},
z_:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
s=d.gcL()
r=C.f.ai(Math.log(H.kk(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ai(Math.log(n)/0.6931471805599453)+1
t.ag(k-1,5)
t.ag(n-1,k)
t.ag(a,r)}return t.b1(b)},
yZ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
lq:function lq(a){this.a=a},
lp:function lp(a){this.a=a},
lo:function lo(a){this.a=a},
ln:function ln(a){this.a=a}},Z={li:function li(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
z9:function(){var t,s
if(!$.vv)$.vv=!0
else return
t=[P.B]
s=new Y.oV(H.a([],t))
$.tb=s
Z.cP(s,"txt",null)
Z.cP($.tb,"vert","x-shader/x-vertex")
Z.cP($.tb,"frag","x-shader/x-fragment")
$.z8=new Y.nU(H.a([],t))
$.vx=new Y.kR(H.a([],t))
s=new B.pC(H.a([],t))
$.vz=s
Z.cP(s,"zip",null)
Z.cP($.vz,"bundle",null)
s=new U.pt(H.a([],t))
$.zh=s
Z.cP(s,"words",null)
s=new Q.nJ(H.a([],t))
$.vy=s
Z.cP(s,"png",null)
Z.cP($.vy,"jpg","image/jpeg")
$.zf=new Q.nG(H.a([],t))
s=new M.ok(H.a([],t))
$.zg=s
Z.cP(s,"psprite",null)
s=new V.m0(H.a([],t))
$.ta=s
Z.cP(s,"ttf",null)
Z.cP($.ta,"otf",null)
Z.cP($.ta,"woff",null)
s=new Y.nq(null,H.a([],t))
$.zc=s
Z.cP(s,"obj",null)
s=new U.n2(H.a([],t))
$.za=s
Z.cP(s,"mp3",null)
$.zb=new U.oI(H.a([],t))
s=new U.nu(H.a([],t))
$.zd=s
Z.cP(s,"ogg",null)
$.ze=new U.oJ(H.a([],t))},
cP:function(a,b,c){$.$get$m1().i(0,b,new Z.ir(a,c,[null,null]))
a.a.push(b)},
vw:function(a){var t
if($.$get$m1().Y(0,a)){t=$.$get$m1().n(0,a)
if(t.a instanceof O.c8)return t
throw H.k("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.y(a))},
ir:function ir(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
n1:function n1(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
tM:function tM(){},
tI:function tI(){},
tJ:function tJ(){}},X={is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ib:function ib(){},ma:function ma(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={ab:function ab(){},mI:function mI(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},nO:function nO(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},nY:function nY(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},of:function of(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},og:function og(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},p0:function p0(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
F1:function(a){var t,s,r,q,p,o,n,m,l
t=J.cK(a)
s=new W.k7(document.querySelectorAll("link"),[null])
for(r=new H.ew(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.az(q)
if(!!p.$isht&&q.rel==="stylesheet"){o=$.$get$nE()
H.y(p.gad(q))
o.toString
o=t.length
n=Math.min(o,J.cl(p.gad(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.i8(p.gad(q),m)){l=C.c.af(t,m)
$.$get$nE().toString
return l.split("/").length-1}continue}}}$.$get$nE().b9(C.n,"Didn't find a css link to derive relative path")
return 0},
u9:function(){var t=P.wY()
if(!$.$get$nD().Y(0,t))$.$get$nD().i(0,t,N.F1(t))
return $.$get$nD().n(0,t)}},E={iE:function iE(){},nt:function nt(){},N:function N(a,b,c){this.a=a
this.b=b
this.c=c},fN:function fN(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kA:function kA(a,b,c){this.a=a
this.b=b
this.c=c},nc:function nc(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},nT:function nT(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},o1:function o1(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},po:function po(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1}},B={m8:function m8(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
cQ:function(a){var t=a.f
if($.$get$jl().Y(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cK($.$get$jl().n(0,t))+".")
$.$get$jl().i(0,t,a)},
zz:function(){var t=$.$get$jl()
t=t.gba(t)
return new H.dz(t,new B.mm(),[H.ar(t,"n",0)])},
mm:function mm(){},
ff:function ff(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
pC:function pC(a){this.a=a},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
GE:function(a){return a.bb(0)},
dA:function dA(a){this.a=a},
k_:function k_(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hV:function hV(a,b){this.a=a
this.b=b}},Q={mh:function mh(){},nJ:function nJ(a){this.a=a},nG:function nG(a){this.a=a},mL:function mL(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a4,br,bs,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a4=a4
_.br=br
_.bs=bs
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},nZ:function nZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pn:function pn(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},jG:function jG(){},
J:function(a,b,c){var t=new Q.dW(null,null,[c])
t.d8(a,b,c)
return t},
uE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dY(a,"$isn",[e],"$asn"))if(H.dY(a,"$iscU",[e],"$ascU"))for(s=J.cJ(a.gc_()),r=0;s.F();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gU(a),p=[H.Q(t,0)],r=0;s.F();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gU(a),p=[e],o=[H.Q(t,0)];s.F();){l=s.gO()
if(H.GW(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dY(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.y(J.uZ(l))+" for WeightedList<"+H.y(H.c_(H.dE(e)))+">. Should be "+H.y(H.c_(H.dE(e)))+" or WeightPair<"+H.y(H.c_(H.dE(e)))+">.")}return t},
uF:function(a,b,c,d){return new Q.jY(J.v0(a.gc_(),new Q.pr(c,d,b)),null,[c,d])},
cU:function cU(){},
dW:function dW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hU:function hU(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eO:function eO(){},
hT:function hT(){},
pq:function pq(a,$ti){this.a=a
this.$ti=$ti},
jY:function jY(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(){var t=0,s=P.bp(),r
var $async$o6=P.bx(function(a,b){if(a===1)return P.bu(b,s)
while(true)switch(t){case 0:t=3
return P.cB(A.hv("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o6)
case 3:r=A.hv("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$o6,s)}},G={mO:function mO(x2,y1,y2,p,q,t,u,v,w,B,C,I,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.I=I
_.L=L
_.M=M
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},nL:function nL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yE:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.tT(a,t)
r=P.a0(null,null,null,t)
q=H.a([],[G.d])
for(t=G.ED(),p=J.cJ(t.a),t=new H.eM(p,t.b,[H.Q(t,0)]);t.F();){o=p.gO()
if(o.eh(s))q.push(o)}C.b.eB(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c0)(q),++n){o=q[n]
if(o.eh(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.c0)(p),++l)s.am(0,p[l])}}if(s.a!==0)r.aT(0,s)
return r},
ED:function(){var t=$.$get$c()
t.toString
return new H.dz(t,new G.my(),[H.Q(t,0)])},
a1:function a1(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d:function d(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(){}},F={nd:function nd(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},px:function px(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
EK:function(a){if(a===C.i){window
return C.j.gap(C.j)}if(a===C.n){window
return C.j.ghR()}if(a===C.a_){window
return C.j.ghi()}return P.GZ()},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
tR:function tR(){},
yW:function(a,b,c,d){var t,s,r,q
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bT(s[q])
return t.b1(b)},
yV:function(a,b,c,d){var t,s,r,q,p
t=H.cC(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;++q){p=r.c0()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
yU:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
s=d.gcL()
r=C.f.ai(Math.log(H.kk(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bT(o-1)
t.ag(a,r)}return t.b1(b)},
yT:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ai(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dZ(a,b)
for(o=0;o<c;){n=p.c0()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
yS:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dp(new P.cb(""),0,0)
t.ag(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bT(p-1)
t.bT(a)}return t.b1(b)},
yR:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cC(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dZ(a,b)
for(q=0;q<c;){p=r.c0()+1
o=r.c0()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
wC:function(a){var t,s
if(a.gm(a).aA(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.ghY(s).gi8().e3("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
Ft:function(a){return R.wC(a)&&R.Fh(a)},
Fe:function(a){a.ga9(a).gbl()
return!1},
Fs:function(a){a.ga9(a).gbl()
return!1},
Fh:function(a){a.ga9(a).gbl()
return!1},
Fr:function(a){a.ga9(a).gbl()
return!1},
Fq:function(a){return a.ga9(a).gbm().gi7()},
Fo:function(a){return a.ga9(a).gbm().gi5()},
Fm:function(a){return a.ga9(a).gbm().gi4()},
Fi:function(a){return a.ga9(a).gbm().gi2()},
Fk:function(a){return a.ga9(a).gbm().gi3()},
Fp:function(a){return a.ga9(a).gbm().gi6()},
Fj:function(a){var t=a.ga9(a)
t.gbl()
t.gbl()
return!1},
Fl:function(a){return a.ga9(a).ghn()},
Fn:function(a){a.ga9(a).ghn()
return!1},
Ff:function(a){return!0},
Fg:function(a){a.ga9(a).gi_()
return!1},
nP:function nP(){},
Z:function Z(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
M:function M(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a4:function a4(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bF:function bF(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
oO:function oO(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1},
hi:function hi(){},
u8:function u8(){},
u7:function u7(){}},D={oR:function oR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
G0:function(){var t,s
if($.wH)return
$.wH=!0
t=new D.cj("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=0
$.wG=t
t=new D.cj("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.FZ=t
t=new D.k0(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=2.5
t.Q=1
$.hQ=t
t=new D.k0(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
t.y=2.5
$.eE=t
t=new D.cj("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.FY=t
t=new D.cj("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.eF=t
t=new D.nW("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.ea=t
t=new D.cj("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.d6=t
t=new D.cj("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.eD=t
t=new D.cj("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.hO=t
t=new D.cj("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.hP=t
t=new D.cj("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.dy=t
t=new D.cj("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cG().push(t)
$.cu=t
t=P.B
s=D.cj
$.G_=H.yG(P.EG($.$get$cG(),new D.om(),new D.on(),t,s),t,s)},
us:function(){var t=$.$get$cG()
return new H.dz(t,new D.oo(),[H.Q(t,0)])},
om:function om(){},
on:function on(){},
oo:function oo(){},
cj:function cj(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
k0:function k0(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
nW:function nW(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tO.prototype={}
J.f.prototype={
R:function(a,b){return a===b},
ga3:function(a){return H.eA(a)},
A:function(a){return H.jJ(a)},
gaa:function(a){return new H.dV(H.kn(a),null)},
$ishi:1,
$isac:1,
$isfp:1,
$isac:1,
$ismE:1,
$isf:1,
$ismE:1,
$isf:1,
$ishz:1,
$isac:1}
J.mC.prototype={
A:function(a){return String(a)},
ga3:function(a){return a?519018:218159},
gaa:function(a){return C.af},
$isd9:1}
J.mD.prototype={
R:function(a,b){return null==b},
A:function(a){return"null"},
ga3:function(a){return 0},
gaa:function(a){return C.a9},
$iscS:1}
J.hr.prototype={
ga3:function(a){return 0},
gaa:function(a){return C.a8},
A:function(a){return String(a)},
$ismE:1,
h:function(a,b){return a.add(b)},
am:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb3:function(a){return a.width},
gaX:function(a){return a.height},
hy:function(a,b){return a.parse(b)},
ez:function(a,b){return a.setLogging(b)},
eA:function(a,b){return a.setMaterials(b)}}
J.nI.prototype={}
J.eJ.prototype={}
J.eu.prototype={
A:function(a){var t=a[$.$get$ve()]
return t==null?this.eG(a):J.cK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.es.prototype={
bW:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cB:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cB(a,"add")
a.push(b)},
bG:function(a,b){return new H.dz(a,b,[H.Q(a,0)])},
a5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bQ(a))}},
au:function(a,b){return new H.fl(a,b,[H.Q(a,0),null])},
bg:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
d1:function(a,b){return H.wJ(a,b,null,H.Q(a,0))},
h7:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bQ(a))}return s},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
c6:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.by(c))
if(c<b||c>a.length)throw H.k(P.bG(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.Q(a,0)])
return H.a(a.slice(b,c),[H.Q(a,0)])},
ga9:function(a){if(a.length>0)return a[0]
throw H.k(H.jr())},
gb8:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.jr())},
a7:function(a,b,c,d,e){var t,s,r
this.bW(a,"setRange")
P.di(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aZ(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.wi())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bX:function(a,b,c,d){var t
this.bW(a,"fill range")
P.di(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
az:function(a,b,c,d){var t,s,r,q,p,o
this.cB(a,"replaceRange")
P.di(b,c,a.length,null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aw(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aw(a,b,r,d)}},
h5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bQ(a))}return!0},
d2:function(a,b){var t
this.bW(a,"sort")
t=b==null?P.GY():b
H.jP(a,0,a.length-1,t)},
eB:function(a){return this.d2(a,null)},
aY:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b_(a[t],b))return t
return-1},
bf:function(a,b){return this.aY(a,b,0)},
ac:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
gV:function(a){return a.length===0},
A:function(a){return P.jq(a,"[","]")},
a0:function(a,b){var t=H.a(a.slice(0),[H.Q(a,0)])
return t},
an:function(a){return this.a0(a,!0)},
gU:function(a){return new J.i9(a,a.length,0,null,[H.Q(a,0)])},
ga3:function(a){return H.eA(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cB(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e_(b,"newLength",null))
if(b<0)throw H.k(P.bG(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c5(a,b))
if(b>=a.length||b<0)throw H.k(H.c5(a,b))
return a[b]},
i:function(a,b,c){this.bW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c5(a,b))
if(b>=a.length||b<0)throw H.k(H.c5(a,b))
a[b]=c},
$isax:1,
$asax:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
J.tN.prototype={}
J.i9.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.c0(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fk.prototype={
ax:function(a,b){var t
if(typeof b!=="number")throw H.k(H.by(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcI(b)
if(this.gcI(a)===t)return 0
if(this.gcI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcI:function(a){return a===0?1/a<0:a<0},
ai:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
bB:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.ax(b,c)>0)throw H.k(H.by(b))
if(this.ax(a,b)<0)return b
if(this.ax(a,c)>0)return c
return a},
l:function(a){return a},
bD:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bG(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.X(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aZ(new P.V("Unexpected toString result: "+t))
r=J.bf(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.aq("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga3:function(a){return a&0x1FFFFFFF},
cY:function(a){return-a},
T:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a+b},
aq:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a*b},
bI:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
as:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
if(b<0)throw H.k(H.by(b))
return b>31?0:a<<b>>>0},
ao:function(a,b){return b>31?0:a<<b>>>0},
aS:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fE:function(a,b){if(b<0)throw H.k(H.by(b))
return b>31?0:a>>>b},
dK:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a>b},
ar:function(a,b){if(typeof b!=="number")throw H.k(H.by(b))
return a>=b},
gaa:function(a){return C.ai},
$isdm:1}
J.ju.prototype={
gaa:function(a){return C.ah},
$isW:1,
$isdm:1,
$isC:1}
J.jt.prototype={
gaa:function(a){return C.ag},
$isW:1,
$isdm:1}
J.et.prototype={
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c5(a,b))
if(b<0)throw H.k(H.c5(a,b))
if(b>=a.length)H.aZ(H.c5(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(b>=a.length)throw H.k(H.c5(a,b))
return a.charCodeAt(b)},
cv:function(a,b,c){if(c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
return new H.qN(b,a,c)},
aU:function(a,b){return this.cv(a,b,0)},
e7:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.X(b,c+s)!==this.a2(a,s))return
return new H.jU(c,b,a)},
T:function(a,b){if(typeof b!=="string")throw H.k(P.e_(b,null,null))
return a+b},
h4:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.af(a,s-t)},
cS:function(a,b,c){return H.xL(a,b,c)},
hK:function(a,b,c){return H.Ht(a,b,c,null)},
eC:function(a,b){if(b==null)H.aZ(H.by(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hq&&b.gdw().exec("").length-2===0)return a.split(b.gfq())
else return this.f8(a,b)},
az:function(a,b,c,d){var t,s
H.uM(b)
c=P.di(b,c,a.length,null,null,null)
H.uM(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
f8:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xP(b,a),s=s.gU(s),r=0,q=1;s.F();){p=s.gO()
o=p.gd3(p)
n=p.gdW(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.af(a,r))
return t},
aB:function(a,b,c){var t
H.uM(c)
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.y2(b,a,c)!=null},
ae:function(a,b){return this.aB(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aZ(H.by(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aZ(H.by(c))
if(typeof b!=="number")return b.a1()
if(b<0)throw H.k(P.jL(b,null,null))
if(typeof c!=="number")return H.ag(c)
if(b>c)throw H.k(P.jL(b,null,null))
if(c>a.length)throw H.k(P.jL(c,null,null))
return a.substring(b,c)},
af:function(a,b){return this.K(a,b,null)},
hQ:function(a){return a.toUpperCase()},
bh:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a2(t,0)===133){r=J.EE(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.X(t,q)===133?J.tK(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ei:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.X(t,r)===133)s=J.tK(t,r)}else{s=J.tK(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aq:function(a,b){var t,s
if(typeof b!=="number")return H.ag(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.K)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aY:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bf:function(a,b){return this.aY(a,b,0)},
hq:function(a,b,c){var t
if(b==null)H.aZ(H.by(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aZ(P.bG(t,0,c,null,null))
if(b.cf(a,t)!=null)return t}return-1},
e4:function(a,b){return this.hq(a,b,null)},
dU:function(a,b,c){if(c>a.length)throw H.k(P.bG(c,0,a.length,null,null))
return H.Hs(a,b,c)},
ac:function(a,b){return this.dU(a,b,0)},
gV:function(a){return a.length===0},
ax:function(a,b){var t
if(typeof b!=="string")throw H.k(H.by(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga3:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gaa:function(a){return C.aa},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c5(a,b))
if(b>=a.length||b<0)throw H.k(H.c5(a,b))
return a[b]},
$isax:1,
$asax:function(){},
$isB:1}
H.kV.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.X(this.a,b)},
$ashS:function(){return[P.C]},
$asjv:function(){return[P.C]},
$ashJ:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.ev.prototype={
gU:function(a){return new H.ew(this,this.gm(this),0,null,[H.ar(this,"ev",0)])},
a5:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.S(0,s))
if(t!==this.gm(this))throw H.k(new P.bQ(this))}},
gV:function(a){return this.gm(this)===0},
ga9:function(a){if(this.gm(this)===0)throw H.k(H.jr())
return this.S(0,0)},
ac:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b_(this.S(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bQ(this))}return!1},
bG:function(a,b){return this.eF(0,b)},
au:function(a,b){return new H.fl(this,b,[H.ar(this,"ev",0),null])},
a0:function(a,b){var t,s,r
t=H.a([],[H.ar(this,"ev",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.S(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
an:function(a){return this.a0(a,!0)}}
H.oM.prototype={
gf9:function(){var t=J.cl(this.a)
return t},
gfF:function(){var t,s
t=J.cl(this.a)
s=this.b
if(J.cy(s,t))return t
return s},
gm:function(a){var t,s
t=J.cl(this.a)
s=this.b
if(J.uT(s,t))return 0
if(typeof s!=="number")return H.ag(s)
return t-s},
S:function(a,b){var t=J.ed(this.gfF(),b)
if(J.ee(b,0)||J.uT(t,this.gf9()))throw H.k(P.bA(b,this,"index",null,null))
return J.uW(this.a,t)},
a0:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bf(s)
q=r.gm(s)
if(typeof t!=="number")return H.ag(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.S(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bQ(this))}return n},
an:function(a){return this.a0(a,!0)},
eO:function(a,b,c,d){var t=this.b
if(J.ee(t,0))H.aZ(P.bG(t,0,null,"start",null))}}
H.ew.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.bf(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bQ(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.S(t,q);++this.c
return!0}}
H.hy.prototype={
gU:function(a){return new H.jx(null,J.cJ(this.a),this.b,this.$ti)},
gm:function(a){return J.cl(this.a)},
gV:function(a){return J.rG(this.a)},
$asn:function(a,b){return[b]}}
H.h1.prototype={$ist:1,
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jx.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$asjs:function(a,b){return[b]}}
H.fl.prototype={
gm:function(a){return J.cl(this.a)},
S:function(a,b){return this.b.$1(J.uW(this.a,b))},
$asev:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.dz.prototype={
gU:function(a){return new H.eM(J.cJ(this.a),this.b,this.$ti)},
au:function(a,b){return new H.hy(this,b,[H.Q(this,0),null])}}
H.eM.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.iB.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
az:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.pa.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bX:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
H.hS.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
H.rD.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rE.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qr.prototype={}
H.fB.prototype={
dQ:function(a,b){if(!this.f.R(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.ct()},
hJ:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.w(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.w(p,q)
p[q]=r
if(q===s.c)s.dq();++s.d}this.y=!1}this.ct()},
fJ:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.az(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.az(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aZ(new P.V("removeRange"))
P.di(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ey:function(a,b){if(!this.r.R(0,a))return
this.db=b},
hd:function(a,b,c){var t=J.az(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){J.fK(a,c)
return}t=this.cx
if(t==null){t=P.tU(null,null)
this.cx=t}t.aI(0,new H.qm(a,c))},
hc:function(a,b){var t
if(!this.r.R(0,a))return
t=J.az(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.bY()
return}t=this.cx
if(t==null){t=P.tU(null,null)
this.cx=t}t.aI(0,this.ghp())},
he:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fI(a)
if(b!=null)P.fI(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cK(a)
s[1]=b==null?null:J.cK(b)
for(r=new P.dB(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fK(r.d,s)},
bq:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cx(o)
p=H.cw(o)
this.he(q,p)
if(this.db===!0){this.bY()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gho()
if(this.cx!=null)for(;n=this.cx,!n.gV(n);)this.cx.ec().$0()}return s},
cJ:function(a){return this.b.n(0,a)},
da:function(a,b){var t=this.b
if(t.Y(0,a))throw H.k(P.lr("Registry: ports must be registered only once."))
t.i(0,a,b)},
ct:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bY()},
bY:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bd(0)
for(t=this.b,s=t.gba(t),s=s.gU(s);s.F();)s.gO().f1()
t.bd(0)
this.c.bd(0)
u.globalState.z.am(0,this.a)
this.dx.bd(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fK(q,t[p])}this.ch=null}},
gho:function(){return this.d},
gfU:function(){return this.e}}
H.qm.prototype={
$0:function(){J.fK(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pY.prototype={
fZ:function(){var t=this.a
if(t.b===t.c)return
return t.ec()},
eg:function(){var t,s,r
t=this.fZ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Y(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gV(s)}else s=!1
else s=!1
else s=!1
if(s)H.aZ(P.lr("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gV(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hu(["command","close"])
r=new H.dC(!0,new P.kb(0,null,null,null,null,null,0,[null,P.C])).av(r)
s.toString
self.postMessage(r)}return!1}t.hE()
return!0},
dF:function(){if(self.window!=null)new H.pZ(this).$0()
else for(;this.eg(););},
bC:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dF()
else try{this.dF()}catch(r){t=H.cx(r)
s=H.cw(r)
q=u.globalState.Q
p=P.hu(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dC(!0,P.i0(null,P.C)).av(p)
q.toString
self.postMessage(p)}}}
H.pZ.prototype={
$0:function(){if(!this.a.eg())return
P.wL(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.eR.prototype={
hE:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bq(this.b)}}
H.qq.prototype={}
H.mn.prototype={
$0:function(){H.zD(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mo.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fH(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fH(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.ct()},
$S:function(){return{func:1,v:true}}}
H.pK.prototype={}
H.fC.prototype={
b5:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdv())return
r=H.GA(b)
if(t.gfU()===s){s=J.bf(r)
switch(s.n(r,0)){case"pause":t.dQ(s.n(r,1),s.n(r,2))
break
case"resume":t.hJ(s.n(r,1))
break
case"add-ondone":t.fJ(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hH(s.n(r,1))
break
case"set-errors-fatal":t.ey(s.n(r,1),s.n(r,2))
break
case"ping":t.hd(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hc(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.aI(0,new H.eR(t,new H.qt(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.fC&&J.b_(this.b,b.b)},
ga3:function(a){return this.b.gcj()}}
H.qt.prototype={
$0:function(){var t=this.a.b
if(!t.gdv())t.eY(0,this.b)},
$S:function(){return{func:1}}}
H.i3.prototype={
b5:function(a,b){var t,s,r
t=P.hu(["command","message","port",this,"msg",b])
s=new H.dC(!0,P.i0(null,P.C)).av(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.i3&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
ga3:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.as()
s=this.a
if(typeof s!=="number")return s.as()
r=this.c
if(typeof r!=="number")return H.ag(r)
return(t<<16^s<<8^r)>>>0}}
H.fs.prototype={
f1:function(){this.c=!0
this.b=null},
eY:function(a,b){if(this.c)return
this.b.$1(b)},
$isFu:1,
gcj:function(){return this.a},
gdv:function(){return this.c}}
H.p2.prototype={
eP:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aI(0,new H.eR(s,new H.p3(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dl(new H.p4(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.p3.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.p4.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dH.prototype={
ga3:function(a){var t=this.a
if(typeof t!=="number")return t.d0()
t=C.d.aS(t,0)^C.d.al(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dH){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcj:function(){return this.a}}
H.dC.prototype={
av:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.az(a)
if(!!t.$isfm)return["buffer",a]
if(!!t.$isey)return["typed",a]
if(!!t.$isax)return this.eu(a)
if(!!t.$iszA){r=this.geq()
q=t.gb7(a)
q=H.du(q,r,H.ar(q,"n",0),null)
q=P.d3(q,!0,H.ar(q,"n",0))
t=t.gba(a)
t=H.du(t,r,H.ar(t,"n",0),null)
return["map",q,P.d3(t,!0,H.ar(t,"n",0))]}if(!!t.$ismE)return this.ev(a)
if(!!t.$isf)this.ej(a)
if(!!t.$isFu)this.bF(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfC)return this.ew(a)
if(!!t.$isi3)return this.ex(a)
if(!!t.$isf0){p=a.$static_name
if(p==null)this.bF(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdH)return["capability",a.a]
if(!(a instanceof P.ac))this.ej(a)
return["dart",u.classIdExtractor(a),this.es(u.classFieldsExtractor(a))]},
bF:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.y(a)))},
ej:function(a){return this.bF(a,null)},
eu:function(a){var t=this.er(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bF(a,"Can't serialize indexable: ")},
er:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.av(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
es:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.av(a[t]))
return a},
ev:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bF(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.av(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
ex:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ew:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcj()]
return["raw sendport",a]}}
H.eP.prototype={
aV:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dG("Bad serialized message: "+H.y(a)))
switch(C.b.ga9(a)){case"ref":if(1>=a.length)return H.w(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.w(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bo(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bo(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bo(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bo(r),[null])
s.fixed$length=Array
return s
case"map":return this.h2(a)
case"sendport":return this.h3(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h1(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dH(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bo(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.y(a))}},
bo:function(a){var t,s,r
t=J.bf(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
if(!(s<r))break
t.i(a,s,this.aV(t.n(a,s)));++s}return a},
h2:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.mT()
this.b.push(q)
s=J.y7(J.v0(s,this.gh0()))
for(t=J.bf(s),p=J.bf(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aV(p.n(r,o)))
return q},
h3:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cJ(q)
if(o==null)return
n=new H.fC(o,r)}else n=new H.i3(s,q,r)
this.b.push(n)
return n},
h1:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bf(s)
p=J.bf(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.ag(n)
if(!(o<n))break
q[t.n(s,o)]=this.aV(p.n(r,o));++o}return q}}
H.kZ.prototype={
$aseK:function(){},
$asjw:function(){},
$asbe:function(){},
$isbe:1}
H.kY.prototype={
gV:function(a){return this.gm(this)===0},
A:function(a){return P.wq(this)},
i:function(a,b,c){return H.yH()},
$isbe:1,
$asbe:null}
H.fX.prototype={
gm:function(a){return this.a},
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Y(0,b))return
return this.ci(b)},
ci:function(a){return this.b[a]},
a5:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.ci(q))}}}
H.l_.prototype={
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
ci:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.nV.prototype={}
H.p7.prototype={
aD:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.jD.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.mH.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.p9.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ha.prototype={
gaG:function(){return this.b}}
H.rF.prototype={
$1:function(a){if(!!J.az(a).$isei)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.ke.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rq.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rr.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rs.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rt.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ru.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f0.prototype={
A:function(a){return"Closure '"+H.nN(this).trim()+"'"},
ghW:function(){return this},
$D:null}
H.oQ.prototype={}
H.ol.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fQ.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga3:function(a){var t,s
t=this.c
if(t==null)s=H.eA(this.a)
else s=typeof t!=="object"?J.dF(t):H.eA(t)
t=H.eA(this.b)
if(typeof s!=="number")return s.hZ()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.jJ(t)}}
H.kT.prototype={
A:function(a){return this.a}}
H.o_.prototype={
A:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dV.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga3:function(a){return J.dF(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.dV&&J.b_(this.a,b.a)}}
H.v.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gb7:function(a){return new H.mR(this,[H.Q(this,0)])},
gba:function(a){return H.du(this.gb7(this),new H.mG(this),H.Q(this,0),H.Q(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dj(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dj(s,b)}else return this.hj(b)},
hj:function(a){var t=this.d
if(t==null)return!1
return this.bw(this.bL(t,this.bv(a)),a)>=0},
aT:function(a,b){b.a5(0,new H.mF(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bk(t,b)
return s==null?null:s.gaW()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bk(r,b)
return s==null?null:s.gaW()}else return this.hk(b)},
hk:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bL(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
return s[r].gaW()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cl()
this.b=t}this.d9(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cl()
this.c=s}this.d9(s,b,c)}else this.hm(b,c)},
hm:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cl()
this.d=t}s=this.bv(a)
r=this.bL(t,s)
if(r==null)this.cr(t,s,[this.cm(a,b)])
else{q=this.bw(r,a)
if(q>=0)r[q].saW(b)
else r.push(this.cm(a,b))}},
am:function(a,b){if(typeof b==="string")return this.dE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dE(this.c,b)
else return this.hl(b)},
hl:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bL(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dN(q)
return q.gaW()},
bd:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.k(new P.bQ(this))
t=t.c}},
d9:function(a,b,c){var t=this.bk(a,b)
if(t==null)this.cr(a,b,this.cm(b,c))
else t.saW(c)},
dE:function(a,b){var t
if(a==null)return
t=this.bk(a,b)
if(t==null)return
this.dN(t)
this.dm(a,b)
return t.gaW()},
cm:function(a,b){var t,s
t=new H.mQ(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dN:function(a){var t,s
t=a.gfw()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bv:function(a){return J.dF(a)&0x3ffffff},
bw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].ge2(),b))return s
return-1},
A:function(a){return P.wq(this)},
bk:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
cr:function(a,b,c){a[b]=c},
dm:function(a,b){delete a[b]},
dj:function(a,b){return this.bk(a,b)!=null},
cl:function(){var t=Object.create(null)
this.cr(t,"<non-identifier-key>",t)
this.dm(t,"<non-identifier-key>")
return t},
$iszA:1,
$isbe:1,
$asbe:null}
H.mG.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mF.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eT(function(a,b){return{func:1,args:[a,b]}},this.a,"v")}}
H.mQ.prototype={
ge2:function(){return this.a},
gaW:function(){return this.b},
gfw:function(){return this.d},
saW:function(a){return this.b=a}}
H.mR.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gU:function(a){var t,s
t=this.a
s=new H.mS(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ac:function(a,b){return this.a.Y(0,b)},
a5:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bQ(t))
s=s.c}}}
H.mS.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bQ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rm.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rn.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.ro.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hq.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdz:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tL(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdw:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tL(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cv:function(a,b,c){if(c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
return new H.pF(this,b,c)},
aU:function(a,b){return this.cv(a,b,0)},
fa:function(a,b){var t,s
t=this.gdz()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kc(this,s)},
cf:function(a,b){var t,s
t=this.gdw()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.kc(this,s)},
e7:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bG(c,0,b.length,null,null))
return this.cf(b,c)},
$isFw:1,
gfq:function(){return this.b}}
H.kc.prototype={
gd3:function(a){return this.b.index},
gdW:function(a){var t=this.b
return t.index+t[0].length},
bb:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdv:1}
H.pF.prototype={
gU:function(a){return new H.k2(this.a,this.b,this.c,null)},
$ashp:function(){return[P.dv]},
$asn:function(){return[P.dv]}}
H.k2.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fa(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jU.prototype={
gdW:function(a){return this.a+this.c.length},
n:function(a,b){return this.bb(b)},
bb:function(a){if(a!==0)throw H.k(P.jL(a,null,null))
return this.c},
$isdv:1,
gd3:function(a){return this.a}}
H.qN.prototype={
gU:function(a){return new H.qO(this.a,this.b,this.c,null)},
$asn:function(){return[P.dv]}}
H.qO.prototype={
F:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.jU(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gO:function(){return this.d}}
H.fm.prototype={
gaa:function(a){return C.a1},
fP:function(a,b,c){return H.cR(a,b,c)},
fO:function(a){return this.fP(a,0,null)},
fN:function(a,b,c){var t
H.xi(a,b,c)
t=new DataView(a,b)
return t},
fM:function(a,b){return this.fN(a,b,null)},
$isfm:1,
$isbg:1,
ge5:function(a){return a.byteLength}}
H.ey.prototype={
fn:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.e_(b,d,"Invalid list position"))
else throw H.k(P.bG(b,0,c,d,null))},
de:function(a,b,c,d){if(b>>>0!==b||b>c)this.fn(a,b,c,d)},
$isey:1,
gbU:function(a){return a.buffer},
ge5:function(a){return a.byteLength}}
H.nf.prototype={
gaa:function(a){return C.a2}}
H.jA.prototype={
gm:function(a){return a.length},
dJ:function(a,b,c,d,e){var t,s,r
t=a.length
this.de(a,b,t,"start")
this.de(a,c,t,"end")
if(typeof b!=="number")return b.aA()
if(typeof c!=="number")return H.ag(c)
if(b>c)throw H.k(P.bG(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a1()
if(e<0)throw H.k(P.dG(e))
r=d.length
if(r-e<s)throw H.k(new P.dT("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaG:1,
$asaG:function(){},
$isax:1,
$asax:function(){}}
H.hC.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.az(d).$ishC){this.dJ(a,b,c,d,e)
return}this.d5(a,b,c,d,e)},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hE.prototype={
$asaG:function(){},
$asax:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]},
$isp:1,
$ist:1,
$isn:1}
H.hG.prototype={
$asaG:function(){},
$asax:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]}}
H.hD.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.az(d).$ishD){this.dJ(a,b,c,d,e)
return}this.d5(a,b,c,d,e)},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.hF.prototype={
$asaG:function(){},
$asax:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$ist:1,
$isn:1}
H.hH.prototype={
$asaG:function(){},
$asax:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.ng.prototype={
gaa:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.nh.prototype={
gaa:function(a){return C.a4},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.ni.prototype={
gaa:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nj.prototype={
gaa:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nk.prototype={
gaa:function(a){return C.a7},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nl.prototype={
gaa:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nm.prototype={
gaa:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.jB.prototype={
gaa:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.fn.prototype={
gaa:function(a){return C.ae},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
c6:function(a,b,c){return new Uint8Array(a.subarray(b,H.Gz(b,c,a.length)))},
$isfn:1,
$isd8:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.pH.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pG.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pI.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pJ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.r1.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r2.prototype={
$2:function(a,b){this.a.$2(1,new H.ha(a,b))},
$S:function(){return{func:1,args:[,P.dS]}}}
P.rc.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.co.prototype={}
P.rd.prototype={
$0:function(){var t,s,r
try{this.b.aC(this.a.$0())}catch(r){t=H.cx(r)
s=H.cw(r)
P.xj(this.b,t,s)}},
$S:function(){return{func:1}}}
P.m3.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ak(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.m2.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.di(r)}else if(t.b===0&&!this.b)this.d.ak(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f1.prototype={}
P.k4.prototype={
cC:function(a,b){if(a==null)a=new P.fo()
if(this.a.a!==0)throw H.k(new P.dT("Future already completed"))
$.an.toString
this.ak(a,b)},
bn:function(a){return this.cC(a,null)},
$isf1:1,
gha:function(){return this.a}}
P.dX.prototype={
ay:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dT("Future already completed"))
t.dc(b)},
fS:function(a){return this.ay(a,null)},
ak:function(a,b){this.a.dd(a,b)}}
P.kg.prototype={
ay:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dT("Future already completed"))
t.aC(b)},
ak:function(a,b){this.a.ak(a,b)}}
P.k8.prototype={
gfI:function(){return this.b.b},
gdZ:function(){return(this.c&1)!==0},
ghh:function(){return(this.c&2)!==0},
gdY:function(){return this.c===8},
hf:function(a){return this.b.b.cT(this.d,a)},
hr:function(a){if(this.c!==6)return!0
return this.b.b.cT(this.d,J.fJ(a))},
hb:function(a){var t,s,r
t=this.e
s=J.bo(a)
r=this.b.b
if(H.fH(t,{func:1,args:[,,]}))return r.hN(t,s.gap(a),a.gaG())
else return r.cT(t,s.gap(a))},
hg:function(){return this.b.b.ee(this.d)},
gcn:function(){return this.a}}
P.bk.prototype={
gfo:function(){return this.a===2},
gck:function(){return this.a>=4},
c2:function(a,b){var t=$.an
if(t!==C.e){t.toString
if(b!=null)b=P.xm(b,t)}return this.cs(a,b)},
b0:function(a){return this.c2(a,null)},
cs:function(a,b){var t,s
t=new P.bk(0,$.an,null,[null])
s=b==null?1:3
this.c7(new P.k8(null,t,s,a,b,[H.Q(this,0),null]))
return t},
c4:function(a){var t,s
t=$.an
s=new P.bk(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.Q(this,0)
this.c7(new P.k8(null,s,8,a,null,[t,t]))
return s},
c7:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gck()){s.c7(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fF(null,null,t,new P.q3(this,a))}},
dD:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcn()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gck()){p.dD(a)
return}this.a=p.a
this.c=p.c}t.a=this.bQ(a)
s=this.b
s.toString
P.fF(null,null,s,new P.qb(t,this))}},
bP:function(){var t=this.c
this.c=null
return this.bQ(t)},
bQ:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcn()
t.a=s}return s},
aC:function(a){var t,s
t=this.$ti
if(H.dY(a,"$isco",t,"$asco"))if(H.dY(a,"$isbk",t,null))P.q6(a,this)
else P.x8(a,this)
else{s=this.bP()
this.a=4
this.c=a
P.fA(this,s)}},
di:function(a){var t=this.bP()
this.a=4
this.c=a
P.fA(this,t)},
ak:function(a,b){var t=this.bP()
this.a=8
this.c=new P.eX(a,b)
P.fA(this,t)},
f3:function(a){return this.ak(a,null)},
dc:function(a){var t
if(H.dY(a,"$isco",this.$ti,"$asco")){this.f0(a)
return}this.a=1
t=this.b
t.toString
P.fF(null,null,t,new P.q5(this,a))},
f0:function(a){var t
if(H.dY(a,"$isbk",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fF(null,null,t,new P.qa(this,a))}else P.q6(a,this)
return}P.x8(a,this)},
dd:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fF(null,null,t,new P.q4(this,a,b))},
$isco:1,
gbR:function(){return this.a},
gfB:function(){return this.c}}
P.q3.prototype={
$0:function(){P.fA(this.a,this.b)},
$S:function(){return{func:1}}}
P.qb.prototype={
$0:function(){P.fA(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q7.prototype={
$1:function(a){var t=this.a
t.a=0
t.aC(a)},
$S:function(){return{func:1,args:[,]}}}
P.q8.prototype={
$2:function(a,b){this.a.ak(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q9.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.q5.prototype={
$0:function(){this.a.di(this.b)},
$S:function(){return{func:1}}}
P.qa.prototype={
$0:function(){P.q6(this.b,this.a)},
$S:function(){return{func:1}}}
P.q4.prototype={
$0:function(){this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.qe.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hg()}catch(q){s=H.cx(q)
r=H.cw(q)
if(this.c){p=J.fJ(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eX(s,r)
o.a=!0
return}if(!!J.az(t).$isco){if(t instanceof P.bk&&t.gbR()>=4){if(t.gbR()===8){p=this.b
p.b=t.gfB()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b0(new P.qf(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qf.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qd.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hf(this.c)}catch(r){t=H.cx(r)
s=H.cw(r)
q=this.a
q.b=new P.eX(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hr(t)===!0&&q.e!=null){p=this.b
p.b=q.hb(t)
p.a=!1}}catch(o){s=H.cx(o)
r=H.cw(o)
q=this.a
p=J.fJ(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eX(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k3.prototype={}
P.dj.prototype={
au:function(a,b){return new P.qs(b,this,[H.ar(this,"dj",0),null])},
ac:function(a,b){var t,s
t={}
s=new P.bk(0,$.an,null,[P.d9])
t.a=null
t.a=this.aL(new P.ot(t,this,b,s),!0,new P.ou(s),s.gbc())
return s},
a5:function(a,b){var t,s
t={}
s=new P.bk(0,$.an,null,[null])
t.a=null
t.a=this.aL(new P.oz(t,this,b,s),!0,new P.oA(s),s.gbc())
return s},
gm:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[P.C])
t.a=0
this.aL(new P.oD(t),!0,new P.oE(t,s),s.gbc())
return s},
gV:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[P.d9])
t.a=null
t.a=this.aL(new P.oB(t,s),!0,new P.oC(s),s.gbc())
return s},
an:function(a){var t,s,r
t=H.ar(this,"dj",0)
s=H.a([],[t])
r=new P.bk(0,$.an,null,[[P.p,t]])
this.aL(new P.oF(this,s),!0,new P.oG(s,r),r.gbc())
return r},
ga9:function(a){var t,s
t={}
s=new P.bk(0,$.an,null,[H.ar(this,"dj",0)])
t.a=null
t.a=this.aL(new P.ov(t,this,s),!0,new P.ow(s),s.gbc())
return s}}
P.ot.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xq(new P.or(this.c,a),new P.os(t,s),P.xh(t.a,s))},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.or.prototype={
$0:function(){return J.b_(this.b,this.a)},
$S:function(){return{func:1}}}
P.os.prototype={
$1:function(a){if(a===!0)P.uJ(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.ou.prototype={
$0:function(){this.a.aC(!1)},
$S:function(){return{func:1}}}
P.oz.prototype={
$1:function(a){P.xq(new P.ox(this.c,a),new P.oy(),P.xh(this.a.a,this.d))},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.ox.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oy.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oA.prototype={
$0:function(){this.a.aC(null)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oE.prototype={
$0:function(){this.b.aC(this.a.a)},
$S:function(){return{func:1}}}
P.oB.prototype={
$1:function(a){P.uJ(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oC.prototype={
$0:function(){this.a.aC(!0)},
$S:function(){return{func:1}}}
P.oF.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.a,"dj")}}
P.oG.prototype={
$0:function(){this.b.aC(this.a)},
$S:function(){return{func:1}}}
P.ov.prototype={
$1:function(a){P.uJ(this.a.a,this.c,a)},
$S:function(){return H.eT(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.ow.prototype={
$0:function(){var t,s,r,q
try{r=H.jr()
throw H.k(r)}catch(q){t=H.cx(q)
s=H.cw(q)
P.xj(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oq.prototype={}
P.dk.prototype={
cM:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dR()
if((t&4)===0&&(this.e&32)===0)this.dr(this.gdB())},
ea:function(a){return this.cM(a,null)},
ed:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gV(t)}else t=!1
if(t)this.r.c5(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dr(this.gdC())}}}},
bV:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c9()
t=this.f
return t==null?$.$get$hj():t},
c9:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dR()
if((this.e&32)===0)this.r=null
this.f=this.dA()},
bK:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dG(b)
else this.c8(new P.pS(b,null,[H.ar(this,"dk",0)]))},
bJ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dI(a,b)
else this.c8(new P.pU(a,b,null))},
f_:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dH()
else this.c8(C.L)},
bN:function(){},
bO:function(){},
dA:function(){return},
c8:function(a){var t,s
t=this.r
if(t==null){t=new P.qL(null,null,0,[H.ar(this,"dk",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c5(this)}},
dG:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cU(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ca((t&4)!==0)},
dI:function(a,b){var t,s
t=this.e
s=new P.pM(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c9()
t=this.f
if(!!J.az(t).$isco&&t!==$.$get$hj())t.c4(s)
else s.$0()}else{s.$0()
this.ca((t&4)!==0)}},
dH:function(){var t,s
t=new P.pL(this)
this.c9()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.az(s).$isco&&s!==$.$get$hj())s.c4(t)
else t.$0()},
dr:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ca((t&4)!==0)},
ca:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gV(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gV(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bN()
else this.bO()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c5(this)},
eS:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xm(b,t)
this.c=c},
gbR:function(){return this.e}}
P.pM.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fH(s,{func:1,args:[P.ac,P.dS]})
q=t.d
p=this.b
o=t.b
if(r)q.hO(o,p,this.c)
else q.cU(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pL.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ef(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k6.prototype={
gby:function(a){return this.a},
sby:function(a,b){return this.a=b}}
P.pS.prototype={
cN:function(a){a.dG(this.b)}}
P.pU.prototype={
cN:function(a){a.dI(this.b,this.c)},
$ask6:function(){},
gap:function(a){return this.b},
gaG:function(){return this.c}}
P.pT.prototype={
cN:function(a){a.dH()},
gby:function(a){return},
sby:function(a,b){throw H.k(new P.dT("No events after a done."))}}
P.qu.prototype={
c5:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xI(new P.qv(this,a))
this.a=1},
dR:function(){if(this.a===1)this.a=3},
gbR:function(){return this.a}}
P.qv.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gby(r)
t.b=q
if(q==null)t.c=null
r.cN(this.b)},
$S:function(){return{func:1}}}
P.qL.prototype={
gV:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sby(0,b)
this.c=b}}}
P.qM.prototype={}
P.r4.prototype={
$0:function(){return this.a.ak(this.b,this.c)},
$S:function(){return{func:1}}}
P.r3.prototype={
$2:function(a,b){P.Gy(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dS]}}}
P.r5.prototype={
$0:function(){return this.a.aC(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
aL:function(a,b,c,d){return this.f6(a,d,c,!0===b)},
e6:function(a,b,c){return this.aL(a,null,b,c)},
f6:function(a,b,c,d){return P.Gd(this,a,b,c,d,H.ar(this,"hY",0),H.ar(this,"hY",1))},
ds:function(a,b){b.bK(0,a)},
fl:function(a,b,c){c.bJ(a,b)},
$asdj:function(a,b){return[b]}}
P.hZ.prototype={
bK:function(a,b){if((this.e&2)!==0)return
this.eI(0,b)},
bJ:function(a,b){if((this.e&2)!==0)return
this.eJ(a,b)},
bN:function(){var t=this.y
if(t==null)return
t.ea(0)},
bO:function(){var t=this.y
if(t==null)return
t.ed(0)},
dA:function(){var t=this.y
if(t!=null){this.y=null
return t.bV(0)}return},
fg:function(a){this.x.ds(a,this)},
fk:function(a,b){this.x.fl(a,b,this)},
fi:function(){this.f_()},
eV:function(a,b,c,d,e,f,g){this.y=this.x.a.e6(this.gff(),this.gfh(),this.gfj())},
$asdk:function(a,b){return[b]}}
P.qs.prototype={
ds:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cx(q)
r=H.cw(q)
P.Gx(b,s,r)
return}b.bK(0,t)}}
P.eX.prototype={
A:function(a){return H.y(this.a)},
$isei:1,
gap:function(a){return this.a},
gaG:function(){return this.b}}
P.r0.prototype={}
P.rb.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fo()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cK(s)
throw r},
$S:function(){return{func:1}}}
P.qy.prototype={
ef:function(a){var t,s,r,q
try{if(C.e===$.an){r=a.$0()
return r}r=P.xn(null,null,this,a)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kj(null,null,this,t,s)
return r}},
cU:function(a,b){var t,s,r,q
try{if(C.e===$.an){r=a.$1(b)
return r}r=P.xp(null,null,this,a,b)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kj(null,null,this,t,s)
return r}},
hO:function(a,b,c){var t,s,r,q
try{if(C.e===$.an){r=a.$2(b,c)
return r}r=P.xo(null,null,this,a,b,c)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kj(null,null,this,t,s)
return r}},
cA:function(a,b){if(b)return new P.qz(this,a)
else return new P.qA(this,a)},
fQ:function(a,b){return new P.qB(this,a)},
n:function(a,b){return},
ee:function(a){if($.an===C.e)return a.$0()
return P.xn(null,null,this,a)},
cT:function(a,b){if($.an===C.e)return a.$1(b)
return P.xp(null,null,this,a,b)},
hN:function(a,b,c){if($.an===C.e)return a.$2(b,c)
return P.xo(null,null,this,a,b,c)}}
P.qz.prototype={
$0:function(){return this.a.ef(this.b)},
$S:function(){return{func:1}}}
P.qA.prototype={
$0:function(){return this.a.ee(this.b)},
$S:function(){return{func:1}}}
P.qB.prototype={
$1:function(a){return this.a.cU(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qh.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gba:function(a){var t=H.Q(this,0)
return H.du(new P.qi(this,[t]),new P.qk(this),t,H.Q(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f5(b)},
f5:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fd(0,b)},
fd:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(b)]
r=this.aK(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uH()
this.b=t}this.dg(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uH()
this.c=s}this.dg(s,b,c)}else this.fC(b,c)},
fC:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uH()
this.d=t}s=this.aJ(a)
r=t[s]
if(r==null){P.uI(t,s,[a,b]);++this.a
this.e=null}else{q=this.aK(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cq(0,b)},
cq:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(b)]
r=this.aK(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a5:function(a,b){var t,s,r,q
t=this.cc()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bQ(this))}},
cc:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
dg:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uI(a,b,c)},
bi:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Gf(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aJ:function(a){return J.dF(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1},
$isbe:1,
$asbe:null}
P.qk.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qi.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gU:function(a){var t=this.a
return new P.qj(t,t.cc(),0,null,this.$ti)},
ac:function(a,b){return this.a.Y(0,b)},
a5:function(a,b){var t,s,r,q
t=this.a
s=t.cc()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bQ(t))}}}
P.qj.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bQ(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kb.prototype={
bv:function(a){return H.Hk(a)&0x3ffffff},
bw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge2()
if(r==null?b==null:r===b)return s}return-1}}
P.ka.prototype={
gU:function(a){var t=new P.dB(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gV:function(a){return this.a===0},
ac:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f4(b)},
f4:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
cJ:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ac(0,a)?a:null
else return this.fp(a)},
fp:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(a)]
r=this.aK(s,a)
if(r<0)return
return J.i8(s,r).gdn()},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bQ(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.df(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.df(r,b)}else return this.aI(0,b)},
aI:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gg()
this.d=t}s=this.aJ(b)
r=t[s]
if(r==null)t[s]=[this.cb(b)]
else{if(this.aK(r,b)>=0)return!1
r.push(this.cb(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cq(0,b)},
cq:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aJ(b)]
r=this.aK(s,b)
if(r<0)return!1
this.dh(s.splice(r,1)[0])
return!0},
bd:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
df:function(a,b){if(a[b]!=null)return!1
a[b]=this.cb(b)
return!0},
bi:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dh(t)
delete a[b]
return!0},
cb:function(a){var t,s
t=new P.qo(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dh:function(a){var t,s
t=a.gf2()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aJ:function(a){return J.dF(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdn(),b))return s
return-1},
$iseC:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.qo.prototype={
gdn:function(){return this.a},
gf2:function(){return this.c}}
P.dB.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bQ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.ql.prototype={}
P.fj.prototype={
au:function(a,b){return H.du(this,b,H.ar(this,"fj",0),null)},
ac:function(a,b){var t
for(t=this.gU(this);t.F();)if(J.b_(t.gO(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gU(this);t.F();)b.$1(t.gO())},
a0:function(a,b){return P.d3(this,!0,H.ar(this,"fj",0))},
an:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gU(this)
for(s=0;t.F();)++s
return s},
gV:function(a){return!this.gU(this).F()},
A:function(a){return P.tH(this,"(",")")},
$isn:1,
$asn:null}
P.hp.prototype={}
P.rg.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.jv.prototype={}
P.hJ.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
P.aR.prototype={
gU:function(a){return new H.ew(a,this.gm(a),0,null,[H.ar(a,"aR",0)])},
S:function(a,b){return this.n(a,b)},
a5:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bQ(a))}},
gV:function(a){return this.gm(a)===0},
ac:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b_(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bQ(a))}return!1},
au:function(a,b){return new H.fl(a,b,[H.ar(a,"aR",0),null])},
d1:function(a,b){return H.wJ(a,b,null,H.ar(a,"aR",0))},
a0:function(a,b){var t,s,r
t=H.a([],[H.ar(a,"aR",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
an:function(a){return this.a0(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bX:function(a,b,c,d){var t
P.di(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.di(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.aj()
if(typeof b!=="number")return H.ag(b)
t=c-b
if(t===0)return
if(J.ee(e,0))H.aZ(P.bG(e,0,null,"skipCount",null))
if(H.dY(d,"$isp",[H.ar(a,"aR",0)],"$asp")){s=e
r=d}else{r=J.y5(d,e).a0(0,!1)
s=0}q=J.kl(s)
p=J.bf(r)
if(J.cy(q.T(s,t),p.gm(r)))throw H.k(H.wi())
if(q.a1(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.T(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.T(s,o)))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){var t,s,r,q,p
P.di(b,c,this.gm(a),null,null,null)
d=C.c.an(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aw(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aw(a,b,r,d)}},
aY:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b_(this.n(a,t),b))return t
return-1},
bf:function(a,b){return this.aY(a,b,0)},
A:function(a){return P.jq(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.qT.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isbe:1,
$asbe:null}
P.jw.prototype={
n:function(a,b){return J.i8(this.a,b)},
i:function(a,b,c){J.kq(this.a,b,c)},
a5:function(a,b){J.xW(this.a,b)},
gV:function(a){return J.rG(this.a)},
gm:function(a){return J.cl(this.a)},
A:function(a){return J.cK(this.a)},
$isbe:1,
$asbe:null}
P.eK.prototype={$asbe:null,$isbe:1}
P.n6.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.y(a)
t.N=s+": "
t.N+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mU.prototype={
gU:function(a){return new P.qp(this,this.c,this.d,this.b,null,this.$ti)},
a5:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.aZ(new P.bQ(this))}},
gV:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
S:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.ag(b)
if(0>b||b>=t)H.aZ(P.bA(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a0:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fH(t)
return t},
an:function(a){return this.a0(a,!0)},
h:function(a,b){this.aI(0,b)},
bd:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jq(this,"{","}")},
ec:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.jr());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aI:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dq();++this.d},
dq:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a7(s,0,q,t,r)
C.b.a7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fH:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eN:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$asn:null}
P.qp.prototype={
gO:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aZ(new P.bQ(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oa.prototype={
gV:function(a){return this.a===0},
aT:function(a,b){var t
for(t=J.cJ(b);t.F();)this.h(0,t.gO())},
a0:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dB(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
an:function(a){return this.a0(a,!0)},
au:function(a,b){return new H.h1(this,b,[H.Q(this,0),null])},
A:function(a){return P.jq(this,"{","}")},
a5:function(a,b){var t
for(t=new P.dB(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bg:function(a,b){var t,s
t=new P.dB(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.F())}else{s=H.y(t.d)
for(;t.F();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
$iseC:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.o9.prototype={}
P.kI.prototype={
hv:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bf(b)
a1=P.di(a0,a1,t.gm(b),null,null,null)
s=$.$get$x7()
if(typeof a1!=="number")return H.ag(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.X(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rl(C.c.a2(b,l))
h=H.rl(C.c.a2(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.T()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cb("")
p.N+=C.c.K(b,q,r)
p.N+=H.hL(k)
q=l
continue}}throw H.k(new P.bN("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.K(b,q,a1)
e=t.length
if(o>=0)P.v5(b,n,a1,o,m,e)
else{d=C.a.bI(e-1,4)+1
if(d===1)throw H.k(new P.bN("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.az(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.v5(b,n,a1,o,m,c)
else{d=C.d.bI(c,4)
if(d===1)throw H.k(new P.bN("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.az(b,a1,a1,d===2?"==":"=")}return b},
$asfV:function(){return[[P.p,P.C],P.B]}}
P.kJ.prototype={
$asfY:function(){return[[P.p,P.C],P.B]}}
P.fV.prototype={}
P.fY.prototype={}
P.lm.prototype={
$asfV:function(){return[P.B,[P.p,P.C]]}}
P.pi.prototype={
gG:function(a){return"utf-8"}}
P.pj.prototype={
cD:function(a,b,c){var t,s,r,q
t=J.cl(a)
P.di(b,c,t,null,null,null)
s=new P.cb("")
r=new P.qV(!1,s,!0,0,0,0)
r.cD(a,b,t)
r.h6(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fV:function(a){return this.cD(a,0,null)},
$asfY:function(){return[[P.p,P.C],P.B]}}
P.qV.prototype={
h6:function(a,b,c){if(this.e>0)throw H.k(new P.bN("Unfinished UTF-8 octet sequence",b,c))},
cD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qX(c)
p=new P.qW(this,a,b,c)
$loop$0:for(o=J.bf(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aF()
if((l&192)!==128){k=new P.bN("Bad UTF-8 encoding 0x"+C.d.bD(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.x,k)
if(t<=C.x[k]){k=new P.bN("Overlong encoding of 0x"+C.a.bD(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bN("Character outside valid Unicode range: 0x"+C.a.bD(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.N+=H.hL(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cy(j,0)){this.c=!1
if(typeof j!=="number")return H.ag(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dD(l)
if(g.a1(l,0)){g=new P.bN("Negative UTF-8 code unit: -0x"+J.y8(g.cY(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aF()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bN("Bad UTF-8 encoding 0x"+C.d.bD(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qX.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bf(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aF()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.qW.prototype={
$2:function(a,b){this.a.b.N+=P.oL(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.d9.prototype={}
P.bH.prototype={}
P.e2.prototype={
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.e2))return!1
return this.a===b.a&&this.b===b.b},
ax:function(a,b){return C.a.ax(this.a,b.gfG())},
ga3:function(a){var t=this.a
return(t^C.a.aS(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.yK(H.ww(this))
s=P.ii(H.uf(this))
r=P.ii(H.ue(this))
q=P.ii(H.F3(this))
p=P.ii(H.F5(this))
o=P.ii(H.F6(this))
n=P.yL(H.F4(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yJ(C.a.T(this.a,b.gi1()),this.b)},
ghs:function(){return this.a},
d7:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dG(this.ghs()))},
$isbH:1,
$asbH:function(){return[P.e2]},
gfG:function(){return this.a}}
P.W.prototype={$isbH:1,
$asbH:function(){return[P.dm]}}
P.dJ.prototype={
T:function(a,b){return new P.dJ(this.a+b.gbj())},
aq:function(a,b){return new P.dJ(C.a.bB(this.a*b))},
a1:function(a,b){return C.a.a1(this.a,b.gbj())},
aA:function(a,b){return C.a.aA(this.a,b.gbj())},
ar:function(a,b){return C.a.ar(this.a,b.gbj())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dJ))return!1
return this.a===b.a},
ga3:function(a){return this.a&0x1FFFFFFF},
ax:function(a,b){return C.a.ax(this.a,b.gbj())},
A:function(a){var t,s,r,q,p
t=new P.lk()
s=this.a
if(s<0)return"-"+new P.dJ(0-s).A(0)
r=t.$1(C.a.al(s,6e7)%60)
q=t.$1(C.a.al(s,1e6)%60)
p=new P.lj().$1(s%1e6)
return""+C.a.al(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
cY:function(a){return new P.dJ(0-this.a)},
$isbH:1,
$asbH:function(){return[P.dJ]},
gbj:function(){return this.a}}
P.lj.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.lk.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.ei.prototype={
gaG:function(){return H.cw(this.$thrownJsError)}}
P.fo.prototype={
A:function(a){return"Throw of null."}}
P.d1.prototype={
gce:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcd:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gce()+s+r
if(!this.a)return q
p=this.gcd()
o=P.vm(this.b)
return q+p+": "+H.y(o)},
gG:function(a){return this.c}}
P.eB.prototype={
gce:function(){return"RangeError"},
gcd:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.aA()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mj.prototype={
gce:function(){return"RangeError"},
gcd:function(){if(J.ee(this.b,0))return": index must not be negative"
var t=this.f
if(J.b_(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eI.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.dT.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bQ.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.vm(t))+"."}}
P.nv.prototype={
A:function(a){return"Out of Memory"},
gaG:function(){return},
$isei:1}
P.jT.prototype={
A:function(a){return"Stack Overflow"},
gaG:function(){return},
$isei:1}
P.lb.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.q2.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bN.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a1()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.ag(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a2(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.y(r-o+1)+")\n"):s+(" (at character "+H.y(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.X(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.K(q,i,j)
return s+h+f+g+"\n"+C.c.aq(" ",r-i+h.length)+"^\n"}}
P.ls.prototype={
A:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bM
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aZ(P.e_(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ug(b,"expando$values")
return s==null?null:H.ug(s,t)},
i:function(a,b,c){var t,s
t=this.bM
if(typeof t!=="string")t.set(b,c)
else{s=H.ug(b,"expando$values")
if(s==null){s=new P.ac()
H.wA(b,"expando$values",s)}H.wA(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbH:1,
$asbH:function(){return[P.dm]}}
P.n.prototype={
au:function(a,b){return H.du(this,b,H.ar(this,"n",0),null)},
bG:function(a,b){return new H.dz(this,b,[H.ar(this,"n",0)])},
ac:function(a,b){var t
for(t=this.gU(this);t.F();)if(J.b_(t.gO(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gU(this);t.F();)b.$1(t.gO())},
a0:function(a,b){return P.d3(this,!0,H.ar(this,"n",0))},
an:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gU(this)
for(s=0;t.F();)++s
return s},
gV:function(a){return!this.gU(this).F()},
S:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.yc("index"))
if(b<0)H.aZ(P.bG(b,0,null,"index",null))
for(t=this.gU(this),s=0;t.F();){r=t.gO()
if(b===s)return r;++s}throw H.k(P.bA(b,this,"index",null,s))},
A:function(a){return P.tH(this,"(",")")},
$asn:null}
P.js.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$isn:1,$asn:null}
P.be.prototype={$asbe:null}
P.cS.prototype={
ga3:function(a){return P.ac.prototype.ga3.call(this,this)},
A:function(a){return"null"}}
P.dm.prototype={$isbH:1,
$asbH:function(){return[P.dm]}}
P.ac.prototype={constructor:P.ac,$isac:1,
R:function(a,b){return this===b},
ga3:function(a){return H.eA(this)},
A:function(a){return H.jJ(this)},
gaa:function(a){return new H.dV(H.kn(this),null)},
toString:function(){return this.A(this)}}
P.dv.prototype={}
P.eC.prototype={}
P.dS.prototype={}
P.B.prototype={$isbH:1,
$asbH:function(){return[P.B]}}
P.cb.prototype={
gm:function(a){return this.N.length},
gV:function(a){return this.N.length===0},
A:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eL.prototype={}
P.pf.prototype={
$2:function(a,b){var t,s,r,q
t=J.bf(b)
s=t.bf(b,"=")
if(s===-1){if(!t.R(b,""))J.kq(a,P.qU(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.af(b,s+1)
t=this.a
J.kq(a,P.qU(r,0,r.length,t,!0),P.qU(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pc.prototype={
$2:function(a,b){throw H.k(new P.bN("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.C]}}}
P.pd.prototype={
$2:function(a,b){throw H.k(new P.bN("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.pe.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fq(C.c.K(this.a,a,b),16,null)
s=J.dD(t)
if(s.a1(t,0)||s.aA(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.kh.prototype={
gel:function(){return this.b},
gcH:function(a){var t=this.c
if(t==null)return""
if(C.c.ae(t,"["))return C.c.K(t,1,t.length-1)
return t},
gcO:function(a){var t=this.d
if(t==null)return P.xa(this.a)
return t},
gcP:function(a){var t=this.f
return t==null?"":t},
gdX:function(){var t=this.r
return t==null?"":t},
gcQ:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.eK(P.x0(t==null?"":t,C.p),[s,s])
this.Q=s
t=s}return t},
ge_:function(){return this.c!=null},
ge1:function(){return this.f!=null},
ge0:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.du()
this.y=t}return t},
du:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.y(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.y(s)}else t=s
t+=H.y(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
R:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.az(b)
if(!!t.$iseL){if(this.a===b.gcZ())if(this.c!=null===b.ge_()){s=this.b
r=b.gel()
if(s==null?r==null:s===r){s=this.gcH(this)
r=t.gcH(b)
if(s==null?r==null:s===r)if(J.b_(this.gcO(this),t.gcO(b)))if(J.b_(this.e,t.ge9(b))){s=this.f
r=s==null
if(!r===b.ge1()){if(r)s=""
if(s===t.gcP(b)){t=this.r
s=t==null
if(!s===b.ge0()){if(s)t=""
t=t===b.gdX()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga3:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.du()
this.y=t}t=C.c.ga3(t)
this.z=t}return t},
$iseL:1,
gcZ:function(){return this.a},
ge9:function(a){return this.e}}
P.re.prototype={
$1:function(a){throw H.k(new P.bN("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pb.prototype={
gek:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bf(s)
q=r.aY(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fD(s,o,p,C.l,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fD(s,t,p,C.E,!1)
t=new P.pR(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.r8.prototype={
$1:function(a){return new Uint8Array(H.cC(96))},
$S:function(){return{func:1,args:[,]}}}
P.r7.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.xV(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.r9.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.da(a),r=0;r<t;++r)s.i(a,C.c.a2(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.ra.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a2(b,0),s=C.c.a2(b,1),r=J.da(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.qK.prototype={
ge_:function(){return this.c>0},
ge1:function(){var t=this.f
if(typeof t!=="number")return t.a1()
return t<this.r},
ge0:function(){return this.r<this.a.length},
gcZ:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ae(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ae(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ae(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ae(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
gel:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcH:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gcO:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.T()
s=this.e
if(typeof s!=="number")return H.ag(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.T()
return H.fq(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ae(this.a,"http"))return 80
if(t===5&&C.c.ae(this.a,"https"))return 443
return 0},
ge9:function(a){return C.c.K(this.a,this.e,this.f)},
gcP:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a1()
return t<s?C.c.K(this.a,t+1,s):""},
gdX:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.af(s,t+1):""},
gcQ:function(){var t=this.f
if(typeof t!=="number")return t.a1()
if(t>=this.r)return C.a0
t=P.B
return new P.eK(P.x0(this.gcP(this),C.p),[t,t])},
ga3:function(a){var t=this.y
if(t==null){t=C.c.ga3(this.a)
this.y=t}return t},
R:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.az(b)
if(!!t.$iseL)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseL:1}
P.pR.prototype={}
W.al.prototype={}
W.eV.prototype={
A:function(a){return String(a)},
$iseV:1,
$isf:1,
gad:function(a){return a.href}}
W.ky.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.eZ.prototype={$iseZ:1,$isdq:1,$isay:1,$isac:1}
W.cL.prototype={$isac:1}
W.kG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$isn:1,
$asn:function(){return[W.cL]},
$isaG:1,
$asaG:function(){return[W.cL]},
$isax:1,
$asax:function(){return[W.cL]}}
W.h4.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$ist:1,
$isn:1}
W.h7.prototype={
$asp:function(){return[W.cL]},
$ast:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$ist:1,
$isn:1}
W.kK.prototype={
gad:function(a){return a.href}}
W.f_.prototype={$isf_:1}
W.kN.prototype={$isf:1}
W.fU.prototype={$isfU:1,
gG:function(a){return a.name}}
W.eg.prototype={$isf:1,
gm:function(a){return a.length}}
W.kX.prototype={$isf:1}
W.id.prototype={
cF:function(a,b){return typeof console!="undefined"?console.error(b):null},
bb:function(a){return typeof console!="undefined"?console.group(a):null},
e3:function(a){return typeof console!="undefined"?console.info(a):null},
hS:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fZ.prototype={
gG:function(a){return a.name}}
W.l3.prototype={
gaH:function(a){return a.style}}
W.l4.prototype={
gad:function(a){return a.href}}
W.h_.prototype={
gaH:function(a){return a.style}}
W.h0.prototype={
gG:function(a){return a.name}}
W.l5.prototype={
gaH:function(a){return a.style}}
W.bM.prototype={$isbM:1,$isac:1}
W.f2.prototype={
bH:function(a,b){var t=this.fe(a,b)
return t!=null?t:""},
fe:function(a,b){if(W.yI(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yM()+b)},
J:function(a,b){return a.item(b)},
gbe:function(a){return a.content},
gbp:function(a){return a.display},
sbp:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iH.prototype={}
W.pO.prototype={
bH:function(a,b){var t=this.b
return J.y0(t.ga9(t),b)},
fD:function(a,b){var t
for(t=this.a,t=new H.ew(t,t.gm(t),0,null,[H.Q(t,0)]);t.F();)t.d.style[a]=b},
sbp:function(a,b){this.fD("display",b)},
eT:function(a){var t=P.d3(this.a,!0,null)
this.b=new H.fl(t,new W.pP(),[H.Q(t,0),null])}}
W.jE.prototype={}
W.pP.prototype={
$1:function(a){return J.rH(a)},
$S:function(){return{func:1,args:[,]}}}
W.ig.prototype={
gbe:function(a){return this.bH(a,"content")},
gbp:function(a){return this.bH(a,"display")}}
W.l6.prototype={
gaH:function(a){return a.style}}
W.l7.prototype={
gaH:function(a){return a.style}}
W.lc.prototype={
gcG:function(a){return a.files}}
W.f3.prototype={$isf3:1,$isac:1}
W.ih.prototype={
bS:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.eh.prototype={$iseh:1}
W.ij.prototype={$isf:1}
W.ik.prototype={
gG:function(a){return a.name}}
W.lf.prototype={
gG:function(a){var t=a.name
if(P.vl()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vl()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.il.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gb3(a))+" x "+H.y(this.gaX(a))},
R:function(a,b){var t
if(b==null)return!1
t=J.az(b)
if(!t.$isbT)return!1
return a.left===t.gbZ(b)&&a.top===t.gc3(b)&&this.gb3(a)===t.gb3(b)&&this.gaX(a)===t.gaX(b)},
ga3:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb3(a)
q=this.gaX(a)
return W.x9(W.eS(W.eS(W.eS(W.eS(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaX:function(a){return a.height},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb3:function(a){return a.width},
$isbT:1,
$asbT:function(){}}
W.im.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]},
$isaG:1,
$asaG:function(){return[P.B]},
$isax:1,
$asax:function(){return[P.B]}}
W.iI.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$ist:1,
$isn:1}
W.j1.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$ist:1,
$isn:1}
W.io.prototype={
J:function(a,b){return a.item(b)}}
W.ip.prototype={
h:function(a,b){return a.add(b)},
ac:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k7.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gaH:function(a){return W.Gc(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.dq.prototype={
gdS:function(a){return new W.pX(a)},
A:function(a){return a.localName},
bu:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdq:1,
$isay:1,
$isac:1,
$isf:1,
gaH:function(a){return a.style}}
W.ll.prototype={
gG:function(a){return a.name}}
W.h2.prototype={
gG:function(a){return a.name}}
W.h3.prototype={$ish3:1,
gap:function(a){return a.error}}
W.S.prototype={$isS:1,$isac:1}
W.aH.prototype={
fK:function(a,b,c,d){if(c!=null)this.eZ(a,b,c,!1)},
hI:function(a,b,c,d){if(c!=null)this.fA(a,b,c,!1)},
eZ:function(a,b,c,d){return a.addEventListener(b,H.dl(c,1),!1)},
fA:function(a,b,c,d){return a.removeEventListener(b,H.dl(c,1),!1)}}
W.lT.prototype={
gG:function(a){return a.name}}
W.ce.prototype={$isce:1,$isac:1,
gG:function(a){return a.name}}
W.fb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isfb:1,
$isaG:1,
$asaG:function(){return[W.ce]},
$isax:1,
$asax:function(){return[W.ce]},
$isp:1,
$asp:function(){return[W.ce]},
$ist:1,
$ast:function(){return[W.ce]},
$isn:1,
$asn:function(){return[W.ce]}}
W.iJ.prototype={
$asp:function(){return[W.ce]},
$ast:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$ist:1,
$isn:1}
W.j2.prototype={
$asp:function(){return[W.ce]},
$ast:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$ist:1,
$isn:1}
W.lU.prototype={
gap:function(a){return a.error}}
W.lV.prototype={
gG:function(a){return a.name}}
W.lW.prototype={
gap:function(a){return a.error},
gm:function(a){return a.length}}
W.lZ.prototype={
gaH:function(a){return a.style},
gcV:function(a){return a.weight}}
W.m_.prototype={
h:function(a,b){return a.add(b)},
i0:function(a,b,c){return a.forEach(H.dl(b,3),c)},
a5:function(a,b){b=H.dl(b,3)
return a.forEach(b)}}
W.iD.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isac:1}
W.m9.prototype={
gm:function(a){return a.length}}
W.fc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$ist:1,
$ast:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaG:1,
$asaG:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iK.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.j3.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.iF.prototype={
J:function(a,b){return a.item(b)}}
W.e7.prototype={
i9:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hx:function(a,b,c,d){return a.open(b,c,d)},
ghL:function(a){return W.GC(a.response)},
b5:function(a,b){return a.send(b)},
$ise7:1,
$isac:1,
ghM:function(a){return a.responseText}}
W.mc.prototype={
$1:function(a){return J.y_(a)},
$S:function(){return{func:1,args:[W.e7]}}}
W.md.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ar()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.ay(0,t)
else p.bn(a)},
$S:function(){return{func:1,args:[,]}}}
W.hk.prototype={}
W.mf.prototype={
gG:function(a){return a.name}}
W.hl.prototype={$ishl:1}
W.fe.prototype={$isfe:1,$isdq:1,$isay:1,$isac:1,
ay:function(a,b){return a.complete.$1(b)}}
W.ml.prototype={$isf:1,
gcG:function(a){return a.files},
gG:function(a){return a.name}}
W.mJ.prototype={
gG:function(a){return a.name}}
W.hs.prototype={
h:function(a,b){return a.add(b)}}
W.ht.prototype={$isht:1,
gad:function(a){return a.href}}
W.n0.prototype={
A:function(a){return String(a)},
gad:function(a){return a.href}}
W.n5.prototype={
gG:function(a){return a.name}}
W.hA.prototype={
gap:function(a){return a.error}}
W.jy.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n9.prototype={
gbe:function(a){return a.content},
gG:function(a){return a.name}}
W.na.prototype={
hX:function(a,b,c){return a.send(b,c)},
b5:function(a,b){return a.send(b)}}
W.hB.prototype={
gG:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isac:1}
W.jz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cr]},
$isax:1,
$asax:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]}}
W.iU.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$ist:1,
$isn:1}
W.jd.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$ist:1,
$isn:1}
W.nn.prototype={$isf:1}
W.no.prototype={
gG:function(a){return a.name}}
W.ay.prototype={
A:function(a){var t=a.nodeValue
return t==null?this.eE(a):t},
ac:function(a,b){return a.contains(b)},
$isay:1,
$isac:1}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ay]},
$ist:1,
$ast:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaG:1,
$asaG:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iV.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.je.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.nr.prototype={
gG:function(a){return a.name}}
W.nw.prototype={
gG:function(a){return a.name}}
W.nA.prototype={
gG:function(a){return a.name}}
W.nC.prototype={$isf:1}
W.e8.prototype={
gG:function(a){return a.name}}
W.nH.prototype={
gm:function(a){return a.length}}
W.cg.prototype={
J:function(a,b){return a.item(b)},
$iscg:1,
$isac:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cg]},
$ist:1,
$ast:function(){return[W.cg]},
$isn:1,
$asn:function(){return[W.cg]},
$isaG:1,
$asaG:function(){return[W.cg]},
$isax:1,
$asax:function(){return[W.cg]}}
W.iW.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$ist:1,
$isn:1}
W.jf.prototype={
$asp:function(){return[W.cg]},
$ast:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$ist:1,
$isn:1}
W.nM.prototype={
b5:function(a,b){return a.send(b)}}
W.jM.prototype={
b5:function(a,b){return a.send(b)}}
W.fu.prototype={$isfu:1,$isdq:1,$isay:1,$isac:1}
W.jO.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.o8.prototype={
gG:function(a){return a.name}}
W.ob.prototype={$isf:1}
W.oc.prototype={
gG:function(a){return a.name}}
W.od.prototype={
gG:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isac:1}
W.jQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cs]},
$ist:1,
$ast:function(){return[W.cs]},
$isn:1,
$asn:function(){return[W.cs]},
$isaG:1,
$asaG:function(){return[W.cs]},
$isax:1,
$asax:function(){return[W.cs]}}
W.h5.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isp:1,
$ist:1,
$isn:1}
W.h8.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isp:1,
$ist:1,
$isn:1}
W.hN.prototype={$ishN:1}
W.ct.prototype={$isct:1,$isac:1,
gcV:function(a){return a.weight}}
W.jR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]},
$isaG:1,
$asaG:function(){return[W.ct]},
$isax:1,
$asax:function(){return[W.ct]}}
W.iX.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.jg.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.fv.prototype={$isfv:1,$isac:1}
W.oh.prototype={
gap:function(a){return a.error}}
W.ci.prototype={
J:function(a,b){return a.item(b)},
$isci:1,
$isac:1,
gm:function(a){return a.length}}
W.oi.prototype={
gG:function(a){return a.name}}
W.oj.prototype={
gG:function(a){return a.name}}
W.op.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gV:function(a){return a.key(0)==null},
$isbe:1,
$asbe:function(){return[P.B,P.B]}}
W.ck.prototype={$isck:1,$isac:1,
gad:function(a){return a.href}}
W.eb.prototype={}
W.oS.prototype={
gbe:function(a){return a.content}}
W.oU.prototype={
gG:function(a){return a.name}}
W.cT.prototype={$isac:1}
W.cH.prototype={$isac:1}
W.oX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cH]},
$isax:1,
$asax:function(){return[W.cH]},
$isp:1,
$asp:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$isn:1,
$asn:function(){return[W.cH]}}
W.iY.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$asn:function(){return[W.cH]},
$isp:1,
$ist:1,
$isn:1}
W.jh.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$asn:function(){return[W.cH]},
$isp:1,
$ist:1,
$isn:1}
W.oY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cT]},
$isax:1,
$asax:function(){return[W.cT]},
$isp:1,
$asp:function(){return[W.cT]},
$ist:1,
$ast:function(){return[W.cT]},
$isn:1,
$asn:function(){return[W.cT]}}
W.h6.prototype={
$asp:function(){return[W.cT]},
$ast:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isp:1,
$ist:1,
$isn:1}
W.h9.prototype={
$asp:function(){return[W.cT]},
$ast:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isp:1,
$ist:1,
$isn:1}
W.p1.prototype={
gm:function(a){return a.length}}
W.cv.prototype={$iscv:1,$isac:1}
W.jV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cv]},
$ist:1,
$ast:function(){return[W.cv]},
$isn:1,
$asn:function(){return[W.cv]},
$isaG:1,
$asaG:function(){return[W.cv]},
$isax:1,
$asax:function(){return[W.cv]}}
W.iZ.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.ji.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.fx.prototype={$isfx:1,$isac:1}
W.jW.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ec.prototype={}
W.pg.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.pk.prototype={
gm:function(a){return a.length}}
W.fy.prototype={$isfy:1,$isac:1}
W.jX.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pp.prototype={
b5:function(a,b){return a.send(b)}}
W.jZ.prototype={$isf:1,
gG:function(a){return a.name}}
W.pw.prototype={$isf:1}
W.eN.prototype={$isf:1}
W.fz.prototype={$isfz:1,$isay:1,$isac:1,
gG:function(a){return a.name}}
W.pN.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.az(b)
if(!t.$isbT)return!1
s=a.left
r=t.gbZ(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga3:function(a){var t,s,r,q
t=J.dF(a.left)
s=J.dF(a.top)
r=J.dF(a.width)
q=J.dF(a.height)
return W.x9(W.eS(W.eS(W.eS(W.eS(0,t),s),r),q))},
$isbT:1,
$asbT:function(){},
gaX:function(a){return a.height},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb3:function(a){return a.width}}
W.hW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[P.bT]},
$isax:1,
$asax:function(){return[P.bT]},
$isp:1,
$asp:function(){return[P.bT]},
$ist:1,
$ast:function(){return[P.bT]},
$isn:1,
$asn:function(){return[P.bT]}}
W.j_.prototype={
$asp:function(){return[P.bT]},
$ast:function(){return[P.bT]},
$asn:function(){return[P.bT]},
$isp:1,
$ist:1,
$isn:1}
W.jj.prototype={
$asp:function(){return[P.bT]},
$ast:function(){return[P.bT]},
$asn:function(){return[P.bT]},
$isp:1,
$ist:1,
$isn:1}
W.k5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bM]},
$ist:1,
$ast:function(){return[W.bM]},
$isn:1,
$asn:function(){return[W.bM]},
$isaG:1,
$asaG:function(){return[W.bM]},
$isax:1,
$asax:function(){return[W.bM]}}
W.j0.prototype={
$asp:function(){return[W.bM]},
$ast:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$ist:1,
$isn:1}
W.jk.prototype={
$asp:function(){return[W.bM]},
$ast:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$ist:1,
$isn:1}
W.pV.prototype={$isf:1}
W.pW.prototype={
gaX:function(a){return a.height},
gb3:function(a){return a.width}}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cp]},
$isax:1,
$asax:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$ist:1,
$ast:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]}}
W.iL.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$ist:1,
$isn:1}
W.j4.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$ist:1,
$isn:1}
W.qg.prototype={$isf:1}
W.i1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ay]},
$ist:1,
$ast:function(){return[W.ay]},
$isn:1,
$asn:function(){return[W.ay]},
$isaG:1,
$asaG:function(){return[W.ay]},
$isax:1,
$asax:function(){return[W.ay]}}
W.iM.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.j5.prototype={
$asp:function(){return[W.ay]},
$ast:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isp:1,
$ist:1,
$isn:1}
W.qG.prototype={$isf:1}
W.kd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ci]},
$ist:1,
$ast:function(){return[W.ci]},
$isn:1,
$asn:function(){return[W.ci]},
$isaG:1,
$asaG:function(){return[W.ci]},
$isax:1,
$asax:function(){return[W.ci]}}
W.iN.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$ist:1,
$isn:1}
W.j6.prototype={
$asp:function(){return[W.ci]},
$ast:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$ist:1,
$isn:1}
W.kf.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.ck]},
$isax:1,
$asax:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$isn:1,
$asn:function(){return[W.ck]}}
W.iO.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$ist:1,
$isn:1}
W.j7.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$ist:1,
$isn:1}
W.qZ.prototype={$isf:1}
W.r_.prototype={$isf:1}
W.pX.prototype={
aE:function(){var t,s,r,q,p
t=P.a0(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.c0)(s),++q){p=J.rI(s[q])
if(p.length!==0)t.h(0,p)}return t},
em:function(a){this.a.className=a.bg(0," ")},
gm:function(a){return this.a.classList.length},
gV:function(a){return this.a.classList.length===0},
ac:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.q_.prototype={
aL:function(a,b,c,d){return W.eQ(this.a,this.b,a,!1,H.Q(this,0))},
e6:function(a,b,c){return this.aL(a,null,b,c)}}
W.hX.prototype={}
W.q0.prototype={
bV:function(a){if(this.b==null)return
this.dO()
this.b=null
this.d=null
return},
cM:function(a,b){if(this.b==null)return;++this.a
this.dO()},
ea:function(a){return this.cM(a,null)},
ed:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dM()},
dM:function(){var t=this.d
if(t!=null&&this.a<=0)J.xO(this.b,this.c,t,!1)},
dO:function(){var t=this.d
if(t!=null)J.y3(this.b,this.c,t,!1)},
eU:function(a,b,c,d,e){this.dM()}}
W.q1.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bz.prototype={
gU:function(a){return new W.lY(a,this.gm(a),-1,null,[H.ar(a,"bz",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
aw:function(a,b,c,d){return this.a7(a,b,c,d,0)},
az:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bX:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.hI.prototype={
cw:function(a,b,c,d){var t
d=new W.qF(W.yb(null),window.location)
t=P.B
t=new W.pQ(!1,!0,P.a0(null,null,null,t),P.a0(null,null,null,t),P.a0(null,null,null,t),d)
t.eX(d,b,[a.toUpperCase()],c)
this.a.push(t)},
h:function(a,b){this.a.push(b)},
$isez:1}
W.qH.prototype={
eX:function(a,b,c,d){var t,s,r
this.a.aT(0,c)
if(b==null)b=C.r
t=J.da(b)
s=t.bG(b,new W.qI())
r=t.bG(b,new W.qJ())
this.b.aT(0,s)
t=this.c
t.aT(0,C.r)
t.aT(0,r)},
$isez:1}
W.qI.prototype={
$1:function(a){return!C.b.ac(C.G,a)},
$S:function(){return{func:1,args:[,]}}}
W.qJ.prototype={
$1:function(a){return C.b.ac(C.G,a)},
$S:function(){return{func:1,args:[,]}}}
W.pQ.prototype={}
W.lY.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i8(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.ez.prototype={}
W.qS.prototype={}
W.qF.prototype={}
P.qP.prototype={
bt:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.az(a)
if(!!s.$ise2)return new Date(a.a)
if(!!s.$isFw)throw H.k(new P.eI("structured clone of RegExp"))
if(!!s.$isce)return a
if(!!s.$isf_)return a
if(!!s.$isfb)return a
if(!!s.$ishl)return a
if(!!s.$isfm||!!s.$isey)return a
if(!!s.$isbe){r=this.bt(a)
q=this.b
p=q.length
if(r>=p)return H.w(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.w(q,r)
q[r]=o
s.a5(a,new P.qR(t,this))
return t.a}if(!!s.$isp){r=this.bt(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.fW(a,r)}throw H.k(new P.eI("structured clone of other type"))},
fW:function(a,b){var t,s,r,q,p
t=J.bf(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b2(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.qR.prototype={
$2:function(a,b){this.a.a[a]=this.b.b2(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pD.prototype={
bt:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e2(s,!0)
r.d7(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eI("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GX(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bt(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mT()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.h8(a,new P.pE(t,this))
return t.a}if(a instanceof Array){p=this.bt(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bf(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.ag(m)
r=J.da(n)
l=0
for(;l<m;++l)r.i(n,l,this.b2(o.n(a,l)))
return n}return a}}
P.pE.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.kq(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qQ.prototype={}
P.k1.prototype={
h8:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.c0)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rh.prototype={
$1:function(a){return this.a.ay(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ri.prototype={
$1:function(a){return this.a.bn(a)},
$S:function(){return{func:1,args:[,]}}}
P.l1.prototype={
dP:function(a){if($.$get$vd().b.test(a))return a
throw H.k(P.e_(a,"value","Not a valid class token"))},
A:function(a){return this.aE().bg(0," ")},
gU:function(a){var t,s
t=this.aE()
s=new P.dB(t,t.r,null,null,[null])
s.c=t.e
return s},
a5:function(a,b){this.aE().a5(0,b)},
au:function(a,b){var t=this.aE()
return new H.h1(t,b,[H.Q(t,0),null])},
gV:function(a){return this.aE().a===0},
gm:function(a){return this.aE().a},
ac:function(a,b){if(typeof b!=="string")return!1
this.dP(b)
return this.aE().ac(0,b)},
cJ:function(a){return this.ac(0,a)?a:null},
h:function(a,b){this.dP(b)
return this.ht(0,new P.l2(b))},
a0:function(a,b){return this.aE().a0(0,!0)},
an:function(a){return this.a0(a,!0)},
ht:function(a,b){var t,s
t=this.aE()
s=b.$1(t)
this.em(t)
return s},
$iseC:1,
$aseC:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]}}
P.l2.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.ld.prototype={
gG:function(a){return a.name}}
P.r6.prototype={
$1:function(a){this.b.ay(0,new P.k1([],[],!1).b2(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mi.prototype={
gG:function(a){return a.name}}
P.ns.prototype={
bS:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fm(a,b,c)
q=P.GB(t)
return q}catch(p){s=H.cx(p)
r=H.cw(p)
q=P.vA(s,r,null)
return q}},
h:function(a,b){return this.bS(a,b,null)},
fm:function(a,b,c){return a.add(new P.qQ([],[]).b2(b))},
gG:function(a){return a.name}}
P.hM.prototype={
gap:function(a){return a.error}}
P.p5.prototype={
gap:function(a){return a.error}}
P.qn.prototype={
bz:function(a){if(a<=0||a>4294967296)throw H.k(P.wD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cK:function(){return Math.random()}}
P.qw.prototype={
aR:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bz:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wD("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aR()
return(this.a&t)>>>0}do{this.aR()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cK:function(){this.aR()
var t=this.a
this.aR()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eW:function(a){var t,s,r,q,p,o,n,m
t=J.ee(a,0)?-1:0
do{if(typeof a!=="number")return a.aF()
s=(a&4294967295)>>>0
a=C.d.al(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.al(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.al(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.al(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.al(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.al(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.al(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aR()
this.aR()
this.aR()
this.aR()}}
P.qx.prototype={}
P.bT.prototype={$asbT:null}
P.kv.prototype={$isf:1,
gad:function(a){return a.href}}
P.ef.prototype={$isf:1}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lz.prototype={$isf:1}
P.lA.prototype={$isf:1}
P.lB.prototype={$isf:1}
P.lC.prototype={$isf:1,
gad:function(a){return a.href}}
P.lD.prototype={$isf:1}
P.lE.prototype={$isf:1}
P.lF.prototype={$isf:1}
P.lG.prototype={$isf:1}
P.lH.prototype={$isf:1}
P.lI.prototype={$isf:1}
P.lX.prototype={$isf:1,
gad:function(a){return a.href}}
P.cq.prototype={$isf:1}
P.mg.prototype={$isf:1,
gad:function(a){return a.href}}
P.d2.prototype={$isac:1}
P.mM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d2]},
$ist:1,
$ast:function(){return[P.d2]},
$isn:1,
$asn:function(){return[P.d2]}}
P.iP.prototype={
$asp:function(){return[P.d2]},
$ast:function(){return[P.d2]},
$asn:function(){return[P.d2]},
$isp:1,
$ist:1,
$isn:1}
P.j8.prototype={
$asp:function(){return[P.d2]},
$ast:function(){return[P.d2]},
$asn:function(){return[P.d2]},
$isp:1,
$ist:1,
$isn:1}
P.n7.prototype={$isf:1}
P.n8.prototype={$isf:1}
P.d4.prototype={$isac:1}
P.np.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d4]},
$ist:1,
$ast:function(){return[P.d4]},
$isn:1,
$asn:function(){return[P.d4]}}
P.iQ.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$asn:function(){return[P.d4]},
$isp:1,
$ist:1,
$isn:1}
P.j9.prototype={
$asp:function(){return[P.d4]},
$ast:function(){return[P.d4]},
$asn:function(){return[P.d4]},
$isp:1,
$ist:1,
$isn:1}
P.nF.prototype={$isf:1,
gad:function(a){return a.href}}
P.nK.prototype={
gm:function(a){return a.length}}
P.o5.prototype={$isf:1,
gad:function(a){return a.href}}
P.oK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.B]},
$ist:1,
$ast:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]}}
P.iR.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$ist:1,
$isn:1}
P.ja.prototype={
$asp:function(){return[P.B]},
$ast:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$ist:1,
$isn:1}
P.kC.prototype={
aE:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a0(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.c0)(r),++p){o=J.rI(r[p])
if(o.length!==0)s.h(0,o)}return s},
em:function(a){this.a.setAttribute("class",a.bg(0," "))}}
P.cc.prototype={
gdS:function(a){return new P.kC(a)},
bu:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isf:1}
P.oN.prototype={$isf:1}
P.oP.prototype={$isf:1}
P.eH.prototype={}
P.oW.prototype={$isf:1,
gad:function(a){return a.href}}
P.d7.prototype={$isac:1}
P.p6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$ist:1,
$ast:function(){return[P.d7]},
$isn:1,
$asn:function(){return[P.d7]}}
P.iS.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$ist:1,
$isn:1}
P.jb.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$ist:1,
$isn:1}
P.ph.prototype={$isf:1,
gad:function(a){return a.href}}
P.pl.prototype={$isf:1}
P.pm.prototype={$isf:1}
P.i_.prototype={$isf:1,
gad:function(a){return a.href}}
P.qC.prototype={$isf:1}
P.qD.prototype={$isf:1}
P.qE.prototype={$isf:1}
P.bg.prototype={}
P.d8.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fO.prototype={$isfO:1,$isac:1,
gm:function(a){return a.length}}
P.eY.prototype={$iseY:1,$isac:1,
gbU:function(a){return a.buffer}}
P.fP.prototype={
f7:function(a,b,c,d){return a.decodeAudioData(b,H.dl(c,1),H.dl(d,1))},
fX:function(a,b){var t,s,r
t=P.fO
s=new P.bk(0,$.an,null,[t])
r=new P.dX(s,[t])
this.f7(a,b,new P.kD(r),new P.kE(r))
return s}}
P.kD.prototype={
$1:function(a){this.a.ay(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kE.prototype={
$1:function(a){var t=this.a
if(a==null)t.bn("")
else t.bn(a)},
$S:function(){return{func:1,args:[,]}}}
P.bB.prototype={}
P.e0.prototype={}
P.l0.prototype={
gbU:function(a){return a.buffer}}
P.kx.prototype={
gG:function(a){return a.name}}
P.nX.prototype={$isf:1}
P.qY.prototype={$isf:1}
P.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bA(b,a,null,null,null))
return P.xy(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xy(a.item(b))},
$isp:1,
$asp:function(){return[P.be]},
$ist:1,
$ast:function(){return[P.be]},
$isn:1,
$asn:function(){return[P.be]}}
P.iT.prototype={
$asp:function(){return[P.be]},
$ast:function(){return[P.be]},
$asn:function(){return[P.be]},
$isp:1,
$ist:1,
$isn:1}
P.jc.prototype={
$asp:function(){return[P.be]},
$ast:function(){return[P.be]},
$asn:function(){return[P.be]},
$isp:1,
$ist:1,
$isn:1}
T.fL.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gV:function(a){return this.a.length===0},
gU:function(a){var t=this.a
return new J.i9(t,t.length,0,null,[H.Q(t,0)])},
$ashp:function(){return[T.fM]},
$asn:function(){return[T.fM]},
gcG:function(a){return this.a}}
T.fM.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fd(C.y)
r=T.fd(C.z)
q=T.wt(0,this.b)
new T.iG(s,q,0,0,0,t,r).dt()
r=q.c.buffer
q=q.a
r.toString
q=H.cR(r,0,q)
this.cy=q
t=q}else{t=s.bE()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.dc.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hm.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.ag(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
if(typeof b!=="number")return H.ag(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aQ:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.ag(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.aj()
if(typeof s!=="number")return H.ag(s)
b=t-(a-s)}return T.tf(this.a,this.d,b,a)},
aY:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.T()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.ag(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bf:function(a,b){return this.aY(a,b,0)},
cR:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.aj()
if(typeof s!=="number")return H.ag(s)
r=this.aQ(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.aj()
if(typeof p!=="number")return H.ag(p)
if(typeof s!=="number")return s.T()
this.b=s+(t-(q-p))
return r},
c1:function(a){return P.oL(this.cR(a).bE(),0,null)},
Z:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a_:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aN:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.T()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ao(p,56)|C.a.ao(o,48)|C.a.ao(n,40)|C.a.ao(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ao(i,56)|C.a.ao(j,48)|C.a.ao(k,40)|C.a.ao(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bE:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.ag(r)
q=t-(s-r)
t=this.a
r=J.az(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cR(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xk(r.c6(t,s,p>o?o:p)))},
eM:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbU:function(a){return this.a},
ghw:function(a){return this.b}}
T.nx.prototype={
hT:function(a,b){var t,s,r,q
if(b==null)b=J.cl(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cg(s-q)
C.t.aw(r,t,s,a)
this.a+=b},
cW:function(a){return this.hT(a,null)},
hV:function(a){var t,s,r,q
t=J.bf(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
this.cg(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.ag(r)
C.t.a7(q,s,s+r,t.gbU(a),t.ghw(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.aj()
if(typeof q!=="number")return H.ag(q)
this.a=t+(r-(s-q))},
aQ:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cR(t,a,b-a)},
d4:function(a){return this.aQ(a,null)},
cg:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aZ(P.dG("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.t.aw(r,0,q.length,q)
this.c=r},
fb:function(){return this.cg(null)},
gm:function(a){return this.a}}
T.pz.prototype={
fz:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aQ(this.a-20,20)
if(s.a_()!==117853008){a.b=t
return}s.a_()
r=s.aN()
s.a_()
a.b=r
if(a.a_()!==101075792){a.b=t
return}a.aN()
a.Z()
a.Z()
q=a.a_()
p=a.a_()
o=a.aN()
n=a.aN()
m=a.aN()
l=a.aN()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fc:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.aj()
if(typeof r!=="number")return H.ag(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a_()===101010256){a.b=t
return q}}throw H.k(new T.dc("Could not find End of Central Directory Record"))},
eQ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fc(a)
this.a=t
a.b=t
a.a_()
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.a_()
this.r=a.a_()
s=a.Z()
if(s>0)this.x=a.c1(s)
this.fz(a)
r=a.aQ(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.T()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ar()
if(!(p<t+o))break
if(r.a_()!==33639248)break
p=new T.pB(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.Z()
p.b=r.Z()
p.c=r.Z()
p.d=r.Z()
p.e=r.Z()
p.f=r.Z()
p.r=r.a_()
p.x=r.a_()
p.y=r.a_()
n=r.Z()
m=r.Z()
l=r.Z()
p.z=r.Z()
p.Q=r.Z()
p.ch=r.a_()
o=r.a_()
p.cx=o
if(n>0)p.cy=r.c1(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.aj()
j=r.aQ(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.aj()
if(typeof g!=="number")return H.ag(g)
if(typeof k!=="number")return k.T()
r.b=k+(i-(h-g))
p.db=j.bE()
f=j.Z()
e=j.Z()
if(f===1){if(e>=8)p.y=j.aN()
if(e>=16)p.x=j.aN()
if(e>=24){o=j.aN()
p.cx=o}if(e>=28)p.z=j.a_()}}if(l>0)p.dx=r.c1(l)
a.b=o
p.dy=T.G7(a,p)
q.push(p)}}}
T.pA.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fd(C.y)
q=T.fd(C.z)
t=T.wt(0,t)
new T.iG(s,t,0,0,0,r,q).dt()
q=t.c.buffer
t=t.a
q.toString
t=H.cR(q,0,t)
this.cy=t
this.d=0}else{t=s.bE()
this.cy=t}}return t},
A:function(a){return this.z},
eR:function(a,b){var t,s,r,q
t=a.a_()
this.a=t
if(t!==67324752)throw H.k(new T.dc("Invalid Zip Signature"))
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.Z()
this.r=a.a_()
this.x=a.a_()
this.y=a.a_()
s=a.Z()
r=a.Z()
this.z=a.c1(s)
this.Q=a.cR(r).bE()
this.cx=a.cR(this.ch.x)
if((this.c&8)!==0){q=a.a_()
if(q===134695760)this.r=a.a_()
else this.r=q
this.x=a.a_()
this.y=a.a_()}}}
T.pB.prototype={
A:function(a){return this.cy}}
T.py.prototype={
fY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.G6(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.c0)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d0()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fM(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dY(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tf(k,0,null,0)}else if(k instanceof T.hm){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hm(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h4(m,"/")
j.y=n.r
s.push(j)}return new T.fL(s,null)}}
T.me.prototype={
eL:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ao(1,this.b)
r=H.cC(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iG.prototype={
dt:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.T()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ar()
if(!(r<s+q))break
if(!this.fu())break}},
fu:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.T()
if(typeof s!=="number")return s.ar()
if(s>=r+q)return!1
p=this.at(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.at(16)
s=this.at(16)
if(n!==0&&n!==(s^65535)>>>0)H.aZ(new T.dc("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.aj()
r=q-r
if(n>s-r)H.aZ(new T.dc("Input buffer is broken"))
m=t.aQ(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.aj()
if(typeof l!=="number")return H.ag(l)
if(typeof s!=="number")return s.T()
t.b=s+(r-(q-l))
this.b.hV(m)
break
case 1:this.dl(this.f,this.r)
break
case 2:this.fv()
break
default:throw H.k(new T.dc("unknown BTYPE: "+o))}return(p&1)===0},
at:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return r.ar()
if(r>=q+p)throw H.k(new T.dc("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.as(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ao(1,a)
this.c=C.a.dK(t,a)
this.d=s-a
return(t&r-1)>>>0},
cp:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.T()
if(typeof p!=="number")return p.ar()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.as(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ao(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dK(r,k)
this.d=q-k
return l&65535},
fv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.at(5)+257
s=this.at(5)+1
r=this.at(4)+4
q=H.cC(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.F,o)
n=C.F[o]
m=this.at(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fd(p)
k=new Uint8Array(H.cC(t))
j=new Uint8Array(H.cC(s))
i=this.dk(t,l,k)
h=this.dk(s,l,j)
this.dl(T.fd(i),T.fd(h))},
dl:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cp(a)
if(s>285)throw H.k(new T.dc("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fb()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.D,p)
o=C.D[p]+this.at(C.X[p])
n=this.cp(b)
if(n<=29){if(n>=30)return H.w(C.A,n)
m=C.A[n]+this.at(C.W[n])
for(r=-m;o>m;){t.cW(t.d4(r))
o-=m}if(o===m)t.cW(t.d4(r))
else t.cW(t.aQ(r,o-m))}else throw H.k(new T.dc("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.aj();--r
t.b=r
if(r<0)t.b=0}},
dk:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cp(b)
switch(q){case 16:p=3+this.at(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.at(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.at(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.dc("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kw.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Math Book",H.a([$.K,$.Y,$.aC],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aO],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c4,$.au],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f7,$.o)
q.i(0,$.bc,$.o)
q.i(0,$.f9,$.j)
q.i(0,$.aM,$.H)
q.i(0,$.cA,$.j)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.EU
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.nQ(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.x
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dO(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ej,$.H)
s.i(0,$.cA,$.o)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ej,$.H)
t.i(0,$.cA,$.o)
t.i(0,$.c1,$.H)
t.i(0,$.t3,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.aa
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.L
r=r+p+".  It is up to the "
q=$.m
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.aa
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.F_
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e9(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
K.bP.prototype={
aP:function(){return"<div class = 'feature'>Feels "+H.y(this.b)+", Quality: "+H.y(this.a)+"</div>"}}
L.kz.prototype={
$1:function(a){return!a.gbx()},
$S:function(){return{func:1,args:[L.eW]}}}
L.eW.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cW,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c1,$.o)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.x
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.o)
s.i(0,$.cM,$.j)
s.i(0,$.cd,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.x
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.R(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c7,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.L
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.x
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.bs+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uh(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.x
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.bs+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.R(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.aq)},
A:function(a){return this.Q},
ah:function(a,b,c,d){var t=this.Q
this.r=new X.is("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ib]),H.a([],[M.hb]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$ia().Y(0,t))H.aZ("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$ia().n(0,t))+".")
$.$get$ia().i(0,t,this)},
gb_:function(){return this.f},
gG:function(a){return this.Q},
gbx:function(){return this.cy}}
L.aS.prototype={}
M.kB.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Barbells",H.a([$.af,$.c9,$.D],s),null,!1,"Strength Building Metal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fg,$.ca],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jo,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fg,$.ca],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aU,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jo,$.X,$.dN],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bd],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vQ,$.ca],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.ca,$.aY],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.e4,$.H)
q.i(0,$.c3,$.o)
q.i(0,$.cM,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e9(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fr(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.e4,$.o)
t.i(0,$.fa,$.o)
t.i(0,$.c3,$.o)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.nQ(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.x+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e9(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.x+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.aa+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,t,null),$.aB)}}
U.kF.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=$.$get$v4()
p=q.createBufferSource()
o=p
t=3
return P.cB(J.xU(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[P.eY]},
$asc8:function(){return[P.eY,P.bg]}}
U.n2.prototype={
aM:function(a){return"audio/mpeg"}}
U.nu.prototype={
aM:function(a){return"audio/ogg"}}
U.oH.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=W.yw(b)
p=new W.hX(q,"canplaythrough",!1,[W.S])
t=3
return P.cB(p.ga9(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asiq:function(){return[W.eZ]},
$asc8:function(){return[W.eZ,P.B]}}
U.oI.prototype={}
U.oJ.prototype={}
O.kH.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cod Piece",H.a([$.O,$.a_,$.aN,$.U,$.X],s),"God damn it, MI. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tj,$.U,$.bO],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.X,$.bh,$.U,$.a8],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aD,$.U,$.aV],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cD,$.j)
t.i(0,$.hh,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.dr,$.j)
t.i(0,$.cm,$.j)
t.i(0,$.f4,$.j)
r="After all the bullshit the "+$.x+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.av+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a4("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a4("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.x+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.a4("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.x+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.kU("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bF("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bK)}}
Y.oV.prototype={
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[P.B]},
$asc8:function(){return[P.B,P.B]}}
Y.nU.prototype={
aM:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[P.bg]},
$asc8:function(){return[P.bg,P.bg]}}
T.kM.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Mystical Vial of Blood",H.a([$.aO,$.bh,$.T,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ao,$.bh,$.T,$.aT],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bh,$.T,$.aI,$.eq],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aV,$.T,$.aI,$.eq,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mt,$.bh,$.aI,$.T,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.df,$.j)
q.i(0,$.t6,$.j)
q.i(0,$.c1,$.o)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.aa+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e9(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.x
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.bs+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.R(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.aa+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.x
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.Fb(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cM,$.j)
s.i(0,$.cm,$.H)
s.i(0,$.aM,$.H)
s.i(0,$.iA,$.j)
s.i(0,$.cn,$.H)
p=$.m
o="The "+p+"  and the "
n=$.dw
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
j=$.x
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
h="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dP(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.x
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.bs+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.wr
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.R(m,h,o)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
o="The "+p+" learns of the "
h=$.av
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.av+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e6+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a4("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dO(),!1,!1,new Y.bU("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.av
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e6+" is now more popular with your friends than you are."
s.i(0,new R.a4("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.nR(),!1,!1,new Y.bU("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
h=$.dw
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.o)+".",o)],H.a([],k),R.dP(),!1,!1,new Y.hK(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c7,$.o)
r="In the wake of the defeat of the "+$.x+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.e6+" to kick your ass, but luckily they have several."
t.i(0,new R.a4("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e9(),!1,!1,new Y.bU("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.x
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.bs+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.R(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.aq)}}
T.kP.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Pan's Pipe",H.a([$.a8,$.X,$.bh,$.T],s),null,!1,"Smonkin Weeds Pipe")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aX,$.T],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.D,$.bh,$.T],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ap,$.D,$.aU,$.T,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.o)
q.i(0,$.fa,$.j)
q.i(0,$.aM,$.o)
p=$.m
o="The "+p+" tries posting a letter through the "
n=$.aa
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.x
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.EV
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.R(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.f
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.j)
s.i(0,$.fa,$.o)
s.i(0,$.aM,$.o)
s.i(0,$.c3,$.o)
s.i(0,$.c7,$.o)
p=$.m
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.aa
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.L+"ing is so joyful it's literally deafening. "
l=$.x
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.R(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.bs+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.o)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cd,$.j)
t.i(0,$.lQ,$.j)
t.i(0,$.fa,$.H)
t.i(0,$.c7,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.x
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.aa
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.av+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.bs+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.R(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aq)}}
M.fT.prototype={
eo:function(a){var t=this.a
if(!t.Y(0,a))return
return t.n(0,a)}}
Y.kR.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=J.eU(b,"\n")
p=P.B
o=P.cE(p,p)
n=P.cE(p,[P.eC,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.db(k).bh(k).length===0)m=null
else if(m==null)m=C.c.bh(k)
else{j=C.c.bh(k)
i=C.c.K(m,0,C.c.e4(m,$.$get$v8())+1)+j
o.i(0,i,m)
if(!n.Y(0,m))n.i(0,m,P.a0(null,null,null,p))
J.xN(n.n(0,m),i)}}r=new M.fT(o,n)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[M.fT]},
$asc8:function(){return[M.fT,P.B]}}
A.kW.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.af,$.aT,$.c9],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aT],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aO,$.aT],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aU,$.a7,$.aT],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ao,$.aT],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aT],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aT],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cn,$.o)
q.i(0,$.cz,$.j)
q.i(0,$.c3,$.o)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.x+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.H)
s.i(0,$.c3,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cD,$.j)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.av
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EY
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cN,$.H)
t.i(0,$.c2,$.o)
t.i(0,$.cz,$.j)
t.i(0,$.c3,$.o)
t.i(0,$.hc,$.o)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.aa
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
S.bC.prototype={
aP:function(){return"<div class = 'feature'>"+this.c+", Says: "+this.d+"</div>"},
A:function(a){return H.y(new H.dV(H.kn(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.ic.prototype={}
S.mb.prototype={}
M.l8.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Can of Spray Paint",H.a([$.aw,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.ah,$.aT,$.aC],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tA,$.D,$.as],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.ah,$.aC],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aw,$.am,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ah,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ah,$.aE,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aw,$.ah],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ap,$.ah,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.ah],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.ah,$.aC],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.o)
q.i(0,$.cA,$.j)
q.i(0,$.aM,$.o)
p=$.m
o="The "+p+" visits a beautiful "
n=$.aa
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.x+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.L+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.H)
s.i(0,$.c3,$.o)
s.i(0,$.cz,$.H)
s.i(0,$.bc,$.o)
s.i(0,$.cD,$.j)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.av
l=l+n+" "
k=$.aa
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.H)
t.i(0,$.cn,$.H)
t.i(0,$.f4,$.H)
t.i(0,$.c2,$.H)
t.i(0,$.bc,$.o)
t.i(0,$.aM,$.o)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.aa+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EO
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
T.le.prototype={}
V.lg.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Trendy Fabric",H.a([$.aw,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aw,$.tp,$.eq],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tt,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jm
r=A.i("Broom",H.a([r,$.X,$.af,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.tC,$.af],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.aY,$.bh,$.aw,$.hn],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aw,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aF,$.c9,$.D,$.bl],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aw,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bl],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ap,$.af,$.c9,$.to],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bO],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bO,$.jp],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aw,$.bR,$.aQ],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ao,$.bi,$.aX],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ao,$.bi],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aw,$.ao,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cD,$.o)
q.i(0,$.cm,$.o)
q.i(0,$.cn,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.aa
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cn,$.j)
s.i(0,$.c3,$.o)
s.i(0,$.f4,$.j)
s.i(0,$.dr,$.o)
s.i(0,$.bc,$.j)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.aa
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.EW
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hd,$.j)
t.i(0,$.bc,$.o)
t.i(0,$.f5,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.iA,$.j)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.aa
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
U.lh.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aC,$.a7,$.K,$.aD,$.T,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aE,$.bh,$.T,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aX,$.bh,$.T,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aO,$.T,$.bO],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aO,$.T,$.bl,$.aD,$.aV,$.bX,$.aW],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aF,$.aW,$.aD,$.K,$.T],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.j)
q.i(0,$.cW,$.o)
q.i(0,$.fa,$.H)
q.i(0,$.bc,$.H)
q.i(0,$.c1,$.o)
p=$.m
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.aa
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.x
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.j)
s.i(0,$.cW,$.o)
s.i(0,$.ep,$.aj)
s.i(0,$.ek,$.o)
s.i(0,$.t3,$.o)
s.i(0,$.df,$.o)
s.i(0,$.cW,$.o)
s.i(0,$.bc,$.H)
s.i(0,$.c1,$.o)
s.i(0,$.dg,$.o)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.av
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.x
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.bs+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.aa
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.x
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.bs+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.R(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.c1,$.j)
t.i(0,$.vu,$.aj)
t.i(0,$.f7,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.x
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.av
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.aa
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.x
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.bs+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EN
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.R(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
Z.li.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.K,$.aC,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aE,$.bh,$.af,$.T,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aE,$.bh,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.o)
q.i(0,$.f5,$.j)
q.i(0,$.aM,$.o)
q.i(0,$.iA,$.o)
p=$.r
o="A "+p+" child tugs on the "
n=$.m
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.aa
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.x
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.L+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.ET
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.R(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=this.f
l.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.o)
s.i(0,$.f5,$.j)
s.i(0,$.dt,$.o)
s.i(0,$.cV,$.o)
s.i(0,$.lM,$.o)
s.i(0,$.cz,$.j)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.x
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.R("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.j)
t.i(0,$.iv,$.o)
t.i(0,$.aM,$.o)
t.i(0,$.cV,$.j)
t.i(0,$.lM,$.j)
t.i(0,$.f5,$.o)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.x
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.av+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.aa+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.R("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l.i(0,new X.F(s,t,null),$.aq)}}
X.is.prototype={}
X.ib.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hb]]}}}
M.hb.prototype={}
U.lJ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Fluthulu Poster",H.a([$.O,$.aY,$.aW,$.bm],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.aY,$.aW],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aF,$.aE,$.aX,$.fi,$.aN],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aE,$.vX,$.er,$.aN],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aE,$.bX,$.bi,$.aW],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aC,$.K,$.aA,$.aW],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a2,$.af],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a2,$.af],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a2,$.bX,$.aW,$.bm],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aF,$.au,$.a2,$.af,$.aN],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aF,$.tk,$.a2,$.af,$.aN],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f6,$.aj)
q.i(0,$.cm,$.o)
q.i(0,$.c7,$.o)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.x
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.aa
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.j)
s.i(0,$.df,$.j)
s.i(0,$.iw,$.o)
s.i(0,$.c1,$.j)
s.i(0,$.ep,$.j)
s.i(0,$.hg,$.o)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.j)
t.i(0,$.hf,$.o)
t.i(0,$.c1,$.j)
t.i(0,$.dK,$.o)
t.i(0,$.ej,$.o)
t.i(0,$.t6,$.o)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.ab.prototype={
aP:function(){return H.y(this.b)+", Quality: "+H.y(this.a)},
A:function(a){return H.y(new H.dV(H.kn(this),null))+": "+H.y(this.b)}}
O.c8.prototype={
aZ:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$aZ=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cB(q.aO(a),$async$aZ)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aZ,s)}}
O.dn.prototype={
b6:function(a){var t=0,s=P.bp(),r
var $async$b6=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$b6,s)},
cE:function(a){var t=0,s=P.bp(),r,q=this
var $async$cE=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yx([J.uV(a)],q.aM(0),null))
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$cE,s)},
aO:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aO=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bk(0,$.an,null,[p])
W.vC(a,null,q.aM(0),null,null,"arraybuffer",null,null).b0(new O.kL(new P.dX(o,[p])))
r=o
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aO,s)},
$asc8:function(a){return[a,P.bg]}}
O.kL.prototype={
$1:function(a){this.a.ay(0,H.i7(J.xZ(a),"$isbg"))},
$S:function(){return{func:1,args:[W.e7]}}}
O.eG.prototype={
b6:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$b6=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:a.toString
q=H.cR(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hL(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$b6,s)},
aO:function(a){var t=0,s=P.bp(),r
var $async$aO=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=W.vB(a,null,null)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aO,s)},
$asc8:function(a){return[a,P.B]}}
O.iq.prototype={
aO:function(a){var t=0,s=P.bp(),r
var $async$aO=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aO,s)},
b6:function(a){return H.aZ("Element format doesn't read from buffers")},
$asc8:function(a){return[a,P.B]}}
V.m0.prototype={
aM:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:t=3
return P.cB(A.hv("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[R.hi]},
$asc8:function(){return[R.hi,P.bg]}}
Z.ir.prototype={}
E.iE.prototype={}
E.nt.prototype={}
E.N.prototype={
A:function(a){var t="["+J.cK(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fN.prototype={
A:function(a){var t="[(Random from "+P.tH(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kA.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.m5.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aC,$.U,$.K,$.a_,$.mx],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aE,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.ty,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lS,$.o)
t.i(0,$.c7,$.j)
t.i(0,$.dg,$.H)
t.i(0,$.ds,$.j)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.av
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.aa
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.x
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.R(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
t.i(0,new R.a4("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.x+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.x+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.av+" Quest Online: The "+$.aa+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a4("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bF("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bK)}}
Y.m6.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Sherpa Parka",H.a([$.bl,$.U,$.cf],s),"Clearly the best class uses this.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bl,$.aC,$.K,$.U,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.U,$.aU],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.U,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lS,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.dg,$.o)
t.i(0,$.ds,$.j)
r="Now that the "+$.x+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a4("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bK)}}
T.m7.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Doll",H.a([$.ty,$.aw,$.at,$.T],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.X,$.at,$.T,$.a_,$.aW],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.ts,$.T],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.T,$.aA],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.am,$.aO,$.T],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.ek,$.H)
q.i(0,$.em,$.j)
q.i(0,$.c3,$.o)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.x
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.R(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=$.m
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.aa
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.x
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.R(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.nR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.j)
s.i(0,$.iw,$.j)
s.i(0,$.fa,$.o)
s.i(0,$.c1,$.j)
s.i(0,$.cn,$.o)
s.i(0,$.dg,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.aa
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.x
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.R(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j="Now that the "+$.x+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.e6+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a4("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e9(),!1,!1,new Y.bU("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.x
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.R(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.lR,$.j)
t.i(0,$.f4,$.o)
t.i(0,$.hg,$.j)
t.i(0,$.cm,$.o)
t.i(0,$.em,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.M("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.av+" laws put in place by "+$.x+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.av
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.L
t.i(0,new R.a4("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fr(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.m
m="The "+q+"  and the "
r=$.dw
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.x
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.R(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.o)+".",n)],H.a([],i),R.dP(),!1,!1,new Y.iC(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
n=$.m
r="The "+n+"  and the "
q=$.dw
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.x
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.R(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.o)+".",m)],H.a([],i),R.dP(),!1,!1,new Y.jH(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
h.i(0,new X.F(s,t,null),$.aB)}}
B.m8.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Family Ashes",H.a([$.aF,$.ap,$.U,$.aD,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.K,$.U,$.aD,$.mu],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aC,$.U,$.ah],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vM,$.U,$.tg,$.mu],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.th,$.U,$.as,$.mu],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cd,$.o)
r=$.x
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a4("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r="The "+$.x+" has released the frogs into the "
p=$.m
t.i(0,new R.bF("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bK)}}
X.ma.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Wand",H.a([$.X,$.T,$.a2,$.bj],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bj,$.br,$.T,$.aP,$.a8,$.a_,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bS,$.mt,$.T,$.a2,$.aT,$.bj],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bj,$.aP,$.T,$.ap],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aE,$.aP,$.T,$.bj],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.t2,$.j)
q.i(0,$.cm,$.o)
q.i(0,$.aM,$.j)
q.i(0,$.cV,$.j)
p=$.m
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.L+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.x
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.aa
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EQ
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
j="The "+n+" has slain "+$.x+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a4("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.d5(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.j)
s.i(0,$.hc,$.o)
s.i(0,$.dt,$.j)
p=$.m
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.aa
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.x
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.dr,$.H)
t.i(0,$.cA,$.j)
t.i(0,$.cV,$.j)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.x
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.aa
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.R("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.x
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.R("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fr(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.aq)}}
Q.mh.prototype={
aZ:function(a){var t=0,s=P.bp(),r,q,p
var $async$aZ=P.bx(function(b,c){if(b===1)return P.bu(c,s)
while(true)switch(t){case 0:q=W.vD(null,a,null)
p=new W.hX(q,"load",!1,[W.S])
t=3
return P.cB(p.ga9(p),$async$aZ)
case 3:r=q
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$aZ,s)},
$asdn:function(){return[W.fe]},
$asc8:function(){return[W.fe,P.bg]}}
Q.nJ.prototype={
aM:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cB(q.cE(b),$async$P)
case 3:p=n.vD(null,d,null)
o=new W.hX(p,"load",!1,[W.S])
t=4
return P.cB(o.ga9(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)}}
Q.nG.prototype={
aM:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp()
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bv(null,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[Q.jG]},
$asc8:function(){return[Q.jG,P.bg]}}
V.mk.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Inkwell",H.a([$.aO,$.bh,$.T,$.br],s),null,!1,"Vial of Not-ABs Oil")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.O,$.aY,$.T,$.tn],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bh,$.T,$.aI,$.eq],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aV,$.T,$.aI,$.eq,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mt,$.bh,$.aI,$.T,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cM,$.j)
q.i(0,$.cm,$.H)
q.i(0,$.aM,$.H)
q.i(0,$.iA,$.j)
q.i(0,$.cn,$.H)
q.i(0,$.vq,$.j)
p=$.m
o="The "+p+"  and the "
n=$.dw
o=o+n+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+p+"  and the "+n+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+p+"  and the "+n+" trust each other to have their backs.  So when the "
k=$.x
l=l+k+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+k+"."
j="Slaying the "+k+" proves the POWER OF TEAMWORK!"
i=[U.b]
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.R(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dP(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.x
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.bs+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.wr
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.R(m,j,o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
o="The "+p+" learns of the "
j=$.av
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.x
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.bs+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.R(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.av+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.e6+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a4("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dO(),!1,!1,new Y.bU("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.av
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.e6+" is now more popular with your friends than you are."
q.i(0,new R.a4("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.nR(),!1,!1,new Y.bU("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
j=$.dw
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.x
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.R(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.o)+".",o)],H.a([],i),R.dP(),!1,!1,new Y.hK(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=this.f
o.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.H)
s.i(0,$.hc,$.H)
s.i(0,$.cA,$.H)
s.i(0,$.c3,$.j)
s.i(0,$.f7,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.x
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.R(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
h=$.m
j="The "+h+" is visiting a "
p=$.r
j=j+p+" town, but before they could reach it, a crowd of angry "+p+"s starts charging towards them. \u201cThere\u2019s the one who messed up our town!\u201d The "+h+" decides to make a hasty retreat."
k="Coming back to the "+p+" town secretly, the "+h+" finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The "+h+" discreetly helps clean the town and vows to clear their name."
l="The "+h+" heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the "+h+" with an otherworldly transparent color. The "+h+" soundly defeats the doppelganger in a quick strife. "+p+"s witness the smackdown and cheer. The "+h+"\u2019s name has been cleared!"
m="The "+h+" realizes that the doppelganger was created by "
n=$.x
m=m+n+" and more could be created if unstopped. The"+h+" tracks "+n+"\u2019s lair down by following the path of vandalism created by their doppelganger. It\u2019s time to take "+n+" down for framing the "+h+"."
p=n+" is defeated and doppelganger production has been stopped. The "+p+"s apologize for mistaking the "+h+" for the real vandal."
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.R(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.aa+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.x
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.R(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.Fc(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
o.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.ej,$.j)
t.i(0,$.cm,$.H)
t.i(0,$.aM,$.H)
t.i(0,$.c3,$.j)
t.i(0,$.eo,$.H)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.av+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.x
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.R("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o.i(0,new X.F(s,t,null),$.bK)}}
B.mm.prototype={
$1:function(a){return!a.gbx()},
$S:function(){return{func:1,args:[B.ff]}}}
B.ff.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cW,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c1,$.o)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.o)
s.i(0,$.cM,$.j)
s.i(0,$.cd,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c7,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.Z("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uh(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aB)},
A:function(a){return this.ch},
gbx:function(){return this.a},
gb_:function(){return this.r},
gG:function(a){return this.ch}}
A.a5.prototype={
gh_:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.jK(null,null)
s.d_(this.r.a)
if(this.x===0)return t
r=P.d3(G.yE(this.r),!0,G.a1)
C.b.d2(r,new A.mB())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c0)(r),++p){o=r[p]
if(!(o instanceof G.ad||o.gdV().length===0))t.push(" "+Y.GU(s.hz(o.gdV())))}return t},
gbA:function(){var t,s,r
for(t=this.r,s=new P.dB(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbA()
return r},
gfR:function(){var t=this.r
return new H.dz(t,new A.mA(),[H.Q(t,0)])},
gh9:function(){var t,s,r,q,p
for(t=this.gh_(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c0)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.gh9()},
ax:function(a,b){var t=b.gbA()-this.gbA()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bB(t)},
H:function(a,b,c,d,e){var t,s,r
t=P.tT(b,null)
this.r=t
if(t.a===0)t.h(0,$.vS)
s=P.tT(this.gfR(),null)
for(t=new P.dB(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.r.aT(0,r.geD())
this.r.am(0,r)}$.$get$wh().push(this)},
$isbH:1,
$asbH:function(){return[A.a5]}}
A.mB.prototype={
$2:function(a,b){return a.ge8()-C.a.bB(b.ge8())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.mA.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
N.mI.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Gavel",H.a([$.X,$.ms],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aE,$.aV],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.aw],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aC],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bR,$.ao,$.bl],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aC,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aF,$.D,$.aV],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f6,$.H)
q.i(0,$.c2,$.o)
q.i(0,$.cA,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.aa+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c2,$.j)
s.i(0,$.dg,$.o)
s.i(0,$.cM,$.o)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.aa+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EM
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.j)
t.i(0,$.cd,$.o)
t.i(0,$.df,$.H)
t.i(0,$.ep,$.o)
t.i(0,$.ek,$.o)
t.i(0,$.f8,$.o)
t.i(0,$.ix,$.o)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EZ
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aB)}}
S.mK.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Shining Armor",H.a([$.aF,$.mw,$.U,$.fi],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mw,$.U,$.aL,$.as,$.er],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.U,$.bi,$.at],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aF,$.fi,$.U,$.mw],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lP,$.j)
t.i(0,$.dh,$.j)
t.i(0,$.e4,$.j)
t.i(0,$.f8,$.j)
t.i(0,$.f6,$.o)
r="The "+$.x+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a4("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.av
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.x
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.aa
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a4("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r="The volcanos of the land are weirdly active after the defeat of the "+$.x+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a4("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
Q.mL.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("LAW Gavel",H.a([$.T,$.X,$.ms],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.T,$.aE,$.aV],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.T,$.tD,$.D,$.aV],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f6,$.j)
q.i(0,$.dg,$.o)
q.i(0,$.cd,$.o)
q.i(0,$.c2,$.H)
q.i(0,$.cz,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.aa+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.x
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.bs+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.j)
s.i(0,$.c3,$.o)
s.i(0,$.cm,$.o)
s.i(0,$.dh,$.H)
s.i(0,$.en,$.H)
p=$.m
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.r
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.x
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.bs+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.R(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.x
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.bs+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.R(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.j)
t.i(0,$.cW,$.o)
t.i(0,$.iy,$.o)
t.i(0,$.iv,$.H)
t.i(0,$.dL,$.H)
r=$.m
q="The "+r+" looks upon the land and notices how some of the "
p=$.r
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.x
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.aa
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.bs+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.R(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.x
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.bs+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.R(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
K.mN.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Creeping Vine",H.a([$.X,$.T,$.aQ,$.at],s),null,!1,"Sentient Plant Tentacles")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tj,$.T,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aF,$.au,$.T,$.at],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.T,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aO,$.T,$.aI,$.a_,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bi,$.T,$.at],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.j)
q.i(0,$.bc,$.j)
q.i(0,$.he,$.H)
q.i(0,$.aM,$.o)
q.i(0,$.lS,$.o)
q.i(0,$.cN,$.H)
p=$.m
o="The "+p+" finds a village of compliant "
n=$.r
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.L+"ing in panic. Don't upset "
m=$.x
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.R(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.cN,$.H)
s.i(0,$.aM,$.o)
o=$.m
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.r
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.x
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.R(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.x
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.bs+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.R(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.nQ(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cW,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.dM,$.j)
t.i(0,$.c1,$.o)
t.i(0,$.e3,$.o)
t.i(0,$.it,$.o)
r="Drawn by wailing and "+$.L+"ing, the "
q=$.m
r=r+q+" enters a rotting "
o=$.r
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.x
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.R(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.aq)}}
G.mO.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("FAQ",H.a([$.a7,$.T,$.Y,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aE,$.T,$.aP,$.a7,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.T,$.aP,$.bW,$.a_,$.tk],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vW,$.T,$.af],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.w4,$.T],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aQ,$.T,$.aP,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aO,$.T,$.at],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lO,$.j)
q.i(0,$.hd,$.o)
q.i(0,$.dK,$.j)
q.i(0,$.em,$.j)
p=$.m
o="The "+p+" is searching for the lair of "
n=$.x
o=o+n+" when some local "
m=$.r
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.R(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.x
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.R(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.x
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.av
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.R(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dO(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.f
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.o)
s.i(0,$.aM,$.o)
s.i(0,$.dr,$.j)
s.i(0,$.lN,$.j)
s.i(0,$.el,$.j)
s.i(0,$.hc,$.j)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.aa
n=n+l+", but "
k=$.x
n=n+k+" has hoarded all of the planets "
j=$.av
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.R(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.nR(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.x
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.R("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.f7,$.o)
q.i(0,$.bc,$.o)
q.i(0,$.f9,$.j)
q.i(0,$.aM,$.o)
q.i(0,$.cA,$.j)
o="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.e6+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a4("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.e9(),!1,!1,new Y.bU("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.e6+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a4("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.d5(),!1,!1,new Y.bU("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.x
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.R(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.j)
t.i(0,$.lO,$.j)
t.i(0,$.em,$.o)
t.i(0,$.cm,$.o)
t.i(0,$.t5,$.o)
t.i(0,$.c1,$.H)
t.i(0,$.e4,$.H)
t.i(0,$.c3,$.o)
t.i(0,$.cz,$.H)
t.i(0,$.bc,$.o)
t.i(0,$.cD,$.j)
s=$.m
r="The "+s+" is approached by a Fast Talking "
o=$.r
r=r+o+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
n=$.aa
r=r+n+". The "+s+" agrees to perform the titular role."
m="The opening night performance of the Beautiful "+n+" is a huge success! The "+$.L+"ing of the fans is it's own reward!"
n="When it comes time for the next performance of the Beautiful "+n+", the "+s+" is turned away at the door. Apparently the "
l=$.x
o=n+l+" rampaged and terrorized "+o+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
n="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.R(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n="After the "+$.x+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.e6+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a4("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.e9(),!1,!1,new Y.bU("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.F(q,t,null),$.aq)}}
Z.n1.prototype={
D:function(){var t,s,r,q
t=this.L
s=[G.a1]
r=A.i("Dream Bubbles Book",H.a([$.K,$.ah,$.aC,$.vP],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.Q(t,0)]))
t=Q.J(null,null,A.a5)
r=A.i("Deck of Uno Cards",H.a([$.mp,$.tx,$.ah],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.U,$.ah],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.mx,$.U,$.ah],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.K,$.U,$.bq,$.aC],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.df,$.H)
q.i(0,$.ep,$.H)
q.i(0,$.c1,$.H)
q.i(0,$.cM,$.o)
p="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="As soon as the "+$.x+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a4("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.dw
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.x
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.R(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.Fd(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
q.i(0,new R.a4("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.nS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.x
p.i(0,new X.F(s,q,null),$.bK)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.vp,$.j)
t.i(0,$.cV,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.aM,$.o)
s="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bF("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="As soon as the "+$.x+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a4("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.L,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.bK)}}
S.n3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Alternate Costume",H.a([$.O,$.U,$.a2,$.a_,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.U,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.U,$.af,$.a2,$.dN],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jm,$.X,$.U,$.at,$.a2,$.dN],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ej,$.j)
t.i(0,$.f8,$.o)
t.i(0,$.cd,$.j)
t.i(0,$.en,$.o)
t.i(0,$.cW,$.H)
r="The "+$.x+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
t.i(0,new R.a4("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.x+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.av
t.i(0,new R.a4("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="Now that the "+$.x+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.av
t.i(0,new R.a4("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.bU(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
U.n4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Maiden's Breath",H.a([$.aQ,$.U,$.aw],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.U,$.dN,$.br],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aw,$.aF,$.D,$.U,$.a_,$.fi,$.vG],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.U,$.a8,$.aC],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ds,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.bc,$.o)
t.i(0,$.dr,$.o)
t.i(0,$.cz,$.o)
r="The "+$.x+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a4("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.x+". ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
V.nb.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Puzzle Box",H.a([$.X,$.T,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.T,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.T],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.T,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aF,$.jn,$.au,$.ah,$.T,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.o)
q.i(0,$.hd,$.H)
q.i(0,$.cA,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.x
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.R(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dO(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.x
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.R("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.H)
s.i(0,$.c2,$.o)
s.i(0,$.cA,$.H)
s.i(0,$.cV,$.H)
p=$.x
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.R("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.j)
t.i(0,$.bc,$.o)
t.i(0,$.f9,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.cA,$.j)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.x
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.aa+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.x
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.R(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fr(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aq)}}
E.nc.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Feather Pen",H.a([$.D,$.U,$.ah,$.br],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.w3,$.U,$.jn,$.af,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.U,$.ah,$.aC],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ds,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.bc,$.o)
t.i(0,$.dr,$.o)
t.i(0,$.cz,$.o)
r="The "+$.x+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="You'd think after the dramatic defeat of the "+$.x+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.aa
t.i(0,new R.a4("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
F.nd.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Piano",H.a([$.af,$.X,$.a8,$.ah],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a8],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aU,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a8],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a8],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aE,$.a8,$.a7,$.aU,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aE,$.a8,$.a7,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a8],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cm,$.aj)
q.i(0,$.t5,$.j)
q.i(0,$.em,$.j)
q.i(0,$.dr,$.o)
q.i(0,$.aM,$.o)
q.i(0,$.lL,$.o)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.x+" can only be awoken by the Legendary Hero playing the "
n=$.av
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.aa
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.av
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.aa+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.ER
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.t8,$.aj)
s.i(0,$.dg,$.o)
s.i(0,$.cM,$.o)
s.i(0,$.dr,$.j)
s.i(0,$.lL,$.aj)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.av
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.x
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.aa+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.he,$.aj)
t.i(0,$.c3,$.o)
t.i(0,$.dM,$.o)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.av+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
Y.nq.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:t=3
return P.cB(A.hv("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cB(Q.o6(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bo(p)
o.eA(p,P.wl(["",$.$get$vf()],P.B,S.hz))
o.ez(p,!1)
q.b=p}J.v1(p,b)
r=J.v1(q.b,b)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[S.fp]},
$asc8:function(){return[S.fp,P.B]}}
V.ny.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Shorts",H.a([$.O,$.U,$.fh,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aE,$.U,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ao,$.U,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lP,$.j)
t.i(0,$.cN,$.o)
t.i(0,$.hh,$.o)
t.i(0,$.lR,$.o)
t.i(0,$.ds,$.o)
t.i(0,$.bc,$.o)
t.i(0,$.e3,$.o)
t.i(0,$.el,$.o)
t.i(0,$.t9,$.o)
t.i(0,$.it,$.o)
t.i(0,$.lN,$.o)
r="The "+$.x+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bF("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.m
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.L
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.aa
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.x
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.R(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m="Now that the "+$.x+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a4("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.av+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
G.nL.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Superhero Action Figure",H.a([$.aE,$.am,$.aN],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aE,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aE,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aE,$.aT,$.bl,$.cf],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aE,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aQ,$.am,$.O,$.at],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aQ,$.aK,$.am,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aN,$.D,$.am,$.er,$.as,$.bS],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.o)
q.i(0,$.cD,$.o)
q.i(0,$.c3,$.j)
q.i(0,$.cN,$.aj)
q.i(0,$.dt,$.aj)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.av+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.ES
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.ek,$.o)
s.i(0,$.dg,$.o)
s.i(0,$.cD,$.o)
s.i(0,$.c3,$.o)
s.i(0,$.dh,$.j)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.av
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.o)
t.i(0,$.dK,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.dh,$.o)
r=$.m
q="The "+r+" gets a job at the "+$.av+" Cinema. A new movie, The Lonely "
o=$.aa
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
N.nO.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Feather'd Cap",H.a([$.O,$.U,$.fh],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tp,$.U,$.fh],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bn,$.U],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cD,$.o)
t.i(0,$.cV,$.o)
t.i(0,$.dM,$.H)
r="With the closing of the curtain, the "+$.x+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.x
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a4("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.aa+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
U.b.prototype={}
U.R.prototype={}
R.nP.prototype={
aP:function(){return"<div class = 'feature'>QuestChain: "+this.c+", Reward: "+H.jJ(this.z)+"</div>"},
A:function(a){return H.y(new H.dV(H.kn(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Z.prototype={}
R.M.prototype={}
R.a4.prototype={}
R.bF.prototype={}
E.nT.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Curtain",H.a([$.O,$.T,$.aN],s),null,!1,"Show Ender")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.er,$.aL,$.T,$.as,$.aW,$.aN,$.bm,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.D,$.aU,$.a7,$.T,$.aN],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aF,$.D,$.aU,$.bq,$.ca,$.T,$.aN],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ao,$.bq,$.ah,$.T,$.a_,$.aN],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.T,$.aW,$.ap,$.bn,$.aN],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lK,$.j)
q.i(0,$.df,$.j)
q.i(0,$.dg,$.j)
q.i(0,$.cW,$.o)
q.i(0,$.c1,$.o)
q.i(0,$.cd,$.o)
q.i(0,$.c2,$.H)
q.i(0,$.dt,$.o)
q.i(0,$.ek,$.j)
q.i(0,$.ix,$.j)
q.i(0,$.f8,$.j)
q.i(0,$.lQ,$.j)
q.i(0,$.he,$.o)
q.i(0,$.ep,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.aa
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fr(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.x
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.j)
s.i(0,$.c1,$.o)
s.i(0,$.c2,$.j)
s.i(0,$.cm,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cD,$.o)
s.i(0,$.iw,$.H)
s.i(0,$.df,$.o)
s.i(0,$.cN,$.j)
s.i(0,$.c3,$.j)
s.i(0,$.dt,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.av
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lK,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.c2,$.j)
t.i(0,$.cN,$.o)
t.i(0,$.cz,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
t.i(0,new R.a4("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.dR.prototype={}
Y.a6.prototype={}
Y.dd.prototype={}
Y.bU.prototype={
gG:function(a){return this.c}}
Y.P.prototype={}
Y.ie.prototype={}
Y.bE.prototype={}
Y.d_.prototype={}
Y.kU.prototype={}
Y.bD.prototype={}
Y.hK.prototype={}
Y.iC.prototype={}
Y.jH.prototype={}
N.nY.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Domino Mask",H.a([$.O,$.U,$.fh],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.ti,$.U,$.fh,$.vH],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aE,$.a7,$.U,$.Y,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c2,$.j)
t.i(0,$.cd,$.o)
t.i(0,$.dh,$.o)
r="The "+$.x+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.x
t.i(0,new R.a4("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
Q.nZ.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Red Rose",H.a([$.aA,$.aw],s),null,!1,"Seductive Plant")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.aA,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aA,$.ao],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aA,$.ap],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aA,$.bn,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aC,$.K,$.aA],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cn,$.j)
q.i(0,$.hh,$.o)
q.i(0,$.f4,$.o)
q.i(0,$.hg,$.j)
q.i(0,$.cm,$.o)
q.i(0,$.iu,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.aa+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cm,$.o)
s.i(0,$.dK,$.j)
s.i(0,$.hg,$.j)
s.i(0,$.cn,$.o)
s.i(0,$.em,$.H)
s.i(0,$.iu,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.f4,$.o)
t.i(0,$.lR,$.j)
t.i(0,$.hg,$.j)
t.i(0,$.cm,$.o)
t.i(0,$.em,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.x+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EP
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.m
r="The "+n+"  and the "
o=$.dw
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.iC(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=$.m
n="The "+o+"  and the "
r=$.dw
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.hK(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r=$.m
o="The "+r+"  and the "
n=$.dw
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dP(),!1,!1,new Y.jH(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p.i(0,new X.F(s,t,null),$.aB)}}
T.o0.prototype={
$1:function(a){return!a.gbx()},
$S:function(){return{func:1,args:[T.ft]}}}
T.ft.prototype={
D:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.Q(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cW,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c1,$.o)
q.i(0,$.e3,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a4("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n=this.x
n.i(0,new X.F(s,q,null),$.bK)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.o)
s.i(0,$.cM,$.j)
s.i(0,$.cd,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a4("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a4("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dw+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dP(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.aj)
n.i(0,new X.F(q,s,null),$.bK)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.aM,$.j)
t.i(0,$.bc,$.H)
t.i(0,$.c7,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uh(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
n.i(0,new X.F(s,t,null),$.bK)},
A:function(a){return this.r},
a8:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.is("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ib]),H.a([],[M.hb]))
this.D()
this.E()
t=this.Q
if($.$get$jN().Y(0,t))H.aZ("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cK($.$get$jN().n(0,t))+".")
$.$get$jN().i(0,t,this)},
gG:function(a){return this.r},
gb_:function(){return this.x},
gbx:function(){return this.cx}}
E.o1.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Sage's Robe",H.a([$.O,$.U,$.aY,$.Y,$.a2,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.U,$.aC,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.U,$.hn,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.f7,$.o)
t.i(0,$.bc,$.o)
t.i(0,$.f9,$.j)
t.i(0,$.aM,$.H)
t.i(0,$.cA,$.j)
r="The "+$.x+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a4("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
K.o2.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Uno Reverse Card",H.a([$.mp,$.T,$.aN,$.jp],s),null,!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hn,$.aY,$.T,$.jp],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.lK,$.j)
q.i(0,$.df,$.j)
q.i(0,$.dg,$.j)
q.i(0,$.cW,$.o)
q.i(0,$.c1,$.o)
q.i(0,$.cd,$.o)
q.i(0,$.c2,$.H)
q.i(0,$.dt,$.o)
q.i(0,$.ek,$.j)
q.i(0,$.ix,$.j)
q.i(0,$.f8,$.j)
q.i(0,$.lQ,$.j)
q.i(0,$.he,$.o)
q.i(0,$.ep,$.j)
p=$.m
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.aa
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.R(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fr(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.m
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.x
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.R(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.j)
s.i(0,$.c1,$.o)
s.i(0,$.c2,$.j)
s.i(0,$.cm,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.cD,$.o)
s.i(0,$.iw,$.H)
s.i(0,$.df,$.o)
s.i(0,$.cN,$.j)
s.i(0,$.c3,$.j)
s.i(0,$.dt,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.av
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.x
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.R(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.lK,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.c2,$.j)
t.i(0,$.cN,$.o)
t.i(0,$.cz,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.R(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.o3.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Walking Stick",H.a([$.X,$.U,$.dN],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.U,$.tn,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.U,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.D,$.U,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.ds,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.c3,$.H)
t.i(0,$.aM,$.H)
r="Now that the "+$.x+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a4("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bF("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.bK)}}
L.o4.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Scroll",H.a([$.K,$.U,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aO,$.U,$.ak,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.U,$.aC,$.Y,$.ak,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.lL,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.cA,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.cV,$.o)
r="The "+$.x+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a4("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
S.o7.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cueball",H.a([$.vO,$.U],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fg,$.vN,$.U,$.aP],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aO,$.U,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vJ,$.U,$.aY],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.vr,$.j)
t.i(0,$.iv,$.j)
t.i(0,$.vo,$.j)
t.i(0,$.cN,$.o)
r="Now that the "+$.x+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a4("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
q="The "+$.x+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bF("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a4("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
r="A group of underlings are still making trouble, even after the defeat of the "+$.x+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.aa
t.i(0,new R.a4("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
T.bZ.prototype={
aP:function(){return"<div class = 'feature'>Smell "+H.y(this.b)+", Quality: "+H.y(this.a)+"</div>"}}
Y.oe.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.aC,$.U,$.K,$.bq,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aO,$.U,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.U
r=A.i("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.U,$.aP,$.aw,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.bc,$.o)
t.i(0,$.ds,$.j)
t.i(0,$.cN,$.o)
t.i(0,$.aM,$.o)
t.i(0,$.c7,$.j)
r="The defeat of the "+$.x+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bF("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.x+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a4("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
N.of.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Fiduspawn Plush",H.a([$.cf,$.O,$.aY],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cf,$.O,$.aY],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.tm,$.aE],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.br,$.at,$.bi,$.aX,$.bm,$.tu],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.aY,$.cf],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aC,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aC,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aY,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.H)
q.i(0,$.aM,$.o)
q.i(0,$.cV,$.j)
q.i(0,$.cA,$.o)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.av+" or "+$.aa+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.H)
s.i(0,$.aM,$.j)
s.i(0,$.cV,$.j)
s.i(0,$.t2,$.j)
s.i(0,$.cm,$.j)
s.i(0,$.t8,$.j)
s.i(0,$.cA,$.o)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.av
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cM,$.H)
t.i(0,$.dK,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.dh,$.j)
t.i(0,$.f6,$.j)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,t,null),$.aB)}}
M.bt.prototype={
aP:function(){return"<div class = 'feature'>Sounds Like "+H.y(this.b)+", Quality: "+H.y(this.a)+"</div>"}}
N.og.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Frog Statue",H.a([$.aF,$.au,$.T],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.T],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c4,$.Y,$.a7,$.T],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aO,$.Y,$.T],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.T,$.tq,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.r+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.L+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.x+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.m
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.r+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.r+" tells the "
p=$.m
t=t+p+" that they must negotiate with "
o=$.x
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.m
p="The "+o+" meets with "
t=$.x
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cN,$.H)
t.i(0,$.t4,$.j)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
t.i(0,new R.bF("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.G2)}}
U.ae.prototype={
gG:function(a){return this.e+"kind"},
$isbH:1,
$asbH:function(){return[A.a5]}}
K.cF.prototype={
gG:function(a){return this.a}}
M.ok.prototype={
aM:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bx(function(a8,a9){if(a8===1)return P.bu(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.de(null,0)
q.a=J.dZ(a7,0)
for(p=0,o="";p<6;++p)o+=H.hL(q.a6(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.a6(8)
l=9+m*6
o=8*m
k=q.a6(o)
j=q.a6(o)
i=q.a6(o)
h=q.a6(o)
g=q.a6(o)
f=q.a6(o)
o=P.C
e=P.B
d=P.cE(o,e)
c=new O.cY(k,j,null,null,null,null,null,null,d,P.cE(e,o))
c.x=new Uint8Array(H.cC(k*j))
b=q.a6(8)
for(o=[o],p=0;p<b;++p){a=q.a6(8)
a0=q.a6(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a6(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oL(a1,0,null))}a4=q.a6(8)
a5=$.$get$wF().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hU(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hG()
r=c
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[O.cY]},
$asc8:function(){return[O.cY,P.bg]}}
R.oO.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.aC,$.U,$.K,$.bq,$.a_,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aO,$.U,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.U
r=A.i("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.U,$.aP,$.aw,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cV,$.j)
t.i(0,$.aM,$.j)
t.i(0,$.ds,$.o)
t.i(0,$.f9,$.o)
t.i(0,$.t1,$.o)
t.i(0,$.e3,$.o)
t.i(0,$.it,$.o)
t.i(0,$.t7,$.o)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.x+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a4("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.nS(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a4("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.x+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p="The "+$.x+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bF("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="The defeat of the "+$.x+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a4("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.av+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
D.oR.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Robot",H.a([$.a7,$.D,$.at,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a7,$.K,$.aD,$.aC],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aE,$.a7,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vT,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tE,$.D,$.af],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.hf,$.o)
q.i(0,$.ej,$.j)
q.i(0,$.eo,$.j)
q.i(0,$.cd,$.H)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.av
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.x+" destroyed it. "
o="The "+p+" searches for the "
l=$.aa
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EX
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.z)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.x+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.aa+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dO(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.j)
s.i(0,$.el,$.H)
s.i(0,$.en,$.o)
s.i(0,$.cM,$.j)
s.i(0,$.cd,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
o=$.m
l="The "+o+" finds two groups of "
n=$.r
l=l+n+"s screaming and "
k=$.L
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.aa
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e9(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.H)
t.i(0,$.ej,$.j)
t.i(0,$.eo,$.j)
t.i(0,$.cd,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.av
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.x
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
V.oT.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Lighter",H.a([$.D,$.ap],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bl],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bl,$.c4],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c4,$.bj,$.bm],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.vZ],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bd,$.bj],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bd,$.bj],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.fh,$.bj],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bR,$.bd],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tv,$.aK,$.bj],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tB,$.aK,$.bj],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.tr,$.aK,$.bj],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mr,$.as,$.D,$.bn,$.bj],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bq,$.aC],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.ca,$.D,$.aU,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.ap],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cD,$.o)
q.i(0,$.dK,$.j)
q.i(0,$.e4,$.j)
q.i(0,$.f8,$.j)
q.i(0,$.lP,$.j)
q.i(0,$.dh,$.o)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.cD,$.o)
s.i(0,$.dK,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.dh,$.o)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.aa+" underling. Tremble at the fearsome "+$.av+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.cW,$.j)
q.i(0,$.bc,$.H)
q.i(0,$.dM,$.j)
q.i(0,$.c1,$.o)
q.i(0,$.e3,$.H)
q.i(0,$.df,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c2,$.j)
t.i(0,$.df,$.H)
t.i(0,$.ek,$.j)
t.i(0,$.ix,$.j)
t.i(0,$.cd,$.o)
t.i(0,$.ep,$.o)
s=$.m
r="The "+s+" finds a crowd of "
n=$.L
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.av+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
p.i(0,new X.F(q,t,null),$.aB)}}
X.F.prototype={
aP:function(){for(var t=this.b,t=t.gb7(t),t=t.gU(t);t.F();)t.gO()
return"<div class = 'theme'><b>"+H.y(this.a)+"</div></b><div class = 'features'></div></theme>"},
A:function(a){return"Theme: "+H.y(this.a)}}
O.rx.prototype={
$1:function(a){H.i7(a,"$ish3")
return},
$S:function(){return{func:1,args:[W.S]}}}
U.p_.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Lockpick",H.a([$.D,$.U,$.ak,$.aL,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.U,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.D,$.U,$.aL,$.as,$.tl],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c2,$.j)
t.i(0,$.dg,$.o)
t.i(0,$.c3,$.o)
t.i(0,$.cM,$.o)
r="The "+$.x+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bF("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.x+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a4("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.x
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.av+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a4("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.x
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.aa
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.m
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.L
l=n+l+"worth, the disaffected Heir to the "+$.av+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a4("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
N.p0.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Grandfather Clock",H.a([$.X,$.ah,$.bd,$.T],s),null,!1,"Ticking Tower of Time")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.w2,$.T,$.a8],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aF,$.bi,$.T,$.aX,$.aW,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.T,$.a8,$.ah],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.D,$.T,$.a8,$.a_,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.T,$.a8],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.vt,$.aj)
q.i(0,$.cd,$.o)
q.i(0,$.cM,$.o)
q.i(0,$.en,$.j)
p=$.x
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a4("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.d5(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.aa
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.x
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.R("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.he,$.j)
s.i(0,$.e4,$.H)
s.i(0,$.cd,$.j)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.x
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.R(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.j)
t.i(0,$.aM,$.o)
t.i(0,$.cV,$.j)
t.i(0,$.ds,$.j)
r=$.x
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.aa
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.m
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.R(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fr(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.x
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.aa
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.R("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.d5(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.x+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.av
t.i(0,new R.a4("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.d5(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.av
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.x
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.bs+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.R(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.nQ(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.R("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.x+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
j.i(0,new X.F(s,t,null),$.aq)}}
G.a1.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.ga9(t)
return"NULL TRAIT"},
ge8:function(){return this.b},
gdV:function(){return this.c},
gbA:function(){return this.d}}
G.aJ.prototype={}
G.ad.prototype={}
G.bI.prototype={}
G.d.prototype={
ghD:function(){return this.f.length},
gbA:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.c0)(t),++q)r+=t[q].d
return r},
ax:function(a,b){return C.a.bB(b.ghD()-this.f.length)},
eh:function(a){return C.b.h5(this.f,a.gfT(a))},
$isbH:1,
$asbH:function(){return[G.d]},
gG:function(a){return this.e},
geD:function(){return this.f}}
G.my.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.pn.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cardboard Box",H.a([$.K,$.T,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.T,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bn,$.T,$.ak,$.mr],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aX,$.T,$.ak,$.aW,$.bX],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aE,$.T,$.ak,$.ah],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.T,$.a_,$.tq,$.ak,$.aO],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.j)
q.i(0,$.iy,$.j)
q.i(0,$.iz,$.j)
q.i(0,$.iv,$.j)
p=$.x
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.m
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.r
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.i(0,new R.a4("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.x
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.R(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.o)
s.i(0,$.iy,$.o)
s.i(0,$.iz,$.o)
s.i(0,$.c2,$.j)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.x
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.aa
s.i(0,new R.a4("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dO(),!1,!1,new Y.bU("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.R("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.x+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.j)
t.i(0,$.iy,$.j)
t.i(0,$.iz,$.j)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.x+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.R(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
i.i(0,new X.F(s,t,null),$.aq)}}
E.po.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Yardstick",H.a([$.dN,$.U,$.tx,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aC,$.U,$.mx,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.U,$.hn,$.vY,$.aY,$.jp],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.w6,$.U,$.tg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.cN,$.j)
t.i(0,$.dt,$.j)
t.i(0,$.f5,$.j)
t.i(0,$.ds,$.j)
t.i(0,$.hd,$.j)
t.i(0,$.lM,$.j)
t.i(0,$.iz,$.o)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.nS(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
r=$.x
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.bs+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.R(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.F9(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.z)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.x
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.x+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.P("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.Fa(),!1,!1,new Y.bU("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a4("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a4("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.nS(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.z)
n=$.x
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bF("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.F(s,t,null),$.aq)}}
M.ps.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cauldron",H.a([$.w1,$.U,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jm,$.dN,$.U,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.ts,$.U,$.a2,$.ak,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,[N.ab,P.W])
t.i(0,$.c1,$.o)
t.i(0,$.hh,$.o)
t.i(0,$.cW,$.o)
t.i(0,$.cM,$.o)
t.i(0,$.cz,$.o)
t.i(0,$.t4,$.o)
r=$.x
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bF("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bY(),!1,!1,new Y.bD("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="Even with the defeat of the "+$.x+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.av
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.m
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a4("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.z)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.av
q=q+r+" was discovered amongst the "+$.x+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a4("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.z)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.av
t.i(0,new R.a4("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.aa+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.a6("Rewards/no_reward.png",null),1,null,null),$.z)
this.x.i(0,new X.F(s,t,null),$.bK)}}
U.pt.prototype={
P:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bx(function(a7,a8){if(a7===1)return P.bu(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eU(a6,$.$get$x3())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.ya(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.cE(o,B.k_)
q.a=null
l=P.cE(o,o)
for(k=P.W,j=B.dA,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cI()
""+i
H.y(g)
f.toString
f=J.eU(g,$.$get$x1())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bf(g)
if(f.gV(g)===!0){$.$get$cI().toString
continue}if(f.ae(g,$.$get$x2())){$.$get$cI().toString
continue}if(C.c.ae(g,"@")){e=C.c.af(g,1)
$.$get$cI().toString
n.push(e)}else if(C.c.ae(g,"?")){f=C.c.af(g,1)
f=$.$get$hR().aU(0,f)
f=H.du(f,B.kp(),H.ar(f,"n",0),null)
d=P.d3(f,!0,H.ar(f,"n",0))
if(d.length<2)$.$get$cI().b9(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cI()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x4()
a=f.cf(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.cl(f[1])
a1=C.c.af(g,a0)
if(a1.length===0)continue
f=J.az(a0)
if(f.R(a0,0)){a1=C.c.ei(a1)
$.$get$cI().toString
f=P.cE(o,o)
a2=new B.k_(P.cE(o,k),f,a1,!1,null,null)
a2.d8(null,null,j)
q.a=a2
f.aT(0,l)
m.i(0,a1,q.a)}else if(f.R(a0,$.x5))if(C.c.ae(a1,"?")){a1=C.c.af(a1,1)
f=$.$get$hR().aU(0,a1)
f=H.du(f,B.kp(),H.ar(f,"n",0),null)
d=P.d3(f,!0,H.ar(f,"n",0))
f=$.$get$cI()
f.toString
if(d.length<2)f.b9(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ku(d[0],$.$get$fw(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.ku(d[1],$.$get$fw(),"")
f=$.$get$cI()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ae(a1,"@")){e=C.c.af(a1,1)
$.$get$cI().toString
f=$.$get$hR().aU(0,a1)
f=H.du(f,B.kp(),H.ar(f,"n",0),null)
d=P.d3(f,!0,H.ar(f,"n",0))
a4=d.length>1?H.wz(d[1],new U.pu(q,d)):1
q.a.c.i(0,C.c.cS(e,$.$get$fw(),""),a4)}else{$.$get$cI().toString
f=$.$get$hR().aU(0,g)
f=H.du(f,B.kp(),H.ar(f,"n",0),null)
d=P.d3(f,!0,H.ar(f,"n",0))
a4=d.length>1?H.wz(d[1],new U.pv(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bh(J.ku(d[0],$.$get$fw(),""))
h=new B.dA(null)
a3=P.cE(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.v3(a4)),[H.ar(f,"cU",0)]))}else if(f.R(a0,$.x5*2)){$.$get$cI().toString
f=$.$get$hR().aU(0,g)
f=H.du(f,B.kp(),H.ar(f,"n",0),null)
d=P.d3(f,!0,H.ar(f,"n",0))
f=d.length
if(f!==2)$.$get$cI().b9(C.i,"Invalid variant for "+H.y(h.cX(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bh(J.ku(d[0],$.$get$fw(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.cS(U.G5(d[1]),$.$get$fw(),"")
h.a.i(0,f,a3)}}}}}r=new B.hV(n,m)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$aseG:function(){return[B.hV]},
$asc8:function(){return[B.hV,P.B]}}
U.pu.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b9(C.n,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pv.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b9(C.n,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.px.prototype={
D:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Make a World Book",H.a([$.K,$.ah,$.aC],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.Q(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aY,$.O,$.mv],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aC,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aC,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.mv,$.ah],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aC,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aC,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ab,P.W]
q=new H.v(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.j)
q.i(0,$.cA,$.j)
q.i(0,$.bc,$.o)
q.i(0,$.aM,$.o)
q.i(0,$.f7,$.o)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.z)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.v(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.o)
s.i(0,$.cD,$.o)
s.i(0,$.cn,$.o)
s.i(0,$.bc,$.o)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.v(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.o)
t.i(0,$.dK,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.dh,$.o)
t.i(0,$.f5,$.j)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.dd("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
m.i(0,new X.F(s,t,null),$.aB)}}
B.pC.prototype={
aM:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bx(function(c,d){if(c===1)return P.bu(d,s)
while(true)switch(t){case 0:q=$.$get$x6()
p=J.uV(b)
q.toString
r=q.fY(T.tf(p,0,null,0),!1)
t=1
break
case 1:return P.bv(r,s)}})
return P.bw($async$P,s)},
$asdn:function(){return[T.fL]},
$asc8:function(){return[T.fL,P.bg]}}
A.fS.prototype={}
B.dp.prototype={
cz:function(a){if(a)this.b=(this.b|C.a.ao(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hL(this.b)
this.b=0}},
ag:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ao(1,t)
if(typeof a!=="number")return a.aF()
this.cz((a&s)>>>0>0)}},
fL:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.as(1,t-s)
if(typeof a!=="number")return a.aF()
this.cz((a&r)>>>0>0)}},
bT:function(a){var t,s
a=J.ed(a,1)
t=C.d.d6(Math.log(H.kk(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cz(!1)
this.fL(a,t+1)},
b1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.ag(r)
q+=r
p=r}else p=0
r=H.cC(q)
o=new Uint8Array(r)
if(t){n=H.cR(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a2(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.de.prototype={
co:function(a){var t,s,r,q
t=C.f.ai(a/8)
s=C.a.bI(a,8)
r=this.a.getUint8(t)
q=C.a.as(1,s)
if(typeof r!=="number")return r.aF()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.k(P.e_(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.co(this.b);++this.b
if(r)t=(t|C.a.ao(1,s))>>>0}return t},
hF:function(a){var t,s,r,q
if(a>32)throw H.k(P.e_(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.co(this.b);++this.b
if(q)s=(s|C.a.as(1,t-r))>>>0}return s},
c0:function(){var t,s,r
for(t=0;!0;){s=this.co(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hF(t+1)-1}}
A.e1.prototype={
A:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
hP:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.as()
s=this.c
if(typeof s!=="number")return s.as()
r=this.d
if(typeof r!=="number")return r.as()
q=this.a
if(typeof q!=="number")return H.ag(q)
return(t<<24|s<<16|r<<8|q)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e1){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
ga3:function(a){return this.hP(!0)},
T:function(a,b){var t,s,r,q,p,o,n,m
t=J.az(b)
if(!!t.$ise1){t=this.b
s=b.b
if(typeof t!=="number")return t.T()
if(typeof s!=="number")return H.ag(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.T()
if(typeof q!=="number")return H.ag(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.T()
if(typeof o!=="number")return H.ag(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.T()
if(typeof m!=="number")return H.ag(m)
return A.fW(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.vb(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.T()
s=this.c
if(typeof s!=="number")return s.T()
r=this.d
if(typeof r!=="number")return r.T()
return A.fW(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.y(t.gaa(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
aq:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.vb(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dD(b)
if(t.a1(b,0)||t.aA(b,3))throw H.k("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.R(b,0)){this.b=C.a.ab(J.ks(J.uU(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.ab(J.ks(J.uU(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kl(c)
if(t.R(b,2)){this.d=C.a.ab(J.ks(s.aq(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.ks(s.aq(c,255)),0,255)}},
eK:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.xQ(d,0,255),0,255)}}
A.rf.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mY.prototype={
$1:function(a){return this.a.eb(a)},
$S:function(){return{func:1,args:[,]}}}
A.mW.prototype={
$1:function(a){this.a.P(0,a).b0(this.b.ghC())},
$S:function(){return{func:1,args:[,]}}}
A.mX.prototype={
$1:function(a){this.a.fS(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mZ.prototype={
$1:function(a){return this.a.ay(0,this.b)},
$S:function(){return{func:1,args:[W.S]}}}
F.hw.prototype={
A:function(a){return this.b}}
F.hx.prototype={
b9:function(a,b){F.EK(a).$1("("+this.c+")["+H.y(C.b.gb8(a.b.split(".")))+"]: "+H.y(b))},
cF:function(a,b){this.b9(C.i,b)},
gG:function(a){return this.c}}
F.tR.prototype={}
O.rA.prototype={
$1:function(a){return H.y(a.bb(1))+" = "+H.y(a.bb(2))+C.c.aq("../",this.a)},
$S:function(){return{func:1,args:[P.dv]}}}
O.rB.prototype={
$0:function(){var t=document
J.v_(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.h,null)
t=H.i7(t.querySelector("#voidButton"),"$isfU")
t.toString
W.eQ(t,"click",new O.rz(),!1,W.HF)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Hr("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rz.prototype={
$1:function(a){return O.Hw()},
$S:function(){return{func:1,args:[W.S]}}}
R.hi.prototype={}
R.u8.prototype={}
R.u7.prototype={}
A.nz.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Y(0,b)?t.n(0,b):$.$get$u6()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Y(0,b)?t.n(0,b):$.$get$u6()}throw H.k(P.e_(b,"'name' should be a String name or int id only",null))},
gU:function(a){var t=this.a
t=t.gba(t)
return new H.jx(null,J.cJ(t.a),t.b,[H.Q(t,0),H.Q(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Y(0,b))this.am(0,b)
s=this.fs()
if(typeof s!=="number")return s.ar()
if(s>=256)throw H.k(P.e_(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
am:function(a,b){var t,s,r
t=this.a
if(!t.Y(0,b))return
s=this.c
r=s.n(0,b)
t.am(0,b)
this.b.am(0,r)
s.am(0,b)
this.d.am(0,r)},
fs:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Y(0,s))return s;++s}}}
A.jF.prototype={
$asn:function(){return[A.e1]},
$isn:1}
Q.jG.prototype={}
A.jK.prototype={
bz:function(a){if(a===0)return 0
return this.ft(a)},
hu:function(){return this.bz(4294967295)},
ft:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cK()
this.b=C.d.bB(s*4294967295)
return C.d.ai(s*a)}else{s=t.bz(a)
this.b=s
return s}},
d_:function(a){var t=a==null
this.a=t?C.M:P.Gi(a)
if(!t)this.b=J.ed(a,1)},
hA:function(a,b){var t=a.length
if(t===0)return
t=this.bz(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
hz:function(a){return this.hA(a,!0)}}
Y.dQ.prototype={
cu:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bk(0,$.an,null,t)
this.c.push(new P.dX(s,t))
return s},
eb:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c0)(t),++r)t[r].ay(0,this.b)
C.b.sm(t,0)}}
V.lq.prototype={
$4:function(a,b,c,d){return V.z1(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cY]}}}
V.lp.prototype={
$4:function(a,b,c,d){return V.z0(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cY]}}}
V.lo.prototype={
$4:function(a,b,c,d){return V.yY(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cY]}}}
V.ln.prototype={
$4:function(a,b,c,d){return V.yX(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cY]}}}
O.cY.prototype={
hG:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.w(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
hU:function(a,b,c,d){var t,s,r,q,p
t=J.bo(d)
s=0
while(!0){r=t.ge5(d)
if(typeof r!=="number")return H.ag(r)
if(!(s<r))break
q=(C.a.d6(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.om.prototype={
$1:function(a){return J.kt(a)},
$S:function(){return{func:1,args:[D.cj]}}}
D.on.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.cj]}}}
D.oo.prototype={
$1:function(a){return a.ghB()},
$S:function(){return{func:1,args:[D.cj]}}}
D.cj.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
ghB:function(){return this.d}}
D.k0.prototype={}
D.nW.prototype={}
B.dA.prototype={
en:function(a,b){if(this.a.Y(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cX:function(a){return this.en(a,null)},
A:function(a){return"[Word: "+H.y(this.cX(0))+"]"}}
B.k_.prototype={
A:function(a){return"WordList '"+this.e+"': "+this.eH(0)},
$isp:1,
$asp:function(){return[B.dA]},
$asdW:function(){return[B.dA]},
$ashU:function(){return[B.dA]},
$ascU:function(){return[B.dA]},
$asn:function(){return[B.dA]},
$ast:function(){return[B.dA]},
gG:function(a){return this.e}}
B.hV.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"}}
S.fp.prototype={}
S.uy.prototype={}
S.uz.prototype={}
S.uA.prototype={}
S.rY.prototype={}
S.t0.prototype={}
S.rP.prototype={}
S.ui.prototype={}
S.uC.prototype={}
S.uD.prototype={}
S.kS.prototype={}
S.ua.prototype={}
S.u5.prototype={}
S.mP.prototype={}
S.rT.prototype={}
S.rK.prototype={}
S.l9.prototype={}
S.tS.prototype={}
S.la.prototype={}
S.nB.prototype={}
S.up.prototype={}
S.um.prototype={}
S.uq.prototype={}
S.rJ.prototype={}
S.m4.prototype={}
S.kQ.prototype={}
S.rO.prototype={}
S.rN.prototype={}
S.ub.prototype={}
S.ur.prototype={}
S.uc.prototype={}
S.t_.prototype={}
S.rZ.prototype={}
S.uo.prototype={}
S.un.prototype={}
S.oZ.prototype={}
S.ut.prototype={}
S.rQ.prototype={}
S.rR.prototype={}
S.uB.prototype={}
S.hz.prototype={}
S.tY.prototype={}
S.tZ.prototype={}
S.u_.prototype={}
S.u0.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.ul.prototype={}
S.tX.prototype={}
S.u2.prototype={}
S.u3.prototype={}
S.tc.prototype={}
S.td.prototype={}
S.te.prototype={}
S.u4.prototype={}
S.u1.prototype={}
S.rL.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.uu.prototype={}
Z.tM.prototype={}
Z.tI.prototype={}
Z.tJ.prototype={}
Q.cU.prototype={
k:function(a,b){return b},
A:function(a){return J.cK(this.gc_())},
au:function(a,b){return Q.uF(this,b,H.ar(this,"cU",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"cU",0))},
an:function(a){return this.a0(a,!0)},
$isn:1,
$asn:null}
Q.dW.prototype={
gc_:function(){return this.b},
bS:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.v3(c)),[H.ar(this,"cU",0)]))},
h:function(a,b){return this.bS(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.uY(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.ar(this,"cU",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jq(this.b,"[","]")},
au:function(a,b){return Q.uF(this,b,H.ar(this,"dW",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"dW",0))},
an:function(a){return this.a0(a,!0)},
d8:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hU.prototype={$ascU:null,$asn:null,$asp:null,$ast:null,$isp:1,$ist:1,$isn:1}
Q.h.prototype={
A:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
gW:function(a){return this.a},
gcV:function(a){return this.b}}
Q.eO.prototype={
gc_:function(){return this.b},
gU:function(a){var t=new Q.pq(null,[H.ar(this,"eO",0)])
t.a=J.cJ(this.b)
return t},
gm:function(a){return J.cl(this.b)},
A:function(a){return J.cK(this.b)},
au:function(a,b){return Q.uF(this,b,H.ar(this,"eO",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"eO",0))},
an:function(a){return this.a0(a,!0)}}
Q.hT.prototype={$ascU:null,$asn:null,$isn:1}
Q.pq.prototype={
gO:function(){return J.uY(this.a.gO())},
F:function(){return this.a.F()}}
Q.jY.prototype={
$aseO:function(a,b){return[b]},
$ashT:function(a,b){return[b]},
$ascU:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.pr.prototype={
$1:function(a){var t=J.bo(a)
return new Q.h(this.c.$1(t.gW(a)),t.gcV(a),[this.b])},
$S:function(){return H.eT(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jY")}}
J.f.prototype.eE=J.f.prototype.A
J.hr.prototype.eG=J.hr.prototype.A
P.dk.prototype.eI=P.dk.prototype.bK
P.dk.prototype.eJ=P.dk.prototype.bJ
P.aR.prototype.d5=P.aR.prototype.a7
P.n.prototype.eF=P.n.prototype.bG
Q.dW.prototype.eH=Q.dW.prototype.A;(function installTearOffs(){installTearOff(H.fB.prototype,"ghp",0,0,0,null,["$0"],["bY"],1)
installTearOff(H.dC.prototype,"geq",0,0,0,null,["$1"],["av"],7)
installTearOff(H.eP.prototype,"gh0",0,0,0,null,["$1"],["aV"],7)
installTearOff(H,"xl",1,0,0,null,["$1"],["GK"],8)
installTearOff(P,"GN",1,0,0,null,["$1"],["G9"],6)
installTearOff(P,"GO",1,0,0,null,["$1"],["Ga"],6)
installTearOff(P,"GP",1,0,0,null,["$1"],["Gb"],6)
installTearOff(P,"xx",1,0,0,null,["$0"],["GJ"],1)
installTearOff(P.k4.prototype,"gdT",0,0,0,null,["$2","$1"],["cC","bn"],11)
installTearOff(P.bk.prototype,"gbc",0,0,0,null,["$2","$1"],["ak","f3"],11)
var t
installTearOff(t=P.dk.prototype,"gdB",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdC",0,0,0,null,["$0"],["bO"],1)
installTearOff(t=P.hZ.prototype,"gdB",0,0,0,null,["$0"],["bN"],1)
installTearOff(t,"gdC",0,0,0,null,["$0"],["bO"],1)
installTearOff(t,"gff",0,0,0,null,["$1"],["fg"],function(){return H.eT(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hZ")})
installTearOff(t,"gfj",0,0,0,null,["$2"],["fk"],32)
installTearOff(t,"gfh",0,0,0,null,["$0"],["fi"],1)
installTearOff(P.ka.prototype,"gfT",0,1,0,null,["$1"],["ac"],33)
installTearOff(P,"GY",1,0,0,null,["$2"],["yF"],28)
installTearOff(P,"GZ",1,0,0,null,["$1"],["fI"],4)
installTearOff(t=W.id.prototype,"gap",0,1,0,null,["$1"],["cF"],4)
installTearOff(t,"ghi",0,0,0,null,["$1"],["e3"],4)
installTearOff(t,"ghR",0,0,0,null,["$1"],["hS"],4)
installTearOff(W.f2.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ih.prototype,"gW",0,1,0,null,["$1"],["J"],13)
installTearOff(W.im.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.io.prototype,"gW",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ip.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.fb.prototype,"gW",0,1,0,null,["$1"],["J"],14)
installTearOff(W.iD.prototype,"gW",0,1,0,null,["$1"],["J"],9)
installTearOff(W.fc.prototype,"gW",0,1,0,null,["$1"],["J"],10)
installTearOff(W.iF.prototype,"gW",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jy.prototype,"gW",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jz.prototype,"gW",0,1,0,null,["$1"],["J"],12)
installTearOff(W.cg.prototype,"gW",0,1,0,null,["$1"],["J"],12)
installTearOff(W.jI.prototype,"gW",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jO.prototype,"gW",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jQ.prototype,"gW",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jR.prototype,"gW",0,1,0,null,["$1"],["J"],17)
installTearOff(W.ci.prototype,"gW",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jV.prototype,"gW",0,1,0,null,["$1"],["J"],34)
installTearOff(W.jW.prototype,"gW",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jX.prototype,"gW",0,1,0,null,["$1"],["J"],20)
installTearOff(W.hW.prototype,"gW",0,1,0,null,["$1"],["J"],21)
installTearOff(W.k5.prototype,"gW",0,1,0,null,["$1"],["J"],22)
installTearOff(W.k9.prototype,"gW",0,1,0,null,["$1"],["J"],29)
installTearOff(W.i1.prototype,"gW",0,1,0,null,["$1"],["J"],24)
installTearOff(W.kd.prototype,"gW",0,1,0,null,["$1"],["J"],25)
installTearOff(W.kf.prototype,"gW",0,1,0,null,["$1"],["J"],26)
installTearOff(P.jS.prototype,"gW",0,1,0,null,["$1"],["J"],27)
installTearOff(R,"dP",1,0,0,null,["$1"],["wC"],0)
installTearOff(R,"Fd",1,0,0,null,["$1"],["Ft"],0)
installTearOff(R,"F9",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"nS",1,0,0,null,["$1"],["Fs"],0)
installTearOff(R,"bY",1,0,0,null,["$1"],["Fr"],0)
installTearOff(R,"nR",1,0,0,null,["$1"],["Fq"],0)
installTearOff(R,"nQ",1,0,0,null,["$1"],["Fo"],0)
installTearOff(R,"fr",1,0,0,null,["$1"],["Fm"],0)
installTearOff(R,"d5",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"e9",1,0,0,null,["$1"],["Fk"],0)
installTearOff(R,"dO",1,0,0,null,["$1"],["Fp"],0)
installTearOff(R,"uh",1,0,0,null,["$1"],["Fj"],0)
installTearOff(R,"Fb",1,0,0,null,["$1"],["Fl"],0)
installTearOff(R,"Fc",1,0,0,null,["$1"],["Fn"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"Fa",1,0,0,null,["$1"],["Fg"],0)
installTearOff(O,"wK",1,0,0,null,["$0"],["rw"],30)
installTearOff(F.hx.prototype,"gap",0,1,0,null,["$1"],["cF"],4)
installTearOff(O,"Hj",1,0,0,null,["$1"],["Hl"],31)
installTearOff(Y.dQ.prototype,"ghC",0,0,0,null,["$1"],["eb"],function(){return H.eT(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dQ")})
installTearOff(V,"Hp",1,0,0,null,["$4"],["z_"],3)
installTearOff(V,"Ho",1,0,0,null,["$4"],["yZ"],2)
installTearOff(B,"kp",1,0,0,null,["$1"],["GE"],23)
installTearOff(T,"GT",1,0,0,null,["$4"],["yQ"],3)
installTearOff(T,"GS",1,0,0,null,["$4"],["yP"],2)
installTearOff(T,"GR",1,0,0,null,["$4"],["yO"],3)
installTearOff(T,"GQ",1,0,0,null,["$4"],["yN"],2)
installTearOff(F,"H8",1,0,0,null,["$4"],["yW"],3)
installTearOff(F,"H7",1,0,0,null,["$4"],["yV"],2)
installTearOff(F,"H6",1,0,0,null,["$4"],["yU"],3)
installTearOff(F,"H5",1,0,0,null,["$4"],["yT"],2)
installTearOff(F,"H4",1,0,0,null,["$4"],["yS"],3)
installTearOff(F,"H3",1,0,0,null,["$4"],["yR"],2)})();(function inheritance(){inherit(P.ac,null)
var t=P.ac
inherit(H.tO,t)
inherit(J.f,t)
inherit(J.i9,t)
inherit(P.hJ,t)
inherit(P.n,t)
inherit(H.ew,t)
inherit(P.js,t)
inherit(H.iB,t)
inherit(H.pa,t)
inherit(H.f0,t)
inherit(H.qr,t)
inherit(H.fB,t)
inherit(H.pY,t)
inherit(H.eR,t)
inherit(H.qq,t)
inherit(H.pK,t)
inherit(H.fs,t)
inherit(H.p2,t)
inherit(H.dH,t)
inherit(H.dC,t)
inherit(H.eP,t)
inherit(P.jw,t)
inherit(H.kY,t)
inherit(H.nV,t)
inherit(H.p7,t)
inherit(P.ei,t)
inherit(H.ha,t)
inherit(H.ke,t)
inherit(H.dV,t)
inherit(H.v,t)
inherit(H.mQ,t)
inherit(H.mS,t)
inherit(H.hq,t)
inherit(H.kc,t)
inherit(H.k2,t)
inherit(H.jU,t)
inherit(H.qO,t)
inherit(P.co,t)
inherit(P.f1,t)
inherit(P.k4,t)
inherit(P.k8,t)
inherit(P.bk,t)
inherit(P.k3,t)
inherit(P.dj,t)
inherit(P.oq,t)
inherit(P.dk,t)
inherit(P.k6,t)
inherit(P.pT,t)
inherit(P.qu,t)
inherit(P.qM,t)
inherit(P.eX,t)
inherit(P.r0,t)
inherit(P.qh,t)
inherit(P.qj,t)
inherit(P.oa,t)
inherit(P.qo,t)
inherit(P.dB,t)
inherit(P.fj,t)
inherit(P.aR,t)
inherit(P.qT,t)
inherit(P.qp,t)
inherit(P.fV,t)
inherit(P.fY,t)
inherit(P.qV,t)
inherit(P.d9,t)
inherit(P.bH,t)
inherit(P.e2,t)
inherit(P.dm,t)
inherit(P.dJ,t)
inherit(P.nv,t)
inherit(P.jT,t)
inherit(P.q2,t)
inherit(P.bN,t)
inherit(P.ls,t)
inherit(P.p,t)
inherit(P.be,t)
inherit(P.cS,t)
inherit(P.dv,t)
inherit(P.dS,t)
inherit(P.B,t)
inherit(P.cb,t)
inherit(P.eL,t)
inherit(P.kh,t)
inherit(P.pb,t)
inherit(P.qK,t)
inherit(W.id,t)
inherit(W.jE,t)
inherit(W.ig,t)
inherit(P.l1,t)
inherit(W.bz,t)
inherit(W.hI,t)
inherit(W.qH,t)
inherit(W.lY,t)
inherit(W.ez,t)
inherit(W.qS,t)
inherit(W.qF,t)
inherit(P.qP,t)
inherit(P.pD,t)
inherit(P.qn,t)
inherit(P.qw,t)
inherit(P.qx,t)
inherit(P.bg,t)
inherit(P.d8,t)
inherit(T.fM,t)
inherit(T.dc,t)
inherit(T.hm,t)
inherit(T.nx,t)
inherit(T.pz,t)
inherit(T.pA,t)
inherit(T.pB,t)
inherit(T.py,t)
inherit(T.me,t)
inherit(T.iG,t)
inherit(B.ff,t)
inherit(N.ab,t)
inherit(L.eW,t)
inherit(A.jF,t)
inherit(O.c8,t)
inherit(T.ft,t)
inherit(M.fT,t)
inherit(X.is,t)
inherit(X.ib,t)
inherit(M.hb,t)
inherit(Z.ir,t)
inherit(E.nt,t)
inherit(E.N,t)
inherit(A.a5,t)
inherit(U.b,t)
inherit(Y.dR,t)
inherit(K.cF,t)
inherit(X.F,t)
inherit(G.a1,t)
inherit(A.fS,t)
inherit(B.dp,t)
inherit(B.de,t)
inherit(A.e1,t)
inherit(F.hw,t)
inherit(F.hx,t)
inherit(Q.jG,t)
inherit(A.jK,t)
inherit(Y.dQ,t)
inherit(O.cY,t)
inherit(D.cj,t)
inherit(B.dA,t)
inherit(Q.cU,t)
inherit(B.hV,t)
inherit(Q.h,t)
t=J.f
inherit(J.mC,t)
inherit(J.mD,t)
inherit(J.hr,t)
inherit(J.es,t)
inherit(J.fk,t)
inherit(J.et,t)
inherit(H.fm,t)
inherit(H.ey,t)
inherit(W.aH,t)
inherit(W.cL,t)
inherit(W.f_,t)
inherit(W.fZ,t)
inherit(W.bM,t)
inherit(W.iH,t)
inherit(W.lc,t)
inherit(W.f3,t)
inherit(W.ih,t)
inherit(W.ik,t)
inherit(W.lf,t)
inherit(W.il,t)
inherit(W.iI,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(W.h2,t)
inherit(W.S,t)
inherit(W.iJ,t)
inherit(W.lV,t)
inherit(W.lZ,t)
inherit(W.cp,t)
inherit(W.m9,t)
inherit(W.iK,t)
inherit(W.hl,t)
inherit(W.eb,t)
inherit(W.n0,t)
inherit(W.jy,t)
inherit(W.cr,t)
inherit(W.iU,t)
inherit(W.nn,t)
inherit(W.no,t)
inherit(W.iV,t)
inherit(W.nC,t)
inherit(W.e8,t)
inherit(W.ec,t)
inherit(W.cg,t)
inherit(W.iW,t)
inherit(W.o8,t)
inherit(W.ct,t)
inherit(W.iX,t)
inherit(W.fv,t)
inherit(W.ci,t)
inherit(W.oj,t)
inherit(W.op,t)
inherit(W.ck,t)
inherit(W.iY,t)
inherit(W.p1,t)
inherit(W.cv,t)
inherit(W.iZ,t)
inherit(W.fx,t)
inherit(W.jW,t)
inherit(W.pg,t)
inherit(W.fy,t)
inherit(W.jX,t)
inherit(W.pN,t)
inherit(W.j_,t)
inherit(W.j0,t)
inherit(W.iL,t)
inherit(W.iM,t)
inherit(W.iN,t)
inherit(W.iO,t)
inherit(W.qZ,t)
inherit(W.r_,t)
inherit(P.mi,t)
inherit(P.ns,t)
inherit(P.d2,t)
inherit(P.iP,t)
inherit(P.d4,t)
inherit(P.iQ,t)
inherit(P.nK,t)
inherit(P.iR,t)
inherit(P.d7,t)
inherit(P.iS,t)
inherit(P.pm,t)
inherit(P.fO,t)
inherit(P.kx,t)
inherit(P.nX,t)
inherit(P.qY,t)
inherit(P.iT,t)
t=J.hr
inherit(J.nI,t)
inherit(J.eJ,t)
inherit(J.eu,t)
inherit(F.tR,t)
inherit(R.hi,t)
inherit(R.u8,t)
inherit(R.u7,t)
inherit(S.fp,t)
inherit(S.uy,t)
inherit(S.uz,t)
inherit(S.uA,t)
inherit(S.rY,t)
inherit(S.t0,t)
inherit(S.rP,t)
inherit(S.uC,t)
inherit(S.uD,t)
inherit(S.l9,t)
inherit(S.up,t)
inherit(S.uq,t)
inherit(S.rJ,t)
inherit(S.m4,t)
inherit(S.kQ,t)
inherit(S.rO,t)
inherit(S.rN,t)
inherit(S.t_,t)
inherit(S.oZ,t)
inherit(S.rR,t)
inherit(S.hz,t)
inherit(S.tZ,t)
inherit(S.u0,t)
inherit(S.uk,t)
inherit(S.ul,t)
inherit(S.u2,t)
inherit(S.u3,t)
inherit(S.td,t)
inherit(S.te,t)
inherit(S.u4,t)
inherit(S.u1,t)
inherit(S.rL,t)
inherit(S.uv,t)
inherit(S.uw,t)
inherit(S.uu,t)
inherit(Z.tM,t)
inherit(Z.tI,t)
inherit(Z.tJ,t)
inherit(J.tN,J.es)
t=J.fk
inherit(J.ju,t)
inherit(J.jt,t)
inherit(P.jv,P.hJ)
t=P.jv
inherit(H.hS,t)
inherit(W.k7,t)
inherit(H.kV,H.hS)
t=P.n
inherit(H.t,t)
inherit(H.hy,t)
inherit(H.dz,t)
inherit(P.hp,t)
inherit(H.qN,t)
t=H.t
inherit(H.ev,t)
inherit(H.mR,t)
inherit(P.qi,t)
inherit(P.eC,t)
t=H.ev
inherit(H.oM,t)
inherit(H.fl,t)
inherit(P.mU,t)
inherit(H.h1,H.hy)
t=P.js
inherit(H.jx,t)
inherit(H.eM,t)
inherit(Q.pq,t)
t=H.f0
inherit(H.rD,t)
inherit(H.rE,t)
inherit(H.qm,t)
inherit(H.pZ,t)
inherit(H.mn,t)
inherit(H.mo,t)
inherit(H.qt,t)
inherit(H.p3,t)
inherit(H.p4,t)
inherit(H.rF,t)
inherit(H.rq,t)
inherit(H.rr,t)
inherit(H.rs,t)
inherit(H.rt,t)
inherit(H.ru,t)
inherit(H.oQ,t)
inherit(H.mG,t)
inherit(H.mF,t)
inherit(H.rm,t)
inherit(H.rn,t)
inherit(H.ro,t)
inherit(P.pH,t)
inherit(P.pG,t)
inherit(P.pI,t)
inherit(P.pJ,t)
inherit(P.r1,t)
inherit(P.r2,t)
inherit(P.rc,t)
inherit(P.rd,t)
inherit(P.m3,t)
inherit(P.m2,t)
inherit(P.q3,t)
inherit(P.qb,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.q9,t)
inherit(P.q5,t)
inherit(P.qa,t)
inherit(P.q4,t)
inherit(P.qe,t)
inherit(P.qf,t)
inherit(P.qd,t)
inherit(P.qc,t)
inherit(P.ot,t)
inherit(P.or,t)
inherit(P.os,t)
inherit(P.ou,t)
inherit(P.oz,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.oA,t)
inherit(P.oD,t)
inherit(P.oE,t)
inherit(P.oB,t)
inherit(P.oC,t)
inherit(P.oF,t)
inherit(P.oG,t)
inherit(P.ov,t)
inherit(P.ow,t)
inherit(P.pM,t)
inherit(P.pL,t)
inherit(P.qv,t)
inherit(P.r4,t)
inherit(P.r3,t)
inherit(P.r5,t)
inherit(P.rb,t)
inherit(P.qz,t)
inherit(P.qA,t)
inherit(P.qB,t)
inherit(P.qk,t)
inherit(P.rg,t)
inherit(P.n6,t)
inherit(P.qX,t)
inherit(P.qW,t)
inherit(P.lj,t)
inherit(P.lk,t)
inherit(P.pf,t)
inherit(P.pc,t)
inherit(P.pd,t)
inherit(P.pe,t)
inherit(P.re,t)
inherit(P.r8,t)
inherit(P.r7,t)
inherit(P.r9,t)
inherit(P.ra,t)
inherit(W.pP,t)
inherit(W.mc,t)
inherit(W.md,t)
inherit(W.q1,t)
inherit(W.qI,t)
inherit(W.qJ,t)
inherit(P.qR,t)
inherit(P.pE,t)
inherit(P.rh,t)
inherit(P.ri,t)
inherit(P.l2,t)
inherit(P.r6,t)
inherit(P.kD,t)
inherit(P.kE,t)
inherit(L.kz,t)
inherit(O.kL,t)
inherit(B.mm,t)
inherit(A.mB,t)
inherit(A.mA,t)
inherit(T.o0,t)
inherit(O.rx,t)
inherit(G.my,t)
inherit(U.pu,t)
inherit(U.pv,t)
inherit(A.rf,t)
inherit(A.mY,t)
inherit(A.mW,t)
inherit(A.mX,t)
inherit(A.mZ,t)
inherit(O.rA,t)
inherit(O.rB,t)
inherit(O.rz,t)
inherit(V.lq,t)
inherit(V.lp,t)
inherit(V.lo,t)
inherit(V.ln,t)
inherit(D.om,t)
inherit(D.on,t)
inherit(D.oo,t)
inherit(Q.pr,t)
t=H.pK
inherit(H.fC,t)
inherit(H.i3,t)
inherit(P.eK,P.jw)
inherit(H.kZ,P.eK)
inherit(H.fX,H.kY)
inherit(H.l_,H.fX)
t=P.ei
inherit(H.jD,t)
inherit(H.mH,t)
inherit(H.p9,t)
inherit(H.kT,t)
inherit(H.o_,t)
inherit(P.fo,t)
inherit(P.d1,t)
inherit(P.V,t)
inherit(P.eI,t)
inherit(P.dT,t)
inherit(P.bQ,t)
inherit(P.lb,t)
t=H.oQ
inherit(H.ol,t)
inherit(H.fQ,t)
t=P.hp
inherit(H.pF,t)
inherit(T.fL,t)
t=H.ey
inherit(H.nf,t)
inherit(H.jA,t)
t=H.jA
inherit(H.hE,t)
inherit(H.hF,t)
inherit(H.hG,H.hE)
inherit(H.hC,H.hG)
inherit(H.hH,H.hF)
inherit(H.hD,H.hH)
t=H.hC
inherit(H.ng,t)
inherit(H.nh,t)
t=H.hD
inherit(H.ni,t)
inherit(H.nj,t)
inherit(H.nk,t)
inherit(H.nl,t)
inherit(H.nm,t)
inherit(H.jB,t)
inherit(H.fn,t)
t=P.k4
inherit(P.dX,t)
inherit(P.kg,t)
t=P.k6
inherit(P.pS,t)
inherit(P.pU,t)
inherit(P.qL,P.qu)
t=P.dj
inherit(P.hY,t)
inherit(W.q_,t)
inherit(P.hZ,P.dk)
inherit(P.qs,P.hY)
inherit(P.qy,P.r0)
inherit(P.kb,H.v)
inherit(P.o9,P.oa)
inherit(P.ql,P.o9)
inherit(P.ka,P.ql)
t=P.fV
inherit(P.kI,t)
inherit(P.lm,t)
t=P.fY
inherit(P.kJ,t)
inherit(P.pj,t)
inherit(P.pi,P.lm)
t=P.dm
inherit(P.W,t)
inherit(P.C,t)
t=P.d1
inherit(P.eB,t)
inherit(P.mj,t)
inherit(P.pR,P.kh)
t=W.aH
inherit(W.ay,t)
inherit(W.h4,t)
inherit(W.kX,t)
inherit(W.lU,t)
inherit(W.lW,t)
inherit(W.m_,t)
inherit(W.hk,t)
inherit(W.hB,t)
inherit(W.nM,t)
inherit(W.jM,t)
inherit(W.ob,t)
inherit(W.eN,t)
inherit(W.cs,t)
inherit(W.h5,t)
inherit(W.cT,t)
inherit(W.cH,t)
inherit(W.h6,t)
inherit(W.pk,t)
inherit(W.pp,t)
inherit(W.jZ,t)
inherit(W.pw,t)
inherit(W.qG,t)
inherit(P.ld,t)
inherit(P.hM,t)
inherit(P.p5,t)
inherit(P.bB,t)
inherit(P.fP,t)
t=W.ay
inherit(W.dq,t)
inherit(W.eg,t)
inherit(W.eh,t)
inherit(W.ij,t)
inherit(W.fz,t)
inherit(W.pV,t)
t=W.dq
inherit(W.al,t)
inherit(P.cc,t)
t=W.al
inherit(W.eV,t)
inherit(W.ky,t)
inherit(W.hA,t)
inherit(W.kK,t)
inherit(W.kN,t)
inherit(W.fU,t)
inherit(W.ll,t)
inherit(W.lT,t)
inherit(W.iD,t)
inherit(W.mf,t)
inherit(W.fe,t)
inherit(W.ml,t)
inherit(W.mJ,t)
inherit(W.ht,t)
inherit(W.n5,t)
inherit(W.n9,t)
inherit(W.nr,t)
inherit(W.nw,t)
inherit(W.nA,t)
inherit(W.fu,t)
inherit(W.jO,t)
inherit(W.od,t)
inherit(W.hN,t)
inherit(W.oS,t)
inherit(W.oU,t)
inherit(W.qg,t)
inherit(W.eZ,W.hA)
inherit(W.h7,W.h4)
inherit(W.kG,W.h7)
t=W.bM
inherit(W.l3,t)
inherit(W.l4,t)
inherit(W.h_,t)
inherit(W.h0,t)
inherit(W.l5,t)
inherit(W.l6,t)
inherit(W.l7,t)
inherit(W.f2,W.iH)
inherit(W.pO,W.jE)
inherit(W.j1,W.iI)
inherit(W.im,W.j1)
t=W.S
inherit(W.h3,t)
inherit(W.oh,t)
inherit(W.oi,t)
inherit(W.ce,W.f_)
inherit(W.j2,W.iJ)
inherit(W.fb,W.j2)
inherit(W.j3,W.iK)
inherit(W.fc,W.j3)
inherit(W.iF,W.fc)
inherit(W.e7,W.hk)
inherit(W.hs,W.eb)
inherit(W.na,W.hB)
inherit(W.jd,W.iU)
inherit(W.jz,W.jd)
inherit(W.je,W.iV)
inherit(W.jC,W.je)
inherit(W.nH,W.ec)
inherit(W.jf,W.iW)
inherit(W.jI,W.jf)
inherit(W.oc,W.eN)
inherit(W.h8,W.h5)
inherit(W.jQ,W.h8)
inherit(W.jg,W.iX)
inherit(W.jR,W.jg)
inherit(W.jh,W.iY)
inherit(W.oX,W.jh)
inherit(W.h9,W.h6)
inherit(W.oY,W.h9)
inherit(W.ji,W.iZ)
inherit(W.jV,W.ji)
inherit(W.jj,W.j_)
inherit(W.hW,W.jj)
inherit(W.jk,W.j0)
inherit(W.k5,W.jk)
inherit(W.pW,W.il)
inherit(W.j4,W.iL)
inherit(W.k9,W.j4)
inherit(W.j5,W.iM)
inherit(W.i1,W.j5)
inherit(W.j6,W.iN)
inherit(W.kd,W.j6)
inherit(W.j7,W.iO)
inherit(W.kf,W.j7)
t=P.l1
inherit(W.pX,t)
inherit(P.kC,t)
inherit(W.hX,W.q_)
inherit(W.q0,P.oq)
inherit(W.pQ,W.qH)
inherit(P.qQ,P.qP)
inherit(P.k1,P.pD)
inherit(P.bT,P.qx)
t=P.cc
inherit(P.cq,t)
inherit(P.ef,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lH,t)
inherit(P.lI,t)
inherit(P.lX,t)
inherit(P.n7,t)
inherit(P.n8,t)
inherit(P.nF,t)
inherit(P.o5,t)
inherit(P.oP,t)
inherit(P.pl,t)
inherit(P.i_,t)
inherit(P.qC,t)
inherit(P.qD,t)
inherit(P.qE,t)
t=P.cq
inherit(P.kv,t)
inherit(P.mg,t)
inherit(P.oN,t)
inherit(P.eH,t)
inherit(P.ph,t)
inherit(P.j8,P.iP)
inherit(P.mM,P.j8)
inherit(P.j9,P.iQ)
inherit(P.np,P.j9)
inherit(P.ja,P.iR)
inherit(P.oK,P.ja)
inherit(P.oW,P.eH)
inherit(P.jb,P.iS)
inherit(P.p6,P.jb)
t=P.bB
inherit(P.e0,t)
inherit(P.l0,t)
inherit(P.eY,P.e0)
inherit(P.jc,P.iT)
inherit(P.jS,P.jc)
t=B.ff
inherit(S.kw,t)
inherit(M.kB,t)
inherit(A.kW,t)
inherit(M.l8,t)
inherit(V.lg,t)
inherit(U.lJ,t)
inherit(N.mI,t)
inherit(F.nd,t)
inherit(G.nL,t)
inherit(Q.nZ,t)
inherit(N.of,t)
inherit(D.oR,t)
inherit(V.oT,t)
inherit(F.px,t)
t=N.ab
inherit(T.le,t)
inherit(R.nP,t)
t=T.le
inherit(K.bP,t)
inherit(S.bC,t)
inherit(T.bZ,t)
inherit(M.bt,t)
inherit(A.nz,A.jF)
inherit(L.aS,A.nz)
t=O.c8
inherit(O.dn,t)
inherit(O.iq,t)
inherit(O.eG,t)
t=O.dn
inherit(U.kF,t)
inherit(Y.nU,t)
inherit(V.m0,t)
inherit(Q.mh,t)
inherit(Q.nG,t)
inherit(M.ok,t)
inherit(B.pC,t)
t=U.kF
inherit(U.n2,t)
inherit(U.nu,t)
inherit(U.oH,O.iq)
t=U.oH
inherit(U.oI,t)
inherit(U.oJ,t)
t=T.ft
inherit(O.kH,t)
inherit(Y.m5,t)
inherit(Y.m6,t)
inherit(B.m8,t)
inherit(S.mK,t)
inherit(Z.n1,t)
inherit(S.n3,t)
inherit(U.n4,t)
inherit(E.nc,t)
inherit(V.ny,t)
inherit(N.nO,t)
inherit(N.nY,t)
inherit(E.o1,t)
inherit(Y.o3,t)
inherit(L.o4,t)
inherit(S.o7,t)
inherit(Y.oe,t)
inherit(R.oO,t)
inherit(U.p_,t)
inherit(E.po,t)
inherit(M.ps,t)
t=O.eG
inherit(Y.oV,t)
inherit(Y.kR,t)
inherit(Y.nq,t)
inherit(U.pt,t)
t=L.eW
inherit(T.kM,t)
inherit(T.kP,t)
inherit(U.lh,t)
inherit(Z.li,t)
inherit(T.m7,t)
inherit(X.ma,t)
inherit(V.mk,t)
inherit(Q.mL,t)
inherit(K.mN,t)
inherit(G.mO,t)
inherit(V.nb,t)
inherit(E.nT,t)
inherit(K.o2,t)
inherit(N.og,t)
inherit(N.p0,t)
inherit(Q.pn,t)
t=S.bC
inherit(S.ic,t)
inherit(S.mb,t)
inherit(E.iE,E.nt)
t=E.N
inherit(E.fN,t)
inherit(E.kA,t)
inherit(Q.nJ,Q.mh)
inherit(U.R,U.b)
t=R.nP
inherit(R.Z,t)
inherit(R.M,t)
inherit(R.a4,t)
inherit(R.bF,R.a4)
t=Y.dR
inherit(Y.a6,t)
inherit(Y.bU,t)
inherit(Y.P,t)
inherit(Y.ie,t)
inherit(Y.bE,t)
inherit(Y.d_,t)
inherit(Y.kU,t)
inherit(Y.hK,t)
inherit(Y.iC,t)
inherit(Y.jH,t)
t=Y.bU
inherit(Y.dd,t)
inherit(Y.bD,t)
inherit(U.ae,A.a5)
t=G.a1
inherit(G.aJ,t)
inherit(G.bI,t)
inherit(G.d,t)
inherit(G.ad,G.bI)
t=D.cj
inherit(D.k0,t)
inherit(D.nW,t)
t=Q.cU
inherit(Q.hU,t)
inherit(Q.hT,t)
inherit(Q.dW,Q.hU)
inherit(B.k_,Q.dW)
t=S.fp
inherit(S.ui,t)
inherit(S.kS,t)
inherit(S.mP,t)
inherit(S.tX,t)
inherit(S.tc,t)
t=S.kS
inherit(S.ua,t)
inherit(S.u5,t)
t=S.mP
inherit(S.rT,t)
inherit(S.rK,t)
t=S.l9
inherit(S.tS,t)
inherit(S.la,t)
inherit(S.nB,S.la)
inherit(S.um,S.nB)
t=S.kQ
inherit(S.ub,t)
inherit(S.un,t)
t=S.m4
inherit(S.ur,t)
inherit(S.uc,t)
inherit(S.rZ,t)
inherit(S.uo,t)
t=S.oZ
inherit(S.ut,t)
inherit(S.rQ,t)
inherit(S.uB,t)
t=S.hz
inherit(S.tY,t)
inherit(S.u_,t)
inherit(S.uj,t)
inherit(Q.eO,Q.hT)
inherit(Q.jY,Q.eO)
mixin(H.hS,H.pa)
mixin(H.hE,P.aR)
mixin(H.hG,H.iB)
mixin(H.hF,P.aR)
mixin(H.hH,H.iB)
mixin(P.hJ,P.aR)
mixin(P.eK,P.qT)
mixin(W.h4,P.aR)
mixin(W.h7,W.bz)
mixin(W.iH,W.ig)
mixin(W.jE,W.ig)
mixin(W.iI,P.aR)
mixin(W.j1,W.bz)
mixin(W.iJ,P.aR)
mixin(W.j2,W.bz)
mixin(W.iK,P.aR)
mixin(W.j3,W.bz)
mixin(W.iU,P.aR)
mixin(W.jd,W.bz)
mixin(W.iV,P.aR)
mixin(W.je,W.bz)
mixin(W.iW,P.aR)
mixin(W.jf,W.bz)
mixin(W.h5,P.aR)
mixin(W.h8,W.bz)
mixin(W.iX,P.aR)
mixin(W.jg,W.bz)
mixin(W.iY,P.aR)
mixin(W.jh,W.bz)
mixin(W.h6,P.aR)
mixin(W.h9,W.bz)
mixin(W.iZ,P.aR)
mixin(W.ji,W.bz)
mixin(W.j_,P.aR)
mixin(W.jj,W.bz)
mixin(W.j0,P.aR)
mixin(W.jk,W.bz)
mixin(W.iL,P.aR)
mixin(W.j4,W.bz)
mixin(W.iM,P.aR)
mixin(W.j5,W.bz)
mixin(W.iN,P.aR)
mixin(W.j6,W.bz)
mixin(W.iO,P.aR)
mixin(W.j7,W.bz)
mixin(P.iP,P.aR)
mixin(P.j8,W.bz)
mixin(P.iQ,P.aR)
mixin(P.j9,W.bz)
mixin(P.iR,P.aR)
mixin(P.ja,W.bz)
mixin(P.iS,P.aR)
mixin(P.jb,W.bz)
mixin(P.iT,P.aR)
mixin(P.jc,W.bz)
mixin(A.jF,P.fj)
mixin(Q.hU,P.aR)
mixin(Q.hT,P.fj)})();(function constants(){C.N=W.e7.prototype
C.O=J.f.prototype
C.b=J.es.prototype
C.f=J.jt.prototype
C.a=J.ju.prototype
C.d=J.fk.prototype
C.c=J.et.prototype
C.V=J.eu.prototype
C.t=H.fn.prototype
C.H=J.nI.prototype
C.u=J.eJ.prototype
C.J=new P.kJ(!1)
C.I=new P.kI(C.J)
C.j=new W.id()
C.K=new P.nv()
C.L=new P.pT()
C.M=new P.qn()
C.e=new P.qy()
C.h=new W.qS()
C.q=new P.dJ(0)
C.P=function() {
C.v=function(hooks) { return hooks; }
C.Q=function(hooks) {
C.R=function(hooks) {
C.S=function(hooks) {
C.w=function getTagFallback(o) {
C.T=function(hooks) {
C.U=function(getTagFallback) {
C.x=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.y=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.W=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.z=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.X=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.r=makeConstList([])
C.Z=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.A=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.B=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.C=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.D=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.E=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.F=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.G=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.B])
C.i=new F.hw(0,"LogLevel.ERROR")
C.n=new F.hw(1,"LogLevel.WARN")
C.a_=new F.hw(3,"LogLevel.VERBOSE")
C.Y=H.a(makeConstList([]),[P.B])
C.a0=new H.fX(0,{},C.Y,[P.B,P.B])
C.a1=H.c_("bg")
C.a2=H.c_("Hx")
C.o=H.c_("Hy")
C.a3=H.c_("Hz")
C.a4=H.c_("HA")
C.a5=H.c_("HC")
C.a6=H.c_("HD")
C.a7=H.c_("HE")
C.a8=H.c_("mE")
C.a9=H.c_("cS")
C.aa=H.c_("B")
C.ab=H.c_("HI")
C.ac=H.c_("HJ")
C.ad=H.c_("HK")
C.ae=H.c_("d8")
C.af=H.c_("d9")
C.ag=H.c_("W")
C.ah=H.c_("C")
C.ai=H.c_("dm")
C.p=new P.pi(!1)})();(function staticFields(){$.wx="$cachedFunction"
$.wy="$cachedInvocation"
$.dI=0
$.fR=null
$.v6=null
$.uO=null
$.xu=null
$.xH=null
$.rj=null
$.rp=null
$.uP=null
$.fE=null
$.i4=null
$.i5=null
$.uK=!1
$.an=C.e
$.vn=0
$.vj=null
$.vi=null
$.vh=null
$.vk=null
$.vg=null
$.ys=null
$.yt=null
$.yf=null
$.yg=null
$.ye=null
$.yi=null
$.yo=null
$.yn=null
$.yu=null
$.yq=null
$.yj=null
$.ym=null
$.yh=null
$.yl=null
$.yr=null
$.yk=null
$.yp=null
$.b0="accent"
$.b2="aspect1"
$.b1="aspect2"
$.bb="shoe1"
$.ba="shoe2"
$.b4="cloak1"
$.b5="cloak2"
$.b3="cloak3"
$.b9="shirt1"
$.b8="shirt2"
$.b7="pants1"
$.b6="pants2"
$.aj=1300
$.j=3
$.o=2
$.H=1
$.z=0.1
$.e5=1
$.cO=-1
$.t7=null
$.e3=null
$.vp=null
$.el=null
$.f9=null
$.hc=null
$.t1=null
$.lN=null
$.t9=null
$.iu=null
$.it=null
$.vs=null
$.iA=null
$.f6=null
$.dM=null
$.vr=null
$.lL=null
$.lS=null
$.eo=null
$.z6=null
$.z3=null
$.z5=null
$.vq=null
$.z7=null
$.hh=null
$.f4=null
$.cn=null
$.cW=null
$.en=null
$.lR=null
$.c7=null
$.c2=null
$.t3=null
$.iz=null
$.ek=null
$.z4=null
$.f7=null
$.cN=null
$.e4=null
$.hf=null
$.df=null
$.f8=null
$.c1=null
$.lP=null
$.vo=null
$.aM=null
$.cA=null
$.cV=null
$.cd=null
$.iy=null
$.c3=null
$.dr=null
$.dg=null
$.f5=null
$.dK=null
$.dh=null
$.lM=null
$.dt=null
$.hg=null
$.lO=null
$.lK=null
$.cM=null
$.cz=null
$.bc=null
$.ej=null
$.em=null
$.lQ=null
$.iv=null
$.he=null
$.t5=null
$.cm=null
$.t8=null
$.t2=null
$.vu=null
$.hd=null
$.cD=null
$.dL=null
$.ds=null
$.fa=null
$.t4=null
$.t6=null
$.vt=null
$.iw=null
$.ix=null
$.ep=null
$.vv=!1
$.tb=null
$.z8=null
$.vx=null
$.vz=null
$.zh=null
$.vy=null
$.zf=null
$.zg=null
$.ta=null
$.zc=null
$.za=null
$.zb=null
$.zd=null
$.ze=null
$.zr=null
$.zk=null
$.zl=null
$.zm=null
$.zn=null
$.zo=null
$.zp=null
$.zq=null
$.zt=null
$.zu=null
$.zv=null
$.zw=null
$.zx=null
$.zy=null
$.zs=null
$.wr="JACK"
$.EV="PM"
$.ER="JS"
$.EQ="HP"
$.F_="YD"
$.EX="SI"
$.EY="SU"
$.ES="ME"
$.EW="RB"
$.EO="GN"
$.ET="MP"
$.EM="AR"
$.EU="PE"
$.EN="DP"
$.EZ="WV"
$.EP="HB"
$.m="PLAYER1TAG"
$.dw="PLAYER2TAG"
$.x="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.av="MCGUFFINTAG"
$.aa="TAGPHYSICALMCGUFFIN"
$.bs="TAGWEAPON"
$.FC=null
$.FO=null
$.Fy=null
$.FB=null
$.FF=null
$.FK=null
$.FI=null
$.FR=null
$.FQ=null
$.FJ=null
$.FT=null
$.FE=null
$.FS=null
$.FM=null
$.FL=null
$.FN=null
$.FA=null
$.Fz=null
$.FH=null
$.FG=null
$.FD=null
$.FP=null
$.xA=!1
$.xz=!1
$.FV=!1
$.wE=null
$.G2=13
$.aq=3
$.bK=2
$.aB=1
$.mz=0
$.I=1
$.a3=3
$.G=4
$.tF=6
$.tG=7
$.a9=8
$.u=9
$.q=10
$.vS=null
$.er=null
$.ms=null
$.tB=null
$.tv=null
$.vI=null
$.tl=null
$.tu=null
$.ho=null
$.vQ=null
$.wc=null
$.vL=null
$.vR=null
$.tm=null
$.tt=null
$.tD=null
$.wf=null
$.ti=null
$.jo=null
$.jm=null
$.aC=null
$.w5=null
$.th=null
$.w0=null
$.fi=null
$.vK=null
$.wg=null
$.wd=null
$.wb=null
$.tr=null
$.mr=null
$.fg=null
$.we=null
$.mp=null
$.to=null
$.hn=null
$.w9=null
$.dN=null
$.eq=null
$.tE=null
$.wa=null
$.tC=null
$.tz=null
$.tA=null
$.mv=null
$.jn=null
$.A_=null
$.vU=null
$.w_=null
$.w8=null
$.w7=null
$.tw=null
$.D=null
$.vP=null
$.mq=null
$.bR=null
$.aX=null
$.bS=null
$.X=null
$.aE=null
$.ca=null
$.K=null
$.O=null
$.au=null
$.aO=null
$.bV=null
$.bi=null
$.bm=null
$.cf=null
$.aQ=null
$.br=null
$.bX=null
$.a_=null
$.En=null
$.as=null
$.aW=null
$.aL=null
$.af=null
$.c9=null
$.aK=null
$.ap=null
$.bW=null
$.aP=null
$.ak=null
$.bh=null
$.c4=null
$.aD=null
$.bn=null
$.bl=null
$.a7=null
$.bO=null
$.a8=null
$.bd=null
$.bq=null
$.aI=null
$.aV=null
$.aw=null
$.aY=null
$.aF=null
$.Y=null
$.at=null
$.aA=null
$.aT=null
$.ao=null
$.am=null
$.a2=null
$.T=null
$.U=null
$.ah=null
$.aN=null
$.bj=null
$.aU=null
$.Bj=null
$.E_=null
$.Ey=null
$.AP=null
$.DX=null
$.Bk=null
$.vG=null
$.Eb=null
$.Ck=null
$.Bf=null
$.zU=null
$.CV=null
$.tx=null
$.vM=null
$.Dk=null
$.AM=null
$.C3=null
$.AK=null
$.tj=null
$.Av=null
$.Bw=null
$.AU=null
$.Cd=null
$.Ej=null
$.Bl=null
$.tk=null
$.Ce=null
$.AS=null
$.AB=null
$.w4=null
$.zN=null
$.vH=null
$.BX=null
$.mt=null
$.Cz=null
$.Ct=null
$.zR=null
$.AE=null
$.Dt=null
$.zT=null
$.DW=null
$.C2=null
$.B0=null
$.De=null
$.DQ=null
$.tq=null
$.Co=null
$.Db=null
$.AT=null
$.zG=null
$.Em=null
$.C6=null
$.AA=null
$.Ea=null
$.CC=null
$.AH=null
$.DV=null
$.Ba=null
$.DB=null
$.DC=null
$.zP=null
$.Cv=null
$.AV=null
$.B4=null
$.EC=null
$.mx=null
$.Ds=null
$.DT=null
$.mu=null
$.Ap=null
$.CM=null
$.CQ=null
$.zM=null
$.B9=null
$.DU=null
$.CB=null
$.Ed=null
$.Dg=null
$.CR=null
$.vZ=null
$.DF=null
$.Es=null
$.DZ=null
$.BK=null
$.D2=null
$.BL=null
$.Du=null
$.Eq=null
$.Cc=null
$.B6=null
$.Bt=null
$.Af=null
$.Dc=null
$.Br=null
$.By=null
$.AX=null
$.DE=null
$.fh=null
$.CG=null
$.vX=null
$.BM=null
$.BJ=null
$.Ev=null
$.Al=null
$.Dq=null
$.Dr=null
$.Dp=null
$.Do=null
$.DM=null
$.Bz=null
$.Cw=null
$.DP=null
$.Cn=null
$.CH=null
$.AQ=null
$.Ep=null
$.Cu=null
$.Bc=null
$.Bd=null
$.CP=null
$.EB=null
$.C0=null
$.Eo=null
$.w2=null
$.DA=null
$.Ca=null
$.ty=null
$.BV=null
$.D4=null
$.Ak=null
$.Bg=null
$.Dw=null
$.Cx=null
$.Ei=null
$.w1=null
$.CF=null
$.Ar=null
$.AN=null
$.D0=null
$.E5=null
$.Dv=null
$.tg=null
$.w6=null
$.DH=null
$.Er=null
$.BI=null
$.A3=null
$.Ac=null
$.E3=null
$.CJ=null
$.Cl=null
$.CK=null
$.E0=null
$.BW=null
$.zQ=null
$.Bx=null
$.Cj=null
$.DJ=null
$.Bq=null
$.Aj=null
$.Dm=null
$.Dn=null
$.Eg=null
$.Dy=null
$.ts=null
$.vN=null
$.AI=null
$.tn=null
$.BQ=null
$.vY=null
$.D6=null
$.Cs=null
$.Di=null
$.tp=null
$.mw=null
$.vW=null
$.vO=null
$.B2=null
$.Bv=null
$.w3=null
$.vT=null
$.AD=null
$.E7=null
$.Aw=null
$.CT=null
$.BN=null
$.DO=null
$.Cm=null
$.A0=null
$.BO=null
$.B_=null
$.CX=null
$.C5=null
$.Cr=null
$.Cb=null
$.Cf=null
$.Dl=null
$.Dh=null
$.zJ=null
$.E4=null
$.D9=null
$.AR=null
$.AW=null
$.Bu=null
$.E1=null
$.Bn=null
$.C7=null
$.A7=null
$.Bh=null
$.AZ=null
$.CL=null
$.B7=null
$.jp=null
$.C9=null
$.vJ=null
$.D5=null
$.BP=null
$.Bo=null
$.zH=null
$.zO=null
$.CI=null
$.CS=null
$.C4=null
$.BG=null
$.El=null
$.Aa=null
$.Bp=null
$.C8=null
$.AO=null
$.DL=null
$.AC=null
$.Dx=null
$.A8=null
$.E6=null
$.Ch=null
$.A2=null
$.Df=null
$.D1=null
$.AJ=null
$.BA=null
$.Aq=null
$.E2=null
$.BT=null
$.Eh=null
$.As=null
$.BB=null
$.At=null
$.AL=null
$.D8=null
$.AF=null
$.BU=null
$.Cy=null
$.Am=null
$.DN=null
$.Ex=null
$.DD=null
$.Cp=null
$.DK=null
$.Cq=null
$.zW=null
$.zI=null
$.Ci=null
$.A5=null
$.Au=null
$.zX=null
$.A1=null
$.CE=null
$.CY=null
$.E9=null
$.BR=null
$.Ew=null
$.Dd=null
$.Da=null
$.BY=null
$.BS=null
$.Ay=null
$.BE=null
$.Cg=null
$.CN=null
$.DG=null
$.zL=null
$.Et=null
$.B5=null
$.DR=null
$.AY=null
$.zV=null
$.An=null
$.Ae=null
$.EA=null
$.Ao=null
$.B8=null
$.Ax=null
$.Ef=null
$.DI=null
$.E8=null
$.zK=null
$.Dj=null
$.BZ=null
$.C1=null
$.Ek=null
$.DS=null
$.vV=null
$.Be=null
$.D_=null
$.Eu=null
$.Bi=null
$.C_=null
$.Ai=null
$.BH=null
$.BF=null
$.Dz=null
$.CZ=null
$.BC=null
$.Ad=null
$.DY=null
$.CO=null
$.Ec=null
$.Ez=null
$.zZ=null
$.zY=null
$.A9=null
$.Bb=null
$.D7=null
$.AG=null
$.D3=null
$.B1=null
$.zS=null
$.Ab=null
$.CD=null
$.B3=null
$.CW=null
$.Ah=null
$.Bm=null
$.Ee=null
$.A4=null
$.Bs=null
$.CU=null
$.Ag=null
$.BD=null
$.CA=null
$.A6=null
$.Az=null
$.x5=4
$.e6="OWNER"
$.wn=!1
$.tW=null
$.xJ=""
$.wG=null
$.FZ=null
$.hQ=null
$.eE=null
$.FY=null
$.eF=null
$.ea=null
$.d6=null
$.eD=null
$.hO=null
$.hP=null
$.dy=null
$.cu=null
$.wH=!1
$.G_=null})();(function lazyInitializers(){lazy($,"ve","$get$ve",function(){return H.xD("_$dart_dartClosure")})
lazy($,"tP","$get$tP",function(){return H.xD("_$dart_js")})
lazy($,"vE","$get$vE",function(){return H.zE()})
lazy($,"vF","$get$vF",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vn
$.vn=t+1
t="expando$key$"+t}return new P.ls(null,t,[P.C])})
lazy($,"wM","$get$wM",function(){return H.dU(H.p8({
toString:function(){return"$receiver$"}}))})
lazy($,"wN","$get$wN",function(){return H.dU(H.p8({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wO","$get$wO",function(){return H.dU(H.p8(null))})
lazy($,"wP","$get$wP",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wT","$get$wT",function(){return H.dU(H.p8(void 0))})
lazy($,"wU","$get$wU",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wR","$get$wR",function(){return H.dU(H.wS(null))})
lazy($,"wQ","$get$wQ",function(){return H.dU(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wW","$get$wW",function(){return H.dU(H.wS(void 0))})
lazy($,"wV","$get$wV",function(){return H.dU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uG","$get$uG",function(){return P.G8()})
lazy($,"hj","$get$hj",function(){return P.Ge(null,P.cS)})
lazy($,"i6","$get$i6",function(){return[]})
lazy($,"x7","$get$x7",function(){return H.F0([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xs","$get$xs",function(){return P.GD()})
lazy($,"vd","$get$vd",function(){return P.dx("^\\S+$",!0,!1)})
lazy($,"c6","$get$c6",function(){return H.a([],[K.bP])})
lazy($,"ia","$get$ia",function(){return P.cE(P.C,L.eW)})
lazy($,"v8","$get$v8",function(){return P.dx("[\\/]",!0,!1)})
lazy($,"bL","$get$bL",function(){return H.a([],[S.bC])})
lazy($,"m1","$get$m1",function(){return P.cE(P.B,Z.ir)})
lazy($,"jl","$get$jl",function(){return P.cE(P.C,B.ff)})
lazy($,"wh","$get$wh",function(){return H.a([],[A.a5])})
lazy($,"ws","$get$ws",function(){return H.a([],[P.B])})
lazy($,"jN","$get$jN",function(){return P.cE(P.C,T.ft)})
lazy($,"ch","$get$ch",function(){return H.a([],[T.bZ])})
lazy($,"bJ","$get$bJ",function(){return H.a([],[M.bt])})
lazy($,"ai","$get$ai",function(){return H.a([],[U.ae])})
lazy($,"wF","$get$wF",function(){return P.wl([0,new K.cF("Pixels -> Bytes",T.GT(),T.GS()),1,new K.cF("Pixels -> Packed bits",T.GR(),T.GQ()),2,new K.cF("RLE 1 byte",V.rX(1),V.rW(1)),3,new K.cF("RLE 2 bytes",V.rX(2),V.rW(2)),4,new K.cF("RLE 3 bytes",V.rX(3),V.rW(3)),5,new K.cF("RLE packed 1 byte",V.rV(1),V.rU(1)),6,new K.cF("RLE packed 2 bytes",V.rV(2),V.rU(2)),7,new K.cF("RLE packed 3 bytes",V.rV(3),V.rU(3)),8,new K.cF("RLE dynamic",V.Hp(),V.Ho()),9,new K.cF("Exponential-Golomb pixels",F.H8(),F.H7()),10,new K.cF("Exponential-Golomb run RLE",F.H6(),F.H5()),11,new K.cF("Exponential-Golomb run/data RLE",F.H4(),F.H3())],P.C,K.cF)})
lazy($,"c","$get$c",function(){return P.a0(null,null,null,G.a1)})
lazy($,"x3","$get$x3",function(){return P.dx("[\n\r]+",!0,!1)})
lazy($,"x4","$get$x4",function(){return P.dx("( *)(.*)",!0,!1)})
lazy($,"x2","$get$x2",function(){return P.dx("^s*//",!0,!1)})
lazy($,"x1","$get$x1",function(){return P.dx("//",!0,!1)})
lazy($,"cI","$get$cI",function(){return new F.hx(!1,!1,"WordListFileFormat")})
lazy($,"x6","$get$x6",function(){return new T.py(null)})
lazy($,"v4","$get$v4",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cX","$get$cX",function(){return P.cE(P.B,Y.dQ)})
lazy($,"wo","$get$wo",function(){return P.dx("[\\/]",!0,!1)})
lazy($,"tV","$get$tV",function(){return P.cE(P.B,W.fu)})
lazy($,"u6","$get$u6",function(){return A.fW(255,0,255,255)})
lazy($,"nE","$get$nE",function(){return new F.hx(!1,!1,"Path Utils")})
lazy($,"nD","$get$nD",function(){return P.cE(P.eL,P.C)})
lazy($,"cG","$get$cG",function(){return H.a([],[D.cj])})
lazy($,"hR","$get$hR",function(){return P.dx("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fw","$get$fw",function(){return P.dx("\\\\(?!\\\\)",!0,!1)})
lazy($,"vf","$get$vf",function(){var t={color:16711935}
return new THREE.MeshBasicMaterial(t)})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{C:"int",W:"double",dm:"num",B:"String",d9:"bool",cS:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.p,E.iE]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bg,P.C,P.C,O.cY]},{func:1,ret:P.bg,args:[P.C,P.bg,P.bg,O.cY]},{func:1,v:true,args:[P.ac]},{func:1,ret:P.B,args:[P.C]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dq,args:[P.C]},{func:1,ret:W.ay,args:[P.C]},{func:1,v:true,args:[P.ac],opt:[P.dS]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.f3,args:[P.C]},{func:1,ret:W.ce,args:[P.C]},{func:1,ret:W.cg,args:[P.C]},{func:1,ret:W.cs,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,ret:W.fv,args:[P.C]},{func:1,ret:W.fx,args:[P.C]},{func:1,ret:W.fy,args:[P.C]},{func:1,ret:P.bT,args:[P.C]},{func:1,ret:W.bM,args:[P.C]},{func:1,ret:P.B,args:[P.dv]},{func:1,ret:W.fz,args:[P.C]},{func:1,ret:W.ci,args:[P.C]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:P.be,args:[P.C]},{func:1,ret:P.C,args:[P.bH,P.bH]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:[P.co,P.cS]},{func:1,v:true,args:[P.B]},{func:1,v:true,args:[,P.dS]},{func:1,ret:P.d9,args:[P.ac]},{func:1,ret:W.cv,args:[P.C]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fm,ArrayBufferView:H.ey,DataView:H.nf,Float32Array:H.ng,Float64Array:H.nh,Int16Array:H.ni,Int32Array:H.nj,Int8Array:H.nk,Uint16Array:H.nl,Uint32Array:H.nm,Uint8ClampedArray:H.jB,CanvasPixelArray:H.jB,Uint8Array:H.fn,HTMLBRElement:W.al,HTMLCanvasElement:W.al,HTMLContentElement:W.al,HTMLDListElement:W.al,HTMLDataListElement:W.al,HTMLDetailsElement:W.al,HTMLDialogElement:W.al,HTMLDivElement:W.al,HTMLHRElement:W.al,HTMLHeadElement:W.al,HTMLHeadingElement:W.al,HTMLHtmlElement:W.al,HTMLLIElement:W.al,HTMLLabelElement:W.al,HTMLLegendElement:W.al,HTMLMenuElement:W.al,HTMLMenuItemElement:W.al,HTMLMeterElement:W.al,HTMLModElement:W.al,HTMLOListElement:W.al,HTMLOptGroupElement:W.al,HTMLOptionElement:W.al,HTMLParagraphElement:W.al,HTMLPictureElement:W.al,HTMLPreElement:W.al,HTMLProgressElement:W.al,HTMLQuoteElement:W.al,HTMLShadowElement:W.al,HTMLSourceElement:W.al,HTMLStyleElement:W.al,HTMLTableCaptionElement:W.al,HTMLTableCellElement:W.al,HTMLTableDataCellElement:W.al,HTMLTableHeaderCellElement:W.al,HTMLTableColElement:W.al,HTMLTableElement:W.al,HTMLTableRowElement:W.al,HTMLTableSectionElement:W.al,HTMLTitleElement:W.al,HTMLTrackElement:W.al,HTMLUListElement:W.al,HTMLUnknownElement:W.al,HTMLDirectoryElement:W.al,HTMLFontElement:W.al,HTMLFrameElement:W.al,HTMLMarqueeElement:W.al,HTMLElement:W.al,HTMLAnchorElement:W.eV,HTMLAreaElement:W.ky,HTMLAudioElement:W.eZ,AudioTrack:W.cL,AudioTrackList:W.kG,HTMLBaseElement:W.kK,Blob:W.f_,HTMLBodyElement:W.kN,HTMLButtonElement:W.fU,CDATASection:W.eg,CharacterData:W.eg,Comment:W.eg,ProcessingInstruction:W.eg,Text:W.eg,CompositorWorker:W.kX,Credential:W.fZ,FederatedCredential:W.fZ,PasswordCredential:W.fZ,CSSFontFaceRule:W.l3,CSSImportRule:W.l4,CSSKeyframeRule:W.h_,MozCSSKeyframeRule:W.h_,WebKitCSSKeyframeRule:W.h_,CSSKeyframesRule:W.h0,MozCSSKeyframesRule:W.h0,WebKitCSSKeyframesRule:W.h0,CSSPageRule:W.l5,CSSCharsetRule:W.bM,CSSGroupingRule:W.bM,CSSMediaRule:W.bM,CSSNamespaceRule:W.bM,CSSSupportsRule:W.bM,CSSRule:W.bM,CSSStyleDeclaration:W.f2,MSStyleCSSProperties:W.f2,CSS2Properties:W.f2,CSSStyleRule:W.l6,CSSViewportRule:W.l7,DataTransfer:W.lc,DataTransferItem:W.f3,DataTransferItemList:W.ih,Document:W.eh,HTMLDocument:W.eh,XMLDocument:W.eh,DocumentFragment:W.ij,ShadowRoot:W.ij,DOMError:W.ik,FileError:W.ik,DOMException:W.lf,DOMRectReadOnly:W.il,DOMStringList:W.im,DOMStringMap:W.io,DOMTokenList:W.ip,Element:W.dq,HTMLEmbedElement:W.ll,DirectoryEntry:W.h2,Entry:W.h2,FileEntry:W.h2,ErrorEvent:W.h3,AnimationEvent:W.S,AnimationPlayerEvent:W.S,ApplicationCacheErrorEvent:W.S,AutocompleteErrorEvent:W.S,BeforeInstallPromptEvent:W.S,BeforeUnloadEvent:W.S,BlobEvent:W.S,ClipboardEvent:W.S,CloseEvent:W.S,CompositionEvent:W.S,CustomEvent:W.S,DeviceLightEvent:W.S,DeviceMotionEvent:W.S,DeviceOrientationEvent:W.S,ExtendableEvent:W.S,ExtendableMessageEvent:W.S,FetchEvent:W.S,FocusEvent:W.S,FontFaceSetLoadEvent:W.S,GamepadEvent:W.S,GeofencingEvent:W.S,HashChangeEvent:W.S,InstallEvent:W.S,KeyboardEvent:W.S,MediaEncryptedEvent:W.S,MediaKeyMessageEvent:W.S,MediaQueryListEvent:W.S,MediaStreamEvent:W.S,MediaStreamTrackEvent:W.S,MessageEvent:W.S,MIDIConnectionEvent:W.S,MIDIMessageEvent:W.S,MouseEvent:W.S,DragEvent:W.S,NotificationEvent:W.S,PageTransitionEvent:W.S,PointerEvent:W.S,PopStateEvent:W.S,PresentationConnectionAvailableEvent:W.S,PresentationConnectionCloseEvent:W.S,ProgressEvent:W.S,PromiseRejectionEvent:W.S,PushEvent:W.S,RelatedEvent:W.S,RTCDataChannelEvent:W.S,RTCDTMFToneChangeEvent:W.S,RTCIceCandidateEvent:W.S,RTCPeerConnectionIceEvent:W.S,SecurityPolicyViolationEvent:W.S,ServicePortConnectEvent:W.S,ServiceWorkerMessageEvent:W.S,SpeechRecognitionEvent:W.S,StorageEvent:W.S,SyncEvent:W.S,TextEvent:W.S,TouchEvent:W.S,TrackEvent:W.S,TransitionEvent:W.S,WebKitTransitionEvent:W.S,UIEvent:W.S,WheelEvent:W.S,ResourceProgressEvent:W.S,USBConnectionEvent:W.S,IDBVersionChangeEvent:W.S,SVGZoomEvent:W.S,AudioProcessingEvent:W.S,OfflineAudioCompletionEvent:W.S,WebGLContextEvent:W.S,Event:W.S,InputEvent:W.S,Animation:W.aH,ApplicationCache:W.aH,DOMApplicationCache:W.aH,OfflineResourceList:W.aH,BatteryManager:W.aH,CanvasCaptureMediaStreamTrack:W.aH,CrossOriginServiceWorkerClient:W.aH,EventSource:W.aH,MediaKeySession:W.aH,MediaQueryList:W.aH,MediaRecorder:W.aH,MediaSource:W.aH,MediaStream:W.aH,MediaStreamTrack:W.aH,MessagePort:W.aH,MIDIAccess:W.aH,NetworkInformation:W.aH,Notification:W.aH,Performance:W.aH,PermissionStatus:W.aH,PresentationAvailability:W.aH,PresentationReceiver:W.aH,PresentationRequest:W.aH,RTCDTMFSender:W.aH,RTCPeerConnection:W.aH,webkitRTCPeerConnection:W.aH,mozRTCPeerConnection:W.aH,ScreenOrientation:W.aH,ServicePortCollection:W.aH,ServiceWorkerContainer:W.aH,ServiceWorkerRegistration:W.aH,SpeechRecognition:W.aH,SpeechSynthesis:W.aH,SpeechSynthesisUtterance:W.aH,WorkerPerformance:W.aH,BluetoothDevice:W.aH,BluetoothRemoteGATTCharacteristic:W.aH,USB:W.aH,EventTarget:W.aH,HTMLFieldSetElement:W.lT,File:W.ce,FileList:W.fb,FileReader:W.lU,DOMFileSystem:W.lV,FileWriter:W.lW,FontFace:W.lZ,FontFaceSet:W.m_,HTMLFormElement:W.iD,Gamepad:W.cp,History:W.m9,HTMLOptionsCollection:W.fc,HTMLCollection:W.fc,HTMLFormControlsCollection:W.iF,XMLHttpRequest:W.e7,XMLHttpRequestUpload:W.hk,XMLHttpRequestEventTarget:W.hk,HTMLIFrameElement:W.mf,ImageData:W.hl,HTMLImageElement:W.fe,HTMLInputElement:W.ml,HTMLKeygenElement:W.mJ,CalcLength:W.hs,LengthValue:W.hs,SimpleLength:W.hs,HTMLLinkElement:W.ht,Location:W.n0,HTMLMapElement:W.n5,HTMLVideoElement:W.hA,HTMLMediaElement:W.hA,MediaList:W.jy,HTMLMetaElement:W.n9,MIDIOutput:W.na,MIDIInput:W.hB,MIDIPort:W.hB,MimeType:W.cr,MimeTypeArray:W.jz,Navigator:W.nn,NavigatorUserMediaError:W.no,Node:W.ay,NodeList:W.jC,RadioNodeList:W.jC,HTMLObjectElement:W.nr,HTMLOutputElement:W.nw,HTMLParamElement:W.nA,Path2D:W.nC,PerformanceCompositeTiming:W.e8,PerformanceEntry:W.e8,PerformanceMark:W.e8,PerformanceMeasure:W.e8,PerformanceRenderTiming:W.e8,PerformanceResourceTiming:W.e8,Perspective:W.nH,Plugin:W.cg,PluginArray:W.jI,PresentationConnection:W.nM,RTCDataChannel:W.jM,DataChannel:W.jM,HTMLScriptElement:W.fu,HTMLSelectElement:W.jO,ServicePort:W.o8,SharedWorker:W.ob,SharedWorkerGlobalScope:W.oc,HTMLSlotElement:W.od,SourceBuffer:W.cs,SourceBufferList:W.jQ,HTMLSpanElement:W.hN,SpeechGrammar:W.ct,SpeechGrammarList:W.jR,SpeechRecognitionAlternative:W.fv,SpeechRecognitionError:W.oh,SpeechRecognitionResult:W.ci,SpeechSynthesisEvent:W.oi,SpeechSynthesisVoice:W.oj,Storage:W.op,CSSStyleSheet:W.ck,StyleSheet:W.ck,KeywordValue:W.eb,NumberValue:W.eb,PositionValue:W.eb,TransformValue:W.eb,StyleValue:W.eb,HTMLTemplateElement:W.oS,HTMLTextAreaElement:W.oU,TextTrack:W.cT,TextTrackCue:W.cH,VTTCue:W.cH,TextTrackCueList:W.oX,TextTrackList:W.oY,TimeRanges:W.p1,Touch:W.cv,TouchList:W.jV,TrackDefault:W.fx,TrackDefaultList:W.jW,Matrix:W.ec,Rotation:W.ec,Skew:W.ec,Translation:W.ec,TransformComponent:W.ec,URL:W.pg,VideoTrackList:W.pk,VTTRegion:W.fy,VTTRegionList:W.jX,WebSocket:W.pp,Window:W.jZ,DOMWindow:W.jZ,Worker:W.pw,CompositorWorkerGlobalScope:W.eN,DedicatedWorkerGlobalScope:W.eN,ServiceWorkerGlobalScope:W.eN,WorkerGlobalScope:W.eN,Attr:W.fz,ClientRect:W.pN,ClientRectList:W.hW,DOMRectList:W.hW,CSSRuleList:W.k5,DocumentType:W.pV,DOMRect:W.pW,GamepadList:W.k9,HTMLFrameSetElement:W.qg,NamedNodeMap:W.i1,MozNamedAttrMap:W.i1,ServiceWorker:W.qG,SpeechRecognitionResultList:W.kd,StyleSheetList:W.kf,WorkerLocation:W.qZ,WorkerNavigator:W.r_,IDBDatabase:P.ld,IDBIndex:P.mi,IDBObjectStore:P.ns,IDBOpenDBRequest:P.hM,IDBVersionChangeRequest:P.hM,IDBRequest:P.hM,IDBTransaction:P.p5,SVGAElement:P.kv,SVGAnimateElement:P.ef,SVGAnimateMotionElement:P.ef,SVGAnimateTransformElement:P.ef,SVGAnimationElement:P.ef,SVGSetElement:P.ef,SVGFEBlendElement:P.lt,SVGFEColorMatrixElement:P.lu,SVGFEComponentTransferElement:P.lv,SVGFECompositeElement:P.lw,SVGFEConvolveMatrixElement:P.lx,SVGFEDiffuseLightingElement:P.ly,SVGFEDisplacementMapElement:P.lz,SVGFEFloodElement:P.lA,SVGFEGaussianBlurElement:P.lB,SVGFEImageElement:P.lC,SVGFEMergeElement:P.lD,SVGFEMorphologyElement:P.lE,SVGFEOffsetElement:P.lF,SVGFESpecularLightingElement:P.lG,SVGFETileElement:P.lH,SVGFETurbulenceElement:P.lI,SVGFilterElement:P.lX,SVGCircleElement:P.cq,SVGClipPathElement:P.cq,SVGDefsElement:P.cq,SVGEllipseElement:P.cq,SVGForeignObjectElement:P.cq,SVGGElement:P.cq,SVGGeometryElement:P.cq,SVGLineElement:P.cq,SVGPathElement:P.cq,SVGPolygonElement:P.cq,SVGPolylineElement:P.cq,SVGRectElement:P.cq,SVGSwitchElement:P.cq,SVGGraphicsElement:P.cq,SVGImageElement:P.mg,SVGLength:P.d2,SVGLengthList:P.mM,SVGMarkerElement:P.n7,SVGMaskElement:P.n8,SVGNumber:P.d4,SVGNumberList:P.np,SVGPatternElement:P.nF,SVGPointList:P.nK,SVGScriptElement:P.o5,SVGStringList:P.oK,SVGDescElement:P.cc,SVGDiscardElement:P.cc,SVGFEDistantLightElement:P.cc,SVGFEFuncAElement:P.cc,SVGFEFuncBElement:P.cc,SVGFEFuncGElement:P.cc,SVGFEFuncRElement:P.cc,SVGFEMergeNodeElement:P.cc,SVGFEPointLightElement:P.cc,SVGFESpotLightElement:P.cc,SVGMetadataElement:P.cc,SVGStopElement:P.cc,SVGStyleElement:P.cc,SVGTitleElement:P.cc,SVGComponentTransferFunctionElement:P.cc,SVGElement:P.cc,SVGSVGElement:P.oN,SVGSymbolElement:P.oP,SVGTSpanElement:P.eH,SVGTextElement:P.eH,SVGTextPositioningElement:P.eH,SVGTextContentElement:P.eH,SVGTextPathElement:P.oW,SVGTransform:P.d7,SVGTransformList:P.p6,SVGUseElement:P.ph,SVGViewElement:P.pl,SVGViewSpec:P.pm,SVGLinearGradientElement:P.i_,SVGRadialGradientElement:P.i_,SVGGradientElement:P.i_,SVGCursorElement:P.qC,SVGFEDropShadowElement:P.qD,SVGMPathElement:P.qE,AudioBuffer:P.fO,AudioBufferSourceNode:P.eY,AudioContext:P.fP,webkitAudioContext:P.fP,OfflineAudioContext:P.fP,AnalyserNode:P.bB,RealtimeAnalyserNode:P.bB,AudioDestinationNode:P.bB,BiquadFilterNode:P.bB,ChannelMergerNode:P.bB,AudioChannelMerger:P.bB,ChannelSplitterNode:P.bB,AudioChannelSplitter:P.bB,DelayNode:P.bB,DynamicsCompressorNode:P.bB,GainNode:P.bB,AudioGainNode:P.bB,IIRFilterNode:P.bB,MediaStreamAudioDestinationNode:P.bB,PannerNode:P.bB,AudioPannerNode:P.bB,webkitAudioPannerNode:P.bB,ScriptProcessorNode:P.bB,JavaScriptAudioNode:P.bB,StereoPannerNode:P.bB,WaveShaperNode:P.bB,AudioNode:P.bB,MediaElementAudioSourceNode:P.e0,MediaStreamAudioSourceNode:P.e0,OscillatorNode:P.e0,Oscillator:P.e0,AudioSourceNode:P.e0,ConvolverNode:P.l0,WebGLActiveInfo:P.kx,WebGL2RenderingContext:P.nX,WebGL2RenderingContextBase:P.qY,SQLResultSetRowList:P.jS})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jA.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
W.h4.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"
W.h8.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"
W.h9.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xK(O.wK(),b)},[])
else (function(b){H.xK(O.wK(),b)})([])})})()
//# sourceMappingURL=ThemeController.dart.js.map