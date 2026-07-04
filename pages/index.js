import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";
import WhoAmI from "../components/WhoAmI";
import LatestPosts from "../components/LatestPosts";

const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const ContactMe = dynamic(() => import("../components/ContactMe"), {
  ssr: false,
});
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
    const initAOS = async () => {
      const AOS = await import("aos");
      AOS.default.init();
    };
    initAOS();
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
