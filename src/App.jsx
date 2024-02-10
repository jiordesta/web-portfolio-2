import React, { useEffect } from "react";
import Header from "./sections/Header";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { observe } from "./observer";

export default function App() {
  useEffect(() => {
    ["about", "academics", "skills", "projects", "services", "contact"].map(
      (section) => {
        observe(section);
      }
    );
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
