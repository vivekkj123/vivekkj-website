import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";
import React from "react";
import LoadingLayout from "../components/LoadingLayout";
import { useRouter } from "next/router";

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
