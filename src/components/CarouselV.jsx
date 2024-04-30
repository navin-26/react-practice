import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faDriversLicense,
  faUser,
  faComments,
  faEnvelope,
  faGem,
} from "@fortawesome/free-regular-svg-icons"; // Import the specific icons you need

import React, { useState } from "react";

const CarouselV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      h1: "We Create Something New",
      p1: "We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.",
      c1i: faClone,
      c1h: "30 New feature pages",
      c1p: "Startup Framework contains components and complex blocks which can easily. ",
      c2h: "Useful Symbol Components",
      c2p: "Samples will show you the feeling on how to play around using the components.",
    },
    {
      h1: "Our Mission",
      p1: "Empowering businesses to thrive in the digital age. Join us and embrace the future of business.",
      c1i: faDriversLicense,
      c1h: "Innovation",
      c1p: " Our forward-thinking approach ensures that we're always one step ahead. Experience innovation with us.",
      c2h: "Customer Satisfaction",
      c2p: "Customer satisfaction is our top priority. We go the extra mile to ensure it.",
    },
    {
      h1: "Our Team",
      p1: "Meet the talented individuals behind our success. Join hands with us for unparalleled success.",
      c1i: faUser,
      c1h: "Diverse Expertise",
      c1p: "Our team consists of experts from various fields, ensuring comprehensive solutions. Experience expertise at its finest.",
      c2h: "Collaborative Culture",
      c2p: "We foster a culture of collaboration, where every voice is valued and heard.  Join our collaborative community today.",
    },
    {
      h1: "Client Testimonials",
      p1: "See what our clients have to say about us. Our satisfied clients share their success stories. Experience the difference with us today.",
      c1i: faComments,
      c1h: "Impressive Results",
      c1p: "Working with us has led to significant improvements in our clients' businesses. Trust us for impressive results.",
      c2h: "Professionalism",
      c2p: "Our team's professionalism and dedication have earned us praise from clients. we deliver professionalism in every interaction.",
    },
    {
      h1: "Contact Us",
      p1: "Get in touch with us today and let's discuss how we can help you. Our friendly team is eager to assist you. Reach out to us now for personalized solutions.",
      c1i: faEnvelope,
      c1h: "Reach Out",
      c1p: "Send us a message and we'll get back to you promptly. Your inquiries are important to us. Contact us now for swift assistance.",
      c2h: "Visit Our Office",
      c2p: "Send us a message and we'll get back to you promptly. Your inquiries are important to us. Contact us now for swift assistance.",
    },
  ];

  return (
    <div className="flex flex-row gap-12">
      <div className="ml-[510px] ">
        <div className="flex flex-col justify-start text-start gap-3 w-[600px] h-[10.5rem] ">
          <h6 className="text-[2.625rem] font-medium">
            {slides[currentIndex].h1}
          </h6>
          <p className="text-[1.375rem] font-medium">
            {slides[currentIndex].p1}
          </p>
        </div>
        <div className="grid grid-cols-2  mt-10">
          <div className=" flex flex-col justify-start  text-start gap-5 h-[11.625rem] w-[16.938rem] ">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={slides[currentIndex].c1i}
            />
            <h3 className="text-[0.875rem] uppercase font-medium tracking-widest">
              {slides[currentIndex].c1h}
            </h3>
            <p className="text-[1rem] leading-8 font-extralight">
              {slides[currentIndex].c1p}
            </p>
          </div>
          <div className="flex flex-col justify-start text-start gap-5 h-[11.625rem] w-[16.938rem] ">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={slides[currentIndex].c1i}
            />
            <h3 className="text-[0.875rem] uppercase font-medium tracking-widest">
              {slides[currentIndex].c2h}
            </h3>
            <p className="text-[1rem] leading-8 font-extralight">
              {slides[currentIndex].c2p}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 absolute right-32 h-1/2  justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-[11px] h-[11px] mx-1 rounded-full border border-grey border-opacity-50 ${
              currentIndex === index ? "bg-white" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselV;
