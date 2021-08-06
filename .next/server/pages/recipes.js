(function() {
var exports = {};
exports.id = "pages/recipes";
exports.ids = ["pages/recipes"];
exports.modules = {

/***/ "./components/AppDisplay.js":
/*!**********************************!*\
  !*** ./components/AppDisplay.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\AppDisplay.js";
// Imported the Link API to support client-side navigation.
 // Importing the Next built-in component to append elements to the head of the page.


/**
 * Created a global style.
 */
// Set the application's margins, padding and font size and families. Also set for the vertical and horizontal overflow to be hidden.

const appDisplayStyle = {
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  overflowY: "hidden",
  fontSize: 15,
  fontFamily: "Staatliches, Trebuchet, Helvetica"
};
/**
 * Added the links to utilize React Bootstrap, Google font and the Edamam API's badge.
 * @param {*} props Children pages for appDisplayStyle to render - index, recipes.
 * @returns The application's general styling, with appended links, for use in the pages.
 */

const AppDisplay = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Staatliches"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
      src: "https://developer.edamam.com/attribution/badge.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: appDisplayStyle,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 27,
  columnNumber: 3
}, undefined); // Exporting AppDisplay for use on the pages.


/* harmony default export */ __webpack_exports__["default"] = (AppDisplay);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\Footer.js";
// Imported the Link API to support client-side navigation.
 // Imported components from React Bootstrap.

 // Imported icons from FontAwesome. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons




/**
 * Styled the footer component.
 */
// Set the size (height x width), the top margin, the padding and the background colour of the footer. Also set for the footer to display as
// flex and for the direction to be a row.

const footerStyle = {
  height: "auto",
  width: "auto",
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
  padding: 5,
  backgroundColor: "#393d49"
}; // Set the width of the Edamam API's logo.

const edamamStyle = {
  width: "200px"
}; // Set the margins, the top padding, the width and the font colour of the footer's text.

const footerTextStyle = {
  margin: "5px auto 5px 345px",
  paddingTop: "5px",
  width: "306px",
  color: "#ffffff"
}; // Set the right margin, the font colour and implemented a drop-shadow filter do give the icon a 3D and defined look.

const heartStyle = {
  marginRight: "5px",
  color: "#800000",
  filter: "drop-shadow(1px 2px 2px #000000)"
}; // Set the bottom and right margins, the font size and colour of the "Scroll to Top" icon and for the cursor to change once the icon is hovered
// over.

const scrollButtonStyle = {
  marginBottom: "-10px",
  marginRight: "35px",
  fontSize: "1.1rem",
  cursor: "pointer",
  color: "#ffffff"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colours of the scroll icon once hovered over and to change
// back the colour when the links are no longer hovered over.

const changeFontColor = e => {
  e.target.style.color = "#f1b374";
};

const changeBackFontColor = e => {
  e.target.style.color = "#ffffff";
};
/**
 * Created a footer for the application that displays text in a header format and a "Scroll to Top" button. Also included the Edamam API's logo.
 * Created a function that, once the "Scroll to Top" button is clicked on, will scroll the page smoothly to the top.
 * @returns Footer with header text and a "Scroll to Top" button.
 * Applied all of the above styles to their respective elements.
 */


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: footerStyle,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      fluid: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: edamamStyle,
          id: "edamam-badge",
          "data-color": "transparent",
          "z-index": "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          style: footerTextStyle,
          children: ["CREATED WITH ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHeart,
            style: heartStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 26
          }, undefined), "BY CHANELLE B\xD6SIGER"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDoubleUp,
            onClick: scrollToTop,
            title: "Scroll to Top",
            style: scrollButtonStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
}; // Exported footer.js to the recipe page.


/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\Header.js";
// Imported the Link API to support client-side navigation.
 // Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.




/**
 * Styled the header component.
 */
// Setting the header's size (height x width), bottom margin, padding and background colour.

const headerStyle = {
  height: "auto",
  width: "auto",
  marginBottom: "10px",
  padding: 5,
  backgroundColor: "#393d49"
}; // Set the size (height x width) and left margin of the header's logo.

const logoStyle = {
  height: "80px",
  width: "auto",
  marginLeft: "15px"
}; // Set the position of the navigation link to absolute and aligned it to the top right corner. Also set the margins and the font colour, size
// and decoration of the header links.

const linkStyle = {
  position: "absolute",
  right: -15,
  top: 28,
  margin: "auto 40px auto 20px",
  color: "#ffffff",
  fontSize: 20,
  textDecoration: "none"
}; // Set the recipe page's visibility to hidden.

const recipeLinkStyle = {
  visibility: "hidden"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colours of the header link once hovered over and to change
// back the colour when the links are no longer hovered over.

const changeFontColor = e => {
  e.target.style.color = "#f1b374";
};

const changeBackFontColor = e => {
  e.target.style.color = "#ffffff";
}; // Set the font size and colour and the right margin of the home icon.


const iconStyle = {
  fontSize: "1.1rem",
  marginRight: "5px",
  color: "#ffffff"
};
/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with a navigable link and logo.
 * Applied all of the above styles to their respective elements.
 */

const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  style: headerStyle,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/static/images/GrumbleLogoSmall.png",
      alt: "Grumble Logo",
      style: logoStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: linkStyle,
      onMouseOver: changeFontColor,
      onMouseOut: changeBackFontColor,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHome,
        style: iconStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), "Home"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/recipes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: recipeLinkStyle,
      children: "RECIPES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 69,
  columnNumber: 3
}, undefined); // Exporting the Header to the recipe page.


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\SearchResults.js";
// Imported components from React Bootstrap.

/**
 * Styled the RecipeInfo component.
 */
// Set for the recipe container to display as flex and the direction to be a row.

const recipeContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr"
}; // Set the width, the margins and the padding of the recipe cards.

const recipeCardStyle = {
  width: "300px",
  margin: "10px 3px",
  padding: "10px"
}; // Set the size (minHeight, height x width), the padding and aligned the content to the center using the justify, text and general alignment
// along with changing the display to flex.

const recipeCardHeaderStyle = {
  minHeight: "60px",
  height: "auto",
  width: "100%",
  padding: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}; // Set the bottom margins of the images.

const imageStyle = {
  marginBottom: "5px"
}; // Set the width of the table's header cells.

const tableHeaderStyle = {
  width: "88px"
}; // Set for the first letter of the meal and cuisine type to be capitalised.

const capitalLetter = {
  textTransform: "capitalize"
}; // Set the background and border colour of the buttons.

const buttonStyle = {
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

const SearchResults = ({
  results
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: recipeContainerStyle,
    children: results.hits.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
        style: recipeCardStyle,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
          style: recipeCardHeaderStyle,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: item.recipe.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Img, {
            src: item.recipe.image,
            alt: "Recipe Photograph",
            onError: e => {
              e.target.src = "/static/images/TooDelicious.png";
            },
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  style: tableHeaderStyle,
                  children: "Recipe By:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: item.recipe.source
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  style: tableHeaderStyle,
                  children: "Cuisine:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  style: capitalLetter,
                  children: item.recipe.cuisineType
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  style: tableHeaderStyle,
                  children: "Meal Type:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  style: capitalLetter,
                  children: item.recipe.mealType
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
            href: item.recipe.url,
            target: "_blank",
            style: buttonStyle,
            children: "View Recipe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
}; // Exported SearchResults to the recipes page.


/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./pages/recipes.js":
/*!**************************!*\
  !*** ./pages/recipes.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppDisplay */ "./components/AppDisplay.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\pages\\recipes.js";
// Imported the Link API to support client-side navigation.
 // Imported AppDisplay to set the holistic style of this page.

 // Imported components.




/**
 * Applied the styles and passed the AppDisplay props.
 * Imported the following components: Header, SearchResults, Footer.
 * Passed the results props to allow the page access to the search term's results that is entered on the index page.
 */

const Recipes = ({
  results
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_3__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
}; // Exported recipes page to be generated.


/* harmony default export */ __webpack_exports__["default"] = (Recipes);
/**
 * Created an asynchronous function to fetch the data from the Edamam API.
 * Processing the API id and key from the .env.local file. Inserted these into the API's url.
 * Awaiting the data from the API. Will be returned on this page if a search term has been entered via the home page.
 */

async function getServerSideProps(context) {
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${context.query.term}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await res.json();
  return {
    props: {
      results: data ? data : null
    }
  };
}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (function() {



/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/recipes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXJlY2lwZS1zZWFyY2gtYXBwbGljYXRpb24vLi9jb21wb25lbnRzL0FwcERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi8uL3BhZ2VzL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYXBwRGlzcGxheVN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIkFwcERpc3BsYXkiLCJwcm9wcyIsImNoaWxkcmVuIiwiZm9vdGVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiZWRhbWFtU3R5bGUiLCJmb290ZXJUZXh0U3R5bGUiLCJwYWRkaW5nVG9wIiwiY29sb3IiLCJoZWFydFN0eWxlIiwibWFyZ2luUmlnaHQiLCJmaWx0ZXIiLCJzY3JvbGxCdXR0b25TdHlsZSIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJGb290ZXIiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJmYUhlYXJ0IiwiZmFBbmdsZURvdWJsZVVwIiwiaGVhZGVyU3R5bGUiLCJsb2dvU3R5bGUiLCJtYXJnaW5MZWZ0IiwibGlua1N0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRleHREZWNvcmF0aW9uIiwicmVjaXBlTGlua1N0eWxlIiwidmlzaWJpbGl0eSIsImljb25TdHlsZSIsIkhlYWRlciIsImZhSG9tZSIsInJlY2lwZUNvbnRhaW5lclN0eWxlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInJlY2lwZUNhcmRTdHlsZSIsInJlY2lwZUNhcmRIZWFkZXJTdHlsZSIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImltYWdlU3R5bGUiLCJ0YWJsZUhlYWRlclN0eWxlIiwiY2FwaXRhbExldHRlciIsInRleHRUcmFuc2Zvcm0iLCJidXR0b25TdHlsZSIsImJvcmRlciIsIlNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwiaGl0cyIsIm1hcCIsIml0ZW0iLCJpIiwicmVjaXBlIiwibGFiZWwiLCJpbWFnZSIsInNyYyIsInNvdXJjZSIsImN1aXNpbmVUeXBlIiwibWVhbFR5cGUiLCJ1cmwiLCJSZWNpcGVzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIkFQSV9JRCIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwicmVzIiwiZmV0Y2giLCJxdWVyeSIsInRlcm0iLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxDQURjO0FBRXRCQyxTQUFPLEVBQUUsQ0FGYTtBQUd0QkMsV0FBUyxFQUFFLFFBSFc7QUFJdEJDLFdBQVMsRUFBRSxRQUpXO0FBS3RCQyxVQUFRLEVBQUUsRUFMWTtBQU10QkMsWUFBVSxFQUFFO0FBTlUsQ0FBeEI7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxpQkFDakI7QUFBQSwwQkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsdUVBRlA7QUFHRSxlQUFTLEVBQUMseUVBSFo7QUFJRSxpQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBV0U7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBY0U7QUFBSyxTQUFLLEVBQUVSLGVBQVo7QUFBQSxjQUE4QlEsS0FBSyxDQUFDQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQyxDQW1CQTs7O0FBQ0EsK0RBQWVGLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7Q0FFQTs7Q0FFQTs7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QU1DLEtBQUssQ0FDcEIsdURBQXNETixPQUFPLENBQUNPLEtBQVIsQ0FBY0MsSUFBSyxXQUFVUCxNQUFPLFlBQVdHLE9BQVEsRUFEekYsQ0FBdkI7QUFHQSxRQUFNSyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUNMcEYsU0FBSyxFQUFFO0FBQ0wyRCxhQUFPLEVBQUV3QixJQUFJLEdBQUdBLElBQUgsR0FBVTtBQURsQjtBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREQsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0aW5nIHRoZSBOZXh0IGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGhlYWQgb2YgdGhlIHBhZ2UuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZ2xvYmFsIHN0eWxlLlxyXG4gKi9cclxuXHJcbi8vIFNldCB0aGUgYXBwbGljYXRpb24ncyBtYXJnaW5zLCBwYWRkaW5nIGFuZCBmb250IHNpemUgYW5kIGZhbWlsaWVzLiBBbHNvIHNldCBmb3IgdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIG92ZXJmbG93IHRvIGJlIGhpZGRlbi5cclxuY29uc3QgYXBwRGlzcGxheVN0eWxlID0ge1xyXG4gIG1hcmdpbjogMCxcclxuICBwYWRkaW5nOiAwLFxyXG4gIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXHJcbiAgZm9udFNpemU6IDE1LFxyXG4gIGZvbnRGYW1pbHk6IFwiU3RhYXRsaWNoZXMsIFRyZWJ1Y2hldCwgSGVsdmV0aWNhXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQWRkZWQgdGhlIGxpbmtzIHRvIHV0aWxpemUgUmVhY3QgQm9vdHN0cmFwLCBHb29nbGUgZm9udCBhbmQgdGhlIEVkYW1hbSBBUEkncyBiYWRnZS5cclxuICogQHBhcmFtIHsqfSBwcm9wcyBDaGlsZHJlbiBwYWdlcyBmb3IgYXBwRGlzcGxheVN0eWxlIHRvIHJlbmRlciAtIGluZGV4LCByZWNpcGVzLlxyXG4gKiBAcmV0dXJucyBUaGUgYXBwbGljYXRpb24ncyBnZW5lcmFsIHN0eWxpbmcsIHdpdGggYXBwZW5kZWQgbGlua3MsIGZvciB1c2UgaW4gdGhlIHBhZ2VzLlxyXG4gKi9cclxuXHJcbmNvbnN0IEFwcERpc3BsYXkgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxyXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVN0YWF0bGljaGVzXCJcclxuICAgICAgLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2RldmVsb3Blci5lZGFtYW0uY29tL2F0dHJpYnV0aW9uL2JhZGdlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IHN0eWxlPXthcHBEaXNwbGF5U3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbi8vIEV4cG9ydGluZyBBcHBEaXNwbGF5IGZvciB1c2Ugb24gdGhlIHBhZ2VzLlxyXG5leHBvcnQgZGVmYXVsdCBBcHBEaXNwbGF5O1xyXG4iLCIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIGNvbXBvbmVudHMgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBJbXBvcnRlZCBpY29ucyBmcm9tIEZvbnRBd2Vzb21lLiBBbHNvIGFkZGVkIFwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcIiB0byBhbGxvdyBzdHlsaW5nIHRoZSBpY29uc1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQW5nbGVEb3VibGVVcCwgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGZvb3RlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCksIHRoZSB0b3AgbWFyZ2luLCB0aGUgcGFkZGluZyBhbmQgdGhlIGJhY2tncm91bmQgY29sb3VyIG9mIHRoZSBmb290ZXIuIEFsc28gc2V0IGZvciB0aGUgZm9vdGVyIHRvIGRpc3BsYXkgYXNcclxuLy8gZmxleCBhbmQgZm9yIHRoZSBkaXJlY3Rpb24gdG8gYmUgYSByb3cuXHJcbmNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBFZGFtYW0gQVBJJ3MgbG9nby5cclxuY29uc3QgZWRhbWFtU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiMjAwcHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgbWFyZ2lucywgdGhlIHRvcCBwYWRkaW5nLCB0aGUgd2lkdGggYW5kIHRoZSBmb250IGNvbG91ciBvZiB0aGUgZm9vdGVyJ3MgdGV4dC5cclxuY29uc3QgZm9vdGVyVGV4dFN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCI1cHggYXV0byA1cHggMzQ1cHhcIixcclxuICBwYWRkaW5nVG9wOiBcIjVweFwiLFxyXG4gIHdpZHRoOiBcIjMwNnB4XCIsXHJcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSByaWdodCBtYXJnaW4sIHRoZSBmb250IGNvbG91ciBhbmQgaW1wbGVtZW50ZWQgYSBkcm9wLXNoYWRvdyBmaWx0ZXIgZG8gZ2l2ZSB0aGUgaWNvbiBhIDNEIGFuZCBkZWZpbmVkIGxvb2suXHJcbmNvbnN0IGhlYXJ0U3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgY29sb3I6IFwiIzgwMDAwMFwiLFxyXG4gIGZpbHRlcjogXCJkcm9wLXNoYWRvdygxcHggMnB4IDJweCAjMDAwMDAwKVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBib3R0b20gYW5kIHJpZ2h0IG1hcmdpbnMsIHRoZSBmb250IHNpemUgYW5kIGNvbG91ciBvZiB0aGUgXCJTY3JvbGwgdG8gVG9wXCIgaWNvbiBhbmQgZm9yIHRoZSBjdXJzb3IgdG8gY2hhbmdlIG9uY2UgdGhlIGljb24gaXMgaG92ZXJlZFxyXG4vLyBvdmVyLlxyXG5jb25zdCBzY3JvbGxCdXR0b25TdHlsZSA9IHtcclxuICBtYXJnaW5Cb3R0b206IFwiLTEwcHhcIixcclxuICBtYXJnaW5SaWdodDogXCIzNXB4XCIsXHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvdXJzIG9mIHRoZSBzY3JvbGwgaWNvbiBvbmNlIGhvdmVyZWQgb3ZlciBhbmQgdG8gY2hhbmdlXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGEgZm9vdGVyIGZvciB0aGUgYXBwbGljYXRpb24gdGhhdCBkaXNwbGF5cyB0ZXh0IGluIGEgaGVhZGVyIGZvcm1hdCBhbmQgYSBcIlNjcm9sbCB0byBUb3BcIiBidXR0b24uIEFsc28gaW5jbHVkZWQgdGhlIEVkYW1hbSBBUEkncyBsb2dvLlxyXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdGhhdCwgb25jZSB0aGUgXCJTY3JvbGwgdG8gVG9wXCIgYnV0dG9uIGlzIGNsaWNrZWQgb24sIHdpbGwgc2Nyb2xsIHRoZSBwYWdlIHNtb290aGx5IHRvIHRoZSB0b3AuXHJcbiAqIEByZXR1cm5zIEZvb3RlciB3aXRoIGhlYWRlciB0ZXh0IGFuZCBhIFwiU2Nyb2xsIHRvIFRvcFwiIGJ1dHRvbi5cclxuICogQXBwbGllZCBhbGwgb2YgdGhlIGFib3ZlIHN0eWxlcyB0byB0aGVpciByZXNwZWN0aXZlIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtlZGFtYW1TdHlsZX1cclxuICAgICAgICAgICAgaWQ9XCJlZGFtYW0tYmFkZ2VcIlxyXG4gICAgICAgICAgICBkYXRhLWNvbG9yPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICB6LWluZGV4PVwiMVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8aDYgc3R5bGU9e2Zvb3RlclRleHRTdHlsZX0+XHJcbiAgICAgICAgICAgIENSRUFURUQgV0lUSCA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IHN0eWxlPXtoZWFydFN0eWxlfSAvPlxyXG4gICAgICAgICAgICBCWSBDSEFORUxMRSBCw5ZTSUdFUlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICBpY29uPXtmYUFuZ2xlRG91YmxlVXB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTY3JvbGwgdG8gVG9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17c2Nyb2xsQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIGZvb3Rlci5qcyB0byB0aGUgcmVjaXBlIHBhZ2UuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBGb250IEF3ZXNvbWUgbGlicmFyeSBhbmQgaWNvbnMuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zLlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhSG9tZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIGhlYWRlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuLy8gU2V0dGluZyB0aGUgaGVhZGVyJ3Mgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpLCBib3R0b20gbWFyZ2luLCBwYWRkaW5nIGFuZCBiYWNrZ3JvdW5kIGNvbG91ci5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICBwYWRkaW5nOiA1LFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzkzZDQ5XCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHNpemUgKGhlaWdodCB4IHdpZHRoKSBhbmQgbGVmdCBtYXJnaW4gb2YgdGhlIGhlYWRlcidzIGxvZ28uXHJcbmNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiODBweFwiLFxyXG4gIHdpZHRoOiBcImF1dG9cIixcclxuICBtYXJnaW5MZWZ0OiBcIjE1cHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIG5hdmlnYXRpb24gbGluayB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIHJpZ2h0IGNvcm5lci4gQWxzbyBzZXQgdGhlIG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG91ciwgc2l6ZVxyXG4vLyBhbmQgZGVjb3JhdGlvbiBvZiB0aGUgaGVhZGVyIGxpbmtzLlxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICByaWdodDogLTE1LFxyXG4gIHRvcDogMjgsXHJcbiAgbWFyZ2luOiBcImF1dG8gNDBweCBhdXRvIDIwcHhcIixcclxuICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgZm9udFNpemU6IDIwLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcmVjaXBlIHBhZ2UncyB2aXNpYmlsaXR5IHRvIGhpZGRlbi5cclxuY29uc3QgcmVjaXBlTGlua1N0eWxlID0ge1xyXG4gIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvdXJzIG9mIHRoZSBoZWFkZXIgbGluayBvbmNlIGhvdmVyZWQgb3ZlciBhbmQgdG8gY2hhbmdlXHJcbi8vIGJhY2sgdGhlIGNvbG91ciB3aGVuIHRoZSBsaW5rcyBhcmUgbm8gbG9uZ2VyIGhvdmVyZWQgb3Zlci5cclxuY29uc3QgY2hhbmdlRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiI2YxYjM3NFwiO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQmFja0ZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCBzaXplIGFuZCBjb2xvdXIgYW5kIHRoZSByaWdodCBtYXJnaW4gb2YgdGhlIGhvbWUgaWNvbi5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRhY2hlZCB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGxpbmtzIHdpdGggb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQuXHJcbiAqIEByZXR1cm5zIFRoZSBzdHlsZWQgaGVhZGVyIGNvbXBvbmVudCB3aXRoIGEgbmF2aWdhYmxlIGxpbmsgYW5kIGxvZ28uXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvU21hbGwucG5nXCJcclxuICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgSG9tZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8TGluayBocmVmPVwiL3JlY2lwZXNcIj5cclxuICAgICAgPGEgc3R5bGU9e3JlY2lwZUxpbmtTdHlsZX0+UkVDSVBFUzwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbi8vIEV4cG9ydGluZyB0aGUgSGVhZGVyIHRvIHRoZSByZWNpcGUgcGFnZS5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvLyBJbXBvcnRlZCBjb21wb25lbnRzIGZyb20gUmVhY3QgQm9vdHN0cmFwLlxyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIFJlY2lwZUluZm8gY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbi8vIFNldCBmb3IgdGhlIHJlY2lwZSBjb250YWluZXIgdG8gZGlzcGxheSBhcyBmbGV4IGFuZCB0aGUgZGlyZWN0aW9uIHRvIGJlIGEgcm93LlxyXG5jb25zdCByZWNpcGVDb250YWluZXJTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImdyaWRcIixcclxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmclwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCwgdGhlIG1hcmdpbnMgYW5kIHRoZSBwYWRkaW5nIG9mIHRoZSByZWNpcGUgY2FyZHMuXHJcbmNvbnN0IHJlY2lwZUNhcmRTdHlsZSA9IHtcclxuICB3aWR0aDogXCIzMDBweFwiLFxyXG4gIG1hcmdpbjogXCIxMHB4IDNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChtaW5IZWlnaHQsIGhlaWdodCB4IHdpZHRoKSwgdGhlIHBhZGRpbmcgYW5kIGFsaWduZWQgdGhlIGNvbnRlbnQgdG8gdGhlIGNlbnRlciB1c2luZyB0aGUganVzdGlmeSwgdGV4dCBhbmQgZ2VuZXJhbCBhbGlnbm1lbnRcclxuLy8gYWxvbmcgd2l0aCBjaGFuZ2luZyB0aGUgZGlzcGxheSB0byBmbGV4LlxyXG5jb25zdCByZWNpcGVDYXJkSGVhZGVyU3R5bGUgPSB7XHJcbiAgbWluSGVpZ2h0OiBcIjYwcHhcIixcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBib3R0b20gbWFyZ2lucyBvZiB0aGUgaW1hZ2VzLlxyXG5jb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGggb2YgdGhlIHRhYmxlJ3MgaGVhZGVyIGNlbGxzLlxyXG5jb25zdCB0YWJsZUhlYWRlclN0eWxlID0ge1xyXG4gIHdpZHRoOiBcIjg4cHhcIixcclxufTtcclxuXHJcbi8vIFNldCBmb3IgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgbWVhbCBhbmQgY3Vpc2luZSB0eXBlIHRvIGJlIGNhcGl0YWxpc2VkLlxyXG5jb25zdCBjYXBpdGFsTGV0dGVyID0ge1xyXG4gIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3VyIG9mIHRoZSBidXR0b25zLlxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM5M2Q0OVwiLFxyXG4gIGJvcmRlcjogXCIjMDAwMDAwXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgc2VhcmNoIHJlc3VsdHMgZnJvbSB0aGUgaW5kZXggcGFnZS5cclxuICogQHJldHVybnMgbGFiZWwsIGltYWdlLCBzb3VyY2UsIGN1aXNpbmVUeXBlLCBtZWFsVHlwZSwgdXJsLlxyXG4gKiBVc2VkIG1hcCgpIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZGF0YSBhbmQgdG8gcmVjZWl2ZSB0aGUgZGF0YSBhcyBwZXIgdGhlIHNlYXJjaCBxdWVyeS5cclxuICogU2V0IGEga2V5IHVzaW5nIHRoZSBpbmRleCBvZiB0aGUgbWFwLlxyXG4gKiBGb3IgdGhlIGltYWdlcyAtIElmIGEgcmVjaXBlIGRvZXMgbm90IGhhdmUgYW4gaW1hZ2UsIEkgc2V0IHVwIGZvciBhbm90aGVyIGdlbmVyaWMgaW1hZ2UgdG8gZGlzcGxheSBpbnN0ZWFkLiBJIGRpZCB0aGlzIHVzaW5nIG9uRXJyb3IsXHJcbiAqIHNldHRpbmcgYW4gZXZlbnQgdG8gcmV0dXJuIHRoZSBhbHRlcm5hdGl2ZSBzb3VyY2UuXHJcbiAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgcmVzdWx0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3JlY2lwZUNvbnRhaW5lclN0eWxlfT5cclxuICAgICAge3Jlc3VsdHMuaGl0cy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENhcmQga2V5PXtpfSBzdHlsZT17cmVjaXBlQ2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtyZWNpcGVDYXJkSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxoNT57aXRlbS5yZWNpcGUubGFiZWx9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZC5JbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5yZWNpcGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJSZWNpcGUgUGhvdG9ncmFwaFwiXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBcIi9zdGF0aWMvaW1hZ2VzL1Rvb0RlbGljaW91cy5wbmdcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17dGFibGVIZWFkZXJTdHlsZX0+UmVjaXBlIEJ5OjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJlY2lwZS5zb3VyY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17dGFibGVIZWFkZXJTdHlsZX0+Q3Vpc2luZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLmN1aXNpbmVUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3RhYmxlSGVhZGVyU3R5bGV9Pk1lYWwgVHlwZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y2FwaXRhbExldHRlcn0+e2l0ZW0ucmVjaXBlLm1lYWxUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Q2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5yZWNpcGUudXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWaWV3IFJlY2lwZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBTZWFyY2hSZXN1bHRzIHRvIHRoZSByZWNpcGVzIHBhZ2UuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XHJcbiIsIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgQXBwRGlzcGxheSB0byBzZXQgdGhlIGhvbGlzdGljIHN0eWxlIG9mIHRoaXMgcGFnZS5cclxuaW1wb3J0IEFwcERpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwRGlzcGxheVwiO1xyXG4vLyBJbXBvcnRlZCBjb21wb25lbnRzLlxyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG4vKipcclxuICogQXBwbGllZCB0aGUgc3R5bGVzIGFuZCBwYXNzZWQgdGhlIEFwcERpc3BsYXkgcHJvcHMuXHJcbiAqIEltcG9ydGVkIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czogSGVhZGVyLCBTZWFyY2hSZXN1bHRzLCBGb290ZXIuXHJcbiAqIFBhc3NlZCB0aGUgcmVzdWx0cyBwcm9wcyB0byBhbGxvdyB0aGUgcGFnZSBhY2Nlc3MgdG8gdGhlIHNlYXJjaCB0ZXJtJ3MgcmVzdWx0cyB0aGF0IGlzIGVudGVyZWQgb24gdGhlIGluZGV4IHBhZ2UuXHJcbiAqL1xyXG5cclxuY29uc3QgUmVjaXBlcyA9ICh7IHJlc3VsdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwRGlzcGxheSAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxTZWFyY2hSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCByZWNpcGVzIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkLlxyXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uIHRvIGZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEVkYW1hbSBBUEkuXHJcbiAqIFByb2Nlc3NpbmcgdGhlIEFQSSBpZCBhbmQga2V5IGZyb20gdGhlIC5lbnYubG9jYWwgZmlsZS4gSW5zZXJ0ZWQgdGhlc2UgaW50byB0aGUgQVBJJ3MgdXJsLlxyXG4gKiBBd2FpdGluZyB0aGUgZGF0YSBmcm9tIHRoZSBBUEkuIFdpbGwgYmUgcmV0dXJuZWQgb24gdGhpcyBwYWdlIGlmIGEgc2VhcmNoIHRlcm0gaGFzIGJlZW4gZW50ZXJlZCB2aWEgdGhlIGhvbWUgcGFnZS5cclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBBUElfSUQgPSBwcm9jZXNzLmVudi5BUElfSUQ7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL3JlY2lwZXMvdjI/dHlwZT1wdWJsaWMmcT0ke2NvbnRleHQucXVlcnkudGVybX0mYXBwX2lkPSR7QVBJX0lEfSZhcHBfa2V5PSR7QVBJX0tFWX1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc3VsdHM6IGRhdGEgPyBkYXRhIDogbnVsbCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9