(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6761662a"],{"1c28":function(s,t,a){},"578a":function(s,t,a){"use strict";a.r(t);var e,n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"nav"},[e("ul",{staticClass:"nav-top"},[e("li",[e("img",{staticClass:"auto-img left",attrs:{src:a("cde8")},on:{click:function(t){return s.goPath({name:"Index"})}}})]),e("li",[e("span",{staticClass:"register",on:{click:function(t){return s.goPath({name:"Register"})}}},[s._v("注册")])])]),s._m(0),e("div",{staticClass:"log"},[e("van-row",[e("van-col",{attrs:{offset:"2",span:"20"}},[e("van-field",{staticClass:"ys",attrs:{label:"手机号",placeholder:"输入手机号"},model:{value:s.userInfo.phone,callback:function(t){s.$set(s.userInfo,"phone",t)},expression:"userInfo.phone"}}),e("div",{staticClass:"pw"},[e("van-field",{staticClass:"ys",attrs:{type:"password",label:"密码",placeholder:"密码(8-16位)"},model:{value:s.userInfo.pwd,callback:function(t){s.$set(s.userInfo,"pwd",t)},expression:"userInfo.pwd"}})],1),e("div",{staticClass:"lg"},[e("van-button",{staticClass:"login-btn",attrs:{size:"large",type:"info"},on:{click:s.login}},[s._v("登录")])],1)],1)],1)],1)])])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"pic"},[e("div",{staticClass:"add"},[e("img",{staticClass:"auto-img music",attrs:{src:a("27d4")}})]),e("div",{staticClass:"add"},[e("p",{staticClass:"write"},[s._v("网易云")])])])}],o=a("bd86"),r=(a("66b9"),a("b650")),l=(a("be7f"),a("565f")),c=(a("7f7f"),a("0653"),a("34e9")),u=a("0c52"),d=a("a938"),f={name:"Login",components:(e={},Object(o["a"])(e,c["a"].name,c["a"]),Object(o["a"])(e,l["a"].name,l["a"]),Object(o["a"])(e,r["a"].name,r["a"]),e),data:function(){return{userInfo:{phone:"",pwd:""}}},methods:{goPath:function(s){this.$router.push(s)},login:function(){if(u["a"].validPhone(this.userInfo.phone))if(u["a"].validPwd(this.userInfo.pwd,8,16)){var s=localStorage.getItem("users");if(s){this.users=JSON.parse(s);for(var t=0;t<this.users.length;t++)if(this.users[t].phone==this.userInfo.phone)return this.users[t].pwd==this.userInfo.pwd?this.$router.push({name:"Index"}):d["a"].dialogTip("手机号或者密码不正确");d["a"].dialogTip("该用户不存在")}}else d["a"].dialogTip("密码只支持!@._字母数字组合",!0,this.userInfo,"pwd");else d["a"].dialogTip("手机号码不正确",!0,this.userInfo,"phone")}}},p=f,h=(a("844c"),a("2877")),v=Object(h["a"])(p,n,i,!1,null,"403d573c",null);t["default"]=v.exports},"844c":function(s,t,a){"use strict";var e=a("1c28"),n=a.n(e);n.a}}]);
//# sourceMappingURL=chunk-6761662a.c10532eb.js.map