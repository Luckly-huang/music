(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09487118"],{"02f4":function(e,t,a){var n=a("4588"),r=a("be13");e.exports=function(e){return function(t,a){var i,s,o=String(r(t)),l=n(a),c=o.length;return l<0||l>=c?e?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?e?o.charAt(l):i:e?o.slice(l,l+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var n=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},"1feb":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("ul",{staticClass:"nav-top"},[n("li",[n("img",{staticClass:"auto-img left",attrs:{src:a("cde8")},on:{click:function(t){return e.goPath({name:"Index"})}}})]),n("li",[n("span",{staticClass:"register",on:{click:function(t){return e.goPath({name:"Login"})}}},[e._v("登录")])])]),e._m(0),n("div",{staticClass:"log"},[n("van-row",[n("van-col",{attrs:{offset:"2",span:"20"}},[n("van-cell-group",[n("div",[n("van-field",{staticClass:"phone",attrs:{label:"手机号",placeholder:"输入手机号"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}})],1),n("div",{staticClass:"pw"},[n("van-field",{staticClass:"phone",attrs:{type:"password",label:"密码",placeholder:"密码(8-16位)"},model:{value:e.userInfo.pwd,callback:function(t){e.$set(e.userInfo,"pwd",t)},expression:"userInfo.pwd"}})],1),n("div",{staticClass:"que"},[n("van-field",{staticClass:"phone",attrs:{type:"password",label:"确认密码",placeholder:"确认密码"},model:{value:e.userInfo.repwd,callback:function(t){e.$set(e.userInfo,"repwd",t)},expression:"userInfo.repwd"}})],1),n("div",{staticClass:"short"},[n("van-field",{staticClass:"dx",attrs:{label:"短信验证码"},model:{value:e.userInfo.validcode,callback:function(t){e.$set(e.userInfo,"validcode",t)},expression:"userInfo.validcode"}},[n("van-button",{staticClass:"aa",attrs:{slot:"button",size:"small",type:"primary",disabled:e.isDisabled},on:{click:e.sendValidCode},slot:"button"},[e._v(e._s(e.validCodeText))])],1)],1)]),n("div",{staticClass:"rg"},[n("van-button",{staticClass:"register-btn",attrs:{size:"large",type:"info"},on:{click:e.regitser}},[e._v("注册")])],1)],1)],1)],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pic"},[n("div",{staticClass:"add"},[n("img",{staticClass:"auto-img music",attrs:{src:a("27d4")}})]),n("div",{staticClass:"add"},[n("p",{staticClass:"write"},[e._v("网易云")])])])}],s=a("f499"),o=a.n(s),l=a("bd86"),c=(a("66b9"),a("b650")),u=(a("be7f"),a("565f")),d=(a("7f7f"),a("0653"),a("34e9")),f=a("0c52"),v=a("a938"),p=(a("a481"),a("3b2b"),{format:function(e,t){var a=e.getFullYear(),n=/(y+)/;if(n.test(t)){var r=RegExp.$1;t=t.replace(r,a)}var i={M:e.getMonth()+1,d:e.getDate(),h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()};for(var s in i){var o=new RegExp("("+s+"+)");if(o.test(t)){var l=RegExp.$1,c=i[s];t=t.replace(l,c>=10?c:l.length>=2?"0"+c:c)}}return t}}),h={name:"Register",data:function(){return{validCode:"",validCodeText:"发送验证码",isDisabled:!1,users:null,userInfo:{phone:"",pwd:"",repwd:"",validcode:""}}},components:(n={},Object(l["a"])(n,d["a"].name,d["a"]),Object(l["a"])(n,u["a"].name,u["a"]),Object(l["a"])(n,c["a"].name,c["a"]),n),methods:{regitser:function(){if(f["a"].validPhone(this.userInfo.phone))if(f["a"].validPwd(this.userInfo.pwd,8,16))if(f["a"].validEqual(this.userInfo.pwd,this.userInfo.repwd))if(!f["a"].validEqual(this.userInfo.validcode,this.validCode)||this.userInfo.validcode.length<6)v["a"].dialogTip("验证码不正确",!0,this.userInfo,"validcode");else{for(var e=0;e<this.users.length;e++)if(this.users[e].phone==this.userInfo.phone)return void v["a"].dialogTip("该手机号已被注册");var t=new Date,a="vue"+t.getTime(),n=this.userInfo.phone,r=this.userInfo.pwd,i=p.format(t,"yyyy-MM-dd hh:mm:ss"),s={uid:a,phone:n,pwd:r,registerTime:i};this.users.push(s);var l=o()(this.users);localStorage.setItem("users",l),this.$router.push({name:"Login"})}else v["a"].dialogTip("两次密码不一致",!0,this.userInfo,"repwd");else v["a"].dialogTip("密码只支持!@._字母数字组合",!0,this.userInfo,"pwd");else v["a"].dialogTip("手机号码不正确",!0,this.userInfo,"phone")},sendValidCode:function(){var e=this;if(f["a"].validPhone(this.userInfo.phone)){this.isDisabled=!0;var t=5;this.validCodeText=t+"s后重新发送";var a=setInterval(function(){t<=0?(e.isDisabled=!1,e.validCodeText="发送验证码",clearInterval(a),t=null):e.validCodeText=--t+"s后重新发送"},1e3);this.validCode=f["a"].generateValidCode(),alert(this.validCode)}else v["a"].dialogTip("手机号码不正确",!0,this.userInfo,"phone")},goPath:function(e){this.$router.push(e)}},created:function(){var e=localStorage.getItem("users");this.users=void 0==e?[]:JSON.parse(e)}},g=h,b=(a("49ce"),a("2877")),x=Object(b["a"])(g,r,i,!1,null,"99e12a00",null);t["default"]=x.exports},"214f":function(e,t,a){"use strict";a("b0c5");var n=a("2aba"),r=a("32e9"),i=a("79e5"),s=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var f=o(e),v=!i(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),p=v?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[f](""),!t}):void 0;if(!v||!p||"replace"===e&&!u||"split"===e&&!d){var h=/./[f],g=a(s,f,""[e],function(e,t,a,n,r){return t.exec===l?v&&!r?{done:!0,value:h.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),b=g[0],x=g[1];n(String.prototype,e,b),r(RegExp.prototype,f,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"49ce":function(e,t,a){"use strict";var n=a("d28b"),r=a.n(n);r.a},"520a":function(e,t,a){"use strict";var n=a("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,s=r,o="lastIndex",l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[o]||0!==t[o]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(s=function(e){var t,a,s,u,d=this;return c&&(a=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),l&&(t=d[o]),s=r.call(d,e),l&&s&&(d[o]=d.global?s.index+s[0].length:t),c&&s&&s.length>1&&i.call(s[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,a){"use strict";var n=a("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},a21f:function(e,t,a){var n=a("584a"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},a481:function(e,t,a){"use strict";var n=a("cb7c"),r=a("4bf8"),i=a("9def"),s=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,h){return[function(n,r){var i=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i,r):a.call(String(i),n,r)},function(e,t){var r=h(a,e,this,t);if(r.done)return r.value;var d=n(e),f=String(this),v="function"===typeof t;v||(t=String(t));var b=d.global;if(b){var x=d.unicode;d.lastIndex=0}var m=[];while(1){var I=l(d,f);if(null===I)break;if(m.push(I),!b)break;var w=String(I[0]);""===w&&(d.lastIndex=o(f,i(d.lastIndex),x))}for(var C="",y=0,$=0;$<m.length;$++){I=m[$];for(var E=String(I[0]),S=c(u(s(I.index),f.length),0),T=[],k=1;k<I.length;k++)T.push(p(I[k]));var R=I.groups;if(v){var _=[E].concat(T,S,f);void 0!==R&&_.push(R);var O=String(t.apply(void 0,_))}else O=g(E,f,S,T,R,t);S>=y&&(C+=f.slice(y,S)+O,y=S+E.length)}return C+f.slice(y)}];function g(e,t,n,i,s,o){var l=n+e.length,c=i.length,u=v;return void 0!==s&&(s=r(s),u=f),a.call(o,u,function(a,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(l);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>c){var f=d(u/10);return 0===f?a:f<=c?void 0===i[f-1]?r.charAt(1):i[f-1]+r.charAt(1):a}o=i[u-1]}return void 0===o?"":o})}})},b0c5:function(e,t,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},d28b:function(e,t,a){},f499:function(e,t,a){e.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-09487118.84e9e2ce.js.map