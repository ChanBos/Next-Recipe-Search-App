// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Imported React library and hooks.
import { useRef } from "react";
// Imported userRouter from Next's Router.
import { useRouter } from "next/router";
// Imported components from React Bootstrap.
import { Form, FormControl } from "react-bootstrap";
// Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Styled the SearchForm component.
 */

// Set the search container's position to absolute and aligned it to the top and left. Also set the left margin to counter the left position.
const searchContainer = {
  position: "absolute",
  top: "68%",
  left: "45.5%",
  marginLeft: "-100px",
};

// Set for the form container to display as flex and the direction to row. Also set the position to relative to allow the icon to appear inside
// the input area.
const formContainer = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
};

// Set the size (height x width), the padding and the background colour of the input element.
const searchInputStyle = {
  height: "35px",
  width: 300,
  padding: 5,
  backgroundColor: "#ffffff",
};

// Set the icon's position to absolute and aligned it to the top and left. Also set the height, the font size and colour and for the cursor to
// to a pointer once it hovers over the icon.
const iconStyle = {
  position: "absolute",
  left: "275px",
  top: "8px",
  height: "20px",
  fontSize: "1rem",
  color: "#808080",
  cursor: "pointer",
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
  const onInputChange = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = onInputChange.current.value;

    if (!term) {
      return;
    }

    router.push(`/recipes?term=${term}`);
  };

  return (
    <div>
      <div style={searchContainer}>
        <Form className="search-form" style={formContainer}>
          <FormControl
            type="text"
            placeholder="Search"
            className="search-bar mr-sm-2"
            style={searchInputStyle}
            ref={onInputChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={iconStyle}
            type="submit"
            className="search-button"
            id="search"
            onClick={(e) => search(e)}
          />
        </Form>
      </div>
    </div>
  );
};

// Exported the SearchForm to the index/ home page.
export default SearchForm;
