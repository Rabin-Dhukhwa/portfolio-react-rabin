import React from "react";

export const Header = () => {
  const hideMenu = () => {
    const checkbox = document.getElementById("check");
    checkbox.checked = false;
  };

  return (
    <>
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
          <label for="check" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navigation flex">
            <li>
              <a href="#home" onClick={hideMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={hideMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={hideMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={hideMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={hideMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
