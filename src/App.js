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
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <!-- Dark mode Button --> */}
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<GetInTouch />} />
        </Routes>

        <div />
      </div>
    </div>
  );
}

export default App;

// 1. npm i react-router-dom

// 2. Wrap entire components with BrowserRouter in index.js or app.js

//3. use Routes components to wrap all the pages
//4. Define individual page by using Route component
