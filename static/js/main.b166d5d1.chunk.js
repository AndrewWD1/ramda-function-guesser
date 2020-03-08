(this["webpackJsonpramda-function-guesser"]=this["webpackJsonpramda-function-guesser"]||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return javascriptTypes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ramdaTester}));var _root_projects_ramda_function_guesser_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(25),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),ramda__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),javascriptTypes={string:"string",number:"number",boolean:"boolean",object:"object",function:"function",array:"array"},parseNumber=function(e){return Number(e)},parseBoolean=function(e){return"false"!==e&&("true"===e||!!e)},parseFunction=function parseFunction(value){return eval(value)},parseObject=function(e){return JSON.parse(e)},parseArray=function(e){return JSON.parse(e)},parseArg=function(e){try{switch(e.type){case javascriptTypes.string:return e.value;case javascriptTypes.number:return parseNumber(e.value);case javascriptTypes.boolean:return parseBoolean(e.value);case javascriptTypes.object:return parseObject(e.value);case javascriptTypes.function:return parseFunction(e.value);case javascriptTypes.array:return parseArray(e.value)}}catch(n){}},ramdaTester=function(e,n){var t=[],r=e.map(parseArg),a=parseArg(n);for(var c in ramda__WEBPACK_IMPORTED_MODULE_1__)if("unfold"===c);else try{var u,o=(u=ramda__WEBPACK_IMPORTED_MODULE_1__)[c].apply(u,Object(_root_projects_ramda_function_guesser_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(r));ramda__WEBPACK_IMPORTED_MODULE_2__.a(o,a)&&t.push(c)}catch(i){}return t}},33:function(e,n,t){e.exports=t(46)},44:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(20),u=t.n(c),o=t(15),i=t(22),l=t(25),s=t(11),p="SET_ARGS",b="SET_EXPECTED_OUTPUT",d="SET_GUESS",_="ADD_ARGUMENT",f="REMOVE_ARGUMENT",m=t(17),v={args:[{value:"value",type:m.a.string}],expectedOutput:{type:m.a.string,value:"Expected Output"},guess:[]},g=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(s.a)({},e,{args:n.payload});case b:return Object(s.a)({},e,{expectedOutput:n.payload});case d:return Object(s.a)({},e,{guess:n.payload});case _:return Object(s.a)({},e,{args:[].concat(Object(l.a)(e.args),[{value:"value",type:m.a.string}])});case f:return Object(s.a)({},e,{args:e.args.slice(0,e.args.length-1)});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=(t(44),t(9)),O=t(13),j=t(10),y=t(21);function x(){var e=Object(E.a)(['\n  border-radius: 5px;\n  display: "flex";\n  justify-content: "space-around";\n  width: 28%;\n\n  &:focus {\n    border-color: #aaa;\n    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);\n    box-shadow: 0 0 0 2px -moz-mac-focusring;\n    color: #222;\n    outline: none;\n  }\n']);return x=function(){return e},e}function h(){var e=Object(E.a)(["\n  cursor: pointer;\n  border-radius: 3px;\n  border: 1px solid black;\n  padding: 2px 10px;\n  margin: 5px;\n  color: white;\n"]);return h=function(){return e},e}function w(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return w=function(){return e},e}function T(){var e=Object(E.a)(["\n      width: 95%;\n    "]);return T=function(){return e},e}function A(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 45vw;\n  padding: 5px;\n  margin: 5px;\n  border: 1px solid black;\n  border-radius: 3px;\n  color: white;\n  ","\n"]);return A=function(){return e},e}function k(){var e=Object(E.a)(["\n      width: 95%;\n    "]);return k=function(){return e},e}function M(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 45vw;\n  ","\n"]);return M=function(){return e},e}function N(){var e=Object(E.a)(["\n  font-weight: bold;\n  border-radius: 3px;\n  width: 68%;\n  padding: 0 0.5rem;\n"]);return N=function(){return e},e}var D=j.b.input(N()),C=j.b.div(M(),(function(){return Object(O.isMobile)()&&Object(j.a)(k())})),P=j.b.div(A(),(function(){return Object(O.isMobile)()&&Object(j.a)(T())})),R=j.b.div(w()),S=j.b.div(h()),U=j.b.select(x()),B=Object(o.b)((function(e){return{args:e.args}}),(function(e){return{setArgs:function(n){return e(function(e){return{type:p,payload:e}}(n))},addArgument:function(){return e({type:_})},removeArgument:function(){return e({type:f})}}}))((function(e){var n=e.args,t=e.setArgs,r=e.addArgument,c=e.removeArgument;return a.a.createElement(C,null,n.map((function(e,r){return a.a.createElement(P,{key:"".concat(e.type).concat(r,"wrapper")},a.a.createElement(U,{key:"".concat(e.type).concat(r),value:e.type,onChange:function(e){t(y.a(r,(function(n){return Object(s.a)({},n,{type:e.target.value})}),n))}},a.a.createElement("option",{value:"string"},"string"),a.a.createElement("option",{value:"number"},"number"),a.a.createElement("option",{value:"boolean"},"boolean"),a.a.createElement("option",{value:"object"},"object"),a.a.createElement("option",{value:"function"},"function"),a.a.createElement("option",{value:"array"},"array")),a.a.createElement(D,{type:"text",value:e.value,key:"input",onChange:function(e){t(y.a(r,(function(n){return Object(s.a)({},n,{value:e.target.value})}),n))}}))})),a.a.createElement(R,null,a.a.createElement(S,{onClick:function(){return r()}},"Add an Argument"),a.a.createElement(S,{onClick:function(){return c()}},"Remove an argument")),a.a.createElement("p",{style:{color:"white",fontSize:".9rem"}},"Enter objects in JSON format"))}));function I(){var e=Object(E.a)(['\n  border-radius: 5px;\n  display: "flex";\n  justify-content: "space-around";\n  width: 28%;\n\n  &:focus {\n    border-color: #aaa;\n    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);\n    box-shadow: 0 0 0 2px -moz-mac-focusring;\n    color: #222;\n    outline: none;\n  }\n']);return I=function(){return e},e}function L(){var e=Object(E.a)(["\n      width: 95%;\n    "]);return L=function(){return e},e}function K(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 45vw;\n  padding: 5px;\n  margin: 5px;\n  border: 1px solid black;\n  border-radius: 3px;\n  color: white;\n  ","\n"]);return K=function(){return e},e}function W(){var e=Object(E.a)(["\n  cursor: pointer;\n  border-radius: 3px;\n  border: 1px solid black;\n  padding: 2px 10px;\n  margin: 5px;\n  color: white;\n"]);return W=function(){return e},e}function q(){var e=Object(E.a)(["\n      width: 95%;\n    "]);return q=function(){return e},e}function G(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 45vw;\n  ","\n"]);return G=function(){return e},e}function J(){var e=Object(E.a)(["\n  border-radius: 3px;\n  font-weight: bold;\n  width: 68%;\n  padding: 0 0.5rem;\n"]);return J=function(){return e},e}var X=j.b.input(J()),z=j.b.div(G(),(function(){return Object(O.isMobile)()&&Object(j.a)(q())})),F=j.b.div(W()),V=j.b.div(K(),(function(){return Object(O.isMobile)()&&Object(j.a)(L())})),H=j.b.select(I()),Q=Object(o.b)((function(e){return{args:e.args,expectedOutput:e.expectedOutput,guess:e.guess}}),(function(e){return{setExpectedOutput:function(n){return e(function(e){return{type:b,payload:e}}(n))},setGuess:function(n){return e({type:d,payload:n})}}}))((function(e){var n=e.args,t=e.expectedOutput,r=e.setExpectedOutput,c=e.guess,u=e.setGuess;return a.a.createElement(z,null,a.a.createElement(V,null,a.a.createElement(H,{value:t.type,onChange:function(e){r(Object(s.a)({},t,{type:e.target.value}))}},a.a.createElement("option",{value:"string"},"String "),a.a.createElement("option",{value:"number"},"number "),a.a.createElement("option",{value:"boolean"},"boolean"),a.a.createElement("option",{value:"object"},"object"),a.a.createElement("option",{value:"function"},"function"),a.a.createElement("option",{value:"array"},"array")),a.a.createElement(X,{type:"text",value:t.value,onChange:function(e){return r(Object(s.a)({},t,{value:e.target.value}))}})),a.a.createElement(F,{onClick:function(){return u(Object(m.b)(n,t))}},"Test"),c.map((function(e){return a.a.createElement("div",{key:"".concat(e),style:{color:"white"}},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ramdajs.com/docs/#".concat(e)},e))})))}));function Y(){var e=Object(E.a)(["\n      flex-direction: column;\n      justify-content: start;\n      align-items: center;\n    "]);return Y=function(){return e},e}function Z(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  min-height: 100vh;\n  height: 100%;\n  background-color: #282a36;\n  ","\n"]);return Z=function(){return e},e}function $(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return $=function(){return e},e}var ee=j.b.div($()),ne=j.b.main(Z(),(function(){return Object(O.isMobile)()&&Object(j.a)(Y())})),te=function(){return a.a.createElement(ee,null,a.a.createElement("div",{className:"navbar navbar-inverse",style:{margin:"0",borderRadius:"0px",backgroundColor:"#884499"},role:"navigation"},a.a.createElement("div",{className:"navbar-header"},a.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},a.a.createElement("span",{className:"sr-only"},"Toggle navigation"),a.a.createElement("span",{className:"icon-bar"}),a.a.createElement("span",{className:"icon-bar"}),a.a.createElement("span",{className:"icon-bar"})),a.a.createElement("a",{className:"navbar-brand",href:"http://ramdajs.com"},a.a.createElement("strong",null,"Ramda "),a.a.createElement("span",{className:"version"},"v0.27.0"))),a.a.createElement("div",{className:"navbar-collapse collapse"})),a.a.createElement(ne,null,a.a.createElement(B,null),a.a.createElement(Q,null)))};u.a.render(a.a.createElement(o.a,{store:g},a.a.createElement(te,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b166d5d1.chunk.js.map