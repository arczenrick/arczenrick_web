import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

import styles from "../styles/Home.module.scss";
import fonts from "@/styles/fonts";
import Layout from "@/components/layout/layout";
import LoadingScreen from "@/components/ui/loading_screen/loading_screen";

export default function App({ Component }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className={`${styles.main} ${fonts.MainFont}`}>
        <Layout>
          <Component />
        </Layout>
      </main>
    </>
  );
}
