
import React from "react";
import '../hojas-de-estilo/Testimonio.css';



function Testimonio(props){
  return(
    <div className="contendedor-testimonio">
      <img 
        className="img-testimonio"
        src= {require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt = "Imagen de Emma "/>
      
      <div className="contenedor-texto-testimonio">
        <p className="nombre-textimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className="texto-testionio">"{props.testimonio}"</p>
      </div>

    </div>

  );
}
export default Testimonio