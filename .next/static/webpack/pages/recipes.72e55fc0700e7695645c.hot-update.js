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
}; // Set the size (minHeight, height x width), the padding and aligned the content to the center using the justify, text and general alignment
// along with changing the display to flex.

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
};
var tableHeaderStyle = {
  width: width
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
              lineNumber: 71,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
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
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Recipe By:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    children: item.recipe.source
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Cuisine:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.cuisineType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Meal Type:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.mealType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              href: item.recipe.url,
              target: "_blank",
              style: buttonStyle,
              children: "View Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJyZWNpcGVDYXJkSGVhZGVyU3R5bGUiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJpbWFnZVN0eWxlIiwibWFyZ2luQm90dG9tIiwidGFibGVIZWFkZXJTdHlsZSIsImNhcGl0YWxMZXR0ZXIiLCJ0ZXh0VHJhbnNmb3JtIiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsImhpdHMiLCJtYXAiLCJpdGVtIiwiaSIsInJlY2lwZSIsImxhYmVsIiwiaW1hZ2UiLCJlIiwidGFyZ2V0Iiwic3JjIiwic291cmNlIiwiY3Vpc2luZVR5cGUiLCJtZWFsVHlwZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxvQkFBb0IsR0FBRztBQUMzQkMsU0FBTyxFQUFFLE1BRGtCO0FBRTNCQyxxQkFBbUIsRUFBRTtBQUZNLENBQTdCLEMsQ0FLQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxPQURlO0FBRXRCQyxRQUFNLEVBQUUsVUFGYztBQUd0QkMsU0FBTyxFQUFFO0FBSGEsQ0FBeEIsQyxDQU1BO0FBQ0E7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLFdBQVMsRUFBRSxNQURpQjtBQUU1QkMsUUFBTSxFQUFFLE1BRm9CO0FBRzVCTCxPQUFLLEVBQUUsTUFIcUI7QUFJNUJFLFNBQU8sRUFBRSxLQUptQjtBQUs1QkwsU0FB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QUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJGO0FBQUEsV0FBV1EsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBakRELEMsQ0FtREE7OztLQW5ETUwsYTtBQW9ETiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjcyZTU1ZmMwNzAwZTc2OTU2NDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIFJlY2lwZUluZm8gY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbi8vIFNldCBmb3IgdGhlIHJlY2lwZSBjb250YWluZXIgdG8gZGlzcGxheSBhcyBmbGV4IGFuZCB0aGUgZGlyZWN0aW9uIHRvIGJlIGEgcm93LlxyXG5jb25zdCByZWNpcGVDb250YWluZXJTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImdyaWRcIixcclxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmclwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCwgdGhlIG1hcmdpbnMgYW5kIHRoZSBwYWRkaW5nIG9mIHRoZSByZWNpcGUgY2FyZHMuXHJcbmNvbnN0IHJlY2lwZUNhcmRTdHlsZSA9IHtcclxuICB3aWR0aDogXCIzMDBweFwiLFxyXG4gIG1hcmdpbjogXCIxMHB4IDNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChtaW5IZWlnaHQsIGhlaWdodCB4IHdpZHRoKSwgdGhlIHBhZGRpbmcgYW5kIGFsaWduZWQgdGhlIGNvbnRlbnQgdG8gdGhlIGNlbnRlciB1c2luZyB0aGUganVzdGlmeSwgdGV4dCBhbmQgZ2VuZXJhbCBhbGlnbm1lbnRcclxuLy8gYWxvbmcgd2l0aCBjaGFuZ2luZyB0aGUgZGlzcGxheSB0byBmbGV4LlxyXG5jb25zdCByZWNpcGVDYXJkSGVhZGVyU3R5bGUgPSB7XHJcbiAgbWluSGVpZ2h0OiBcIjYwcHhcIixcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBib3R0b20gbWFyZ2lucyBvZiB0aGUgaW1hZ2VzLlxyXG5jb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxufTtcclxuXHJcbmNvbnN0IHRhYmxlSGVhZGVyU3R5bGUgPSB7XHJcbiAgd2lkdGhcclxufVxyXG5cclxuLy8gU2V0IGZvciB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBtZWFsIGFuZCBjdWlzaW5lIHR5cGUgdG8gYmUgY2FwaXRhbGlzZWQuXHJcbmNvbnN0IGNhcGl0YWxMZXR0ZXIgPSB7XHJcbiAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGJhY2tncm91bmQgYW5kIGJvcmRlciBjb2xvdXIgb2YgdGhlIGJ1dHRvbnMuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbiAgYm9yZGVyOiBcIiMwMDAwMDBcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSBzZWFyY2ggcmVzdWx0cyBmcm9tIHRoZSBpbmRleCBwYWdlLlxyXG4gKiBAcmV0dXJucyBsYWJlbCwgaW1hZ2UsIHNvdXJjZSwgY3Vpc2luZVR5cGUsIG1lYWxUeXBlLCB1cmwuXHJcbiAqIFVzZWQgbWFwKCkgdG8gaXRlcmF0ZSBvdmVyIHRoZSBkYXRhIGFuZCB0byByZWNlaXZlIHRoZSBkYXRhIGFzIHBlciB0aGUgc2VhcmNoIHF1ZXJ5LlxyXG4gKiBTZXQgYSBrZXkgdXNpbmcgdGhlIGluZGV4IG9mIHRoZSBtYXAuXHJcbiAqIEZvciB0aGUgaW1hZ2VzIC0gSWYgYSByZWNpcGUgZG9lcyBub3QgaGF2ZSBhbiBpbWFnZSwgSSBzZXQgdXAgZm9yIGFub3RoZXIgZ2VuZXJpYyBpbWFnZSB0byBkaXNwbGF5IGluc3RlYWQuIEkgZGlkIHRoaXMgdXNpbmcgb25FcnJvcixcclxuICogc2V0dGluZyBhbiBldmVudCB0byByZXR1cm4gdGhlIGFsdGVybmF0aXZlIHNvdXJjZS5cclxuICogQXBwbGllZCBhbGwgb2YgdGhlIGFib3ZlIHN0eWxlcyB0byB0aGVpciByZXNwZWN0aXZlIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoeyByZXN1bHRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17cmVjaXBlQ29udGFpbmVyU3R5bGV9PlxyXG4gICAgICB7cmVzdWx0cy5oaXRzLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8Q2FyZCBrZXk9e2l9IHN0eWxlPXtyZWNpcGVDYXJkU3R5bGV9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3JlY2lwZUNhcmRIZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGg1PntpdGVtLnJlY2lwZS5sYWJlbH08L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLnJlY2lwZS5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlJlY2lwZSBQaG90b2dyYXBoXCJcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNyYyA9IFwiL3N0YXRpYy9pbWFnZXMvVG9vRGVsaWNpb3VzLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlY2lwZSBCeTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5yZWNpcGUuc291cmNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q3Vpc2luZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLmN1aXNpbmVUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TWVhbCBUeXBlOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjYXBpdGFsTGV0dGVyfT57aXRlbS5yZWNpcGUubWVhbFR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnJlY2lwZS51cmx9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZpZXcgUmVjaXBlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIFNlYXJjaFJlc3VsdHMgdG8gdGhlIHJlY2lwZXMgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==