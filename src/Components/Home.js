import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/tecnicas-de-estudio-1024x494.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¿Qué es Asiste?
          </h1>
          <h2 className="subtitulo">
            Modernizacion del llamado a lista
            </h2>
          <p className="primary-text">
            Asiste nace con la idea de mejorar la metodologia y el sistema actual del cual
            que se prescinde a la hora de gestionar el llamado a lista de los aprendices ,con 
            el fin de saber con que frecuencia asiten al centro de formacion y que tipo de noveda
            presentan.Unificando procesos a raiz de esa actividad
          </p>
          <button className="secondary-button">
            Funcionamiento <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" width="800" />
        </div>
      </div>
    </div>
  );
};

export default Home;
