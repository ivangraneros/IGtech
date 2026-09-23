import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ lang }) {
    
    const content = {
    es: {
      tagline: "Desarrollo web y arquitecturas backend de alto rendimiento.",
      services: "Servicios",
      methodology: "Metodología",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    },
    en: {
      tagline: "High-performance web development and backend architectures.",
      services: "Services",
      methodology: "Methodology",
      contact: "Contact",
      rights: "All rights reserved."
    }
  };

  const t = content[lang] || content.es;
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Izquierda: Nombre y frase corta */}
        <div className="footer-brand">
          <div className="navbar-logo">
            <Link to="/">
            IG<span className="logo-accent">.TECH</span>
            </Link>
          </div>
          <p className="footer-tagline">{t.tagline}</p>
        </div>

        {/* Centro: Menú de navegación */}
        <div className="footer-nav">
          <Link to="/servicios" className="footer-link">{t.services}</Link>
          <Link to="/metodologia" className="footer-link">{t.methodology}</Link>
          <Link to="/contacto" className="footer-link">{t.contact}</Link>
        </div>

        {/* Derecha: Redes Sociales */}
    <div className="footer-socials">
          <a href="https://github.com/ivangraneros" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ivan-graneros/" 
          target="_blank" 
          rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:ivangranerosdev@gmail.com" 
          className="social-link" aria-label="Email">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ivan Felix Graneros. {t.rights}</p>
      </div>
    </footer>
  )
}

export default Footer