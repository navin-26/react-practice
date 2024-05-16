import HeroImg from "../assets/features.png";
import CarouselV from "./CarouselV";
import LapFe from "../assets/LapFe.png";

const Features = () => {
  return (
    <div
      id="features"
      className="relative overflow-hidden bg-cover flex flex-row gap-5 lg:py-28 text-white items-center lg:h-[736px] sm:h-[300px]"
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      <img
        className="absolute w-1/3 h-[33.438rem] max-lg:hidden"
        src={LapFe}
        alt="Laptop "
      />
      <div className="lg:w-1/2 sm:w-auto max-lg:flex justify-center z-20 max-lg:mx-4 max">
        <CarouselV />
      </div>
    </div>
  );
};

export default Features;
