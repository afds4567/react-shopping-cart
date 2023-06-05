"use strict";(self.webpackChunkreact_shopping_carts=self.webpackChunkreact_shopping_carts||[]).push([[411],{"./src/api/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return client},Z:function(){return api}});var regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),esm_get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),Client=function(){function Client(baseUrl){(0,classCallCheck.Z)(this,Client),this.baseUrl=baseUrl}var _delete2,_patch,_post,_get;return(0,createClass.Z)(Client,[{key:"getUrl",value:function getUrl(path){return this.baseUrl?new URL(path,this.baseUrl):path}},{key:"get",value:(_get=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(path){var response,data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(this.getUrl(path));case 2:return response=_context.sent,_context.next=5,response.json();case 5:return data=_context.sent,_context.abrupt("return",data);case 7:case"end":return _context.stop()}}),_callee,this)}))),function get(_x){return _get.apply(this,arguments)})},{key:"post",value:(_post=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(path,body){var response,data;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,fetch(this.getUrl(path),{method:"POST",body:JSON.stringify(body)});case 2:return response=_context2.sent,_context2.next=5,response.json();case 5:return data=_context2.sent,_context2.abrupt("return",data);case 7:case"end":return _context2.stop()}}),_callee2,this)}))),function post(_x2,_x3){return _post.apply(this,arguments)})},{key:"patch",value:(_patch=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee3(path,_itemId,body){var response,data;return(0,regeneratorRuntime.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,fetch(this.getUrl(path),{method:"PATCH",body:JSON.stringify(body)});case 2:return response=_context3.sent,_context3.next=5,response.json();case 5:return data=_context3.sent,_context3.abrupt("return",data);case 7:case"end":return _context3.stop()}}),_callee3,this)}))),function patch(_x4,_x5,_x6){return _patch.apply(this,arguments)})},{key:"delete",value:(_delete2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee4(path,_itemId){var response,data;return(0,regeneratorRuntime.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,fetch(this.getUrl(path),{method:"DELETE"});case 2:return response=_context4.sent,_context4.next=5,response.text();case 5:return data=_context4.sent,_context4.abrupt("return",data);case 7:case"end":return _context4.stop()}}),_callee4,this)}))),function _delete(_x7,_x8){return _delete2.apply(this,arguments)})}]),Client}(),api_Client=Client,FixtureClient=function(_Client){(0,inherits.Z)(FixtureClient,_Client);var _get2,_super=(0,createSuper.Z)(FixtureClient);function FixtureClient(){return(0,classCallCheck.Z)(this,FixtureClient),_super.apply(this,arguments)}return(0,createClass.Z)(FixtureClient,[{key:"get",value:(_get2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(path){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",(0,esm_get.Z)((0,getPrototypeOf.Z)(FixtureClient.prototype),"get",this).call(this,"./fixtures".concat(path,".json")));case 1:case"end":return _context.stop()}}),_callee,this)}))),function get(_x){return _get2.apply(this,arguments)})}]),FixtureClient}(api_Client),api_FixtureClient=FixtureClient,NetworkClient=function(_Client){(0,inherits.Z)(NetworkClient,_Client);var _delete2,_patch,_post,_get2,_super=(0,createSuper.Z)(NetworkClient);function NetworkClient(){return(0,classCallCheck.Z)(this,NetworkClient),_super.apply(this,arguments)}return(0,createClass.Z)(NetworkClient,[{key:"get",value:(_get2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(path){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",(0,esm_get.Z)((0,getPrototypeOf.Z)(NetworkClient.prototype),"get",this).call(this,".".concat(path)));case 1:case"end":return _context.stop()}}),_callee,this)}))),function get(_x){return _get2.apply(this,arguments)})},{key:"post",value:(_post=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(path,body){return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",(0,esm_get.Z)((0,getPrototypeOf.Z)(NetworkClient.prototype),"post",this).call(this,".".concat(path),body));case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function post(_x2,_x3){return _post.apply(this,arguments)})},{key:"patch",value:(_patch=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee3(path,itemId,body){return(0,regeneratorRuntime.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",(0,esm_get.Z)((0,getPrototypeOf.Z)(NetworkClient.prototype),"patch",this).call(this,".".concat(path,"/").concat(itemId),itemId,body));case 1:case"end":return _context3.stop()}}),_callee3,this)}))),function patch(_x4,_x5,_x6){return _patch.apply(this,arguments)})},{key:"delete",value:(_delete2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee4(path,itemId){return(0,regeneratorRuntime.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",(0,esm_get.Z)((0,getPrototypeOf.Z)(NetworkClient.prototype),"delete",this).call(this,".".concat(path,"/").concat(itemId),itemId));case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function _delete(_x7,_x8){return _delete2.apply(this,arguments)})}]),NetworkClient}(api_Client),MswClient=NetworkClient,client=new api_FixtureClient,api=new MswClient},"./src/components/ProductListPage/ProductItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ProductListPage_ProductItem}});var _path,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgCart(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:25,height:22,viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M2.27577 17.3525L0.00422287 4.9775C-0.00124931 4.9227 -0.00124931 4.8673 0.00422287 4.8125C0.00422287 4.63017 0.0640526 4.4553 0.170551 4.32637C0.27705 4.19744 0.421495 4.125 0.572107 4.125H18.7785L19.5849 0.488128C19.6204 0.346605 19.6925 0.222681 19.7907 0.134749C19.8889 0.0468165 20.008 -0.000436457 20.1301 3.03821e-06H24.4233C24.5739 3.03821e-06 24.7184 0.0724359 24.8249 0.201367C24.9314 0.330298 24.9912 0.505167 24.9912 0.687503C24.9912 0.869839 24.9314 1.04471 24.8249 1.17364C24.7184 1.30257 24.5739 1.375 24.4233 1.375H20.5617L17.0408 17.3869C17.017 17.4827 16.9763 17.5712 16.9213 17.646C16.8664 17.7208 16.7986 17.7802 16.7228 17.82C16.9348 18.2525 17.0448 18.7471 17.0408 19.25C17.0408 19.9793 16.8015 20.6788 16.3755 21.1945C15.9495 21.7103 15.3717 22 14.7693 22C14.1668 22 13.589 21.7103 13.163 21.1945C12.737 20.6788 12.4977 19.9793 12.4977 19.25C12.5001 18.7664 12.6079 18.2921 12.8101 17.875H6.50652C6.70869 18.2921 6.81642 18.7664 6.81886 19.25C6.81886 19.9793 6.57953 20.6788 6.15353 21.1945C5.72754 21.7103 5.14976 22 4.54731 22C3.94486 22 3.36708 21.7103 2.94109 21.1945C2.51509 20.6788 2.27577 19.9793 2.27577 19.25C2.27757 18.7421 2.3955 18.2448 2.6165 17.8131C2.53394 17.7739 2.46011 17.7118 2.40094 17.6318C2.34177 17.5518 2.2989 17.4562 2.27577 17.3525ZM4.60978 5.5H1.28197L1.78738 8.25H4.85965L4.60978 5.5ZM18.4776 5.5H14.7125L14.4626 8.25H17.8699L18.4776 5.5ZM16.9556 12.375L17.5633 9.625H14.332L14.0764 12.375H16.9556ZM16.649 13.75H13.9515L13.7016 16.5H16.0356L16.649 13.75ZM14.7693 20.625C14.9939 20.625 15.2135 20.5444 15.4003 20.3933C15.587 20.2422 15.7326 20.0274 15.8186 19.7762C15.9045 19.5249 15.927 19.2485 15.8832 18.9818C15.8394 18.715 15.7312 18.47 15.5724 18.2777C15.4135 18.0854 15.2112 17.9545 14.9908 17.9014C14.7705 17.8484 14.5422 17.8756 14.3346 17.9797C14.1271 18.0837 13.9497 18.26 13.8249 18.4861C13.7001 18.7122 13.6335 18.9781 13.6335 19.25C13.6335 19.6147 13.7531 19.9644 13.9661 20.2223C14.1791 20.4801 14.468 20.625 14.7693 20.625ZM10.2262 16.5H12.5602L12.8101 13.75H10.2262V16.5ZM10.2262 12.375H12.935L13.1905 9.625H10.2262V12.375ZM10.2262 8.25H13.3155L13.5653 5.5H10.2262V8.25ZM6.75639 16.5H9.0904V13.75H6.50652L6.75639 16.5ZM6.3759 12.375H9.0904V9.625H6.12603L6.3759 12.375ZM5.99542 8.25H9.0904V5.5H5.75123L5.99542 8.25ZM4.54731 20.625C4.77195 20.625 4.99154 20.5444 5.17831 20.3933C5.36509 20.2422 5.51066 20.0274 5.59663 19.7762C5.68259 19.5249 5.70508 19.2485 5.66126 18.9818C5.61744 18.715 5.50926 18.47 5.35042 18.2777C5.19158 18.0854 4.98921 17.9545 4.76889 17.9014C4.54857 17.8484 4.32021 17.8756 4.11267 17.9797C3.90513 18.0837 3.72775 18.26 3.60295 18.4861C3.47815 18.7122 3.41154 18.9781 3.41154 19.25C3.41154 19.6147 3.5312 19.9644 3.7442 20.2223C3.9572 20.4801 4.24609 20.625 4.54731 20.625ZM3.29796 16.5H5.61494L5.36507 13.75H2.79254L3.29796 16.5ZM5.23445 12.375L4.9789 9.625H2.03157L2.53699 12.375H5.23445Z",fill:"#AAAAAA"})))}var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,ForwardRef=react.forwardRef(SvgCart),regeneratorRuntime=(__webpack_require__.p,__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js")),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),api=__webpack_require__("./src/api/index.ts"),cartState=__webpack_require__("./src/recoil/atoms/cartState.ts"),useCart=function useCartProduct(productId){var carts=(0,es.sJ)(cartState.Z),setQuantity=(0,es._8)((function(_ref){var set=_ref.set;return function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(quantity){var _carts$find,cartItem;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(cartItem=null!==(_carts$find=carts.find((function(it){return it.productId===productId})))&&void 0!==_carts$find?_carts$find:null,_context.prev=1,null!==cartItem){_context.next=5;break}return _context.next=5,api.Z.post("/cart-items",{productId:productId});case 5:if(0!==quantity){_context.next=10;break}return _context.next=8,api.Z.delete("/cart-items",productId);case 8:_context.next=12;break;case 10:return _context.next=12,api.Z.patch("/cart-items",productId,{quantity:quantity});case 12:set(cartState.Z,(function(cart){var _cart$find,cartProduct=null!==(_cart$find=cart.find((function(it){return it.productId===productId})))&&void 0!==_cart$find?_cart$find:null;if(null===cartProduct){var newCartItem={id:Math.round(1e5*Math.random()),quantity:quantity,productId:productId};return[].concat((0,toConsumableArray.Z)(cart),[newCartItem])}var cartProductIndex=cart.findIndex((function(it){return it.id===cartProduct.id})),updatedCartItem=(0,objectSpread2.Z)((0,objectSpread2.Z)({},cartProduct),{},{quantity:quantity});return[].concat((0,toConsumableArray.Z)(cart.slice(0,cartProductIndex)),[updatedCartItem],(0,toConsumableArray.Z)(cart.slice(cartProductIndex+1))).filter((function(it){return it.quantity>0}))})),_context.next=19;break;case 15:_context.prev=15,_context.t0=_context.catch(1),console.error(_context.t0),window.alert("상품을 처리하는 도중 오류가 발생했습니다.");case 19:case"end":return _context.stop()}}),_callee,null,[[1,15]])})));return function(_x){return _ref2.apply(this,arguments)}}()}));return{setQuantity:setQuantity}},cartItemFamily=(0,es.CG)({key:"cartItemFamily",get:function get(productId){return function(_ref){var cartItem=(0,_ref.get)(cartState.Z).find((function(item){return item.productId===productId}));return null!=cartItem?cartItem:null}}}),productsQuery=__webpack_require__("./src/recoil/queries/productsQuery.ts"),productFamily=(0,es.CG)({key:"productFamily",get:function get(productId){return function(_ref){var product=(0,_ref.get)(productsQuery.Z).find((function(p){return p.id===productId}));return null!=product?product:null}}}),Stepper=__webpack_require__("./src/components/common/Stepper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductItemContainer=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),ProductItemInfo=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  flex: 1;\n  padding: 18px 8px;\n  padding-bottom: 0;\n"]))),ProductImage=styled_components_browser_esm.zo.img(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  background: gray;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n"]))),ProductInfoContainer=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex: 1;\n\n  & > *:last-child {\n    margin-left: auto;\n  }\n"]))),ProductItemName=styled_components_browser_esm.zo.p(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  font-size: 16px;\n"]))),ProductItemPrice=styled_components_browser_esm.zo.p(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  font-size: 20px;\n\n  &::after {\n    content: '원';\n    padding-left: 8px;\n  }\n"]))),StepperContainer=styled_components_browser_esm.zo.div(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  padding: 18px 0px;\n"]))),AddCartButton=styled_components_browser_esm.zo.button(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n  padding: 0 10px 10px 10px;\n"]))),ProductItem=function ProductItem(props){var productId=props.productId,product=(0,es.sJ)(productFamily(productId)),cartProduct=(0,es.sJ)(cartItemFamily(productId)),setQuantity=useCart(productId).setQuantity;return product?(0,jsx_runtime.jsxs)(ProductItemContainer,{children:[(0,jsx_runtime.jsx)(ProductImage,{src:product.imageUrl,alt:product.name}),(0,jsx_runtime.jsxs)(ProductInfoContainer,{children:[(0,jsx_runtime.jsxs)(ProductItemInfo,{children:[(0,jsx_runtime.jsx)(ProductItemName,{children:product.name}),(0,jsx_runtime.jsx)(ProductItemPrice,{children:product.price.toLocaleString("ko-KR")})]}),(0,jsx_runtime.jsx)(StepperContainer,{children:null===cartProduct?(0,jsx_runtime.jsx)(AddCartButton,{onClick:function handleOnClick(){setQuantity(1)},children:(0,jsx_runtime.jsx)(ForwardRef,{})}):(0,jsx_runtime.jsx)(Stepper.Z,{width:"68px",height:"26px",min:0,value:cartProduct.quantity,onChange:setQuantity})})]})]}):(0,jsx_runtime.jsx)("div",{children:"ERROR: No product!!"})},ProductListPage_ProductItem=ProductItem;try{ProductItem.displayName="ProductItem",ProductItem.__docgenInfo={description:"",displayName:"ProductItem",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductListPage/ProductItem.tsx#ProductItem"]={docgenInfo:ProductItem.__docgenInfo,name:"ProductItem",path:"src/components/ProductListPage/ProductItem.tsx#ProductItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Stepper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return common_Stepper}});var _path,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgArrowDown(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2 2",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M0,0H2L1,2"})))}var arrow_up_path,ForwardRef=react.forwardRef(SvgArrowDown),arrow_up_excluded=(__webpack_require__.p,["title","titleId"]);function arrow_up_extends(){return arrow_up_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},arrow_up_extends.apply(this,arguments)}function arrow_up_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function arrow_up_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgArrowUp(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=arrow_up_objectWithoutProperties(_ref,arrow_up_excluded);return react.createElement("svg",arrow_up_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2 2",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,arrow_up_path||(arrow_up_path=react.createElement("path",{d:"m1,0l1,2-2,0"})))}var _templateObject,_templateObject2,_templateObject3,arrow_up_ForwardRef=react.forwardRef(SvgArrowUp),jsx_runtime=(__webpack_require__.p,__webpack_require__("./node_modules/react/jsx-runtime.js")),InputContainer=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: stretch;\n  width: ",";\n  height: ",";\n  @media (max-width: 480px) {\n    width: 80px;\n  }\n"])),(function(props){return props.width}),(function(props){return props.height})),Input=styled_components_browser_esm.zo.input(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  flex: 1;\n  width: 100%;\n  border: 1px solid #e5e5e5;\n  text-align: center;\n  font-size: 12px;\n\n  outline: none;\n"]))),InputButton=styled_components_browser_esm.zo.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 50%;\n  font-size: 10px;\n  border: 1px solid #e5e5e5;\n  cursor: pointer;\n"]))),Stepper=function Stepper(props){var width=props.width,height=props.height,min=props.min,max=props.max,value=props.value,onChange=props.onChange,handleClick=function handleClick(type){return function(){var newValue=value+("increase"===type?1:-1);void 0!==min&&newValue<min||void 0!==max&&newValue>max||onChange(newValue)}};return(0,jsx_runtime.jsxs)(InputContainer,{width:width,height:height,children:[(0,jsx_runtime.jsx)(Input,{value:value,onChange:function handleChange(e){onChange(Number(e.target.value))}}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(InputButton,{onClick:handleClick("increase"),children:(0,jsx_runtime.jsx)(arrow_up_ForwardRef,{width:"5"})}),(0,jsx_runtime.jsx)(InputButton,{onClick:handleClick("decrease"),children:(0,jsx_runtime.jsx)(ForwardRef,{width:"5"})})]})]})},common_Stepper=Stepper;try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/common/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/recoil/atoms/cartState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var cartState=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"cartState",default:[]});__webpack_exports__.Z=cartState},"./src/recoil/queries/productsQuery.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _get,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/api/index.ts"),productsQuery=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"productsQuery",get:(_get=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().mark((function _callee(){var data;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_api__WEBPACK_IMPORTED_MODULE_1__.Z.get("/products");case 2:return data=_context.sent,_context.abrupt("return",data.response);case 4:case"end":return _context.stop()}}),_callee)}))),function get(){return _get.apply(this,arguments)})});__webpack_exports__.Z=productsQuery}}]);