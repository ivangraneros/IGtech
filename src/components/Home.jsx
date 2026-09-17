import '../App.css'
import Hero from './Hero'
import Target from './Target'
import { Link } from 'react-router-dom'



function Home({ language }) {

  
   
    const content = {
    es: {
      servicesTitle: "Arquitectura & Backend a Medida",
      servicesDesc: "Desarrollo sistemas robustos, bases de datos optimizadas y APIs escalables diseñadas para alto rendimiento.",
      btnServices: "Ver Servicios →",
      methodTitle: "Metodología de Trabajo Ágil",
      methodDesc: "Un proceso estructurado desde el análisis de requerimientos hasta el despliegue en producción.",
      btnMethod: "Conocer el Proceso →"
    },
    en: {
      servicesTitle: "Custom Architecture & Backend",
      servicesDesc: "I build robust systems, optimized databases, and scalable APIs engineered for high performance.",
      btnServices: "View Services →",
      methodTitle: "Agile Working Methodology",
      methodDesc: "A structured process from requirements analysis to production deployment.",
      btnMethod: "Learn the Process →"
    }
  };

  const t = content[language] || content.es;

  const phoneNumber = "5492257508831"; 
  const message = language === 'es' 
    ? "Hola, vi tu web IG Tech y quiero consultar por un proyecto." 
    : "Hi, I saw your IG Tech website and I'd like to inquire about a project.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <>
      <Hero lang={language} />
      
      <section style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Tarjeta Resumen Servicios */}
          <div className="cyber-form" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="hero-badge">// 01. CAPACIDADES</span>
              <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{t.servicesTitle}</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '2rem' }}>{t.servicesDesc}</p>
            </div>
            <Link to="/servicios" className="btn-secondary-cyber" style={{ textAlign: 'center', textDecoration: 'none' }}>
              {t.btnServices}
            </Link>
          </div>

          {/* Tarjeta Resumen Metodología */}
          <div className="cyber-form" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="hero-badge">// 02. PROCESO</span>
              <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{t.methodTitle}</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '2rem' }}>{t.methodDesc}</p>
            </div>
            <Link to="/metodologia" className="btn-secondary-cyber" style={{ textAlign: 'center', textDecoration: 'none' }}>
              {t.btnMethod}
            </Link>
          </div>
        </div>
      </section>

      <Target language={language} />

      <div className="cyber-form home-contact-box" style={{ textAlign: 'center', padding: '2rem' }}>
      <div className="home-contact-header" style={{ marginBottom: '1.5rem' }}>
        <span className="hero-badge">{language === 'es' ? "// ACCESO RÁPIDO" : "// FAST TRACK"}</span>
        <h3 className="home-contact-title" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
          {language === 'es' ? "¿Tenés un proyecto en mente?" : "Have a project in mind?"}
        </h3>
        <p className="home-contact-sub" style={{ maxWidth: '500px', margin: '0 auto' }}>
          {language === 'es' 
            ? "Hablemos sobre cómo llevar tus ideas al siguiente nivel. Escribime directo o completá el formulario completo." 
            : "Let's talk about taking your ideas to the next level. Drop me a line or fill out the full form."}
        </p>
      </div>

      <div className="home-contact-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        <a href="/contacto" className="btn-primary-cyber" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          {language === 'es' ? "Ir al Formulario" : "Go to Form"}
        </a>

        {/* Botón directo a WhatsApp  */}
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary-cyber" 
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {language === 'es' ? "Abrir WhatsApp" : "Open WhatsApp"}
        </a>
      </div>
    </div>
    </> 
  )
}

export default Home
