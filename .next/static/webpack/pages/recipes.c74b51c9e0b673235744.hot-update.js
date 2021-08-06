self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./components/RecipeInfo.js":
/*!**********************************!*\
  !*** ./components/RecipeInfo.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\RecipeInfo.js",
    _this = undefined,
    _s = $RefreshSig$();

// Imported react libraries and hooks.
 // Imported components from React Bootstrap.

 // Styled the button's background colour and border.

var buttonStyle = {
  backgroundColor: "#393d49",
  border: "#000000"
};
/**
 * Set the initial state of the modal to not show.
 * Set the handlers to show the modal once the handleShow() function is called (boolean = true) and to not show
 * once the onHide() function is called (boolean = false).
 * Returning the health and diet information from the API.
 */

var RecipeInfo = function RecipeInfo(_ref) {
  _s();

  var results = _ref.results;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  }; //   const handleShow = (item) => {
  //     setActiveItem({ activeItem: item }, () => setShow({ show: true }));
  //   }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      title: "Recipe Information",
      onClick: handleShow,
      style: buttonStyle,
      children: "Health Information"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), results.hits.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        show: show,
        onHide: handleClose,
        centered: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
          closeButton: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
            children: item.recipe.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Health:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: item.recipe.healthLabels
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "Dietary Information:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: item.recipe.dietLabels
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: handleClose,
            style: buttonStyle,
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
}; // Exported CarList to App.js.


_s(RecipeInfo, "h51+j55phY1JOy3G85EsxTLI6gY=");

_c = RecipeInfo;
/* harmony default export */ __webpack_exports__["default"] = (RecipeInfo);

var _c;

$RefreshReg$(_c, "RecipeInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVJbmZvLmpzIl0sIm5hbWVzIjpbImJ1dHRvblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiUmVjaXBlSW5mbyIsInJlc3VsdHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJoaXRzIiwibWFwIiwiaXRlbSIsImkiLCJyZWNpcGUiLCJsYWJlbCIsImhlYWx0aExhYmVscyIsImRpZXRMYWJlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUdBOztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsaUJBQWUsRUFBRSxTQURDO0FBRWxCQyxRQUFNLEVBQUU7QUFGVSxDQUFwQjtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDVkMsK0NBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsbUJBRUVGLCtDQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFM0JHLFVBRjJCO0FBQUEsTUFFZkMsYUFGZTs7QUFJbEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNSCxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNSixPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUEsR0FBbkIsQ0FMa0MsQ0FPcEM7QUFDQTtBQUNBOzs7QUFFRSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFLLEVBQUMsb0JBRlI7QUFHRSxhQUFPLEVBQUVJLFVBSFg7QUFJRSxXQUFLLEVBQUVYLFdBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVVHSSxPQUFPLENBQUNRLElBQVIsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSwwQkFDaEIsOERBQUMsa0RBQUQ7QUFBZSxZQUFJLEVBQUVULElBQXJCO0FBQTJCLGNBQU0sRUFBRUksV0FBbkM7QUFBZ0QsZ0JBQVEsTUFBeEQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFjLHFCQUFXLE1BQXpCO0FBQUEsaUNBQ0UsOERBQUMsd0RBQUQ7QUFBQSxzQkFBY0ksSUFBSSxDQUFDRSxNQUFMLENBQVlDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsdURBQUQ7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsNEJBQUtILElBQUksQ0FBQ0UsTUFBTCxDQUFZRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFLSixJQUFJLENBQUNFLE1BQUwsQ0FBWUc7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFrQkUsOERBQUMseURBQUQ7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFPLEVBQUMsV0FEVjtBQUVFLG1CQUFPLEVBQUVULFdBRlg7QUFHRSxpQkFBSyxFQUFFVixXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQSxTQUFZZSxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFqQixDQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBdERELEMsQ0F3REE7OztHQXhETVosVTs7S0FBQUEsVTtBQXlETiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLmM3NGI1MWM5ZTBiNjczMjM1NzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCByZWFjdCBsaWJyYXJpZXMgYW5kIGhvb2tzLlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbi8vIFN0eWxlZCB0aGUgYnV0dG9uJ3MgYmFja2dyb3VuZCBjb2xvdXIgYW5kIGJvcmRlci5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxuICBib3JkZXI6IFwiIzAwMDAwMFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgbW9kYWwgdG8gbm90IHNob3cuXHJcbiAqIFNldCB0aGUgaGFuZGxlcnMgdG8gc2hvdyB0aGUgbW9kYWwgb25jZSB0aGUgaGFuZGxlU2hvdygpIGZ1bmN0aW9uIGlzIGNhbGxlZCAoYm9vbGVhbiA9IHRydWUpIGFuZCB0byBub3Qgc2hvd1xyXG4gKiBvbmNlIHRoZSBvbkhpZGUoKSBmdW5jdGlvbiBpcyBjYWxsZWQgKGJvb2xlYW4gPSBmYWxzZSkuXHJcbiAqIFJldHVybmluZyB0aGUgaGVhbHRoIGFuZCBkaWV0IGluZm9ybWF0aW9uIGZyb20gdGhlIEFQSS5cclxuICovXHJcblxyXG5jb25zdCBSZWNpcGVJbmZvID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpO1xyXG4gIFxyXG4vLyAgIGNvbnN0IGhhbmRsZVNob3cgPSAoaXRlbSkgPT4ge1xyXG4vLyAgICAgc2V0QWN0aXZlSXRlbSh7IGFjdGl2ZUl0ZW06IGl0ZW0gfSwgKCkgPT4gc2V0U2hvdyh7IHNob3c6IHRydWUgfSkpO1xyXG4vLyAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB0aXRsZT1cIlJlY2lwZSBJbmZvcm1hdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd31cclxuICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgID5cclxuICAgICAgICBIZWFsdGggSW5mb3JtYXRpb25cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICB7cmVzdWx0cy5oaXRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgIDxNb2RhbCBrZXk9e2l9IHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9IGNlbnRlcmVkPlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPntpdGVtLnJlY2lwZS5sYWJlbH08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPkhlYWx0aDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucmVjaXBlLmhlYWx0aExhYmVsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPkRpZXRhcnkgSW5mb3JtYXRpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlY2lwZS5kaWV0TGFiZWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBDYXJMaXN0IHRvIEFwcC5qcy5cclxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlSW5mbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==