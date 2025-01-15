import React, { useState } from "react";
import { ArrowUp, ChevronDown } from "react-bootstrap-icons";
import styles from "./scroll_button.module.scss";
import Link from "next/link";

const ScrollButton = () => {
  return (
    <Link href={"/"} className={styles.ScrollButton}>
      <ArrowUp />
    </Link>
  );
};

export default ScrollButton;
