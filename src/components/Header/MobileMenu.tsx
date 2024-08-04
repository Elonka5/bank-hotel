import "../../scss/layout/_menuMobile.scss";
import { NavLinkType } from "../../entities/navLinkTypes";
import { navLinks } from "../../helpers/navLinks";
import Icon from "../Icon/Icon";
import { MobileMenuProps } from "../../entities/mobileMenu";
import { Link } from "react-router-dom";

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  onClick,
  // isActive,
}) => {
  return (
    <div className={`mobile--menu--container  ${menuOpen ? "active" : ""}`}>
      <div className="container inner-wrapper">
        <nav className="nav--mobile">
          <ul className="nav--list--mobile">
            {navLinks.map(({ id, value, to }: NavLinkType) => (
              <li key={id}>
                <Link
                  className="nav--list--mobile__link"
                  // className={`nav--list--mobile__link ${
                  //   isActive(to) ? "active" : ""
                  // }`}
                  to={to}
                  onClick={onClick}
                >
                  {value}

                  <Icon
                    className="nav--list--mobile__link__icon"
                    iconId="star-8"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <address className="mobile--address">
            <a className="phone" href="tel:+380322975020">
              +38 032 297 50 20
            </a>
            <a
              className="address--link"
              target="_blank"
              rel="noopener nofollow noreferrer"
              href="https://maps.app.goo.gl/HvW2oCnHNjAGywFU8"
            >
              8 Lystopadovoho Chynu, Lviv
            </a>
          </address>
          <div className="social--links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
