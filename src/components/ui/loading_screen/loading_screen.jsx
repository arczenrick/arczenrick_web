import React from "react";
import { Grid, HeartFill } from "react-bootstrap-icons";
import styles from "./loading_screen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.LoadingScreen}>
      <Grid />
    </div>
  );
};

export default LoadingScreen;
