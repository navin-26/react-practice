import React from "react";
import emp1 from "../assets/emp-1.jpeg";
import emp2 from "../assets/emp-2.jpeg";
import emp3 from "../assets/emp-3.jpeg";
import emp4 from "../assets/emp-4.jpeg";
import emp5 from "../assets/emp-5.jpeg";
import { FaDribbble, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";

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
    <div className="h-[1130px] bg-indigo-900 relative overflow-hidden text-white">
      <div className="h-auto w-auto ml-[115px] mt-[100px] mr-33">
        <div className="w-[754px] h-[179px]">
          <h3 className="text-[42px] font-bold">Startup Crew</h3>
          <p className="my-6 text-[22px] leading-[32px]">
            The most important part of the Startup Framework is the samples. The
            samples form a set of 25 usable pages you can use as is or you can
            add new blocks from UI Kit.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 h-[543px] w-[764px] mt-[90px]">
          {crewMembers.map((member, index) => (
            <Crew key={index} {...member} />
          ))}
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default TeamSection;
