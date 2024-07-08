import { NavLink } from "react-router-dom";
import "../../scss/layout/_header.scss";
// import "../../scss/layout/_menuMobile.scss";
import { navLinks } from "../../helpers/navLinks.ts";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon.tsx";
import { useState } from "react";
import { NavLinkType } from "../../entities/navLinkTypes.ts";
// import MenuMobile from "./MenuMobile.tsx";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header__container">
        <NavLink to="/" className="logo">
          BankHotel
        </NavLink>
        {!isMobile ? (
          <>
            <nav>
              <ul className="nav--links">
                {navLinks.map(({ id, value, to }: NavLinkType) => (
                  <li key={id}>
                    <NavLink className="item" to={to}>
                      {value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <address>
              <a className="phone" href="tel:+380322975020">
                +38 032 297 50 20
              </a>
            </address>
          </>
        ) : (
          <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? (
              <Icon width={40} height={10} iconId="menu-burger" />
            ) : (
              <Icon width={30} height={30} iconId="menu-close" />
            )}
          </button>
        )}
      </div>

      {isMobile && (
        // ------------------------------
        <div className={`menu--container  ${menuOpen ? "active" : ""}`}>
          <nav>
            <ul className="nav--links--mobile">
              {navLinks.map(({ id, value, to }: NavLinkType) => (
                <li key={id}>
                  <NavLink className="nav--links--mobile__item" to={to}>
                    {value}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
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
              8 Lystopadovoho Chynu,Lviv
            </a>
          </address>
          <div className="social--links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        // -------------------------------
      )}
    </header>
  );
};

export default Header;
