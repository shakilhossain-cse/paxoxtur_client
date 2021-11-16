import React from "react";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Destination from "./Destination/Destination";
import Gallary from "./Gallary/Gallary";

const Home = () => {
  return (
    <>
      <Banner />
      <Destination />
      <Blog />
      <Gallary />
    </>
  );
};

export default Home;
