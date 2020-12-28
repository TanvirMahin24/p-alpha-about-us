import React from "react";
import Footer from "../shared/Footer/Footer";
import Messenger from "../shared/Messenger/Messenger";
import Navbar from "../shared/Nav/Navbar";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import NewsletterSection from "./NewsletterSection";
import ParallaxSection from "./ParallaxSection";
import WhyChooseUs from "./WhyChooseUs";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <ParallaxSection />
      <AboutSection />
      <Messenger />
      <WhyChooseUs />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default AboutUs;
