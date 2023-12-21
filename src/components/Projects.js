import React from "react";
import buyhere from "../assets/imgs/buyhere.JPG";
import techmart from "../assets/imgs/techmart.JPG";
import expenseTracker from "../assets/imgs/expenseTracker.JPG";

export const Projects = () => {
  const openOnClickExpenseTracker = () => {
    window.open("https://financial-expense-tracker.netlify.app/");
  };
  const openOnClickBuyhere = () => {
    window.open("https://www.buyhere.au/");
  };
  const openOnClickTechmart = () => {
    window.open("https://techmart-cms.vercel.app/");
  };
  return (
    <>
      {/* <!-- Projects Section --> */}

      <section className="section4 flex" id="projects">
        <h1 className="title">My Recent Work</h1>

        <div className="projects-container grid">
          <div className="project-card flex">
            <div className="top">
              <img src={buyhere} alt="img" onClick={openOnClickBuyhere} />
            </div>

            <div className="bottom">
              <p onClick={openOnClickBuyhere}>Dec 15, 2023</p>
              <p>
                <a
                  href="https://buyhere.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mern Stack e-commerce website
                </a>
              </p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={techmart} alt="img" onClick={openOnClickTechmart} />
            </div>

            <div className="bottom">
              <p onClick={openOnClickTechmart}>Sept 16, 2023</p>
              <p>
                <a
                  href="https://techmart-cms.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  E-commerce Admin CMS
                </a>
              </p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img
                src={expenseTracker}
                alt="img"
                onClick={openOnClickExpenseTracker}
              />
            </div>

            <div className="bottom">
              <p onClick={openOnClickExpenseTracker}>May 12, 2023</p>
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
