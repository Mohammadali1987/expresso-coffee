import React from "react";
import logo from "../images/more/logo1.png";

const Header = () => {
  return (
    <div className="bg-[url('/src/images/more/15.jpg')] ">
      <div className="flex gap-2 justify-center items-center w-6/12 mx-auto">
        <img className="h-20" src={logo} alt="" srcset="" />
        <p className="text-white text-2xl  ">Expresso Emporium</p>
      </div>
    </div>
  );
};

export default Header;
