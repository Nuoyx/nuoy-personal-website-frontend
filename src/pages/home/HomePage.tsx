import "./HomePage.css";

import Header from "../../components/header/Header"
import Sidebar from "./sidebar/SideBar";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
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
                Full Stack Developer * AI Engineer
              </p>

              <p className="home__intro">
                I’m currently pursuing my path in computer science with a strong focus on machine learning, data science, and algorithms.
                I’m also the founder of an early-stage startup developing an online platform that helps people quickly discover the food they want.
                Beyond coding, I love discovering new restaurants in the DMV area, learning digital drawing, and baking cookies and cakes for my family!
              </p>
              
              <div className="home__hero-actions">
                <a href="#contact" className="home__button home__button--secondary">
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
              <span>Portrait</span>
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