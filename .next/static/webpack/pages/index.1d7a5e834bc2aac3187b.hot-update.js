self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppDisplay */ "./components/AppDisplay.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\pages\\index.js",
    _this = undefined;

// Imported the Link API to support client-side navigation.
 // Imported AppDisplay to set the holistic style of this page.

 // Imported Carousel from React Bootstrap.

 // Importing the SearchForm component.


/**
 * Styled the home page.
 */
// Set for the overflow to be hidden horizontally, as well as vertically. Also set the size (height x width) of the carousel.

var carouselStyle = {
  overflowX: "hidden",
  overflowY: "hidden",
  height: "auto",
  width: "auto"
}; // Set the height and width of the images to auto.

var imageStyle = {
  width: "auto",
  height: "auto"
}; // Set the height, width and bottom margin

var logoStyle = {
  height: "450px",
  width: "auto",
  marginBottom: "70px"
};
/**
 * Applied the styles and passed the AppDisplay props.
 * @returns Styled home page, displaying a styled introduction header text section an image and a header component.
 */

var Home = function Home(props) {
  var search = props.search,
      onInputChange = props.onInputChange;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel, {
          variant: "dark",
          style: carouselStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Breakfast.jpg",
              alt: "First slide",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Dinner.jpg",
              alt: "Second slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Bake.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Burger.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Casserole.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pizza.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pudding.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
}; // Exported home page to be generated.


_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2Fyb3VzZWxTdHlsZSIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2VTdHlsZSIsImxvZ29TdHlsZSIsIm1hcmdpbkJvdHRvbSIsIkhvbWUiLCJwcm9wcyIsInNlYXJjaCIsIm9uSW5wdXRDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsV0FBUyxFQUFFLFFBRFM7QUFFcEJDLFdBQVMsRUFBRSxRQUZTO0FBR3BCQyxRQUFNLEVBQUUsTUFIWTtBQUlwQkMsT0FBSyxFQUFFO0FBSmEsQ0FBdEIsQyxDQU9BOztBQUNBLElBQU1DLFVBQVUsR0FBRztBQUNqQkQsT0FBSyxFQUFDLE1BRFc7QUFFakJELFFBQU0sRUFBQztBQUZVLENBQW5CLEMsQ0FLQTs7QUFDQSxJQUFNRyxTQUFTLEdBQUc7QUFDaEJILFFBQU0sRUFBRSxPQURRO0FBRWhCQyxPQUFLLEVBQUUsTUFGUztBQUdoQkcsY0FBWSxFQUFFO0FBSEUsQ0FBbEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNkQyxNQURjLEdBQ1lELEtBRFosQ0FDZEMsTUFEYztBQUFBLE1BQ05DLGFBRE0sR0FDWUYsS0FEWixDQUNORSxhQURNO0FBR3RCLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMkRBQUQ7QUFBQSw2QkFDRTtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQVUsaUJBQU8sRUFBQyxNQUFsQjtBQUF5QixlQUFLLEVBQUVYLGFBQWhDO0FBQUEsa0NBQ0UsOERBQUMsMERBQUQ7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsZUFEWjtB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bUJBNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0hELENBdkhELEMsQ0F5SEE7OztLQXpITUgsSTtBQTBITiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDdhNWU4MzRiYzJhYWMzMTg3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBBcHBEaXNwbGF5IHRvIHNldCB0aGUgaG9saXN0aWMgc3R5bGUgb2YgdGhpcyBwYWdlLlxyXG5pbXBvcnQgQXBwRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEaXNwbGF5XCI7XHJcbi8vIEltcG9ydGVkIENhcm91c2VsIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gSW1wb3J0aW5nIHRoZSBTZWFyY2hGb3JtIGNvbXBvbmVudC5cclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgaG9tZSBwYWdlLlxyXG4gKi9cclxuXHJcbi8vIFNldCBmb3IgdGhlIG92ZXJmbG93IHRvIGJlIGhpZGRlbiBob3Jpem9udGFsbHksIGFzIHdlbGwgYXMgdmVydGljYWxseS4gQWxzbyBzZXQgdGhlIHNpemUgKGhlaWdodCB4IHdpZHRoKSBvZiB0aGUgY2Fyb3VzZWwuXHJcbmNvbnN0IGNhcm91c2VsU3R5bGUgPSB7XHJcbiAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gIG92ZXJmbG93WTogXCJoaWRkZW5cIixcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgaW1hZ2VzIHRvIGF1dG8uXHJcbmNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgd2lkdGg6XCJhdXRvXCIsXHJcbiAgaGVpZ2h0OlwiYXV0b1wiLFxyXG59XHJcblxyXG4vLyBTZXQgdGhlIGhlaWdodCwgd2lkdGggYW5kIGJvdHRvbSBtYXJnaW5cclxuY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gIGhlaWdodDogXCI0NTBweFwiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5Cb3R0b206IFwiNzBweFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpZWQgdGhlIHN0eWxlcyBhbmQgcGFzc2VkIHRoZSBBcHBEaXNwbGF5IHByb3BzLlxyXG4gKiBAcmV0dXJucyBTdHlsZWQgaG9tZSBwYWdlLCBkaXNwbGF5aW5nIGEgc3R5bGVkIGludHJvZHVjdGlvbiBoZWFkZXIgdGV4dCBzZWN0aW9uIGFuIGltYWdlIGFuZCBhIGhlYWRlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc2VhcmNoLCBvbklucHV0Q2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcHBEaXNwbGF5PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17Y2Fyb3VzZWxTdHlsZX0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQnJlYWtmYXN0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb01haW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9EaW5uZXIuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQmFrZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0J1cmdlci5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0Nhc3Nlcm9sZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1BpenphLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJUaGlyZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvUHVkZGluZy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BcHBEaXNwbGF5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIGhvbWUgcGFnZSB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=