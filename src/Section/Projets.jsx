import React from "react";
import "./../scss/Projets.scss";
import { Link } from "react-router-dom";
import Plusprojets from "../pages/Plusprojets";
import img_projet1 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH KD.png";
import img_projet2 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH ALL MOVIES.png";
import img_projet3 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH COREA MOBILE.png";
import img_projet4 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH EBERHEE BIBLE.png";
import img_projet5 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH NDT.png";
import img_projet6 from "./../img/card compresser/CARD PROJET PORTFOLIO ASH ALL MOVIES.png";

const Projets = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-title_projet">
            <h2>PROJECTS</h2>
            <p>MY PROJECTS</p>
          </div>

          <div
            className="row d-flex flex-wrap justify-content-center align-items-center"
            id="projects_elements"
          >
            <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <a href="https://kinshasadigital.com/">
                  <img src={img_projet1} className="img-fluid" alt="projet" />
                </a>

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Kinshasa Digital main's page
                  </h3>

                  <p className="projet_detail mt-3">
                    Desktop reproduction of the Kinshasa digital agency home
                    page
                  </p>
                </div>
              </div>
            </div>

           
            <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <img src={img_projet4} className="img-fluid" alt="projet" />

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    E-Berhée Bible mobile application{" "}
                  </h3>

                  <p className="projet_detail mt-3">
                    A modern website, suitable for any type of screen (mobile,
                    tablet and desktop)
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="projet-thumb">
                <img src={img_projet5} className="img-fluid" alt="projet" />

                <div className="projet-info">
                  <h3 className="projet_title mb-1">
                    Nova Digita Technology in progress
                  </h3>

                  <p className="projet_detail mt-3">
                    A modern website, suitable for any type of screen (mobile,
                    tablet and desktop)
                  </p>
                </div>
              </div>
            </div>

          
            </div>
            </div>
            <Link className="btn-get-seemore" to="/Plusprojets">See more</Link>
      </section>
    </>
  );
};
export default Projets;
