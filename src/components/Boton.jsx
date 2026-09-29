import React from 'react';

function Boton({ 
  children, 
  onClick, 
  as = 'button', 
  className = '', 
  ...props 
}) {

    const Component = as;

  return (
    <Component 
      onClick={onClick} 
      className={`moving-border-btn ${className}`} 
      {...props}
    >
      {/* Contenedor del borde animado */}
      <div className="moving-border-container">
        <span className="moving-border-glow" />
      </div>
      
      {/* Contenido interior del botón */}
      <span className="moving-border-content">
        {children}
      </span>
    </Component>
  );
}

export default Boton