import { useMediaQuery } from "react-responsive";
import bgImg from "../../../../assets/images/mainImages/desktop1920/main-best-desktop-1920.webp";
import bgImgMobile from "../../../../assets/images/mainImages/mobile/main-best-mobile.webp";
// import Icon from "../../../Icon/Icon";

const GalleryHero = () => {
  const isMobileSm = useMediaQuery({ maxWidth: 1023.99 });

  return (
    <div
      className="container gallery--hero"
      style={
        !isMobileSm
          ? { backgroundImage: `url(${bgImg})` }
          : { backgroundImage: `url(${bgImgMobile})` }
      }
    >
      {/* <Icon className="gallery--hero__icon-wave" iconId="line" /> */}
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
