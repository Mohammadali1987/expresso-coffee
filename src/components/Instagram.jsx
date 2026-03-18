import React from "react";
import cumImg1 from "../images/cups/Rectangle 9.png";
import cumImg2 from "../images/cups/Rectangle 10.png";
import cumImg3 from "../images/cups/Rectangle 11.png";
import cumImg4 from "../images/cups/Rectangle 12.png";
import cumImg5 from "../images/cups/Rectangle 13.png";
import cumImg6 from "../images/cups/Rectangle 14.png";
import cumImg7 from "../images/cups/Rectangle 15.png";
import cumImg8 from "../images/cups/Rectangle 16.png";

const Instagram = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <div className="w-4/12 mx-auto text-center my-6">
        <h6>Follow us now</h6>
        <h2 className="font-bold text-2xl">Follow on Instagram</h2>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="col-span-1"></div>

        <div>
          <img src={cumImg2} alt="" />
        </div>
        <div className="col-span-1"></div>
        <div>
          <img src={cumImg4} alt="" />
        </div>
        <div>
          <img src={cumImg5} alt="" />
        </div>
        <div>
          {" "}
          <img src={cumImg6} alt="" />
        </div>
        <div>
          <img src={cumImg7} alt="" />
        </div>
        <div>
          <img src={cumImg8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
