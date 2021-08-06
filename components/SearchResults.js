// Imported components from React Bootstrap.
import { Card, Button, Col } from "react-bootstrap";

/**
 * Styled the RecipeInfo component.
 */

// Set for the recipe container to display as flex and the direction to be a row.
const recipeContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
};

// Set the width, the margins and the padding of the recipe cards.
const recipeCardStyle = {
  width: "300px",
  margin: "10px 3px",
  padding: "10px",
};

// Set the size (minHeight, height x width), the padding and aligned the content to the center using the justify, text and general alignment
// along with changing the display to flex.
const recipeCardHeaderStyle = {
  minHeight: "60px",
  height: "auto",
  width: "100%",
  padding: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

// Set the bottom margins of the images.
const imageStyle = {
  marginBottom: "5px",
};

// Set the width of the table's header cells.
const tableHeaderStyle = {
  width: "88px",
};

// Set for the first letter of the meal and cuisine type to be capitalised.
const capitalLetter = {
  textTransform: "capitalize",
};

// Set the background and border colour of the buttons.
const buttonStyle = {
  backgroundColor: "#393d49",
  border: "#000000",
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

const SearchResults = ({ results }) => {
  return (
    <div style={recipeContainerStyle}>
      {results.hits.map((item, i) => (
        <Col>
          <Card key={i} style={recipeCardStyle}>
            <Card.Header style={recipeCardHeaderStyle}>
              <h5>{item.recipe.label}</h5>
            </Card.Header>
            <Card.Body>
              <Card.Img
                src={item.recipe.image}
                alt="Recipe Photograph"
                onError={(e) => {
                  e.target.src = "/static/images/TooDelicious.png";
                }}
                style={imageStyle}
              />
              <table>
                <tbody>
                  <tr>
                    <th style={tableHeaderStyle}>Recipe By:</th>
                    <td>{item.recipe.source}</td>
                  </tr>
                  <tr>
                    <th style={tableHeaderStyle}>Cuisine:</th>
                    <td style={capitalLetter}>{item.recipe.cuisineType}</td>
                  </tr>
                  <tr>
                    <th style={tableHeaderStyle}>Meal Type:</th>
                    <td style={capitalLetter}>{item.recipe.mealType}</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer>
              <Button
                href={item.recipe.url}
                target="_blank"
                style={buttonStyle}
              >
                View Recipe
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </div>
  );
};

// Exported SearchResults to the recipes page.
export default SearchResults;
