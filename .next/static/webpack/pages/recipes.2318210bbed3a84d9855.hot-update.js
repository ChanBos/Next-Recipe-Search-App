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
  }; //   const handleShow = () => setShow(true);


  var handleShow = function handleShow(item) {
    setActiveItem({
      activeItem: item
    }, function () {
      return setShow({
        show: true
      });
    });
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVJbmZvLmpzIl0sIm5hbWVzIjpbImJ1dHRvblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiUmVjaXBlSW5mbyIsInJlc3VsdHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJpdGVtIiwiaGl0cyIsIm1hcCIsImkiLCJyZWNpcGUiLCJsYWJlbCIsImhlYWx0aExhYmVscyIsImRpZXRMYWJlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUdBOztBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsaUJBQWUsRUFBRSxTQURDO0FBRWxCQyxRQUFNLEVBQUU7QUFGVSxDQUFwQjtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDVkMsK0NBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsbUJBRUVGLCtDQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFM0JHLFVBRjJCO0FBQUEsTUFFZkMsYUFGZTs7QUFJbEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNSCxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsR0FBcEIsQ0FKa0MsQ0FLcEM7OztBQUVFLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQkgsaUJBQWEsQ0FBQztBQUFFRCxnQkFBVSxFQUFFSTtBQUFkLEtBQUQsRUFBdUI7QUFBQSxhQUFNTCxPQUFPLENBQUM7QUFBRUQsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFiO0FBQUEsS0FBdkIsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsV0FBSyxFQUFDLG9CQUZSO0FBR0UsYUFBTyxFQUFFSyxVQUhYO0FBSUUsV0FBSyxFQUFFWCxXQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFVR0ksT0FBTyxDQUFDUyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0YsSUFBRCxFQUFPRyxDQUFQO0FBQUEsMEJBQ2hCLDhEQUFDLGtEQUFEO0FBQWUsWUFBSSxFQUFFVCxJQUFyQjtBQUEyQixjQUFNLEVBQUVJLFdBQW5DO0FBQWdELGdCQUFRLE1BQXhEO0FBQUEsZ0NBQ0UsOERBQUMseURBQUQ7QUFBYyxxQkFBVyxNQUF6QjtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQUEsc0JBQWNFLElBQUksQ0FBQ0ksTUFBTCxDQUFZQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHVEQUFEO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRTtBQUFBLHNDQUNFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFLTCxJQUFJLENBQUNJLE1BQUwsQ0FBWUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFLRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw0QkFBS04sSUFBSSxDQUFDSSxNQUFMLENBQVlHO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBa0JFLDhEQUFDLHlEQUFEO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBTyxFQUFDLFdBRFY7QUFFRSxtQkFBTyxFQUFFVCxXQUZYO0FBR0UsaUJBQUssRUFBRVYsV0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUEsU0FBWWUsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakIsQ0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQXRERCxDLENBd0RBOzs7R0F4RE1aLFU7O0tBQUFBLFU7QUF5RE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy4yMzE4MjEwYmJlZDNhODRkOTg1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgcmVhY3QgbGlicmFyaWVzIGFuZCBob29rcy5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG4vLyBTdHlsZWQgdGhlIGJ1dHRvbidzIGJhY2tncm91bmQgY29sb3VyIGFuZCBib3JkZXIuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbiAgYm9yZGVyOiBcIiMwMDAwMDBcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIG1vZGFsIHRvIG5vdCBzaG93LlxyXG4gKiBTZXQgdGhlIGhhbmRsZXJzIHRvIHNob3cgdGhlIG1vZGFsIG9uY2UgdGhlIGhhbmRsZVNob3coKSBmdW5jdGlvbiBpcyBjYWxsZWQgKGJvb2xlYW4gPSB0cnVlKSBhbmQgdG8gbm90IHNob3dcclxuICogb25jZSB0aGUgb25IaWRlKCkgZnVuY3Rpb24gaXMgY2FsbGVkIChib29sZWFuID0gZmFsc2UpLlxyXG4gKiBSZXR1cm5pbmcgdGhlIGhlYWx0aCBhbmQgZGlldCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBBUEkuXHJcbiAqL1xyXG5cclxuY29uc3QgUmVjaXBlSW5mbyA9ICh7IHJlc3VsdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuLy8gICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGl0ZW0pID0+IHtcclxuICAgIHNldEFjdGl2ZUl0ZW0oeyBhY3RpdmVJdGVtOiBpdGVtIH0sICgpID0+IHNldFNob3coeyBzaG93OiB0cnVlIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdGl0bGU9XCJSZWNpcGUgSW5mb3JtYXRpb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAgSGVhbHRoIEluZm9ybWF0aW9uXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAge3Jlc3VsdHMuaGl0cy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8TW9kYWwga2V5PXtpfSBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfSBjZW50ZXJlZD5cclxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57aXRlbS5yZWNpcGUubGFiZWx9PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5IZWFsdGg6PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlY2lwZS5oZWFsdGhMYWJlbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5EaWV0YXJ5IEluZm9ybWF0aW9uOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5yZWNpcGUuZGlldExhYmVsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgQ2FyTGlzdCB0byBBcHAuanMuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUluZm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=