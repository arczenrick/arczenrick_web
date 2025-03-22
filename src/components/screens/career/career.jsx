import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageHead from "@/components/ui/page_head/page_head";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React, { useState } from "react";
import styles from "./career.module.scss";
import fonts from "@/styles/fonts";
import Link from "next/link";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { Col, Row, Spinner } from "react-bootstrap";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import axios from "axios";
import { uploadFile } from "@/utils/firebase";

const CareerScreen = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    try {
      // const url = await uploadFile(file, "resumes");

      // console.log(url);

      const res = await axios.post("https://formspree.io/f/mrbpqggg", {
        email: values.email,
        message: JSON.stringify(values),
        resumeUrl: url,
      });

      alert("Thank You for choosing us. - Team Arczenrick");
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
    setIsLoading(false);
  };

  const [file, setFile] = useState(null);

  return (
    <div className={styles.ContactScreen}>
      <PageHead head="JOIN WITH US" page="careers" />
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.head}>
            <SectionHeading
              mainHead="JOIN WITH"
              subHead="ARCZENRICK"
              smallHead="CAREERS"
              caption="Join Arczenrick, where talent meets opportunity, and together, we create impactful solutions in a dynamic and rewarding workplace."
            />
          </div>
          <br />
          <br />
          <br />

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row
              style={{
                width: "100%",
              }}
            >
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Name</p>
                  <CustomInput
                    placeholder="John Doe"
                    onChange={(e, v) => {
                      setValues((prev) => ({ ...prev, name: v }));
                    }}
                    value={values.name}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Email</p>
                  <CustomInput
                    placeholder="rick@gmail.com"
                    onChange={(e, v) => {
                      setValues((prev) => ({ ...prev, email: v }));
                    }}
                    value={values.email}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Phone</p>
                  <CustomInput
                    placeholder="98745 63210"
                    onChange={(e, v) => {
                      setValues((prev) => ({ ...prev, phone: v }));
                    }}
                    value={values.phone}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Resume</p>
                  <CustomInput
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Message</p>
                  <CustomTextArea
                    placeholder="Your Message"
                    onChange={(e, v) => {
                      setValues((prev) => ({ ...prev, message: v }));
                    }}
                    value={values.message}
                  />
                </div>
              </Col>
            </Row>
            <div className={styles.btn}>
              <CustomButton onClick={handleSend}>
                {isLoading ? <Spinner /> : "SEND"}
              </CustomButton>
            </div>
          </form>

          <br />
          <SectionHeading
            smallHead="BENEFITS"
            mainHead="Why Choose"
            subHead="Aeczenrick?"
            caption="At Aeczenrick, we pride ourselves on providing solutions that not only meet but exceed expectations. Here’s why we stand out:"
          />
          <br />

          <div className={styles.text}>
            <p>
              Innovative Approach: Combining creativity and technical expertise
              for unmatched results.
            </p>
            <p>
              Client-Centric Philosophy: Your success is our priority, and every
              solution is tailored to your needs.
            </p>
            <p>
              End-to-End Support: From planning to execution and beyond, we’re
              with you at every step.
            </p>
            <p>
              Scalable Results: Our services grow with your business, ensuring
              long-term value.
            </p>
            <p>
              Dedicated Expertise: A team of professionals committed to
              delivering excellence.
            </p>
            <p>
              Advanced Tools: We leverage the latest technologies such as AI,
              automation, and cloud computing.
            </p>
            <p>
              Secure Systems: Prioritizing cybersecurity to protect your data
              and operations.
            </p>
            <p>
              Data-Driven Decisions: Utilizing analytics and insights for
              informed strategy execution.
            </p>
            <p>
              Industry Expertise: Specialized knowledge across sectors ensures
              targeted solutions.
            </p>
            <p>
              Future-Ready: Solutions designed to keep your business competitive
              in a rapidly changing tech landscape.
            </p>
          </div>
          <br />
          <br />
          <SectionHeading
            smallHead="ENVIRONMENT"
            mainHead="Working Environment"
            subHead="AT Aeczenrick"
            caption="At Arczenrick, we believe that innovation thrives in an environment where creativity meets collaboration. Our workspace is designed to inspire, motivate, and empower our team to reach their full potential."
          />
          <br />

          <div className={styles.text}>
            <ol>
              <li>
                <p>
                  <strong>A Culture of Innovation</strong>
                  <br />
                  We foster a culture where ideas flow freely, and every team
                  member is encouraged to think outside the box. At Arczenrick,
                  your ideas matter, and your voice is always heard.
                </p>
              </li>

              <li>
                <p>
                  <strong>Collaboration at its Core</strong>
                  <br />
                  Teamwork is at the heart of everything we do. Our open and
                  inclusive environment ensures that individuals from diverse
                  backgrounds work together seamlessly to achieve common goals.
                </p>
              </li>

              <li>
                <p>
                  <strong>Continuous Learning and Growth</strong>
                  <br />
                  We are committed to the personal and professional growth of
                  our team. From hands-on training and workshops to
                  certifications and mentorship, Arczenrick ensures you’re
                  always ahead in the tech industry.
                </p>
              </li>

              <li>
                <p>
                  <strong>Work-Life Harmony</strong>
                  <br />
                  We understand the importance of balancing work with personal
                  life. Our flexible policies, remote work options, and
                  supportive culture allow you to excel professionally while
                  maintaining a fulfilling personal life.
                </p>
              </li>

              <li>
                <p>
                  <strong>Cutting-Edge Tools and Technology</strong>
                  <br />
                  At Arczenrick, you’ll work with state-of-the-art tools and
                  technologies, keeping you at the forefront of innovation.
                  Whether it’s AI, cloud computing, or the latest in web
                  development, we equip you with the resources you need to
                  succeed.
                </p>
              </li>

              <li>
                <p>
                  <strong>Fun and Engaging Atmosphere</strong>
                  <br />
                  From team-building activities and game nights to casual
                  brainstorming sessions over coffee, we create an environment
                  where work feels enjoyable and rewarding.
                </p>
              </li>

              <li>
                <p>
                  <strong>Diversity and Inclusion</strong>
                  <br />
                  We celebrate diversity and believe in creating an environment
                  where everyone feels valued and respected. At Arczenrick,
                  individuality fuels creativity and strengthens our team.
                </p>
              </li>

              <li>
                <p>
                  <strong>Transparent Leadership</strong>
                  <br />
                  Our leadership team is approachable, transparent, and
                  committed to building a company where employees feel empowered
                  and supported.
                </p>
              </li>
            </ol>
          </div>
          <br />
          <br />
        </div>
      </CustomContainer>
    </div>
  );
};

export default CareerScreen;
