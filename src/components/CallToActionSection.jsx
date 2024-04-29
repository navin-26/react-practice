import HeroImg from "../assets/call-to-action.jpeg";
import { FaPlay } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";

function CallToAction() {
  return (
    <div className="relative overflow-hidden h-screen">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 opacity-45"></div>

      <div className="relative text-white grid grid-rows-3 gap-4 mx-28 justify-items-center my-20">
        <h1 className="text-5xl text-balance text-center font-semibold leading-tight">
          Easy to setup. Easy to maintain
        </h1>
        <p className="text-balance text-center my-4 font-medium">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </p>
        <div className="flex items-center">
          <button className="bg-red-700 py-3 px-2 rounded-full relative w-12 h-12 transition-all duration-300 hover:scale-110">
            <FaPlay className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm " />
          </button>
          <div className="ml-8">
            <button className="bg-teal-400 px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default CallToAction;
