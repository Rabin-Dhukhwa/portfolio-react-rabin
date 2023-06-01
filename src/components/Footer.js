import React from "react";

export const Footer = () => {
  return (
    <>
      {" "}
      {/* <!-- Footer --> */}
      <footer>
        <div class="footer-container flex">
          <div class="footer-top flex">
            <div class="flex">
              <h3>Links</h3>
              <ul class="flex">
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div class="flex">
              <h3>External Links</h3>
              <ul class="flex">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom flex">
            <p>@2022 | All rights reserved.</p>
          </div>
        </div>
        {/* <!-- Footer End --> */}
        <div class="scroll-to-top">
          <a href="#home" class="scroll-btn">
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
