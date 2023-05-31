import "./App.css";
import "./style.css";
//importing images

import user from "./assets/imgs/user.png";
import ec from "./assets/imgs/ec.png";
// import cv from "./assets/Rabin.Resume.pdf";

function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button --> */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

      <div class="wrapper">
        <label for="darkMode">
          <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        {/* <!-- Header --> */}
        <header class="primary-header flex">
          <div class="logo flex">
            <div>
              <h1>Rabin</h1>
            </div>

            <div>
              <h1 class="line">Web Developer</h1>
            </div>
          </div>

          <div class="right">
            <input type="checkbox" id="check" />
            <label for="check" class="menu-icon">
              <i class="fa-solid fa-bars"></i>
            </label>
            <ul class="navigation flex">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        {/* <!-- Header end --> */}

        {/* <!-- Hero section --> */}
        <section class="section1 grid">
          <div class="left flex">
            <img src={user} alt="profile pic" />
          </div>

          <div class="right flex">
            <div class="flex">
              <h2 class="name">Rabin</h2>
              <p class="tag">Web Developer</p>
            </div>

            <button>
              <a href="#!">
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

        {/* <!-- Skills section --> */}
        <section class="section3">
          <div class="skills-container flex">
            <div class="flex">
              <i class="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-css3"></i> <span>CSS</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-js"></i> <span>JavaScript</span>
            </div>
            <div class="flex">
              <i class="fa-brands fa-react"></i> <span>React</span>
            </div>
            <div class="flex">
              <i class="fa-solid fa-code-branch"></i> <span>Firebase</span>
            </div>
          </div>
        </section>
        {/* <!-- Skills Section end --> */}

        {/* <!-- Projects Section --> */}

        <section class="section4 flex" id="projects">
          <h1 class="title">My Recent Work</h1>

          <div class="projects-container grid">
            <div class="project-card flex">
              <div class="top">
                <img src={ec} alt="img" />
              </div>

              <div class="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-Stack Web Application Built Using React & Firebase</p>
              </div>
            </div>
            <div class="project-card flex">
              <div class="top">
                <img src={ec} alt="img" />
              </div>

              <div class="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-Stack Web Application Built Using React & Firebase</p>
              </div>
            </div>
            <div class="project-card flex">
              <div class="top">
                <img src={ec} alt="img" />
              </div>

              <div class="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-Stack Web Application Built Using React & Firebase</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Projects Section End --> */}

        {/* <!-- About Section --> */}
        <section class="section5 flex" id="about">
          <h1 class="title">About Me</h1>

          <div class="about-container flex">
            <div class="left">
              <div class="bg"></div>
              <img src="/assets/imgs/user.png" alt="" />
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

        {/* <!-- Get in Touch Section --> */}
        <section class="section6 flex" id="contact">
          <h1 class="title">Get In Touch</h1>

          <div class="socials flex">
            <i class="fa-brands fa-linkedin"></i>
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
        </footer>

        {/* <!-- Footer End --> */}
        <div class="scroll-to-top">
          <a href="#!" class="scroll-btn">
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
