(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453a8e54"],{"0a6c":function(t,a,s){},cd5f:function(t,a,s){"use strict";var e=s("0a6c"),i=s.n(e);i.a},e77f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wsy_box"},[s("div",{staticClass:"header_container"},[s("div",{staticClass:"header_wrapper"},[s("div",{staticClass:"head_left"},[s("van-icon",{attrs:{name:"arrow-left"},on:{click:t.onClickLeft}})],1),s("div",{staticClass:"head_title"},[t._v("修改个人信息")]),s("div",{staticClass:"head_icon"},[s("p",{on:{click:function(a){return t.wsy_save()}}},[t._v("保存")])])])]),s("div",{staticClass:"wsy_info_box"},t._l(t.list,(function(a,e){return s("div",{key:e,staticClass:"box"},[s("van-checkbox",{attrs:{shape:"square"},model:{value:a.flag,callback:function(s){t.$set(a,"flag",s)},expression:"item.flag"}},[t._v(t._s(a.name))])],1)})),0)])},i=[],c={name:"",components:{},props:{},data(){return{list:[]}},created(){},mounted(){this.lwh_class()},activated(){},update(){},beforeRouteUpdate(t,a,s){s()},methods:{onClickLeft(){this.$router.back(1)},async lwh_class(){let{data:t}=await this.$http.get("https://www.365msmk.com/api/app/module/attribute/1?");t.data[1].value.map(t=>{t.flag=!1}),this.list=t.data[1].value,console.log(this.list)},async wsy_save(){let t=[];this.list.map(a=>{a.flag&&t.push({attr_id:2,attr_val_id:a.id})});let{data:a}=await this.$http.put("https://www.365msmk.com/api/app/user",{user_attr:JSON.stringify(t)});this.$router.back(1)}},filters:{},computed:{},watch:{}},l=c,n=(s("cd5f"),s("2877")),o=Object(n["a"])(l,e,i,!1,null,"494ce647",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-453a8e54.1fdf68d7.js.map