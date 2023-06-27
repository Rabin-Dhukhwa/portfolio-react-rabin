import React from "react";
import ec from "../assets/imgs/ec.png";
import expenseTracker from "../assets/imgs/expenseTracker.JPG";

export const Projects = () => {
  const openOnClick = () => {
    window.open("https://financial-expense-tracker.netlify.app/");
  };
  return (
    <>
      {/* <!-- Projects Section --> */}

      <section className="section4 flex" id="projects">
        <h1 className="title">My Recent Work</h1>

        <div className="projects-container grid">
          <div className="project-card flex">
            <div className="top">
              <img src={ec} alt="img" />
            </div>

            <div className="bottom">
              <p>Dec 15, 2022</p>
              <p>Full-Stack Web Application Built Using React & Firebase</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={ec} alt="img" />
            </div>

            <div className="bottom">
              <p>Dec 15, 2022</p>
              <p>Full-Stack Web Application Built Using React & Firebase</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={expenseTracker} alt="img" onClick={openOnClick} />
            </div>

            <div className="bottom">
              <p onClick={openOnClick}>Dec 15, 2022</p>
              <p>
                <a
                  href="https://financial-expense-tracker.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Expense Tracking web app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Projects Section End --> */}
    </>
  );
};
