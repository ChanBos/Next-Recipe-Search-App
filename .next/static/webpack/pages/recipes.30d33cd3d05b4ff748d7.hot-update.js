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
};
var recipeCardHeaderStyle = {
  height: "75px",
  margin: "auto",
  textAlign: "center",
  verticalAlign: "text-middle"
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
 * @returns label, image, source, cuisineType, mealType, url.
 * Used map() to iterate over the data and to receive the data as per the search query.
 * Set a key using the index of the map.
 * For the images - If a recipe does not have an image, I set up for another generic image to display instead. I did this using onError,
 * setting an event to return the alternative source.
 * Applied all of the above styles to their respective elements.
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
              style: recipeCardHeaderStyle,
              children: item.recipe.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
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
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Recipe By:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    children: item.recipe.source
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Cuisine:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.cuisineType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Meal Type:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.mealType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              href: item.recipe.url,
              target: "_blank",
              style: buttonStyle,
              children: "View Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
}; // Exported SearchResults to the recipes page.


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJyZWNpcGVDYXJkSGVhZGVyU3R5bGUiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiaW1hZ2VTdHlsZSIsImNhcGl0YWxMZXR0ZXIiLCJ0ZXh0VHJhbnNmb3JtIiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsImhpdHMiLCJtYXAiLCJpdGVtIiwiaSIsInJlY2lwZSIsImxhYmVsIiwiaW1hZ2UiLCJlIiwidGFyZ2V0Iiwic3JjIiwic291cmNlIiwiY3Vpc2luZVR5cGUiLCJtZWFsVHlwZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxvQkFBb0IsR0FBRztBQUMzQkMsU0FBTyxFQUFFLE1BRGtCO0FBRTNCQyxxQkFBbUIsRUFBRTtBQUZNLENBQTdCLEMsQ0FLQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxPQURlO0FBRXRCQyxRQUFNLEVBQUUsVUFGYztBQUd0QkMsU0FBTyxFQUFFO0FBSGEsQ0FBeEI7QUFNQSxJQUFNQyxxQkFBcUIsR0FBRztBQUM1QkMsUUFBTSxFQUFFLE1BRG9CO0FBRTVCSCxRQUFNLEVBQUMsTUFGcUI7QUFHNUJJLFdBQVMsRUFBQyxRQUhrQjtBQUk1QkMsZUFBYSxFQUFDO0FBSmMsQ0FBOUIsQyxDQU9BOztBQUNBLElBQU1DLFVBQVUsR0FBRztBQUNqQk4sUUFBTSxFQUFFO0FBRFMsQ0FBbkIsQyxDQUlBOztBQUNBLElBQU1PLGFBQWEsR0FBRztBQUNwQkMsZUFBYSxFQUFFO0FBREssQ0FBdEIsQyxDQUlBOztBQUNBLElBQU1DLFdBQVcsR0FBRztBQUNsQkMsaUJBQWUsRUFBRSxTQURDO0FBRWxCQyxRQUFNLEVBQUU7QUFGVSxDQUFwQjtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3JDLHNCQUNFO0FBQUssU0FBSyxFQUFFbEIsb0JBQVo7QUFBQSxjQUNHa0IsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsMEJBQ2hCLDhEQUFDLGdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBYyxlQUFLLEVBQUVuQixlQUFyQjtBQUFBLGtDQUNFLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0U7QUFBSSxtQkFBSyxFQUFFSSxxQkFBWDtBQUFBLHdCQUFtQ2MsSUFBSSxDQUFDRSxNQUFMLENBQVlDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxxREFBRDtBQUNFLGlCQUFHLEVBQUVILElBQUksQ0FBQ0UsTUFBTCxDQUFZRSxLQURuQjtBQUVFLGlCQUFHLEVBQUMsbUJBRk47QUFHRSxxQkFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsaUJBQUMsQ0FBQ0MsTUFBRixDQUFTQyxHQUFULEdBQWUsaUNBQWY7QUFDRCxlQUxIO0FBTUUsbUJBQUssRUFBRWpCO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVVFO0FBQUEscUNBQ0U7QUFBQSx3Q0FDRTtBQUFBLDBDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQSw4QkFBS1UsSUFBSSxDQUFDRSxNQUFMLENBQVlNO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBQSwwQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUkseUJBQUssRUFBRWpCLGFBQVg7QUFBQSw4QkFBMkJTLElBQUksQ0FBQ0UsTUFBTCxDQUFZTztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQVNFO0FBQUEsMENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFJLHlCQUFLLEVBQUVsQixhQUFYO0FBQUEsOEJBQTJCUyxJQUFJLENBQUNFLE1BQUwsQ0FBWVE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUE0QkUsOERBQUMsd0RBQUQ7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUNFLGtCQUFJLEVBQUVWLElBQUksQ0FBQ0UsTUFBTCxDQUFZUyxHQURwQjtBQUVFLG9CQUFNLEVBQUMsUUFGVDtBQUdFLG1CQUFLLEVBQUVsQixXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkY7QUFBQSxXQUFXUSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0EvQ0QsQyxDQWlEQTs7O0tBakRNTCxhO0FBa0ROLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMuMzBkMzNjZDNkMDViNGZmNzQ4ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgUmVjaXBlSW5mbyBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IGZvciB0aGUgcmVjaXBlIGNvbnRhaW5lciB0byBkaXNwbGF5IGFzIGZsZXggYW5kIHRoZSBkaXJlY3Rpb24gdG8gYmUgYSByb3cuXHJcbmNvbnN0IHJlY2lwZUNvbnRhaW5lclN0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHdpZHRoLCB0aGUgbWFyZ2lucyBhbmQgdGhlIHBhZGRpbmcgb2YgdGhlIHJlY2lwZSBjYXJkcy5cclxuY29uc3QgcmVjaXBlQ2FyZFN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjMwMHB4XCIsXHJcbiAgbWFyZ2luOiBcIjEwcHggM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxMHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCByZWNpcGVDYXJkSGVhZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjc1cHhcIixcclxuICBtYXJnaW46XCJhdXRvXCIsXHJcbiAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgdmVydGljYWxBbGlnbjpcInRleHQtbWlkZGxlXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIG1hcmdpbnMgb2YgdGhlIGltYWdlcy5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMTBweCAwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCBmb3IgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgbWVhbCBhbmQgY3Vpc2luZSB0eXBlIHRvIGJlIGNhcGl0YWxpc2VkLlxyXG5jb25zdCBjYXBpdGFsTGV0dGVyID0ge1xyXG4gIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3VyIG9mIHRoZSBidXR0b25zLlxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG4gIGJvcmRlcjogXCIjMDAwMDAwXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgc2VhcmNoIHJlc3VsdHMgZnJvbSB0aGUgaW5kZXggcGFnZS5cclxuICogQHJldHVybnMgbGFiZWwsIGltYWdlLCBzb3VyY2UsIGN1aXNpbmVUeXBlLCBtZWFsVHlwZSwgdXJsLlxyXG4gKiBVc2VkIG1hcCgpIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZGF0YSBhbmQgdG8gcmVjZWl2ZSB0aGUgZGF0YSBhcyBwZXIgdGhlIHNlYXJjaCBxdWVyeS5cclxuICogU2V0IGEga2V5IHVzaW5nIHRoZSBpbmRleCBvZiB0aGUgbWFwLlxyXG4gKiBGb3IgdGhlIGltYWdlcyAtIElmIGEgcmVjaXBlIGRvZXMgbm90IGhhdmUgYW4gaW1hZ2UsIEkgc2V0IHVwIGZvciBhbm90aGVyIGdlbmVyaWMgaW1hZ2UgdG8gZGlzcGxheSBpbnN0ZWFkLiBJIGRpZCB0aGlzIHVzaW5nIG9uRXJyb3IsXHJcbiAqIHNldHRpbmcgYW4gZXZlbnQgdG8gcmV0dXJuIHRoZSBhbHRlcm5hdGl2ZSBzb3VyY2UuXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3JlY2lwZUNvbnRhaW5lclN0eWxlfT5cclxuICAgICAge3Jlc3VsdHMuaGl0cy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENhcmQga2V5PXtpfSBzdHlsZT17cmVjaXBlQ2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17cmVjaXBlQ2FyZEhlYWRlclN0eWxlfT57aXRlbS5yZWNpcGUubGFiZWx9PC9oNT5cclxuICAgICAgICAgICAgICA8Q2FyZC5JbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5yZWNpcGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJSZWNpcGUgUGhvdG9ncmFwaFwiXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBcIi9zdGF0aWMvaW1hZ2VzL1Rvb0RlbGljaW91cy5wbmdcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWNpcGUgQnk6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucmVjaXBlLnNvdXJjZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkN1aXNpbmU6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NhcGl0YWxMZXR0ZXJ9PntpdGVtLnJlY2lwZS5jdWlzaW5lVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1lYWwgVHlwZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLm1lYWxUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnJlY2lwZS51cmx9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZpZXcgUmVjaXBlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIFNlYXJjaFJlc3VsdHMgdG8gdGhlIHJlY2lwZXMgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==