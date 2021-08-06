// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Styled the header component.
 */

// Setting the header's size (height x width), bottom margin, padding and background colour.
const headerStyle = {
  height: "auto",
  width: "auto",
  marginBottom: "10px",
  padding: 5,
  backgroundColor: "#393d49",
};

// Set the size (height x width) and left margin of the header's logo.
const logoStyle = {
  height: "80px",
  width: "auto",
  marginLeft: "15px",
};

// Set the position of the navigation link to absolute and aligned it to the top right corner. Also set the margins and the font colour, size
// and decoration of the header links.
const linkStyle = {
  position: "absolute",
  right: -15,
  top: 28,
  margin: "auto 40px auto 20px",
  color: "#ffffff",
  fontSize: 20,
  textDecoration: "none",
};

// Set the recipe page's visibility to hidden.
const recipeLinkStyle = {
  visibility: "hidden",
};

// Created onMouseOver and onMouseOut event handler functions to change the font colours of the header link once hovered over and to change
// back the colour when the links are no longer hovered over.
const changeFontColor = (e) => {
  e.target.style.color = "#f1b374";
};

const changeBackFontColor = (e) => {
  e.target.style.color = "#ffffff";
};

// Set the font size and colour and the right margin of the home icon.
const iconStyle = {
  fontSize: "1.1rem",
  marginRight: "5px",
  color: "#ffffff",
};

/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with a navigable link and logo.
 * Applied all of the above styles to their respective elements.
 */

const Header = () => (
  <div style={headerStyle}>
    <a href="/">
      <img
        src="/static/images/GrumbleLogoSmall.png"
        alt="Grumble Logo"
        style={logoStyle}
      />
    </a>
    <Link href="/">
      <a
        style={linkStyle}
        onMouseOver={changeFontColor}
        onMouseOut={changeBackFontColor}
      >
        <FontAwesomeIcon icon={faHome} style={iconStyle} />
        Home
      </a>
    </Link>
    <Link href="/recipes">
      <a style={recipeLinkStyle}>RECIPES</a>
    </Link>
  </div>
);

// Exporting the Header to the recipe page.
export default Header;
