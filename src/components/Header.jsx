import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "about", path: "/about" },
    { title: "Service", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ];
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div>
        <ul className="nav__links">
          {navItems.map((navItem, index) => {
            return (
              <li className="nav__item" key={index}>
                <Link to={navItem.path}>{navItem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
