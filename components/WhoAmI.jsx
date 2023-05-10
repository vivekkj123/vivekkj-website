import React from "react";
import styles from "../styles/WhoAmI.module.css";

const WhoAmI = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="p-6
       md:p-32 mt-20 md:text-left text-center
       "
    >
      <h1 className="text-primary-fg text-4xl md:text-6xl font-bold font-mono">
        $whoami
      </h1>
      <div className="grid md:grid-cols-2 leading-loose mt-10 md:mt-20 text-xl">
        <div>
          <p>
            <i className="fa fa-map-marker"></i> Kerala, India
          </p>
          <p>
            <i className="fa fa-envelope"></i>
            contact[at]vivekkj[dot]codes
          </p>
        </div>
        <div className="leading-loose mt-20 md:mt-0">
          <ul>
            <li>
              <i className="fa-solid fa-laptop-code"></i> &nbsp; MERN Full Stack
              Developer
            </li>
            <li>
              <i className="fa-solid fa-mobile-screen"></i> &nbsp; Hybrid App
              Developer (React Native, Flutter)
            </li>
            <li>
              <i className="fa-brands fa-osi"></i> &nbsp; Open-Source
              Contributor
            </li>
            <li>
              <i className="fa-solid fa-box-open"></i> &nbsp; Debian Maintainer
            </li>
            <li>
              <i className="fa-solid fa-language"></i> &nbsp; Software
              Translator
            </li>
            <li>
              <i className="fa-solid fa-code-pull-request"></i> &nbsp; FOSS
              Enthusiast
            </li>
            <li>
              <i className="fa-brands fa-linux"></i> &nbsp; GNU/Linux User
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
