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
 * Created a footer for the application that displays text in a header format and a "Scroll to Top" button. Also included the Edamam API's logo.
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
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          style: footerTextStyle,
          children: ["CREATED WITH ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHeart,
            style: heartStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 26
          }, _this), "BY CHANELLE B\xD6SIGER"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
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
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSxNQURVO0FBRWxCQyxPQUFLLEVBQUUsTUFGVztBQUdsQkMsU0FBTyxFQUFFLE1BSFM7QUFJbEJDLGVBQWEsRUFBRSxLQUpHO0FBS2xCQyxXQUFTLEVBQUUsTUFMTztBQU1sQkMsU0FBTyxFQUFFLENBTlM7QUFPbEJDLGlCQUFlLEVBQUU7QUFQQyxDQUFwQjtBQVVBLElBQU1DLFdBQVcsR0FBRztBQUNsQk4sT0FBSyxFQUFFO0FBRFcsQ0FBcEI7QUFJQSxJQUFNTyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxvQkFEYztBQUV0QkMsWUFBVSxFQUFFLEtBRlU7QUFHdEJULE9BQUssRUFBRSxPQUhlO0FBSXRCVSxPQUFLLEVBQUU7QUFKZSxDQUF4QjtBQU9BLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsYUFBVyxFQUFFLEtBREk7QUFFakJGLE9BQUssRUFBRSxTQUZVO0FBR2pCRyxRQUFNLEVBQUU7QUFIUyxDQUFuQjtBQU1BLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsT0FEVTtBQUV4QkgsYUFBVyxFQUFFLE1BRlc7QUFHeEJJLFVBQVEsRUFBRSxRQUhjO0FBSXhCQyxRQUFNLEVBQUUsU0FKZ0I7QUFLeEJQLE9BQUssRUFBRTtBQUxpQixDQUExQixDLENBUUE7QUFDQTs7QUFDQSxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQ7O0FBSUEsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDSCxDQUFELEVBQU87QUFDakNBLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVYLEtBQWYsR0FBdUIsU0FBdkI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUVuQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFLENBRFM7QUFFZEMsY0FBUSxFQUFFO0FBRkksS0FBaEI7QUFJRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssU0FBSyxFQUFFOUIsV0FBWjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFDRSxlQUFLLEVBQUVRLFdBRFQ7QUFFRSxZQUFFLEVBQUMsY0FGTDtBQUdFLHdCQUFXLGFBSGI7QUFJRSxxQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFJLGVBQUssRUFBRUMsZUFBWDtBQUFBLG1EQUNlLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVzQixzRUFBdkI7QUFBZ0MsaUJBQUssRUFBRWxCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBV0U7QUFBQSxpQ0FDRSw4REFBQywyRUFBRDtBQUNFLGdCQUFJLEVBQUVtQiw4RUFEUjtBQUVFLG1CQUFPLEVBQUVOLFdBRlg7QUFHRSxpQkFBSyxFQUFDLGVBSFI7QUFJRSxpQkFBSyxFQUFFVixpQkFKVDtBQUtFLHVCQUFXLEVBQUVJLGVBTGY7QUFNRSxzQkFBVSxFQUFFSTtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0FyQ0QsQyxDQXVDQTs7O0tBdkNNQyxNO0FBd0NOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMuOTk3ZTMwYzQ3MWY5NzJiNzg5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIEltcG9ydGVkIGljb25zIGZyb20gRm9udEF3ZXNvbWUuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBbmdsZURvdWJsZVVwLCBmYUhlYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxufTtcclxuXHJcbmNvbnN0IGVkYW1hbVN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjIwMHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBmb290ZXJUZXh0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjVweCBhdXRvIDVweCAzNDVweFwiLFxyXG4gIHBhZGRpbmdUb3A6IFwiNXB4XCIsXHJcbiAgd2lkdGg6IFwiMzA2cHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG5jb25zdCBoZWFydFN0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIGNvbG9yOiBcIiM4MDAwMDBcIixcclxuICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMXB4IDJweCAycHggIzAwMDAwMClcIixcclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbEJ1dHRvblN0eWxlID0ge1xyXG4gIG1hcmdpbkJvdHRvbTogXCItMTBweFwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcIjM1cHhcIixcclxuICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIENyZWF0ZWQgb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgdG8gY2hhbmdlIHRoZSBmb250IGNvbG91cnMgb2YgdGhlIHNjcm9sbCBpY29uIG9uY2UgaG92ZXJlZCBvdmVyIGFuZCB0byBjaGFuZ2UgXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZm9vdGVyIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCBkaXNwbGF5cyB0ZXh0IGluIGEgaGVhZGVyIGZvcm1hdCBhbmQgYSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24uIEFsc28gaW5jbHVkZWQgdGhlIEVkYW1hbSBBUEkncyBsb2dvLlxyXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdGhhdCwgb25jZSB0aGUgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uIGlzIGNsaWNrZWQgb24sIHdpbGwgc2Nyb2xsIHRoZSBwYWdlIHNtb290aGx5IHRvIHRoZSB0b3AuXHJcbiAqIEByZXR1cm5zIEZvb3RlciB3aXRoIGhlYWRlciB0ZXh0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi5cclxuICovXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e2VkYW1hbVN0eWxlfVxyXG4gICAgICAgICAgICBpZD1cImVkYW1hbS1iYWRnZVwiXHJcbiAgICAgICAgICAgIGRhdGEtY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgIHotaW5kZXg9XCIxXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxoNiBzdHlsZT17Zm9vdGVyVGV4dFN0eWxlfT5cclxuICAgICAgICAgICAgQ1JFQVRFRCBXSVRIIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIZWFydH0gc3R5bGU9e2hlYXJ0U3R5bGV9IC8+XHJcbiAgICAgICAgICAgIEJZIENIQU5FTExFIELDllNJR0VSXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGljb249e2ZhQW5nbGVEb3VibGVVcH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNjcm9sbCB0byBUb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzY3JvbGxCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgZm9vdGVyLmpzIHRvIEFwcC5qcy5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9