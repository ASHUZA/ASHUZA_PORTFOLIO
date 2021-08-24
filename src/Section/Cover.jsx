import React from "react";
import CV_PDF from "./../CV/ASHUZA_KASUMBE_PASCAL_CV.pdf";

const Cover = () => {
  return (
    <>
      <section id="cover" className="d-flex align-items-center Cover">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="title_container">
            <h1>ASHUZA PASCAL</h1>

            <div className="title_animation">
              <div className="title_detail">UI/UX Designer</div>
              <div className="title_detail">
                <span> Fulls stack Web Developer</span>
              </div>
            </div>
            <a href={CV_PDF} download="MyCV" target="_blank">
              <p className="btn-get-started scrollto">Download CV</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cover;
