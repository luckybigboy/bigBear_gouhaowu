webpackJsonp([18],{UgNE:function(t,s){},vnkN:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"shopItem",props:{shopItem:Object},data:function(){return{isShow:!1}},methods:{closeFoodItem:function(){this.isShow=!this.isShow}},components:{cartControl:function(){return e.e(16).then(e.bind(null,"fNTu"))}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[t.isShow?e("div",{staticClass:"showMask"},[e("div",{staticClass:"mask",on:{click:t.closeFoodItem}}),t._v(" "),e("div",{staticClass:"foodItem"},[e("div",{staticClass:"imgBox"},[e("a",{staticClass:"back",on:{click:function(s){return s.preventDefault(),t.closeFoodItem(s)}}},[e("i",{staticClass:"iconfont icon-btn_back"})]),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.shopItem.image,expression:"shopItem.image"}],attrs:{alt:""}}),t._v(" "),e("span",[t._v(t._s(t.shopItem.info))])]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(t.shopItem.name))]),t._v(" "),e("p",{staticClass:"title"},[t._v("月售"+t._s(t.shopItem.sellCount)+"份  好频率"+t._s(t.shopItem.rating)+"%")]),t._v(" "),e("p",{staticClass:"price"},[t._v("￥"+t._s(t.shopItem.price)+" "),t.shopItem.oldPrice?e("del",[t._v("￥"+t._s(t.shopItem.oldPrice))]):t._e()]),t._v(" "),e("div",{staticClass:"cartCount"},[e("cart-Control",{attrs:{food:t.shopItem}})],1)])])]):t._e()])},staticRenderFns:[]};var n=e("VU/8")(o,a,!1,function(t){e("UgNE")},null,null);s.default=n.exports}});
//# sourceMappingURL=18.1a53abb5852276295c08.js.map