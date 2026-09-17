import React from 'react'
import { useState } from 'react'

function Contacto({ language }) {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    const dataForm = new FormData(event.target);
    dataForm.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataForm
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Error al enviar');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error de red.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    es: {
      badge: "// CANALES DE COMUNICACIÓN",
      title: "Hablemos de tu",
      titleHighlight: "Próximo Proyecto",
      subtitle: "¿Tenés una idea, un sistema que desarrollar o necesitás escalar tu plataforma? Escribime y lo armamos.",
      nameLabel: "Tu Nombre / Empresa",
      emailLabel: "Correo Electrónico",
      msgLabel: "Mensaje o Requerimiento",
      placeholderName: "Ej: Juan Pérez",
      placeholderEmail: "juan@correo.com",
      placeholderMsg: "Contame brevemente sobre tu proyecto...",
      submitBtn: "Enviar Mensaje",
      successMsg: "¡Mensaje enviado con éxito! Me pondré en contacto a la brevedad.",
      directTitle: "Otras vías de contacto",
      linkedinText: "Perfil profesional en LinkedIn",
      githubText: "Repositorios en GitHub"
    },
    en: {
      badge: "// COMMUNICATION CHANNELS",
      title: "Let's Talk About Your",
      titleHighlight: "Next Project",
      subtitle: "Have an idea, a system to build, or need to scale your platform? Send me a message and let's make it happen.",
      nameLabel: "Your Name / Company",
      emailLabel: "Email Address",
      msgLabel: "Message or Requirements",
      placeholderName: "E.g. John Doe",
      placeholderEmail: "john@email.com",
      placeholderMsg: "Tell me briefly about your project...",
      submitBtn: "Send Message",
      successMsg: "Message sent successfully! I will get back to you shortly.",
      directTitle: "Other ways to reach out",
      linkedinText: "Professional profile on LinkedIn",
      githubText: "Repositories on GitHub"
    }
  };

  const t = content[language] || content.es;


  return (

    <div className="contact-page-container">
      {/* Cabecera */}
      <div className="services-page-header">
        <span className="hero-badge">{t.badge}</span>
        <h1 className="services-title">
          {t.title} <span className="hero-glow">{t.titleHighlight}</span>
        </h1>
        <p className="services-subtitle">{t.subtitle}</p>
      </div>
         
      <div className="contact-grid">
        
        <div className="cyber-form contact-form-box">
          {isSubmitted ? (
            <div className="contact-success-state">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#06b6d4' }}>✓</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t.successMsg}</h3>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">{t.nameLabel}</label>
                <input 
                  type="text" 
                  name='name'
                  required
                  placeholder={t.placeholderName}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="cyber-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.emailLabel}</label>
                <input 
                  type="email" 
                  name='email'
                  required
                  placeholder={t.placeholderEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="cyber-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.msgLabel}</label>
                <textarea 
                  name='message'
                  rows="5"
                  required
                  placeholder={t.placeholderMsg}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="cyber-input"
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              {errorMessage && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errorMessage}</p>}

              <button type="submit" disabled={isSubmitting} className="btn-primary-cyber" style={{ width: '100%', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? (language === 'es' ? 'Enviando...' : 'Sending...') : t.submitBtn}
              </button>
            </form>
          )}
        </div>
      
        
        <div className="contact-info-box">
          <div className="cyber-form contact-info-card">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: '#06b6d4' }}>{t.directTitle}</h3>
            
            <div className="contact-links-list">
              <a href="https://www.linkedin.com/in/ivan-graneros/" target="_blank" rel="noopener noreferrer" className="contact-direct-link">
                <span className="tech-tag">LinkedIn</span>
                <span>{t.linkedinText} ↗</span>
              </a>

              <a href="https://github.com/ivangraneros" target="_blank" rel="noopener noreferrer" className="contact-direct-link">
                <span className="tech-tag">GitHub</span>
                <span>{t.githubText} ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto