import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <Link to="index.html"></Link>
            </h1>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <Link to="/#home">Home</Link>
                </li>
                <li>
                  <Link to="/#about">About</Link>
                </li>
                <li>
                  <Link to="/#services">Skills</Link>
                </li>
                <li>
                  <Link to="/#portfolio">Projets</Link>
                </li>
                <li>
                  <Link to="/#team">Curriculum V</Link>
                </li>

                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </header>
    </>
  );
};
export default Header;
