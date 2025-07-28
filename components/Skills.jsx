import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faNodeJs, 
  faSass, 
  faFigma,
  faVuejs,
  faJava,
  faPython,
  faGitAlt,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const skillsList = [
    { icon: faReact, name: "ReactJS" },
    { icon: "ai-nextjs-fill", name: "NextJS", isCustomIcon: true },
    { icon: faJava, name: "Java" },
    { icon: "bx bxl-spring-boot", name: "Spring Boot", isCustomIcon: true },
    { icon: "bx bxl-kubernetes", name: "Kubernetes", isCustomIcon: true },
    { icon: "bx bxl-docker", name: "Docker", isCustomIcon: true },
    { icon: faNodeJs, name: "Node.JS" },
    { icon: faReact, name: "React Native" },
    { icon: faVuejs, name: "VueJS" },
    { icon: "bx bxl-tailwind-css", name: "Tailwind CSS", isCustomIcon: true },
    { icon: faSass, name: "Sass, Scss" },
    { icon: faFigma, name: "Figma" },
    { icon: "bx bxl-flutter", name: "Flutter", isCustomIcon: true },
    { icon: "bx bxl-c-plus-plus", name: "C/C++", isCustomIcon: true },
    { icon: faPython, name: "Python" },
    { icon: faGitAlt, name: "Git" },
    { icon: faLinux, name: "GNU/Linux" },
    { icon: faDatabase, name: "Databases (MongoDB, MySQL)" },
    { icon: "bx bxl-firebase", name: "Firebase", isCustomIcon: true }
  ];

  return (
    <section
      data-aos="zoom-in-down"
      id="skills"
      className="py-20 px-4 text-center md:text-left"
    >
      <div className="max-w-7xl mx-auto">
        <span className="flex my-5 text-4xl items-center gap-3 justify-center md:justify-start">
          <h2 className="font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Skills 
          </h2>
          🚀
        </span>

        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 lg:p-12">
          <p className="text-xl mt-5 text-gray-300">
            I&apos;m well experienced in these technologies
          </p>
          
          <div className={styles.Skills}>
            <ul>
              {skillsList.map((skill, index) => (
                <li key={index}>
                  {skill.isCustomIcon ? (
                    <i className={skill.icon}></i>
                  ) : (
                    <FontAwesomeIcon icon={skill.icon} />
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
