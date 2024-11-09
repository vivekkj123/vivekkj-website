import { faDebian, faLinux } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCodeCompare,
  faCodePullRequest,
  faEnvelope,
  faLanguage,
  faLaptopCode,
  faMapMarkerAlt,
  faMobileScreen,
  faServer,
  faGraduationCap,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhoAmI = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="col-span-2 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 space-y-6">
            {/* Contact Info */}
            <div className="flex flex-col gap-4 mb-6">
              
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faGraduationCap} className="text-primary-fg" />
                <span>B.Tech CSE Student at SCET Kodakara</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate Full Stack Developer from Kerala, India, with expertise in building modern web and mobile applications. Currently pursuing my B.Tech in Computer Science and Engineering at Sahrdaya College of Engineering and Technology (Autonomous), Kodakara.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I&apos;m also an active member of Free Software Community and various FOSS and OSS Projects. I love contributing to open source projects and building solutions that make a difference.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">What I Love</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faHeart} className="text-primary-fg" />
                  <span>Building innovative web and mobile applications</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faHeart} className="text-primary-fg" />
                  <span>Contributing to open-source projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FontAwesomeIcon icon={faHeart} className="text-primary-fg" />
                  <span>Learning and exploring new technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack card */}
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 space-y-6 col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold">Tech Stack & Roles</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faLaptopCode} className="text-primary-fg" />
                <span>MERN Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faMobileScreen} className="text-primary-fg" />
                <span>Hybrid App Developer</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faCode} className="text-primary-fg" />
                <span>GDSC Lead (2023-24, SCET)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faCodeCompare} className="text-primary-fg" />
                <span>Open-Source Contributor</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faDebian} className="text-primary-fg" />
                <span>Debian Maintainer</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faLanguage} className="text-primary-fg" />
                <span>Software Translator</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faCodePullRequest} className="text-primary-fg" />
                <span>FOSS Enthusiast</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faLinux} className="text-primary-fg" />
                <span>GNU/Linux User</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
