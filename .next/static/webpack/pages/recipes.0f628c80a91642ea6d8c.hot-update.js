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
}; // Set the size (minHeight, height x width), the padding and aligned the content to the center using the j

var recipeCardHeaderStyle = {
  minHeight: "60px",
  height: "auto",
  width: "100%",
  padding: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}; // Set the bottom margins of the images.

var imageStyle = {
  marginBottom: "5px"
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
            style: recipeCardHeaderStyle,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: item.recipe.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Img, {
              src: item.recipe.image,
              alt: "Recipe Photograph",
              onError: function onError(e) {
                e.target.src = "/static/images/TooDelicious.png";
              },
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Recipe By:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    children: item.recipe.source
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Cuisine:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.cuisineType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Meal Type:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.mealType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              href: item.recipe.url,
              target: "_blank",
              style: buttonStyle,
              children: "View Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJyZWNpcGVDYXJkSGVhZGVyU3R5bGUiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJpbWFnZVN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2FwaXRhbExldHRlciIsInRleHRUcmFuc2Zvcm0iLCJidXR0b25TdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwiaGl0cyIsIm1hcCIsIml0ZW0iLCJpIiwicmVjaXBlIiwibGFiZWwiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJzb3VyY2UiLCJjdWlzaW5lVHlwZSIsIm1lYWxUeXBlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxTQUFPLEVBQUUsTUFEa0I7QUFFM0JDLHFCQUFtQixFQUFFO0FBRk0sQ0FBN0IsQyxDQUtBOztBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLE9BRGU7QUFFdEJDLFFBQU0sRUFBRSxVQUZjO0FBR3RCQyxTQUFPLEVBQUU7QUFIYSxDQUF4QixDLENBTUE7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLFdBQVMsRUFBRSxNQURpQjtBQUU1QkMsUUFBTSxFQUFFLE1BRm9CO0FBRzVCTCxPQUFLLEVBQUUsTUFIcUI7QUFJNUJFLFNBQU8sRUFBRSxLQUptQjtBQUs1QkwsU0FBTyxFQUFFLE1BTG1CO0FBTTVCUyxnQkFB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QUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQWpERCxDLENBbURBOzs7S0FuRE1MLGE7QUFvRE4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy4wZjYyOGM4MGE5MTY0MmVhNmQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBSZWNpcGVJbmZvIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXQgZm9yIHRoZSByZWNpcGUgY29udGFpbmVyIHRvIGRpc3BsYXkgYXMgZmxleCBhbmQgdGhlIGRpcmVjdGlvbiB0byBiZSBhIHJvdy5cclxuY29uc3QgcmVjaXBlQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmciAxZnJcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGgsIHRoZSBtYXJnaW5zIGFuZCB0aGUgcGFkZGluZyBvZiB0aGUgcmVjaXBlIGNhcmRzLlxyXG5jb25zdCByZWNpcGVDYXJkU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiMzAwcHhcIixcclxuICBtYXJnaW46IFwiMTBweCAzcHhcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAobWluSGVpZ2h0LCBoZWlnaHQgeCB3aWR0aCksIHRoZSBwYWRkaW5nIGFuZCBhbGlnbmVkIHRoZSBjb250ZW50IHRvIHRoZSBjZW50ZXIgdXNpbmcgdGhlIGpcclxuY29uc3QgcmVjaXBlQ2FyZEhlYWRlclN0eWxlID0ge1xyXG4gIG1pbkhlaWdodDogXCI2MHB4XCIsXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgcGFkZGluZzogXCIwcHhcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBib3R0b20gbWFyZ2lucyBvZiB0aGUgaW1hZ2VzLlxyXG5jb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxufTtcclxuXHJcbi8vIFNldCBmb3IgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgbWVhbCBhbmQgY3Vpc2luZSB0eXBlIHRvIGJlIGNhcGl0YWxpc2VkLlxyXG5jb25zdCBjYXBpdGFsTGV0dGVyID0ge1xyXG4gIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3VyIG9mIHRoZSBidXR0b25zLlxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG4gIGJvcmRlcjogXCIjMDAwMDAwXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgc2VhcmNoIHJlc3VsdHMgZnJvbSB0aGUgaW5kZXggcGFnZS5cclxuICogQHJldHVybnMgbGFiZWwsIGltYWdlLCBzb3VyY2UsIGN1aXNpbmVUeXBlLCBtZWFsVHlwZSwgdXJsLlxyXG4gKiBVc2VkIG1hcCgpIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZGF0YSBhbmQgdG8gcmVjZWl2ZSB0aGUgZGF0YSBhcyBwZXIgdGhlIHNlYXJjaCBxdWVyeS5cclxuICogU2V0IGEga2V5IHVzaW5nIHRoZSBpbmRleCBvZiB0aGUgbWFwLlxyXG4gKiBGb3IgdGhlIGltYWdlcyAtIElmIGEgcmVjaXBlIGRvZXMgbm90IGhhdmUgYW4gaW1hZ2UsIEkgc2V0IHVwIGZvciBhbm90aGVyIGdlbmVyaWMgaW1hZ2UgdG8gZGlzcGxheSBpbnN0ZWFkLiBJIGRpZCB0aGlzIHVzaW5nIG9uRXJyb3IsXHJcbiAqIHNldHRpbmcgYW4gZXZlbnQgdG8gcmV0dXJuIHRoZSBhbHRlcm5hdGl2ZSBzb3VyY2UuXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3JlY2lwZUNvbnRhaW5lclN0eWxlfT5cclxuICAgICAge3Jlc3VsdHMuaGl0cy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENhcmQga2V5PXtpfSBzdHlsZT17cmVjaXBlQ2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtyZWNpcGVDYXJkSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxoNT57aXRlbS5yZWNpcGUubGFiZWx9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZC5JbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5yZWNpcGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJSZWNpcGUgUGhvdG9ncmFwaFwiXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBcIi9zdGF0aWMvaW1hZ2VzL1Rvb0RlbGljaW91cy5wbmdcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWNpcGUgQnk6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucmVjaXBlLnNvdXJjZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkN1aXNpbmU6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NhcGl0YWxMZXR0ZXJ9PntpdGVtLnJlY2lwZS5jdWlzaW5lVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1lYWwgVHlwZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLm1lYWxUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Q2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5yZWNpcGUudXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWaWV3IFJlY2lwZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBTZWFyY2hSZXN1bHRzIHRvIHRoZSByZWNpcGVzIHBhZ2UuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=