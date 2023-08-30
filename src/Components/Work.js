import React from "react";
import PickMeals from "../Assets/icons8-bookmark-144.png";
import ChooseMeals from "../Assets/icons8-desbloquear-128.png";
import DeliveryMeals from "../Assets/icons8-me-gusta-96.png";
import Moderno from "../Assets/icons8-einstein-80.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Unificado",
      text: "",
    },
    {
      image: ChooseMeals,
      title: "Confiable",
      text: "",
    },
    {
      image: DeliveryMeals,
      title: "Simple y Facil",
      text: "",
    },
    {
      image: Moderno,
      title: "Moderno",
      text: "",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Ventajas de usar Asiste</h1>
        <p className="primary-text">
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
