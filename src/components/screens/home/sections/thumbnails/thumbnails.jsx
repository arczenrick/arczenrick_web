import React from "react";
import styles from "./thumbnails.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const ThumbnailsSection = () => {
  const cards = [
    {
      id: "adfa",
      img: "website.png",
    },
    {
      id: "sfbsr",
      img: "technology.png",
    },
    {
      id: "erg",
      img: "digital_tranformation.png",
    },
    {
      id: "vvczx",
      img: "strategy_development.png",
    },
    {
      id: "sdmskmg",
      img: "digital_marketing.png",
    },
    {
      id: "pppadcv",
      img: "logistic.png",
    },
    {
      id: "advmakd",
      img: "operation_improvement.png",
    },
  ];

  return (
    <section className={styles.ThumbnailsSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeading
            smallHead={"Core Services"}
            mainHead={"DISCOVER OUR"}
            subHead={"CAPABILITIES"}
            center
          />
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
            pauseOnHover
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default ThumbnailsSection;
