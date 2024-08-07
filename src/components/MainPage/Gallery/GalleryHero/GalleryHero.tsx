import { useMediaQuery } from "react-responsive";
import Icon from "../../../Icon/Icon";

const GalleryHero = () => {
  const isMobileSm = useMediaQuery({ maxWidth: 767.98 });

  return (
    <div className="container gallery--hero">
      {!isMobileSm ? (
        <Icon className="gallery--hero__icon-wave" iconId="line" ariaLabel="wave" />
      ) : (
        <Icon className="gallery--hero__icon-wave" iconId="wave-maxSm" ariaLabel="wave" />
      )}

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
