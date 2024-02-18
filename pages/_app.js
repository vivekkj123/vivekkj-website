import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import LoadingLayout from "../components/LoadingLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <title>VIVEK K J | വിവേക് കെ ജെ</title>
        <meta
          name="description"
          content="Personal website of Vivek K J. Vivek K J is a professional full stack web developer, and a programmer.Vivek is a Free Software Contributor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vivekkj.in" />
        <meta property="og:title" content="VIVEK K J | വിവേക് കെ ജെ" />
        <meta
          property="og:description"
          content="Personal website of Vivek K J"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/CW30z8f/Vivek-K-J.jpg"
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
          content="https://i.ibb.co/CW30z8f/Vivek-K-J.jpg"
        />
        <meta
          content="vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source"
          name="keywords"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#fef303" />
      </Head>
      <Script src="https://unpkg.com/akar-icons-fonts"></Script>
      
      {Loading ? (
        <LoadingLayout>
          <PacmanLoader loading={Loading} color="#fef303" />
        </LoadingLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </React.Fragment>
  );
}

export default MyApp;
