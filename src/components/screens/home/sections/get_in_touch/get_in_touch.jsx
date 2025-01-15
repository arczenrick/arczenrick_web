import React from "react";
import styles from "./get_in_touch.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { ArrowRight } from "react-bootstrap-icons";
import fonts from "@/styles/fonts";
import Link from "next/link";

const GetInTouchSection = () => {
  return (
    <section className={styles.GetInTouchSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1 className={fonts.font1}>
            DO YOU HAVE ANY
            <br />
            <span>PROJECT?</span>
          </h1>
          <Link href="/contact">
            <div className={styles.cta}>
              GET IN TOUCH <ArrowRight />
            </div>
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default GetInTouchSection;
