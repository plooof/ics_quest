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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./components/data/creds.js":
/*!**********************************!*\
  !*** ./components/data/creds.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Credentials\": () => (/* binding */ Credentials)\n/* harmony export */ });\nconst Credentials = [\n    {\n        id: \"1\",\n        firstName: \"Justin\",\n        lastName: \"Angue\",\n        email: \"anguej001@tcdsb.ca\",\n        username: \"anguej001\",\n        password: \"password\",\n        role: \"admin\"\n    }\n];\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21wb25lbnRzL2RhdGEvY3JlZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWM7SUFDaEI7UUFBRUMsSUFBSTtRQUFLQyxXQUFXO1FBQVVDLFVBQVU7UUFBU0MsT0FBTztRQUFzQkMsVUFBVTtRQUFhQyxVQUFVO1FBQVlDLE1BQU07SUFBTztDQUM3STtBQUNvQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGF0YS9jcmVkcy5qcz8zYjI2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENyZWRlbnRpYWxzID0gW1xuICAgIHsgaWQ6IFwiMVwiLCBmaXJzdE5hbWU6IFwiSnVzdGluXCIsIGxhc3ROYW1lOiBcIkFuZ3VlXCIsIGVtYWlsOiBcImFuZ3VlajAwMUB0Y2RzYi5jYVwiLCB1c2VybmFtZTogXCJhbmd1ZWowMDFcIiwgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIiwgcm9sZTogXCJhZG1pblwifVxuXTtcbmV4cG9ydCB7Q3JlZGVudGlhbHN9OyJdLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./components/data/creds.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_data_creds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/data/creds */ \"(api)/./components/data/creds.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction login(req, res) {\n    const b = req.body;\n    const user = _components_data_creds__WEBPACK_IMPORTED_MODULE_1__.Credentials.find((user)=>user.username === b.username && user.password === b.password);\n    if (user) {\n        console.log(\"good\");\n        return res.redirect(\"/dash\");\n    //return res.status(200);\n    } else {\n        console.log(\"bad\");\n        return res.redirect(\"/login\");\n    //return res.status(401);\n    }\n}\nconst encrypt = (text)=>{\n    const key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(text, \"ics_quest\").toString();\n    return key;\n};\nconst decrypt = (ciphertext)=>{\n    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(ciphertext, passphrase);\n    const originalText = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));\n    return originalText;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ29CO0FBQ25CO0FBRW5CLFNBQVNHLE1BQU1DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BDLE1BQU1DLElBQUlGLElBQUlHLElBQUk7SUFFbEIsTUFBTUMsT0FBT1Asb0VBQWdCLENBQUMsQ0FBQ08sT0FBU0EsS0FBS0UsUUFBUSxLQUFLSixFQUFFSSxRQUFRLElBQUlGLEtBQUtHLFFBQVEsS0FBS0wsRUFBRUssUUFBUTtJQUVwRyxJQUFJSCxNQUFNO1FBQ1JJLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9SLElBQUlTLFFBQVEsQ0FBQztJQUNwQix5QkFBeUI7SUFDM0IsT0FBTztRQUNMRixRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUixJQUFJUyxRQUFRLENBQUM7SUFDcEIseUJBQXlCO0lBQzNCLENBQUM7QUFFSCxDQUFDO0FBRUgsTUFBTUMsVUFBVSxDQUFDQyxPQUFTO0lBQ3hCLE1BQU1DLE1BQU1qQiw0REFBb0IsQ0FBQ2dCLE1BQU0sYUFBYUcsUUFBUTtJQUM1RCxPQUFPRjtBQUNUO0FBRUEsTUFBTUcsVUFBVSxDQUFDQyxhQUFlO0lBQzlCLE1BQU1DLFFBQVF0Qiw0REFBb0IsQ0FBQ3FCLFlBQVlFO0lBQy9DLE1BQU1DLGVBQWVGLE1BQU1ILFFBQVEsQ0FBQ25CLDJEQUFpQjtJQUNyRCxPQUFPd0I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuaW1wb3J0IHsgQ3JlZGVudGlhbHMgfSBmcm9tICcvY29tcG9uZW50cy9kYXRhL2NyZWRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4ocmVxLCByZXMpIHtcbiAgICBjb25zdCBiID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB1c2VyID0gQ3JlZGVudGlhbHMuZmluZCgodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gYi51c2VybmFtZSAmJiB1c2VyLnBhc3N3b3JkID09PSBiLnBhc3N3b3JkKTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdvb2RcIik7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KFwiL2Rhc2hcIik7XG4gICAgICAvL3JldHVybiByZXMuc3RhdHVzKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFkXCIpXG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuICAgICAgLy9yZXR1cm4gcmVzLnN0YXR1cyg0MDEpO1xuICAgIH1cbiAgICBcbiAgfVxuICBcbmNvbnN0IGVuY3J5cHQgPSAodGV4dCkgPT4ge1xuICBjb25zdCBrZXkgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCh0ZXh0LCBcImljc19xdWVzdFwiKS50b1N0cmluZygpO1xuICByZXR1cm4ga2V5O1xufTtcblxuY29uc3QgZGVjcnlwdCA9IChjaXBoZXJ0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoY2lwaGVydGV4dCwgcGFzc3BocmFzZSk7XG4gIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgcmV0dXJuIG9yaWdpbmFsVGV4dDtcbn07Il0sIm5hbWVzIjpbIkNyeXB0b0pTIiwiQ3JlZGVudGlhbHMiLCJ1c2VFZmZlY3QiLCJsb2dpbiIsInJlcSIsInJlcyIsImIiLCJib2R5IiwidXNlciIsImZpbmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0IiwiZW5jcnlwdCIsInRleHQiLCJrZXkiLCJBRVMiLCJ0b1N0cmluZyIsImRlY3J5cHQiLCJjaXBoZXJ0ZXh0IiwiYnl0ZXMiLCJwYXNzcGhyYXNlIiwib3JpZ2luYWxUZXh0IiwiZW5jIiwiVXRmOCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();