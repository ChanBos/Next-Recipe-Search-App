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
}; // Set the right margin, the font colour 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImVkYW1hbVN0eWxlIiwiZm9vdGVyVGV4dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiaGVhcnRTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZmlsdGVyIiwic2Nyb2xsQnV0dG9uU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsUUFBTSxFQUFFLE1BRFU7QUFFbEJDLE9BQUssRUFBRSxNQUZXO0FBR2xCQyxTQUFPLEVBQUUsTUFIUztBQUlsQkMsZUFBYSxFQUFFLEtBSkc7QUFLbEJDLFdBQVMsRUFBRSxNQUxPO0FBTWxCQyxTQUFPLEVBQUUsQ0FOUztBQU9sQkMsaUJBQWUsRUFBRTtBQVBDLENBQXBCLEMsQ0FVQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJOLE9BQUssRUFBRTtBQURXLENBQXBCLEMsQ0FJQTs7QUFDQSxJQUFNTyxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxvQkFEYztBQUV0QkMsWUFBVSxFQUFFLEtBRlU7QUFHdEJULE9BQUssRUFBRSxPQUhlO0FBSXRCVSxPQUFLLEVBQUU7QUFKZSxDQUF4QixDLENBT0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxhQUFXLEVBQUUsS0FESTtBQUVqQkYsT0FBSyxFQUFFLFNBRlU7QUFHakJHLFFBQU0sRUFBRTtBQUhTLENBQW5CO0FBTUEsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLGNBQVksRUFBRSxPQURVO0FBRXhCSCxhQUFXLEVBQUUsTUFGVztBQUd4QkksVUFBUSxFQUFFLFFBSGM7QUFJeEJDLFFBQU0sRUFBRSxTQUpnQjtBQUt4QlAsT0FBSyxFQUFFO0FBTGlCLENBQTFCLEMsQ0FRQTtBQUNBOztBQUNBLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzdCQSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlWCxLQUFmLEdBQXVCLFNBQXZCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNWSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNILENBQUQsRUFBTztBQUNqQ0EsR0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsS0FBZixHQUF1QixTQUF2QjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLGNBQVEsRUFBRTtBQUZJLEtBQWhCO0FBSUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLFNBQUssRUFBRTlCLFdBQVo7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFUSxXQURUO0FBRUUsWUFBRSxFQUFDLGNBRkw7QUFHRSx3QkFBVyxhQUhiO0FBSUUscUJBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSSxlQUFLLEVBQUVDLGVBQVg7QUFBQSxtREFDZSw4REFBQywyRUFBRDtBQUFpQixnQkFBSSxFQUFFc0Isc0VBQXZCO0FBQWdDLGlCQUFLLEVBQUVsQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVdFO0FBQUEsaUNBQ0UsOERBQUMsMkVBQUQ7QUFDRSxnQkFBSSxFQUFFbUIsOEVBRFI7QUFFRSxtQkFBTyxFQUFFTixXQUZYO0FBR0UsaUJBQUssRUFBQyxlQUhSO0FBSUUsaUJBQUssRUFBRVYsaUJBSlQ7QUFLRSx1QkFBVyxFQUFFSSxlQUxmO0FBTUUsc0JBQVUsRUFBRUk7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBcENELEMsQ0FzQ0E7OztLQXRDTUMsTTtBQXVDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLmVkZmUyYzYwZTUzYTMyMzk3OTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBJbXBvcnRlZCBpY29ucyBmcm9tIEZvbnRBd2Vzb21lLiBBbHNvIGFkZGVkIFwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcIiB0byBhbGxvdyBzdHlsaW5nIHRoZSBpY29uc1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQW5nbGVEb3VibGVVcCwgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGZvb3RlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCksIHRoZSB0b3AgbWFyZ2luLCB0aGUgcGFkZGluZyBhbmQgdGhlIGJhY2tncm91bmQgY29sb3VyIG9mIHRoZSBmb290ZXIuIEFsc28gc2V0IGZvciB0aGUgZm9vdGVyIHRvIGRpc3BsYXkgYXMgXHJcbi8vIGZsZXggYW5kIGZvciB0aGUgZGlyZWN0aW9uIHRvIGJlIGEgcm93LlxyXG5jb25zdCBmb290ZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgcGFkZGluZzogNSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgRWRhbWFtIEFQSSdzIGxvZ28uXHJcbmNvbnN0IGVkYW1hbVN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjIwMHB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIG1hcmdpbnMsIHRoZSB0b3AgcGFkZGluZywgdGhlIHdpZHRoIGFuZCB0aGUgZm9udCBjb2xvdXIgb2YgdGhlIGZvb3RlcidzIHRleHQuXHJcbmNvbnN0IGZvb3RlclRleHRTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiNXB4IGF1dG8gNXB4IDM0NXB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCI1cHhcIixcclxuICB3aWR0aDogXCIzMDZweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcmlnaHQgbWFyZ2luLCB0aGUgZm9udCBjb2xvdXIgXHJcbmNvbnN0IGhlYXJ0U3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgY29sb3I6IFwiIzgwMDAwMFwiLFxyXG4gIGZpbHRlcjogXCJkcm9wLXNoYWRvdygxcHggMnB4IDJweCAjMDAwMDAwKVwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2Nyb2xsQnV0dG9uU3R5bGUgPSB7XHJcbiAgbWFyZ2luQm90dG9tOiBcIi0xMHB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiMzVweFwiLFxyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuLy8gQ3JlYXRlZCBvbk1vdXNlT3ZlciBhbmQgb25Nb3VzZU91dCBldmVudCBoYW5kbGVyIGZ1bmN0aW9ucyB0byBjaGFuZ2UgdGhlIGZvbnQgY29sb3VycyBvZiB0aGUgc2Nyb2xsIGljb24gb25jZSBob3ZlcmVkIG92ZXIgYW5kIHRvIGNoYW5nZVxyXG4vLyBiYWNrIHRoZSBjb2xvdXIgd2hlbiB0aGUgbGlua3MgYXJlIG5vIGxvbmdlciBob3ZlcmVkIG92ZXIuXHJcbmNvbnN0IGNoYW5nZUZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmMWIzNzRcIjtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUJhY2tGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhIGZvb3RlciBmb3IgdGhlIGFwcGxpY2F0aW9uIHRoYXQgZGlzcGxheXMgdGV4dCBpbiBhIGhlYWRlciBmb3JtYXQgYW5kIGEgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uLiBBbHNvIGluY2x1ZGVkIHRoZSBFZGFtYW0gQVBJJ3MgbG9nby5cclxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRoYXQsIG9uY2UgdGhlIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbiBpcyBjbGlja2VkIG9uLCB3aWxsIHNjcm9sbCB0aGUgcGFnZSBzbW9vdGhseSB0byB0aGUgdG9wLlxyXG4gKiBAcmV0dXJucyBGb290ZXIgd2l0aCBoZWFkZXIgdGV4dCBhbmQgYSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24uXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17ZWRhbWFtU3R5bGV9XHJcbiAgICAgICAgICAgIGlkPVwiZWRhbWFtLWJhZGdlXCJcclxuICAgICAgICAgICAgZGF0YS1jb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgei1pbmRleD1cIjFcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGg2IHN0eWxlPXtmb290ZXJUZXh0U3R5bGV9PlxyXG4gICAgICAgICAgICBDUkVBVEVEIFdJVEggPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSBzdHlsZT17aGVhcnRTdHlsZX0gLz5cclxuICAgICAgICAgICAgQlkgQ0hBTkVMTEUgQsOWU0lHRVJcclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFBbmdsZURvdWJsZVVwfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2Nyb2xsIHRvIFRvcFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3Njcm9sbEJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBmb290ZXIuanMgdG8gQXBwLmpzLlxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=