import { Link } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Artworks",
    path: "/artworks",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <Link to="/" className="header__logo">
          MZ
        </Link>

        {/* Navigation */}
        <nav className="header__nav">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="header__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
{/* 
        {/* Right Side }
        <div className="header__actions">
          <Link
            to="/secret"
            className="header__secret"
          >
            More
          </Link>
        </div> */}

      </div>
    </header>
  );
}

export default Header;