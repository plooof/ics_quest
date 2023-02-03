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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tokenCheck),\n/* harmony export */   \"toDash\": () => (/* binding */ toDash),\n/* harmony export */   \"toLogin\": () => (/* binding */ toLogin)\n/* harmony export */ });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_data_login_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/data/login.json */ \"./components/data/login.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst passphrase = \"ics_quest\";\nconst loginjson = JSON.stringify(_components_data_login_json__WEBPACK_IMPORTED_MODULE_1__);\nfunction tokenCheck() {\n    if (false) {}\n}\nconst encrypt = (text)=>{\n    const key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(text, passphrase).toString();\n    return key;\n};\nconst decrypt = (ciphertext)=>{\n    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(ciphertext, passphrase);\n    const originalText = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));\n    return originalText;\n};\nconst toDash = ()=>{\n    console.log(\"true2\");\n    (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().replace(\"/dash\");\n};\nconst toLogin = ()=>{\n    console.log(\"false3\");\n    (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().replace(\"/login\");\n}; //function login() {\n //    fetch(\"/api/login\")\n //        .then((res) => {\n //            if (res.status == 200) {\n //                return res.json()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        })\n //        .then(data => {\n //            localStorage.setItem(\"token\", data.token)\n //            logResponse(\"loginResponse\", `localStorage set with token value: ${data.token}`)\n //        })\n //        .catch(console.error)\n //}\n //function makeRequest() {\n //    let headers = {}\n //    if (localStorage.token) {\n //        headers = { 'Authorization': localStorage.token }\n //    }\n //    fetch(\"/api/echo\", { headers: headers })\n //       .then((res) => {\n //            if (res.status == 200) {\n //                return res.text()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        }).then(responseText => logResponse(\"requestResponse\", responseText))\n //        .catch(console.error)\n //    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNhO0FBQ1A7QUFFdkMsTUFBTUcsYUFBYTtBQUNuQixNQUFNQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNMLHdEQUFJQTtBQUV0QixTQUFTTSxhQUFhO0lBQ2pDLElBQUksS0FBa0IsRUFBYSxFQW1CaEM7QUFDUCxDQUFDO0FBRUQsTUFBTVksVUFBVSxDQUFDQyxPQUFTO0lBQ3RCLE1BQU1ULE1BQU1YLDREQUFvQixDQUFDb0IsTUFBTWpCLFlBQVltQixRQUFRO0lBQzNELE9BQU9YO0FBQ1g7QUFFQSxNQUFNRSxVQUFVLENBQUNVLGFBQWU7SUFDOUIsTUFBTUMsUUFBUXhCLDREQUFvQixDQUFDdUIsWUFBWXBCO0lBQy9DLE1BQU1zQixlQUFlRCxNQUFNRixRQUFRLENBQUN0QiwyREFBaUI7SUFDckQsT0FBT3lCO0FBQ1Q7QUFFTyxNQUFNUixTQUFTLElBQU07SUFDeEJILFFBQVFDLEdBQUcsQ0FBQztJQUNaYixzREFBU0EsR0FBRzBCLE9BQU8sQ0FBQztBQUN4QixFQUFFO0FBRUssTUFBTVYsVUFBVSxJQUFNO0lBQ3pCSixRQUFRQyxHQUFHLENBQUM7SUFDWmIsc0RBQVNBLEdBQUcwQixPQUFPLENBQUM7QUFDeEIsRUFBRSxDQUVGLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHNDQUFzQztDQUN0QyxtQ0FBbUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLDZDQUE2QztDQUM3QyxlQUFlO0NBQ2YsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qix1REFBdUQ7Q0FDdkQsOEZBQThGO0NBQzlGLFlBQVk7Q0FDWiwrQkFBK0I7Q0FDL0IsR0FBRztDQUVILDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsK0JBQStCO0NBQy9CLDJEQUEyRDtDQUMzRCxPQUFPO0NBQ1AsOENBQThDO0NBQzlDLHlCQUF5QjtDQUN6QixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0Qiw2Q0FBNkM7Q0FDN0MsZUFBZTtDQUNmLCtFQUErRTtDQUMvRSwrQkFBK0I7Q0FDL0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcvY29tcG9uZW50cy9kYXRhL2xvZ2luLmpzb24nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBwYXNzcGhyYXNlID0gJ2ljc19xdWVzdCc7XG5jb25zdCBsb2dpbmpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2tlbkNoZWNrKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIFwidGVzdFwiKVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2UudG9rZW5cbiAgICAgICAgICAgIGNvbnN0IGRlY29uID0gZGVjcnlwdChrZXkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWNvbilcbiAgICAgICAgICAgIGlmIChsb2dpbmpzb24uaW5jbHVkZXMoZGVjb24pICYmIGRlY29uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIHRvRGFzaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlMlwiKTtcbiAgICAgICAgICAgICAgICB0b0xvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIGhlYWRlcnMgPSB7ICdBdXRob3JpemF0aW9uJzogbG9jYWxTdG9yYWdlLnRva2VuIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2UxXCIpO1xuICAgICAgICAgICAgdG9Mb2dpbigpO1xuICAgICAgICB9XG4gICAgICB9XG59XG5cbmNvbnN0IGVuY3J5cHQgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KHRleHQsIHBhc3NwaHJhc2UpLnRvU3RyaW5nKClcbiAgICByZXR1cm4ga2V5O1xufTtcblxuY29uc3QgZGVjcnlwdCA9IChjaXBoZXJ0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoY2lwaGVydGV4dCwgcGFzc3BocmFzZSk7XG4gIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgcmV0dXJuIG9yaWdpbmFsVGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0Rhc2ggPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ0cnVlMlwiKTtcbiAgICB1c2VSb3V0ZXIoKS5yZXBsYWNlKFwiL2Rhc2hcIik7XG59O1xuICBcbmV4cG9ydCBjb25zdCB0b0xvZ2luID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZmFsc2UzXCIpO1xuICAgIHVzZVJvdXRlcigpLnJlcGxhY2UoXCIvbG9naW5cIik7XG59O1xuXG4vL2Z1bmN0aW9uIGxvZ2luKCkge1xuLy8gICAgZmV0Y2goXCIvYXBpL2xvZ2luXCIpXG4vLyAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbi8vICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4vLyAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzVGV4dClcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS50b2tlbilcbi8vICAgICAgICAgICAgbG9nUmVzcG9uc2UoXCJsb2dpblJlc3BvbnNlXCIsIGBsb2NhbFN0b3JhZ2Ugc2V0IHdpdGggdG9rZW4gdmFsdWU6ICR7ZGF0YS50b2tlbn1gKVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4vL31cblxuLy9mdW5jdGlvbiBtYWtlUmVxdWVzdCgpIHtcbi8vICAgIGxldCBoZWFkZXJzID0ge31cbi8vICAgIGlmIChsb2NhbFN0b3JhZ2UudG9rZW4pIHtcbi8vICAgICAgICBoZWFkZXJzID0geyAnQXV0aG9yaXphdGlvbic6IGxvY2FsU3RvcmFnZS50b2tlbiB9XG4vLyAgICB9XG4vLyAgICBmZXRjaChcIi9hcGkvZWNob1wiLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XG4vLyAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuLy8gICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpXG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9KS50aGVuKHJlc3BvbnNlVGV4dCA9PiBsb2dSZXNwb25zZShcInJlcXVlc3RSZXNwb25zZVwiLCByZXNwb25zZVRleHQpKVxuLy8gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuLy8gICAgfSJdLCJuYW1lcyI6WyJDcnlwdG9KUyIsImRhdGEiLCJ1c2VSb3V0ZXIiLCJwYXNzcGhyYXNlIiwibG9naW5qc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuQ2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJrZXkiLCJkZWNvbiIsImRlY3J5cHQiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJ0b0Rhc2giLCJ0b0xvZ2luIiwiZW5jcnlwdCIsInRleHQiLCJBRVMiLCJ0b1N0cmluZyIsImNpcGhlcnRleHQiLCJieXRlcyIsIm9yaWdpbmFsVGV4dCIsImVuYyIsIlV0ZjgiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "./components/data/login.json":
/*!************************************!*\
  !*** ./components/data/login.json ***!
  \************************************/
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