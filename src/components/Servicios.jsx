import React from 'react';

function Servicios({ language }) {
  const content = {
    es: {
      badge: "// CAPACIDADES TÉCNICAS & SERVICIOS",
      title: "Soluciones de",
      titleHighlight: "Ingeniería de Software",
      subtitle: "Arquitecturas escalables, código limpio y rendimiento optimizado para llevar tus proyectos al siguiente nivel.",
      servicesList: [
        {
          id: "01",
          title: "Desarrollo Backend & APIs",
          desc: "Construcción de servidores robustos y seguros utilizando Node.js (Express) y Python (Django). Diseño de endpoints RESTful limpios, documentación con Swagger/OpenAPI y sistemas de autenticación avanzados (JWT, sesiones, cookies).",
          tech: ["Node.js", "Express", "Python", "Django", "REST APIs", "JWT"]
        },
        {
          id: "02",
          title: "Bases de Datos & Cloud",
          desc: "Modelado, optimización y gestión de datos relacionales y no relacionales. Configuración de esquemas seguros, consultas eficientes y despliegue de servicios en la nube.",
          tech: ["MongoDB", "Firebase Firestore", "Supabase", "SQL", "Row-Level Security"]
        },
        {
          id: "03",
          title: "Aplicaciones Full Stack & Web",
          desc: "Desarrollo de interfaces de usuario modernas y veloces con React y Vite, conectadas de punta a punta con arquitecturas backend sólidas. Aplicaciones web responsivas y adaptadas a cada necesidad.",
          tech: ["React", "Vite", "JavaScript", "HTML5/CSS3", "Tailwind / CSS Modules"]
        },
        {
          id: "04",
          title: "Contenedores & DevOps",
          desc: "Containerización de aplicaciones para garantizar entornos de desarrollo y producción estables, reproducibles y listos para escalar sin fricciones.",
          tech: ["Docker", "Git", "GitHub", "Vercel", "CI/CD Basics"]
        }
      ],
      ctaTitle: "¿Tenés un proyecto en mente?",
      ctaDesc: "Analizamos los requerimientos técnicos de tu idea y armamos una propuesta a medida.",
      ctaButton: "Solicitar Cotización"
    },
    en: {
      badge: "// TECHNICAL CAPABILITIES & SERVICES",
      title: "Software Engineering",
      titleHighlight: "Solutions",
      subtitle: "Scalable architectures, clean code, and optimized performance to take your projects to the next level.",
      servicesList: [
        {
          id: "01",
          title: "Backend & API Development",
          desc: "Building robust and secure servers using Node.js (Express) and Python (Django). Designing clean RESTful endpoints, Swagger/OpenAPI documentation, and advanced authentication systems (JWT, sessions, cookies).",
          tech: ["Node.js", "Express", "Python", "Django", "REST APIs", "JWT"]
        },
        {
          id: "02",
          title: "Databases & Cloud",
          desc: "Modeling, optimization, and management of relational and non-relational data. Setting up secure schemas, efficient queries, and cloud database deployments.",
          tech: ["MongoDB", "Firebase Firestore", "Supabase", "SQL", "Row-Level Security"]
        },
        {
          id: "03",
          title: "Full Stack & Web Applications",
          desc: "Development of modern, lightning-fast user interfaces with React and Vite, connected end-to-end with solid backend architectures. Responsive web apps tailored to every need.",
          tech: ["React", "Vite", "JavaScript", "HTML5/CSS3", "Tailwind / CSS Modules"]
        },
        {
          id: "04",
          title: "Containers & DevOps",
          desc: "Containerizing applications to ensure stable, reproducible development and production environments ready to scale friction-free.",
          tech: ["Docker", "Git", "GitHub", "Vercel", "CI/CD Basics"]
        }
      ],
      ctaTitle: "Have a project in mind?",
      ctaDesc: "Let's analyze the technical requirements of your idea and build a custom proposal.",
      ctaButton: "Request a Quote"
    }
  };

  const t = content[language] || content.es;

  return (
    <div className="services-page-container">  
      <div className="services-page-header">
        <span className="hero-badge">{t.badge}</span>
        <h1 className="services-title">
          {t.title} <span className="hero-glow">{t.titleHighlight}</span>
        </h1>
        <p className="services-subtitle">{t.subtitle}</p>
      </div>

      
      <div className="services-bento-grid">
        
        {/* Div 1 */}
        <div className="cyber-form service-card-detailed div1">
          <div className="service-card-number">01</div>
          <h3 className="service-card-title">{t.servicesList[0].title}</h3>
          <p className="service-card-desc">{t.servicesList[0].desc}</p>
          <div className="service-tech-tags">
            {t.servicesList[0].tech.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
          </div>
        </div>

        {/* Div 2 */}
        <div className="cyber-form service-card-detailed div2">
          <div className="service-card-number">02</div>
          <h3 className="service-card-title">{t.servicesList[1].title}</h3>
          <p className="service-card-desc">{t.servicesList[1].desc}</p>
          <div className="service-tech-tags">
            {t.servicesList[1].tech.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
          </div>
        </div>

        {/* Div 3 */}
        <div className="cyber-form service-card-detailed div3">
          <div className="service-card-number">03</div>
          <h3 className="service-card-title">{t.servicesList[2].title}</h3>
          <p className="service-card-desc">{t.servicesList[2].desc}</p>
          <div className="service-tech-tags">
            {t.servicesList[2].tech.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
          </div>
        </div>

        {/* Div 4 */}
        <div className="cyber-form service-card-detailed div4">
          <div className="service-card-number">04</div>
          <h3 className="service-card-title">{t.servicesList[3].title}</h3>
          <p className="service-card-desc">{t.servicesList[3].desc}</p>
          <div className="service-tech-tags">
            {t.servicesList[3].tech.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
          </div>
        </div>
    </div>
      
      <div className="cyber-form services-cta-box">
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{t.ctaTitle}</h3>
        <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
          {t.ctaDesc}
        </p>
        <a href="/contacto" className="btn-primary-cyber" style={{ textDecoration: 'none', display: 'inline-block' }}>
          {t.ctaButton}
        </a>
      </div>
    </div>
  );
}

export default Servicios