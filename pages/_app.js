import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import LoadingLayout from "../components/LoadingLayout";
import "../styles/globals.css";

const PacmanLoader = dynamic(() => import("react-spinners/PacmanLoader"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

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
  }, [router]);
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
          content="https://i.ibb.co/fz775kXd/VIVEK-K-J-02-01-2025-06-29-PM.jpg"
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
          content="https://i.ibb.co/fz775kXd/VIVEK-K-J-02-01-2025-06-29-PM.jpg"
        />
        <meta
          content="vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source"
          name="keywords"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>

        <meta name="theme-color" content="#fef303" />
        <link rel="preload" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript><link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" /></noscript>
      </Head>

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
