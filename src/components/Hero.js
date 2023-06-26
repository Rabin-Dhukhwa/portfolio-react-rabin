import React from "react";
import user from "../assets/imgs/user.png";
import resume from "../assets/resume/unfinished-resume.pdf";

export const Hero = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section class="section1 grid" id="home">
        <div class="left flex">
          <img src={user} alt="profile pic" />
        </div>

        <div class="right flex">
          <div class="flex">
            <h2 class="name">Rabin</h2>
          </div>
          <div class="flex">
            <p class="tag">Web Developer</p>
          </div>

          <button>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Download CV
              <span>
                <i class="fa-solid fa-download"></i>
              </span>
            </a>
          </button>
        </div>
      </section>
      {/* <!-- Hero section end --> */}
      {/* <!-- Banner Section --> */}
      <section class="section2">
        <div class="info-container flex">
          <div class="info-lists flex">
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>5 + Projects</h5>
                <p>Completed</p>
              </span>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>1 + Year</h5>
                <p>Job Experience</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section end --> */}
    </>
  );
};
