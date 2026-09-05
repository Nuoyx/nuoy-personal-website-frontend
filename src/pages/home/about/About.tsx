import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">

        <div className="about__heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about__content">
          <p>
            I'm a software engineer interested in building
            reliable and scalable software systems.
          </p>

          <p>
            My experience spans backend development, frontend
            development, databases, cloud services, and
            artificial intelligence.
          </p>

          <p>
            I enjoy learning new technologies and turning
            complex problems into simple, maintainable solutions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;