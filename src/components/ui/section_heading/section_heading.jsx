import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";

const SectionHeading = ({
  smallHead = "",
  center,
  mainHead = "",
  subHead = "",
  caption,
}) => {
  return (
    <div className={`${styles.sectionHead} ${center ? styles.centered : ""}`}>
      <div className={styles.SmallHeading}>
        <p className={fonts.font1}>
          <span>&#x2022;</span>
          {smallHead.toUpperCase()}
        </p>
      </div>
      <h2 className={fonts.font1}>
        {mainHead.toUpperCase()}
        <br />
        <span>{subHead.toUpperCase()}</span>
      </h2>
      <br />
      <p className={styles.cap}>{caption}</p>
    </div>
  );
};

export default SectionHeading;
