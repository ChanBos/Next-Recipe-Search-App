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
 * but displayed on the recipes page. Thus if there is an entry of the search term in the input 
 * Preventing the page from refreshing with the help of e.preventDefault(). 
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
          lineNumber: 81,
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
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIl0sIm5hbWVzIjpbInNlYXJjaENvbnRhaW5lciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJmb3JtQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzZWFyY2hJbnB1dFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiaWNvblN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsImN1cnNvciIsIlNlYXJjaEZvcm0iLCJvbklucHV0Q2hhbmdlIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJmYVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFVBQVEsRUFBRSxVQURZO0FBRXRCQyxLQUFHLEVBQUUsS0FGaUI7QUFHdEJDLE1BQUksRUFBRSxPQUhnQjtBQUl0QkMsWUFBVSxFQUFFO0FBSlUsQ0FBeEIsQyxDQU9BO0FBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxTQUFPLEVBQUUsTUFEVztBQUVwQkMsZUFBYSxFQUFFLEtBRks7QUFHcEJOLFVBQVEsRUFBRTtBQUhVLENBQXRCLEMsQ0FNQTs7QUFDQSxJQUFNTyxnQkFBZ0IsR0FBRztBQUN2QkMsUUFBTSxFQUFFLE1BRGU7QUFFdkJDLE9BQUssRUFBRSxHQUZnQjtBQUd2QkMsU0FBTyxFQUFFLENBSGM7QUFJdkJDLGlCQUFlLEVBQUU7QUFKTSxDQUF6QixDLENBT0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJaLFVBQVEsRUFBRSxVQURNO0FBRWhCRSxNQUFJLEVBQUUsT0FGVTtBQUdoQkQsS0FBRyxFQUFFLEtBSFc7QUFJaEJPLFFBQU0sRUFBRSxNQUpRO0FBS2hCSyxVQUFRLEVBQUUsTUFMTTtBQU1oQkMsT0FBSyxFQUFFLFNBTlM7QUFPaEJDLFFBQU0sRUFBRTtBQVBRLENBQWxCO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsYUFBYSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsSUFBSSxHQUFHUCxhQUFhLENBQUNRLE9BQWQsQ0FBc0JDLEtBQW5DOztBQUVBLFFBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFFREwsVUFBTSxDQUFDUSxJQUFQLHlCQUE2QkgsSUFBN0I7QUFDRCxHQVREOztBQVdBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxXQUFLLEVBQUV6QixlQUFaO0FBQUEsNkJBQ0UsOERBQUMsaURBQUQ7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQThCLGFBQUssRUFBRUssYUFBckM7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUscUJBQVcsRUFBQyxRQUZkO0FBR0UsbUJBQVMsRUFBQyxvQkFIWjtBQUlFLGVBQUssRUFBRUcsZ0JBSlQ7QUFLRSxhQUFHLEVBQUVVO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLDhEQUFDLDJFQUFEO0FBQ0UsY0FBSSxFQUFFVyx1RUFEUjtBQUVFLGVBQUssRUFBRWhCLFNBRlQ7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLG1CQUFTLEVBQUMsZUFKWjtBQUtFLFlBQUUsRUFBQyxRQUxMO0FBTUUsaUJBQU8sRUFBRSxpQkFBQ1UsQ0FBRDtBQUFBLG1CQUFPRCxNQUFNLENBQUNDLENBQUQsQ0FBYjtBQUFBO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBdENELEMsQ0F3Q0E7OztHQXhDTU4sVTtVQUVXSSxrRDs7O0tBRlhKLFU7QUF5Q04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGY1ZTk3NWZmM2MwYmE3ZDYwZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgUmVhY3QgbGlicmFyeSBhbmQgaG9va3MuXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBJbXBvcnRlZCB1c2VyUm91dGVyIGZyb20gTmV4dCdzIFJvdXRlci5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IEZvcm0sIEZvcm1Db250cm9sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBJbXBvcnRlZCBGb250IEF3ZXNvbWUgbGlicmFyeSBhbmQgaWNvbnMuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zLlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgU2VhcmNoRm9ybSBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IHRoZSBzZWFyY2ggY29udGFpbmVyJ3MgcG9zaXRpb24gdG8gYWJzb2x1dGUgYW5kIGFsaWduZWQgaXQgdG8gdGhlIHRvcCBhbmQgbGVmdC4gQWxzbyBzZXQgdGhlIGxlZnQgbWFyZ2luIHRvIGNvdW50ZXIgdGhlIGxlZnQgcG9zaXRpb24uXHJcbmNvbnN0IHNlYXJjaENvbnRhaW5lciA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCI2OCVcIixcclxuICBsZWZ0OiBcIjQ1LjUlXCIsXHJcbiAgbWFyZ2luTGVmdDogXCItMTAwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCBmb3IgdGhlIGZvcm0gY29udGFpbmVyIHRvIGRpc3BsYXkgYXMgZmxleCBhbmQgdGhlIGRpcmVjdGlvbiB0byByb3cuIEFsc28gc2V0IHRoZSBwb3NpdGlvbiB0byByZWxhdGl2ZSB0byBhbGxvdyB0aGUgaWNvbiB0byBhcHBlYXIgaW5zaWRlXHJcbi8vIHRoZSBpbnB1dCBhcmVhLlxyXG5jb25zdCBmb3JtQ29udGFpbmVyID0ge1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpLCB0aGUgcGFkZGluZyBhbmQgdGhlIGJhY2tncm91bmQgY29sb3VyIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxyXG5jb25zdCBzZWFyY2hJbnB1dFN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIzNXB4XCIsXHJcbiAgd2lkdGg6IDMwMCxcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGljb24ncyBwb3NpdGlvbiB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIGFuZCBsZWZ0LiBBbHNvIHNldCB0aGUgaGVpZ2h0LCB0aGUgZm9udCBzaXplIGFuZCBjb2xvdXIgYW5kIGZvciB0aGUgY3Vyc29yIHRvXHJcbi8vIHRvIGEgcG9pbnRlciBvbmNlIGl0IGhvdmVycyBvdmVyIHRoZSBpY29uLlxyXG5jb25zdCBpY29uU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBsZWZ0OiBcIjI3NXB4XCIsXHJcbiAgdG9wOiBcIjhweFwiLFxyXG4gIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZXMgb2YgdGhlIGlucHV0IHN0YXRlLlxyXG4gKiBVdGlsaXppbmcgdXNlUm91dGVyKCkgdG8gcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2UgdGhlIHJvdXRlIHRvIHRoZSByZWNpcGUgcGFnZSBvbmNlIGEgc2VhcmNoIHRlcm0gaGFzIGJlZW4gZW50ZXJlZC4gVGhlIGRhdGEgaXMgZmV0Y2hlZCBoZXJlXHJcbiAqIGJ1dCBkaXNwbGF5ZWQgb24gdGhlIHJlY2lwZXMgcGFnZS4gVGh1cyBpZiB0aGVyZSBpcyBhbiBlbnRyeSBvZiB0aGUgc2VhcmNoIHRlcm0gaW4gdGhlIGlucHV0IFxyXG4gKiBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVmcmVzaGluZyB3aXRoIHRoZSBoZWxwIG9mIGUucHJldmVudERlZmF1bHQoKS4gXHJcbiAqL1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRlcm0gPSBvbklucHV0Q2hhbmdlLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChgL3JlY2lwZXM/dGVybT0ke3Rlcm19YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3NlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIiBzdHlsZT17Zm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgbXItc20tMlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXtzZWFyY2hJbnB1dFN0eWxlfVxyXG4gICAgICAgICAgICByZWY9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICBpY29uPXtmYVNlYXJjaH1cclxuICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZX1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIlxyXG4gICAgICAgICAgICBpZD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZWFyY2goZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgdGhlIFJlY2lwZUxpc3RpbmdzIHRvIFNlYXJjaEZvcm0uXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=