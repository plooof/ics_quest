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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/images/logo.png */ \"./public/images/logo.png\");\n/* harmony import */ var _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/menu.png */ \"./public/images/menu.png\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _public_chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/chart.js */ \"./public/chart.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nvar __N_SSP = true;\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"/api/basicdata\", fetcher);\n    console.log(data);\n    if (true) {\n        const userId1 = localStorage.userId;\n    }\n    const box1 = data.window[userId].box1;\n    return(//<Layout>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Mary Ward HPE\"\n                }, void 0, false, {\n                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"rgb(241, 243, 248)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarLogo),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MW HPE\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().navBarDropdown),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _public_images_menu_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        alt: \"Menu\",\n                                        style: {\n                                            margin: 10,\n                                            marginBottom: -10\n                                        },\n                                        width: 53,\n                                        height: 53\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(8, 178, 110, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(23, 203, 242, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box2\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(246, 172, 49, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box3\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashBoxDiv),\n                                style: {\n                                    backgroundColor: \"rgba(229, 98, 72, 1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        id: \"box4\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraph),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data1,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashGraphDiv),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"placeholder\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            margin: \"1vw\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__.Line, {\n                                            data: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.data2,\n                                            width: 18,\n                                            height: 11,\n                                            padding: 5,\n                                            options: _public_chart_js__WEBPACK_IMPORTED_MODULE_9__.options2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                        lineNumber: 73,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clem/Programming/python_physedproj/ics_quest/pages/dash.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OzBDQUczRSw4REFBQ21CO2dDQUFJSSxXQUFXcEMsK0VBQXVCOztrREFDckMsOERBQUNtRDtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDbkI7d0NBQUlDLE9BQU87NENBQUNVLFFBQU87d0NBQUs7a0RBQ3ZCLDRFQUFDbkMsa0RBQUlBOzRDQUFDZSxNQUFNWCxtREFBS0E7NENBQUVpQyxPQUFPOzRDQUFJQyxRQUFROzRDQUFJUyxTQUFTOzRDQUFHQyxTQUFTMUMsc0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25GLENBQUM7R0F6RXVCUTs7UUFFRVAsNENBQU1BOzs7S0FGUk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaC5qcz9kYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IGxvZ28gZnJvbSAnL3B1YmxpYy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgbWVudSBmcm9tICcvcHVibGljL2ltYWdlcy9tZW51LnBuZydcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMgfSBmcm9tICdjaGFydC5qcy9hdXRvJ1xuaW1wb3J0IHsgQ2hhcnQsIEJhciwgTGluZSwgU2NhdHRlciwgQnViYmxlIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuaW1wb3J0IHsgZGF0YTEsIGRhdGEyLCBvcHRpb25zMSwgb3B0aW9uczIgfSBmcm9tICcvcHVibGljL2NoYXJ0LmpzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvYmFzaWNkYXRhJywgZmV0Y2hlcik7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UudXNlcklkO1xuICB9XG4gIGNvbnN0IGJveDEgPSBkYXRhLndpbmRvd1t1c2VySWRdLmJveDE7XG5cbiAgcmV0dXJuIChcbiAgICAvLzxMYXlvdXQ+XG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWFyeSBXYXJkIEhQRTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYigyNDEsIDI0MywgMjQ4KVwifX0gPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhcn0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhckxvZ299PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgICAgICAgIGFsdD17J01XIEhQRSd9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDEwLCBtYXJnaW5Cb3R0b206IC0xMH19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUzfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5hdkJhckRyb3Bkb3dufT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17bWVudX1cbiAgICAgICAgICAgICAgICBhbHQ9eydNZW51J31cbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMTAsIG1hcmdpbkJvdHRvbTogLTEwfX1cbiAgICAgICAgICAgICAgICB3aWR0aD17NTN9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1M31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDgsIDE3OCwgMTEwLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3gxXCI+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmRhc2hCb3hEaXZ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMsIDIwMywgMjQyLCAxKVwifX0+XG4gICAgICAgICAgPGgzPnBsYWNlaG9sZGVyPC9oMz5cbiAgICAgICAgICA8aDEgaWQ9XCJib3gyXCI+MTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoQm94RGl2fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI0NiwgMTcyLCA0OSwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94M1wiPjE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEJveERpdn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksIDk4LCA3MiwgMSlcIn19PlxuICAgICAgICAgIDxoMz5wbGFjZWhvbGRlcjwvaDM+XG4gICAgICAgICAgPGgxIGlkPVwiYm94NFwiPjE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5kYXNoR3JhcGhEaXZ9PlxuICAgICAgICAgIDxoMT5wbGFjZWhvbGRlcjwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjF2d1wifX0+XG4gICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhMX0gd2lkdGg9ezE4fSBoZWlnaHQ9ezExfSBwYWRkaW5nPXs1fSBvcHRpb25zPXtvcHRpb25zMX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZGFzaEdyYXBoRGl2fT5cbiAgICAgICAgICA8aDE+cGxhY2Vob2xkZXI8L2gxPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxdndcIn19PlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YTJ9IHdpZHRoPXsxOH0gaGVpZ2h0PXsxMX0gcGFkZGluZz17NX0gb3B0aW9ucz17b3B0aW9uczJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiTGF5b3V0IiwidXRpbFN0eWxlcyIsIkxpbmsiLCJEYXRlIiwibG9nbyIsIm1lbnUiLCJDaGFydCIsIkNoYXJ0SlMiLCJCYXIiLCJMaW5lIiwiU2NhdHRlciIsIkJ1YmJsZSIsImRhdGExIiwiZGF0YTIiLCJvcHRpb25zMSIsIm9wdGlvbnMyIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImJveDEiLCJ3aW5kb3ciLCJ0aXRsZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5hdkJhciIsInVsIiwibGkiLCJuYXZCYXJMb2dvIiwic3JjIiwiYWx0IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJuYXZCYXJEcm9wZG93biIsImRhc2hCb3giLCJkYXNoQm94RGl2IiwiaDMiLCJoMSIsImlkIiwiZGFzaEdyYXBoIiwiZGFzaEdyYXBoRGl2IiwicGFkZGluZyIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dash.js\n"));

/***/ })

});