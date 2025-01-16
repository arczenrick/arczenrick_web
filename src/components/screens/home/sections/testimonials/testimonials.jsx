import React from "react";
import styles from "./testimonials.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";

const TestimonialsSection = () => {
  const testimonials1 = [
    {
      id: "xxxjadnc",
      name: "Goladria Kim",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Ovix has been a game-changer for our online presence. Their website design and development team took our vision and turned it into a stunning reality. The results speak for themselves – our website has never looked better.",
    },
    {
      id: "dgsbd",
      name: "Goladria Kim",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Ovix has been a game-changer for our online presence. Their website design and development team took our vision and turned it into a stunning reality. The results speak for themselves – our website has never looked better.",
    },
  ];

  const testimonials2 = [
    {
      id: "srgw",
      name: "Goladria Kim",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Ovix has been a game-changer for our online presence. Their website design and development team took our vision and turned it into a stunning reality. The results speak for themselves – our website has never looked better.",
    },
    {
      id: "zcdvzdv",
      name: "Goladria Kim",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Ovix has been a game-changer for our online presence. Their website design and development team took our vision and turned it into a stunning reality. The results speak for themselves – our website has never looked better.",
    },
  ];

  return (
    <section className={styles.TestimonialsSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeading
            smallHead="TESTIMONIAL"
            mainHead={"HAPPY CLIENT"}
            subHead={"FEEDBACK"}
            center
          />
        </div>
        <div className={styles.wrap}>
          <Row>
            {testimonials1.map((test, idx) => {
              return (
                <Col key={test.id} xs={12} lg={idx % 2 ? 7 : 5}>
                  <div
                    className={styles.testimonial}
                    data-aos={idx % 2 ? "fade-left" : "fade-right"}
                  >
                    <div className={styles.top}>
                      <div className={styles.info}>
                        <Image
                          src="/assets/images/avatar.jpg"
                          alt="avatar"
                          width={75}
                        />
                        <div>
                          <h2 className={fonts.font1}>
                            {test.name.toUpperCase()}
                          </h2>
                          <p className={fonts.font1}>
                            {test.title.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <h3 className={fonts.font1}>
                        &quot;{test.subject.toUpperCase()}&quot;
                      </h3>
                    </div>
                    <div className={styles.text}>
                      <p>{test.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            {testimonials2.map((test, idx) => {
              return (
                <Col key={test.id} xs={12} lg={idx % 2 ? 5 : 7}>
                  <div
                    className={styles.testimonial}
                    data-aos={idx % 2 ? "fade-left" : "fade-right"}
                  >
                    <div className={styles.top}>
                      <div className={styles.info}>
                        <Image
                          src="/assets/images/avatar.jpg"
                          alt="avatar"
                          width={75}
                        />
                        <div>
                          <h2 className={fonts.font1}>
                            {test.name.toUpperCase()}
                          </h2>
                          <p className={fonts.font1}>
                            {test.title.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <h3 className={fonts.font1}>
                        &quot;{test.subject.toUpperCase()}&quot;
                      </h3>
                    </div>
                    <div className={styles.text}>
                      <p>{test.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;
