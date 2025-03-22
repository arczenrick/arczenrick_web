import React from "react";
import styles from "./about.module.scss";
import PageHead from "@/components/ui/page_head/page_head";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import ServicesSection from "../home/sections/services/services";
import ClientsSection from "../home/sections/clients/clients";
import AboutSection from "../home/sections/about/about";

const AboutScreen = () => {
  return (
    <div className={styles.AboutScreen}>
      <PageHead head="Who We Are?" page="About" />
      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeading
            smallHead="About Arczenrick"
            mainHead={"Crafting Digital"}
            subHead={"Experience"}
            caption="Welcome to Arczenrick, where innovation meets excellence! Born from the drive and creativity of seasoned freelancers, we’ve evolved into a powerhouse IT company dedicated to empowering businesses with cutting-edge technology and transformative solutions."
          />
          <br />
          <br />
          <div className={styles.img}>
            <Image src="/assets/images/abt.jpg" fluid alt="abt" />
            <div>
              <h3 className={fonts.font1}>1</h3>
              <p>
                Year of <br />
                Experience
              </p>
            </div>
          </div>
        </div>

        <br />
        <AboutSection noCont isAbtPage/>
        <div>
          <Row
            style={{
              width: "99%",
            }}
          >
            <Col xs={12} lg={5}>
              <Image src="/assets/images/abt2.jpg" alt="abt2" fluid />
            </Col>

            <Col xs={12} lg={7}>
              <div className={styles.aRight}>
                <SectionHeading
                  smallHead="Why Us?"
                  mainHead="Discover Our"
                  subHead={"Capabilities"}
                  caption="From crafting stunning websites to revolutionizing your digital presence, we’re here to turn your challenges into opportunities. Our expertise spans Website Development & Design, Digital Marketing, Strategy Development, Digital Transformation, Technology Management, Operations Optimization, and Supply Chain Solutions—delivering tailored strategies that propel your business to the forefront of the digital age."
                />
                <br />
              </div>
            </Col>
          </Row>
        </div>
        <ServicesSection noHead />

        <br />
        <br />
      </CustomContainer>
      <div>
        <ClientsSection />
      </div>
      <CustomContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
      </CustomContainer>
    </div>
  );
};

export default AboutScreen;
