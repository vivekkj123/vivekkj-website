import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faNodeJs, 
  faSass, 
  faFigma,
  faJava,
  faPython,
  faGitAlt,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTerminal, faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Skills.module.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Database",
      icon: faCode,
      skills: [
        { icon: faJava, name: "Java", color: "#007396" },
        { icon: faPython, name: "Python", color: "#3776AB" },
        { icon: faDatabase, name: "Databases (SQL/NoSQL)", color: "#4479A1" },
      ]
    },
    {
      title: "Frameworks & Frontend",
      icon: faServer,
      skills: [
        { icon: faReact, name: "ReactJS", color: "#61DAFB" },
        { icon: "ai-nextjs-fill", name: "Next.js", isCustomIcon: true, color: "#FFFFFF" },
        { icon: faNodeJs, name: "Node.js", color: "#339933" },
        { icon: "bx bxl-spring-boot", name: "Spring Boot", isCustomIcon: true, color: "#6DB33F" },
        { icon: faReact, name: "React Native", color: "#61DAFB" },
        { icon: "bx bxl-tailwind-css", name: "Tailwind CSS", isCustomIcon: true, color: "#06B6D4" },
        { icon: faSass, name: "Sass / SCSS", color: "#CC6699" },
        { icon: faFigma, name: "Figma", color: "#F24E1E" },
      ]
    },
    {
      title: "Infrastructure & Systems",
      icon: faTerminal,
      skills: [
        { icon: "bx bxl-kubernetes", name: "Kubernetes", isCustomIcon: true, color: "#326CE5" },
        { icon: "bx bxl-docker", name: "Docker", isCustomIcon: true, color: "#2496ED" },
        { icon: faLinux, name: "GNU/Linux", color: "#FCC624" },
        { icon: faGitAlt, name: "Git", color: "#F05032" },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and frameworks I use to build scalable systems.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={item}
              className="backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-8 space-y-6 hover:border-indigo-500/30 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
                <FontAwesomeIcon icon={category.icon} className="text-indigo-400 text-lg" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-4 group p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <div 
                      className="text-2xl group-hover:scale-110 transition-transform duration-200 w-8 h-8 flex items-center justify-center"
                      style={{ color: skill.color }}
                    >
                      {skill.name === "Next.js" ? (
                        <svg 
                          viewBox="0 0 180 180" 
                          width="1em" 
                          height="1em" 
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask height="180" id={`mask-${catIdx}-${skillIdx}`} maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{maskType: 'alpha'}}>
                            <circle cx="90" cy="90" fill="#000000" r="90"></circle>
                          </mask>
                          <g mask={`url(#mask-${catIdx}-${skillIdx})`}>
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
                        <i className={`${skill.icon} text-2xl`}></i>
                      ) : (
                        <FontAwesomeIcon icon={skill.icon} />
                      )}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
