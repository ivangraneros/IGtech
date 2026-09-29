import React from 'react'
import { Link } from 'react-router-dom';
import FondoHero from './FondoHero';

function Hero({ language }) {

  const content = {
    es: {
      badge: "DESARROLLO WEB & BACKEND",
      title: "Soluciones Digitales de",
      titleHighlight: "Alto Rendimiento",
      description: "Diseño y desarrollo arquitecturas backend sólidas, bases de datos optimizadas y aplicaciones web a medida para escalar tu negocio al siguiente nivel.",
      btnPrimary: "Cotizar Proyecto",
      btnSecondary: "Ver Servicios"
    },
    en: {
      badge: "WEB & BACKEND DEVELOPMENT",
      title: "Digital Solutions for",
      titleHighlight: "High Performance",
      description: "I design and build robust backend architectures, optimized databases, and custom web applications to scale your business to the next level.",
      btnPrimary: "Get a Quote",
      btnSecondary: "View Services"
    }
  };

  const t = content[language] || content['es'];

    
  return (
    <section className="hero-section">

      <FondoHero />

      <div className="hero-content">
        <span className="hero-badge">{t.badge}</span>
        
        <h1 className="hero-title">
          {t.title} <span className="hero-glow">{t.titleHighlight}</span>
        </h1>
        
        <p className="hero-description">
          {t.description}
        </p>

        <div className="hero-buttons">
          <Link to="/contacto" className="btn-primary-cyber">{t.btnPrimary}</Link>
          <Link to="/servicios" className="btn-secondary-cyber">{t.btnSecondary}</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero