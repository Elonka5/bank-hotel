import imgRoom from "../../../../assets/images/mainImages/desktop1920/main-gallery1-desktop-1920.webp";
import imgRestaurant from "../../../../assets/images/mainImages/desktop1920/main-gallery4-desktop-1920.webp";
import imgHall from "../../../../assets/images/mainImages/desktop1920/main-gallery3-desktop-1920.webp";
import imgConference from "../../../../assets/images/mainImages/desktop1920/main-gallery2-desktop-1920.webp";
import imgBath from "../../../../assets/images/mainImages/desktop1920/main-gallery5-desktop-1920.webp";
import Icon from "../../../Icon/Icon";
import TickerRight from "./Ticker/TickerRight";
import TickerLeft from "./Ticker/TickerLeft";

const GallerySection = () => {
  return (
    <div className="container gallery--container">
      <div className="gallery--wrapper">
        <div className="gallery--part__left">
          <p className="section--introduction">Art & Congress hall</p>
          <div className="img--wrapper__nopaddingLeft">
            <img src={imgRoom} alt="Room equipment" />
          </div>
          <div className="img--wrapper__left">
            <img src={imgRestaurant} alt="Restaurant equipment" />
          </div>
        </div>
        <div className="gallery--part__center">
          <Icon className="gallery--part__center--label" iconId="label" />
          <h2 className="gallery--title">Our gallery</h2>
          <p className="gallery--description">
            Explore our spacious rooms with the gorgeous view to the historical
            part of the city. Each room has an exclusive interior design
            decorated with modern art pieces that will make your stay
            unforgettable.{" "}
          </p>
          <div className="img--wrapper__center">
            <img src={imgHall} alt="Hall equipment" />
          </div>

          <div className="gallery--info__wrapper">
            <Icon width={50} height={50} iconId="polygon-fill" />
            <p className="gallery--info">
              It is our pleasure to meet your most unrealistic expectations.
            </p>
          </div>
        </div>
        <div className="gallery--part__right">
          <div className="img--wrapper__nopaddingRight">
            <img src={imgConference} alt="Conference hall equipment" />
          </div>
        </div>
      </div>
      <div className="img--wrapper__right">
        <img src={imgBath} alt="Bathroom equipment" />
      </div>
      <div className="ticker--box">
        <TickerRight />
        <TickerLeft />
      </div>
    </div>
  );
};

export default GallerySection;
