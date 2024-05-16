import HeroImg from "../assets/content.png";
import React from "react";

function content() {
  return (
    <div className="relative overflow-hidden ">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover  "
      />

      <div className="w-1/2   space-y-4 container mx-auto px-4 md:py-32 sm:py-14 flex flex-row items-center justify-center text-center text-white relative z-10 ">
        <div>
          <h3 className="text-1xl text-white  md:mr-4 mb-2 tracking-wider font-medium ">
            FREE SAMPLE
          </h3>

          <h1 className="md:text-5xl sm:text-3xl font-bold leading-tight md:mr-4 mb-8 mt-8 text-center ">
            Powerful Generator and Free Figma Sources
          </h1>
          <p className=" md:ml-4 mt-4 leading-7 sm:text-wrap max-md:text-xs">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design. All of the components
            are made in the same style, and can easily be integrated into
            projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default content;
