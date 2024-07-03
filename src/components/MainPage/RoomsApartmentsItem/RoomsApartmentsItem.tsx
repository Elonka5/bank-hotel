import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import ButtonSince from "../../ButtonSince/ButtonSince";

export interface IRoomsApartments {
  room: {
    id: number;
    imgLeft?: React.ReactNode;
    imgRight?: React.ReactNode;
    title?: string;
    text?: string;
  };
  totalPage: number;
}

const RoomsApartmentsItem: React.FC<IRoomsApartments> = ({
  room,
  totalPage,
}) => {
  const { id, imgLeft, imgRight, title, text } = room;

  function formatNumber(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <li className={`slider__list--item slide-${id}`}>
      <div className="left-container">
        <div className="left-container__img-wrapper">{imgLeft}</div>
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
          iconArrow="arrow50"
          // onClick={}
        >
          <span>Book room</span>
        </ButtonPoly>
        <div className="right-container__img-wrapper">{imgRight}</div>
      </div>
    </li>
  );
};

export default RoomsApartmentsItem;
