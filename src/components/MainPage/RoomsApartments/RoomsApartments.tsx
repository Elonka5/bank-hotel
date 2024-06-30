import ButtonSince from "../../ButtonSince/ButtonSince";

const RoomsApartments = () => {
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
        <ul className="slider__list">
          <li className="slider__list--item slide-1">
            <div className="first-container">
              <div className="descr-container">
                <ButtonSince className="white-bg" text="Since 1973" />
                <h3 className="title">Superior twin</h3>
                <p className="descr">
                  The Superior twin is perfect for those who plan to stay long.
                  The spacious and bright room is equipped with deluxe Italian
                  furniture and has a beautiful view to the historical part of
                  the city. Stylish interior design and comfortable beds will
                  make your stay cozy and pleasant.
                </p>
              </div>
            </div>
            <div className="second-container"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RoomsApartments;
