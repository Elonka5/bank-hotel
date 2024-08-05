import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_footer.scss";
import Icon from "../Icon/Icon";
import { NavProps } from "../../entities/navprops";

const Footer: React.FC<NavProps> = ({ isRestaurantPage }) => {
  const isMobileSm = useMediaQuery({ maxWidth: 767.98 });

  return (
    <footer
      className={`footer ${isRestaurantPage ? "restaurantPageStyles" : ""} `}
    >
      <div className="container ">
        <div className="footer__container">
          {!isMobileSm ? (
            <>
              <ul className="footer__list">
                <li className="footer__list--item">
                  <h3 className="title">
                    <span className="title__prefix">/</span>About us
                  </h3>
                  <p className="description">
                    The five-star hotel in a beautiful European city with a
                    modern restaurant, conference-hall, and art-bar.
                  </p>
                </li>
                <li className="footer__list--item">
                  <h3 className="title">
                    <span className="title__prefix">/</span>News
                  </h3>
                  <p className="description">
                    Sign up to our newsletter not to miss exclusive offers and
                    information about the upcoming events.
                  </p>
                </li>
                <li className="footer__list--item">
                  <h3 className="title">
                    <span className="title__prefix">/</span>Socials
                  </h3>
                  <ul className="social--list">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        href="#"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        href="#"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        href="#"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="wrapper">
                <p className="rights">
                  &copy;2021 All rights reserved. BankHotel
                </p>
                <a
                  className="email--link"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  href="mailto:mailto@gmail.com"
                >
                  <p>Email</p>
                  <Icon
                    className="email--link__icon"
                    width={31}
                    height={17}
                    iconId="arrow-right"
                  />
                </a>
              </div>
            </>
          ) : (
            <p className="rights">&copy;2021 All rights reserved. BankHotel</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
