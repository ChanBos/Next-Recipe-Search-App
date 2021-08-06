self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./pages/recipes.js":
/*!**************************!*\
  !*** ./pages/recipes.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppDisplay */ "./components/AppDisplay.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\pages\\recipes.js",
    _this = undefined,
    _s = $RefreshSig$();

// Imported the Link API to support client-side navigation.
 // Imported react libraries and hooks.

 // Imported AppDisplay to set the holistic style of this page.

 // Importing the Next built-in component to append elements to the head of the page.

 // Imported components.




/**
 *  * Applied the styles and passed the AppDisplay props.
 * Created a function  
 */

var Recipes = function Recipes(_ref) {
  _s();

  var results = _ref.results;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [" ", router.query.term, " - Food Search "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
}; // Exported recipes page to be generated.


_s(Recipes, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Recipes;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Recipes);
/**
 * Created an asynchronous function to fetch the data from the Edamam API.
 * Processing the API id and key from the .env.local file. Inserted these into the API's url.
 * Awaiting the data from the API. Will be returned on this page if a search term has been entered via the home page.
 */

var _c;

$RefreshReg$(_c, "Recipes");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy5qcyJdLCJuYW1lcyI6WyJSZWNpcGVzIiwicmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSx3QkFBU0QsTUFBTSxDQUFDRSxLQUFQLENBQWFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQU1FLDhEQUFDLDhEQUFEO0FBQWUsYUFBTyxFQUFFSjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWRELEMsQ0FnQkE7OztHQWhCTUQsTztVQUNXRyxrRDs7O0tBRFhILE87O0FBaUJOLCtEQUFlQSxPQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjY2NmFkODQxNWMxOTBlMDRkZDYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIHJlYWN0IGxpYnJhcmllcyBhbmQgaG9va3MuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBJbXBvcnRlZCBBcHBEaXNwbGF5IHRvIHNldCB0aGUgaG9saXN0aWMgc3R5bGUgb2YgdGhpcyBwYWdlLlxyXG5pbXBvcnQgQXBwRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEaXNwbGF5XCI7XHJcbi8vIEltcG9ydGluZyB0aGUgTmV4dCBidWlsdC1pbiBjb21wb25lbnQgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBoZWFkIG9mIHRoZSBwYWdlLlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMuXHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiAgKiBBcHBsaWVkIHRoZSBzdHlsZXMgYW5kIHBhc3NlZCB0aGUgQXBwRGlzcGxheSBwcm9wcy5cclxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uICBcclxuICovXHJcblxyXG5jb25zdCBSZWNpcGVzID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwRGlzcGxheSAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT4ge3JvdXRlci5xdWVyeS50ZXJtfSAtIEZvb2QgU2VhcmNoIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNlYXJjaFJlc3VsdHMgcmVzdWx0cz17cmVzdWx0c30gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIHJlY2lwZXMgcGFnZSB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZXM7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gdG8gZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgRWRhbWFtIEFQSS5cclxuICogUHJvY2Vzc2luZyB0aGUgQVBJIGlkIGFuZCBrZXkgZnJvbSB0aGUgLmVudi5sb2NhbCBmaWxlLiBJbnNlcnRlZCB0aGVzZSBpbnRvIHRoZSBBUEkncyB1cmwuXHJcbiAqIEF3YWl0aW5nIHRoZSBkYXRhIGZyb20gdGhlIEFQSS4gV2lsbCBiZSByZXR1cm5lZCBvbiB0aGlzIHBhZ2UgaWYgYSBzZWFyY2ggdGVybSBoYXMgYmVlbiBlbnRlcmVkIHZpYSB0aGUgaG9tZSBwYWdlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IEFQSV9JRCA9IHByb2Nlc3MuZW52LkFQSV9JRDtcclxuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9hcGkvcmVjaXBlcy92Mj90eXBlPXB1YmxpYyZxPSR7Y29udGV4dC5xdWVyeS50ZXJtfSZhcHBfaWQ9JHtBUElfSUR9JmFwcF9rZXk9JHtBUElfS0VZfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcmVzdWx0czogZGF0YSA/IGRhdGEgOiBudWxsLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=