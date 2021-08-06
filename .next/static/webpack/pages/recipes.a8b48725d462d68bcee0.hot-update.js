self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\Header.js",
    _this = undefined;

// Imported the Link API to support client-side navigation.
 // Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.




/**
 * Styled the header component.
 */
// Setting the header's size (height x width), bottom margin, padding and background colour.

var headerStyle = {
  height: "auto",
  width: "auto",
  marginBottom: "10px",
  padding: 5,
  backgroundColor: "#393d49"
}; // Set the size (height x width) and left margin of the header's logo.

var logoStyle = {
  height: "80px",
  width: "auto",
  marginLeft: "15px"
}; // Set the position of the navigation link to absolute and aligned it to the top right corner. Also set the margins and the font colour, size
// and decoration of the header links.

var linkStyle = {
  position: "absolute",
  right: -15,
  top: 28,
  margin: "auto 40px auto 20px",
  color: "#ffffff",
  fontSize: 20,
  textDecoration: "none"
}; // Set the recipe page's visibility to hidden.

var recipeLinkStyle = {
  visibility: "hidden"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colours of the header link once hovered over and to change
// back the colour when the links are no longer hovered over.

var changeFontColor = function changeFontColor(e) {
  e.target.style.color = "#f1b374";
};

var changeBackFontColor = function changeBackFontColor(e) {
  e.target.style.color = "#ffffff";
}; // Set the font size and colour and the right margin of the home icon.


var iconStyle = {
  fontSize: "1.1rem",
  marginRight: "5px",
  color: "#ffffff"
};
/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with a navigable link and logo.
 * Applied all of the above styles to their respective elements.
 */

var Header = function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: headerStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/images/GrumbleLogoSmall.png",
        alt: "Grumble Logo",
        style: logoStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: linkStyle,
        onMouseOver: changeFontColor,
        onMouseOut: changeBackFontColor,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHome,
          style: iconStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, _this), "Home"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/recipes",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: recipeLinkStyle,
        children: "RECIPES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, _this);
}; // Exporting the Header to the recipe page.


_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dvU3R5bGUiLCJtYXJnaW5MZWZ0IiwibGlua1N0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInJlY2lwZUxpbmtTdHlsZSIsInZpc2liaWxpdHkiLCJjaGFuZ2VGb250Q29sb3IiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjaGFuZ2VCYWNrRm9udENvbG9yIiwiaWNvblN0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJmYUhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsTUFEVTtBQUVsQkMsT0FBSyxFQUFFLE1BRlc7QUFHbEJDLGNBQVksRUFBRSxNQUhJO0FBSWxCQyxTQUFPLEVBQUUsQ0FKUztBQUtsQkMsaUJBQWUsRUFBRTtBQUxDLENBQXBCLEMsQ0FRQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJMLFFBQU0sRUFBRSxNQURRO0FBRWhCQyxPQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBVSxFQUFFO0FBSEksQ0FBbEIsQyxDQU1BO0FBQ0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxVQUFRLEVBQUUsVUFETTtBQUVoQkMsT0FBSyxFQUFFLENBQUMsRUFGUTtBQUdoQkMsS0FBRyxFQUFFLEVBSFc7QUFJaEJDLFFBQU0sRUFBRSxxQkFKUTtBQUtoQkMsT0FBSyxFQUFFLFNBTFM7QUFNaEJDLFVBQVEsRUFBRSxFQU5NO0FBT2hCQyxnQkFBYyxFQUFFO0FBUEEsQ0FBbEIsQyxDQVVBOztBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsWUFBVSxFQUFFO0FBRFUsQ0FBeEIsQyxDQUlBO0FBQ0E7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQU87QUFDN0JBLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVSLEtBQWYsR0FBdUIsU0FBdkI7QUFDRCxDQUZEOztBQUlBLElBQU1TLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQ2pDQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlUixLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1VLFNBQVMsR0FBRztBQUNoQlQsVUFBUSxFQUFFLFFBRE07QUFFaEJVLGFBQVcsRUFBRSxLQUZHO0FBR2hCWCxPQUFLLEVBQUU7QUFIUyxDQUFsQjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxzQkFDYjtBQUFLLFNBQUssRUFBRXpCLFdBQVo7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUMscUNBRE47QUFFRSxXQUFHLEVBQUMsY0FGTjtBQUdFLGFBQUssRUFBRU07QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQ0UsYUFBSyxFQUFFRSxTQURUO0FBRUUsbUJBQVcsRUFBRVUsZUFGZjtBQUdFLGtCQUFVLEVBQUVJLG1CQUhkO0FBQUEsZ0NBS0UsOERBQUMsMkVBQUQ7QUFBaUIsY0FBSSxFQUFFSSxxRUFBdkI7QUFBK0IsZUFBSyxFQUFFSDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWtCRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUVQLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBQUEsQ0FBZixDLENBeUJBOzs7S0F6Qk1TLE07QUEwQk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy5hOGI0ODcyNWQ0NjJkNjhiY2VlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBJbXBvcnRlZCBGb250IEF3ZXNvbWUgbGlicmFyeSBhbmQgaWNvbnMuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zLlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhSG9tZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGhlYWRlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0dGluZyB0aGUgaGVhZGVyJ3Mgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpLCBib3R0b20gbWFyZ2luLCBwYWRkaW5nIGFuZCBiYWNrZ3JvdW5kIGNvbG91ci5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHNpemUgKGhlaWdodCB4IHdpZHRoKSBhbmQgbGVmdCBtYXJnaW4gb2YgdGhlIGhlYWRlcidzIGxvZ28uXHJcbmNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiODBweFwiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5MZWZ0OiBcIjE1cHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIG5hdmlnYXRpb24gbGluayB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIHJpZ2h0IGNvcm5lci4gQWxzbyBzZXQgdGhlIG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG91ciwgc2l6ZVxyXG4vLyBhbmQgZGVjb3JhdGlvbiBvZiB0aGUgaGVhZGVyIGxpbmtzLlxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICByaWdodDogLTE1LFxyXG4gIHRvcDogMjgsXHJcbiAgbWFyZ2luOiBcImF1dG8gNDBweCBhdXRvIDIwcHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgZm9udFNpemU6IDIwLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcmVjaXBlIHBhZ2UncyB2aXNpYmlsaXR5IHRvIGhpZGRlbi5cclxuY29uc3QgcmVjaXBlTGlua1N0eWxlID0ge1xyXG4gIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvdXJzIG9mIHRoZSBoZWFkZXIgbGluayBvbmNlIGhvdmVyZWQgb3ZlciBhbmQgdG8gY2hhbmdlXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCBzaXplIGFuZCBjb2xvdXIgYW5kIHRoZSByaWdodCBtYXJnaW4gb2YgdGhlIGhvbWUgaWNvbi5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRhY2hlZCB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGxpbmtzIHdpdGggb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQuXHJcbiAqIEByZXR1cm5zIFRoZSBzdHlsZWQgaGVhZGVyIGNvbXBvbmVudCB3aXRoIGEgbmF2aWdhYmxlIGxpbmsgYW5kIGxvZ28uXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvU21hbGwucG5nXCJcclxuICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgSG9tZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8TGluayBocmVmPVwiL3JlY2lwZXNcIj5cclxuICAgICAgPGEgc3R5bGU9e3JlY2lwZUxpbmtTdHlsZX0+UkVDSVBFUzwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbi8vIEV4cG9ydGluZyB0aGUgSGVhZGVyIHRvIHRoZSByZWNpcGUgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9