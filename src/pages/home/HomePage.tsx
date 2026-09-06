import "./HomePage.css";

import Sidebar from "./sidebar/SideBar";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";

function HomePage() {
  return (
    <div className="home-page">
      <Sidebar />

      <main className="home">
        {/* Hero */}
        <section id="home" className="home__hero">
          <div className="home__hero-content">
            <p className="home__eyebrow">
              Software Engineer
            </p>

            <h1>
              Hi, I'm Michael.
            </h1>

            <p className="home__intro">
              I build scalable applications and enjoy working
              across backend, frontend, and AI technologies.
            </p>

            <div className="home__hero-actions">
              <a href="#projects" className="home__button">
                View My Work
              </a>

              <a href="#contact" className="home__button home__button--secondary">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default HomePage;