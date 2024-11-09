import React from "react";
import Navbar from "./Navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from "./Footer";
config.autoAddCss = false; /* eslint-disable import/first */

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
