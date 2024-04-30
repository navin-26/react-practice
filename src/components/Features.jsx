import HeroImg from "../assets/features.jpeg";
import CarouselV from "./CarouselV";
import LapFe from "../assets/LapFe.png";

const Features = () => {
  return (
    <div className="relative bg-cover flex flex-row gap-5 py-28 text-white items-center h-[736px]">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 ">
        <div className="bg-gradient-to-b from-purple-950 to-purple-800 opacity-45 h-full"></div>
      </div>
      <img className="absolute w-1/3 h-[33.438rem]" src={LapFe} alt="Laptop " />
      <div className="w-1/2 z-20">
        <CarouselV />
      </div>
    </div>
  );
};

export default Features;
