import React from "react";
import About from "../Section/About";
import Blog from "../Section/Blog";
import Cover from "../Section/Cover";
import Footer from "../Section/Footer";
import Parteners from "../Section/Parteners";
import Projets from "../Section/Projets";
import Services from "../Section/Services";
import Skills from "../Section/Skills";

const Mainpage = () => {
  return (
    <>
      <Cover></Cover>

      <About />
      <Skills />
      <Services></Services>
      <Projets></Projets>
      {/* <Blog></Blog> */}
      <Parteners></Parteners>
      <Footer></Footer>
    </>
  );
};
export default Mainpage;
