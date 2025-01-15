import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const BannerSection = () => {
  return (
    <section className={styles.BannerSection}>
      <div className={styles.circle}></div>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.top}>
            <h1 className={fonts.font1}>PASSIONATE WEB</h1>
            <div className={styles.rCircles}>
              <div className={`${styles.rCircle} ${styles.rCircleBorder}`} />

              <div className={`${styles.rCircle} ${styles.rCircleFill}`} />
            </div>
          </div>
          <div className={styles.img}>
            <h1 className={fonts.font1}>
              <span>DESIGN</span> AGENCY
            </h1>

            <Image src="/assets/images/hero.jpg" alt="hero" fluid />
          </div>

          <div className={styles.bottom}>
            <div className={styles.left}></div>
            <SectionHeading
              smallHead={"ABOUT ARCZENRICK"}
              mainHead={"CRAFTING DIGITAL"}
              subHead={"EXCELLENCE"}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BannerSection;
