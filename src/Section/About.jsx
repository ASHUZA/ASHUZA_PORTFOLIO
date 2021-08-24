import React from "react";
import img from "./../img/citation compresser/PROFIL PORTFOLIO ASH11.png";
import "./../scss/About.scss";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title mt-5" data-aos="fade-up">
            <h2> About</h2>
            <p> About me </p>

            <sliderbtn></sliderbtn>
          </div>

          <div class="about_box">
            <div class="about_container">
              <div class="about_img">
                <img src={img} alt="projet" />
              </div>

              <div class="about_test">
                <h3>Web Developer fulls stack .</h3>
                <p>
                  I am a web and mobile web developer. Train to be able to set
                  up, manage the administration and maintenance of existing
                  platforms: front, back, extranet and REST webservices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
