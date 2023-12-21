import React from "react";

export const Skills = () => {
  return (
    <>
      <section className="section3" id="skills">
        <div className="skills-container flex">
          <div className="flex">
            <i className="fa-brands fa-js"></i> <span>JavaScript</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-react"></i> <span>React</span>
          </div>
          <div className="flex">
            <i class="fa-brands fa-node"></i> <span>Node</span>
          </div>
          <div className="flex">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Express</span>
          </div>
          <div className="flex">
            <i class="fa-solid fa-database"></i>
            <span>MongoDB</span>
          </div>
          <div className="flex">
            <i className="fa-solid fa-code-branch"></i> <span>Firebase</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-github"></i> <span>GitHub</span>
          </div>
        </div>
      </section>
    </>
  );
};
