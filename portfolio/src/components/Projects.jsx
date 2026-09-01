import safemindImage from "../assets/safemind.png";

function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects-header">
        <p className="section-label">PROJETOS</p>

        <h2>
          Projetos que unem
          <span> tecnologia e propósito.</span>
        </h2>

        <p>
          Alguns dos projetos que desenvolvi, combinando design,
          tecnologia e experiência do usuário.
        </p>
      </div>

      <article className="project-card">
        <div className="project-image">
          <img
            src={safemindImage}
            alt="Página inicial do SafeMind 360"
          />
        </div>

        <div className="project-info">
          <div className="project-number">01</div>

          <h3>SafeMind 360</h3>

          <p>
            Plataforma digital para bem-estar e prevenção no ambiente
            corporativo, com check-ins, treinamentos, gamificação e
            indicadores em uma única experiência.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Firebase</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="https://safemind360.web.app/"
              target="_blank"
              rel="noreferrer"
              className="project-primary"
            >
              Ver projeto ↗
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;