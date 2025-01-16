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
  const head = mainHead.toUpperCase();

  return (
    <div className={`${styles.sectionHead} ${center ? styles.centered : ""}`}>
      <div className={styles.SmallHeading} data-aos="fade-left">
        <p className={fonts.font1}>
          <span>&#x2022;</span>
          {smallHead.toUpperCase()}
        </p>
      </div>
      <div className={styles.mainHead}>
        {mainHead.split("").map((c, i) => {
          return (
            <div
              key={`char_${Math.random()}`}
              className={fonts.font1}
              data-aos="fade-left"
              data-aos-delay={i * 50}
            >
              <h2>{c === " " ? <>&nbsp;</> : c}</h2>
            </div>
          );
        })}
      </div>
      <div className={styles.mainHead}>
        {subHead.split("").map((c, i) => {
          return (
            <div
              key={`char_${Math.random()}`}
              className={fonts.font1}
              data-aos="fade-left"
              data-aos-delay={mainHead.length * 50 + i * 50}
            >
              <h2>
                <span>{c === " " ? <>&nbsp;</> : c}</span>
              </h2>
            </div>
          );
        })}
      </div>
      {/* <h2 className={fonts.font1}>
        {mainHead}
        <br />
        <span>{subHead}</span>
      </h2> */}
      <br />
      <p className={styles.cap} data-aos='fade-up' >{caption}</p>
    </div>
  );
};

export default SectionHeading;
