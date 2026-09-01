import "./App.css";

import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#" aria-label="Filipe Felix">
  <img src="/favicon.png" alt="Logo Filipe Felix" />
</a>

        <nav>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="contact-button" href="#contato">
          Fale comigo
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">
              DESENVOLVIMENTO WEB • SITES PARA NEGÓCIOS
            </p>

            <h1>
              Sites que apresentam seu negócio
              <span> do jeito certo.</span>
            </h1>

            <p className="hero-description">
              Projeto e desenvolvo sites rápidos, responsivos e pensados para
              transformar visitas em oportunidades para empresas.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Conhecer meu trabalho
              </a>

              <a href="#contato" className="secondary-button">
                Tenho um projeto →
              </a>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="availability">
              <span></span>
              Disponível para novos projetos
            </div>

            <div className="showcase-card">
              <div className="showcase-top">
                <span>PROJETO RECENTE</span>
                <span>2026</span>
              </div>

              <div className="showcase-main">
                <p>SafeMind 360</p>

                <h3>
                  Produto web voltado a bem-estar, prevenção e gestão
                  corporativa.
                </h3>
              </div>

              <div className="showcase-bottom">
                <span>React</span>
                <span>Firebase</span>

                <a
                  href="https://safemind360.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir projeto ↗
                </a>
              </div>
            </div>

            <p className="showcase-caption">
              Design, desenvolvimento e publicação.
            </p>
          </div>
        </section>

        <Projects />

        <Services />

        <About />

        <Contact />
      </main>
    </div>
  );
}

export default App;