import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ContactMe from "../components/ContactMe";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";
import WhoAmI from "../components/WhoAmI";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let resetToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <div className="pb-20 Home bg-primary-bg text-white">
        <ScrollToTop resetToTop={resetToTop} />
        <Hero />
        <WhoAmI />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </React.Fragment>
  );
};

export default Home;
