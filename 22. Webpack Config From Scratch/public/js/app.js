webpackJsonp([0],{11:function(t,e,n){"use strict";e.a={template:"<h1>Hello World</h1>"}},12:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(30),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e){r(this,t),this.original_data=e,this.errors=new i.a,this.is_loading=!1;for(var n in e)this[n]=e[n]}return o(t,[{key:"data",value:function(){var t={};for(var e in this.original_data)t[e]=this[e];return t}},{key:"reset",value:function(){for(var t in this.original_data)this[t]="";this.errors.clear()}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this;return this.is_loading=!0,new Promise(function(r,i){axios[t](e,n.data()).then(function(t){n.onSuccess(t.data),r(t.data)}).catch(function(t){n.onFail(t.response.data),i(t.response.data)})})}},{key:"onSuccess",value:function(t){alert(t.message),this.reset(),this.is_loading=!1}},{key:"onFail",value:function(t){this.errors.record(t),this.is_loading=!1}}]),t}();e.a=a},30:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){r(this,t),this.errors={}}return i(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e.a=o},34:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(1),o=n.n(i),a=n(12),u=n(11);window.axios=o.a,window.Form=a.a;new r.default({el:"#root",components:{Example:u.a},data:{form:new a.a({name:"",description:""})},methods:{onSubmit:function(){this.form.post("/projects").then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},computed:{},mounted:function(){},created:function(){}})}},[34]);
//# sourceMappingURL=app.js.map