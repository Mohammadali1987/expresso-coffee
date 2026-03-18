import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url(/src/images/more/3.png)] bg-cover bg-no-repeat min-h-screen relative">
      <div className="absolute top-100 left-270 space-y-2">
        <h1 className="text-white text-2xl font-bold">
          Would you like a cup of Coffee?
        </h1>
        <p className="text-white ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, esse.
        </p>
        <button className="btn  bg-[#E3B577] border-0 rounded-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
