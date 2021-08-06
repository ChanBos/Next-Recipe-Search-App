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
// Setting the header's size (height x width), .

var headerStyle = {
  height: "auto",
  width: "auto",
  marginBottom: "10px",
  padding: 5,
  backgroundColor: "#393d49"
}; // Set the size (height x width) of the header's logo.

var logoStyle = {
  height: "80px",
  width: "auto",
  marginLeft: "15px"
}; // Set the margins and the font color, size and decoration of the header links.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dvU3R5bGUiLCJtYXJnaW5MZWZ0IiwibGlua1N0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInJlY2lwZUxpbmtTdHlsZSIsInZpc2liaWxpdHkiLCJjaGFuZ2VGb250Q29sb3IiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjaGFuZ2VCYWNrRm9udENvbG9yIiwiaWNvblN0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJmYUhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxRQUFNLEVBQUUsTUFEVTtBQUVsQkMsT0FBSyxFQUFFLE1BRlc7QUFHbEJDLGNBQVksRUFBRSxNQUhJO0FBSWxCQyxTQUFPLEVBQUUsQ0FKUztBQUtsQkMsaUJBQWUsRUFBRTtBQUxDLENBQXBCLEMsQ0FRQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJMLFFBQU0sRUFBRSxNQURRO0FBRWhCQyxPQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBVSxFQUFDO0FBSEssQ0FBbEIsQyxDQU1BOztBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsVUFBUSxFQUFDLFVBRE87QUFFaEJDLE9BQUssRUFBQyxDQUFDLEVBRlM7QUFHaEJDLEtBQUcsRUFBQyxFQUhZO0FBSWhCQyxRQUFNLEVBQUUscUJBSlE7QUFLaEJDLE9BQUssRUFBRSxTQUxTO0FBTWhCQyxVQUFRLEVBQUUsRUFOTTtBQU9oQkMsZ0JBQWMsRUFBRTtBQVBBLENBQWxCLEMsQ0FVQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLFlBQVUsRUFBRTtBQURVLENBQXhCLEMsQ0FJQTtBQUNBOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlUixLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNILENBQUQsRUFBTztBQUNqQ0EsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNVSxTQUFTLEdBQUc7QUFDaEJULFVBQVEsRUFBRSxRQURNO0FBRWhCVSxhQUFXLEVBQUUsS0FGRztBQUdoQlgsT0FBSyxFQUFFO0FBSFMsQ0FBbEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNWSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiO0FBQUssU0FBSyxFQUFFekIsV0FBWjtBQUFBLDRCQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQSw2QkFBWTtBQUNWLFdBQUcsRUFBQyxxQ0FETTtBQUVWLFdBQUcsRUFBQyxjQUZNO0FBR1YsYUFBSyxFQUFFTTtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLEVBQUVFLFNBRFQ7QUFFRSxtQkFBVyxFQUFFVSxlQUZmO0FBR0Usa0JBQVUsRUFBRUksbUJBSGQ7QUFBQSxnQ0FLRSw4REFBQywyRUFBRDtBQUFpQixjQUFJLEVBQUVJLHFFQUF2QjtBQUErQixlQUFLLEVBQUVIO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBaUJFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQSw2QkFDRTtBQUFHLGFBQUssRUFBRVAsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmLEMsQ0F3QkE7OztLQXhCTVMsTTtBQXlCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjdjNGE5MzM0NjU1ZDcxYjQ2NjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgaGVhZGVyIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXR0aW5nIHRoZSBoZWFkZXIncyBzaXplIChoZWlnaHQgeCB3aWR0aCksIC5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHNpemUgKGhlaWdodCB4IHdpZHRoKSBvZiB0aGUgaGVhZGVyJ3MgbG9nby5cclxuY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6XCIxNXB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG9yLCBzaXplIGFuZCBkZWNvcmF0aW9uIG9mIHRoZSBoZWFkZXIgbGlua3MuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgcmlnaHQ6LTE1LFxyXG4gIHRvcDoyOCxcclxuICBtYXJnaW46IFwiYXV0byA0MHB4IGF1dG8gMjBweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICBmb250U2l6ZTogMjAsXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSByZWNpcGUgcGFnZSdzIHZpc2liaWxpdHkgdG8gaGlkZGVuLlxyXG5jb25zdCByZWNpcGVMaW5rU3R5bGUgPSB7XHJcbiAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxufTtcclxuXHJcbi8vIENyZWF0ZWQgb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgdG8gY2hhbmdlIHRoZSBmb250IGNvbG9ycyBvZiB0aGUgaGVhZGVyIGxpbmtzIG9uY2UgaG92ZXJlZFxyXG4vLyBvdmVyIGFuZCB0byBjaGFuZ2UgYmFjayB0aGUgY29sb3VyIHdoZW4gdGhlIGxpbmtzIGFyZSBubyBsb25nZXIgaG92ZXJlZCBvdmVyLlxyXG5jb25zdCBjaGFuZ2VGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjZjFiMzc0XCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBmb250IHNpemUgYW5kIHRoZSByaWdodCBtYXJnaW4gb2YgdGhlIGhvbWUgaWNvbi5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRhY2hlZCB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGxpbmtzIHdpdGggb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQuXHJcbiAqIEByZXR1cm5zIFRoZSBzdHlsZWQgaGVhZGVyIGNvbXBvbmVudCB3aXRoIG5hdmlnYXRhYmxlLCBzdHlsZWQgbGlua3MuXHJcbiAqL1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cclxuICAgIDxhIGhyZWY9XCIvXCI+PGltZ1xyXG4gICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb1NtYWxsLnBuZ1wiXHJcbiAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAvPlxyXG4gICAgPC9hPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgPGFcclxuICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgIEhvbWVcclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPExpbmsgaHJlZj1cIi9yZWNpcGVzXCI+XHJcbiAgICAgIDxhIHN0eWxlPXtyZWNpcGVMaW5rU3R5bGV9PlJFQ0lQRVM8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG4vLyBFeHBvcnRpbmcgdGhlIEhlYWRlciB0byB0aGUgcmVjaXBlIHBhZ2UuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==