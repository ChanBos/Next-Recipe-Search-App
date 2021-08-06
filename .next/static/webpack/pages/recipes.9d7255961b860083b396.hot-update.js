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
}; // Set the position of the navigation link to absolute and aligned it to the top right corner. Also set the margins and the font colour, size and decoration of the header links.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dvU3R5bGUiLCJtYXJnaW5MZWZ0IiwibGlua1N0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInJlY2lwZUxpbmtTdHlsZSIsInZpc2liaWxpdHkiLCJjaGFuZ2VGb250Q29sb3IiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjaGFuZ2VCYWNrRm9udENvbG9yIiwiaWNvblN0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJmYUhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsTUFEVTtBQUVsQkMsT0FBSyxFQUFFLE1BRlc7QUFHbEJDLGNBQVksRUFBRSxNQUhJO0FBSWxCQyxTQUFPLEVBQUUsQ0FKUztBQUtsQkMsaUJBQWUsRUFBRTtBQUxDLENBQXBCLEMsQ0FRQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJMLFFBQU0sRUFBRSxNQURRO0FBRWhCQyxPQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBVSxFQUFDO0FBSEssQ0FBbEIsQyxDQU1BOztBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsVUFBUSxFQUFDLFVBRE87QUFFaEJDLE9BQUssRUFBQyxDQUFDLEVBRlM7QUFHaEJDLEtBQUcsRUFBQyxFQUhZO0FBSWhCQyxRQUFNLEVBQUUscUJBSlE7QUFLaEJDLE9BQUssRUFBRSxTQUxTO0FBTWhCQyxVQUFRLEVBQUUsRUFOTTtBQU9oQkMsZ0JBQWMsRUFBRTtBQVBBLENBQWxCLEMsQ0FVQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLFlBQVUsRUFBRTtBQURVLENBQXhCLEMsQ0FJQTtBQUNBOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlUixLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNILENBQUQsRUFBTztBQUNqQ0EsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNVSxTQUFTLEdBQUc7QUFDaEJULFVBQVEsRUFBRSxRQURNO0FBRWhCVSxhQUFXLEVBQUUsS0FGRztBQUdoQlgsT0FBSyxFQUFFO0FBSFMsQ0FBbEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNWSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiO0FBQUssU0FBSyxFQUFFekIsV0FBWjtBQUFBLDRCQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQSw2QkFBWTtBQUNWLFdBQUcsRUFBQyxxQ0FETTtBQUVWLFdBQUcsRUFBQyxjQUZNO0FBR1YsYUFBSyxFQUFFTTtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLEVBQUVFLFNBRFQ7QUFFRSxtQkFBVyxFQUFFVSxlQUZmO0FBR0Usa0JBQVUsRUFBRUksbUJBSGQ7QUFBQSxnQ0FLRSw4REFBQywyRUFBRDtBQUFpQixjQUFJLEVBQUVJLHFFQUF2QjtBQUErQixlQUFLLEVBQUVIO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBaUJFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQSw2QkFDRTtBQUFHLGFBQUssRUFBRVAsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmLEMsQ0F3QkE7OztLQXhCTVMsTTtBQXlCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjlkNzI1NTk2MWI4NjAwODNiMzk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgaGVhZGVyIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXR0aW5nIHRoZSBoZWFkZXIncyBzaXplIChoZWlnaHQgeCB3aWR0aCksIGJvdHRvbSBtYXJnaW4sIHBhZGRpbmcgYW5kIGJhY2tncm91bmQgY29sb3VyLlxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpIGFuZCBsZWZ0IG1hcmdpbiBvZiB0aGUgaGVhZGVyJ3MgbG9nby5cclxuY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6XCIxNXB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBuYXZpZ2F0aW9uIGxpbmsgdG8gYWJzb2x1dGUgYW5kIGFsaWduZWQgaXQgdG8gdGhlIHRvcCByaWdodCBjb3JuZXIuIEFsc28gc2V0IHRoZSBtYXJnaW5zIGFuZCB0aGUgZm9udCBjb2xvdXIsIHNpemUgYW5kIGRlY29yYXRpb24gb2YgdGhlIGhlYWRlciBsaW5rcy5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICByaWdodDotMTUsXHJcbiAgdG9wOjI4LFxyXG4gIG1hcmdpbjogXCJhdXRvIDQwcHggYXV0byAyMHB4XCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gIGZvbnRTaXplOiAyMCxcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHJlY2lwZSBwYWdlJ3MgdmlzaWJpbGl0eSB0byBoaWRkZW4uXHJcbmNvbnN0IHJlY2lwZUxpbmtTdHlsZSA9IHtcclxuICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG59O1xyXG5cclxuLy8gQ3JlYXRlZCBvbk1vdXNlT3ZlciBhbmQgb25Nb3VzZU91dCBldmVudCBoYW5kbGVyIGZ1bmN0aW9ucyB0byBjaGFuZ2UgdGhlIGZvbnQgY29sb3JzIG9mIHRoZSBoZWFkZXIgbGlua3Mgb25jZSBob3ZlcmVkXHJcbi8vIG92ZXIgYW5kIHRvIGNoYW5nZSBiYWNrIHRoZSBjb2xvdXIgd2hlbiB0aGUgbGlua3MgYXJlIG5vIGxvbmdlciBob3ZlcmVkIG92ZXIuXHJcbmNvbnN0IGNoYW5nZUZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmMWIzNzRcIjtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUJhY2tGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGZvbnQgc2l6ZSBhbmQgdGhlIHJpZ2h0IG1hcmdpbiBvZiB0aGUgaG9tZSBpY29uLlxyXG5jb25zdCBpY29uU3R5bGUgPSB7XHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEF0dGFjaGVkIHRoZSBldmVudCBoYW5kbGVycyB0byB0aGUgbGlua3Mgd2l0aCBvbk1vdXNlT3ZlciBhbmQgb25Nb3VzZU91dC5cclxuICogQHJldHVybnMgVGhlIHN0eWxlZCBoZWFkZXIgY29tcG9uZW50IHdpdGggbmF2aWdhdGFibGUsIHN0eWxlZCBsaW5rcy5cclxuICovXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgPGEgaHJlZj1cIi9cIj48aW1nXHJcbiAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvU21hbGwucG5nXCJcclxuICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgSG9tZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8TGluayBocmVmPVwiL3JlY2lwZXNcIj5cclxuICAgICAgPGEgc3R5bGU9e3JlY2lwZUxpbmtTdHlsZX0+UkVDSVBFUzwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbi8vIEV4cG9ydGluZyB0aGUgSGVhZGVyIHRvIHRoZSByZWNpcGUgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9