(()=>{var t={195:(t,e,r)=>{t.exports=r(236)},236:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function y(){}function m(){}function v(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=v.prototype=y.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=v,s(L,"constructor",v),s(v,"constructor",m),m.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},T(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{components:()=>t});var t={};r.r(t),r.d(t,{ToggleableTagLabel:()=>j,ToggleableTagLabelList:()=>S});const e=flarum.core.compat["forum/app"];var o=r.n(e);const a=flarum.core.compat["forum/components/DiscussionHero"];var i=r.n(a);const c=flarum.core.compat["common/extend"],s=flarum.core.compat["common/models/Discussion"];var u=r.n(s);const l=flarum.core.compat["common/Model"];var f=r.n(l);const h=flarum.core.compat["tags/utils/sortTags"];var p=r.n(h);function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function g(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}const y=flarum.core.compat["common/Component"];var v=r.n(y);function b(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=r(195),L=r.n(x);const T=flarum.core.compat["common/utils/classList"];var _=r.n(T);const O=flarum.core.compat["tags/helpers/tagIcon"];var E=r.n(O),j=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r,n,a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e)},a.oncreate=function(e){t.prototype.oncreate.call(this,e)},a.onupdate=function(e){t.prototype.onupdate.call(this,e)},a.view=function(){var t=this,e={style:{},className:"TagLabel TagLabel--toggleable"},r=this.attrs,n=r.discussion,a=r.tagModel,i=function(t,e){return t.tags().some((function(t){return t.id()===e.id()}))}(n,a),c=function(t){void 0===t&&(t=21);for(var e="",r=crypto.getRandomValues(new Uint8Array(t));t--;){var n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e}(),s=a?a.name():o().translator.trans("flarum-tags.lib.deleted_tag_text");if(a){var u=a.color();u&&(e.style["--tag-bg"]=u,e.className=_()(e.className,"colored")),a.isChild()&&(e.className=_()(e.className,"TagLabel--child"))}else e.className=_()(e.className,"untagged");return m("span",e,m("label",{for:c,className:"TagLabel-text"},m("input",{disabled:this.attrs.disabled,onchange:function(){var e,r=(e=L().mark((function e(r){var i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attrs.onBeginChange(),i=n.tags().reduce((function(t,e){return t[e.id()]=e,t}),{}),r.target.checked?(i[a.id()]=a,t.oneSecondaryTagOnly&&Object.keys(i).forEach((function(t){var e=o().store.getById("tags",t);null===e.position()&&e.id()!==a.id()&&delete i[e.id()]}))):delete i[a.id()],e.next=5,n.save({relationships:{tags:Object.values(i)}});case 5:t.attrs.onChangeComplete();case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){b(a,n,o,i,c,"next",t)}function c(t){b(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}(),id:c,type:"checkbox",className:"TagLabel-toggle",checked:i}),m("span",{class:"BlomstraTagLabel-label"},a&&a.icon()&&E()(a,{},{useColor:!1})," ",s)))},r=e,(n=[{key:"oneSecondaryTagOnly",get:function(){return o().forum.attribute("blomstra-secondary-tag-toggler.only_one_secondary_tag")}}])&&w(r.prototype,n),e}(v()),S=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={disabled:!1},e}return g(e,t),e.prototype.view=function(){var t=this,e=this.attrs,r=e.allSecondaryTags,n=e.discussion;return m("span",{class:"BlomstraToggleableTagLabels"},null==r||null==r.map?void 0:r.map((function(e){return m(j,{key:e.id(),tagModel:e,discussion:n,disabled:t.state.disabled,onBeginChange:function(){t.state.disabled=!0,m.redraw()},onChangeComplete:function(){t.state.disabled=!1,m.redraw()}})})))},e}(v());o().initializers.add("blomstra/secondary-tags-toggler",(function(){u().prototype.canViewSecondaryTagToggler=f().attribute("canViewSecondaryTagToggler");var t=null;setTimeout((function(){t=p()(o().store.all("tags").filter((function(t){return null===t.position()&&t.canAddToDiscussion()}))),m.redraw()}),0),(0,c.extend)(i().prototype,"items",(function(e){var r=this.attrs.discussion;r.canViewSecondaryTagToggler()&&r.canTag()&&t&&e.add("secondaryTagsToggle",m(S,{allSecondaryTags:t,discussion:r}),4)}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map