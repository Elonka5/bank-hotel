import BookingRoomForm from "../../BookingRoomForm/BookingRoomForm";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import ButtonSince from "../../ButtonSince/ButtonSince";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__wrapper">
        <div className="hero__title">
          <h1>
            Bank<span>Hotel</span>
          </h1>
          <p>rooms // restaurant // congress hall // wine bar</p>
        </div>
        <div className="hero__descr">
          <div className="hero__descr--buttons">
            <ButtonSince className="btnSince" text="Since 1973" />
            <ButtonPoly
              className="btnPoly"
              iconWidth={70}
              iconHeight={70}
              iconArrow="arrow50"
              iconArrowId="arrow-up-and-down"
              iconPolygonId="polygon"
            />
          </div>
          <p className="hero__descr--text">
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
      </div>
      <div className="hero__image">
        <BookingRoomForm />
      </div>
      <div className="hero__address">
        <div className="hero__address--links">
          <a href="tel:+380322975020">+38 032 297 50 20</a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D0%B0,+8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8409133,24.0207693,19.12z/data=!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8409357!4d24.0209772!16s%2Fg%2F11bw4hghr9?authuser=0&entry=ttu"
          >
            8 Lystopadovoho Chynu,Lviv
          </a>
        </div>
        <div className="hero__address--name">
          <p>Art & Congress</p>
          <p>hall</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
