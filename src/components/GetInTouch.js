import React from "react";

export const GetInTouch = () => {
  return (
    <>
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
          <a
            href="https://github.com/Rabin-Dhukhwa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <h1>OR</h1>

        <div className="email-section flex">
          <div className="email">
            <a href="mailto:dhukhwarabin@gmail.com">dhukhwarabin@gmail.com</a>

            <div className="send">
              <a href="mailto:dhukhwarabin@gmail.com">
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get in Touch Section End --> */}
    </>
  );
};
