import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="contact__content">
        <h3 className="contact__title">Contact</h3>
        <p className="contact__text">
          DM me on{" "}
          <a
            href="https://www.linkedin.com/in/daria-astafeva/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            LinkedIn
          </a>{" "}
          or send an email: astafyeva.daria1@google.com
        </p>
      </div>
    </section>
  );
}
