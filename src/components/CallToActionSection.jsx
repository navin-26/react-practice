import HeroImg from "../assets/call-to-action.png";
import { FaPlay } from "react-icons/fa";


function CallToAction() {
  return (
    <div className="relative overflow-hidden h-[605px] flex  justify-center ">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative text-white flex flex-col gap-4 h-auto place-self-center items-center my-20 lg:w-[770px] md:w-[400px]">
        <h1 className="md:text-[58px] sm:text-[30px] text-balance text-center font-semibold leading-tight ">
          Easy to setup. Easy to maintain
        </h1>
        <p className="text-balance text-center my-4 font-medium md:text-[22px] sm:text-[15px] lg:w-[518px]">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </p>
        <div className="flex items-center ">
          <button className="bg-red-700 py-3 px-2 rounded-full relative md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] transition-all duration-300 hover:scale-110">
            <FaPlay className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm" />
          </button>
          <div className="ml-8 ">
            <button className="bg-teal-400 px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition duration-300  md:w-[213px] md:h-[70px] sm:w-[150px] sm:h-[50px] md:text-[20px] sm:text-[15px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
