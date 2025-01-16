import React from "react";
import CustomContainer from "../custom_container/custom_container";
import fonts from "@/styles/fonts";
import styles from "./page_head.module.scss";

const PageHead = ({ head = "", page='' }) => {
  return (
    <CustomContainer noPadding>
      <div className={styles.PageHead}>
        <h1 className={fonts.font1}>{head.toUpperCase()}</h1>
        <p>
          ARCZENRICK <span>/ {page.toUpperCase() || head.toUpperCase()}</span>
        </p>
      </div>
    </CustomContainer>
  );
};

export default PageHead;
