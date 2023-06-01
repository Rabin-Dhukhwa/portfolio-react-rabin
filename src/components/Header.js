import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <label htmlFor="darkMode">
        <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
      </label>

      {/* <!-- Header --> */}
      <header className="primary-header flex">
        <div className="logo flex">
          <div>
            <h1>Rabin</h1>
          </div>

          <div>
            <h1 className="line">Web Developer</h1>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navigation flex">
            <li>
              <Link to="/"> Home</Link>
              {/* <a href="#!">Home</a> */}
            </li>
            <li>
              <Link to="/skills"> Skills</Link>
              {/* <a href="#skills">Skills</a> */}
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
