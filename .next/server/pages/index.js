"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tokenCheck),\n/* harmony export */   \"toDash\": () => (/* binding */ toDash),\n/* harmony export */   \"toLogin\": () => (/* binding */ toLogin)\n/* harmony export */ });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/login.json */ \"./components/login.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst passphrase = \"ics_quest\";\nconst loginjson = JSON.stringify(_components_login_json__WEBPACK_IMPORTED_MODULE_1__);\nfunction tokenCheck() {\n    if (false) {}\n}\nconst encrypt = (text)=>{\n    const key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(text, passphrase).toString();\n    return key;\n};\nconst decrypt = (ciphertext)=>{\n    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(ciphertext, passphrase);\n    const originalText = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));\n    return originalText;\n};\nconst toDash = ()=>{\n    console.log(\"true2\");\n    (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().replace(\"/dash\");\n};\nconst toLogin = ()=>{\n    console.log(\"false3\");\n    (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().replace(\"/login\");\n}; //function login() {\n //    fetch(\"/api/login\")\n //        .then((res) => {\n //            if (res.status == 200) {\n //                return res.json()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        })\n //        .then(data => {\n //            localStorage.setItem(\"token\", data.token)\n //            logResponse(\"loginResponse\", `localStorage set with token value: ${data.token}`)\n //        })\n //        .catch(console.error)\n //}\n //function makeRequest() {\n //    let headers = {}\n //    if (localStorage.token) {\n //        headers = { 'Authorization': localStorage.token }\n //    }\n //    fetch(\"/api/echo\", { headers: headers })\n //       .then((res) => {\n //            if (res.status == 200) {\n //                return res.text()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        }).then(responseText => logResponse(\"requestResponse\", responseText))\n //        .catch(console.error)\n //    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNRO0FBQ0Y7QUFFdkMsTUFBTUcsYUFBYTtBQUNuQixNQUFNQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNMLG1EQUFJQTtBQUV0QixTQUFTTSxhQUFhO0lBQ2pDLElBQUksS0FBa0IsRUFBYSxFQW1CaEM7QUFDUCxDQUFDO0FBRUQsTUFBTVksVUFBVSxDQUFDQyxPQUFTO0lBQ3RCLE1BQU1ULE1BQU1YLDREQUFvQixDQUFDb0IsTUFBTWpCLFlBQVltQixRQUFRO0lBQzNELE9BQU9YO0FBQ1g7QUFFQSxNQUFNRSxVQUFVLENBQUNVLGFBQWU7SUFDOUIsTUFBTUMsUUFBUXhCLDREQUFvQixDQUFDdUIsWUFBWXBCO0lBQy9DLE1BQU1zQixlQUFlRCxNQUFNRixRQUFRLENBQUN0QiwyREFBaUI7SUFDckQsT0FBT3lCO0FBQ1Q7QUFFTyxNQUFNUixTQUFTLElBQU07SUFDeEJILFFBQVFDLEdBQUcsQ0FBQztJQUNaYixzREFBU0EsR0FBRzBCLE9BQU8sQ0FBQztBQUN4QixFQUFFO0FBRUssTUFBTVYsVUFBVSxJQUFNO0lBQ3pCSixRQUFRQyxHQUFHLENBQUM7SUFDWmIsc0RBQVNBLEdBQUcwQixPQUFPLENBQUM7QUFDeEIsRUFBRSxDQUVGLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHNDQUFzQztDQUN0QyxtQ0FBbUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLDZDQUE2QztDQUM3QyxlQUFlO0NBQ2YsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qix1REFBdUQ7Q0FDdkQsOEZBQThGO0NBQzlGLFlBQVk7Q0FDWiwrQkFBK0I7Q0FDL0IsR0FBRztDQUVILDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsK0JBQStCO0NBQy9CLDJEQUEyRDtDQUMzRCxPQUFPO0NBQ1AsOENBQThDO0NBQzlDLHlCQUF5QjtDQUN6QixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0Qiw2Q0FBNkM7Q0FDN0MsZUFBZTtDQUNmLCtFQUErRTtDQUMvRSwrQkFBK0I7Q0FDL0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcvY29tcG9uZW50cy9sb2dpbi5qc29uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuY29uc3QgcGFzc3BocmFzZSA9ICdpY3NfcXVlc3QnO1xuY29uc3QgbG9naW5qc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9rZW5DaGVjaygpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBcInRlc3RcIilcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50b2tlbikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLnRva2VuXG4gICAgICAgICAgICBjb25zdCBkZWNvbiA9IGRlY3J5cHQoa2V5KVxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVjb24pXG4gICAgICAgICAgICBpZiAobG9naW5qc29uLmluY2x1ZGVzKGRlY29uKSAmJiBkZWNvbiAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICB0b0Rhc2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZTJcIik7XG4gICAgICAgICAgICAgICAgdG9Mb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAvLyBoZWFkZXJzID0geyAnQXV0aG9yaXphdGlvbic6IGxvY2FsU3RvcmFnZS50b2tlbiB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlMVwiKTtcbiAgICAgICAgICAgIHRvTG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuXG5jb25zdCBlbmNyeXB0ID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCh0ZXh0LCBwYXNzcGhyYXNlKS50b1N0cmluZygpXG4gICAgcmV0dXJuIGtleTtcbn07XG5cbmNvbnN0IGRlY3J5cHQgPSAoY2lwaGVydGV4dCkgPT4ge1xuICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNpcGhlcnRleHQsIHBhc3NwaHJhc2UpO1xuICBjb25zdCBvcmlnaW5hbFRleHQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gIHJldHVybiBvcmlnaW5hbFRleHQ7XG59O1xuXG5leHBvcnQgY29uc3QgdG9EYXNoID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidHJ1ZTJcIik7XG4gICAgdXNlUm91dGVyKCkucmVwbGFjZShcIi9kYXNoXCIpO1xufTtcbiAgXG5leHBvcnQgY29uc3QgdG9Mb2dpbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZhbHNlM1wiKTtcbiAgICB1c2VSb3V0ZXIoKS5yZXBsYWNlKFwiL2xvZ2luXCIpO1xufTtcblxuLy9mdW5jdGlvbiBsb2dpbigpIHtcbi8vICAgIGZldGNoKFwiL2FwaS9sb2dpblwiKVxuLy8gICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XG4vLyAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuLy8gICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpXG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9KVxuLy8gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGEudG9rZW4pXG4vLyAgICAgICAgICAgIGxvZ1Jlc3BvbnNlKFwibG9naW5SZXNwb25zZVwiLCBgbG9jYWxTdG9yYWdlIHNldCB3aXRoIHRva2VuIHZhbHVlOiAke2RhdGEudG9rZW59YClcbi8vICAgICAgICB9KVxuLy8gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuLy99XG5cbi8vZnVuY3Rpb24gbWFrZVJlcXVlc3QoKSB7XG4vLyAgICBsZXQgaGVhZGVycyA9IHt9XG4vLyAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XG4vLyAgICAgICAgaGVhZGVycyA9IHsgJ0F1dGhvcml6YXRpb24nOiBsb2NhbFN0b3JhZ2UudG9rZW4gfVxuLy8gICAgfVxuLy8gICAgZmV0Y2goXCIvYXBpL2VjaG9cIiwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbi8vICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfSkudGhlbihyZXNwb25zZVRleHQgPT4gbG9nUmVzcG9uc2UoXCJyZXF1ZXN0UmVzcG9uc2VcIiwgcmVzcG9uc2VUZXh0KSlcbi8vICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbi8vICAgIH0iXSwibmFtZXMiOlsiQ3J5cHRvSlMiLCJkYXRhIiwidXNlUm91dGVyIiwicGFzc3BocmFzZSIsImxvZ2luanNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbkNoZWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwia2V5IiwiZGVjb24iLCJkZWNyeXB0IiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwidG9EYXNoIiwidG9Mb2dpbiIsImVuY3J5cHQiLCJ0ZXh0IiwiQUVTIiwidG9TdHJpbmciLCJjaXBoZXJ0ZXh0IiwiYnl0ZXMiLCJvcmlnaW5hbFRleHQiLCJlbmMiLCJVdGY4IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "./components/login.json":
/*!*******************************!*\
  !*** ./components/login.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"anguej":"password","zhangs":"password"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();