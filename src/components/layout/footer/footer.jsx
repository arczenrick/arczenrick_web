import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { ArrowRight, Dot, EnvelopeAt, Phone } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";
import fonts from "@/styles/fonts";
import CONTACT_DETAILS from "@/constants/contact";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.wrap}>
            <div className={styles.left}>
              <Link href="/contact">
                <div className={styles.ping}>
                  <div className={styles.ov}></div>
                  <ArrowRight />
                  <p>Ping Us</p>
                </div>
              </Link>
            </div>

            <div className={styles.right}>
              <Row>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>SOCIAL MEDIA</h4>
                    <div className={styles.social}>
                      <Link href="/">INSTAGRAM...</Link>
                      <Link href="/">YOUTUBE...</Link>
                      <br />
                      <Link href="/">FACEBOOK...</Link>
                      <Link href="/">X...</Link>
                      <br />
                      <Link href="/">LINKEDIN...</Link>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>ADDRESS</h4>
                    <div className={styles.social}>
                      {CONTACT_DETAILS.address.map((l, idx) => (
                        <p key={`cl_${idx}`}>{l}</p>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>QUICK LINKS</h4>
                    <Link href="/">Home</Link>
                    <Link href="/services">What we do</Link>
                    <Link href="/about">Who we are</Link>
                    <Link href="/contact">Get in touch</Link>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>MORE INFO</h4>
                    <Link href="/career">Career</Link>
                    <Link href="/terms_and_conditions">Terms & Conditions</Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>Copyright &copy; 2024 Arczenrick. All rights reserved.</p>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
