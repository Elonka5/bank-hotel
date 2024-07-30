import Icon from "../../Icon/Icon";

const Hero = () => {
  return (
    <section className="facility-hero container">
      <h1 className="facility-hero__title">“Safe” restaurant</h1>
      <div className="facility-hero__descriptions">
        <div className="first-container">
          <p>One of a Kind</p>
        </div>
        <div className="second-container">
          <div className="second-container__circle"></div>
          <div className="second-container__descriptions">
            <Icon iconId="label" className="label" />
            <p className="descr">
              Bank Hotel proudly welcomes you to the Safe Restaurant, a place
              where you will wish you could dine every day. The restaurant
              offers a unique menu developed by the team of professionals led by
              chef Mary-Ann Jones, the wine list with more than 250 items, the
              outstanding service, and the unforgettable atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
