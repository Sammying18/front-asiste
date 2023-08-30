import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tienes Dudas</h1>
      <p className="primary-heading">Ingresa tu pregunta</p>
      <div className="contact-form-container">
        <input type="text" placeholder="Asiste@sena.edu.co" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
