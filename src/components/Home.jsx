import React from "react";
import HeroImg from "../assets/home.png";

import { FaDribbble } from "react-icons/fa";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-scroll"; 



function Home() {
  const scrollToForm = () => {
    window.scrollTo({
      top: document.getElementById("form-section").offsetTop,
      behavior: "smooth",
    });
  };

   const slides = [
     {
       heading: "Forget About Code",
       paragraph:
         "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
     },
     {
       heading: "Explore here",
       paragraph:
         "Welcome to our website! Here, you'll find a wide range of services tailored to meet your needs.Explore our offerings and discover how we can help you achieve your goals.",
     },
     {
       heading: "Forget About Code",
       paragraph:
         "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
     },
     {
       heading: "Explore here",
       paragraph:
         "Welcome to our website! Here, you'll find a wide range of services tailored to meet your needs.Explore our offerings and discover how we can help you achieve your goals.",
     },
     {
       heading: "Forget About Code",
       paragraph:
         "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
     },
   ];
  return (
    <div className="relative overflow-hidden  h-[850px]">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
      />

      <header className="absolute top-[65px] left-[466px] right-[466px] flex flex-col md:flex-row md:items-center justify-center py-4 px-4 md:px-8 object-center z-10">
        <nav className="space-x-9 flex text-[18px] cursor-pointer">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="features" className="text-white hover:text-gray-300">
            Features
          </Link>
          <Link to="pricing" className="text-white hover:text-gray-300">
            Pricing
          </Link>
          <Link to="/" className="text-white hover:text-gray-300">
            Blog
          </Link>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-300 mr-4 flex items-center"
            >
              <FaDribbble />
            </Link>
          </div>
          <Link
            to="/"
            className="text-white hover:text-gray-300 mr-4 flex items-center "
          >
            <FaBehance />
          </Link>
        </nav>
      </header>

      <div className="relative h-[200px] flex flex-col  items-center  text-center text-white mt-[250px] ">
        <h1 className="text-[24px] text-white font-bold leading-[19px] mb-6">
          Startup 3
        </h1>
        <Carousel slides={slides} />

        <div className="mt-24">
          <button
            className="bg-[#482BE7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md w-[230px] h-[60px] text-[18px]"
            onClick={scrollToForm}
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
