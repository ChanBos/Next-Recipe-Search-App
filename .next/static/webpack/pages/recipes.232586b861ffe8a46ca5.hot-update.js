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
}; // Set the right margin, the font colour and 

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
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          style: footerTextStyle,
          children: ["CREATED WITH ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHeart,
            style: heartStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 26
          }, _this), "BY CHANELLE B\xD6SIGER"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsUUFBTSxFQUFFLE1BRFU7QUFFbEJDLE9BQUssRUFBRSxNQUZXO0FBR2xCQyxTQUFPLEVBQUUsTUFIUztBQUlsQkMsZUFBYSxFQUFFLEtBSkc7QUFLbEJDLFdBQVMsRUFBRSxNQUxPO0FBTWxCQyxTQUFPLEVBQUUsQ0FOUztBQU9sQkMsaUJBQWUsRUFBRTtBQVBDLENBQXBCLEMsQ0FVQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJOLE9BQUssRUFBRTtBQURXLENBQXBCLEMsQ0FJQTs7QUFDQSxJQUFNTyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxvQkFEYztBQUV0QkMsWUFBVSxFQUFFLEtBRlU7QUFHdEJULE9BQUssRUFBRSxPQUhlO0FBSXRCVSxPQUFLLEVBQUU7QUFKZSxDQUF4QixDLENBT0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxhQUFXLEVBQUUsS0FESTtBQUVqQkYsT0FBSyxFQUFFLFNBRlU7QUFHakJHLFFBQU0sRUFBRTtBQUhTLENBQW5CO0FBTUEsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLGNBQVksRUFBRSxPQURVO0FBRXhCSCxhQUFXLEVBQUUsTUFGVztBQUd4QkksVUFBUSxFQUFFLFFBSGM7QUFJeEJDLFFBQU0sRUFBRSxTQUpnQjtBQUt4QlAsT0FBSyxFQUFFO0FBTGlCLENBQTFCLEMsQ0FRQTtBQUNBOztBQUNBLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlWCxLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNWSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNILENBQUQsRUFBTztBQUNqQ0EsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLFNBQUssRUFBRTlCLFdBQVo7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFUSxXQURUO0FBRUUsWUFBRSxFQUFDLGNBRkw7QUFHRSx3QkFBVyxhQUhiO0FBSUUscUJBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSSxlQUFLLEVBQUVDLGVBQVg7QUFBQSxtREFDZSw4REFBQywyRUFBRDtBQUFpQixnQkFBSSxFQUFFc0Isc0VBQXZCO0FBQWdDLGlCQUFLLEVBQUVsQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVdFO0FBQUEsaUNBQ0UsOERBQUMsMkVBQUQ7QUFDRSxnQkFBSSxFQUFFbUIsOEVBRFI7QUFFRSxtQkFBTyxFQUFFTixXQUZYO0FBR0UsaUJBQUssRUFBQyxlQUhSO0FBSUUsaUJBQUssRUFBRVYsaUJBSlQ7QUFLRSx1QkFBVyxFQUFFSSxlQUxmO0FBTUUsc0JBQVUsRUFBRUk7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBcENELEMsQ0FzQ0E7OztLQXRDTUMsTTtBQXVDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjIzMjU4NmI4NjFmZmU4YTQ2Y2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBJbXBvcnRlZCBpY29ucyBmcm9tIEZvbnRBd2Vzb21lLiBBbHNvIGFkZGVkIFwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcIiB0byBhbGxvdyBzdHlsaW5nIHRoZSBpY29uc1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQW5nbGVEb3VibGVVcCwgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGZvb3RlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCksIHRoZSB0b3AgbWFyZ2luLCB0aGUgcGFkZGluZyBhbmQgdGhlIGJhY2tncm91bmQgY29sb3VyIG9mIHRoZSBmb290ZXIuIEFsc28gc2V0IGZvciB0aGUgZm9vdGVyIHRvIGRpc3BsYXkgYXMgXHJcbi8vIGZsZXggYW5kIGZvciB0aGUgZGlyZWN0aW9uIHRvIGJlIGEgcm93LlxyXG5jb25zdCBmb290ZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgcGFkZGluZzogNSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgRWRhbWFtIEFQSSdzIGxvZ28uXHJcbmNvbnN0IGVkYW1hbVN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjIwMHB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIG1hcmdpbnMsIHRoZSB0b3AgcGFkZGluZywgdGhlIHdpZHRoIGFuZCB0aGUgZm9udCBjb2xvdXIgb2YgdGhlIGZvb3RlcidzIHRleHQuXHJcbmNvbnN0IGZvb3RlclRleHRTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiNXB4IGF1dG8gNXB4IDM0NXB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCI1cHhcIixcclxuICB3aWR0aDogXCIzMDZweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcmlnaHQgbWFyZ2luLCB0aGUgZm9udCBjb2xvdXIgYW5kIFxyXG5jb25zdCBoZWFydFN0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIGNvbG9yOiBcIiM4MDAwMDBcIixcclxuICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMXB4IDJweCAycHggIzAwMDAwMClcIixcclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbEJ1dHRvblN0eWxlID0ge1xyXG4gIG1hcmdpbkJvdHRvbTogXCItMTBweFwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcIjM1cHhcIixcclxuICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIENyZWF0ZWQgb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgdG8gY2hhbmdlIHRoZSBmb250IGNvbG91cnMgb2YgdGhlIHNjcm9sbCBpY29uIG9uY2UgaG92ZXJlZCBvdmVyIGFuZCB0byBjaGFuZ2VcclxuLy8gYmFjayB0aGUgY29sb3VyIHdoZW4gdGhlIGxpbmtzIGFyZSBubyBsb25nZXIgaG92ZXJlZCBvdmVyLlxyXG5jb25zdCBjaGFuZ2VGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjZjFiMzc0XCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYSBmb290ZXIgZm9yIHRoZSBhcHBsaWNhdGlvbiB0aGF0IGRpc3BsYXlzIHRleHQgaW4gYSBoZWFkZXIgZm9ybWF0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi4gQWxzbyBpbmNsdWRlZCB0aGUgRWRhbWFtIEFQSSdzIGxvZ28uXHJcbiAqIENyZWF0ZWQgYSBmdW5jdGlvbiB0aGF0LCBvbmNlIHRoZSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24gaXMgY2xpY2tlZCBvbiwgd2lsbCBzY3JvbGwgdGhlIHBhZ2Ugc21vb3RobHkgdG8gdGhlIHRvcC5cclxuICogQHJldHVybnMgRm9vdGVyIHdpdGggaGVhZGVyIHRleHQgYW5kIGEgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uLlxyXG4gKiBBcHBsaWVkIGFsbCBvZiB0aGUgYWJvdmUgc3R5bGVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e2VkYW1hbVN0eWxlfVxyXG4gICAgICAgICAgICBpZD1cImVkYW1hbS1iYWRnZVwiXHJcbiAgICAgICAgICAgIGRhdGEtY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgIHotaW5kZXg9XCIxXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxoNiBzdHlsZT17Zm9vdGVyVGV4dFN0eWxlfT5cclxuICAgICAgICAgICAgQ1JFQVRFRCBXSVRIIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIZWFydH0gc3R5bGU9e2hlYXJ0U3R5bGV9IC8+XHJcbiAgICAgICAgICAgIEJZIENIQU5FTExFIELDllNJR0VSXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGljb249e2ZhQW5nbGVEb3VibGVVcH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNjcm9sbCB0byBUb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzY3JvbGxCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgZm9vdGVyLmpzIHRvIEFwcC5qcy5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9