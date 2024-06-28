import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import ButtonSince from "../../ButtonSince/ButtonSince";

const Hero = () => {
  return (
    <section className="hero container">
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
    </section>
  );
};

export default Hero;
