function Contact() {
  const whatsappMessage =
    "Olá, Filipe! Encontrei seu portfólio e gostaria de conversar sobre um projeto.";

  const whatsappUrl = `https://wa.me/5524999189942?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <section className="contact" id="contato">
        <div
          className="contact-content reveal-left"
          data-reveal
        >
          <p className="section-label">CONTATO</p>

          <h2>
            Tem uma ideia?
            <span> Vamos construir juntos.</span>
          </h2>

          <p className="contact-description">
            Se você precisa de uma landing page, site ou solução web para seu
            negócio, entre em contato e vamos conversar sobre o projeto.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-main-button"
          >
            Falar pelo WhatsApp
            <span>↗</span>
          </a>
        </div>

        <div
          className="contact-links reveal-right"
          data-reveal
          style={{
            "--reveal-delay": "100ms",
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div>
              <span className="contact-label">
                WHATSAPP
              </span>

              <p>+55 24 99918-9942</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="mailto:fflimadev@gmail.com"
            className="contact-item"
          >
            <div>
              <span className="contact-label">
                E-MAIL
              </span>

              <p>fflimadev@gmail.com</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://github.com/raphaelipegame-cmd"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div>
              <span className="contact-label">
                GITHUB
              </span>

              <p>raphaelipegame-cmd</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <a
            href="#"
            className="footer-logo"
            aria-label="Voltar ao início"
          >
            <img
              src="/favicon.png"
              alt="Logo Filipe Felix"
            />
          </a>

          <p>
            © {new Date().getFullYear()} Filipe Felix
          </p>

          <a href="#" className="back-to-top">
            Voltar ao topo <span>↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;