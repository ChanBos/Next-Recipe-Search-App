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




/**
 * Styled the footer component.
 */
// Set the size (height x width), the top margin, the padding and the background colour of the footer. Also set for the footer to display as 
// flex and for the direction to be a row.

var footerStyle = {
  height: "auto",
  width: "auto",
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
  padding: 5,
  backgroundColor: "#393d49"
}; // Set the width of the Edamam API's logo.

var edamamStyle = {
  width: "200px"
}; // Set the margins, the top padding, the width and the font colour of the footer's text.

var footerTextStyle = {
  margin: "5px auto 5px 345px",
  paddingTop: "5px",
  width: "306px",
  color: "#ffffff"
}; // Set the right margin, the font colour and implemented a drop-shadow filter do give the icon a 3D and defined look.

var heartStyle = {
  marginRight: "5px",
  color: "#800000",
  filter: "drop-shadow(1px 2px 2px #000000)"
}; // Set the bottom and right margins, the font size and colour of the "Scroll to Top" icon and for the cursor to change once the icon is hovered 
// over.

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
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          style: footerTextStyle,
          children: ["CREATED WITH ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHeart,
            style: heartStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 26
          }, _this), "BY CHANELLE B\xD6SIGER"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsUUFBTSxFQUFFLE1BRFU7QUFFbEJDLE9BQUssRUFBRSxNQUZXO0FBR2xCQyxTQUFPLEVBQUUsTUFIUztBQUlsQkMsZUFBYSxFQUFFLEtBSkc7QUFLbEJDLFdBQVMsRUFBRSxNQUxPO0FBTWxCQyxTQUFPLEVBQUUsQ0FOUztBQU9sQkMsaUJBQWUsRUFBRTtBQVBDLENBQXBCLEMsQ0FVQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJOLE9BQUssRUFBRTtBQURXLENBQXBCLEMsQ0FJQTs7QUFDQSxJQUFNTyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxvQkFEYztBQUV0QkMsWUFBVSxFQUFFLEtBRlU7QUFHdEJULE9BQUssRUFBRSxPQUhlO0FBSXRCVSxPQUFLLEVBQUU7QUFKZSxDQUF4QixDLENBT0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxhQUFXLEVBQUUsS0FESTtBQUVqQkYsT0FBSyxFQUFFLFNBRlU7QUFHakJHLFFBQU0sRUFBRTtBQUhTLENBQW5CLEMsQ0FNQTtBQUNBOztBQUNBLElBQU1DLGlCQUFpQixHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsT0FEVTtBQUV4QkgsYUFBVyxFQUFFLE1BRlc7QUFHeEJJLFVBQVEsRUFBRSxRQUhjO0FBSXhCQyxRQUFNLEVBQUUsU0FKZ0I7QUFLeEJQLE9BQUssRUFBRTtBQUxpQixDQUExQixDLENBUUE7QUFDQTs7QUFDQSxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQ7O0FBSUEsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDSCxDQUFELEVBQU87QUFDakNBLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVYLEtBQWYsR0FBdUIsU0FBdkI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxjQUFRLEVBQUU7QUFGSSxLQUFoQjtBQUlELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU5QixXQUFaO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFBVyxXQUFLLE1BQWhCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUNFLGVBQUssRUFBRVEsV0FEVDtBQUVFLFlBQUUsRUFBQyxjQUZMO0FBR0Usd0JBQVcsYUFIYjtBQUlFLHFCQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUksZUFBSyxFQUFFQyxlQUFYO0FBQUEsbURBQ2UsOERBQUMsMkVBQUQ7QUFBaUIsZ0JBQUksRUFBRXNCLHNFQUF2QjtBQUFnQyxpQkFBSyxFQUFFbEI7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRTtBQUFBLGlDQUNFLDhEQUFDLDJFQUFEO0FBQ0UsZ0JBQUksRUFBRW1CLDhFQURSO0FBRUUsbUJBQU8sRUFBRU4sV0FGWDtBQUdFLGlCQUFLLEVBQUMsZUFIUjtBQUlFLGlCQUFLLEVBQUVWLGlCQUpUO0FBS0UsdUJBQVcsRUFBRUksZUFMZjtBQU1FLHNCQUFVLEVBQUVJO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXBDRCxDLENBc0NBOzs7S0F0Q01DLE07QUF1Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy5iZjBlODljYTI0Zjg1YjhkYzRjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gSW1wb3J0ZWQgaWNvbnMgZnJvbSBGb250QXdlc29tZS4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnNcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFuZ2xlRG91YmxlVXAsIGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBmb290ZXIgY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpLCB0aGUgdG9wIG1hcmdpbiwgdGhlIHBhZGRpbmcgYW5kIHRoZSBiYWNrZ3JvdW5kIGNvbG91ciBvZiB0aGUgZm9vdGVyLiBBbHNvIHNldCBmb3IgdGhlIGZvb3RlciB0byBkaXNwbGF5IGFzIFxyXG4vLyBmbGV4IGFuZCBmb3IgdGhlIGRpcmVjdGlvbiB0byBiZSBhIHJvdy5cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGggb2YgdGhlIEVkYW1hbSBBUEkncyBsb2dvLlxyXG5jb25zdCBlZGFtYW1TdHlsZSA9IHtcclxuICB3aWR0aDogXCIyMDBweFwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBtYXJnaW5zLCB0aGUgdG9wIHBhZGRpbmcsIHRoZSB3aWR0aCBhbmQgdGhlIGZvbnQgY29sb3VyIG9mIHRoZSBmb290ZXIncyB0ZXh0LlxyXG5jb25zdCBmb290ZXJUZXh0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjVweCBhdXRvIDVweCAzNDVweFwiLFxyXG4gIHBhZGRpbmdUb3A6IFwiNXB4XCIsXHJcbiAgd2lkdGg6IFwiMzA2cHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHJpZ2h0IG1hcmdpbiwgdGhlIGZvbnQgY29sb3VyIGFuZCBpbXBsZW1lbnRlZCBhIGRyb3Atc2hhZG93IGZpbHRlciBkbyBnaXZlIHRoZSBpY29uIGEgM0QgYW5kIGRlZmluZWQgbG9vay5cclxuY29uc3QgaGVhcnRTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICBjb2xvcjogXCIjODAwMDAwXCIsXHJcbiAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDFweCAycHggMnB4ICMwMDAwMDApXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGJvdHRvbSBhbmQgcmlnaHQgbWFyZ2lucywgdGhlIGZvbnQgc2l6ZSBhbmQgY29sb3VyIG9mIHRoZSBcIlNjcm9sbCB0byBUb3BcIiBpY29uIGFuZCBmb3IgdGhlIGN1cnNvciB0byBjaGFuZ2Ugb25jZSB0aGUgaWNvbiBpcyBob3ZlcmVkIFxyXG4vLyBvdmVyLlxyXG5jb25zdCBzY3JvbGxCdXR0b25TdHlsZSA9IHtcclxuICBtYXJnaW5Cb3R0b206IFwiLTEwcHhcIixcclxuICBtYXJnaW5SaWdodDogXCIzNXB4XCIsXHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvdXJzIG9mIHRoZSBzY3JvbGwgaWNvbiBvbmNlIGhvdmVyZWQgb3ZlciBhbmQgdG8gY2hhbmdlXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZm9vdGVyIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCBkaXNwbGF5cyB0ZXh0IGluIGEgaGVhZGVyIGZvcm1hdCBhbmQgYSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24uIEFsc28gaW5jbHVkZWQgdGhlIEVkYW1hbSBBUEkncyBsb2dvLlxyXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdGhhdCwgb25jZSB0aGUgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uIGlzIGNsaWNrZWQgb24sIHdpbGwgc2Nyb2xsIHRoZSBwYWdlIHNtb290aGx5IHRvIHRoZSB0b3AuXHJcbiAqIEByZXR1cm5zIEZvb3RlciB3aXRoIGhlYWRlciB0ZXh0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi5cclxuICogQXBwbGllZCBhbGwgb2YgdGhlIGFib3ZlIHN0eWxlcyB0byB0aGVpciByZXNwZWN0aXZlIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtlZGFtYW1TdHlsZX1cclxuICAgICAgICAgICAgaWQ9XCJlZGFtYW0tYmFkZ2VcIlxyXG4gICAgICAgICAgICBkYXRhLWNvbG9yPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICB6LWluZGV4PVwiMVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8aDYgc3R5bGU9e2Zvb3RlclRleHRTdHlsZX0+XHJcbiAgICAgICAgICAgIENSRUFURUQgV0lUSCA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IHN0eWxlPXtoZWFydFN0eWxlfSAvPlxyXG4gICAgICAgICAgICBCWSBDSEFORUxMRSBCw5ZTSUdFUlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICBpY29uPXtmYUFuZ2xlRG91YmxlVXB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTY3JvbGwgdG8gVG9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17c2Nyb2xsQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIGZvb3Rlci5qcyB0byBBcHAuanMuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==