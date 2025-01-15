import React from "react";
import styles from "./custom_button.module.scss";
import { Spinner } from "react-bootstrap";
import Link from "next/link";

const CustomButton = ({
  variant = 1,
  children,
  onClick = () => {},
  disabled,
  isLoading,
  href,
  target,
}) => {
  if (href) {
    return (
      <Link href={href} target={target}>
        <button
          className={`${styles.customButton} ${styles[`v${variant}`]}`}
          onClick={onClick}
          disabled={disabled || isLoading}
        >
          {isLoading ? "Loading..." : children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.customButton} ${styles[`v${variant}`]}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
