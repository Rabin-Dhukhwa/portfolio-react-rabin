import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {" "}
      {/* <!-- Footer --> */}
      <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className="flex">
              <h3>Links</h3>
              <ul className="flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about"> About</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact"> Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex">
              <h3>External Links</h3>
              <ul className="flex">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <p>@2022 | All rights reserved.</p>
          </div>
        </div>
        {/* <!-- Footer End --> */}
        <div className="scroll-to-top">
          <a href="#home" className="scroll-btn">
            <i className="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
