import React from "react";
import HeroImg from "../assets/loadingPage.jpeg";
import { Link } from "react-router-dom";
import { FaDribbble } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaBehance } from "react-icons/fa";


//home.jsx

function Home() {
  const scrollToForm = () => {
    window.scrollTo({
      top: document.getElementById("form-section").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 opacity-45"></div>

      <header className="absolute top-8 left-0 right-0 flex flex-col md:flex-row md:items-center justify-center py-4 px-4 md:px-8 object-center z-10">
        <nav className="space-x-6 flex">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/" className="text-white hover:text-gray-300">
            Features
          </Link>
          <Link to="/" className="text-white hover:text-gray-300">
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
            className="text-white hover:text-gray-300 mr-4 flex items-center"
          >
            <FaBehance />
          </Link>
        </nav>
      </header>

      <main className="relative">
        <section className="container mx-auto px-9 py-16 md:py-40 flex flex-col md:flex-row items-center justify-center text-center text-white ">
          <div className="max-w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl text-white font-bold">Startup 3</h1>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              className="w-full  mr-10 ml-10 mb-20"
            >
              <div className="  ">
                <h2 className="text-6xl font-bold leading-tight">
                  Forget About Code
                </h2>
                <p className="text-xl">
                  Startup Framework gives you complete freedom over your
                  creative process - you don't have to think about any technical
                  aspects. There are no limits and absolutely no coding.
                </p>
              </div>
              <div>
                <h2 className="text-6xl font-bold leading-tight">
                  Forget About Code
                </h2>
                <p className="text-xl">
                  Startup Framework gives you complete freedom over your
                  creative process - you don't have to think about any technical
                  aspects. There are no limits and absolutely no coding.
                </p>
              </div>
              <div>
                <h2 className="text-6xl font-bold leading-tight">
                  Forget About Code
                </h2>
                <p className="text-xl">
                  Startup Framework gives you complete freedom over your
                  creative process - you don't have to think about any technical
                  aspects. There are no limits and absolutely no coding.
                </p>
              </div>
              <div>
                <h2 className="text-6xl font-bold leading-tight">
                  Forget About Code
                </h2>
                <p className="text-xl">
                  Startup Framework gives you complete freedom over your
                  creative process - you don't have to think about any technical
                  aspects. There are no limits and absolutely no coding.
                </p>
              </div>
              <div>
                <h2 className="text-6xl font-bold leading-tight">
                  Forget About Code
                </h2>
                <p className="text-xl">
                  Startup Framework gives you complete freedom over your
                  creative process - you don't have to think about any technical
                  aspects. There are no limits and absolutely no coding.
                </p>
              </div>
            </Carousel>

            <div className="top-18">
              <button
                className="bg-[#482BE7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                onClick={scrollToForm}
              >
                Create an Account
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
