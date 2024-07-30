import { useMediaQuery } from "react-responsive";
import ResponsiveImage from "../../ResponsiveImg/ResponsiveImg";

const SecondDescriptions = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023.98 });
  return (
    <section className="second-descriptions container">
      <div className="second-descriptions__first-container">
        <div className="image-wrapper">
          <ResponsiveImage srcImg="facility3" alt="facility3" path="facility" />
        </div>
        <p className="descriptions">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
      <div className="second-descriptions__second-container">
        <div className="image-wrapper">
          <ResponsiveImage srcImg="facility4" alt="facility4" path="facility" />
        </div>
        <div className="descriptions-container">
          <p className="title">Spend Your Time With Us</p>
          {!isMobile ? (
            <p className="descriptions">
              If you are looking for an exclusive place to have a romantic
              dinner, organize a business meeting, or spend an enjoyable evening
              with friends, visit Safe Restaurant in Bank Hotel. With our
              delicious meals, unique interior design, and atmosphere of comfort
              and exquisiteness you shall never want to go to a different
              restaurant.
            </p>
          ) : (
            <p className="descriptions">
              The team of the Safe Restaurant aims to exceed all expectations of
              our guests. Our chef worked hard to develop a unique menu that
              features the best meals of the European cuisine that will match
              the tastes of the most demanding clients. Friendly and attentive
              waiters will ensure that you will enjoy your time in our
              restaurant.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecondDescriptions;
