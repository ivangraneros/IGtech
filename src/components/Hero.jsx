import React from 'react'
import { Link } from 'react-router-dom';

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
      <div className="hero-pattern-container">
        <div className="pattern-bg">
          <svg
            preserveAspectRatio="xMidYMid slice"
            height="100%"
            width="100%"
            className="cube-svg"
            viewBox="0 0 120 104"
          >
            <defs>
              <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="cube-dark">
                <stop stopColor="#232526" offset="0%"></stop>
                <stop stopColor="#414345" offset="100%"></stop>
              </linearGradient>
              <linearGradient y2="0%" x2="100%" y1="100%" x1="0%" id="cube-mid">
                <stop stopColor="#4b6cb7" offset="0%"></stop>
                <stop stopColor="#182848" offset="100%"></stop>
              </linearGradient>
              <linearGradient y2="100%" x2="0%" y1="0%" x1="100%" id="cube-light">
                <stop stopColor="#a8edea" offset="0%"></stop>
                <stop stopColor="#fed6e3" offset="100%"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

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