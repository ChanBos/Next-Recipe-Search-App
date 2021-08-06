// Imported the Link API to support client-side navigation.
import Link from "next/Link";
// Imported components from React Bootstrap.
import { Container, Row } from "react-bootstrap";
// Imported icons from FontAwesome. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
  backgroundColor: "#393d49",
};

// Set the width of the Edamam API's logo.
const edamamStyle = {
  width: "200px",
};

// Set the margins, the top padding, the width and the font colour of the footer's text.
const footerTextStyle = {
  margin: "5px auto 5px 345px",
  paddingTop: "5px",
  width: "306px",
  color: "#ffffff",
};

// Set the right margin, the font colour and implemented a drop-shadow filter do give the icon a 3D and defined look.
const heartStyle = {
  marginRight: "5px",
  color: "#800000",
  filter: "drop-shadow(1px 2px 2px #000000)",
};

// Set the bottom and right margins, the font size and colour of the "Scroll to Top" icon and for the cursor to change once the icon is hovered
// over.
const scrollButtonStyle = {
  marginBottom: "-10px",
  marginRight: "35px",
  fontSize: "1.1rem",
  cursor: "pointer",
  color: "#ffffff",
};

// Created onMouseOver and onMouseOut event handler functions to change the font colours of the scroll icon once hovered over and to change
// back the colour when the links are no longer hovered over.
const changeFontColor = (e) => {
  e.target.style.color = "#f1b374";
};

const changeBackFontColor = (e) => {
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
      behavior: "smooth",
    });
  };

  return (
    <div style={footerStyle}>
      <Container fluid>
        <Row>
          <div
            style={edamamStyle}
            id="edamam-badge"
            data-color="transparent"
            z-index="1"
          ></div>
          <h6 style={footerTextStyle}>
            CREATED WITH <FontAwesomeIcon icon={faHeart} style={heartStyle} />
            BY CHANELLE BÖSIGER
          </h6>
          <div>
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              onClick={scrollToTop}
              title="Scroll to Top"
              style={scrollButtonStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

// Exported footer.js to the recipe page.
export default Footer;
