import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";
import React from "react";
import LoadingLayout from "../components/LoadingLayout";

function MyApp({ Component, pageProps }) {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);
  return (
    <React.Fragment>
      {Loaded ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoadingLayout>
          <PacmanLoader loading={!Loaded} color="#fef303" />
        </LoadingLayout>
      )}
    </React.Fragment>
  );
}

export default MyApp;
