module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}({1:function(e,t){e.exports=flarum.core.compat["admin/app"]},13:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n);o.a.initializers.add("blomstra/secondary-tags-toggler",(function(){o.a.extensionData.for("blomstra-secondary-tags-toggler").registerSetting({setting:"blomstra-secondary-tag-toggler.only_one_secondary_tag",type:"switch",label:o.a.translator.trans("blomstra-secondary-tags-toggler.admin.settings.only_one_secondary_tag"),help:o.a.translator.trans("blomstra-secondary-tags-toggler.admin.settings.only_one_secondary_tag_help")}).registerPermission({icon:"fas fa-tags",label:o.a.translator.trans("blomstra-secondary-tags-toggler.admin.permissions.view_toggler"),permission:"discussion.viewSecondaryTagsToggler",tagScoped:!0},"moderate",95)}))}});
//# sourceMappingURL=admin.js.map