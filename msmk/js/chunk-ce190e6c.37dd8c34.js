(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce190e6c"],{1471:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"loginInput_container"},[s("div",{staticClass:"loginInput_phone",class:1==t.inputActive?"loginInput_active":"loginInput_phone"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneValue,expression:"phoneValue"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.phoneValue},on:{focus:t.onFocusPhone,blur:t.onBlur,input:function(e){e.target.composing||(t.phoneValue=e.target.value)}}})]),s("div",{staticClass:"loginInput_phone",class:2==t.inputActive?"loginInput_active":"loginInput_phone"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passValue,expression:"passValue"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.passValue},on:{focus:t.onFocusPass,blur:t.onBlur,input:function(e){e.target.composing||(t.passValue=e.target.value)}}})])]),s("div",{staticClass:"findInput_container"},[s("span",{on:{click:t.onForgetPass}},[t._v("找回密码")]),s("span",{on:{click:t.onRegister}},[t._v("注册/验证码登陆")])]),s("div",{staticClass:"loginButton"},[s("button",{on:{click:t.onClickLogin}},[t._v("登陆")])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_logo"},[s("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],a=s("d399"),i={data(){return{inputActive:0,phoneValue:"",passValue:""}},methods:{onFocusPhone(){console.log(111),this.inputActive=1},onFocusPass(){this.inputActive=2},onBlur(){this.inputActive=0},onForgetPass(){this.$router.push("/yzForgetPass")},onRegister(){this.$router.push("/yzRegister")},onClickLogin(){/^1[3456789]\d{9}$/.test(this.phoneValue)?this.$http.post("/api/app/login",{mobile:this.phoneValue,password:this.passValue,type:1}).then(t=>{console.log(t),200==t.data.code?(sessionStorage.setItem("token",t.data.data.remember_token),this.$store.commit("yzLoginMess",t.data.data),this.$router.push("/lwh_my")):201==t.data.code&&Object(a["a"])(t.data.msg)}):Object(a["a"])("手机号码格式不正确")}}},u=i,l=(s("ef4d"),s("2877")),c=Object(l["a"])(u,n,o,!1,null,"76e1667b",null);e["default"]=c.exports},ca0a:function(t,e,s){},ef4d:function(t,e,s){"use strict";var n=s("ca0a"),o=s.n(n);o.a}}]);
//# sourceMappingURL=chunk-ce190e6c.37dd8c34.js.map