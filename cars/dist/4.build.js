webpackJsonp([4],{178:function(t,r,n){"use strict";function e(t){n(214)}Object.defineProperty(r,"__esModule",{value:!0});var o=n(187),i=n(216),a=n(38),s=e,c=a(o.a,i.a,!1,s,null,null);r.default=c.exports},187:function(t,r,n){"use strict";var e=n(39),o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};r.a={name:"colors",data:function(){return{}},computed:o({},Object(e.e)({SerialID:function(t){return t.app.SerialID},arr:function(t){return t.imgs.arr}})),methods:{bink:function(){this.$store.dispatch("imgs/getColor",this.SerialID)}},mounted:function(){this.bink()}}},214:function(t,r,n){var e=n(215);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(3)("74a6f93c",e,!0,{})},215:function(t,r,n){r=t.exports=n(0)(!1),r.push([t.i,".colors{width:100%;height:100%;background:#f4f4f4;position:absolute;top:0}.colors>p{width:100%;height:.8rem;font-size:.34rem;background:#fff;line-height:.8rem;font-weight:400;color:#00afff;margin:.15rem 0;text-align:center}",""])},216:function(t,r,n){"use strict";var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"colors"},[n("p",[t._v("全部颜色")]),t._v(" "),n("div",[n("p",t._l(t.arr,function(r,e){return n("span",[t._v(t._s(e))])}))]),t._v("\n    "+t._s(t.arr)+"\n")])},o=[],i={render:e,staticRenderFns:o};r.a=i}});
//# sourceMappingURL=4.build.js.map