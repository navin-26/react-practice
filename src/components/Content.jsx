import React from "react";
import HeroImg from "../assets/content.png";

const Content = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={HeroImg}
        alt="Content Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="container mx-auto flex flex-row items-center justify-center text-center text-white relative z-10 px-4 md:py-32 sm:py-14">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-1xl tracking-wider font-medium mb-2">
            FREE SAMPLE
          </h3>

          <h1 className="md:text-5xl sm:text-3xl font-bold leading-tight mb-8 mt-8">
            Powerful Generator and Free Figma Sources
          </h1>

          <p className="leading-7 sm:text-wrap text-xs md:text-base mt-4">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design. All of the components
            are made in the same style, and can easily be integrated into
            projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
