import "../../scss/layout/_getInTouch.scss";
import mgTouch_1920 from "../../assets/images/getInTouchImages/touch-desktop-1920.webp";
import Icon from "../Icon/Icon";

const GetInTouch: React.FC = () => {
  return (
    <div className="section">
      <div className="container touch__container">
        <a className="touch__container--phone" href="tel:+380322975020">
          +38 032 297 50 20
        </a>

        <Icon className="touch__container--icon-wave" iconId="line" />

        <div className="touch__wrapper">
          <h2 className="touch__wrapper--title">
            Get in <span>touch</span>
          </h2>

          <div className="info--wrapper">
            <Icon
              className="icon--star"
              width={150}
              height={150}
              iconId="star"
            />
            <div>
              <p className="address--info">8 Lystopadovoho Chynu, Lviv</p>
              <div className="wrapper__star--img">
                <div className="touch__img--wrapper">
                  <img className="touch__img" src={mgTouch_1920} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
