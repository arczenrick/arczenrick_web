import PageHead from "@/components/ui/page_head/page_head";
import React from "react";
import ServicesSection from "../home/sections/services/services";
import ThumbnailsSection from "../home/sections/thumbnails/thumbnails";

const ServicesScreen = () => {
  return (
    <div
      style={{
        maxWidth: "100dvw",
        overflow: "hidden",
      }}
    >
      <PageHead head="Services By Arczenrick" page="" />
      <ServicesSection />
      <ThumbnailsSection />
    </div>
  );
};

export default ServicesScreen;
