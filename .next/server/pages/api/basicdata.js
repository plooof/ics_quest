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
exports.id = "pages/api/basicdata";
exports.ids = ["pages/api/basicdata"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/basicdata.js":
/*!********************************!*\
  !*** ./pages/api/basicdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(process.cwd() + \"/components/data/basic.json\", \"utf8\");\n    //Return the content of the data file in json format\n    res.status(200).json(fileContents);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFzaWNkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFFckIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsbUNBQW1DO0lBQ25DLE1BQU1DLGVBQWUsTUFBTUosaURBQVcsQ0FBQ00sUUFBUUMsR0FBRyxLQUFLLCtCQUErQjtJQUN0RixvREFBb0Q7SUFDcERKLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYmFzaWNkYXRhLmpzP2UyYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvL1JlYWQgdGhlIGpzb24gZGF0YSBmaWxlIGRhdGEuanNvblxuICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShwcm9jZXNzLmN3ZCgpICsgJy9jb21wb25lbnRzL2RhdGEvYmFzaWMuanNvbicsICd1dGY4Jyk7XG4gIC8vUmV0dXJuIHRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGZpbGUgaW4ganNvbiBmb3JtYXRcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsZUNvbnRlbnRzKTtcbn0iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJwcm9jZXNzIiwiY3dkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/basicdata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/basicdata.js"));
module.exports = __webpack_exports__;

})();