import {
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faMastodon,
  faTelegram,
  faTwitter
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
    { icon: faTwitter, url: "https://www.twitter.com/iamvivekkj" },
    { icon: faInstagram, url: "https://www.instagram.com/iamvivekkj" },
    { icon: faFacebook, url: "https://www.facebook.com/iamvivekkj" },
    { icon: faTelegram, url: "https://www.t.me/iamvivekkj" },
    { icon: faMastodon, url: "https://fosstodon.org/@vivekkj" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className={styles.hero}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m <span className={styles.heroName}>Vivek K J</span>
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer & Open Source Enthusiast
            </p>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#118;&#105;&#118;&#101;&#107;&#107;&#106;&#046;&#105;&#110;</a>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.Social}>
              <div className="flex flex-wrap gap-4 p-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-fg transition-colors"
                  >
                    <FontAwesomeIcon icon={link.icon} size="lg" />
                  </a>
                ))}
                
                {/* Matrix Link */}
                <a 
                  href="https://matrix.to/#/@vivekkj:kde.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-fg flex items-center justify-center h-10 w-10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-current my-1"
                    viewBox="0 0 27.9 32"
                  >
                    <path d="M27.1 31.2V.7h-2.19v-.732h3.04v32h-3.04v-.732zM8.23 10.4v1.54h.044a4.486 4.486 0 011.49-1.37c.58-.323 1.25-.485 1.99-.485.72 0 1.38.14 1.97.42.595.279 1.05.771 1.36 1.48.338-.5.796-.941 1.38-1.32.58-.383 1.27-.574 2.06-.574.602 0 1.16.074 1.67.22.514.148.954.383 1.32.707.366.323.653.746.859 1.27.205.522.308 1.15.308 1.89v7.63h-3.13v-6.46c0-.383-.015-.743-.044-1.08a2.302 2.302 0 00-.242-.882 1.47 1.47 0 00-.584-.596c-.257-.146-.606-.22-1.05-.22-.44 0-.796.085-1.07.253-.272.17-.485.39-.639.662a2.649 2.649 0 00-.308.927 7.075 7.075 0 00-.078 1.05v6.35h-3.13v-6.4c0-.338-.007-.673-.021-1a2.826 2.826 0 00-.188-.916 1.408 1.408 0 00-.55-.673c-.258-.168-.636-.253-1.14-.253a2.334 2.334 0 00-.584.1 1.95 1.95 0 00-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.36v6.62h-3.13v-11.4zM.936.732v30.5h2.19v.732H.086v-32h3.03v.732z" />
                  </svg>
                </a>

                {/* PGP Key Link */}
                <a 
                  href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0179263E2020E4071574073A5FF4BB3EA53C5DF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-fg transition-colors"
                >
                  <FontAwesomeIcon icon={faKey} size="lg" />
                </a>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
              <a
                className="lg:mx-1 mx-auto"
                href="https://www.buymeacoffee.com/vivekkj"
                target="_blank"
                rel="noreferrer"
              >
                <ExportedImage
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  width={150}
                  height={60}
                />
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-primary-fg px-6 rounded-lg text-white font-bold flex items-center h-10 justify-center text-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="order-1 md:order-2 relative flex items-center justify-center">
            <div className="overflow-hidden p-4">
              <ExportedImage
                src="/images/avatar.jpg"
                alt="Vivek K J"
                width={200}
                height={200}
                className="object-cover object-top rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
