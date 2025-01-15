import React from "react";
import styles from "./custom_section.module.scss";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";

const CustomSection = ({ children, head, variant = 1 }) => {
  return (
    <div className={`${styles.CustomSection} ${styles[`v_${variant}`]}`}>
      <div className={styles.head}>
        <h2  data-aos="fade-down">
          {head}
        </h2>
        <Image
          data-aos="fade-up"
          src={`/assets/${variant === 1 ? "divider.svg" : "divider_white.svg"}`}
          width={350}
          alt="divider"
        />
      </div>
      {children}
    </div>
  );
};

export default CustomSection;
