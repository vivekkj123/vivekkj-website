import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ContactMe from "../components/ContactMe";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";
import WhoAmI from "../components/WhoAmI";
import LatestPosts from "../components/LatestPosts";
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
let resetToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Home = ({ posts }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="pb-20 Home bg-primary-bg text-white">
        <ScrollToTop resetToTop={resetToTop} />
        <Hero />
        <WhoAmI />
        <Skills />
        <LatestPosts posts={posts} />
        <Projects />
        <ContactMe />
      </div>
    </React.Fragment>
  );
};

export default Home;
