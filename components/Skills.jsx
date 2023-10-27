import {
  faFigma,
  faGitAlt,
  faJava,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faSass,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {
  return (
    <section
      data-aos="zoom-in-down"
      id="skills"
      className="p-8 text-center md:text-left md:p-32"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">Skills 🚀</h1>
        <p className="text-xl mt-5">
          I&apos;m well experienced in these technologies
        </p>
        <div className="columns-2 md:mt-16 mt-5 leading-10 text-lg md:text-2xl">
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <FontAwesomeIcon icon={faReact} /> ReactJS
              </li>
              <li>
                <i className="ai-nextjs-fill"></i> NextJS
              </li>
              <li>
                <i className="bx bxl-flutter"></i> Flutter
              </li>
              <li>
                <FontAwesomeIcon icon={faNodeJs} /> Node.JS
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} /> React Native
              </li>
              <li>
                <i className="bx bxl-tailwind-css"></i> Tailwind CSS
              </li>
              <li>
                <FontAwesomeIcon icon={faSass} />
                Sass, Scss
              </li>
              <li>
                <FontAwesomeIcon icon={faFigma} /> &nbsp;Figma
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <FontAwesomeIcon icon={faVuejs} /> VueJS
              </li>
              <li>
                <i className="bx bxl-c-plus-plus"></i>C/C++
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} /> Java
              </li>
              <li>
                <FontAwesomeIcon icon={faPython} />Python
              </li>
              <li>
                <FontAwesomeIcon icon={faGitAlt} />
                Git
              </li>
              <li>
                <FontAwesomeIcon icon={faLinux} />
                GNU/Linux
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} />
                Databases (MongoDB, MySQL)
              </li>
              <li>
                <i className="bx bxl-firebase"></i>Firebase
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
