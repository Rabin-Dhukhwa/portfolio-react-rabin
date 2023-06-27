import React from "react";
import user from "../assets/imgs/user.png";

export const About = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="section5 flex" id="about">
        <h1 className="title">About Me</h1>

        <div className="about-container flex">
          <div className="left flex">
            <div className="bg"></div>
            <img src={user} alt="Rabin" />
          </div>

          <div className="right flex">
            <h1>Rabin</h1>
            <p>
              I grew up in Nepal and am currently living in Crestwood,
              Australia.
            </p>

            <p>Crestwood, Australia</p>

            <a
              href="https://www.linkedin.com/in/rabin-dhukhwa-8a5505156/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with Linkedin
            </a>

            <div className="flex interest">
              <div className="tag">Interests</div>
              <div>
                <span>Coding</span>
                <span>Football</span>
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End--> */}
    </>
  );
};
