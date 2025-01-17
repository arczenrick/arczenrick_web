import React from "react";
import styles from "./thumbnails.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import SERVICES from "@/constants/services";

const ThumbnailsSection = () => {
  const cards = SERVICES;

  return (
    <section className={styles.ThumbnailsSection}>
      <CustomContainer noPadding>
        <div className={styles.cont}>
          <SectionHeading
            smallHead={"Core Services"}
            mainHead={"DISCOVER OUR"}
            subHead={"CAPABILITIES"}
            center
          />
        </div>

      </CustomContainer>

          <br/>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}            
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 2,

                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            autoPlay
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {cards.map((c) => {
              return (
                <div key={c.id} className={styles.card}>
                  <Image
                    src={`/assets/images/services/${c.img}`}
                    fluid
                    alt={c.img}
                  />
                  {/* <Image src={`/assets/services/${c.img}`} fluid alt={c.img} /> */}
                </div>
              );
            })}
          </Carousel>
    </section>
  );
};

export default ThumbnailsSection;
