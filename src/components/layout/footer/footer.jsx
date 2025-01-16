import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { ArrowRight, Dot, EnvelopeAt, Phone } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";
import fonts from "@/styles/fonts";

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
                    <h4 className={fonts.font1}>Social Media</h4>
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
                    <h4 className={fonts.font1}>Social Media</h4>
                    <div className={styles.social}>
                      <p>Address Line 1,</p>
                      <p>Address Line 2,</p>
                      <p>Address Line 2,</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>Social Media</h4>
                    <Link href="/">Home</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Contact</Link>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.box}>
                    <h4 className={fonts.font1}>Social Media</h4>
                    <Link href="/">Career</Link>
                    <Link href="/">Team</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Portfolio</Link>
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
