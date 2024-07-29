import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ButtonPoly from "../ButtonPoly/ButtonPoly";
import ButtonSince from "../ButtonSince/ButtonSince";
import { images } from "../../helpers/heroRoomsBgImg";
import Icon from "../Icon/Icon";

const HeroRooms: React.FC = () => {
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isDesktop1920 = useMediaQuery({ minWidth: 1919.98 });
  const isDesktop1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1919.98 });
  const isTablet = useMediaQuery({ minWidth: 1023.98, maxWidth: 1439.98 });
  const isMobile = useMediaQuery({ maxWidth: 1023.98 });

  const getCurrentImages = () => {
    if (isDesktop1920) return images.desktop1920;
    if (isDesktop1440) return images.desktop1440;
    if (isTablet) return images.tablet;
    if (isMobile) return images.mobile;
    return images.desktop1920;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % getCurrentImages().length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isDesktop1920, isDesktop1440, isTablet, isMobile]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="hero__rooms">
      {isMobile && (
         <div className="touch__container--icon-wave--wrapper">
            
         <Icon className="icon-wave" iconId="wave-hero-rooms" />
     </div>
      )}
     
      <div
        className="hero__rooms--carousel"
        style={{
          backgroundImage: `url(${getCurrentImages()[currentImageIndex]})`,
        }}
      >
        <div className="carousel__dots">
          {getCurrentImages().map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <div className="hero__rooms--title-wrapper container">
          <h1 className="title">Superior twin</h1>
          <p className="description">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
        <div className="hero__rooms--button">
          <ButtonPoly
            className="btnPoly booking"
            iconWidth={200}
            iconHeight={200}
            iconPolygonId="polygon-fill"
            // onClick={}
          >
            <span>Book room</span>
          </ButtonPoly>
        </div>
      </div>
      <div className="hero__rooms--description">
        <ButtonSince className="btnSince" text="Since 1973" />
        <div className="rooms-wrapper">
          <p className="room-text">
            All suites have a unique design because we want our every guest to
            feel special.
          </p>
          <p className="descr-room">The Superior twin would perfectly match the needs of those who plan to stay long. The bright and airy room is equipped with superior soft Italian furniture. Large windows open a beautiful view to the historical part of the city. Contemporary interior design and comfortable beds will make your stay cozy and delightful.</p>
        </div>

      </div>
    </section>
  );
};

export default HeroRooms;
