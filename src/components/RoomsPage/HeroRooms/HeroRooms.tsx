import { useEffect, useState, useCallback, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import { images } from "../../../helpers/heroRoomsBgImg";
import Icon from "../../Icon/Icon";
import BookingRoomFormDatePicker from "../../BookingRoomForm/BookingRoomFormDatePicker";
import styles from "../../DatePickerComponent/DatePicker.module.scss";
import {
  classNameForm,
  handleAnimationEnd,
  handleClick,
} from "../../../helpers/animationHandleForm";
import HeroRoomsDescription from "./HeroRoomsDescription";

const HeroRooms: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isDesktop1920 = useMediaQuery({ minWidth: 1919.98 });
  const isDesktop1440 = useMediaQuery({ minWidth: 1440, maxWidth: 1919.98 });
  const isTablet = useMediaQuery({ minWidth: 767.98, maxWidth: 1439.98 });
  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  const intervalRef = useRef<number | null>(null);

  const getCurrentImages = useCallback(() => {
    if (isDesktop1920) return images.desktop1920;
    if (isDesktop1440) return images.desktop1440;
    if (isTablet) return images.tablet;
    if (isMobile) return images.mobile;
    return images.desktop1920;
  }, [isDesktop1920, isDesktop1440, isTablet, isMobile]);

  const preloadImages = useCallback((images: string[]) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startImageChangeInterval = useCallback(() => {
    clearExistingInterval();
    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % getCurrentImages().length
      );
    }, 5000);
  }, [getCurrentImages]);

  useEffect(() => {
    preloadImages(getCurrentImages());
  }, [getCurrentImages, preloadImages]);

  useEffect(() => {
    startImageChangeInterval();
    return () => clearExistingInterval();
  }, [getCurrentImages, startImageChangeInterval]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    startImageChangeInterval();
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
            onClick={() =>
              handleClick(isOpen, setIsOpen, setIsClosing, setIsOpenForm)
            }
          >
            <span>Book room</span>
          </ButtonPoly>
          {isOpenForm && (
            <BookingRoomFormDatePicker
              className={classNameForm(isMobile, isOpen)}
              onAnimationEnd={(event) =>
                handleAnimationEnd(event, isClosing, setIsOpen, setIsClosing)
              }
              touchClassName={
                !isMobile ? styles.hero_rooms : styles.mobile_rooms
              }
            />
          )}
        </div>
      </div>
      <HeroRoomsDescription />
    </section>
  );
};

export default HeroRooms;
