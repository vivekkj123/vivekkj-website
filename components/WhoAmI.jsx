import { faDebian, faLinux } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCode,
  faCodeCompare,
  faCodePullRequest,
  faHeart,
  faLanguage,
  faLaptopCode,
  faTerminal,
  faCompass,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const WhoAmI = () => {
  const highlights = [
    { title: "1+ Years Coding", description: "Enterprise & open-source software", icon: faLaptopCode },
    { title: "Debian Developer", description: "Official maintainer packaging ecosystem", icon: faDebian }
  ];

  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            My background as an enterprise software engineer and open-source contributor.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-8 md:p-10 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-400">
                <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
                <span className="font-semibold text-gray-200">Software Engineer @ IBM India Software Labs, Kochi</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I am a Software Engineer based in Kerala, India, specializing in designing and developing scalable full-stack applications. With a strong foundation in modern backend architectures and containerized deployments, I focus on delivering clean, maintainable, and high-performance solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Beyond my commercial work, I am deeply committed to open-source software. As a Debian Developer and active participant in multiple Free Software communities, I contribute regularly to the preservation and development of critical digital commons.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.05]">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCompass} className="text-indigo-400 text-sm" />
                Core Focus Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-400/80 w-5" />
                  <span>Resilient Enterprise Architectures</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <FontAwesomeIcon icon={faCodeCompare} className="text-indigo-400/80 w-5" />
                  <span>Open-Source & FOSS</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <FontAwesomeIcon icon={faTerminal} className="text-indigo-400/80 w-5" />
                  <span>GNU/Linux & FOSS Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <FontAwesomeIcon icon={faGlobe} className="text-indigo-400/80 w-5" />
                  <span>Web Applications and Backend systems</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics & Highlights Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div 
                  key={i} 
                  className="backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.05] p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={item.icon} className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Commits / Role card */}
            <div className="backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faTerminal} className="text-indigo-400 text-sm" />
                Community Roles
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faDebian} className="text-indigo-400 mt-1 w-5" />
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm">Debian Maintainer & Contributor</h4>
                    <p className="text-xs text-gray-400">Packaging and maintaining Free Software for the universal operating system.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCode} className="text-indigo-400 mt-1 w-5" />
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm">GDSC Lead (2023-24)</h4>
                    <p className="text-xs text-gray-400">Led the Google Developer Student Clubs chapter, mentoring student developers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLanguage} className="text-indigo-400 mt-1 w-5" />
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm">Wikipedia Contributor</h4>
                    <p className="text-xs text-gray-400">Active translator and editor for Malayalam localization and documentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLinux} className="text-indigo-400 mt-1 w-5" />
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm">FOSS Advocate</h4>
                    <p className="text-xs text-gray-400">Promoting open software principles, privacy, and digital sovereignty.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
