import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footerbg text-start text-white mt-5" id="footer">
        <div className="footer-top">
          <div className="container p-4">
            <div className="container mt-5  ">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-info">
                    <h3>ASHUZA</h3>
                    <p>
                      47 Budjala Kintambo
                      <br />
                      KINSHASA, RDC
                      <br />
                      <br />
                      <strong>Phone:</strong> +243 97 6347207
                      <br />
                      <strong>Email:</strong> ashuzakasumbepascal19@gmail.com
                      <br />
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <a href="#" className="google-plus">
                        <i className="bx bxl-skype"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Links used</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">About</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Skills</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Projects</a>
                    </li>

                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>My Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Web development</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Receive my news</h4>
                  <p>Register to always be informed of our news</p>
                  <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center p-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright:
            <a className="text-white" href="https://novadigitechno.com/">
              novadigitechno.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
