import React, { useEffect, useState } from "react";
import { Grid, HeartFill } from "react-bootstrap-icons";
import styles from "./loading_screen.module.scss";
import { Image } from "react-bootstrap";

const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  if (show) {
    return (
      <div className={styles.LoadingScreen}>
        <Image src="/logo/logo.png" alt="about_img" fluid width={75} />
      </div>
    );
  }

  return null;
};

export default LoadingScreen;
