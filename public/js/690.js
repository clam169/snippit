(self.webpackChunk=self.webpackChunk||[]).push([[690],{757:(t,r,e)=>{t.exports=e(666)},666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,r,e){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=k(i,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=s(t,r,e);if("normal"===c.type){if(n=e.done?d:h,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(P([])));_&&_!==e&&n.call(_,a)&&(w=_);var x=g.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,a,i,u){var c=s(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,u)}),(function(t){e("throw",t,i,u)})):r.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function D(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}return v.prototype=g,c(x,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new E(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),c(x,u,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),D(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;D(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},690:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>m});var n=e(821),o=(0,n._)("h1",null,"Register",-1),a=(0,n._)("label",{for:"name"},"Name:",-1),i=(0,n._)("br",null,null,-1),u=(0,n._)("label",{for:"email"},"Email address:",-1),c=(0,n._)("br",null,null,-1),l=(0,n._)("label",{for:"password"},"Enter a Password at least 6 characters long:",-1),s=(0,n._)("br",null,null,-1),f=(0,n._)("label",{for:"confirmPassword"},"Confirm Password",-1);var h=e(757),p=e.n(h);function d(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}const y={name:"Register",data:function(){return{formData:{name:"",email:"",password:"",password_confirmation:""},msg:""}},methods:{register:function(){var t,r=this;return(t=p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(r.formData),axios.post("api/auth/register",r.formData).then((function(){return r.msg="congrats"})).catch((function(t){return r.msg=t}));case 2:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){d(a,n,o,i,u,"next",t)}function u(t){d(a,n,o,i,u,"throw",t)}i(void 0)}))})()}}};const m=(0,e(744).Z)(y,[["render",function(t,r,e,h,p,d){return(0,n.wg)(),(0,n.iD)("div",null,[o,(0,n._)("div",null,[(0,n._)("form",null,[(0,n._)("div",null,[a,(0,n.wy)((0,n._)("input",{type:"text",id:"name","onUpdate:modelValue":r[0]||(r[0]=function(t){return p.formData.name=t})},null,512),[[n.nr,p.formData.name]]),i,u,(0,n.wy)((0,n._)("input",{type:"email",id:"email","onUpdate:modelValue":r[1]||(r[1]=function(t){return p.formData.email=t})},null,512),[[n.nr,p.formData.email]]),c,l,(0,n.wy)((0,n._)("input",{type:"password",id:"password","onUpdate:modelValue":r[2]||(r[2]=function(t){return p.formData.password=t})},null,512),[[n.nr,p.formData.password]]),s,f,(0,n.wy)((0,n._)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":r[3]||(r[3]=function(t){return p.formData.password_confirmation=t})},null,512),[[n.nr,p.formData.password_confirmation]])]),(0,n._)("button",{type:"button",onClick:r[4]||(r[4]=function(){return d.register&&d.register.apply(d,arguments)})},"Register"),(0,n.Uk)(" "+(0,n.zw)(p.msg),1)])])])}]])}}]);