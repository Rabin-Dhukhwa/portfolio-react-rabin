import React from "react";
import ec from "../assets/imgs/ec.png";

export const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}

      <section class="section4 flex" id="projects">
        <h1 class="title">My Recent Work</h1>

        <div class="projects-container grid">
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="img" />
            </div>

            <div class="bottom">
              <p>Dec 15, 2022</p>
              <p>Full-Stack Web Application Built Using React & Firebase</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="img" />
            </div>

            <div class="bottom">
              <p>Dec 15, 2022</p>
              <p>Full-Stack Web Application Built Using React & Firebase</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="img" />
            </div>

            <div class="bottom">
              <p>Dec 15, 2022</p>
              <p>Full-Stack Web Application Built Using React & Firebase</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Projects Section End --> */}
    </>
  );
};
