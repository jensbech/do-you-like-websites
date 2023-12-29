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

/***/ "./components/BlogDate.js":
/*!********************************!*\
  !*** ./components/BlogDate.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Slug.module.scss */ \"./styles/Slug.module.scss\");\n/* harmony import */ var _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar BlogDate = function(param) {\n    var date = param.date, isList = param.isList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newDate = ref[0], setNewDate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), formatted = ref1[0], setFormatted = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNewDate(new Date(date).toISOString());\n        setFormatted((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(date), \"MM dd, yyyy\"));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__.headerDate,\n        children: [\n            !isList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Published \"\n            }, void 0, false, {\n                fileName: \"/workspaces/do-you-like-websites/components/BlogDate.js\",\n                lineNumber: 18,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                dateTime: newDate,\n                itemProp: \"dateModified\",\n                children: formatted\n            }, void 0, false, {\n                fileName: \"/workspaces/do-you-like-websites/components/BlogDate.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/do-you-like-websites/components/BlogDate.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(BlogDate, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\n_c = BlogDate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDate);\nvar _c;\n$RefreshReg$(_c, \"BlogDate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dEYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFtRDtBQUNqQjtBQUNzQjtBQUl4RCxJQUFNSyxRQUFRLEdBQUcsZ0JBQXNCO1FBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsTUFBTSxTQUFOQSxNQUFNOztJQUM1QixJQUE4QkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQ00sT0FBTyxHQUFnQk4sR0FBWSxHQUE1QixFQUFFTyxVQUFVLEdBQUlQLEdBQVksR0FBaEI7SUFDMUIsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNRLFNBQVMsR0FBa0JSLElBQVksR0FBOUIsRUFBRVMsWUFBWSxHQUFJVCxJQUFZLEdBQWhCO0lBRTlCRCxnREFBUyxDQUFDLFdBQU07UUFDWlEsVUFBVSxDQUFDLElBQUlHLElBQUksQ0FBQ04sSUFBSSxDQUFDLENBQUNPLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekNGLFlBQVksQ0FBQ1IsZ0RBQU0sQ0FBQyxJQUFJUyxJQUFJLENBQUNOLElBQUksQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDSSw4REFBQ1EsTUFBSTtRQUFDQyxTQUFTLEVBQUVYLGdFQUFVOztZQUN0QixDQUFDRyxNQUFNLGtCQUFJLDhEQUFDTyxNQUFJOzBCQUFDLFlBQVU7Ozs7O3FCQUFPOzBCQUNuQyw4REFBQ0UsTUFBSTtnQkFBQ0MsUUFBUSxFQUFFVCxPQUFPO2dCQUFFVSxRQUFRLEVBQUMsY0FBYzswQkFDM0NSLFNBQVM7Ozs7O3FCQUNQOzs7Ozs7YUFDSixDQUNWO0FBQ0wsQ0FBQztHQWpCS0wsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBbUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nRGF0ZS5qcz81OWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgaGVhZGVyRGF0ZSB9IGZyb20gJy4uL3N0eWxlcy9TbHVnLm1vZHVsZS5zY3NzJztcblxuXG5cbmNvbnN0IEJsb2dEYXRlID0gKHsgZGF0ZSwgaXNMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbbmV3RGF0ZSwgc2V0TmV3RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Zvcm1hdHRlZCwgc2V0Rm9ybWF0dGVkXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TmV3RGF0ZShuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgc2V0Rm9ybWF0dGVkKGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgJ01NIGRkLCB5eXl5JykpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2hlYWRlckRhdGV9PlxuICAgICAgICAgICAgeyFpc0xpc3QgJiYgPHNwYW4+UHVibGlzaGVkIDwvc3Bhbj59XG4gICAgICAgICAgICA8dGltZSBkYXRlVGltZT17bmV3RGF0ZX0gaXRlbVByb3A9XCJkYXRlTW9kaWZpZWRcIj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkfVxuICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICA8L3NwYW4+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nRGF0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZvcm1hdCIsImhlYWRlckRhdGUiLCJCbG9nRGF0ZSIsImRhdGUiLCJpc0xpc3QiLCJuZXdEYXRlIiwic2V0TmV3RGF0ZSIsImZvcm1hdHRlZCIsInNldEZvcm1hdHRlZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwYW4iLCJjbGFzc05hbWUiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJpdGVtUHJvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogDate.js\n"));

/***/ })

});