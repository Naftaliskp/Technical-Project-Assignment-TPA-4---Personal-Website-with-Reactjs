import React from "react";
import AboutMe from "../components/HomeAboutMe";
import Portof from "../components/HomePortof";

const Beranda = () => {
  return (
    <div className='beranda'>
      <AboutMe/>
      <Portof />
    </div>
  );
};

export default Beranda;