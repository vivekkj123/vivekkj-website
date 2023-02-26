import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";
import WhoAmI from "../components/WhoAmI";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import ScrollToTop from "../components/ScrollToTop";
import Projects from "../components/Projects";
import Head from "next/head";
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
      <Head>
        <title>Vivek K J | വിവേക് കെ ജെ</title>
      </Head>
        <Script
          src="https://kit.fontawesome.com/b7fec954dc.js"
          crossorigin="anonymous"
        ></Script>
        <Script src="https://unpkg.com/akar-icons-fonts"></Script>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
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
