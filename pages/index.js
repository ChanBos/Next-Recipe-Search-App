// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";
// Imported Carousel from React Bootstrap.
import { Carousel } from "react-bootstrap";
// Importing the SearchForm component.
import SearchForm from "../components/SearchForm";

/**
 * Styled the home page.
 */

// Set for the overflow to be hidden horizontally, as well as vertically. Also set the size (height x width) and padding of the carousel.
const carouselStyle = {
  overflowX: "hidden",
  overflowY: "hidden",
  height: "auto",
  width: "auto",
  padding: "0.5px",
};

// Set the height and width of the images to auto.
const imageStyle = {
  width: "auto",
  height: "auto",
};

// Set the height, width and bottom margin of the logo.
const logoStyle = {
  height: "450px",
  width: "auto",
  marginBottom: "70px",
};

/**
 * Applied the styles and passed the AppDisplay props.
 * Passed the props to enable the search functionality (value={search} and onChange={onInputChange})
 * @returns Styled home page, displaying a styled introduction header text section an image and a header component.
 */

const Home = (props) => {
  const { search, onInputChange } = props;

  return (
    <div>
      <AppDisplay>
        <div>
          <Carousel variant="dark" style={carouselStyle}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Breakfast.png"
                alt="First slide"
                style={imageStyle}
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Dinner.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Bake.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Burger.png"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Casserole.jpg"
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Pizza.jpg"
                alt="Sixth slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/static/images/Pudding.jpg"
                alt="Seventh slide"
              />
              <Carousel.Caption>
                <img
                  src="/static/images/GrumbleLogoMain.png"
                  alt="Grumble Logo"
                  style={logoStyle}
                />
                <SearchForm value={search} onChange={onInputChange} />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </AppDisplay>
    </div>
  );
};

// Exported home page to be generated.
export default Home;
