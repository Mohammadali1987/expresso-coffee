import React from "react";
import Hero from "./Hero";
import HeroIcon from "./HeroIcon";
import Instagram from "./Instagram";
import AddCoffee from "./AddCoffee";
import Add from "./Add";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroIcon></HeroIcon>
      <Popular></Popular>
      <AddCoffee></AddCoffee>
      <Instagram></Instagram>
    </div>
  );
};

export default Home;
