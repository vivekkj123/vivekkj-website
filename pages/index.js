import React, { useEffect } from "react";
import Hero from "../components/Hero";
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
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <title>VIVEK K J | വിവേക് കെ ജെ</title>
        <meta
          name="description"
          content="Personal website of Vivek K J. Vivek K J is a professional full stack web developer, and a programmer.Vivek is a Free Software Contributor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vivekkj.in" />
        <meta property="og:title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <meta
          property="og:description"
          content="Personal website of Vivek K J"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/9vV0Lcd/VIVEK-K-J.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <meta
          property="twitter:description"
          content="Personal website of Vivek K J"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/9vV0Lcd/VIVEK-K-J.jpg"
        />
        <meta
          content="vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source"
          name="keywords"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#fef303" />
      </Head>
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
