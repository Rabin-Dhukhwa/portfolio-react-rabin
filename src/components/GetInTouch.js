import React from "react";
import { Layout } from "./Layout";

export const GetInTouch = () => {
  return (
    <Layout>
      {/* <!-- Get in Touch Section --> */}
      <section className="section6 flex" id="contact">
        <h1 className="title">Get In Touch</h1>

        <div className="socials flex">
          <a
            href="https://www.linkedin.com/in/rabin-dhukhwa-8a5505156/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>

        <h1>OR</h1>

        <div className="email-section flex">
          <p>reach out over email</p>
          <div className="email">
            <a href="mailto:xyz@gmail.com">example@gmail.com</a>

            <div className="send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get in Touch Section End --> */}
    </Layout>
  );
};
