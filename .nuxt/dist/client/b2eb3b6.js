(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{199:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return m}));var n=r(59),o=function(data){return Object(n.b)({data:data,url:"/api/users/login",method:"POST"})},l=function(data){return Object(n.b)({data:data,url:"/api/users",method:"POST"})},c=function(e){return Object(n.b)({method:"GET",url:"/api/user"})},m=function(data){return Object(n.b)({data:data,method:"PUT",url:"/api/user"})}},278:function(e,t,r){"use strict";r.r(t);r(30);var n=r(3),o=r(199),l={middleware:"auth",name:"SettingsIndex",data:function(){return{user:{image:null,email:null,bio:null},isSaving:!1}},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)();case 2:return t=e.sent,data=t.data,r=data.user,e.abrupt("return",{user:r});case 6:case"end":return e.stop()}}),e)})))()},methods:{updateSetting:function(){this.isSaving=!0;Object(o.d)({user:this.user}).data;this.isSaving=!1}}},c=r(23),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:e.isSaving},on:{click:e.updateSetting}},[e._v("\n              Update Settings\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);