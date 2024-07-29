import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_header.scss";
import { navLinks } from "../../helpers/navLinks.ts";
import Icon from "../Icon/Icon.tsx";
import { NavLinkType } from "../../entities/navLinkTypes.ts";
import MobileMenu from "./MobileMenu.tsx";

const Header: React.FC = () => {
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    }
    if (!menuOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container header--container">
        <NavLink className="header--container__logo" to="/#home">
          BankHotel
        </NavLink>
        {!isNotDesktop ? (
          <>
            <nav>
              <ul className="nav--list">
                {navLinks.map(({ id, value, to }: NavLinkType) => (
                  <li key={id}>
                    <NavLink className="nav--list__link" to={to}>
                      {value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <address>
              <a className="header--phone" href="tel:+380322975020">
                +38 032 297 50 20
              </a>
            </address>
          </>
        ) : (
          <div>
            <button
              className="menu__toggle--button"
              type="button"
              onClick={handleToggleMenu}
            >
              {!menuOpen ? (
                <Icon width={40} height={30} iconId="menu-burger" />
              ) : (
                <Icon width={30} height={30} iconId="menu-close" />
              )}
            </button>
          </div>
        )}
      </div>

      {isNotDesktop && (
        <MobileMenu menuOpen={menuOpen} onClick={handleToggleMenu} />
      )}
    </header>
  );
};

export default Header;
