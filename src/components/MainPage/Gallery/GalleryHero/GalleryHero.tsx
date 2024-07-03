import bgImg from "../../../../assets/images/mainImages/desktop1920/main-best-desktop-1920.webp";
import Icon from "../../../Icon/Icon";

const GalleryHero = () => {
  return (
    <div
      className="container gallery--hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Icon className="gallery--hero__icon-wave" iconId="line" />
      <h2 className="gallery--hero__title">Best apartments</h2>
      <p
        className="gallery--hero__info
        "
      >
        All room decoration was made with ecological certified and safe
        materials.
      </p>
    </div>
  );
};

export default GalleryHero;
