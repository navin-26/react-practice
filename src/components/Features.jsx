import FeBg from "../assets/features.jpeg";
import CarouselV from "./CarouselV";
import LapFe from "../assets/LapFe.png";

const Features = () => {
  return (
    <div
      className=" bg-cover  flex flex-row gap-5 py-28 text-white items-center h-[736px]"
      style={{ backgroundImage: `url(${FeBg})` }}
    >
      
      <img className="w-1/3 h-[33.438rem]" src={LapFe} alt="Laptop" />
      <div className="w-1/2">
        <CarouselV />
      </div>
    </div>
  );
};

export default Features;
