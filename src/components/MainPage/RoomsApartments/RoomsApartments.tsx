import { roomsApartmentsArr } from "../../../helpers/roomsApartmentsItems";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import RoomsApartmentsItem from "../RoomsApartmentsItem/RoomsApartmentsItem";
import { useState } from "react";

const RoomsApartments = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalPage: number = roomsApartmentsArr.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === roomsApartmentsArr.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="rooms-apartments container">
      <div className="rooms-apartments__title-wrapper">
        <h2 className="title">
          Rooms
          <br />& Apartments
        </h2>
        <p className="descr">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
      <div className="rooms-apartments__slider-wrapper">
        <ButtonPoly
          className="btnPoly rooms"
          iconWidth={170}
          iconHeight={170}
          iconArrowId="arrow-right"
          iconPolygonId="polygon-green-stroke"
          iconArrow="arrow50"
          onClick={handleNextSlide}
        />
        <ul
          className="slider__list"
          style={{
            transform: `translateX(-${(currentSlide * 100) / totalPage}%)`,
          }}
        >
          {roomsApartmentsArr.map((room) => (
            <RoomsApartmentsItem
              key={room.id}
              room={room}
              totalPage={totalPage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RoomsApartments;
