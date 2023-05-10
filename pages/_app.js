import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";
import React from "react";
import LoadingLayout from "../components/LoadingLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <title>VIVEK K J | വിവേക് കെ ജെ</title>
        <meta
          name="description"
          content="Personal website of Vivek K J. Vivek K J is a professional full stack web developer, and a programmer.Vivek is a Free Software Contributor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vivekkj.codes" />
        <meta property="og:title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <meta
          property="og:description"
          content="Personal website of Vivek K J"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/9vV0Lcd/VIVEK-K-J.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <meta
          property="twitter:description"
          content="Personal website of Vivek K J"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/9vV0Lcd/VIVEK-K-J.jpg"
        />
        <meta
          content="vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source"
          name="keywords"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#fef303" />
      </Head>
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
