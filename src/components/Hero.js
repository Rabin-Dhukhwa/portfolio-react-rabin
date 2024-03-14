import React from "react";
import user from "../assets/imgs/user111.png";
import resume from "../assets/resume/cv.pdf";

export const Hero = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="section1 grid" id="home">
        <div className="left flex">
          <img src={user} alt="profile pic" />
        </div>

        <div className="right flex">
          <div className="flex">
            <h2 className="name">Rabin</h2>
          </div>
          <div className="flex">
            <p className="tag">Web Developer</p>
          </div>

          <button>
            <a href={resume} target="_blank" rel=" noopener noreferrer ">
              Download CV
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
            </a>
          </button>
        </div>
      </section>
      {/* <!-- Hero section end --> */}
      {/* <!-- Banner Section --> */}
      <section className="section2">
        <div className="info-container flex">
          <div className="info-lists flex">
            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>

            <div className="info-divider"></div>

            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>5 + Projects</h5>
                <p>Completed</p>
              </span>
            </div>

            <div className="info-divider"></div>

            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
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
