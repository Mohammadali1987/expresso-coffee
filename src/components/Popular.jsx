import React from "react";
import { Link } from "react-router";

const Popular = () => {
  return (
    <div className="w-4/12 mx-auto text-center">
      <h6>---Sip and Savour---</h6>
      <h1>Our Popular Products</h1>
      <Link to="addCoffee" className="btn">
        Add Coffee
      </Link>
    </div>
  );
};

export default Popular;
