import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";
import Avatar from "/public/images/avatar.png";
import handWave from "/public/images/hi.gif";
const Hero = () => {
  return (
    <section
      className={`${styles.hero} leading-loose grid lg:grid-cols-hero-grid pt-20 text-center lg:text-left`}
    >
      {" "}
      <div
        className={`${styles.Social} 
      flex lg:order-1 flex-row h-2 lg:flex-col mx-auto items-center px-8 order-3
       lg:text-4xl text-2xl`}
      >
        <a href="https://www.linkedin.com/in/iamvivekkj">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/vivekkj123">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.gitlab.com/vivekkj">
          <i className="fa fa-gitlab"></i>
        </a>
        <a href="https://www.twitter.com/iamvivekkj">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/iamvivekkj">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/iamvivekkj">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.t.me/iamvivekkj">
          <i className="fa fa-telegram"></i>
        </a>
        <a href="https://fosstodon.org/@vivekkj">
          <i className="fa fa-brands fa-mastodon"></i>
        </a>
        <a href="https://matrix.to/#/@vivekkj:kde.org">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-auto fill-white hover:fill-primary-fg inline"
            viewBox="0 0 27.9 32"
          >
            <path
              d="M27.1 31.2V.7h-2.19v-.732h3.04v32h-3.04v-.732zM8.23 10.4v1.54h.044a4.486 4.486 0 011.49-1.37c.58-.323 1.25-.485 1.99-.485.72 0 1.38.14 1.97.42.595.279 1.05.771 1.36 1.48.338-.5.796-.941 1.38-1.32.58-.383 1.27-.574 2.06-.574.602 0 1.16.074 1.67.22.514.148.954.383 1.32.707.366.323.653.746.859 1.27.205.522.308 1.15.308 1.89v7.63h-3.13v-6.46c0-.383-.015-.743-.044-1.08a2.302 2.302 0 00-.242-.882 1.47 1.47 0 00-.584-.596c-.257-.146-.606-.22-1.05-.22-.44 0-.796.085-1.07.253-.272.17-.485.39-.639.662a2.649 2.649 0 00-.308.927 7.075 7.075 0 00-.078 1.05v6.35h-3.13v-6.4c0-.338-.007-.673-.021-1a2.826 2.826 0 00-.188-.916 1.408 1.408 0 00-.55-.673c-.258-.168-.636-.253-1.14-.253a2.334 2.334 0 00-.584.1 1.95 1.95 0 00-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.36v6.62h-3.13v-11.4zM.936.732v30.5h2.19v.732H.086v-32h3.03v.732z"
              transform="translate(-.095 .005)"
            ></path>
          </svg>
        </a>
        <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/D0179263E2020E4071574073A5FF4BB3EA53C5DF">
          <i className="fa fa-key"></i>
        </a>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="flex flex-col p-8 sm:p-32 justify-center order-2 lg:order-1"
      >
        <p className="text-4xl sm:text-7xl font-bold">
          Hey
          <Image
            className="inline-flex h-16 w-16 mx-2"
            src={handWave}
            alt="hand-wave-gif"
          />
          ,
          <br />
          I&apos;m{" "}
          <span
            className={`${styles.heroName} md:text-transparent text-primary-fg`}
          >
            Vivek K J
          </span>
        </p>

        <a
          className="mt-6 lg:mx-1 mx-auto"
          href="https://www.buymeacoffee.com/vivekkj"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="w-auto h-auto"
            src={"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"}
            alt="Buy Me A Coffee"
            height={60}
            width={217}
          />
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="10000"
        className="order-1 lg:h-[30rem] h-auto lg:order-2 justify-self-center flex p-4 sm:p-14 items-center bg-primary-fg rounded-full lg:rounded-none lg:rounded-l-full"
      >
        <Image
          className="rounded-full sm:h-96 sm:w-96 h-48 w-48 object-cover object-top"
          src={Avatar}
          priority
          alt="Vivek K J"
          height={1000}
        />
      </div>
    </section>
  );
};

export default Hero;
