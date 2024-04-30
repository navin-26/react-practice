import HeroImg from "../assets/call-to-action.png";
import { FaPlay } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";

function CallToAction() {
  return (
    <div className="relative overflow-hidden h-[605px]">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
     

      <div className="relative text-white grid grid-rows-3 gap-4 justify-items-center my-20 w-[770px] ml-[315px]">
        <h1 className="text-[58px] text-balance text-center font-semibold leading-tight">
          Easy to setup. Easy to maintain
        </h1>
        <p className="text-balance text-center my-4 font-medium text-[22px] w-[518px]">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </p>
        <div className="flex items-center w-[313px] h-[70px]">
          <button className="bg-red-700 py-3 px-2 rounded-full relative w-[70px] h-[70px] transition-all duration-300 hover:scale-110">
            <FaPlay className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm " />
          </button>
          <div className="ml-8">
            <button className="bg-teal-400 px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition duration-300  w-[213px] h-[70px] text-[20px]">
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
