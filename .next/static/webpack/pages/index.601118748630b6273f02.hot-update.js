self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\SearchForm.js",
    _this = undefined,
    _s = $RefreshSig$();

// Imported the Link API to support client-side navigation.
 // Imported React library and hooks.

 // Imported userRouter from Next's Router.

 // Imported components from React Bootstrap.

 // Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.




/**
 * Styled the SearchForm component.
 */
// Set the search container's position to absolute and aligned it to the top and left. Also set the left margin to counter the left position.

var searchContainer = {
  position: "absolute",
  top: "68%",
  left: "45.5%",
  marginLeft: "-100px"
}; // Set for the form container to display as flex and the direction to row. Also set the position to relative to allow the icon to appear inside
// the input area.

var formContainer = {
  display: "flex",
  flexDirection: "row",
  position: "relative"
}; // Set the size (height x width), the padding and the background colour of the input element.

var searchInputStyle = {
  height: "35px",
  width: 300,
  padding: 5,
  backgroundColor: "#ffffff"
}; // Set the icon's position to absolute and aligned it to the top and left. Also set the height, the font size and colour and for the cursor to
// to a pointer once it hovers over the icon.

var iconStyle = {
  position: "absolute",
  left: "275px",
  top: "8px",
  height: "20px",
  fontSize: "1rem",
  color: "#808080",
  cursor: "pointer"
};
/**
 * Set the initial states of the input state.
 * Utilizing useRouter() to programmatically change the route to the recipe page once a search term has been entered. The data is fetched here
 * but disp 
 */

var SearchForm = function SearchForm() {
  _s();

  var onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var search = function search(e) {
    e.preventDefault();
    var term = onInputChange.current.value;

    if (!term) {
      return;
    }

    router.push("/recipes?term=".concat(term));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: searchContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {
        className: "search-form",
        style: formContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
          type: "text",
          placeholder: "Search",
          className: "search-bar mr-sm-2",
          style: searchInputStyle,
          ref: onInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSearch,
          style: iconStyle,
          type: "submit",
          className: "search-button",
          id: "search",
          onClick: function onClick(e) {
            return search(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
}; // Exported the RecipeListings to SearchForm.


_s(SearchForm, "s3QeIKfXfP7nkoF8KVwWFFdLDVU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = SearchForm;
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

var _c;

$RefreshReg$(_c, "SearchForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIl0sIm5hbWVzIjpbInNlYXJjaENvbnRhaW5lciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJmb3JtQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzZWFyY2hJbnB1dFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiaWNvblN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsImN1cnNvciIsIlNlYXJjaEZvcm0iLCJvbklucHV0Q2hhbmdlIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJmYVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFVBQVEsRUFBRSxVQURZO0FBRXRCQyxLQUFHLEVBQUUsS0FGaUI7QUFHdEJDLE1BQUksRUFBRSxPQUhnQjtBQUl0QkMsWUFBVSxFQUFFO0FBSlUsQ0FBeEIsQyxDQU9BO0FBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxTQUFPLEVBQUUsTUFEVztBQUVwQkMsZUFBYSxFQUFFLEtBRks7QUFHcEJOLFVBQVEsRUFBRTtBQUhVLENBQXRCLEMsQ0FNQTs7QUFDQSxJQUFNTyxnQkFBZ0IsR0FBRztBQUN2QkMsUUFBTSxFQUFFLE1BRGU7QUFFdkJDLE9BQUssRUFBRSxHQUZnQjtBQUd2QkMsU0FBTyxFQUFFLENBSGM7QUFJdkJDLGlCQUFlLEVBQUU7QUFKTSxDQUF6QixDLENBT0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJaLFVBQVEsRUFBRSxVQURNO0FBRWhCRSxNQUFJLEVBQUUsT0FGVTtBQUdoQkQsS0FBRyxFQUFFLEtBSFc7QUFJaEJPLFFBQU0sRUFBRSxNQUpRO0FBS2hCSyxVQUFRLEVBQUUsTUFMTTtBQU1oQkMsT0FBSyxFQUFFLFNBTlM7QUFPaEJDLFFBQU0sRUFBRTtBQVBRLENBQWxCO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLGFBQWEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR1AsYUFBYSxDQUFDUSxPQUFkLENBQXNCQyxLQUFuQzs7QUFFQSxRQUFJLENBQUNGLElBQUwsRUFBVztBQUNUO0FBQ0Q7O0FBRURMLFVBQU0sQ0FBQ1EsSUFBUCx5QkFBNkJILElBQTdCO0FBQ0QsR0FURDs7QUFXQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFekIsZUFBWjtBQUFBLDZCQUNFLDhEQUFDLGlEQUFEO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUE4QixhQUFLLEVBQUVLLGFBQXJDO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsUUFGZDtBQUdFLG1CQUFTLEVBQUMsb0JBSFo7QUFJRSxlQUFLLEVBQUVHLGdCQUpUO0FBS0UsYUFBRyxFQUFFVTtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRSw4REFBQywyRUFBRDtBQUNFLGNBQUksRUFBRVcsdUVBRFI7QUFFRSxlQUFLLEVBQUVoQixTQUZUO0FBR0UsY0FBSSxFQUFDLFFBSFA7QUFJRSxtQkFBUyxFQUFDLGVBSlo7QUFLRSxZQUFFLEVBQUMsUUFMTDtBQU1FLGlCQUFPLEVBQUUsaUJBQUNVLENBQUQ7QUFBQSxtQkFBT0QsTUFBTSxDQUFDQyxDQUFELENBQWI7QUFBQTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXRDRCxDLENBd0NBOzs7R0F4Q01OLFU7VUFFV0ksa0Q7OztLQUZYSixVO0FBeUNOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwMTExODc0ODYzMGI2MjczZjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIFJlYWN0IGxpYnJhcnkgYW5kIGhvb2tzLlxyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gSW1wb3J0ZWQgdXNlclJvdXRlciBmcm9tIE5leHQncyBSb3V0ZXIuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBGb3JtLCBGb3JtQ29udHJvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gSW1wb3J0ZWQgRm9udCBBd2Vzb21lIGxpYnJhcnkgYW5kIGljb25zLiBBbHNvIGFkZGVkIFwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcIiB0byBhbGxvdyBzdHlsaW5nIHRoZSBpY29ucy5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIFNlYXJjaEZvcm0gY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbi8vIFNldCB0aGUgc2VhcmNoIGNvbnRhaW5lcidzIHBvc2l0aW9uIHRvIGFic29sdXRlIGFuZCBhbGlnbmVkIGl0IHRvIHRoZSB0b3AgYW5kIGxlZnQuIEFsc28gc2V0IHRoZSBsZWZ0IG1hcmdpbiB0byBjb3VudGVyIHRoZSBsZWZ0IHBvc2l0aW9uLlxyXG5jb25zdCBzZWFyY2hDb250YWluZXIgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICB0b3A6IFwiNjglXCIsXHJcbiAgbGVmdDogXCI0NS41JVwiLFxyXG4gIG1hcmdpbkxlZnQ6IFwiLTEwMHB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgZm9yIHRoZSBmb3JtIGNvbnRhaW5lciB0byBkaXNwbGF5IGFzIGZsZXggYW5kIHRoZSBkaXJlY3Rpb24gdG8gcm93LiBBbHNvIHNldCB0aGUgcG9zaXRpb24gdG8gcmVsYXRpdmUgdG8gYWxsb3cgdGhlIGljb24gdG8gYXBwZWFyIGluc2lkZVxyXG4vLyB0aGUgaW5wdXQgYXJlYS5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IHtcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHNpemUgKGhlaWdodCB4IHdpZHRoKSwgdGhlIHBhZGRpbmcgYW5kIHRoZSBiYWNrZ3JvdW5kIGNvbG91ciBvZiB0aGUgaW5wdXQgZWxlbWVudC5cclxuY29uc3Qgc2VhcmNoSW5wdXRTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMzVweFwiLFxyXG4gIHdpZHRoOiAzMDAsXHJcbiAgcGFkZGluZzogNSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBpY29uJ3MgcG9zaXRpb24gdG8gYWJzb2x1dGUgYW5kIGFsaWduZWQgaXQgdG8gdGhlIHRvcCBhbmQgbGVmdC4gQWxzbyBzZXQgdGhlIGhlaWdodCwgdGhlIGZvbnQgc2l6ZSBhbmQgY29sb3VyIGFuZCBmb3IgdGhlIGN1cnNvciB0b1xyXG4vLyB0byBhIHBvaW50ZXIgb25jZSBpdCBob3ZlcnMgb3ZlciB0aGUgaWNvbi5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgbGVmdDogXCIyNzVweFwiLFxyXG4gIHRvcDogXCI4cHhcIixcclxuICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICBjb2xvcjogXCIjODA4MDgwXCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGluaXRpYWwgc3RhdGVzIG9mIHRoZSBpbnB1dCBzdGF0ZS5cclxuICogVXRpbGl6aW5nIHVzZVJvdXRlcigpIHRvIHByb2dyYW1tYXRpY2FsbHkgY2hhbmdlIHRoZSByb3V0ZSB0byB0aGUgcmVjaXBlIHBhZ2Ugb25jZSBhIHNlYXJjaCB0ZXJtIGhhcyBiZWVuIGVudGVyZWQuIFRoZSBkYXRhIGlzIGZldGNoZWQgaGVyZVxyXG4gKiBidXQgZGlzcCBcclxuICovXHJcblxyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGVybSA9IG9uSW5wdXRDaGFuZ2UuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5wdXNoKGAvcmVjaXBlcz90ZXJtPSR7dGVybX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBzdHlsZT17c2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiIHN0eWxlPXtmb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBtci1zbS0yXCJcclxuICAgICAgICAgICAgc3R5bGU9e3NlYXJjaElucHV0U3R5bGV9XHJcbiAgICAgICAgICAgIHJlZj17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgIGljb249e2ZhU2VhcmNofVxyXG4gICAgICAgICAgICBzdHlsZT17aWNvblN0eWxlfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNlYXJjaChlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCB0aGUgUmVjaXBlTGlzdGluZ3MgdG8gU2VhcmNoRm9ybS5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==