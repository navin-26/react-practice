import HeroImg from "../assets/features.png";
import CarouselV from "./CarouselV";
import LapFe from "../assets/LapFe.png";

const Features = () => {
  return (
    <div
      id="features"
      className="relative bg-cover flex flex-row gap-5 py-28 text-white items-center h-[736px]"
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <img className="absolute w-1/3 h-[33.438rem]" src={LapFe} alt="Laptop " />
      <div className="w-1/2 z-20">
        <CarouselV />
      </div>
    </div>
  );
};

export default Features;
