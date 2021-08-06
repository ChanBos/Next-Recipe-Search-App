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





var Recipes = function Recipes(_ref) {
  _s();

  var results = _ref.results;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [" ", router.query.term, " - Food Search "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
 * Awaiting the data from the API. Will be retu
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy5qcyJdLCJuYW1lcyI6WyJSZWNpcGVzIiwicmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsd0JBQVNELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRSw4REFBQyw4REFBRDtBQUFlLGFBQU8sRUFBRUo7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FkRCxDLENBZ0JBOzs7R0FoQk1ELE87VUFDV0csa0Q7OztLQURYSCxPOztBQWlCTiwrREFBZUEsT0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy43YTg0MzcwNjA4ZjIzMDdmYjI2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCByZWFjdCBsaWJyYXJpZXMgYW5kIGhvb2tzLlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIEltcG9ydGVkIEFwcERpc3BsYXkgdG8gc2V0IHRoZSBob2xpc3RpYyBzdHlsZSBvZiB0aGlzIHBhZ2UuXHJcbmltcG9ydCBBcHBEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcERpc3BsYXlcIjtcclxuLy8gSW1wb3J0aW5nIHRoZSBOZXh0IGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGhlYWQgb2YgdGhlIHBhZ2UuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cy5cclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgUmVjaXBlcyA9ICh7IHJlc3VsdHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFwcERpc3BsYXkgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+IHtyb3V0ZXIucXVlcnkudGVybX0gLSBGb29kIFNlYXJjaCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2hSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIHJlY2lwZXMgcGFnZSB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZXM7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gdG8gZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgRWRhbWFtIEFQSS5cclxuICogUHJvY2Vzc2luZyB0aGUgQVBJIGlkIGFuZCBrZXkgZnJvbSB0aGUgLmVudi5sb2NhbCBmaWxlLiBJbnNlcnRlZCB0aGVzZSBpbnRvIHRoZSBBUEkncyB1cmwuXHJcbiAqIEF3YWl0aW5nIHRoZSBkYXRhIGZyb20gdGhlIEFQSS4gV2lsbCBiZSByZXR1XHJcbiAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgQVBJX0lEID0gcHJvY2Vzcy5lbnYuQVBJX0lEO1xyXG4gIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5lZGFtYW0uY29tL2FwaS9yZWNpcGVzL3YyP3R5cGU9cHVibGljJnE9JHtjb250ZXh0LnF1ZXJ5LnRlcm19JmFwcF9pZD0ke0FQSV9JRH0mYXBwX2tleT0ke0FQSV9LRVl9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXN1bHRzOiBkYXRhID8gZGF0YSA6IG51bGwsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==