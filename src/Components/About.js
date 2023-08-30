import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/segunda-convocatoria-sena-2018-modified.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Para quien esta pensado ASISTE
        </h1>
        <p className="primary-text">
          Para <strong>Aprendices</strong> que esten incritos
          en la institucion,en los programas de formación ofertados
          por el SENA.Que se encuentren en cualquier momento de su formación.
        
        </p>
        <p className="primary-text">
          Para <strong>Instructores</strong> que esten registrados en la institucion
          que esten a cargo de los programas de formación ofertados por el SENA
        </p>
        <p className="primary-text">
          Para <strong>Cordinador</strong> a cargo de la institución ,en los programas de
          formación ofertados.Dirigido inicialmente para su coordición de Teleinformatica
        </p>
        <p className="primary-text">
          Para <strong>Bienestar al aprendiz</strong> que esta acargo de la institución y de la 
          jornada de la nocturna 
        </p>
        
      </div>
    </div>
  );
};

export default About;
