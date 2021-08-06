self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\Footer.js",
    _this = undefined;

// Imported the Link API to support client-side navigation.
 // Imported components from React Bootstrap.

 // Imported icons from FontAwesome. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons




var footerStyle = {
  height: "auto",
  width: "auto",
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
  padding: 5,
  backgroundColor: "#393d49"
};
var edamamStyle = {
  width: "200px"
};
var footerTextStyle = {
  margin: "5px auto 5px 345px",
  paddingTop: "5px",
  width: "306px",
  color: "#ffffff"
};
var heartStyle = {
  marginRight: "5px",
  color: "#800000",
  filter: "drop-shadow(1px 2px 2px #000000)"
};
var scrollButtonStyle = {
  marginBottom: "-10px",
  marginRight: "35px",
  fontSize: "1.1rem",
  cursor: "pointer",
  color: "#ffffff"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colours of the scroll icon once hovered over and to change 
// back the colour when the links are no longer hovered over.

var changeFontColor = function changeFontColor(e) {
  e.target.style.color = "#f1b374";
};

var changeBackFontColor = function changeBackFontColor(e) {
  e.target.style.color = "#ffffff";
};
/**
 * Created a footer for the application that displays text in a header format and a "Scroll to Top" button.
 * Also included the 
 * Created a function that, once the "Scroll to Top" button is clicked on, will scroll the page smoothly to the top.
 * @returns Footer with header text and a "Scroll to Top" button.
 */


var Footer = function Footer() {
  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: footerStyle,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
      fluid: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: edamamStyle,
          id: "edamam-badge",
          "data-color": "transparent",
          "z-index": "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          style: footerTextStyle,
          children: ["CREATED WITH ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHeart,
            style: heartStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 26
          }, _this), "BY CHANELLE B\xD6SIGER"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDoubleUp,
            onClick: scrollToTop,
            title: "Scroll to Top",
            style: scrollButtonStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
}; // Exported footer.js to App.js.


_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSxNQURVO0FBRWxCQyxPQUFLLEVBQUUsTUFGVztBQUdsQkMsU0FBTyxFQUFFLE1BSFM7QUFJbEJDLGVBQWEsRUFBRSxLQUpHO0FBS2xCQyxXQUFTLEVBQUUsTUFMTztBQU1sQkMsU0FBTyxFQUFFLENBTlM7QUFPbEJDLGlCQUFlLEVBQUU7QUFQQyxDQUFwQjtBQVVBLElBQU1DLFdBQVcsR0FBRztBQUNsQk4sT0FBSyxFQUFFO0FBRFcsQ0FBcEI7QUFJQSxJQUFNTyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxvQkFEYztBQUV0QkMsWUFBVSxFQUFFLEtBRlU7QUFHdEJULE9BQUssRUFBRSxPQUhlO0FBSXRCVSxPQUFLLEVBQUU7QUFKZSxDQUF4QjtBQU9BLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsYUFBVyxFQUFFLEtBREk7QUFFakJGLE9BQUssRUFBRSxTQUZVO0FBR2pCRyxRQUFNLEVBQUU7QUFIUyxDQUFuQjtBQU1BLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsT0FEVTtBQUV4QkgsYUFBVyxFQUFFLE1BRlc7QUFHeEJJLFVBQVEsRUFBRSxRQUhjO0FBSXhCQyxRQUFNLEVBQUUsU0FKZ0I7QUFLeEJQLE9BQUssRUFBRTtBQUxpQixDQUExQixDLENBUUE7QUFDQTs7QUFDQSxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQ7O0FBSUEsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDSCxDQUFELEVBQU87QUFDakNBLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVYLEtBQWYsR0FBdUIsU0FBdkI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBRW5CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxjQUFRLEVBQUU7QUFGSSxLQUFoQjtBQUlELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU5QixXQUFaO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFBVyxXQUFLLE1BQWhCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUNFLGVBQUssRUFBRVEsV0FEVDtBQUVFLFlBQUUsRUFBQyxjQUZMO0FBR0Usd0JBQVcsYUFIYjtBQUlFLHFCQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUksZUFBSyxFQUFFQyxlQUFYO0FBQUEsbURBQ2UsOERBQUMsMkVBQUQ7QUFBaUIsZ0JBQUksRUFBRXNCLHNFQUF2QjtBQUFnQyxpQkFBSyxFQUFFbEI7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRTtBQUFBLGlDQUNFLDhEQUFDLDJFQUFEO0FBQ0UsZ0JBQUksRUFBRW1CLDhFQURSO0FBRUUsbUJBQU8sRUFBRU4sV0FGWDtBQUdFLGlCQUFLLEVBQUMsZUFIUjtBQUlFLGlCQUFLLEVBQUVWLGlCQUpUO0FBS0UsdUJBQVcsRUFBRUksZUFMZjtBQU1FLHNCQUFVLEVBQUVJO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXJDRCxDLENBdUNBOzs7S0F2Q01DLE07QUF3Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy5iYTRhNDdjMGNkZGY3NzRjNWY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gSW1wb3J0ZWQgaWNvbnMgZnJvbSBGb250QXdlc29tZS4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnNcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFuZ2xlRG91YmxlVXAsIGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XHJcblxyXG5jb25zdCBmb290ZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgcGFkZGluZzogNSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG59O1xyXG5cclxuY29uc3QgZWRhbWFtU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiMjAwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGZvb3RlclRleHRTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiNXB4IGF1dG8gNXB4IDM0NXB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCI1cHhcIixcclxuICB3aWR0aDogXCIzMDZweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbmNvbnN0IGhlYXJ0U3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgY29sb3I6IFwiIzgwMDAwMFwiLFxyXG4gIGZpbHRlcjogXCJkcm9wLXNoYWRvdygxcHggMnB4IDJweCAjMDAwMDAwKVwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2Nyb2xsQnV0dG9uU3R5bGUgPSB7XHJcbiAgbWFyZ2luQm90dG9tOiBcIi0xMHB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiMzVweFwiLFxyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuLy8gQ3JlYXRlZCBvbk1vdXNlT3ZlciBhbmQgb25Nb3VzZU91dCBldmVudCBoYW5kbGVyIGZ1bmN0aW9ucyB0byBjaGFuZ2UgdGhlIGZvbnQgY29sb3VycyBvZiB0aGUgc2Nyb2xsIGljb24gb25jZSBob3ZlcmVkIG92ZXIgYW5kIHRvIGNoYW5nZSBcclxuLy8gYmFjayB0aGUgY29sb3VyIHdoZW4gdGhlIGxpbmtzIGFyZSBubyBsb25nZXIgaG92ZXJlZCBvdmVyLlxyXG5jb25zdCBjaGFuZ2VGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjZjFiMzc0XCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYSBmb290ZXIgZm9yIHRoZSBhcHBsaWNhdGlvbiB0aGF0IGRpc3BsYXlzIHRleHQgaW4gYSBoZWFkZXIgZm9ybWF0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi5cclxuICogQWxzbyBpbmNsdWRlZCB0aGUgXHJcbiAqIENyZWF0ZWQgYSBmdW5jdGlvbiB0aGF0LCBvbmNlIHRoZSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24gaXMgY2xpY2tlZCBvbiwgd2lsbCBzY3JvbGwgdGhlIHBhZ2Ugc21vb3RobHkgdG8gdGhlIHRvcC5cclxuICogQHJldHVybnMgRm9vdGVyIHdpdGggaGVhZGVyIHRleHQgYW5kIGEgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uLlxyXG4gKi9cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17ZWRhbWFtU3R5bGV9XHJcbiAgICAgICAgICAgIGlkPVwiZWRhbWFtLWJhZGdlXCJcclxuICAgICAgICAgICAgZGF0YS1jb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgei1pbmRleD1cIjFcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGg2IHN0eWxlPXtmb290ZXJUZXh0U3R5bGV9PlxyXG4gICAgICAgICAgICBDUkVBVEVEIFdJVEggPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSBzdHlsZT17aGVhcnRTdHlsZX0gLz5cclxuICAgICAgICAgICAgQlkgQ0hBTkVMTEUgQsOWU0lHRVJcclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFBbmdsZURvdWJsZVVwfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2Nyb2xsIHRvIFRvcFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3Njcm9sbEJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBmb290ZXIuanMgdG8gQXBwLmpzLlxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=