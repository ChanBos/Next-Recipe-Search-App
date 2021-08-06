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
 * but displayed on the recipes page. Thus if there is an entry of the search term in the input element the results will be returned.
 * Preventing the page from refreshing with the help of e.preventDefault().
 * Passed the props on the input and the button elements.
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
}; // Exported the SearchForm to the index/ home page.


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIl0sIm5hbWVzIjpbInNlYXJjaENvbnRhaW5lciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJmb3JtQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzZWFyY2hJbnB1dFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiaWNvblN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsImN1cnNvciIsIlNlYXJjaEZvcm0iLCJvbklucHV0Q2hhbmdlIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVybSIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJmYVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFVBQVEsRUFBRSxVQURZO0FBRXRCQyxLQUFHLEVBQUUsS0FGaUI7QUFHdEJDLE1BQUksRUFBRSxPQUhnQjtBQUl0QkMsWUFBVSxFQUFFO0FBSlUsQ0FBeEIsQyxDQU9BO0FBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxTQUFPLEVBQUUsTUFEVztBQUVwQkMsZUFBYSxFQUFFLEtBRks7QUFHcEJOLFVBQVEsRUFBRTtBQUhVLENBQXRCLEMsQ0FNQTs7QUFDQSxJQUFNTyxnQkFBZ0IsR0FBRztBQUN2QkMsUUFBTSxFQUFFLE1BRGU7QUFFdkJDLE9BQUssRUFBRSxHQUZnQjtBQUd2QkMsU0FBTyxFQUFFLENBSGM7QUFJdkJDLGlCQUFlLEVBQUU7QUFKTSxDQUF6QixDLENBT0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJaLFVBQVEsRUFBRSxVQURNO0FBRWhCRSxNQUFJLEVBQUUsT0FGVTtBQUdoQkQsS0FBRyxFQUFFLEtBSFc7QUFJaEJPLFFBQU0sRUFBRSxNQUpRO0FBS2hCSyxVQUFRLEVBQUUsTUFMTTtBQU1oQkMsT0FBSyxFQUFFLFNBTlM7QUFPaEJDLFFBQU0sRUFBRTtBQVBRLENBQWxCO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxhQUFhLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUdQLGFBQWEsQ0FBQ1EsT0FBZCxDQUFzQkMsS0FBbkM7O0FBRUEsUUFBSSxDQUFDRixJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVETCxVQUFNLENBQUNRLElBQVAseUJBQTZCSCxJQUE3QjtBQUNELEdBVEQ7O0FBV0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBRXpCLGVBQVo7QUFBQSw2QkFDRSw4REFBQyxpREFBRDtBQUFNLGlCQUFTLEVBQUMsYUFBaEI7QUFBOEIsYUFBSyxFQUFFSyxhQUFyQztBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLFFBRmQ7QUFHRSxtQkFBUyxFQUFDLG9CQUhaO0FBSUUsZUFBSyxFQUFFRyxnQkFKVDtBQUtFLGFBQUcsRUFBRVU7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUUsOERBQUMsMkVBQUQ7QUFDRSxjQUFJLEVBQUVXLHVFQURSO0FBRUUsZUFBSyxFQUFFaEIsU0FGVDtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsbUJBQVMsRUFBQyxlQUpaO0FBS0UsWUFBRSxFQUFDLFFBTEw7QUFNRSxpQkFBTyxFQUFFLGlCQUFDVSxDQUFEO0FBQUEsbUJBQU9ELE1BQU0sQ0FBQ0MsQ0FBRCxDQUFiO0FBQUE7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0F0Q0QsQyxDQXdDQTs7O0dBeENNTixVO1VBRVdJLGtEOzs7S0FGWEosVTtBQXlDTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjNlOGFlNmY3N2FhMTBkZGM5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBSZWFjdCBsaWJyYXJ5IGFuZCBob29rcy5cclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIEltcG9ydGVkIHVzZXJSb3V0ZXIgZnJvbSBOZXh0J3MgUm91dGVyLlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgRm9ybSwgRm9ybUNvbnRyb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBTZWFyY2hGb3JtIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXQgdGhlIHNlYXJjaCBjb250YWluZXIncyBwb3NpdGlvbiB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIGFuZCBsZWZ0LiBBbHNvIHNldCB0aGUgbGVmdCBtYXJnaW4gdG8gY291bnRlciB0aGUgbGVmdCBwb3NpdGlvbi5cclxuY29uc3Qgc2VhcmNoQ29udGFpbmVyID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjY4JVwiLFxyXG4gIGxlZnQ6IFwiNDUuNSVcIixcclxuICBtYXJnaW5MZWZ0OiBcIi0xMDBweFwiLFxyXG59O1xyXG5cclxuLy8gU2V0IGZvciB0aGUgZm9ybSBjb250YWluZXIgdG8gZGlzcGxheSBhcyBmbGV4IGFuZCB0aGUgZGlyZWN0aW9uIHRvIHJvdy4gQWxzbyBzZXQgdGhlIHBvc2l0aW9uIHRvIHJlbGF0aXZlIHRvIGFsbG93IHRoZSBpY29uIHRvIGFwcGVhciBpbnNpZGVcclxuLy8gdGhlIGlucHV0IGFyZWEuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCksIHRoZSBwYWRkaW5nIGFuZCB0aGUgYmFja2dyb3VuZCBjb2xvdXIgb2YgdGhlIGlucHV0IGVsZW1lbnQuXHJcbmNvbnN0IHNlYXJjaElucHV0U3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjM1cHhcIixcclxuICB3aWR0aDogMzAwLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgaWNvbidzIHBvc2l0aW9uIHRvIGFic29sdXRlIGFuZCBhbGlnbmVkIGl0IHRvIHRoZSB0b3AgYW5kIGxlZnQuIEFsc28gc2V0IHRoZSBoZWlnaHQsIHRoZSBmb250IHNpemUgYW5kIGNvbG91ciBhbmQgZm9yIHRoZSBjdXJzb3IgdG9cclxuLy8gdG8gYSBwb2ludGVyIG9uY2UgaXQgaG92ZXJzIG92ZXIgdGhlIGljb24uXHJcbmNvbnN0IGljb25TdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGxlZnQ6IFwiMjc1cHhcIixcclxuICB0b3A6IFwiOHB4XCIsXHJcbiAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgY29sb3I6IFwiIzgwODA4MFwiLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBpbml0aWFsIHN0YXRlcyBvZiB0aGUgaW5wdXQgc3RhdGUuXHJcbiAqIFV0aWxpemluZyB1c2VSb3V0ZXIoKSB0byBwcm9ncmFtbWF0aWNhbGx5IGNoYW5nZSB0aGUgcm91dGUgdG8gdGhlIHJlY2lwZSBwYWdlIG9uY2UgYSBzZWFyY2ggdGVybSBoYXMgYmVlbiBlbnRlcmVkLiBUaGUgZGF0YSBpcyBmZXRjaGVkIGhlcmVcclxuICogYnV0IGRpc3BsYXllZCBvbiB0aGUgcmVjaXBlcyBwYWdlLiBUaHVzIGlmIHRoZXJlIGlzIGFuIGVudHJ5IG9mIHRoZSBzZWFyY2ggdGVybSBpbiB0aGUgaW5wdXQgZWxlbWVudCB0aGUgcmVzdWx0cyB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVmcmVzaGluZyB3aXRoIHRoZSBoZWxwIG9mIGUucHJldmVudERlZmF1bHQoKS5cclxuICogUGFzc2VkIHRoZSBwcm9wcyBvbiB0aGUgaW5wdXQgYW5kIHRoZSBidXR0b24gZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGVybSA9IG9uSW5wdXRDaGFuZ2UuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5wdXNoKGAvcmVjaXBlcz90ZXJtPSR7dGVybX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBzdHlsZT17c2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiIHN0eWxlPXtmb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBtci1zbS0yXCJcclxuICAgICAgICAgICAgc3R5bGU9e3NlYXJjaElucHV0U3R5bGV9XHJcbiAgICAgICAgICAgIHJlZj17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgIGljb249e2ZhU2VhcmNofVxyXG4gICAgICAgICAgICBzdHlsZT17aWNvblN0eWxlfVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNlYXJjaChlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCB0aGUgU2VhcmNoRm9ybSB0byB0aGUgaW5kZXgvIGhvbWUgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==