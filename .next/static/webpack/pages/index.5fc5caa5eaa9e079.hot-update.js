"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tokenCheck; },\n/* harmony export */   \"toDash\": function() { return /* binding */ toDash; }\n/* harmony export */ });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/login.json */ \"./components/login.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nconst passphrase = \"ics_quest\";\nconst loginjson = JSON.stringify(_components_login_json__WEBPACK_IMPORTED_MODULE_1__);\nfunction tokenCheck() {\n    if (true) {\n        localStorage.setItem(\"token\", encrypt('\"anguej\":\"password\"'));\n        if (localStorage.token) {\n            const key = localStorage.token;\n            const decon = decrypt(key);\n            console.log(key);\n            console.log(decon);\n            if (loginjson.includes(decon) && decon !== \"\") {\n                console.log(\"true\");\n                toDash();\n            } else {\n                console.log(\"false2\");\n            }\n        // headers = { 'Authorization': localStorage.token }\n        } else {\n            console.log(\"false1\");\n        }\n    }\n}\nconst encrypt = (text)=>{\n    const key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(text, passphrase).toString();\n    return key;\n};\nconst decrypt = (ciphertext)=>{\n    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(ciphertext, passphrase);\n    const originalText = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));\n    return originalText;\n};\nconst toDash = ()=>{\n    _s();\n    console.log(\"true2\");\n    (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().replace(\"/dash\");\n}; //function login() {\n //    fetch(\"/api/login\")\n //        .then((res) => {\n //            if (res.status == 200) {\n //                return res.json()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        })\n //        .then(data => {\n //            localStorage.setItem(\"token\", data.token)\n //            logResponse(\"loginResponse\", `localStorage set with token value: ${data.token}`)\n //        })\n //        .catch(console.error)\n //}\n //function makeRequest() {\n //    let headers = {}\n //    if (localStorage.token) {\n //        headers = { 'Authorization': localStorage.token }\n //    }\n //    fetch(\"/api/echo\", { headers: headers })\n //       .then((res) => {\n //            if (res.status == 200) {\n //                return res.text()\n //            } else {\n //                throw Error(res.statusText)\n //            }\n //        }).then(responseText => logResponse(\"requestResponse\", responseText))\n //        .catch(console.error)\n //    }\n_s(toDash, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNRO0FBQ0Y7QUFFdkMsTUFBTUcsYUFBYTtBQUNuQixNQUFNQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNMLG1EQUFJQTtBQUV0QixTQUFTTSxhQUFhO0lBQ2pDLElBQUksSUFBa0IsRUFBYTtRQUMvQkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNDLFFBQVE7UUFDdEMsSUFBSUYsYUFBYUcsS0FBSyxFQUFFO1lBQ3BCLE1BQU1DLE1BQU1KLGFBQWFHLEtBQUs7WUFDOUIsTUFBTUUsUUFBUUMsUUFBUUY7WUFDdEJHLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWkcsUUFBUUMsR0FBRyxDQUFDSDtZQUNaLElBQUlULFVBQVVhLFFBQVEsQ0FBQ0osVUFBVUEsVUFBVSxJQUFJO2dCQUMzQ0UsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRTtZQUNKLE9BQU87Z0JBQ0hILFFBQVFDLEdBQUcsQ0FBQztZQUNoQixDQUFDO1FBQ0wsb0RBQW9EO1FBQ3BELE9BQU87WUFDSEQsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ1AsQ0FBQztBQUVELE1BQU1OLFVBQVUsQ0FBQ1MsT0FBUztJQUN0QixNQUFNUCxNQUFNWiw0REFBb0IsQ0FBQ21CLE1BQU1oQixZQUFZa0IsUUFBUTtJQUMzRCxPQUFPVDtBQUNYO0FBRUEsTUFBTUUsVUFBVSxDQUFDUSxhQUFlO0lBQzlCLE1BQU1DLFFBQVF2Qiw0REFBb0IsQ0FBQ3NCLFlBQVluQjtJQUMvQyxNQUFNcUIsZUFBZUQsTUFBTUYsUUFBUSxDQUFDckIsMkRBQWlCO0lBQ3JELE9BQU93QjtBQUNUO0FBRU8sTUFBTU4sU0FBUyxJQUFNOztJQUN4QkgsUUFBUUMsR0FBRyxDQUFDO0lBQ1pkLHNEQUFTQSxHQUFHeUIsT0FBTyxDQUFDO0FBQ3RCLEVBQUUsQ0FFSixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0Qiw2Q0FBNkM7Q0FDN0MsZUFBZTtDQUNmLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsdURBQXVEO0NBQ3ZELDhGQUE4RjtDQUM5RixZQUFZO0NBQ1osK0JBQStCO0NBQy9CLEdBQUc7Q0FFSCwwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLCtCQUErQjtDQUMvQiwyREFBMkQ7Q0FDM0QsT0FBTztDQUNQLDhDQUE4QztDQUM5Qyx5QkFBeUI7Q0FDekIsc0NBQXNDO0NBQ3RDLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsNkNBQTZDO0NBQzdDLGVBQWU7Q0FDZiwrRUFBK0U7Q0FDL0UsK0JBQStCO0NBQy9CLE9BQU87R0FuQ01UOztRQUVUaEIsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XG5pbXBvcnQgZGF0YSBmcm9tICcvY29tcG9uZW50cy9sb2dpbi5qc29uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuY29uc3QgcGFzc3BocmFzZSA9ICdpY3NfcXVlc3QnO1xuY29uc3QgbG9naW5qc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9rZW5DaGVjaygpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBlbmNyeXB0KCdcImFuZ3VlalwiOlwicGFzc3dvcmRcIicpKVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2UudG9rZW5cbiAgICAgICAgICAgIGNvbnN0IGRlY29uID0gZGVjcnlwdChrZXkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWNvbilcbiAgICAgICAgICAgIGlmIChsb2dpbmpzb24uaW5jbHVkZXMoZGVjb24pICYmIGRlY29uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIHRvRGFzaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlMlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gaGVhZGVycyA9IHsgJ0F1dGhvcml6YXRpb24nOiBsb2NhbFN0b3JhZ2UudG9rZW4gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZTFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cblxuY29uc3QgZW5jcnlwdCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQodGV4dCwgcGFzc3BocmFzZSkudG9TdHJpbmcoKVxuICAgIHJldHVybiBrZXk7XG59O1xuXG5jb25zdCBkZWNyeXB0ID0gKGNpcGhlcnRleHQpID0+IHtcbiAgY29uc3QgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChjaXBoZXJ0ZXh0LCBwYXNzcGhyYXNlKTtcbiAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICByZXR1cm4gb3JpZ2luYWxUZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRGFzaCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInRydWUyXCIpO1xuICAgIHVzZVJvdXRlcigpLnJlcGxhY2UoXCIvZGFzaFwiKVxuICB9O1xuXG4vL2Z1bmN0aW9uIGxvZ2luKCkge1xuLy8gICAgZmV0Y2goXCIvYXBpL2xvZ2luXCIpXG4vLyAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbi8vICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4vLyAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzVGV4dClcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS50b2tlbilcbi8vICAgICAgICAgICAgbG9nUmVzcG9uc2UoXCJsb2dpblJlc3BvbnNlXCIsIGBsb2NhbFN0b3JhZ2Ugc2V0IHdpdGggdG9rZW4gdmFsdWU6ICR7ZGF0YS50b2tlbn1gKVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4vL31cblxuLy9mdW5jdGlvbiBtYWtlUmVxdWVzdCgpIHtcbi8vICAgIGxldCBoZWFkZXJzID0ge31cbi8vICAgIGlmIChsb2NhbFN0b3JhZ2UudG9rZW4pIHtcbi8vICAgICAgICBoZWFkZXJzID0geyAnQXV0aG9yaXphdGlvbic6IGxvY2FsU3RvcmFnZS50b2tlbiB9XG4vLyAgICB9XG4vLyAgICBmZXRjaChcIi9hcGkvZWNob1wiLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XG4vLyAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuLy8gICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpXG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9KS50aGVuKHJlc3BvbnNlVGV4dCA9PiBsb2dSZXNwb25zZShcInJlcXVlc3RSZXNwb25zZVwiLCByZXNwb25zZVRleHQpKVxuLy8gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuLy8gICAgfSJdLCJuYW1lcyI6WyJDcnlwdG9KUyIsImRhdGEiLCJ1c2VSb3V0ZXIiLCJwYXNzcGhyYXNlIiwibG9naW5qc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuQ2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZW5jcnlwdCIsInRva2VuIiwia2V5IiwiZGVjb24iLCJkZWNyeXB0IiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwidG9EYXNoIiwidGV4dCIsIkFFUyIsInRvU3RyaW5nIiwiY2lwaGVydGV4dCIsImJ5dGVzIiwib3JpZ2luYWxUZXh0IiwiZW5jIiwiVXRmOCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});