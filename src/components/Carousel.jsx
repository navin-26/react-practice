import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex !== slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="mx-20 relative">
      <button
        className={`absolute top-[50px] left-0 transform -translate-y-1/2 text-[25px] ${
          currentIndex === 0 ? "text-gray-500" : ""
        }`}
        style={{ marginLeft: "-210px" }}
        onClick={goToPrevSlide}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className={`absolute top-[50px] right-0 transform -translate-y-1/2 text-[25px] ${
          currentIndex === slides.length - 1 ? "text-gray-500" : ""
        }`}
        style={{ marginRight: "-210px" }}
        onClick={goToNextSlide}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div className="grid grid-rows-2 w-[710px] text-center">
        <h2 className="text-[71px] font-semibold">
          {slides[currentIndex].heading}
        </h2>
        <p className="text-[22px] mt-3">{slides[currentIndex].paragraph}</p>
      </div>
      <div className="absolute left-0 right-0 mt-5 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-[11px] h-[11px] mx-1 mt-5 rounded-full border-2 border-white border-opacity-30 ${
              currentIndex === index ? "bg-white" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
