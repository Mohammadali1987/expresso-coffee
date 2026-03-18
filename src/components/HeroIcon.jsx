import React from "react";
import aroma from "../images/icons/1.png";
import qc from "../images/icons/2.png";
import pure from "../images/icons/3.png";
import proper from "../images/icons/4.png";

const HeroIcon = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="flex gap-2 w-10/12 mx-auto py-3 ">
        <div>
          <img src={aroma} alt="" srcset="" />
          <h2 className="font-bold">Awesome Aroma</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            quidem.
          </p>
        </div>
        <div>
          <img src={qc} alt="" srcset="" />
          <h2 className="font-bold">High Quality</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            quidem.
          </p>
        </div>
        <div>
          <img src={pure} alt="" srcset="" />
          <h2 className="font-bold">Pure Grades</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            quidem.
          </p>
        </div>
        <div>
          <img src={proper} alt="" srcset="" />
          <h2 className="font-bold">Proper Roasting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroIcon;
