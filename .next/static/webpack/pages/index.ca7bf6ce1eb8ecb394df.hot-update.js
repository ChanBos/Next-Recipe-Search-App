self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AppDisplay.js":
/*!**********************************!*\
  !*** ./components/AppDisplay.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\AppDisplay.js",
    _this = undefined;

// Imported the Link API to support client-side navigation.
 // Importing the Next built-in component to append elements to the head of the page.


/**
 * Created a global style.
 */
// Set the application's margins, padding and font size and families. Also set for the vertical and horizontal overflow to be hidden.

var appDisplayStyle = {
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  overflowY: "hidden",
  fontSize: 15,
  fontFamily: "Staatliches, Trebuchet, Helvetica"
};
/**
 * Added the links to utilize React Bootstrap, Google font and the Edamam .
 * @param {*} props Children pages for appDisplayStyle to render - index, recipes.
 * @returns The application's general styling, with appended links, for use in the pages.
 */

var AppDisplay = function AppDisplay(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://developer.edamam.com/attribution/badge.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: appDisplayStyle,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, _this);
}; // Exporting AppDisplay for use on the pages.


_c = AppDisplay;
/* harmony default export */ __webpack_exports__["default"] = (AppDisplay);

var _c;

$RefreshReg$(_c, "AppDisplay");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBEaXNwbGF5LmpzIl0sIm5hbWVzIjpbImFwcERpc3BsYXlTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJBcHBEaXNwbGF5IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxDQURjO0FBRXRCQyxTQUFPLEVBQUUsQ0FGYTtBQUd0QkMsV0FBUyxFQUFFLFFBSFc7QUFJdEJDLFdBQVMsRUFBRSxRQUpXO0FBS3RCQyxVQUFRLEVBQUUsRUFMWTtBQU10QkMsWUFBVSxFQUFFO0FBTlUsQ0FBeEI7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxzQkFDakI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsdUVBRlA7QUFHRSxpQkFBUyxFQUFDLHlFQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFXRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWNFO0FBQUssV0FBSyxFQUFFUixlQUFaO0FBQUEsZ0JBQThCUSxLQUFLLENBQUNDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUI7QUFBQSxDQUFuQixDLENBbUJBOzs7S0FuQk1GLFU7QUFvQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2E3YmY2Y2UxZWI4ZWNiMzk0ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0aW5nIHRoZSBOZXh0IGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGhlYWQgb2YgdGhlIHBhZ2UuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZ2xvYmFsIHN0eWxlLlxyXG4gKi9cclxuXHJcbi8vIFNldCB0aGUgYXBwbGljYXRpb24ncyBtYXJnaW5zLCBwYWRkaW5nIGFuZCBmb250IHNpemUgYW5kIGZhbWlsaWVzLiBBbHNvIHNldCBmb3IgdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIG92ZXJmbG93IHRvIGJlIGhpZGRlbi5cclxuY29uc3QgYXBwRGlzcGxheVN0eWxlID0ge1xyXG4gIG1hcmdpbjogMCxcclxuICBwYWRkaW5nOiAwLFxyXG4gIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXHJcbiAgZm9udFNpemU6IDE1LFxyXG4gIGZvbnRGYW1pbHk6IFwiU3RhYXRsaWNoZXMsIFRyZWJ1Y2hldCwgSGVsdmV0aWNhXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQWRkZWQgdGhlIGxpbmtzIHRvIHV0aWxpemUgUmVhY3QgQm9vdHN0cmFwLCBHb29nbGUgZm9udCBhbmQgdGhlIEVkYW1hbSAuXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHMgQ2hpbGRyZW4gcGFnZXMgZm9yIGFwcERpc3BsYXlTdHlsZSB0byByZW5kZXIgLSBpbmRleCwgcmVjaXBlcy5cclxuICogQHJldHVybnMgVGhlIGFwcGxpY2F0aW9uJ3MgZ2VuZXJhbCBzdHlsaW5nLCB3aXRoIGFwcGVuZGVkIGxpbmtzLCBmb3IgdXNlIGluIHRoZSBwYWdlcy5cclxuICovXHJcblxyXG5jb25zdCBBcHBEaXNwbGF5ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TdGFhdGxpY2hlc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wZXIuZWRhbWFtLmNvbS9hdHRyaWJ1dGlvbi9iYWRnZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBzdHlsZT17YXBwRGlzcGxheVN0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG4vLyBFeHBvcnRpbmcgQXBwRGlzcGxheSBmb3IgdXNlIG9uIHRoZSBwYWdlcy5cclxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGxheTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==