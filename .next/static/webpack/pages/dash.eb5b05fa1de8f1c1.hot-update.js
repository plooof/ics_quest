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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/images/logo.png */ \"./public/images/logo.png\");\n/* harmony import */ var _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/menu.png */ \"./public/images/menu.png\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _public_chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/chart.js */ \"./public/chart.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nvar __N_SSP = true;\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/basicdata\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, this);\n    const parse = JSON.parse(data);\n    //const parse = JSON.parse(data);\n    if (true) {\n        const user1 = parse[localStorage.userId];\n        const box11 = user1[\"box1\"];\n    }\n    console.log(user);\n    console.log(box1 + \"test\");\n    return(//<Layout>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Mary Ward HPE\"\n                }, void 0, false, {\n                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"rgb(241, 243, 248)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarLogo),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MW HPE\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarDropdown),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        alt: \"Menu\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(8, 178, 110, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box1\",\n                                        children: box1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(23, 203, 242, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box2\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(246, 172, 49, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box3\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 72,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(229, 98, 72, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box4\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraph),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data1,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 82,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data2,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 81,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLDhEQUFDcUQ7a0RBQUc7Ozs7OztrREFDSiw4REFBQzVCO3dDQUFJVSxPQUFPOzRDQUFDVSxRQUFPO3dDQUFLO2tEQUN2Qiw0RUFBQ3JDLGtEQUFJQTs0Q0FBQ2UsTUFBTVosbURBQUtBOzRDQUFFb0MsT0FBTzs0Q0FBSUMsUUFBUTs0Q0FBSVMsU0FBUzs0Q0FBR0MsU0FBUzdDLHNEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzNFLDhEQUFDWTtnQ0FBSWEsV0FBV3RDLCtFQUF1Qjs7a0RBQ3JDLDhEQUFDcUQ7a0RBQUc7Ozs7OztrREFDSiw4REFBQzVCO3dDQUFJVSxPQUFPOzRDQUFDVSxRQUFPO3dDQUFLO2tEQUN2Qiw0RUFBQ3JDLGtEQUFJQTs0Q0FBQ2UsTUFBTVgsbURBQUtBOzRDQUFFbUMsT0FBTzs0Q0FBSUMsUUFBUTs0Q0FBSVMsU0FBUzs0Q0FBR0MsU0FBUzVDLHNEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRixDQUFDO0dBakZ1QlE7O1FBRUVQLDRDQUFNQTs7O0tBRlJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2guanM/ZGI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCBsb2dvIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IG1lbnUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWVudS5wbmcnXG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTIH0gZnJvbSAnY2hhcnQuanMvYXV0bydcbmltcG9ydCB7IENoYXJ0LCBCYXIsIExpbmUsIFNjYXR0ZXIsIEJ1YmJsZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCB7IGRhdGExLCBkYXRhMiwgb3B0aW9uczEsIG9wdGlvbnMyIH0gZnJvbSAnL3B1YmxpYy9jaGFydC5qcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL2Jhc2ljZGF0YScsIGZldGNoZXIpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKGRhdGEpO1xuICBcbiAgLy9jb25zdCBwYXJzZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHVzZXIgPSBwYXJzZVtsb2NhbFN0b3JhZ2UudXNlcklkXTtcbiAgICBjb25zdCBib3gxID0gdXNlcltcImJveDFcIl07XG4gIH1cbiAgY29uc29sZS5sb2codXNlcik7XG4gIGNvbnNvbGUubG9nKGJveDEgKyBcInRlc3RcIik7XG5cbiAgcmV0dXJuIChcbiAgICAvLzxMYXlvdXQ+XG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWFyeSBXYXJkIEhQRTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYigyNDEsIDI0MywgMjQ4KVwifX0gPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhcn0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhckxvZ299PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgICAgICAgIGFsdD17J01XIEhQRSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDEwLCBtYXJnaW5Cb3R0b206IC0xMH19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUzfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhckRyb3Bkb3dufT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17bWVudX1cbiAgICAgICAgICAgICAgICBhbHQ9eydNZW51J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMTAsIG1hcmdpbkJvdHRvbTogLTEwfX1cbiAgICAgICAgICAgICAgICB3aWR0aD17NTN9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1M31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDgsIDE3OCwgMTEwLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3gxXCI+e2JveDF9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3hEaXZ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMsIDIwMywgMjQyLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3gyXCI+MTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI0NiwgMTcyLCA0OSwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94M1wiPjE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksIDk4LCA3MiwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94NFwiPjE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGhEaXZ9PlxuICAgICAgICAgIDxoMT5wbGFjZWhvbGRlcjwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjF2d1wifX0+XG4gICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhMX0gd2lkdGg9ezE4fSBoZWlnaHQ9ezExfSBwYWRkaW5nPXs1fSBvcHRpb25zPXtvcHRpb25zMX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEdyYXBoRGl2fT5cbiAgICAgICAgICA8aDE+cGxhY2Vob2xkZXI8L2gxPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxdndcIn19PlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YTJ9IHdpZHRoPXsxOH0gaGVpZ2h0PXsxMX0gcGFkZGluZz17NX0gb3B0aW9ucz17b3B0aW9uczJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiTGF5b3V0IiwidXRpbFN0eWxlcyIsIkxpbmsiLCJEYXRlIiwibG9nbyIsIm1lbnUiLCJDaGFydCIsIkNoYXJ0SlMiLCJCYXIiLCJMaW5lIiwiU2NhdHRlciIsIkJ1YmJsZSIsImRhdGExIiwiZGF0YTIiLCJvcHRpb25zMSIsIm9wdGlvbnMyIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwiZGl2IiwicGFyc2UiLCJKU09OIiwidXNlciIsImxvY2FsU3RvcmFnZSIsInVzZXJJZCIsImJveDEiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXZCYXIiLCJ1bCIsImxpIiwibmF2QmFyTG9nbyIsInNyYyIsImFsdCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwibmF2QmFyRHJvcGRvd24iLCJkYXNoQm94IiwiZGFzaEJveERpdiIsImgzIiwiaDEiLCJpZCIsImRhc2hHcmFwaCIsImRhc2hHcmFwaERpdiIsInBhZGRpbmciLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dash.js\n"));

/***/ })

});