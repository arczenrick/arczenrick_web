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
      name: "Hari",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "I am delighted to announce that our team successfully completed a project titled 'Tryaks' in collaboration with Team Arczenrick for my e-commerce garment website. I was impressed by their exceptional work, innovative ideas, and friendly, talented approach."
    },
    {
      id: "dgsbd",
      name: "Donya Shree Aishwarya",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Greetings, I am Donya Shree Aishwarya. The team successfully designed and implemented multiple bots tailored to our team's needs, substantially streamlining our workflow. Additionally, they developed advanced bots capable of data analysis and automated actions, enhancing our overall productivity."
    },
  ];

  const testimonials2 = [
    {
      id: "zcdvzdv",
      name: "Meena",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Hi, I'm Meena. I own and operate multiple bakeries and a medium-sized restaurant in town called Baker Fry. This team provided me with innovative ideas to transform my business into a digitally-driven success. They guided me through the process, handling everything from digital analysis to implementation of new technologies. Step by step, they helped me bring my business up to date. I'm thrilled to report that my business has started to flourish, with a noticeable increase in growth rates."
    },
    {
      id: "srgw",
      name: "Team Mercstn",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "Hi, I'm Teju. I've known this team since their freelancing days, before they started up. They're working incredibly hard to achieve success, and their talent is truly impressive. For my educational institute, Mercstn, they developed a fantastic website and dashboard, and much more. They're absolutely awesome! I'm sure they'll receive more recognition and good wishes soon. Congratulations, Team Arczenrick!"
    },
    
    {
      id: "sdivsi",
      name: "Krish Agrawal",
      title: "Fashion Designer",
      subject: "Super & Reliable Service",
      text: "We were impressed by Team Arczenrick's professionalism and expertise in developing the Bus Book App for Thiruchitrambalam Travels. The app has not only improved our operational efficiency but also provided a superior experience for our customers. Their ability to understand our requirements, provide innovative solutions, and deliver results on time has been outstanding. We wholeheartedly recommend Team Arczenrick for any technology-related projects."
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
                            {/* {test.title.toUpperCase()} */}
                          </p>
                        </div>
                      </div>
                      <h3 className={fonts.font1}>
                        {/* &quot;{test.subject.toUpperCase()}&quot; */}
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
