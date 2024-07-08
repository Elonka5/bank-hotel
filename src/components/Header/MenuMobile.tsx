import { NavLink } from "react-router-dom";
import { NavLinkType } from "../../entities/navLinkTypes";
import { navLinks } from "../../helpers/navLinks";

const MenuMobile = () => {
  return (
    <div className="menu--container">
      <nav>
        <ul className="nav--links__mobile">
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
        <a
          target="_blank"
          rel="noopener nofollow noreferrer"
          href="https://maps.app.goo.gl/HvW2oCnHNjAGywFU8"
        >
          8 Lystopadovoho Chynu,Lviv
        </a>
        <div className="social--links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </address>
    </div>
  );
};

export default MenuMobile;
