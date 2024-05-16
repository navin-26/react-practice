import React from "react";
import emp1 from "../assets/emp-1.jpeg";
import emp2 from "../assets/emp-2.jpeg";
import emp3 from "../assets/emp-3.jpeg";
import emp4 from "../assets/emp-4.jpeg";
import emp5 from "../assets/emp-5.jpeg";
import { FaDribbble, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


function Crew({ image, name, role, socialMedia }) {
  return (
    <div className="flex flex-col items-start transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer h-[241px] w-[190px]">
      <img src={image} className="h-[100px] w-[100px] rounded-full" />
      <h5 className="font-medium text-[22px] my-3">{name}</h5>
      <h6 className="mb-4 text-[16px]">{role}</h6>
      <div className="flex w-full ">
        {socialMedia.map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-[18px] mr-6 hover:text-gray-300 transition duration-300 ease-in-out"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  const crewMembers = [
    {
      image: emp1,
      name: "Leah Salomon",
      role: "UI Designer",
      socialMedia: [FaTwitter, FaFacebook, FaDribbble, FaInstagram],
    },
    {
      image: emp2,
      name: "Colin Timmons",
      role: "UX Designer",
      socialMedia: [FaTwitter, FaDribbble],
    },
    {
      image: emp3,
      name: "Miguel Osborne",
      role: "Front-end Developer",
      socialMedia: [FaTwitter, FaFacebook, FaDribbble, FaInstagram],
    },
    {
      image: emp4,
      name: "Taylor Simon",
      role: "Product Manager",
      socialMedia: [FaTwitter, FaInstagram],
    },
    {
      image: emp5,
      name: "Steven MacAlister",
      role: "Copyrighter",
      socialMedia: [FaTwitter],
    },
    // Add more crew members here as needed
  ];

  return (
    <div className="lg:h-[1130px] sm:h-auto  relative  text-white overflow-x-hidden overflow-y-auto">
      <div className=" w-auto sm:mx-[50px] lg:ml-[115px] mt-[100px] mb-[100px] mr-33">
        <div className="lg:w-[754px] lg:h-[179px] sm:w-auto sm:h-[229px] md:w-[554px] md:h-[179px]">
          <h3 className="lg:text-[42px] md:text-[32px] sm:text-[28px] font-bold">
            Startup Crew
          </h3>
          <p className="my-6 lg:text-[22px] md:text-[20px] sm:text-[15px] leading-[32px]">
            The most important part of the Startup Framework is the samples. The
            samples form a set of 25 usable pages you can use as is or you can
            add new blocks from UI Kit.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 lg:h-[543px] lg:w-[764px] md:h-auto md:w-[600px] mt-[90px]">
          {crewMembers.map((member, index) => (
            <Crew key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
