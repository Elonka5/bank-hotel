import "../../scss/layout/_footer.scss";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__border"></div>
        <ul className="footer__list">
          <li className="footer__list--item">
            <h3 className="title">About us</h3>
            <p className="description">
              The five-star hotel in a beautiful European city with a modern
              restaurant, conference-hall, and art-bar.
            </p>
          </li>
          <li className="footer__list--item">
            <h3 className="title">News</h3>
            <p className="description">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
          </li>
          <li className="footer__list--item">
            <h3 className="title">Social</h3>
            <ul className="social--list">
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="wrapper">
          <p className="rights">&copy; 2021 All rights reserved. BankHotel</p>

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
      </div>
    </footer>
  );
};

export default Footer;
