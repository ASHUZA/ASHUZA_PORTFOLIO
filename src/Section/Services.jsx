import React from "react";
import { Link } from "react-router-dom";
import Plusservices from "../pages/Plusservices";
import "./../scss/Services.scss";
import img_service1 from "./../img/citation compresser/L'ENFANCE carre 3.png";
import img_service2 from "./../img/citation compresser/sdsdsd.png";
import img_service3 from "./../img/citation compresser/L'ENFANCE carre2.png";
import img_service4 from "./../img/citation compresser/L'ENFANCE carre 3.png";
import img_service5 from "./../img/citation compresser/teee.png";
import img_service6 from "./../img/citation compresser/fffdfd.png";
import img_service7 from "./../img/citation compresser/L'ENFANCE carre.png";
import img_service8 from "./../img/citation compresser/technologie magie.png";
import img_service9 from "./../img/citation compresser/teee.png";

const Services = () => {
  return (
    <>
      <div className="container-fluid section_service_bg">
        <div className="container">
          <div className="section-title mt-5" data-aos="fade-up">
            <h2> SERVICES</h2>
            <p> MY SERVICES </p>

            <sliderbtn></sliderbtn>
          </div>
          <div className="row card_service_box">
            <div className="services_card">
              <img src={img_service1} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service1} alt="projet" />
            </div>

            <div className="services_card">
              <img src={img_service2} alt="projet" />
            </div>
          </div>
        </div>
      
        <Link className="btn-get-seemore" to="/Plusservices">See more</Link>
  
      </div>
    </>
  );
};
export default Services;
