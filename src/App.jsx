import React from "react";
import Header from "./sections/Header";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function App() {
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
