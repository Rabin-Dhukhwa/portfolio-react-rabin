import React from "react";

export const GetInTouch = () => {
  return (
    <>
      {/* <!-- Get in Touch Section --> */}
      <section class="section6 flex" id="contact">
        <h1 class="title">Get In Touch</h1>

        <div class="socials flex">
          <a
            href="https://www.linkedin.com/in/rabin-dhukhwa-8a5505156/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>

        <h1>OR</h1>

        <div class="email-section flex">
          <p>reach out over email</p>
          <div class="email">
            <a href="mailto:xyz@gmail.com">example@gmail.com</a>

            <div class="send">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get in Touch Section End --> */}
    </>
  );
};
