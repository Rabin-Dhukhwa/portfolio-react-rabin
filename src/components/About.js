import React from "react";
import user from "../assets/imgs/user.png";

export const About = () => {
  return (
    <>
      {" "}
      {/* <!-- About Section --> */}
      <section class="section5 flex" id="about">
        <h1 class="title">About Me</h1>

        <div class="about-container flex">
          <div class="left">
            <div class="bg"></div>
            <img src={user} alt="" />
          </div>

          <div class="right flex">
            <h1>Rabin</h1>
            <p>
              I grew up in Nepal and am currently living in Sydney, Australia.
            </p>

            <p>Sydney, Australia</p>

            <a href="#!">Connect with me</a>

            <div class="flex">
              <div class="tag">Interests</div>
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
