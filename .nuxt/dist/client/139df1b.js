(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(t,e,r){"use strict";r.d(e,"h",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"g",(function(){return m})),r.d(e,"f",(function(){return v})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return _})),r.d(e,"d",(function(){return h}));var n=r(59),o=function(t){return Object(n.b)({params:t,url:"/api/articles",method:"GET"})},c=function(t){return Object(n.b)({params:t,url:"/api/articles/feed",method:"GET"})},l=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"POST"})},f=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/favorite"),method:"DELETE"})},m=function(t){return Object(n.b)({url:"/api/articles/".concat(t),method:"GET"})},v=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/comments"),method:"GET"})},d=function(data){return Object(n.b)({data:data,url:"/api/articles",method:"POST"})},_=function(t){return Object(n.b)({data:{comment:{body:t.body}},url:"/api/articles/".concat(t.slug,"/comments"),method:"POST"})},h=function(data){return Object(n.b)({url:"/api/articles/".concat(data.slug,"/comments/").concat(data.id),method:"DELETE"})}},193:function(t,e,r){var n=r(6),o=r(25),c=r(10),l=r(194),f="["+l+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),d=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=o[t]=f?e(_):l[t];r&&(o[r]=m),n(n.P+n.F*f,"String",o)},_=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},194:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},195:function(t,e,r){"use strict";var n=r(4),o=r(19),c=r(24),l=r(121),f=r(61),m=r(10),v=r(44).f,d=r(62).f,_=r(9).f,h=r(193).trim,O=n.Number,C=O,w=O.prototype,y="Number"==c(r(78)(w)),E="trim"in String.prototype,j=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=E?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(y?m((function(){w.valueOf.call(r)})):"Number"!=c(r))?l(new C(j(e)),r,O):j(e)};for(var x,N=r(7)?v(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)o(C,x=N[I])&&!o(O,x)&&_(O,x,d(C,x));O.prototype=w,w.constructor=O,r(11)(n,"Number",O)}},196:function(t,e,r){var n=r(6),o=r(197);n(n.S+n.F*(Number.parseInt!=o),"Number",{parseInt:o})},197:function(t,e,r){var n=r(4).parseInt,o=r(193).trim,c=r(194),l=/^[-+]?0[xX]/;t.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},200:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return l}));var n=r(59),o=function(t){return Object(n.b)({url:"/api/profiles/".concat(t),method:"GET"})},c=function(t){return Object(n.b)({url:"/api/profiles/".concat(t,"/follow"),method:"POST"})},l=function(t){return Object(n.b)({url:"/api/profiles/".concat(t,"/follow"),method:"DELETE"})}},277:function(t,e,r){"use strict";r.r(e);r(77),r(31),r(60);var n=r(46),o=(r(32),r(13),r(45),r(22)),c=(r(195),r(196),r(30),r(3)),l=r(34),f=r(200),article=r(192);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"auth",name:"UserProfile",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,m,v,d,_,h,O,C,w,y,E,j,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.query,c=t.store,l=Number.parseInt(n.page||1),m=10,v=n.tab,d=void 0===v?"my_articles":v,_=c.state.user&&"my_articles"===d?{limit:m,offset:(l-1)*m,author:r.username}:{limit:m,offset:(l-1)*m,favorited:r.username},e.next=7,Promise.all([Object(f.b)(r.username),Object(article.h)(_)]);case 7:return h=e.sent,O=Object(o.a)(h,2),C=O[0],w=O[1],y=w.data,E=y.articles,j=y.articlesCount,x=C.data.profile,console.log(w),e.abrupt("return",{tab:d,profile:x,articles:E,articlesCount:j,page:l,limit:m});case 15:case"end":return e.stop()}}),e)})))()},computed:v(v({},Object(l.b)(["user"])),{},{isCurUser:function(){return this.$route.params.username===this.user.username},totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),watchQuery:["page","tab"],methods:{followUser:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isActing=!0,r=null,r=t.following?f.c:f.a,e.next=5,r(t.username);case 5:n=e.sent,n.data,t.following=!t.following,t.isActing=!1;case 9:case"end":return e.stop()}}),e)})))()}}},_=r(23),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.profile.bio)+"\n          ")]),t._v(" "),t.isCurUser?r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:"settings"}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n              Edit Profile Settings\n          ")]):r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{disabled:t.profile.isActing},on:{click:function(e){return t.followUser(t.profile)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n              "+t._s(t.profile.following?"Unfollow":"Follow")+"\n            "+t._s(t.profile.username)+"\n          ")])],1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.user.username},query:{tab:"my_articles"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.user.username},query:{tab:"favorited_articles"}}}},[t._v("Favorited Articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:"article.author.image"}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoritedDisable},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"profile",query:{page:e,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);