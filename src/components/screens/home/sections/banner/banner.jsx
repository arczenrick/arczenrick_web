import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const BannerSection = () => {
  const topHead = "PASSIONATE WEB";

  const spanHead = "DESIGN";

  const bHead = "AGENCY";

  const initialDelay = 100;

  return (
    <section className={styles.BannerSection}>
      <div className={styles.circle}></div>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.top}>
            {/* <h1 className={fonts.font1}></h1> */}
            <div className={styles.head}>
              {topHead.split("").map((c, i) => {
                return (
                  <div
                    key={`banner_char_${Math.random()}`}
                    data-aos="fade-left"
                    data-aos-delay={initialDelay + i * 50}
                  >
                    <h1 className={fonts.font1}>
                      {c === " " ? <>&nbsp;</> : c}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className={styles.rCircles}>
              <div className={`${styles.rCircle} ${styles.rCircleBorder}`} />

              <div className={`${styles.rCircle} ${styles.rCircleFill}`} />
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.text}>
              {spanHead.split("").map((c, i) => {
                return (
                  <div
                    key={`span_char_${Math.random()}`}
                    data-aos="fade-left"
                    data-aos-delay={initialDelay + topHead.length * 50 + i * 50}
                  >
                    <h1 className={fonts.font1}>
                      <span>{c === " " ? <>&nbsp;</> : c}</span>
                    </h1>
                  </div>
                );
              })}
              <>&nbsp; &nbsp;</>
              {bHead.split("").map((c, i) => {
                return (
                  <div
                    key={`span_char_${Math.random()}`}
                    data-aos="fade-left"
                    data-aos-delay={
                      initialDelay +
                      topHead.length * 50 +
                      spanHead.length * 50 +
                      i * 50
                    }
                  >
                    <h1 className={fonts.font1}>
                      {c === " " ? <>&nbsp;</> : c}
                    </h1>
                  </div>
                );
              })}
              {/* <span>DESIGN</span> AGENCY */}
            </div>

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
