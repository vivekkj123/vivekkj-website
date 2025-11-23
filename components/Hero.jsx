import {
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faMastodon,
  faTelegram,
  faTwitter,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faKey,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import { useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    const hero = document.querySelector(`.${styles.hero}`);
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/in/iamvivekkj" },
    { icon: faGithub, url: "https://www.github.com/vivekkj123" },
    { icon: faGitlab, url: "https://www.gitlab.com/vivekkj" },
    { icon: faXTwitter, url: "https://www.x.com/iamvivekkj" },
    { icon: faInstagram, url: "https://www.instagram.com/iamvivekkj" },
    { icon: faFacebook, url: "https://www.facebook.com/iamvivekkj" },
    { icon: faTelegram, url: "https://www.t.me/iamvivekkj" },
    { icon: faMastodon, url: "https://fosstodon.org/@vivekkj" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-fg/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className={`${styles.hero} relative z-10 max-w-7xl mx-auto w-full`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="text-xl text-primary-fg font-medium tracking-wide">HELLO THERE!</h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Vivek K J</span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-300 font-light h-[40px]">
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Free Software Enthusiast',
                      'Full Stack Developer',
                      'Open Source Contributor'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-fg w-5" />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary-fg w-5" />
                <a href="mailto:contact@vivekkj.in" className="hover:text-white transition-colors">
                  contact@vivekkj.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-fg hover:text-white transition-all duration-300 border border-white/10 hover:scale-110"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </motion.a>
              ))}
              
              {/* Matrix Link */}
              <motion.a 
                href="https://matrix.to/#/@vivekkj:kde.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-fg hover:text-white transition-all duration-300 border border-white/10 hover:scale-110"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 27.9 32"
                >
                  <path d="M27.1 31.2V.7h-2.19v-.732h3.04v32h-3.04v-.732zM8.23 10.4v1.54h.044a4.486 4.486 0 011.49-1.37c.58-.323 1.25-.485 1.99-.485.72 0 1.38.14 1.97.42.595.279 1.05.771 1.36 1.48.338-.5.796-.941 1.38-1.32.58-.383 1.27-.574 2.06-.574.602 0 1.16.074 1.67.22.514.148.954.383 1.32.707.366.323.653.746.859 1.27.205.522.308 1.15.308 1.89v7.63h-3.13v-6.46c0-.383-.015-.743-.044-1.08a2.302 2.302 0 00-.242-.882 1.47 1.47 0 00-.584-.596c-.257-.146-.606-.22-1.05-.22-.44 0-.796.085-1.07.253-.272.17-.485.39-.639.662a2.649 2.649 0 00-.308.927 7.075 7.075 0 00-.078 1.05v6.35h-3.13v-6.4c0-.338-.007-.673-.021-1a2.826 2.826 0 00-.188-.916 1.408 1.408 0 00-.55-.673c-.258-.168-.636-.253-1.14-.253a2.334 2.334 0 00-.584.1 1.95 1.95 0 00-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.36v6.62h-3.13v-11.4zM.936.732v30.5h2.19v.732H.086v-32h3.03v.732z" />
                </svg>
              </motion.a>

              {/* PGP Key Link */}
              <motion.a 
                href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0179263E2020E4071574073A5FF4BB3EA53C5DF"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-fg hover:text-white transition-all duration-300 border border-white/10 hover:scale-110"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <FontAwesomeIcon icon={faKey} size="sm" />
              </motion.a>
            </div>

            {/* Call to Action Buttons */}
            <motion.div 
              className="flex flex-col md:flex-row gap-6 items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a 
                href="/resume.pdf" 
                className="group relative px-8 py-3 bg-primary-fg rounded-full text-white font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(22,91,220,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a
                href="https://www.buymeacoffee.com/vivekkj"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-105"
              >
                <ExportedImage
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  width={150}
                  height={45}
                  loading="lazy"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="order-1 md:order-2 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="absolute inset-4 bg-[#0A0A0B] rounded-full z-10 flex items-center justify-center border border-white/10">
                <div className="w-[95%] h-[95%] rounded-full overflow-hidden relative">
                  <ExportedImage
                    src="/images/avatar.jpg"
                    alt="Vivek K J"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <motion.div 
                className="absolute inset-0 z-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0B] rounded-full border border-white/10 flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xs">⚛️</span>
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#0A0A0B] rounded-full border border-white/10 flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xs">🍥</span>
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0B] rounded-full border border-white/10 flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xs">📱</span>
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0B] rounded-full border border-white/10 flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xs">🔥</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
