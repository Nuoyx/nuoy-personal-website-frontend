import "./Sidebar.css";

const navigationItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Skills",
    target: "skills",
  },
  {
    label: "Projects",
    target: "projects",
  },
  {
    label: "Experience",
    target: "experience",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

function Sidebar() {
  const handleNavigation = (target: string) => {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__content">

        {/* Navigation */}
        <nav className="sidebar__nav">
          {navigationItems.map((item) => (
            <button
              key={item.target}
              className="sidebar__link"
              onClick={() => handleNavigation(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social / External Links */}
        <div className="sidebar__social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;