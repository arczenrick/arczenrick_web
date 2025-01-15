import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import {  List } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import Link from "next/link";

const ServicesSection = () => {
  const SERVICES = [
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
    },
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
    },
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
    },
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
    },
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
    },
    {
      title: "Website Design",
      icon: <List />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.consectetur adipisicing elit. Dolor, quas.",
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
