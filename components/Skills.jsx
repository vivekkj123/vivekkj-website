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
import { motion } from "framer-motion";

const Skills = () => {
  const skillsList = [
    { icon: faReact, name: "ReactJS", color: "#61DAFB" },
    { icon: "ai-nextjs-fill", name: "NextJS", isCustomIcon: true, color: "#FFFFFF" },
    { icon: faJava, name: "Java", color: "#007396" },
    { icon: "bx bxl-spring-boot", name: "Spring Boot", isCustomIcon: true, color: "#6DB33F" },
    { icon: "bx bxl-kubernetes", name: "Kubernetes", isCustomIcon: true, color: "#326CE5" },
    { icon: "bx bxl-docker", name: "Docker", isCustomIcon: true, color: "#2496ED" },
    { icon: faNodeJs, name: "Node.JS", color: "#339933" },
    { icon: faReact, name: "React Native", color: "#61DAFB" },
    { icon: faVuejs, name: "VueJS", color: "#4FC08D" },
    { icon: "bx bxl-tailwind-css", name: "Tailwind CSS", isCustomIcon: true, color: "#06B6D4" },
    { icon: faSass, name: "Sass, Scss", color: "#CC6699" },
    { icon: faFigma, name: "Figma", color: "#F24E1E" },
    { icon: "bx bxl-flutter", name: "Flutter", isCustomIcon: true, color: "#02569B" },
    { icon: "bx bxl-c-plus-plus", name: "C/C++", isCustomIcon: true, color: "#00599C" },
    { icon: faPython, name: "Python", color: "#3776AB" },
    { icon: faGitAlt, name: "Git", color: "#F05032" },
    { icon: faLinux, name: "GNU/Linux", color: "#FCC624" },
    { icon: faDatabase, name: "Databases", color: "#4479A1" },
    { icon: "bx bxl-firebase", name: "Firebase", isCustomIcon: true, color: "#FFCA28" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start mb-12"
        >
          <span className="flex text-4xl items-center gap-3 font-bold mb-4">
            <h2 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Skills 
            </h2>
            <span className="animate-bounce">🚀</span>
          </span>
          <p className="text-xl text-gray-400">
            I&apos;m well experienced in these technologies
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-fg/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center gap-4 text-center w-36 md:w-48"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`
                }}
              />
              
              <div className="relative z-10 text-4xl group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                {skill.name === "NextJS" ? (
                  <svg 
                    viewBox="0 0 180 180" 
                    width="1em" 
                    height="1em" 
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{maskType: 'alpha'}}>
                      <circle cx="90" cy="90" fill="#000000" r="90"></circle>
                    </mask>
                    <g mask="url(#mask0_408_134)">
                      <circle cx="90" cy="90" data-circle="true" fill="#000000" r="90"></circle>
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"></path>
                      <rect fill="url(#paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                ) : skill.isCustomIcon ? (
                  <i className={skill.icon}></i>
                ) : (
                  <FontAwesomeIcon icon={skill.icon} />
                )}
              </div>
              
              <span className="relative z-10 font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
