function Target({ language }) {
  const content = {
    es: {
      badge: "// CASOS DE USO Y CLIENTES",
      title: "¿Para quién es este",
      highlight: "servicio?",
      subtitle: "Desarrollo soluciones digitales a medida adaptadas a las necesidades reales de cada sector:",
      audiences: [
        {
          title: "Pequeños Comercios y Tiendas",
          desc: "Catálogos digitales, sistemas de stock sencillos y landing pages para potenciar ventas locales o por WhatsApp."
        },
        {
          title: "Profesionales Independientes",
          desc: "Abogados, contadores, médicos, diseñadores o consultores que necesitan una web seria para posicionar su marca personal y captar clientes."
        },
        {
          title: "Emprendimientos",
          desc: "Paneles de control a medida, autenticación y arquitecturas backend robustas para lanzar tu idea rápido."
        },
        {
          title: "Negocios con Procesos Manuales",
          desc: "Automatizaciones y herramientas internas (como calculadoras de presupuestos o sistemas de turnos) para ahorrar horas de trabajo."
        }
      ]
    },
    en: {
      badge: "// USE CASES & CLIENTS",
      title: "Who can I",
      highlight: "help?",
      subtitle: "I develop custom digital solutions tailored to the real needs of each sector:",
      audiences: [
        {
          title: "Small Businesses & Shops",
          desc: "Digital catalogs, simple inventory systems, and landing pages to boost local sales or WhatsApp orders."
        },
        {
          title: "Freelancers & Professionals",
          desc: "Lawyers, accountants, doctors, designers, or consultants who need a professional website to position their personal brand and attract clients."
        },
        {
          title: "Ventures",
          desc: "Custom dashboards, authentication, and robust backend architectures to launch your idea quickly."
        },
        {
          title: "Businesses with Manual Processes",
          desc: "Automations and internal tools (such as quote calculators or booking systems) to save working hours."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="target-section">
      <div className="target-header">
        <span className="hero-badge">{t.badge}</span>
        <h2 className="target-title">
          {t.title} <span className="hero-glow">{t.highlight}</span>
        </h2>
        <p className="target-subtitle">
          {t.subtitle}
        </p>
      </div>

      <div className="target-grid">
        {t.audiences.map((item, index) => (
          <div key={index} className="target-card">
            <div className="target-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Target;