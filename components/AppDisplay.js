// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Importing the Next built-in component to append elements to the head of the page.
import Head from "next/head";

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
  fontFamily: "Staatliches, Trebuchet, Helvetica",
};

/**
 * Added the links to utilize React Bootstrap, Google font and the Edamam API's badge.
 * @param {*} props Children pages for appDisplayStyle to render - index, recipes.
 * @returns The application's general styling, with appended links, for use in the pages.
 */

const AppDisplay = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches"
      />
      <script src="https://developer.edamam.com/attribution/badge.js"></script>
    </Head>
    <div style={appDisplayStyle}>{props.children}</div>
  </div>
);

// Exporting AppDisplay for use on the pages.
export default AppDisplay;
