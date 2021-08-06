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
}; // Set the size (minHeight, height x width), the padding and aligned the content to the center using the justify, text and genral alignment 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJyZWNpcGVDYXJkSGVhZGVyU3R5bGUiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJpbWFnZVN0eWxlIiwibWFyZ2luQm90dG9tIiwiY2FwaXRhbExldHRlciIsInRleHRUcmFuc2Zvcm0iLCJidXR0b25TdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwiaGl0cyIsIm1hcCIsIml0ZW0iLCJpIiwicmVjaXBlIiwibGFiZWwiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJzcmMiLCJzb3VyY2UiLCJjdWlzaW5lVHlwZSIsIm1lYWxUeXBlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxTQUFPLEVBQUUsTUFEa0I7QUFFM0JDLHFCQUFtQixFQUFFO0FBRk0sQ0FBN0IsQyxDQUtBOztBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLE9BRGU7QUFFdEJDLFFBQU0sRUFBRSxVQUZjO0FBR3RCQyxTQUFPLEVBQUU7QUFIYSxDQUF4QixDLENBTUE7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLFdBQVMsRUFBRSxNQURpQjtBQUU1QkMsUUFBTSxFQUFFLE1BRm9CO0FBRzVCTCxPQUFLLEVBQUUsTUFIcUI7QUFJNUJFLFNBQU8sRUFBRSxLQUptQjtBQUs1QkwsU0FBTyxFQUFFLE1BTG1CO0FBTTVCUyxnQkFB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QUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQWpERCxDLENBbURBOzs7S0FuRE1MLGE7QUFvRE4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy5jYzU1NWVjMzViNWUyOTJjNmMyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBSZWNpcGVJbmZvIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXQgZm9yIHRoZSByZWNpcGUgY29udGFpbmVyIHRvIGRpc3BsYXkgYXMgZmxleCBhbmQgdGhlIGRpcmVjdGlvbiB0byBiZSBhIHJvdy5cclxuY29uc3QgcmVjaXBlQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmciAxZnJcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGgsIHRoZSBtYXJnaW5zIGFuZCB0aGUgcGFkZGluZyBvZiB0aGUgcmVjaXBlIGNhcmRzLlxyXG5jb25zdCByZWNpcGVDYXJkU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiMzAwcHhcIixcclxuICBtYXJnaW46IFwiMTBweCAzcHhcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgc2l6ZSAobWluSGVpZ2h0LCBoZWlnaHQgeCB3aWR0aCksIHRoZSBwYWRkaW5nIGFuZCBhbGlnbmVkIHRoZSBjb250ZW50IHRvIHRoZSBjZW50ZXIgdXNpbmcgdGhlIGp1c3RpZnksIHRleHQgYW5kIGdlbnJhbCBhbGlnbm1lbnQgXHJcbmNvbnN0IHJlY2lwZUNhcmRIZWFkZXJTdHlsZSA9IHtcclxuICBtaW5IZWlnaHQ6IFwiNjBweFwiLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgYm90dG9tIG1hcmdpbnMgb2YgdGhlIGltYWdlcy5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgZm9yIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIG1lYWwgYW5kIGN1aXNpbmUgdHlwZSB0byBiZSBjYXBpdGFsaXNlZC5cclxuY29uc3QgY2FwaXRhbExldHRlciA9IHtcclxuICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG91ciBvZiB0aGUgYnV0dG9ucy5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMzOTNkNDlcIixcclxuICBib3JkZXI6IFwiIzAwMDAwMFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHNlYXJjaCByZXN1bHRzIGZyb20gdGhlIGluZGV4IHBhZ2UuXHJcbiAqIEByZXR1cm5zIGxhYmVsLCBpbWFnZSwgc291cmNlLCBjdWlzaW5lVHlwZSwgbWVhbFR5cGUsIHVybC5cclxuICogVXNlZCBtYXAoKSB0byBpdGVyYXRlIG92ZXIgdGhlIGRhdGEgYW5kIHRvIHJlY2VpdmUgdGhlIGRhdGEgYXMgcGVyIHRoZSBzZWFyY2ggcXVlcnkuXHJcbiAqIFNldCBhIGtleSB1c2luZyB0aGUgaW5kZXggb2YgdGhlIG1hcC5cclxuICogRm9yIHRoZSBpbWFnZXMgLSBJZiBhIHJlY2lwZSBkb2VzIG5vdCBoYXZlIGFuIGltYWdlLCBJIHNldCB1cCBmb3IgYW5vdGhlciBnZW5lcmljIGltYWdlIHRvIGRpc3BsYXkgaW5zdGVhZC4gSSBkaWQgdGhpcyB1c2luZyBvbkVycm9yLFxyXG4gKiBzZXR0aW5nIGFuIGV2ZW50IHRvIHJldHVybiB0aGUgYWx0ZXJuYXRpdmUgc291cmNlLlxyXG4gKiBBcHBsaWVkIGFsbCBvZiB0aGUgYWJvdmUgc3R5bGVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IHJlc3VsdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtyZWNpcGVDb250YWluZXJTdHlsZX0+XHJcbiAgICAgIHtyZXN1bHRzLmhpdHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxDYXJkIGtleT17aX0gc3R5bGU9e3JlY2lwZUNhcmRTdHlsZX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17cmVjaXBlQ2FyZEhlYWRlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8aDU+e2l0ZW0ucmVjaXBlLmxhYmVsfTwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucmVjaXBlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUmVjaXBlIFBob3RvZ3JhcGhcIlxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gXCIvc3RhdGljL2ltYWdlcy9Ub29EZWxpY2lvdXMucG5nXCI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVjaXBlIEJ5OjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlY2lwZS5zb3VyY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5DdWlzaW5lOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjYXBpdGFsTGV0dGVyfT57aXRlbS5yZWNpcGUuY3Vpc2luZVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NZWFsIFR5cGU6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NhcGl0YWxMZXR0ZXJ9PntpdGVtLnJlY2lwZS5tZWFsVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPENhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucmVjaXBlLnVybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmlldyBSZWNpcGVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgU2VhcmNoUmVzdWx0cyB0byB0aGUgcmVjaXBlcyBwYWdlLlxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9