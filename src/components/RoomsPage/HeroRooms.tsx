// import React from 'react'

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { RoomItemInterface } from "../../redux/interface/interface";
import ButtonPoly from "../ButtonPoly/ButtonPoly";
import ButtonSince from "../ButtonSince/ButtonSince";

export interface RoomItemProps {
  room: RoomItemInterface;
}

const HeroRooms: React.FC<RoomItemProps> = ({ room }) => {
  const images = {
    desktop: [
      "/rooms-hero-desktop1920.webp",
      "/rooms-hero-desktop1-1920.webp",
      "/rooms-hero-desktop2-1920.webp",
    ],
    // tablet: [
    //   '/rooms-hero-tablet-1.webp',
    //   '/rooms-hero-tablet-2.webp',
    //   '/rooms-hero-tablet-3.webp',
    // ],
    // mobile: [
    //   '/rooms-hero-mobile-1.webp',
    //   '/rooms-hero-mobile-2.webp',
    //   '/rooms-hero-mobile-3.webp',
    // ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const getCurrentImages = () => {
    if (isDesktop) return images.desktop;
    // if (isTablet) return images.tablet;
    // if (isMobile) return images.mobile;
    return images.desktop;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % getCurrentImages().length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isDesktop]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  const { roomDescription, title } = room;

  return (
    <section className="hero__rooms">
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
          <h1 className="title">{title}</h1>
          <p className="description">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
        <div>
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
          <p className="descr-room">{roomDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroRooms;
