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



 // Set the size ()

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
 * Applied all of the above styles to their respective elements.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsTUFEVTtBQUVsQkMsT0FBSyxFQUFFLE1BRlc7QUFHbEJDLFNBQU8sRUFBRSxNQUhTO0FBSWxCQyxlQUFhLEVBQUUsS0FKRztBQUtsQkMsV0FBUyxFQUFFLE1BTE87QUFNbEJDLFNBQU8sRUFBRSxDQU5TO0FBT2xCQyxpQkFBZSxFQUFFO0FBUEMsQ0FBcEI7QUFVQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJOLE9BQUssRUFBRTtBQURXLENBQXBCO0FBSUEsSUFBTU8sZUFBZSxHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsb0JBRGM7QUFFdEJDLFlBQVUsRUFBRSxLQUZVO0FBR3RCVCxPQUFLLEVBQUUsT0FIZTtBQUl0QlUsT0FBSyxFQUFFO0FBSmUsQ0FBeEI7QUFPQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJDLGFBQVcsRUFBRSxLQURJO0FBRWpCRixPQUFLLEVBQUUsU0FGVTtBQUdqQkcsUUFBTSxFQUFFO0FBSFMsQ0FBbkI7QUFNQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsY0FBWSxFQUFFLE9BRFU7QUFFeEJILGFBQVcsRUFBRSxNQUZXO0FBR3hCSSxVQUFRLEVBQUUsUUFIYztBQUl4QkMsUUFBTSxFQUFFLFNBSmdCO0FBS3hCUCxPQUFLLEVBQUU7QUFMaUIsQ0FBMUIsQyxDQVFBO0FBQ0E7O0FBQ0EsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQU87QUFDN0JBLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVYLEtBQWYsR0FBdUIsU0FBdkI7QUFDRCxDQUZEOztBQUlBLElBQU1ZLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQ2pDQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlWCxLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFLENBRFM7QUFFZEMsY0FBUSxFQUFFO0FBRkksS0FBaEI7QUFJRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssU0FBSyxFQUFFOUIsV0FBWjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFDRSxlQUFLLEVBQUVRLFdBRFQ7QUFFRSxZQUFFLEVBQUMsY0FGTDtBQUdFLHdCQUFXLGFBSGI7QUFJRSxxQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFJLGVBQUssRUFBRUMsZUFBWDtBQUFBLG1EQUNlLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVzQixzRUFBdkI7QUFBZ0MsaUJBQUssRUFBRWxCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBV0U7QUFBQSxpQ0FDRSw4REFBQywyRUFBRDtBQUNFLGdCQUFJLEVBQUVtQiw4RUFEUjtBQUVFLG1CQUFPLEVBQUVOLFdBRlg7QUFHRSxpQkFBSyxFQUFDLGVBSFI7QUFJRSxpQkFBSyxFQUFFVixpQkFKVDtBQUtFLHVCQUFXLEVBQUVJLGVBTGY7QUFNRSxzQkFBVSxFQUFFSTtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0FwQ0QsQyxDQXNDQTs7O0tBdENNQyxNO0FBdUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMuYmZhOThjYmMyZTM1MTVhOGI0MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIEltcG9ydGVkIGljb25zIGZyb20gRm9udEF3ZXNvbWUuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBbmdsZURvdWJsZVVwLCBmYUhlYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLy8gU2V0IHRoZSBzaXplICgpXHJcbmNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbn07XHJcblxyXG5jb25zdCBlZGFtYW1TdHlsZSA9IHtcclxuICB3aWR0aDogXCIyMDBweFwiLFxyXG59O1xyXG5cclxuY29uc3QgZm9vdGVyVGV4dFN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCI1cHggYXV0byA1cHggMzQ1cHhcIixcclxuICBwYWRkaW5nVG9wOiBcIjVweFwiLFxyXG4gIHdpZHRoOiBcIjMwNnB4XCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuY29uc3QgaGVhcnRTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICBjb2xvcjogXCIjODAwMDAwXCIsXHJcbiAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDFweCAycHggMnB4ICMwMDAwMDApXCIsXHJcbn07XHJcblxyXG5jb25zdCBzY3JvbGxCdXR0b25TdHlsZSA9IHtcclxuICBtYXJnaW5Cb3R0b206IFwiLTEwcHhcIixcclxuICBtYXJnaW5SaWdodDogXCIzNXB4XCIsXHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvdXJzIG9mIHRoZSBzY3JvbGwgaWNvbiBvbmNlIGhvdmVyZWQgb3ZlciBhbmQgdG8gY2hhbmdlXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZm9vdGVyIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCBkaXNwbGF5cyB0ZXh0IGluIGEgaGVhZGVyIGZvcm1hdCBhbmQgYSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24uIEFsc28gaW5jbHVkZWQgdGhlIEVkYW1hbSBBUEkncyBsb2dvLlxyXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdGhhdCwgb25jZSB0aGUgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uIGlzIGNsaWNrZWQgb24sIHdpbGwgc2Nyb2xsIHRoZSBwYWdlIHNtb290aGx5IHRvIHRoZSB0b3AuXHJcbiAqIEByZXR1cm5zIEZvb3RlciB3aXRoIGhlYWRlciB0ZXh0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi5cclxuICogQXBwbGllZCBhbGwgb2YgdGhlIGFib3ZlIHN0eWxlcyB0byB0aGVpciByZXNwZWN0aXZlIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtlZGFtYW1TdHlsZX1cclxuICAgICAgICAgICAgaWQ9XCJlZGFtYW0tYmFkZ2VcIlxyXG4gICAgICAgICAgICBkYXRhLWNvbG9yPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICB6LWluZGV4PVwiMVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8aDYgc3R5bGU9e2Zvb3RlclRleHRTdHlsZX0+XHJcbiAgICAgICAgICAgIENSRUFURUQgV0lUSCA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IHN0eWxlPXtoZWFydFN0eWxlfSAvPlxyXG4gICAgICAgICAgICBCWSBDSEFORUxMRSBCw5ZTSUdFUlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICBpY29uPXtmYUFuZ2xlRG91YmxlVXB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTY3JvbGwgdG8gVG9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17c2Nyb2xsQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIGZvb3Rlci5qcyB0byBBcHAuanMuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==