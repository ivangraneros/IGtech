import React from 'react'

function Metodologia({ language }) {

  const content = {
    es: {
      badge: "// PROCESO DE TRABAJO",
      title: "Paso a paso de",
      titleHighlight: "Cómo Trabajamos",
      subtitle: "Un proceso simple, transparente y colaborativo para transformar tu idea en una plataforma web real.",
      steps: [
        {
          step: "01",
          title: "Charlamos sobre tus necesidades",
          desc: "Nos reunimos (o conversamos por chat) para entender a fondo tu negocio, tus objetivos y qué es lo que necesita tu proyecto para destacar.",
          duration: "Paso 1",
          badge: "Discovery"
        },
        {
          step: "02",
          title: "Te mostramos el diseño",
          desc: "Armamos una primera vista previa y la estructura visual de la página para que veas cómo va tomando forma antes de avanzar con el código.",
          duration: "Paso 2",
          badge: "Diseño"
        },
        {
          step: "03",
          title: "Revisamos el resultado y ajustamos",
          desc: "Te presentamos el avance funcional, probamos que todo funcione perfecto y pulimos cualquier detalle que quieras modificar.",
          duration: "Paso 3",
          badge: "Feedback"
        },
        {
          step: "04",
          title: "Hacemos el despliegue final",
          desc: "Subimos el proyecto a producción, lo dejamos online y listo para que tus usuarios o clientes puedan empezar a usarlo.",
          duration: "Paso 4",
          badge: "Lanzamiento"
        }
      ],
      ctaTitle: "¿Arrancamos con tu proyecto?",
      ctaDesc: "Hablemos sobre tu idea y empecemos a recorrer este camino juntos.",
      ctaButton: "Iniciar Proyecto"
    },
    en: {
      badge: "// WORKFLOW",
      title: "Step-by-Step",
      titleHighlight: "How We Work",
      subtitle: "A simple, transparent, and collaborative process to turn your idea into a real web platform.",
      steps: [
        {
          step: "01",
          title: "We discuss your needs",
          desc: "We meet (or chat) to deeply understand your business, your goals, and what your project needs to stand out.",
          duration: "Step 1",
          badge: "Discovery"
        },
        {
          step: "02",
          title: "We show you the design",
          desc: "We build an initial preview and visual structure so you can see how it's taking shape before diving deep into code.",
          duration: "Step 2",
          badge: "Design"
        },
        {
          step: "03",
          title: "We review the result & tweak details",
          desc: "We present the functional progress, test that everything works seamlessly, and polish any detail you'd like to adjust.",
          duration: "Step 3",
          badge: "Feedback"
        },
        {
          step: "04",
          title: "We handle the final deployment",
          desc: "We push the project to production, get it online, and ready for your users or clients to start using it.",
          duration: "Step 4",
          badge: "Launch"
        }
      ],
      ctaTitle: "Ready to start your project?",
      ctaDesc: "Let's talk about your idea and start walking this path together.",
      ctaButton: "Start Project"
    }
  };

  const t = content[language] || content.es;



  return (
    
    <div className="methodology-page-container">
      {/* Cabecera */}
      <div className="services-page-header">
        <span className="hero-badge">{t.badge}</span>
        <h1 className="services-title">
          {t.title} <span className="hero-glow">{t.titleHighlight}</span>
        </h1>
        <p className="services-subtitle">{t.subtitle}</p>
      </div>

      {/* Roadmap Simplificado de 4 Pasos */}
      <div className="roadmap-container">
        {t.steps.map((item, index) => (
          <div key={index} className="roadmap-item">
            {/* Nodo Central */}
            <div className="roadmap-node">
              <span className="roadmap-step-num">{item.step}</span>
            </div>

            {/* Tarjeta de Contenido */}
            <div className="cyber-form roadmap-card">
              <div className="roadmap-card-header">
                <span className="tech-tag">{item.badge}</span>
                <span className="roadmap-duration">{item.duration}</span>
              </div>
              <h3 className="roadmap-title">{item.title}</h3>
              <p className="roadmap-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Inferior */}
      <div className="cyber-form services-cta-box" style={{ marginTop: '4rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{t.ctaTitle}</h3>
        <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
          {t.ctaDesc}
        </p>
        <a href="/contacto" className="btn-primary-cyber" style={{ textDecoration: 'none', display: 'inline-block' }}>
          {t.ctaButton}
        </a>
      </div>
    </div>
  )
}

export default Metodologia