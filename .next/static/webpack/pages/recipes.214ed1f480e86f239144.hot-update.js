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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
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
}; // Set the position of the Set the margins and the font colour, size and decoration of the header links.

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
}; // Created onMouseOver and onMouseOut event handler functions to change the font colors of the header links once hovered
// over and to change back the colour when the links are no longer hovered over.

var changeFontColor = function changeFontColor(e) {
  e.target.style.color = "#f1b374";
};

var changeBackFontColor = function changeBackFontColor(e) {
  e.target.style.color = "#ffffff";
}; // Set the font size and the right margin of the home icon.


var iconStyle = {
  fontSize: "1.1rem",
  marginRight: "5px",
  color: "#ffffff"
};
/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with navigatable, styled links.
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
        lineNumber: 68,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
          lineNumber: 80,
          columnNumber: 9
        }, _this), "Home"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/recipes",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: recipeLinkStyle,
        children: "RECIPES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dvU3R5bGUiLCJtYXJnaW5MZWZ0IiwibGlua1N0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInJlY2lwZUxpbmtTdHlsZSIsInZpc2liaWxpdHkiLCJjaGFuZ2VGb250Q29sb3IiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjaGFuZ2VCYWNrRm9udENvbG9yIiwiaWNvblN0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJmYUhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsTUFEVTtBQUVsQkMsT0FBSyxFQUFFLE1BRlc7QUFHbEJDLGNBQVksRUFBRSxNQUhJO0FBSWxCQyxTQUFPLEVBQUUsQ0FKUztBQUtsQkMsaUJBQWUsRUFBRTtBQUxDLENBQXBCLEMsQ0FRQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJMLFFBQU0sRUFBRSxNQURRO0FBRWhCQyxPQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBVSxFQUFDO0FBSEssQ0FBbEIsQyxDQU1BOztBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsVUFBUSxFQUFDLFVBRE87QUFFaEJDLE9BQUssRUFBQyxDQUFDLEVBRlM7QUFHaEJDLEtBQUcsRUFBQyxFQUhZO0FBSWhCQyxRQUFNLEVBQUUscUJBSlE7QUFLaEJDLE9BQUssRUFBRSxTQUxTO0FBTWhCQyxVQUFRLEVBQUUsRUFOTTtBQU9oQkMsZ0JBQWMsRUFBRTtBQVBBLENBQWxCLEMsQ0FVQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLFlBQVUsRUFBRTtBQURVLENBQXhCLEMsQ0FJQTtBQUNBOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlUixLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNILENBQUQsRUFBTztBQUNqQ0EsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNVSxTQUFTLEdBQUc7QUFDaEJULFVBQVEsRUFBRSxRQURNO0FBRWhCVSxhQUFXLEVBQUUsS0FGRztBQUdoQlgsT0FBSyxFQUFFO0FBSFMsQ0FBbEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNWSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiO0FBQUssU0FBSyxFQUFFekIsV0FBWjtBQUFBLDRCQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQSw2QkFBWTtBQUNWLFdBQUcsRUFBQyxxQ0FETTtBQUVWLFdBQUcsRUFBQyxjQUZNO0FBR1YsYUFBSyxFQUFFTTtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLEVBQUVFLFNBRFQ7QUFFRSxtQkFBVyxFQUFFVSxlQUZmO0FBR0Usa0JBQVUsRUFBRUksbUJBSGQ7QUFBQSxnQ0FLRSw4REFBQywyRUFBRDtBQUFpQixjQUFJLEVBQUVJLHFFQUF2QjtBQUErQixlQUFLLEVBQUVIO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBaUJFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQSw2QkFDRTtBQUFHLGFBQUssRUFBRVAsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmLEMsQ0F3QkE7OztLQXhCTVMsTTtBQXlCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjIxNGVkMWY0ODBlODZmMjM5MTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgaGVhZGVyIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXR0aW5nIHRoZSBoZWFkZXIncyBzaXplIChoZWlnaHQgeCB3aWR0aCksIGJvdHRvbSBtYXJnaW4sIHBhZGRpbmcgYW5kIGJhY2tncm91bmQgY29sb3VyLlxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpIGFuZCBsZWZ0IG1hcmdpbiBvZiB0aGUgaGVhZGVyJ3MgbG9nby5cclxuY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6XCIxNXB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBTZXQgdGhlIG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG91ciwgc2l6ZSBhbmQgZGVjb3JhdGlvbiBvZiB0aGUgaGVhZGVyIGxpbmtzLlxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gIHJpZ2h0Oi0xNSxcclxuICB0b3A6MjgsXHJcbiAgbWFyZ2luOiBcImF1dG8gNDBweCBhdXRvIDIwcHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgZm9udFNpemU6IDIwLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcmVjaXBlIHBhZ2UncyB2aXNpYmlsaXR5IHRvIGhpZGRlbi5cclxuY29uc3QgcmVjaXBlTGlua1N0eWxlID0ge1xyXG4gIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvcnMgb2YgdGhlIGhlYWRlciBsaW5rcyBvbmNlIGhvdmVyZWRcclxuLy8gb3ZlciBhbmQgdG8gY2hhbmdlIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCBzaXplIGFuZCB0aGUgcmlnaHQgbWFyZ2luIG9mIHRoZSBob21lIGljb24uXHJcbmNvbnN0IGljb25TdHlsZSA9IHtcclxuICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQXR0YWNoZWQgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBsaW5rcyB3aXRoIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0LlxyXG4gKiBAcmV0dXJucyBUaGUgc3R5bGVkIGhlYWRlciBjb21wb25lbnQgd2l0aCBuYXZpZ2F0YWJsZSwgc3R5bGVkIGxpbmtzLlxyXG4gKi9cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICA8YSBocmVmPVwiL1wiPjxpbWdcclxuICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29TbWFsbC5wbmdcIlxyXG4gICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgLz5cclxuICAgIDwvYT5cclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICBIb21lXHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxMaW5rIGhyZWY9XCIvcmVjaXBlc1wiPlxyXG4gICAgICA8YSBzdHlsZT17cmVjaXBlTGlua1N0eWxlfT5SRUNJUEVTPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuLy8gRXhwb3J0aW5nIHRoZSBIZWFkZXIgdG8gdGhlIHJlY2lwZSBwYWdlLlxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=