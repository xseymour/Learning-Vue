webpackJsonp([1],{0:function(e,t,n){n("F1kH"),e.exports=n("KqWi")},A6UI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){console.log("Component mounted.")}}},"Dlg+":function(e,t,n){window._=n("M4fF");try{window.Popper=n("Zgw8").default,window.$=window.jQuery=n("7t+N"),n("K3J8")}catch(e){}window.axios=n("mtWM"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var o=document.head.querySelector('meta[name="csrf-token"]');o?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=o.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},F1kH:function(e,t,n){n("Dlg+"),window.Vue=n("I3G/"),Vue.component("example-component",n("x8/H"));var o={user:{name:""}};axios.get("/getName").then(function(e){o.user.name=e.data.name,console.log(e)});new Vue({el:"#one",data:{laracast_url:"https://laracasts.com/series/learn-vue-2-step-by-step/episodes/24",shared:o}}),new Vue({el:"#two",data:{shared:o}})},KqWi:function(e,t){},MxN9:function(e,t){e.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"card card-default"},[t("div",{staticClass:"card-header"},[this._v("Example Component")]),this._v(" "),t("div",{staticClass:"card-body"},[this._v("\n                    I'm an example component.\n                ")])])])])])}]}},"VU/8":function(e,t){e.exports=function(e,t,n,o,s,r){var a,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,i=e.default);var d,u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId=s),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=d):o&&(d=o),d){var l=u.functional,f=l?u.render:u.beforeCreate;l?(u._injectStyles=d,u.render=function(e,t){return d.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:i,options:u}}},"x8/H":function(e,t,n){var o=n("VU/8")(n("A6UI"),n("MxN9"),!1,null,null,null);e.exports=o.exports}},[0]);