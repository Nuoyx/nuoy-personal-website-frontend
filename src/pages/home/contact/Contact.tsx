import "./Contact.css";
import contactAddress from "../../../assets/contact-address.png";
import contactEmail from "../../../assets/contact-email.png";
import contactPhone from "../../../assets/contact-phone.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__heading">
          <h2>Contact</h2>
        </div>

        <div className="contact__content">
          <div className="contact__item">
            <img src={contactAddress} alt="Location icon" className="contact__icon" />
            <span>Maryland, US</span>
          </div>

          <div className="contact__item">
            <img src={contactPhone} alt="Phone icon" className="contact__icon" />
            <span>(301)393-7658</span>
          </div>

          <div className="contact__item">
            <img src={contactEmail} alt="Email icon" className="contact__icon" />
            <span>michaelzhuang16@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;