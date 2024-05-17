import React from "react";
import HeroImg from "../assets/home.png";
import { FaDribbble, FaBehance } from "react-icons/fa";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const Header = () => (
  <header className="relative md:top-16 sm:top-10 left-0 right-0 flex justify-center z-10">
    <nav className="flex md:space-x-9 sm:space-x-[14px] xl:text-[18px] md:text-[15px] lg:text-[15px] sm:text-[13px]">
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
      <Link to="/" className="text-white hover:text-gray-300 flex items-center">
        <FaDribbble />
      </Link>
      <Link to="/" className="text-white hover:text-gray-300 flex items-center">
        <FaBehance />
      </Link>
    </nav>
  </header>
);

const CreateAccountButton = ({ onClick }) => (
  <div className="md:mt-24 sm:mt-20 mb-2">
    <button
      className="bg-[#482BE7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:w-[230px] md:h-[60px] sm:w-[130px] sm:h-[50px] md:text-[18px] sm:text-[10px]"
      onClick={onClick}
    >
      Create an Account
    </button>
  </div>
);

CreateAccountButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Home = () => {
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
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      heading: "Explore here",
      paragraph:
        "Welcome to our website! Here, you'll find a wide range of services tailored to meet your needs. Explore our offerings and discover how we can help you achieve your goals.",
    },
    {
      heading: "Forget About Code",
      paragraph:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      heading: "Explore here",
      paragraph:
        "Welcome to our website! Here, you'll find a wide range of services tailored to meet your needs. Explore our offerings and discover how we can help you achieve your goals.",
    },
    {
      heading: "Forget About Code",
      paragraph:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    
  ];

  return (
    <div className="relative overflow-hidden xl:h-[850px] lg:h-[750px] md:h-[650px] sm:h-[613px] w-full">
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
      />

      <Header />

      <div className="relative flex flex-col items-center text-center text-white lg:mt-64 lg:mx-4 md:mt-52 md:mx-3 sm:mt-36 sm:mx-3">
        <h1 className="text-[24px] text-white font-bold leading-tight mb-6">
          Startup 3
        </h1>

        <Carousel slides={slides} />

        <CreateAccountButton onClick={scrollToForm} />
      </div>
    </div>
  );
};

export default Home;
