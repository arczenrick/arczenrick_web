import React from "react";
import CustomContainer from "../custom_container/custom_container";
import fonts from "@/styles/fonts";
import styles from "./page_head.module.scss";

const PageHead = ({ head = "", page='' }) => {
  return (
    <CustomContainer noPadding>
      <div className={styles.PageHead}>
        <h1 className={fonts.font1} data-aos='fade-down'>{head.toUpperCase()}</h1>
        <p data-aos='fade-up'>
          ARCZENRICK <span>/ {page.toUpperCase() || head.toUpperCase()}</span>
        </p>
      </div>
    </CustomContainer>
  );
};

export default PageHead;
