import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import Link from "next/link";

const ServicesSection = ({ noHead }) => {
  const SERVICES = [
    {
      title: "Website Development & Design",
      id: "website_development",
      desc: "Creating visually stunning, user-friendly websites tailored to your needs.",
    },
    {
      title: "Digital Marketing",
      id: "digital_marketing",
      desc: "Boosting online presence with SEO, social media, and ROI-driven strategies.",
    },
    {
      title: "Strategy Development",
      id: "strategy_development",
      desc: "Crafting forward-thinking strategies to achieve your business goals.",
    },
    {
      title: "Digital Transformation",
      id: "digital_transformation",
      desc: "Enhancing efficiency and scalability with cutting-edge technologies.",
    },
    {
      title: "Technology Management",
      id: "technology_management",
      desc: "Ensuring your IT infrastructure supports growth and success.",
    },
    {
      title: "Operations Optimization",
      id: "operations_optimization",
      desc: "Streamlining processes to improve productivity and reduce costs.",
    },
    {
      title: "Supply Chain Solutions",
      id: "supply_chain",
      desc: "Optimizing logistics for timely deliveries and cost efficiency.",
    },
  ];

  if (!noHead) {
    return (
      <section className={styles.ServicesSection}>
        <CustomContainer>
          <div className={styles.cont}>
            <div className={styles.top}>
              <SectionHeading
                smallHead={"Core Services"}
                mainHead={"DISCOVER OUR"}
                subHead={"CAPABILITIES"}
                caption="At arczenrick, we deliver innovative IT solutions that empower
              businesses to excel in the digital era. As a full-service technology
              and consulting firm, we transform ideas into impactful digital
              experiences and operational excellence."
              />
            </div>
            <br />

            <div className={styles.wrap}>
              <Row>
                {SERVICES.map((s) => {
                  return (
                    <Col key={s.title} xs={12} lg={6}>
                      <Link
                        href={`/services/${s.id}`}
                        className={styles.service}
                      >
                        <div className={styles.scLeft}>
                          <Image
                            src={`/assets/icons/${s.id}.png`}
                            alt={s.title}
                            width={40}
                          />
                        </div>
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
  }

  return (
    <section className={styles.ServicesSection}>
      <div className={styles.cont}>
        <div className={styles.wrap}>
          <Row>
            {SERVICES.map((s) => {
              return (
                <Col key={s.title} xs={12} lg={6}>
                  <Link href={`/services/${s.id}`} className={styles.service}>
                    <div className={styles.scLeft}>
                      <Image
                        src={`/assets/icons/${s.id}.png`}
                        alt={s.title}
                        width={40}
                      />
                    </div>
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
    </section>
  );
};

export default ServicesSection;
