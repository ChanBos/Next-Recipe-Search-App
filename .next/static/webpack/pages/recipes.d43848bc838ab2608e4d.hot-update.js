self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\SearchResults.js",
    _this = undefined;

// Imported components from React Bootstrap.

/**
 * Styled the RecipeInfo component.
 */
// Set for the recipe container to display as flex and the direction to be a row.

var recipeContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr"
}; // Set the width, the margins and the padding of the recipe cards.

var recipeCardStyle = {
  width: "300px",
  margin: "10px 3px",
  padding: "10px"
}; // Set the margins of the images.

var imageStyle = {
  margin: "10px 0px"
}; // Set for the first letter of the meal and cuisine type to be capitalised. 

var capitalLetter = {
  textTransform: "capitalize"
}; // Set the background and border colour of the buttons.

var buttonStyle = {
  backgroundColor: "#393d49",
  border: "#000000"
};
/**
 * Created a function to return the search results from the index page.
 * Passed the props to be returned: label, image, source, cuisineType, mealType, url.
 * Used map() to iterate over the data and to receive the data as per the search query
 */

var SearchResults = function SearchResults(_ref) {
  var results = _ref.results;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: recipeContainerStyle,
    children: results.hits.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
          style: recipeCardStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: item.recipe.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Img, {
              src: item.recipe.image,
              alt: "Recipe Photograph",
              onError: function onError(e) {
                e.target.src = "/static/images/TooDelicious.png";
              },
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Recipe By:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    children: item.recipe.source
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Cuisine:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.cuisineType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Meal Type:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.mealType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              href: item.recipe.url,
              target: "_blank",
              style: buttonStyle,
              children: "View Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
}; // Exported recipeDetails to be generated.


_c = SearchResults;
/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

var _c;

$RefreshReg$(_c, "SearchResults");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJpbWFnZVN0eWxlIiwiY2FwaXRhbExldHRlciIsInRleHRUcmFuc2Zvcm0iLCJidXR0b25TdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwiaGl0cyIsIm1hcCIsIml0ZW0iLCJpIiwicmVjaXBlIiwibGFiZWwiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJzb3VyY2UiLCJjdWlzaW5lVHlwZSIsIm1lYWxUeXBlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxTQUFPLEVBQUUsTUFEa0I7QUFFM0JDLHFCQUFtQixFQUFFO0FBRk0sQ0FBN0IsQyxDQUtBOztBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLE9BRGU7QUFFdEJDLFFBQU0sRUFBRSxVQUZjO0FBR3RCQyxTQUFPLEVBQUU7QUFIYSxDQUF4QixDLENBTUE7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCRixRQUFNLEVBQUU7QUFEUyxDQUFuQixDLENBSUE7O0FBQ0EsSUFBTUcsYUFBYSxHQUFHO0FBQ3BCQyxlQUFhLEVBQUU7QUFESyxDQUF0QixDLENBSUE7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxpQkFBZSxFQUFFLFNBREM7QUFFbEJDLFFBQU0sRUFBRTtBQUZVLENBQXBCO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRXJDLHNCQUNFO0FBQUssU0FBSyxFQUFFZCxvQkFBWjtBQUFBLGNBQ0djLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDBCQUNoQiw4REFBQyxnREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQWMsZUFBSyxFQUFFZixlQUFyQjtBQUFBLGtDQUNFLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS2MsSUFBSSxDQUFDRSxNQUFMLENBQVlDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxxREFBRDtBQUNFLGlCQUFHLEVBQUVILElBQUksQ0FBQ0UsTUFBTCxDQUFZRSxLQURuQjtBQUVFLGlCQUFHLEVBQUMsbUJBRk47QUFHRSxxQkFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsaUJBQUMsQ0FBQ0MsTUFBRixDQUFTQyxHQUFULEdBQWUsaUNBQWY7QUFDRCxlQUxIO0FBTUUsbUJBQUssRUFBRWpCO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVVFO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFBLDBDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQSw4QkFBS1UsSUFBSSxDQUFDRSxNQUFMLENBQVlNO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBQSwwQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUkseUJBQUssRUFBRWpCLGFBQVg7QUFBQSw4QkFBMkJTLElBQUksQ0FBQ0UsTUFBTCxDQUFZTztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQVNFO0FBQUEsMENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFJLHlCQUFLLEVBQUVsQixhQUFYO0FBQUEsOEJBQTJCUyxJQUFJLENBQUNFLE1BQUwsQ0FBWVE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUE0QkUsOERBQUMsd0RBQUQ7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUNFLGtCQUFJLEVBQUVWLElBQUksQ0FBQ0UsTUFBTCxDQUFZUyxHQURwQjtBQUVFLG9CQUFNLEVBQUMsUUFGVDtBQUdFLG1CQUFLLEVBQUVsQixXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkY7QUFBQSxXQUFXUSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FoREQsQyxDQWtEQTs7O0tBbERNTCxhO0FBbUROLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMuZDQzODQ4YmM4MzhhYjI2MDhlNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgUmVjaXBlSW5mbyBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IGZvciB0aGUgcmVjaXBlIGNvbnRhaW5lciB0byBkaXNwbGF5IGFzIGZsZXggYW5kIHRoZSBkaXJlY3Rpb24gdG8gYmUgYSByb3cuXHJcbmNvbnN0IHJlY2lwZUNvbnRhaW5lclN0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHdpZHRoLCB0aGUgbWFyZ2lucyBhbmQgdGhlIHBhZGRpbmcgb2YgdGhlIHJlY2lwZSBjYXJkcy5cclxuY29uc3QgcmVjaXBlQ2FyZFN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjMwMHB4XCIsXHJcbiAgbWFyZ2luOiBcIjEwcHggM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxMHB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIG1hcmdpbnMgb2YgdGhlIGltYWdlcy5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMTBweCAwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCBmb3IgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgbWVhbCBhbmQgY3Vpc2luZSB0eXBlIHRvIGJlIGNhcGl0YWxpc2VkLiBcclxuY29uc3QgY2FwaXRhbExldHRlciA9IHtcclxuICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG91ciBvZiB0aGUgYnV0dG9ucy5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxuICBib3JkZXI6IFwiIzAwMDAwMFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHNlYXJjaCByZXN1bHRzIGZyb20gdGhlIGluZGV4IHBhZ2UuXHJcbiAqIFBhc3NlZCB0aGUgcHJvcHMgdG8gYmUgcmV0dXJuZWQ6IGxhYmVsLCBpbWFnZSwgc291cmNlLCBjdWlzaW5lVHlwZSwgbWVhbFR5cGUsIHVybC5cclxuICogVXNlZCBtYXAoKSB0byBpdGVyYXRlIG92ZXIgdGhlIGRhdGEgYW5kIHRvIHJlY2VpdmUgdGhlIGRhdGEgYXMgcGVyIHRoZSBzZWFyY2ggcXVlcnlcclxuICovXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtyZWNpcGVDb250YWluZXJTdHlsZX0+XHJcbiAgICAgIHtyZXN1bHRzLmhpdHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxDYXJkIGtleT17aX0gc3R5bGU9e3JlY2lwZUNhcmRTdHlsZX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+e2l0ZW0ucmVjaXBlLmxhYmVsfTwvaDU+XHJcbiAgICAgICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucmVjaXBlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUmVjaXBlIFBob3RvZ3JhcGhcIlxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gXCIvc3RhdGljL2ltYWdlcy9Ub29EZWxpY2lvdXMucG5nXCI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVjaXBlIEJ5OjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlY2lwZS5zb3VyY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5DdWlzaW5lOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjYXBpdGFsTGV0dGVyfT57aXRlbS5yZWNpcGUuY3Vpc2luZVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NZWFsIFR5cGU6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NhcGl0YWxMZXR0ZXJ9PntpdGVtLnJlY2lwZS5tZWFsVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5yZWNpcGUudXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWaWV3IFJlY2lwZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCByZWNpcGVEZXRhaWxzIHRvIGJlIGdlbmVyYXRlZC5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==