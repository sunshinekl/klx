webpackJsonp([1],{mJrp:function(t,e){},otl1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{item:{}}},created:function(){var t=this;this.$store.commit("loading_show"),this.$http.get("/api/detail",{params:{goodId:this.$route.query.goodId}}).then(function(e){t.item=e.data[0],t.$store.commit("loading_hide")})},methods:{add:function(){var t=this;this.$store.state.token?this.$http.get("/api/add",{params:{goodId:this.$route.query.goodId,token:this.$store.state.token}}).then(function(e){e.data.code?(t.$alert("ok","添加成功"),t.$router.push("/Shopcar")):(t.$store.commit("update_token",""),localStorage.removeItem("token"),t.$alert("登录过期,即将跳转至登录页","add goods",{callback:function(){t.$router.push("/login?url="+t.$route.fullPath)}}))}):(alert("您还没有登录"),this.$router.push("/login"))}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("img",{attrs:{src:t.item.imageUrl,alt:""}}),t._v(" "),o("h2",[t._v(t._s(t.item.title))]),t._v(" "),o("p",[t._v("商品详情： "),o("span",[t._v(t._s(t.item.salePoint))])]),t._v(" "),o("p",[t._v("商品价格： "),o("span",[t._v("￥"+t._s(t.item.priceStr))])]),t._v(" "),o("p",[t._v("喜欢： "),o("span",[t._v(t._s(t.item.nice))])]),t._v(" "),o("button",{on:{click:t.add}},[t._v("立即抢购")])])},staticRenderFns:[]};var r=o("C7Lr")(a,i,!1,function(t){o("mJrp")},"data-v-49e2afbc",null);e.default=r.exports}});
//# sourceMappingURL=1.d959b9b7c07f13ffde95.js.map