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
 * 
 */

var Recipes = function Recipes(_ref) {
  _s();

  var results = _ref.results;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [" ", router.query.term, " - Food Search "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy5qcyJdLCJuYW1lcyI6WyJSZWNpcGVzIiwicmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsd0JBQVNELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRSw4REFBQyw4REFBRDtBQUFlLGFBQU8sRUFBRUo7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FkRCxDLENBZ0JBOzs7R0FoQk1ELE87VUFDV0csa0Q7OztLQURYSCxPOztBQWlCTiwrREFBZUEsT0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy4wNjJmYmYyMTc4NzE4M2NhZjQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCByZWFjdCBsaWJyYXJpZXMgYW5kIGhvb2tzLlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gSW1wb3J0ZWQgQXBwRGlzcGxheSB0byBzZXQgdGhlIGhvbGlzdGljIHN0eWxlIG9mIHRoaXMgcGFnZS5cclxuaW1wb3J0IEFwcERpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwRGlzcGxheVwiO1xyXG4vLyBJbXBvcnRpbmcgdGhlIE5leHQgYnVpbHQtaW4gY29tcG9uZW50IHRvIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgaGVhZCBvZiB0aGUgcGFnZS5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLyBJbXBvcnRlZCBjb21wb25lbnRzLlxyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG4vKipcclxuICogXHJcbiAqL1xyXG5cclxuY29uc3QgUmVjaXBlcyA9ICh7IHJlc3VsdHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFwcERpc3BsYXkgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+IHtyb3V0ZXIucXVlcnkudGVybX0gLSBGb29kIFNlYXJjaCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTZWFyY2hSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCByZWNpcGVzIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkLlxyXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uIHRvIGZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEVkYW1hbSBBUEkuXHJcbiAqIFByb2Nlc3NpbmcgdGhlIEFQSSBpZCBhbmQga2V5IGZyb20gdGhlIC5lbnYubG9jYWwgZmlsZS4gSW5zZXJ0ZWQgdGhlc2UgaW50byB0aGUgQVBJJ3MgdXJsLlxyXG4gKiBBd2FpdGluZyB0aGUgZGF0YSBmcm9tIHRoZSBBUEkuIFdpbGwgYmUgcmV0dXJuZWQgb24gdGhpcyBwYWdlIGlmIGEgc2VhcmNoIHRlcm0gaGFzIGJlZW4gZW50ZXJlZCB2aWEgdGhlIGhvbWUgcGFnZS5cclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBBUElfSUQgPSBwcm9jZXNzLmVudi5BUElfSUQ7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL3JlY2lwZXMvdjI/dHlwZT1wdWJsaWMmcT0ke2NvbnRleHQucXVlcnkudGVybX0mYXBwX2lkPSR7QVBJX0lEfSZhcHBfa2V5PSR7QVBJX0tFWX1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc3VsdHM6IGRhdGEgPyBkYXRhIDogbnVsbCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9