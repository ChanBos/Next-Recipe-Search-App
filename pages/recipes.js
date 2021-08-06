// Imported the Link API to support client-side navigation.
import Link from "next/Link";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";
// Imported components.
import SearchResults from "../components/SearchResults";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Applied the styles and passed the AppDisplay props.
 * Imported the following components: Header, SearchResults, Footer.
 * Passed the results props to allow the page access to the search term's results that is entered on the index page.
 */

const Recipes = ({ results }) => {
  return (
    <div>
      <AppDisplay />
      <Header />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
};

// Exported recipes page to be generated.
export default Recipes;

/**
 * Created an asynchronous function to fetch the data from the Edamam API.
 * Processing the API id and key from the .env.local file. Inserted these into the API's url.
 * Awaiting the data from the API. Will be returned on this page if a search term has been entered via the home page.
 */

export async function getServerSideProps(context) {
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${context.query.term}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      results: data ? data : null,
    },
  };
}
