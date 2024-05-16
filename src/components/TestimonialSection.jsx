import React from "react";
import client1 from "../assets/client-1.jpeg";
import client2 from "../assets/client-2.jpeg";
import client3 from "../assets/client-3.jpeg";
import client4 from "../assets/client-4.jpeg";

function TestimonialCard({ image, text, author }) {
  return (
    <div className="container rounded-lg border-4 border-white relative sm:h-auto lg:h-[237px] 2xl:w-[470px] xl:w-[440px] lg:w-[370px] sm:w-auto flex 2xl:px-[36px] 2xl:py-[35px] xl:px-[33px] xl:py-[33px] lg:px-[25px] lg:py-[25px] sm:px-[15px] sm:py-[18px] items-start mt-10 gap-7 border-opacity-10 max-lg:flex-col">
      <div className="flex-none">
        <img
          src={image}
          alt=""
          className="rounded-lg h-[70px] w-[70px] object-cover"
        />
      </div>
      <div className="flex-grow">
        <p
          className="text-white 2xl:text-[18px]
        xl:text-[17px] lg:text-[15px] sm:text-[14px]"
        >
          {text}
        </p>
        <div className="lg:absolute bottom-6">
          <h5 className="text-white text-opacity-30 uppercase tracking-widest font-medium text-[14px] max-lg:mt-4">
            {author}
          </h5>
        </div>
      </div>
    </div>
  );
}


function TestimonialSection() {
  return (
    <section className="relative overflow-x-hidden lg:h-[800px] sm:h-auto ">
      <div className=" xl:mx-52 lg:mx-42 md:mx-32 sm:mx-4  relative  lg:mt-[100px] sm:my-[60px] ">
        <div className=" lg:w-[364px] sm:w-auto flex place-content-center">
          <h3 className=" text-[40px] text-white font-bold ">
            Our Happy Clients
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-14 sm:grid-cols-1 sm:place-items-center">
          <TestimonialCard
            image={client1}
            text="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support."
            author="Rayhan Curran"
          />
          <TestimonialCard
            image={client2}
            text="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"
            author="Kayley Frame"
          />
          <TestimonialCard
            image={client3}
            text="The most important part of the Startup Framework is the samples"
            author="Gene Whitfield"
          />
          <TestimonialCard
            image={client4}
            text="I’ve built my website with Startup just in one day, and it was ready-to-go. "
            author="Allan Kim"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
