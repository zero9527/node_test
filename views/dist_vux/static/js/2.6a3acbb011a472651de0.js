webpackJsonp([2],{"8wyU":function(n,t,e){"use strict";function o(n){e("AoGN")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("ignk"),A=e("RbLt"),a=(r.a,{name:"detail",components:{XTable:r.a},data:function(){return{detail:[]}},created:function(){var n=this,t=this,e=t.$route.query.name;t.$ajax.get("static/detail.json",{params:{name:e}}).then(function(n){console.log("res: ",n),n.data.forEach(function(n,o){n.name==e&&(console.log("item: ",n),n.time=getLocalTime(n.time),t.detail.push(n))})}).catch(function(n){console.log("err: ",n)}),A.a.$on("pagedata",function(t){return n.pagedata=t}),A.a.$on("page",function(t){return n.page=t})},methods:{},beforeDestroy:function(){A.a.$emit("pagedata",this.pagedata),A.a.$emit("page",this.page)},destroyed:function(){A.a.$off("pagedata"),A.a.$off("page")}}),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"detail"},[e("x-table",[e("thead",[e("tr",[e("th",[n._v("姓名")]),n._v(" "),e("th",[n._v("时间")]),n._v(" "),e("th",[n._v("城市")]),n._v(" "),e("th",[n._v("年龄")])])]),n._v(" "),e("tbody",n._l(n.detail,function(t){return e("tr",[e("td",[n._v(n._s(t.name))]),n._v(" "),e("td",[n._v(n._s(t.time))]),n._v(" "),e("td",[n._v(n._s(t.city))]),n._v(" "),e("td",[n._v(n._s(t.age))])])}))])],1)},C=[],l={render:i,staticRenderFns:C},s=l,b=e("VU/8"),d=o,B=b(a,s,!1,d,"data-v-c8e4b42c",null);t.default=B.exports},AoGN:function(n,t,e){var o=e("bzPC");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("1d5646b2",o,!0,{})},MogA:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,'\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table {\n  line-height: 40px;\n  position: relative;\n  width: 100%;\n  border-collapse: collapse;\n}\n.vux-table:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-table th {\n  font-weight: 500;\n}\n.vux-table.vux-table-bordered:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table td,\n.vux-table th {\n  border-bottom: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  text-align: center;\n}\n.vux-table td,\n.vux-table th {\n  position: relative;\n  border-right: 0;\n  border-bottom: 0;\n}\n.vux-table td:before,\n.vux-table th:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-table.vux-table-no-content-bordered td:before {\n  border-bottom-width: 0;\n}\n.vux-table.vux-table-no-content-bordered tr:last-child td:before {\n  border-bottom-width: 1px;\n}\n.vux-table td:after,\n.vux-table th:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table.vux-table-no-cell-bordered td:after,\n.vux-table.vux-table-no-cell-bordered th:after {\n  border-right-width: 0;\n}\n.vux-table tr td:last-child:after,\n.vux-table tr th:last-child:after {\n  border-right-width: 0;\n}\n.vux-table.vux-table-bordered tr td:last-child:after,\n.vux-table.vux-table-bordered tr th:last-child:after {\n  border-right-width: 1px;\n}\n',"",{version:3,sources:["D:/__frontEnd/github/vuxtest/node_modules/vux/src/components/x-table/index.vue"],names:[],mappings:";AACA;;;;;;EAME,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,mCAAmC;UAC3B,2BAA2B;EACnC,8BAA8B;UACtB,sBAAsB;CAC/B;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,UAAU;EACV,+BAA+B;EAC/B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;EACX,UAAU;EACV,gCAAgC;EAChC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,UAAU;EACV,+BAA+B;EAC/B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;;EAEE,iCAAiC;EACjC,gCAAgC;EAChC,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;;EAEE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;CAC1B;AACD;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;EACX,UAAU;EACV,gCAAgC;EAChC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;;EAEE,sBAAsB;CACvB;AACD;;EAEE,sBAAsB;CACvB;AACD;;EAEE,wBAAwB;CACzB",file:"index.vue",sourcesContent:['\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table {\n  line-height: 40px;\n  position: relative;\n  width: 100%;\n  border-collapse: collapse;\n}\n.vux-table:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-table th {\n  font-weight: 500;\n}\n.vux-table.vux-table-bordered:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table td,\n.vux-table th {\n  border-bottom: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  text-align: center;\n}\n.vux-table td,\n.vux-table th {\n  position: relative;\n  border-right: 0;\n  border-bottom: 0;\n}\n.vux-table td:before,\n.vux-table th:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-table.vux-table-no-content-bordered td:before {\n  border-bottom-width: 0;\n}\n.vux-table.vux-table-no-content-bordered tr:last-child td:before {\n  border-bottom-width: 1px;\n}\n.vux-table td:after,\n.vux-table th:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-table.vux-table-no-cell-bordered td:after,\n.vux-table.vux-table-no-cell-bordered th:after {\n  border-right-width: 0;\n}\n.vux-table tr td:last-child:after,\n.vux-table tr th:last-child:after {\n  border-right-width: 0;\n}\n.vux-table.vux-table-bordered tr td:last-child:after,\n.vux-table.vux-table-bordered tr th:last-child:after {\n  border-right-width: 1px;\n}\n'],sourceRoot:""}])},bzPC:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\nh1[data-v-c8e4b42c], h2[data-v-c8e4b42c] {\r\n  font-weight: normal;\n}\nul[data-v-c8e4b42c] {\r\n  list-style-type: none;\r\n  padding: 0;\n}\nli[data-v-c8e4b42c] {\r\n  display: inline-block;\r\n  margin: 0 10px;\n}\na[data-v-c8e4b42c] {\r\n  color: #42b983;\n}\r\n","",{version:3,sources:["D:/__frontEnd/github/vuxtest/src/components/list_detail.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB",file:"list_detail.vue",sourcesContent:["\nh1[data-v-c8e4b42c], h2[data-v-c8e4b42c] {\r\n  font-weight: normal;\n}\nul[data-v-c8e4b42c] {\r\n  list-style-type: none;\r\n  padding: 0;\n}\nli[data-v-c8e4b42c] {\r\n  display: inline-block;\r\n  margin: 0 10px;\n}\na[data-v-c8e4b42c] {\r\n  color: #42b983;\n}\r\n"],sourceRoot:""}])},cC6l:function(n,t,e){var o=e("MogA");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("bd4eb9f8",o,!0,{})},ignk:function(n,t,e){"use strict";function o(n){e("cC6l")}var r=(Boolean,Boolean,Boolean,{name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}}),A=function(){var n=this,t=n.$createElement;return(n._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":n.fullBordered,"vux-table-no-cell-bordered":!n.cellBordered,"vux-table-no-content-bordered":!n.contentBordered}},[n._t("default")],2)},a=[],i={render:A,staticRenderFns:a},C=i,l=e("VU/8"),s=o,b=l(r,C,!1,s,null,null);t.a=b.exports}});
//# sourceMappingURL=2.6a3acbb011a472651de0.js.map