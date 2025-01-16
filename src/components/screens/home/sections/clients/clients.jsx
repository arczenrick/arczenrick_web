import React from "react";
import { Image } from "react-bootstrap";
import styles from "./clients.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Banner = ({ images, isBack }) => {
  const speed = 20000;

  return (
    <div className={`${styles.Banner} ${isBack ? styles.back : ""}`}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <Image height={220} src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <Image height={220} src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <Image height={220} src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const images = [
    "/assets/clients/client (1).png",
    "/assets/clients/client (2).png",
    "/assets/clients/client (3).png",
    "/assets/clients/client (4).png",
    "/assets/clients/client (5).png",
    "/assets/clients/client (6).png",
  ].map((image) => ({
    id: Math.random(),
    image,
  }));

  return (
    <div className={styles.ClientsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <SectionHeading
            smallHead="Clients"
            center
            mainHead="Meet Our"
            subHead="Clients"
            caption="At arczenrick, we don’t just provide services—we create lasting partnerships, driving your vision forward with innovation, precision, and passion. Let’s build the future together!"
          />
        </div>
      </CustomContainer>
      <Banner images={images} isBack />
      <Banner images={images} />
      <CustomContainer>
        <div className={styles.x}></div>
      </CustomContainer>
    </div>
  );
};

export default ClientsSection;
