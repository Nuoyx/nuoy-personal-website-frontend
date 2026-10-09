import "./HomePage.css";

import Sidebar from "./sidebar/SideBar";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";
import Portrait from "../../assets/portrait.png";
import Resume from "../../assets/resume.pdf";



function HomePage() {
  return (
    <div className="home-page">
      <Sidebar />
      <main className="home">
        {/* Hero */}
        <section id="home" className="home__hero">
          <div className="home__hero-layout">
            <div className="home__hero-content">
              <h3>
                Hello! I'm {"\n"}
                Michael Zhuang
              </h3>
              <p className="home__eyebrow">
                Full Stack Developer | AI Engineer
              </p>

              <p className="home__intro">
                I'm a Computer Science graduate passionate about full-stack development and AI engineering. 
                I enjoy building applications from front to back, developing backend systems, and exploring ways to bring AI into real-world projects. 
                I'm particularly interested in creating practical, well-designed software that solves problems and makes people's lives a little easier.
              </p>
              <p className="home__intro">
                Beyond coding, I love discovering new restaurants in the DMV area, exploring digital drawing, and baking cookies and cakes for my family!
              </p>

              <div className="home__hero-actions">
                <a
                  href={Resume}
                  download="Michael_Zhuang_Resume.pdf"
                  className="home__button home__button--secondary"
                >
                  Resume
                </a>
                <a href="/projects" className="home__button">
                  View My Work
                </a>

                <a href="#contact" className="home__button home__button--secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="home__portrait" aria-label="Portrait placeholder">
              <img src={Portrait} alt="portrait.png" />
            </div>
          </div>
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