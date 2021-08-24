import React from "react";
import "./../scss/Parteners.scss";
import img_nova from "./../img/parteners/logo_ndtech.jpg";

import img_corea from "./../img/parteners/logo_corea.jpg";

const Parteners = () => {
  return (
    <>
      <div className="container container_parteners" data-aos="fade-up">
        <div className="partener_card">
          <img src={img_nova} className="img-fluid" alt="projet" />
        </div>

        <div className="partener_card">
          <img src={img_corea} alt="projet" />
        </div>
        <div className="partener_card">
          <img src={img_nova} alt="projet" />
        </div>
        <div className="partener_card">
          <img src={img_corea} alt="projet" />
        </div>
      </div>
    </>
  );
};
export default Parteners;
