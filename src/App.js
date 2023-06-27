import "./App.css";
import "./style.css";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { GetInTouch } from "./components/GetInTouch";
import { Footer } from "./components/Footer";

//importing images

// import cv from "./assets/Rabin.Resume.pdf";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button --> */}

      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />

      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <GetInTouch />
        <Footer />
        <div />
      </div>
    </div>
  );
}

export default App;
