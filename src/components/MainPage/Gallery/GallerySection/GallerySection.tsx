// import imgRoom from "../../../../assets/images/mainImages/desktop1920/main-gallery1-desktop-1920.webp";
// import imgRestaurant from "../../../../assets/images/mainImages/desktop1920/main-gallery4-desktop-1920.webp";
// import imgHall from "../../../../assets/images/mainImages/desktop1920/main-gallery3-desktop-1920.webp";
// import imgConference from "../../../../assets/images/mainImages/desktop1920/main-gallery2-desktop-1920.webp";
// import imgBath from "../../../../assets/images/mainImages/desktop1920/main-gallery5-desktop-1920.webp";

// import imgGalleryLeftUp from "../../../../assets/images/mainImages/mobile/main-gallery2-mobile.webp";
// import imgGalleryRightUp from "../../../../assets/images/mainImages/mobile/main-gallery1-mobile.webp";
// import imgGalleryCenter from "../../../../assets/images/mainImages/mobile/main-gallery3-mobile.webp";

import Icon from "../../../Icon/Icon";
import TickerRight from "./Ticker/TickerRight";
import TickerLeft from "./Ticker/TickerLeft";
import { useMediaQuery } from "react-responsive";
import ResponsiveImage from "../../../ResponsiveImg/ResponsiveImg";

const GallerySection = () => {
  const isMobileSm = useMediaQuery({ maxWidth: 1023.99 });

  return (
    <div className="container gallery--container">
      <div className="gallery--wrapper">
        {!isMobileSm && (
          <div className="gallery--part__left">
            <p className="section--introduction">Art & Congress hall</p>
            <div className="img--wrapper__nopaddingLeft">
              {/* <img src={imgRoom} alt="Room equipment" /> */}
              <ResponsiveImage
                alt="Room equipment"
                srcImg="main-gallery1"
                path="gallery"
              />
            </div>
            <div className="img--wrapper__left">
              {/* <img src={imgRestaurant} alt="Restaurant equipment" /> */}
              <ResponsiveImage
                alt="Room equipment"
                srcImg="main-gallery2"
                path="gallery"
              />
            </div>
          </div>
        )}

        <div className="gallery--part__center">
          <Icon
            className="gallery--part__center--label"
            iconId="label-gallery"
          />
          <h2 className="gallery--title">Our gallery</h2>
          <p className="gallery--description">
            Explore our spacious rooms with the gorgeous view to the historical
            part of the city. Each room has an exclusive interior design
            decorated with modern art pieces that will make your stay
            unforgettable.{" "}
          </p>
          <div className="gallery--wrapper__imgInfo">
            {!isMobileSm ? (
              <div className="img--wrapper__center">
                {/* <img src={imgHall} alt="Hall equipment" /> */}
                <ResponsiveImage
                  alt="Room equipment"
                  srcImg="main-gallery3"
                  path="gallery"
                />
              </div>
            ) : (
              <div className="gallery--imgs--wrapper__mobile">
                <div className="gallery--part__left--mobile">
                  <div className="img--wrapper__leftUp">
                    {/* <img src={imgGalleryLeftUp} alt="Room equipment" /> */}
                    <ResponsiveImage
                      alt="Room equipment"
                      srcImg="main-gallery1"
                      path="gallery"
                    />
                  </div>
                  <div className="img--wrapper__leftTransp">
                    {/* <img src="#" alt="Room equipment" /> */}
                    <ResponsiveImage
                      alt="Room equipment"
                      srcImg="main-gallery2"
                      path="gallery"
                    />
                  </div>
                </div>
                {/* <div className="gallery--part__center--mobile"> */}
                <div className="img--wrapper__center--mobile">
                  {/* <img src={imgGalleryCenter} alt="Room equipment" /> */}
                  <ResponsiveImage
                    alt="Room equipment"
                    srcImg="main-gallery3"
                    path="gallery"
                  />
                </div>
                {/* </div> */}
                <div className="gallery--part__right--mobile">
                  <div className="img--wrapper__rightUp">
                    {/* <img src={imgGalleryRightUp} alt="Room equipment" /> */}
                    <ResponsiveImage
                      alt="Room equipment"
                      srcImg="main-gallery4"
                      path="gallery"
                    />
                  </div>
                  <div className="img--wrapper__rightTransp">
                    {/* <img src="#" alt="Room equipment" /> */}
                    <ResponsiveImage
                      alt="Room equipment"
                      srcImg="main-gallery5"
                      path="gallery"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="gallery--info__wrapper">
              <Icon className="gallery--info__icon" iconId="polygon-fill" />
              <p className="gallery--info">
                It is our pleasure to meet your most unrealistic expectations.
              </p>
            </div>
          </div>
        </div>

        {!isMobileSm && (
          <div className="gallery--part__right">
            <div className="img--wrapper__nopaddingRight">
              {/* <img src={imgConference} alt="Conference hall equipment" /> */}
              <ResponsiveImage
                alt="Conference hall equipment"
                srcImg="main-gallery4"
                path="gallery"
              />
            </div>
          </div>
        )}
      </div>
      {!isMobileSm && (
        <>
          <div className="img--wrapper__right">
            {/* <img src={imgBath} alt="Bathroom equipment" /> */}
            <ResponsiveImage
              alt="Conference hall equipment"
              srcImg="main-gallery5"
              path="gallery"
            />
          </div>
          <div className="ticker--box">
            <TickerRight />
            <TickerLeft />
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySection;
