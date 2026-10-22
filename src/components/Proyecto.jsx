import React from 'react';
import Boton from './Boton';

function Proyecto({ language, projectImg }) {
  const content = {
    es: {
      badge: "Lanzamiento Reciente",
      title: "Sistema de Cafetería",
      description: "Un sistema diseñado especialmente para cafeterias que le permite llevar en tiempo real el control total de las mesas y tambien permite el control de la caja.",
      button: "Explorar Demo"
    },
    en: {
      badge: "Latest Release",
      title: "Coffe shop system",
      description: "A specially designed system for coffe shops that allows you to have full control over the tables and also the coffee box.",
      button: "Explore Demo"
    }
  };

  const t = content[language] || content.es;

  return (
    <section className="project-showcase-container">
      <div className="project-window">
        
        {/* Barra superior estilo ventana/consola */}
        <div className="project-window-bar">
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="window-title">ig-tech://latest-deployment</span>
          <span className="status-indicator">ONLINE</span>
        </div>

        {/* Preview de la captura con efecto monitor */}
        <div className="project-preview-frame">
          <img 
            src={projectImg || "/placeholder-system.png"} 
            alt={t.title} 
            className="project-screenshot"
          />
          <div className="scanline-overlay"></div>
        </div>

        {/* Panel inferior de detalles */}
        <div className="project-details-panel">
          <div className="project-header-info">
            <span className="project-tag-pulse">{t.badge}</span>
            <h3 className="project-main-title">{t.title}</h3>
            <p className="project-summary">{t.description}</p>
          </div>

          <div className="project-footer-row">
            <div className="tech-stack-pills">
              <span>React</span>
              <span>Node.js</span>
              <span>Firebase</span>
            </div>

            <div className="project-action-btn">
              <Boton as="a" href="https://sistema-cafeteria-rust.vercel.app/" target="_blank">
                {t.button}
              </Boton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Proyecto;