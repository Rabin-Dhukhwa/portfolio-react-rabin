import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      {/* <!-- Footer --> */}
      <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className="flex">
              <h3>Portfolio Links</h3>
              <ul className="flex">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex">
              <h3>External Links</h3>
              <ul className="flex">
                <a
                  href="https://www.linkedin.com/in/rabin-dhukhwa-8a5505156/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Rabin-Dhukhwa"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <p>&copy; {date} Rabin Dhukhwa. All rights reserved.</p>
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
