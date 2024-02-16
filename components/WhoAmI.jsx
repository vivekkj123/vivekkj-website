import { faDebian, faLinux } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCodeCompare,
  faCodePullRequest,
  faEnvelope,
  faLanguage,
  faLaptopCode,
  faMapMarkerAlt,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhoAmI = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="p-6
       md:p-32 mt-20 md:text-left 
       "
    >
      <h1 className="text-primary-fg text-4xl md:text-6xl font-bold font-mono">
        $whoami
      </h1>
      <div className="grid md:grid-cols-2 leading-loose mt-10 md:mt-20 text-xl">
        <div>
          <p>
            <FontAwesomeIcon className="mx-2" icon={faMapMarkerAlt} /> Kerala,
            India
          </p>
          <p>
            <FontAwesomeIcon
              href="emailto:contact@vivekkj.in"
              className="mx-2"
              icon={faEnvelope}
            />{" "}
            contact[at]vivekkj[dot]in
          </p>
        </div>
        <div className="leading-loose mt-20 md:mt-0 ">
          <ul>
            <li>
              <FontAwesomeIcon icon={faLaptopCode} />
              &nbsp; MERN Full Stack Developer
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileScreen} /> &nbsp; Hybrid App
              Developer (React Native, Flutter)
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} />
              &nbsp; GDSC Lead (SCET)
            </li>
            <li>
              <FontAwesomeIcon icon={faCodeCompare} /> &nbsp; Open-Source
              Contributor
            </li>
            <li>
              <FontAwesomeIcon icon={faDebian} /> &nbsp; Debian Maintainer
            </li>
            <li>
              <FontAwesomeIcon icon={faLanguage} /> &nbsp;Software Translator
            </li>
            <li>
              <FontAwesomeIcon icon={faCodePullRequest} /> &nbsp; FOSS
              Enthusiast
            </li>
            <li>
              <FontAwesomeIcon icon={faLinux} />
              &nbsp;&nbsp;&nbsp;GNU/Linux User
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
