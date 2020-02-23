(this["webpackJsonpramda-function-guesser"]=this["webpackJsonpramda-function-guesser"]||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return javascriptTypes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ramdaTester}));var _root_projects_ramda_function_guesser_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(25),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),ramda__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),javascriptTypes={string:"string",number:"number",boolean:"boolean",object:"object",function:"function",array:"array"},parseNumber=function(e){return Number(e)},parseBoolean=function(e){return"false"!==e&&("true"===e||!!e)},parseFunction=function parseFunction(value){return eval(value)},parseObject=function(e){return JSON.parse(e)},parseArray=function(e){return JSON.parse(e)},parseArg=function(e){try{switch(e.type){case javascriptTypes.string:return e.value;case javascriptTypes.number:return parseNumber(e.value);case javascriptTypes.boolean:return parseBoolean(e.value);case javascriptTypes.object:return parseObject(e.value);case javascriptTypes.function:return parseFunction(e.value);case javascriptTypes.array:return parseArray(e.value)}}catch(a){}},ramdaTester=function(e,a){var n=[],t=e.map(parseArg),r=parseArg(a);for(var u in ramda__WEBPACK_IMPORTED_MODULE_1__)if("unfold"===u);else try{var c,l=(c=ramda__WEBPACK_IMPORTED_MODULE_1__)[u].apply(c,Object(_root_projects_ramda_function_guesser_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(t));ramda__WEBPACK_IMPORTED_MODULE_2__.a(l,r)&&n.push(u)}catch(o){}return n}},34:function(e,a,n){e.exports=n(46)},44:function(e,a,n){},46:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),u=n(20),c=n.n(u),l=n(15),o=n(22),i=n(25),s=n(12),p="SET_ARGS",_="SET_EXPECTED_OUTPUT",d="SET_GUESS",m="ADD_ARGUMENT",b="REMOVE_ARGUMENT",f=n(17),v={args:[{value:"value",type:f.a.string}],expectedOutput:{type:f.a.string,value:"Expected Output"},guess:[]},E=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p:return Object(s.a)({},e,{args:a.payload});case _:return Object(s.a)({},e,{expectedOutput:a.payload});case d:return Object(s.a)({},e,{guess:a.payload});case m:return Object(s.a)({},e,{args:[].concat(Object(i.a)(e.args),[{value:"value",type:f.a.string}])});case b:return Object(s.a)({},e,{args:e.args.slice(0,e.args.length-1)});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=(n(44),n(10)),y=n(11),O=n(21),j=n(9);function x(){var e=Object(g.a)(["\n  cursor: pointer;\n  border-radius: 3px;\n  border: 1px solid black;\n  padding: 2px 10px;\n  margin: 5px;\n  color: white;\n"]);return x=function(){return e},e}function h(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return h=function(){return e},e}function w(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 49vw;\n  padding: 5px;\n  margin: 5px;\n  border: 1px solid black;\n  color: white;\n"]);return w=function(){return e},e}function T(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 48vw;\n"]);return T=function(){return e},e}function R(){var e=Object(g.a)(["\n  font-weight: bold;\n  border-radius: 3px;\n"]);return R=function(){return e},e}var A=y.a.input(R()),k=y.a.div(T()),D=y.a.div(w()),N=y.a.div(h()),C=y.a.div(x()),M=Object(l.b)((function(e){return{args:e.args}}),(function(e){return{setArgs:function(a){return e(function(e){return{type:p,payload:e}}(a))},addArgument:function(){return e({type:m})},removeArgument:function(){return e({type:b})}}}))((function(e){var a=e.args,n=e.setArgs,t=e.addArgument,u=e.removeArgument;return r.a.createElement(k,null,a.map((function(e,t){return r.a.createElement(D,null,r.a.createElement(j.RadioGroup,{name:"".concat(t,"-type"),selectedValue:e.type,onChange:function(e){n(O.a(t,(function(a){return Object(s.a)({},a,{type:e})}),a))},style:{display:"flex",justifyContent:"space-around",width:"70%"}},r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"string"}),"String"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"number"}),"number"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"boolean"}),"boolean"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"object"}),"object"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"function"}),"function"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"array"}),"array")),r.a.createElement(A,{type:"text",value:e.value,key:t,onChange:function(e){n(O.a(t,(function(a){return Object(s.a)({},a,{value:e.target.value})}),a))}}))})),r.a.createElement(N,null,r.a.createElement(C,{onClick:function(){return t()}},"Add an Argument"),r.a.createElement(C,{onClick:function(){return u()}},"Remove an argument")))}));function P(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 45vw;\n  padding: 5px;\n  margin: 5px;\n  border: 1px solid black;\n  color: white;\n"]);return P=function(){return e},e}function S(){var e=Object(g.a)(["\n  cursor: pointer;\n  border-radius: 3px;\n  border: 1px solid black;\n  padding: 2px 10px;\n  margin: 5px;\n  color: white;\n"]);return S=function(){return e},e}function U(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return U=function(){return e},e}function B(){var e=Object(g.a)(["\n  border-radius: 3px;\n  font-weight: bold;\n"]);return B=function(){return e},e}var I=y.a.input(B()),L=y.a.div(U()),G=y.a.div(S()),K=y.a.div(P()),W=Object(l.b)((function(e){return{args:e.args,expectedOutput:e.expectedOutput,guess:e.guess}}),(function(e){return{setExpectedOutput:function(a){return e(function(e){return{type:_,payload:e}}(a))},setGuess:function(a){return e({type:d,payload:a})}}}))((function(e){var a=e.args,n=e.expectedOutput,t=e.setExpectedOutput,u=e.guess,c=e.setGuess;return r.a.createElement(L,null,r.a.createElement(K,null,r.a.createElement(j.RadioGroup,{name:"output-type",selectedValue:n.type,onChange:function(e){t(Object(s.a)({},n,{type:e}))},style:{display:"flex",justifyContent:"space-around",width:"70%"}},r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"string"}),"String"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"number"}),"number"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"boolean"}),"boolean"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"object"}),"object"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"function"}),"function"),r.a.createElement("label",null,r.a.createElement(j.Radio,{value:"array"}),"array")),r.a.createElement(I,{type:"text",value:n.value,onChange:function(e){return t(Object(s.a)({},n,{value:e.target.value}))}})),r.a.createElement(G,{onClick:function(){return c(Object(f.b)(a,n))}},"Test"),u.map((function(e){return r.a.createElement("div",{style:{color:"white"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ramdajs.com/docs/#".concat(e)},e))})))}));function q(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100vw;\n  min-height: 100vh;\n  height: 100%;\n  background-color: #282a36;\n"]);return q=function(){return e},e}function V(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return V=function(){return e},e}var X=y.a.div(V()),J=y.a.main(q()),F=function(){return r.a.createElement(X,null,r.a.createElement("div",{className:"navbar navbar-inverse",style:{margin:"0",borderRadius:"0px",backgroundColor:"#884499"},role:"navigation"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("a",{className:"navbar-brand",href:"http://ramdajs.com"},r.a.createElement("strong",null,"Ramda "),r.a.createElement("span",{className:"version"},"v0.27.0"))),r.a.createElement("div",{className:"navbar-collapse collapse"})),r.a.createElement(J,null,r.a.createElement(M,null),r.a.createElement(W,null)))};c.a.render(r.a.createElement(l.a,{store:E},r.a.createElement(F,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0d1ff289.chunk.js.map