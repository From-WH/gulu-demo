(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{193:function(n,t,o){},257:function(n,t,o){"use strict";var e=o(193);o.n(e).a},270:function(n,t,o){"use strict";o.r(t);o(90);var e=o(200),c=o(166);o(0).a.use(e.a);var l={components:{"g-button":c.a},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{closeButton:{text:"知道了",callback:function(){console.log("他说知道了")}},enableHtml:!0})}},data:function(){return{content:"\n<g-button  @click=\"onClickButton\">上方弹出</g-button>\n\nmethods: {\n  onClickButton () {\n    this.$toast('<strong style=\"color:red;\">加粗的提示</strong>', {\n      closeButton: {\n        text: '知道了',\n        callback: () => {\n          console.log('他说知道了')\n        }\n      },\n      enableHtml: true\n    })\n  }\n},\n".trim()}}},s=(o(257),o(1)),u=Object(s.a)(l,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("g-button",{on:{click:n.onClickButton}},[n._v("上方弹出")]),n._v(" "),o("h3",[n._v("代码:")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])],1)},[],!1,null,null,null);u.options.__file="toast-demos-two.vue";t.default=u.exports}}]);