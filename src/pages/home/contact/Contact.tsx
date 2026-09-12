import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">

        <div className="contact__heading">
          <h2>Contact</h2>
        </div>

        <div className="contact__content">
          <h3>
            Let's build something together.
          </h3>

          <p>
            I'm always open to discussing software engineering
            opportunities, projects, and interesting ideas.
          </p>

          <a
            href="mailto:michaelzhuang16@gmail.com"
            className="contact__email"
          >
            michaelzhuang16@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;