function Services() {
  const services = [
    {
      title: "Landing Pages",
      description:
        "Páginas objetivas para apresentar uma oferta, captar contatos e levar o visitante até a ação principal.",
    },
    {
      title: "Sites para empresas",
      description:
        "Presença digital profissional para negócios que precisam apresentar serviços, diferenciais e formas de contato.",
    },
    {
      title: "Aplicações Web",
      description:
        "Dashboards, plataformas e ferramentas desenvolvidas para necessidades que vão além de um site convencional.",
    },
  ];

  return (
    <section className="services" id="servicos">
      <div
        className="services-header reveal-up"
        data-reveal
      >
        <p className="section-label">O QUE EU FAÇO</p>

        <h2>
          Da primeira página
          <span> até soluções mais completas.</span>
        </h2>

        <p>
          Cada projeto parte do mesmo princípio: entender o que o negócio
          precisa e construir somente o que faz sentido.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            className="service-card reveal-up"
            data-reveal
            style={{
              "--reveal-delay": `${index * 90}ms`,
            }}
            key={service.title}
          >
            <div className="service-line"></div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div
        className="services-cta reveal-up"
        data-reveal
        style={{
          "--reveal-delay": "150ms",
        }}
      >
        <div>
          <p>PRECISA DE UM SITE?</p>

          <h3>Me conte sobre o seu negócio.</h3>
        </div>

        <a href="#contato">
          Iniciar conversa
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default Services;