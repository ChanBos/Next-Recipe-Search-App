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
};
var carouselItemStyle = {
  width: "100% !important",
  margin: "",
  auto: auto
}; // Set the height and width of the images to auto.

var imageStyle = {
  width: "auto",
  height: "auto"
}; // Set the height, width and bottom margin of the logo.

var logoStyle = {
  height: "450px",
  width: "auto",
  marginBottom: "70px"
};
/**
 * Applied the styles and passed the AppDisplay props.
 * Passed the props to enable the search functionality (value={search} and onChange={onInputChange})
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
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Breakfast.jpg",
              alt: "First slide",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Dinner.jpg",
              alt: "Second slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Bake.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Burger.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Casserole.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pizza.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
            style: carouselItemStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pudding.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2Fyb3VzZWxTdHlsZSIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImhlaWdodCIsIndpZHRoIiwiY2Fyb3VzZWxJdGVtU3R5bGUiLCJtYXJnaW4iLCJhdXRvIiwiaW1hZ2VTdHlsZSIsImxvZ29TdHlsZSIsIm1hcmdpbkJvdHRvbSIsIkhvbWUiLCJwcm9wcyIsInNlYXJjaCIsIm9uSW5wdXRDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsV0FBUyxFQUFFLFFBRFM7QUFFcEJDLFdBQVMsRUFBRSxRQUZTO0FBR3BCQyxRQUFNLEVBQUUsTUFIWTtBQUlwQkMsT0FBSyxFQUFFO0FBSmEsQ0FBdEI7QUFPQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkQsT0FBSyxFQUFDLGlCQURrQjtBQUV4QkUsUUFBTSxFQUFDLEVBRmlCO0FBRWRDLE1BQUksRUFBSkE7QUFGYyxDQUExQixDLENBS0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCSixPQUFLLEVBQUUsTUFEVTtBQUVqQkQsUUFBTSxFQUFFO0FBRlMsQ0FBbkIsQyxDQUtBOztBQUNBLElBQU1NLFNBQVMsR0FBRztBQUNoQk4sUUFBTSxFQUFFLE9BRFE7QUFFaEJDLE9BQUssRUFBRSxNQUZTO0FBR2hCTSxjQUFZLEVBQUU7QUFIRSxDQUFsQjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsTUFEYyxHQUNZRCxLQURaLENBQ2RDLE1BRGM7QUFBQSxNQUNOQyxhQURNLEdBQ1lGLEtBRFosQ0FDTkUsYUFETTtBQUd0QixzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDJE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aUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRSw4REFBQyw2REFBRDtBQUFBLHNDQUNFO0FBQ0UsbUJBQUcsRUFBQyxvQ0FETjtBQUVFLG1CQUFHLEVBQUMsY0FGTjtBQUdFLHFCQUFLLEVBQUVJO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQU1FLDhEQUFDLDJEQUFEO0FBQVkscUJBQUssRUFBRUksTUFBbkI7QUFBMkIsd0JBQVEsRUFBRUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9IRCxDQXZIRCxDLENBeUhBOzs7S0F6SE1ILEk7QUEwSE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjM2NWUwMTNmYjEyYTFhNTMyOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgQXBwRGlzcGxheSB0byBzZXQgdGhlIGhvbGlzdGljIHN0eWxlIG9mIHRoaXMgcGFnZS5cclxuaW1wb3J0IEFwcERpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwRGlzcGxheVwiO1xyXG4vLyBJbXBvcnRlZCBDYXJvdXNlbCBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIEltcG9ydGluZyB0aGUgU2VhcmNoRm9ybSBjb21wb25lbnQuXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGhvbWUgcGFnZS5cclxuICovXHJcblxyXG4vLyBTZXQgZm9yIHRoZSBvdmVyZmxvdyB0byBiZSBoaWRkZW4gaG9yaXpvbnRhbGx5LCBhcyB3ZWxsIGFzIHZlcnRpY2FsbHkuIEFsc28gc2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCkgb2YgdGhlIGNhcm91c2VsLlxyXG5jb25zdCBjYXJvdXNlbFN0eWxlID0ge1xyXG4gIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJvdXNlbEl0ZW1TdHlsZSA9IHtcclxuICB3aWR0aDpcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gIG1hcmdpbjpcIlwiLGF1dG9cclxufVxyXG5cclxuLy8gU2V0IHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBpbWFnZXMgdG8gYXV0by5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgaGVpZ2h0LCB3aWR0aCBhbmQgYm90dG9tIG1hcmdpbiBvZiB0aGUgbG9nby5cclxuY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gIGhlaWdodDogXCI0NTBweFwiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5Cb3R0b206IFwiNzBweFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpZWQgdGhlIHN0eWxlcyBhbmQgcGFzc2VkIHRoZSBBcHBEaXNwbGF5IHByb3BzLlxyXG4gKiBQYXNzZWQgdGhlIHByb3BzIHRvIGVuYWJsZSB0aGUgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgKHZhbHVlPXtzZWFyY2h9IGFuZCBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0pXHJcbiAqIEByZXR1cm5zIFN0eWxlZCBob21lIHBhZ2UsIGRpc3BsYXlpbmcgYSBzdHlsZWQgaW50cm9kdWN0aW9uIGhlYWRlciB0ZXh0IHNlY3Rpb24gYW4gaW1hZ2UgYW5kIGEgaGVhZGVyIGNvbXBvbmVudC5cclxuICovXHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZWFyY2gsIG9uSW5wdXRDaGFuZ2UgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFwcERpc3BsYXk+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDYXJvdXNlbCB2YXJpYW50PVwiZGFya1wiIHN0eWxlPXtjYXJvdXNlbFN0eWxlfT5cclxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0gc3R5bGU9e2Nhcm91c2VsSXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0JyZWFrZmFzdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIHN0eWxlPXtjYXJvdXNlbEl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9EaW5uZXIuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIHN0eWxlPXtjYXJvdXNlbEl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9CYWtlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJUaGlyZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIHN0eWxlPXtjYXJvdXNlbEl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9CdXJnZXIuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlRoaXJkIHNsaWRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb01haW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0gc3R5bGU9e2Nhcm91c2VsSXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0Nhc3Nlcm9sZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBzdHlsZT17Y2Fyb3VzZWxJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvUGl6emEuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlRoaXJkIHNsaWRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb01haW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0gc3R5bGU9e2Nhcm91c2VsSXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1B1ZGRpbmcuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlRoaXJkIHNsaWRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb01haW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQXBwRGlzcGxheT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBob21lIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkLlxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9