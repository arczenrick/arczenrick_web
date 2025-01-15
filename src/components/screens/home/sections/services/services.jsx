import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { List } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import Link from "next/link";

const ServicesSection = () => {
  const SERVICES = [
    {
      title: "Website Development & Design",
      icon: <List />,
      desc: "Creating visually stunning, user-friendly websites tailored to your needs.",
    },
    {
      title: "Digital Marketing",
      icon: <List />,
      desc: "Boosting online presence with SEO, social media, and ROI-driven strategies.",
    },
    {
      title: "Strategy Development",
      icon: <List />,
      desc: "Crafting forward-thinking strategies to achieve your business goals.",
    },
    {
      title: "Digital Transformation",
      icon: <List />,
      desc: "Enhancing efficiency and scalability with cutting-edge technologies.",
    },
    {
      title: "Technology Management",
      icon: <List />,
      desc: "Ensuring your IT infrastructure supports growth and success.",
    },
    {
      title: "Operations Optimization",
      icon: <List />,
      desc: "Streamlining processes to improve productivity and reduce costs.",
    },
    {
      title: "Supply Chain Solutions",
      icon: <List />,
      desc: "Optimizing logistics for timely deliveries and cost efficiency.",
    },
  ];

  return (
    <section className={styles.ServicesSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.top}>
            <SectionHeading
              smallHead={"Core Services"}
              mainHead={"DISCOVER OUR"}
              subHead={"CAPABILITIES"}
            />
          </div>
          <br />

          <p className={styles.cap}>
            At arczenrick, we deliver innovative IT solutions that empower
            businesses to excel in the digital era. As a full-service technology
            and consulting firm, we transform ideas into impactful digital
            experiences and operational excellence.
          </p>

          <div className={styles.wrap}>
            <Row>
              {SERVICES.map((s) => {
                return (
                  <Col key={s.title} xs={12} lg={6}>
                    <Link href="/" className={styles.service}>
                      <div className={styles.scLeft}>{s.icon}</div>
                      <div className={styles.scRight}>
                        <h3 className={fonts.font1}>{s.title}</h3>
                        <p>{s.desc}</p>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesSection;
