import ButtonSince from "../../ButtonSince/ButtonSince";

const HeroRoomsDescription = () => {
  return (
    <div className="hero__rooms--description">
      <ButtonSince className="btnSince" text="Since 1973" />
      <div className="rooms-wrapper">
        <p className="room-text">
          All suites have a unique design because we want our every guest to
          feel special.
        </p>
        <p className="descr-room">
          The Superior twin would perfectly match the needs of those who plan to
          stay long. The bright and airy room is equipped with superior soft
          Italian furniture. Large windows open a beautiful view to the
          historical part of the city. Contemporary interior design and
          comfortable beds will make your stay cozy and delightful.
        </p>
      </div>
    </div>
  );
};

export default HeroRoomsDescription;
