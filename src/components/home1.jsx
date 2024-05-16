import React from "react";
import HeroImg from "../assets/home.png";

function Home2() {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
}

export default Home2;
