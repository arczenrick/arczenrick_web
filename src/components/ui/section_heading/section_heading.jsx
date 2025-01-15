import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";

const SectionHeading = ({ smallHead, center, mainHead, subHead }) => {
  return (
    <div className={`${styles.sectionHead} ${center ? styles.centered : ""}`}>
      <div className={styles.SmallHeading}>
        <p className={fonts.font1}>
          <span>&#x2022;</span>
          {smallHead}
        </p>
      </div>
      <h2 className={fonts.font1}>
        {mainHead}
        <br />
        <span>{subHead}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
