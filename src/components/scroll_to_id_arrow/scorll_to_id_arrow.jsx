import React from "react";
import styles from "./scorll_to_id_arrow.module.scss";
import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";

const ScrollToIdArrow = ({ id, text }) => {
  return (
    <div className={styles.arrow}>
      <Link href={`#${id}`}>
        <p>{text}</p>
        <ChevronDown />
      </Link>
    </div>
  );
};

export default ScrollToIdArrow;
