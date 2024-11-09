import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import ExportedImage from "next-image-export-optimizer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const links = [
    { name: "Home", link: "/#" },
    { name: "Skills", link: "/#skills" },
    { name: "Posts", link: "/posts" },
    { name: "Projects", link: "/#projects" },
    { name: "About", link: "/#about" },
    { name: "Contact", link: "/#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.Navbar}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold relative z-50">
          <ExportedImage src="/icon-512x512.png" alt="Logo" width={30} height={30} />
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 backdrop-blur-xl bg-black/90 z-40 md:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 bg-[rgb(0,0,0,0.8)]">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                onClick={handleLinkClick}
                className="text-2xl text-gray-300 hover:text-white transition-all hover:scale-110"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
