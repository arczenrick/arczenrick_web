import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageHead from "@/components/ui/page_head/page_head";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./contact.module.scss";
import fonts from "@/styles/fonts";
import Link from "next/link";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { Col, Row } from "react-bootstrap";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CONTACT_DETAILS from "@/constants/contact";

const ContactScreen = () => {
  return (
    <div className={styles.ContactScreen}>
      <PageHead head="Get In Touch With Arczenrick" page="Contact" />
      <CustomContainer noPadding>
        <div className={styles.cont}>
          <div className={styles.head}>
            <SectionHeading
              mainHead="WE CREATE DIGITAL"
              subHead="SOLUTIONS"
              smallHead="CONTACT"
            />
          </div>
          <br />
          <br />
          <br />
          <div className={styles.contact}>
            <div className={styles.row}>
              <h3 className={fonts.font1}>LOCATION</h3>
              <p>
                {CONTACT_DETAILS.address.map(a=><>{a}&nbsp;</>)}
              </p>
            </div>
            <div className={styles.row}>
              <h3 className={fonts.font1}>CONTACT</h3>
              <p>{CONTACT_DETAILS.email} , {CONTACT_DETAILS.phone}</p>
            </div>
            <div className={styles.row}>
              <h3 className={fonts.font1}>SOCIAL</h3>
              <p>
                <Link href="/">INSTAGRAM...</Link>
                <Link href="/">FACEBOOK...</Link>
                <Link href="/">X...</Link>
                <Link href="/">LINKEDIN...</Link>
                <Link href="/">YOUTUBE...</Link>
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <form>
            <Row
              style={{
                width: "100%",
              }}
            >
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Name</p>
                  <CustomInput placeholder="John Doe" />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Email</p>
                  <CustomInput placeholder="rick@gmail.com" />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Phone</p>
                  <CustomInput placeholder="98745 63210" />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Company</p>
                  <CustomInput placeholder="Company Name" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={styles.field}>
                  <p className={fonts.font1}>Message</p>
                  <CustomTextArea placeholder="Your Message" />
                </div>
              </Col>
            </Row>
            <div className={styles.btn}>
              <CustomButton>SEND</CustomButton>
            </div>
          </form>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ContactScreen;
