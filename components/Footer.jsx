import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faMastodon,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Footer.module.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <ExportedImage
              src="/icon-512x512.png"
              alt="Logo"
              width={100}
              height={100}
            />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Vivek K J</h3>
              <p className="text-gray-300">
                Full Stack Developer & Open Source Enthusiast
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/posts"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/iamvivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link
                href="https://www.github.com/vivekkj123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
              <Link
                href="https://www.gitlab.com/vivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGitlab} size="lg" />
              </Link>
              <Link
                href="https://www.twitter.com/iamvivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
              <Link
                href="https://www.instagram.com/iamvivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
              <Link
                href="https://www.facebook.com/iamvivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <Link
                href="https://www.t.me/iamvivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </Link>
              <Link
                href="https://fosstodon.org/@vivekkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMastodon} size="lg" />
              </Link>
              <Link
                href="https://matrix.to/#/@vivekkj:kde.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 27.9 32"
                >
                  <path d="M27.1 31.2V.7h-2.19v-.732h3.04v32h-3.04v-.732zM8.23 10.4v1.54h.044a4.486 4.486 0 011.49-1.37c.58-.323 1.25-.485 1.99-.485.72 0 1.38.14 1.97.42.595.279 1.05.771 1.36 1.48.338-.5.796-.941 1.38-1.32.58-.383 1.27-.574 2.06-.574.602 0 1.16.074 1.67.22.514.148.954.383 1.32.707.366.323.653.746.859 1.27.205.522.308 1.15.308 1.89v7.63h-3.13v-6.46c0-.383-.015-.743-.044-1.08a2.302 2.302 0 00-.242-.882 1.47 1.47 0 00-.584-.596c-.257-.146-.606-.22-1.05-.22-.44 0-.796.085-1.07.253-.272.17-.485.39-.639.662a2.649 2.649 0 00-.308.927 7.075 7.075 0 00-.078 1.05v6.35h-3.13v-6.4c0-.338-.007-.673-.021-1a2.826 2.826 0 00-.188-.916 1.408 1.408 0 00-.55-.673c-.258-.168-.636-.253-1.14-.253a2.334 2.334 0 00-.584.1 1.95 1.95 0 00-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.36v6.62h-3.13v-11.4zM.936.732v30.5h2.19v.732H.086v-32h3.03v.732z" />
                </svg>
              </Link>
              <Link
                href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0179263E2020E4071574073A5FF4BB3EA53C5DF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faKey} size="lg" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>
            🄯 {currentYear} Vivek K J <br /> All the content on this website is
            licensed under the{" "}
            <Link href="http://creativecommons.org/licenses/by-nc/4.0/">
              CC BY-NC 4.0 Creative Commons License
            </Link>
            , unless stated otherwise.
            <br />
            <Link href="https://github.com/vivekkj123/vivekkj-website">
              Source Code
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
