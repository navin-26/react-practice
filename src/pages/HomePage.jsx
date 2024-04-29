import React from "react";

import Home from "../components/Home";
import Content from "../components/Content";
import Features from "../components/Features";
import Form from "../components/Form";
import TestimonialSection from "../components/TestimonialSection";
import ShowcaseSection from "../components/ShowcaseSection";
import TeamSection from "../components/TeamSection";
import PriceTableSection from "../components/PriceTableSection";
import CallToAction from "../components/CallToActionSection";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="home-page">
      <Home />
      <Content />
      <Features />
      <Form />
      <TestimonialSection />
      <CallToAction />
      <ShowcaseSection />
      <TeamSection />
      <PriceTableSection />
      <Contact />
    </div>
  );
};
export default HomePage;
