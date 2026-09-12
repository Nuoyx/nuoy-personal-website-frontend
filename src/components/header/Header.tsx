import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Artworks", path: "/artworks" },
  { label: "Blogs", path: "/blogs" },
];

function Header() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          MZ<span>.</span>
        </Link>

        <nav className="header__nav">
          {navigationItems.map((item) => (
            <Link key={item.path} to={item.path} className="header__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            onClick={() => setIsDark((current) => !current)}
          >
            <span aria-hidden="true">{isDark ? "☼" : "☾"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;