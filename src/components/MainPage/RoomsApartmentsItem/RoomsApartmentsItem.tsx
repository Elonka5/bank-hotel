import { ApartmentsInterface } from "../../../redux/interface/interface";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import ButtonSince from "../../ButtonSince/ButtonSince";
import ResponsiveFetchImg from "../../ResponsiveImg/ResponsiveFetchImg";

export interface IRoomsApartments {
  room: ApartmentsInterface;
  // {
  //   id: number;
  //   imgLeft?: React.ReactNode;
  //   imgRight?: React.ReactNode;
  //   title?: string;
  //   text?: string;
  // };
  totalPage: number;
}

const RoomsApartmentsItem: React.FC<IRoomsApartments> = ({
  room,
  totalPage,
}) => {
  const { id, title, text, imageLeftResolutions, imageRightResolutions } = room;

  function formatNumber(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <li className={`slider__list--item slide-${id}`}>
      <div className="left-container">
        <div className="left-container__img-wrapper">
          {imageLeftResolutions && (
            <ResponsiveFetchImg nameImg={imageLeftResolutions} alt="" />
          )}
        </div>
        <div className="descr-container">
          <ButtonSince className="white-bg" text="Since 1973" />
          <h3 className="descr-container__title">{title}</h3>
          <p className="descr-container__descr">{text}</p>
          <p className="descr-container__counter">
            {formatNumber(id)}
            <span>/</span>
            <span>{formatNumber(totalPage)}</span>
          </p>
        </div>
      </div>
      <div className="right-container">
        <ButtonPoly
          className="btnPoly booking"
          iconWidth={200}
          iconHeight={200}
          iconPolygonId="polygon-fill"
          // onClick={}
        >
          <span>Book room</span>
        </ButtonPoly>
        <div className="right-container__img-wrapper">
          {/* {imgRight} */}
          {imageRightResolutions && (
            <ResponsiveFetchImg nameImg={imageRightResolutions} alt="" />
          )}
        </div>
      </div>
    </li>
  );
};

export default RoomsApartmentsItem;
