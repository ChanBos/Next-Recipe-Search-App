(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\components\\SearchForm.js";
// Imported the Link API to support client-side navigation.
 // Imported React library and hooks.

 // Imported userRouter from Next's Router.

 // Imported components from React Bootstrap.

 // Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.




/**
 * Styled the SearchForm component.
 */
// Set the search container's position to absolute and aligned it to the top and left. Also set the left margin to counter the left position.

const searchContainer = {
  position: "absolute",
  top: "68%",
  left: "45.5%",
  marginLeft: "-100px"
}; // Set for the form container to display as flex and the direction to row. Also set the position to relative to allow the icon to appear inside
// the input area.

const formContainer = {
  display: "flex",
  flexDirection: "row",
  position: "relative"
}; // Set the size (height x width), the padding and the background colour of the input element.

const searchInputStyle = {
  height: "35px",
  width: 300,
  padding: 5,
  backgroundColor: "#ffffff"
}; // Set the icon's position to absolute and aligned it to the top and left. Also set the height, the font size and colour and for the cursor to
// to a pointer once it hovers over the icon.

const iconStyle = {
  position: "absolute",
  left: "275px",
  top: "8px",
  height: "20px",
  fontSize: "1rem",
  color: "#808080",
  cursor: "pointer"
};
/**
 * Set the initial states of the input state.
 * Utilizing useRouter() to programmatically change the route to the recipe page once a search term has been entered. The data is fetched here
 * but displayed on the recipes page. Thus if there is an entry of the search term in the input element the results will be returned.
 * Preventing the page from refreshing with the help of e.preventDefault().
 * Passed the props on the input and the button elements.
 *  * Applied all of the above styles to their respective elements.
 */

const SearchForm = () => {
  const onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const search = e => {
    e.preventDefault();
    const term = onInputChange.current.value;

    if (!term) {
      return;
    }

    router.push(`/recipes?term=${term}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: searchContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
        className: "search-form",
        style: formContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
          type: "text",
          placeholder: "Search",
          className: "search-bar mr-sm-2",
          style: searchInputStyle,
          ref: onInputChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSearch,
          style: iconStyle,
          type: "submit",
          className: "search-button",
          id: "search",
          onClick: e => search(e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, undefined);
}; // Exported the SearchForm to the index/ home page.


/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppDisplay */ "./components/AppDisplay.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");

var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 11\\next-recipe-search-application\\pages\\index.js";
// Imported the Link API to support client-side navigation.
 // Imported AppDisplay to set the holistic style of this page.

 // Imported Carousel from React Bootstrap.

 // Importing the SearchForm component.


/**
 * Styled the home page.
 */
// Set for the overflow to be hidden horizontally, as well as vertically. Also set the size (height x width) and padding of the carousel.

const carouselStyle = {
  overflowX: "hidden",
  overflowY: "hidden",
  height: "auto",
  width: "auto",
  padding: "0.5px"
}; // Set the height and width of the images to auto.

const imageStyle = {
  width: "auto",
  height: "auto"
}; // Set the height, width and bottom margin of the logo.

const logoStyle = {
  height: "450px",
  width: "auto",
  marginBottom: "70px"
};
/**
 * Applied the styles and passed the AppDisplay props.
 * Passed the props to enable the search functionality (value={search} and onChange={onInputChange})
 * @returns Styled home page, displaying a styled introduction header text section an image and a header component.
 */

const Home = props => {
  const {
    search,
    onInputChange
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
          variant: "dark",
          style: carouselStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Breakfast.png",
              alt: "First slide",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Dinner.jpg",
              alt: "Second slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Bake.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Burger.png",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Casserole.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pizza.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "d-block w-100",
              src: "/static/images/Pudding.jpg",
              alt: "Third slide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Carousel.Caption, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/static/images/GrumbleLogoMain.png",
                alt: "Grumble Logo",
                style: logoStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__.default, {
                value: search,
                onChange: onInputChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
}; // Exported home page to be generated.


/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXJlY2lwZS1zZWFyY2gtYXBwbGljYXRpb24vLi9jb21wb25lbnRzL0FwcERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQtcmVjaXBlLXNlYXJjaC1hcHBsaWNhdGlvbi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXJlY2lwZS1zZWFyY2gtYXBwbGljYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly9uZXh0LXJlY2lwZS1zZWFyY2gtYXBwbGljYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJhcHBEaXNwbGF5U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiQXBwRGlzcGxheSIsInByb3BzIiwiY2hpbGRyZW4iLCJzZWFyY2hDb250YWluZXIiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiZm9ybUNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwic2VhcmNoSW5wdXRTdHlsZSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaWNvblN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJTZWFyY2hGb3JtIiwib25JbnB1dENoYW5nZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRlcm0iLCJjdXJyZW50IiwidmFsdWUiLCJwdXNoIiwiZmFTZWFyY2giLCJjYXJvdXNlbFN0eWxlIiwiaW1hZ2VTdHlsZSIsImxvZ29TdHlsZSIsIm1hcmdpbkJvdHRvbSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxRQUFNLEVBQUUsQ0FEYztBQUV0QkMsU0FBTyxFQUFFLENBRmE7QUFHdEJDLFdBQVMsRUFBRSxRQUhXO0FBSXRCQyxXQUFTLEVBQUUsUUFKVztBQUt0QkMsVUFBUSxFQUFFLEVBTFk7QUFNdEJDLFlBQVUsRUFBRTtBQU5VLENBQXhCO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUlDLEtBQUQsaUJBQ2pCO0FBQUEsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxZQUROO0FBRUUsVUFBSSxFQUFDLHVFQUZQO0FBR0UsZUFBUyxFQUFDLHlFQUhaO0FBSUUsaUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUNFLFNBQUcsRUFBQyxZQUROO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVdFO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFO0FBQUssU0FBSyxFQUFFUixlQUFaO0FBQUEsY0FBOEJRLEtBQUssQ0FBQ0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEMsQ0FtQkE7OztBQUNBLCtEQUFlRixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtDQUVBOztDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLE1BQU1HLGVBQWUsR0FBRztBQUN0QkMsVUFBUSxFQUFFLFVBRFk7QUFFdEJDLEtBQUcsRUFBRSxLQUZpQjtBQUd0QkMsTUFBSSxFQUFFLE9BSGdCO0FBSXRCQyxZQUFVLEVBQUU7QUFKVSxDQUF4QixDLENBT0E7QUFDQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFNBQU8sRUFBRSxNQURXO0FBRXBCQyxlQUFhLEVBQUUsS0FGSztBQUdwQk4sVUFBUSxFQUFFO0FBSFUsQ0FBdEIsQyxDQU1BOztBQUNBLE1BQU1PLGdCQUFnQixHQUFHO0FBQ3ZCQyxRQUFNLEVBQUUsTUFEZTtBQUV2QkMsT0FBSyxFQUFFLEdBRmdCO0FBR3ZCbEIsU0FBTyxFQUFFLENBSGM7QUFJdkJtQixpQkFBZSxFQUFFO0FBSk0sQ0FBekIsQyxDQU9BO0FBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCWCxVQUFRLEVBQUUsVUFETTtBQUVoQkUsTUFBSSxFQUFFLE9BRlU7QUFHaEJELEtBQUcsRUFBRSxLQUhXO0FBSWhCTyxRQUFNLEVBQUUsTUFKUTtBQUtoQmQsVUFBUSxFQUFFLE1BTE07QUFNaEJrQixPQUFLLEVBQUUsU0FOUztBQU9oQkMsUUFBTSxFQUFFO0FBUFEsQ0FBbEI7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQU1DLGFBQWEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxNQUFNLEdBQUlDLENBQUQsSUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHUCxhQUFhLENBQUNRLE9BQWQsQ0FBc0JDLEtBQW5DOztBQUVBLFFBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFFREwsVUFBTSxDQUFDUSxJQUFQLENBQWEsaUJBQWdCSCxJQUFLLEVBQWxDO0FBQ0QsR0FURDs7QUFXQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFdkIsZUFBWjtBQUFBLDZCQUNFLDhEQUFDLGlEQUFEO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUE4QixhQUFLLEVBQUVLLGFBQXJDO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsUUFGZDtBQUdFLG1CQUFTLEVBQUMsb0JBSFo7QUFJRSxlQUFLLEVBQUVHLGdCQUpUO0FBS0UsYUFBRyxFQUFFUTtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRSw4REFBQywyRUFBRDtBQUNFLGNBQUksRUFBRVcsdUVBRFI7QUFFRSxlQUFLLEVBQUVmLFNBRlQ7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLG1CQUFTLEVBQUMsZUFKWjtBQUtFLFlBQUUsRUFBQyxRQUxMO0FBTUUsaUJBQU8sRUFBR1MsQ0FBRCxJQUFPRCxNQUFNLENBQUNDLENBQUQ7QUFOeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUJELENBdENELEMsQ0F3Q0E7OztBQUNBLCtEQUFlTixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLE1BQU1hLGFBQWEsR0FBRztBQUNwQm5DLFdBQVMsRUFBRSxRQURTO0FBRXBCQyxXQUFTLEVBQUUsUUFGUztBQUdwQmUsUUFBTSxFQUFFLE1BSFk7QUFJcEJDLE9BQUssRUFBRSxNQUphO0FBS3BCbEIsU0FBTyxFQUFFO0FBTFcsQ0FBdEIsQyxDQVFBOztBQUNBLE1BQU1xQyxVQUFVLEdBQUc7QUFDakJuQixPQUFLLEVBQUUsTUFEVTtBQUVqQkQsUUFBTSxFQUFFO0FBRlMsQ0FBbkIsQyxDQUtBOztBQUNBLE1BQU1xQixTQUFTLEdBQUc7QUFDaEJyQixRQUFNLEVBQUUsT0FEUTtBQUVoQkMsT0FBSyxFQUFFLE1BRlM7QUFHaEJxQixjQUFZLEVBQUU7QUFIRSxDQUFsQjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFJbEMsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFBRXNCLFVBQUY7QUFBVUo7QUFBVixNQUE0QmxCLEtBQWxDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDZCQUNFO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBVSxpQkFBTyxFQUFDLE1BQWxCO0FBQXlCLGVBQUssRUFBRThCLGFBQWhDO0FBQUEsa0NBQ0UsOERBQUMsMERBQUQ7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsZUFEWjtBQUVFLGlCQUFHLEVBQUMsOEJBRk47QUFHRSxpQkFBRyxFQUFDLGFBSE47QUFJRSxtQkFBSyxFQUFFQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFPRSw4REFBQyw2REFBRDtBQUFBLHNDQUNFO0FBQ0UsbUJBQUcsRUFBQyxvQ0FETjtBQUVFLG1CQUFHLEVBQUMsY0FGTjtBQUdFLHFCQUFLLEVBQUVDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FLDhEQUFDLDJEQUFEO0FBQVkscUJBQUssRUFBRVYsTUFBbkI7QUFBMkIsd0JBQVEsRUFBRUo7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBaUJFLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0U7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxpQkFBRyxFQUFDLDJCQUZOO0FBR0UsaUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFNRSw4REFBQyw2REFBRDtBQUFBLHNDQUNFO0FBQ0UsbUJBQUcsRUFBQyxvQ0FETjtBQUVFLG1CQUFHLEVBQUMsY0FGTjtBQUdFLHFCQUFLLEVBQUVjO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FLDhEQUFDLDJEQUFEO0FBQVkscUJBQUssRUFBRVYsTUFBbkI7QUFBMkIsd0JBQVEsRUFBRUo7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRixlQWdDRSw4REFBQywwREFBRDtBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyxlQURaO0FBRUUsaUJBQUcsRUFBQyx5QkFGTjtBQUdFLGlCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUUsOERBQUMsNkRBQUQ7QUFBQSxzQ0FDRTtBQUNFLG1CQUFHLEVBQUMsb0NBRE47QUFFRSxtQkFBRyxFQUFDLGNBRk47QUFHRSxxQkFBSyxFQUFFYztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRSw4REFBQywyREFBRDtBQUFZLHFCQUFLLEVBQUVWLE1BQW5CO0FBQTJCLHdCQUFRLEVBQUVKO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQ0YsZUErQ0UsOERBQUMsMERBQUQ7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsZUFEWjtBQUVFLGlCQUFHLEVBQUMsMkJBRk47QUFHRSxpQkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU1FLDhEQUFDLDZEQUFEO0FBQUEsc0NBQ0U7QUFDRSxtQkFBRyxFQUFDLG9DQUROO0FBRUUsbUJBQUcsRUFBQyxjQUZOO0FBR0UscUJBQUssRUFBRWM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBTUUsOERBQUMsMkRBQUQ7QUFBWSxxQkFBSyxFQUFFVixNQUFuQjtBQUEyQix3QkFBUSxFQUFFSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBL0NGLGVBOERFLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0U7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxpQkFBRyxFQUFDLDhCQUZOO0FBR0UsaUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFNRSw4REFBQyw2REFBRDtBQUFBLHNDQUNFO0FBQ0UsbUJBQUcsRUFBQyxvQ0FETjtBQUVFLG1CQUFHLEVBQUMsY0FGTjtBQUdFLHFCQUFLLEVBQUVjO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FLDhEQUFDLDJEQUFEO0FBQVkscUJBQUssRUFBRVYsTUFBbkI7QUFBMkIsd0JBQVEsRUFBRUo7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTlERixlQTZFRSw4REFBQywwREFBRDtBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyxlQURaO0FBRUUsaUJBQUcsRUFBQywwQkFGTjtBQUdFLGlCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUUsOERBQUMsNkRBQUQ7QUFBQSxzQ0FDRTtBQUNFLG1CQUFHLEVBQUMsb0NBRE47QUFFRSxtQkFBRyxFQUFDLGNBRk47QUFHRSxxQkFBSyxFQUFFYztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRSw4REFBQywyREFBRDtBQUFZLHFCQUFLLEVBQUVWLE1BQW5CO0FBQTJCLHdCQUFRLEVBQUVKO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE3RUYsZUE0RkUsOERBQUMsMERBQUQ7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsZUFEWjtBQUVFLGlCQUFHLEVBQUMsNEJBRk47QUFHRSxpQkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU1FLDhEQUFDLDZEQUFEO0FBQUEsc0NBQ0U7QUFDRSxtQkFBRyxFQUFDLG9DQUROO0FBRUUsbUJBQUcsRUFBQyxjQUZOO0FBR0UscUJBQUssRUFBRWM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBTUUsOERBQUMsMkRBQUQ7QUFBWSxxQkFBSyxFQUFFVixNQUFuQjtBQUEyQix3QkFBUSxFQUFFSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0hELENBdkhELEMsQ0F5SEE7OztBQUNBLCtEQUFlZ0IsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0EsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGluZyB0aGUgTmV4dCBidWlsdC1pbiBjb21wb25lbnQgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBoZWFkIG9mIHRoZSBwYWdlLlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBhIGdsb2JhbCBzdHlsZS5cclxuICovXHJcblxyXG4vLyBTZXQgdGhlIGFwcGxpY2F0aW9uJ3MgbWFyZ2lucywgcGFkZGluZyBhbmQgZm9udCBzaXplIGFuZCBmYW1pbGllcy4gQWxzbyBzZXQgZm9yIHRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBvdmVyZmxvdyB0byBiZSBoaWRkZW4uXHJcbmNvbnN0IGFwcERpc3BsYXlTdHlsZSA9IHtcclxuICBtYXJnaW46IDAsXHJcbiAgcGFkZGluZzogMCxcclxuICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxyXG4gIGZvbnRTaXplOiAxNSxcclxuICBmb250RmFtaWx5OiBcIlN0YWF0bGljaGVzLCBUcmVidWNoZXQsIEhlbHZldGljYVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZGVkIHRoZSBsaW5rcyB0byB1dGlsaXplIFJlYWN0IEJvb3RzdHJhcCwgR29vZ2xlIGZvbnQgYW5kIHRoZSBFZGFtYW0gQVBJJ3MgYmFkZ2UuXHJcbiAqIEBwYXJhbSB7Kn0gcHJvcHMgQ2hpbGRyZW4gcGFnZXMgZm9yIGFwcERpc3BsYXlTdHlsZSB0byByZW5kZXIgLSBpbmRleCwgcmVjaXBlcy5cclxuICogQHJldHVybnMgVGhlIGFwcGxpY2F0aW9uJ3MgZ2VuZXJhbCBzdHlsaW5nLCB3aXRoIGFwcGVuZGVkIGxpbmtzLCBmb3IgdXNlIGluIHRoZSBwYWdlcy5cclxuICovXHJcblxyXG5jb25zdCBBcHBEaXNwbGF5ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TdGFhdGxpY2hlc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wZXIuZWRhbWFtLmNvbS9hdHRyaWJ1dGlvbi9iYWRnZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBzdHlsZT17YXBwRGlzcGxheVN0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG4vLyBFeHBvcnRpbmcgQXBwRGlzcGxheSBmb3IgdXNlIG9uIHRoZSBwYWdlcy5cclxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGxheTtcclxuIiwiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG4vLyBJbXBvcnRlZCBSZWFjdCBsaWJyYXJ5IGFuZCBob29rcy5cclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIEltcG9ydGVkIHVzZXJSb3V0ZXIgZnJvbSBOZXh0J3MgUm91dGVyLlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gSW1wb3J0ZWQgY29tcG9uZW50cyBmcm9tIFJlYWN0IEJvb3RzdHJhcC5cclxuaW1wb3J0IHsgRm9ybSwgRm9ybUNvbnRyb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBTZWFyY2hGb3JtIGNvbXBvbmVudC5cclxuICovXHJcblxyXG4vLyBTZXQgdGhlIHNlYXJjaCBjb250YWluZXIncyBwb3NpdGlvbiB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIGFuZCBsZWZ0LiBBbHNvIHNldCB0aGUgbGVmdCBtYXJnaW4gdG8gY291bnRlciB0aGUgbGVmdCBwb3NpdGlvbi5cclxuY29uc3Qgc2VhcmNoQ29udGFpbmVyID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjY4JVwiLFxyXG4gIGxlZnQ6IFwiNDUuNSVcIixcclxuICBtYXJnaW5MZWZ0OiBcIi0xMDBweFwiLFxyXG59O1xyXG5cclxuLy8gU2V0IGZvciB0aGUgZm9ybSBjb250YWluZXIgdG8gZGlzcGxheSBhcyBmbGV4IGFuZCB0aGUgZGlyZWN0aW9uIHRvIHJvdy4gQWxzbyBzZXQgdGhlIHBvc2l0aW9uIHRvIHJlbGF0aXZlIHRvIGFsbG93IHRoZSBpY29uIHRvIGFwcGVhciBpbnNpZGVcclxuLy8gdGhlIGlucHV0IGFyZWEuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBzaXplIChoZWlnaHQgeCB3aWR0aCksIHRoZSBwYWRkaW5nIGFuZCB0aGUgYmFja2dyb3VuZCBjb2xvdXIgb2YgdGhlIGlucHV0IGVsZW1lbnQuXHJcbmNvbnN0IHNlYXJjaElucHV0U3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjM1cHhcIixcclxuICB3aWR0aDogMzAwLFxyXG4gIHBhZGRpbmc6IDUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgaWNvbidzIHBvc2l0aW9uIHRvIGFic29sdXRlIGFuZCBhbGlnbmVkIGl0IHRvIHRoZSB0b3AgYW5kIGxlZnQuIEFsc28gc2V0IHRoZSBoZWlnaHQsIHRoZSBmb250IHNpemUgYW5kIGNvbG91ciBhbmQgZm9yIHRoZSBjdXJzb3IgdG9cclxuLy8gdG8gYSBwb2ludGVyIG9uY2UgaXQgaG92ZXJzIG92ZXIgdGhlIGljb24uXHJcbmNvbnN0IGljb25TdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGxlZnQ6IFwiMjc1cHhcIixcclxuICB0b3A6IFwiOHB4XCIsXHJcbiAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgY29sb3I6IFwiIzgwODA4MFwiLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBpbml0aWFsIHN0YXRlcyBvZiB0aGUgaW5wdXQgc3RhdGUuXHJcbiAqIFV0aWxpemluZyB1c2VSb3V0ZXIoKSB0byBwcm9ncmFtbWF0aWNhbGx5IGNoYW5nZSB0aGUgcm91dGUgdG8gdGhlIHJlY2lwZSBwYWdlIG9uY2UgYSBzZWFyY2ggdGVybSBoYXMgYmVlbiBlbnRlcmVkLiBUaGUgZGF0YSBpcyBmZXRjaGVkIGhlcmVcclxuICogYnV0IGRpc3BsYXllZCBvbiB0aGUgcmVjaXBlcyBwYWdlLiBUaHVzIGlmIHRoZXJlIGlzIGFuIGVudHJ5IG9mIHRoZSBzZWFyY2ggdGVybSBpbiB0aGUgaW5wdXQgZWxlbWVudCB0aGUgcmVzdWx0cyB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVmcmVzaGluZyB3aXRoIHRoZSBoZWxwIG9mIGUucHJldmVudERlZmF1bHQoKS5cclxuICogUGFzc2VkIHRoZSBwcm9wcyBvbiB0aGUgaW5wdXQgYW5kIHRoZSBidXR0b24gZWxlbWVudHMuXHJcbiAqICAqIEFwcGxpZWQgYWxsIG9mIHRoZSBhYm92ZSBzdHlsZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBlbGVtZW50cy5cclxuICovXHJcblxyXG5jb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0ZXJtID0gb25JbnB1dENoYW5nZS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGlmICghdGVybSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyLnB1c2goYC9yZWNpcGVzP3Rlcm09JHt0ZXJtfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCIgc3R5bGU9e2Zvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIG1yLXNtLTJcIlxyXG4gICAgICAgICAgICBzdHlsZT17c2VhcmNoSW5wdXRTdHlsZX1cclxuICAgICAgICAgICAgcmVmPXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgaWNvbj17ZmFTZWFyY2h9XHJcbiAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2VhcmNoKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIHRoZSBTZWFyY2hGb3JtIHRvIHRoZSBpbmRleC8gaG9tZSBwYWdlLlxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xyXG4iLCIvLyBJbXBvcnRlZCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbi8vIEltcG9ydGVkIEFwcERpc3BsYXkgdG8gc2V0IHRoZSBob2xpc3RpYyBzdHlsZSBvZiB0aGlzIHBhZ2UuXHJcbmltcG9ydCBBcHBEaXNwbGF5IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcERpc3BsYXlcIjtcclxuLy8gSW1wb3J0ZWQgQ2Fyb3VzZWwgZnJvbSBSZWFjdCBCb290c3RyYXAuXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG4vLyBJbXBvcnRpbmcgdGhlIFNlYXJjaEZvcm0gY29tcG9uZW50LlxyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcblxyXG4vKipcclxuICogU3R5bGVkIHRoZSBob21lIHBhZ2UuXHJcbiAqL1xyXG5cclxuLy8gU2V0IGZvciB0aGUgb3ZlcmZsb3cgdG8gYmUgaGlkZGVuIGhvcml6b250YWxseSwgYXMgd2VsbCBhcyB2ZXJ0aWNhbGx5LiBBbHNvIHNldCB0aGUgc2l6ZSAoaGVpZ2h0IHggd2lkdGgpIGFuZCBwYWRkaW5nIG9mIHRoZSBjYXJvdXNlbC5cclxuY29uc3QgY2Fyb3VzZWxTdHlsZSA9IHtcclxuICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIHBhZGRpbmc6IFwiMC41cHhcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgaW1hZ2VzIHRvIGF1dG8uXHJcbmNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGhlaWdodCwgd2lkdGggYW5kIGJvdHRvbSBtYXJnaW4gb2YgdGhlIGxvZ28uXHJcbmNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiNDUwcHhcIixcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjcwcHhcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVkIHRoZSBzdHlsZXMgYW5kIHBhc3NlZCB0aGUgQXBwRGlzcGxheSBwcm9wcy5cclxuICogUGFzc2VkIHRoZSBwcm9wcyB0byBlbmFibGUgdGhlIHNlYXJjaCBmdW5jdGlvbmFsaXR5ICh2YWx1ZT17c2VhcmNofSBhbmQgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9KVxyXG4gKiBAcmV0dXJucyBTdHlsZWQgaG9tZSBwYWdlLCBkaXNwbGF5aW5nIGEgc3R5bGVkIGludHJvZHVjdGlvbiBoZWFkZXIgdGV4dCBzZWN0aW9uIGFuIGltYWdlIGFuZCBhIGhlYWRlciBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc2VhcmNoLCBvbklucHV0Q2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcHBEaXNwbGF5PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17Y2Fyb3VzZWxTdHlsZX0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQnJlYWtmYXN0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9HcnVtYmxlTG9nb01haW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiR3J1bWJsZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2xvZ29TdHlsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9EaW5uZXIuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQmFrZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0J1cmdlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0Nhc3Nlcm9sZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1BpenphLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJUaGlyZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvR3J1bWJsZUxvZ29NYWluLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkdydW1ibGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvUHVkZGluZy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0dydW1ibGVMb2dvTWFpbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHcnVtYmxlIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BcHBEaXNwbGF5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIGhvbWUgcGFnZSB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==