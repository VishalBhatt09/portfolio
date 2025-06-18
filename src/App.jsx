import "./App.css";
import { React } from "react";
import Nav from "./Component/nav";
import Home from "./Component/home";
import About from "./Component/about";
import Projects from "./Component/projects";
import Contact from "./Component/contact";
import Footer from "./Component/footer";
import SectionObserver from "./Component/SectionObserver";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main className="content-container">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
      <SectionObserver />
    </div>
  );
}

export default App;
