import React, { useState } from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
const AboutSection = ({noCont}) => {
  const tabs = [
    {
      title: "Our Mission",
      component: (
        <div>
          <p>
            Our mission is to deliver exceptional IT solutions that empower
            businesses to achieve their full potential in the digital age.
          </p>
          <p>We are committed to:</p>
          <ul>
            <li>
              <p>
                comDriving Innovation: Crafting cutting-edge technologies and
                strategies that transform ideas into impactful digital
                realities.
              </p>
              <p>
                Empowering Growth: Equipping businesses with tools and solutions
                that enhanceperformance, scalability, and success.
              </p>
              <p>Creating Value & Fostering Collaboration</p>
            </li>
          </ul>
          <p>
            <small>
              With a passion for technology and a focus on results, we aim to be
              the catalyst for our clients’digital transformation and long-term
              success.
            </small>
          </p>
        </div>
      ),
    },
    {
      title: "Our Vision",
      component: (
        <div>
          <p>
            To be a trailblazer in the IT industry, empowering businesses
            with innovative,reliable, and impactful digital solutions that drive
            growth, fostertransformation, and create lasting value in a
            technology-driven world.
          </p>
          <p>
            We aspire to redefine possibilities, bridge the gap between
            innovation andexecution, and become the go-to partner for businesses
            seeking to thrive inthe digital era. By putting creativity,
            collaboration, and excellence at the heartof everything we do, we
            aim to shape a future where technology empowerssuccess for all.
          </p>
        </div>
      ),
    },
    {
      title: "Value",
      component: (
        <div>
          <p>
            Arczenrick is a professional services company that provides a wide
            range of services and solutions in strategy, consulting, digital,
            technology, and operations. The company helps organizations to
            improve their performance and create sustainable value for their
            stakeholders. Some examples of the specific services and solutions
            that Arczenrick provides include:
          </p>
          <ul>
            <li><p>Strategy development and implementation</p></li>
            <li><p>Digital transformation and optimization</p></li>
            <li><p>Technology implementation and management</p></li>
            <li><p>Operations improvement and optimization</p></li>
            <li><p>Supply chain and logistics optimization</p></li>
          </ul>
        </div>
      ),
    },
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const currentTab = tabs[currentTabIndex];

  return (
    <section className={styles.AboutSection}>
      <CustomContainer noCont={noCont}>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos='fade-right'>
            <div className={styles.tabs}>
              {tabs.map((t, i) => (
                <div
                  key={t.title}
                  onClick={() => {
                    setCurrentTabIndex(i);
                  }}
                  className={currentTabIndex === i ? styles.active : ""}
                >
                  {t.title}
                </div>
              ))}
            </div>
            <div className={styles.cont}>{currentTab.component}</div>
          </div>
          <div className={styles.right} data-aos='fade-left'>
            <div className={styles.img}>
              <Image src="/assets/images/about_img.jpg" alt="about_img" fluid />
              <div>
                <h3 className={fonts.font1}>10</h3>
                <p>
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
