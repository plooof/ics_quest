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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/images/logo.png */ \"./public/images/logo.png\");\n/* harmony import */ var _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/menu.png */ \"./public/images/menu.png\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _public_chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/chart.js */ \"./public/chart.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nconst box1 = \"\";\nvar __N_SSP = true;\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/basicdata\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 23,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n        lineNumber: 24,\n        columnNumber: 21\n    }, this);\n    const parse = JSON.parse(data);\n    //const parse = JSON.parse(data);\n    if (true) {\n        const user1 = parse[localStorage.userId];\n        const box1 = user1[\"box1\"];\n    }\n    console.log(user);\n    console.log(box1 + \"test\");\n    return(//<Layout>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Mary Ward HPE\"\n                }, void 0, false, {\n                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"rgb(241, 243, 248)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarLogo),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MW HPE\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarDropdown),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        alt: \"Menu\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(8, 178, 110, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box1\",\n                                        children: box1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(23, 203, 242, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box2\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(246, 172, 49, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box3\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(229, 98, 72, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box4\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 78,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraph),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data1,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 84,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data2,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 90,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVd0QywrRUFBdUI7O2tEQUNyQyw4REFBQ3FEO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUMzQjt3Q0FBSVMsT0FBTzs0Q0FBQ1UsUUFBTzt3Q0FBSztrREFDdkIsNEVBQUNyQyxrREFBSUE7NENBQUNnQixNQUFNYixtREFBS0E7NENBQUVvQyxPQUFPOzRDQUFJQyxRQUFROzRDQUFJUyxTQUFTOzRDQUFHQyxTQUFTN0Msc0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHM0UsOERBQUNhO2dDQUFJWSxXQUFXdEMsK0VBQXVCOztrREFDckMsOERBQUNxRDtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDM0I7d0NBQUlTLE9BQU87NENBQUNVLFFBQU87d0NBQUs7a0RBQ3ZCLDRFQUFDckMsa0RBQUlBOzRDQUFDZ0IsTUFBTVosbURBQUtBOzRDQUFFbUMsT0FBTzs0Q0FBSUMsUUFBUTs0Q0FBSVMsU0FBUzs0Q0FBR0MsU0FBUzVDLHNEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRixDQUFDO0dBakZ1QlM7O1FBRUVSLDRDQUFNQTs7O0tBRlJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2guanM/ZGI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCBsb2dvIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IG1lbnUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWVudS5wbmcnXG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTIH0gZnJvbSAnY2hhcnQuanMvYXV0bydcbmltcG9ydCB7IENoYXJ0LCBCYXIsIExpbmUsIFNjYXR0ZXIsIEJ1YmJsZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCB7IGRhdGExLCBkYXRhMiwgb3B0aW9uczEsIG9wdGlvbnMyIH0gZnJvbSAnL3B1YmxpYy9jaGFydC5qcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IGJveDEgPSBcIlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9iYXNpY2RhdGEnLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuXG4gIGNvbnN0IHBhcnNlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgXG4gIC8vY29uc3QgcGFyc2UgPSBKU09OLnBhcnNlKGRhdGEpO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCB1c2VyID0gcGFyc2VbbG9jYWxTdG9yYWdlLnVzZXJJZF07XG4gICAgY29uc3QgYm94MSA9IHVzZXJbXCJib3gxXCJdO1xuICB9XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICBjb25zb2xlLmxvZyhib3gxICsgXCJ0ZXN0XCIpO1xuXG4gIHJldHVybiAoXG4gICAgLy88TGF5b3V0PlxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hcnkgV2FyZCBIUEU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2IoMjQxLCAyNDMsIDI0OClcIn19ID5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJMb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9eydNVyBIUEUnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAxMCwgbWFyZ2luQm90dG9tOiAtMTB9fVxuICAgICAgICAgICAgICAgIHdpZHRoPXs1M31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uYXZCYXJEcm9wZG93bn0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e21lbnV9XG4gICAgICAgICAgICAgICAgYWx0PXsnTWVudSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDEwLCBtYXJnaW5Cb3R0b206IC0xMH19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUzfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg4LCAxNzgsIDExMCwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94MVwiPntib3gxfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzLCAyMDMsIDI0MiwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94MlwiPjE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNDYsIDE3MiwgNDksIDEpXCJ9fT5cbiAgICAgICAgICA8aDM+cGxhY2Vob2xkZXI8L2gzPlxuICAgICAgICAgIDxoMSBpZD1cImJveDNcIj4xPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3hEaXZ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LCA5OCwgNzIsIDEpXCJ9fT5cbiAgICAgICAgICA8aDM+cGxhY2Vob2xkZXI8L2gzPlxuICAgICAgICAgIDxoMSBpZD1cImJveDRcIj4xPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEdyYXBofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEdyYXBoRGl2fT5cbiAgICAgICAgICA8aDE+cGxhY2Vob2xkZXI8L2gxPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxdndcIn19PlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YTF9IHdpZHRoPXsxOH0gaGVpZ2h0PXsxMX0gcGFkZGluZz17NX0gb3B0aW9ucz17b3B0aW9uczF9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hHcmFwaERpdn0+XG4gICAgICAgICAgPGgxPnBsYWNlaG9sZGVyPC9oMT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMXZ3XCJ9fT5cbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGEyfSB3aWR0aD17MTh9IGhlaWdodD17MTF9IHBhZGRpbmc9ezV9IG9wdGlvbnM9e29wdGlvbnMyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkxheW91dCIsInV0aWxTdHlsZXMiLCJMaW5rIiwiRGF0ZSIsImxvZ28iLCJtZW51IiwiQ2hhcnQiLCJDaGFydEpTIiwiQmFyIiwiTGluZSIsIlNjYXR0ZXIiLCJCdWJibGUiLCJkYXRhMSIsImRhdGEyIiwib3B0aW9uczEiLCJvcHRpb25zMiIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYm94MSIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJwYXJzZSIsIkpTT04iLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2QmFyIiwidWwiLCJsaSIsIm5hdkJhckxvZ28iLCJzcmMiLCJhbHQiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImhlaWdodCIsIm5hdkJhckRyb3Bkb3duIiwiZGFzaEJveCIsImRhc2hCb3hEaXYiLCJoMyIsImgxIiwiaWQiLCJkYXNoR3JhcGgiLCJkYXNoR3JhcGhEaXYiLCJwYWRkaW5nIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dash.js\n"));

/***/ })

});