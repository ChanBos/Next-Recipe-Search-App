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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _RecipeInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeInfo */ "./components/RecipeInfo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\SearchResults.js",
    _this = undefined;

// Imported components from React Bootstrap.
 // Importing the RecipeInfo component.


/**
 * Styled the RecipeInfo component.
 */
// Set for the recipe container to display as flex and the direction to be a row.,

var recipeContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr"
};
var recipeCardStyle = {
  width: "300px",
  margin: "10px 3px",
  padding: "10px"
};
var imageStyle = {
  margin: "10px 0px"
};
var capitalLetter = {
  textTransform: "capitalize"
};
var cardFooterStyle = {
  display: "flex",
  flexDirection: "row"
};
var buttonStyle = {
  backgroundColor: "#393d49",
  border: "#000000",
  marginLeft: "30px"
};

var SearchResults = function SearchResults(_ref) {
  var results = _ref.results;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: recipeContainerStyle,
    children: results.hits.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
          style: recipeCardStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: item.recipe.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
              src: item.recipe.image,
              alt: "Recipe Photograph",
              onError: function onError(e) {
                e.target.src = "/static/images/TooDelicious.png";
              },
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Recipe By:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    children: item.recipe.source
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Cuisine:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.cuisineType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    children: "Meal Type:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    style: capitalLetter,
                    children: item.recipe.mealType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {
            style: cardFooterStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RecipeInfo__WEBPACK_IMPORTED_MODULE_1__.default, {
              results: results
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
              href: item.recipe.url,
              target: "_blank",
              style: buttonStyle,
              children: "View Recipe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sIm5hbWVzIjpbInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJyZWNpcGVDYXJkU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJpbWFnZVN0eWxlIiwiY2FwaXRhbExldHRlciIsInRleHRUcmFuc2Zvcm0iLCJjYXJkRm9vdGVyU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwiU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJoaXRzIiwibWFwIiwiaXRlbSIsImkiLCJyZWNpcGUiLCJsYWJlbCIsImltYWdlIiwiZSIsInRhcmdldCIsInNyYyIsInNvdXJjZSIsImN1aXNpbmVUeXBlIiwibWVhbFR5cGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxTQUFPLEVBQUUsTUFEa0I7QUFFM0JDLHFCQUFtQixFQUFFO0FBRk0sQ0FBN0I7QUFLQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxPQURlO0FBRXRCQyxRQUFNLEVBQUUsVUFGYztBQUd0QkMsU0FBTyxFQUFFO0FBSGEsQ0FBeEI7QUFNQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJGLFFBQU0sRUFBRTtBQURTLENBQW5CO0FBSUEsSUFBTUcsYUFBYSxHQUFHO0FBQ3BCQyxlQUFhLEVBQUU7QUFESyxDQUF0QjtBQUlBLElBQU1DLGVBQWUsR0FBRztBQUN0QlQsU0FBTyxFQUFFLE1BRGE7QUFFdEJVLGVBQWEsRUFBRTtBQUZPLENBQXhCO0FBS0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxpQkFBZSxFQUFFLFNBREM7QUFFbEJDLFFBQU0sRUFBRSxTQUZVO0FBR2xCQyxZQUFVLEVBQUU7QUFITSxDQUFwQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRXJDLHNCQUNFO0FBQUssU0FBSyxFQUFFakIsb0JBQVo7QUFBQSxjQUNHaUIsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsMEJBQ2hCLDhEQUFDLGdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBYyxlQUFLLEVBQUVsQixlQUFyQjtBQUFBLGtDQUNFLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS2lCLElBQUksQ0FBQ0UsTUFBTCxDQUFZQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMscURBQUQ7QUFDRSxpQkFBRyxFQUFFSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUUsS0FEbkI7QUFFRSxpQkFBRyxFQUFDLG1CQUZOO0FBR0UscUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2RBLGlCQUFDLENBQUNDLE1BQUYsQ0FBU0MsR0FBVCxHQUFlLGlDQUFmO0FBQ0QsZUFMSDtBQU1FLG1CQUFLLEVBQUVwQjtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFVRTtBQUFBLHFDQUNFO0FBQUEsd0NBQ0U7QUFBQSwwQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQUthLElBQUksQ0FBQ0UsTUFBTCxDQUFZTTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUtFO0FBQUEsMENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFJLHlCQUFLLEVBQUVwQixhQUFYO0FBQUEsOEJBQTJCWSxJQUFJLENBQUNFLE1BQUwsQ0FBWU87QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFTRTtBQUFBLDBDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBSSx5QkFBSyxFQUFFckIsYUFBWDtBQUFBLDhCQUEyQlksSUFBSSxDQUFDRSxNQUFMLENBQVlRO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBNEJFLDhEQUFDLHdEQUFEO0FBQWEsaUJBQUssRUFBRXBCLGVBQXBCO0FBQUEsb0NBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxxQkFBTyxFQUFFTztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFDRSxrQkFBSSxFQUFFRyxJQUFJLENBQUNFLE1BQUwsQ0FBWVMsR0FEcEI7QUFFRSxvQkFBTSxFQUFDLFFBRlQ7QUFHRSxtQkFBSyxFQUFFbkIsV0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJGO0FBQUEsV0FBV1MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBakRELEMsQ0FtREE7OztLQW5ETUwsYTtBQW9ETiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzLjlmZWQ0OWVlZjkyYTQ1OTNlMTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gSW1wb3J0aW5nIHRoZSBSZWNpcGVJbmZvIGNvbXBvbmVudC5cclxuaW1wb3J0IFJlY2lwZUluZm8gZnJvbSBcIi4vUmVjaXBlSW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgUmVjaXBlSW5mbyBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IGZvciB0aGUgcmVjaXBlIGNvbnRhaW5lciB0byBkaXNwbGF5IGFzIGZsZXggYW5kIHRoZSBkaXJlY3Rpb24gdG8gYmUgYSByb3cuLFxyXG5cclxuY29uc3QgcmVjaXBlQ29udGFpbmVyU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmciAxZnJcIixcclxufTtcclxuXHJcbmNvbnN0IHJlY2lwZUNhcmRTdHlsZSA9IHtcclxuICB3aWR0aDogXCIzMDBweFwiLFxyXG4gIG1hcmdpbjogXCIxMHB4IDNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMTBweCAwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNhcGl0YWxMZXR0ZXIgPSB7XHJcbiAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkRm9vdGVyU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbiAgYm9yZGVyOiBcIiMwMDAwMDBcIixcclxuICBtYXJnaW5MZWZ0OiBcIjMwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoeyByZXN1bHRzIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3JlY2lwZUNvbnRhaW5lclN0eWxlfT5cclxuICAgICAge3Jlc3VsdHMuaGl0cy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENhcmQga2V5PXtpfSBzdHlsZT17cmVjaXBlQ2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT57aXRlbS5yZWNpcGUubGFiZWx9PC9oNT5cclxuICAgICAgICAgICAgICA8Q2FyZC5JbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5yZWNpcGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJSZWNpcGUgUGhvdG9ncmFwaFwiXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBcIi9zdGF0aWMvaW1hZ2VzL1Rvb0RlbGljaW91cy5wbmdcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWNpcGUgQnk6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ucmVjaXBlLnNvdXJjZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkN1aXNpbmU6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NhcGl0YWxMZXR0ZXJ9PntpdGVtLnJlY2lwZS5jdWlzaW5lVHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1lYWwgVHlwZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLm1lYWxUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkZvb3RlciBzdHlsZT17Y2FyZEZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8UmVjaXBlSW5mbyByZXN1bHRzPXtyZXN1bHRzfSAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucmVjaXBlLnVybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmlldyBSZWNpcGVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgcmVjaXBlRGV0YWlscyB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=