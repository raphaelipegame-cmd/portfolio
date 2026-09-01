function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Firebase",
    "Git",
    "GitHub",
  ];

  return (
    <section className="about" id="sobre">
      <div className="about-grid">
        <div className="about-content">
          <p className="section-label">SOBRE MIM</p>

          <h2>
            Código é a ferramenta.
            <span> O objetivo é resolver o problema.</span>
          </h2>

          <div className="about-text">
            <p>
              Sou Filipe Felix, desenvolvedor web focado na criação de sites e
              aplicações para negócios e projetos digitais.
            </p>

            <p>
              Procuro unir interface, desempenho e simplicidade para entregar
              produtos que sejam agradáveis de usar e fáceis de entender.
            </p>
          </div>

          <a href="#contato" className="about-link">
            Falar sobre um projeto <span>→</span>
          </a>
        </div>

        <div className="technologies">
          <div className="technologies-top">
            <p>FERRAMENTAS</p>
            <span>STACK</span>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <div className="technology-item" key={technology}>
                <span className="technology-name">{technology}</span>
                <span className="technology-dot"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;