import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [NavbarToggled, setNavbarToggled] = React.useState(false);
  const links = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Posts",
      link: "/posts",
    },
    {
      name: "Contact Me",
      link: "/#contact",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
  ];
  return (
    <div className={styles.Navbar}>
      <span
        className="md:hidden block bg-primary-bg text-white"
        onClick={() => setNavbarToggled(!NavbarToggled)}
      >
        <i
          id="hambuger"
          className={`bx ${
            NavbarToggled ? "bx bx-x" : " bx-menu"
          } text-white cursor-pointer text-3xl mx-10 mt-8`}
        ></i>
      </span>
      <nav
        className={`lg:flex ${
          NavbarToggled
            ? "flex-col transition-all ease-out duration-500"
            : "hidden"
        }  flex justify-center items-center text-base text-white sm:text-xl`}
      >
        {links.map((link) => (
          <Link
          onClick={()=> setNavbarToggled(false)}
          key={link.name} href={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
