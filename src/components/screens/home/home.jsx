import React from "react";
import styles from "./home.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import BannerSection from "./sections/banner/banner";
import AboutSection from "./sections/about/about";
import ServicesSection from "./sections/services/services";
import GetInTouchSection from "./sections/get_in_touch/get_in_touch";
import TestimonialsSection from "./sections/testimonials/testimonials";
import ClientsSection from "./sections/clients/clients";
import ThumbnailsSection from "./sections/thumbnails/thumbnails";

const HomeScreen = () => {
  return (
    <main className={styles.home}>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection/>
      <ThumbnailsSection />
      <GetInTouchSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomeScreen;
