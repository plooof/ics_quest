"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dash",{

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"st\": function() { return /* binding */ st; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/images/logo.png */ \"./public/images/logo.png\");\n/* harmony import */ var _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/menu.png */ \"./public/images/menu.png\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _public_chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/chart.js */ \"./public/chart.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nvar __N_SSP = true;\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/basicdata\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, this);\n    const parse = JSON.parse(data);\n    var uID = \"\";\n    //const parse = JSON.parse(data);\n    if (true) {\n        uID = localStorage.getItem(\"userId\");\n        const user = data[localStorage.getItem(\"userId\")];\n        console.log(\"1\" + data);\n        console.log(\"2\" + JSON.stringify(parse[localStorage.getItem(\"userId\")][\"box1\"]));\n        console.log(\"3\" + localStorage.getItem(\"userId\"));\n        console.log(\"4\" + st(parse[uID][\"box1\"]));\n        console.log(\"5\" + st(parse[uID]));\n    }\n    console.log(\"5\" + uID);\n    return(//<Layout>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Mary Ward HPE\"\n                }, void 0, false, {\n                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"rgb(241, 243, 248)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarLogo),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MW HPE\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarDropdown),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        alt: \"Menu\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(8, 178, 110, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box1\",\n                                        children: st(parse[uID][\"box1\"])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(23, 203, 242, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box2\",\n                                        children: st(parse[uID][\"box2\"])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(246, 172, 49, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box3\",\n                                        children: st(parse[uID][\"box3\"])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 78,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(229, 98, 72, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box4\",\n                                        children: st(parse[uID][\"box4\"])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 82,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 69,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraph),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data1,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data2,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 94,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 87,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n});\n_c = Home;\nfunction st(string) {\n    return JSON.stringify(string);\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEMsS0FBS08sU0FBUyxDQUFDMkI7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoLmpzP2RiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5pbXBvcnQgbG9nbyBmcm9tICcvcHVibGljL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBtZW51IGZyb20gJy9wdWJsaWMvaW1hZ2VzL21lbnUucG5nJ1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUyB9IGZyb20gJ2NoYXJ0LmpzL2F1dG8nXG5pbXBvcnQgeyBDaGFydCwgQmFyLCBMaW5lLCBTY2F0dGVyLCBCdWJibGUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5pbXBvcnQgeyBkYXRhMSwgZGF0YTIsIG9wdGlvbnMxLCBvcHRpb25zMiB9IGZyb20gJy9wdWJsaWMvY2hhcnQuanMnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9iYXNpY2RhdGEnLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuXG4gIGNvbnN0IHBhcnNlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgdmFyIHVJRCA9IFwiXCI7XG4gIFxuICAvL2NvbnN0IHBhcnNlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdUlEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4gICAgY29uc3QgdXNlciA9IGRhdGFbbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIildO1xuICAgIGNvbnNvbGUubG9nKFwiMVwiICsgZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCIyXCIgKyBKU09OLnN0cmluZ2lmeShwYXJzZVtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKV1bXCJib3gxXCJdKSk7XG4gICAgY29uc29sZS5sb2coXCIzXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG4gICAgY29uc29sZS5sb2coXCI0XCIgKyBzdChwYXJzZVt1SURdW1wiYm94MVwiXSkpO1xuICAgIGNvbnNvbGUubG9nKFwiNVwiICsgc3QocGFyc2VbdUlEXSkpO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCI1XCIgKyB1SUQpO1xuXG4gIHJldHVybiAoXG4gICAgLy88TGF5b3V0PlxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hcnkgV2FyZCBIUEU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2IoMjQxLCAyNDMsIDI0OClcIn19ID5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJMb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9eydNVyBIUEUnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAxMCwgbWFyZ2luQm90dG9tOiAtMTB9fVxuICAgICAgICAgICAgICAgIHdpZHRoPXs1M31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJEcm9wZG93bn0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e21lbnV9XG4gICAgICAgICAgICAgICAgYWx0PXsnTWVudSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDEwLCBtYXJnaW5Cb3R0b206IC0xMH19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUzfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg4LCAxNzgsIDExMCwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94MVwiPntzdChwYXJzZVt1SURdW1wiYm94MVwiXSl9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3hEaXZ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMsIDIwMywgMjQyLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3gyXCI+e3N0KHBhcnNlW3VJRF1bXCJib3gyXCJdKX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNDYsIDE3MiwgNDksIDEpXCJ9fT5cbiAgICAgICAgICA8aDM+cGxhY2Vob2xkZXI8L2gzPlxuICAgICAgICAgIDxoMSBpZD1cImJveDNcIj57c3QocGFyc2VbdUlEXVtcImJveDNcIl0pfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSwgOTgsIDcyLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3g0XCI+e3N0KHBhcnNlW3VJRF1bXCJib3g0XCJdKX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGhEaXZ9PlxuICAgICAgICAgIDxoMT5wbGFjZWhvbGRlcjwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjF2d1wifX0+XG4gICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhMX0gd2lkdGg9ezE4fSBoZWlnaHQ9ezExfSBwYWRkaW5nPXs1fSBvcHRpb25zPXtvcHRpb25zMX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEdyYXBoRGl2fT5cbiAgICAgICAgICA8aDE+cGxhY2Vob2xkZXI8L2gxPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxdndcIn19PlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YTJ9IHdpZHRoPXsxOH0gaGVpZ2h0PXsxMX0gcGFkZGluZz17NX0gb3B0aW9ucz17b3B0aW9uczJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Qoc3RyaW5nKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzdHJpbmcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiTGF5b3V0IiwidXRpbFN0eWxlcyIsIkxpbmsiLCJEYXRlIiwibG9nbyIsIm1lbnUiLCJDaGFydCIsIkNoYXJ0SlMiLCJCYXIiLCJMaW5lIiwiU2NhdHRlciIsIkJ1YmJsZSIsImRhdGExIiwiZGF0YTIiLCJvcHRpb25zMSIsIm9wdGlvbnMyIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwiZGl2IiwicGFyc2UiLCJKU09OIiwidUlEIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwic3RyaW5naWZ5Iiwic3QiLCJ0aXRsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5hdkJhciIsInVsIiwibGkiLCJuYXZCYXJMb2dvIiwic3JjIiwiYWx0IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJuYXZCYXJEcm9wZG93biIsImRhc2hCb3giLCJkYXNoQm94RGl2IiwiaDMiLCJoMSIsImlkIiwiZGFzaEdyYXBoIiwiZGFzaEdyYXBoRGl2IiwicGFkZGluZyIsIm9wdGlvbnMiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dash.js\n"));

/***/ })

});