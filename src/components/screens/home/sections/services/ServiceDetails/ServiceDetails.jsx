import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageHead from "@/components/ui/page_head/page_head";
import SERVICES from "@/constants/services";
import { useRouter } from "next/router";
import React from "react";
import styles from "./ServiceDetails.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import fonts from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { PencilSquare } from "react-bootstrap-icons";
import ServicesSection from "../services";

const ServiceDetailsScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentService = SERVICES.find((s) => s.id === id);

  return (
    <div className={styles.ServiceDetailsScreen}>
      <PageHead head={currentService?.title} />
      <CustomContainer noPadding>
        <div className={styles.cont}>
          <div className={styles.top}>
            <Row>
              <Col xs={12} md={6}>
                <div className={styles.lh} data-aos="fade-right">
                  <SectionHeading
                    smallHead={currentService?.title}
                    subHead="At Arczenrick"
                    caption={
                      <>
                        {currentService?.desc2}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat facere expedita fuga dolore culpa quo ipsa
                        eaque omnis atque, corporis ad. Consequatur similique
                        illo quia soluta ratione tenetur amet modi magnam
                        voluptatum eius at temporibus iusto cum aut placeat
                        aliquid perspiciatis dolorem nam asperiores distinctio,
                        quae natus deserunt repellat enim.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat facere expedita fuga dolore culpa quo ipsa
                        eaque omnis atque, corporis ad. Consequatur similique
                        illo quia soluta ratione tenetur amet modi magnam
                        voluptatum eius at temporibus iusto cum aut placeat
                        aliquid perspiciatis dolorem nam asperiores distinctio,
                        quae natus deserunt repellat enim.
                      </>
                    }
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Image
                  src={`/assets/images/services/${currentService?.img}`}
                  alt={currentService?.title}
                  fluid
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className={styles.desc}>
            <Row>
              <Col xs={12} md={7}>
                <div className={styles.bh} data-aos="fade-right">
                  <h3 className={fonts.font1}>{currentService?.desc2}</h3>
                  <ul>
                    {currentService?.points &&
                      currentService?.points.map((point) => {
                        return (
                          <li key={point.head}>
                            <h4>{point.head}</h4>
                            <p>{point.text}</p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Col>

              <Col>
                <div className={styles.right} data-aos="fade-left">
                  <div>
                    <h5>{currentService?.title}</h5>
                    <p>{currentService?.desc2}</p>
                    <CustomButton href="/contact">
                      LET&apos;S TALK &nbsp;
                      <PencilSquare />
                    </CustomButton>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </CustomContainer>
      <ServicesSection />
    </div>
  );
};

export default ServiceDetailsScreen;
