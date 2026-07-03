import React from "react";
import bannerPng from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-7xl font-bold">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-center my-8 max-w-5xl mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <img className="mx-auto" src={bannerPng} alt="" />
    </div>
  );
};

export default Banner;
