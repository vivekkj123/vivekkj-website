import React from "react";
import Navbar from "./Navbar";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
