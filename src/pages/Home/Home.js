import React from "react";
import Services from "../Services";
import Banner from "./Banner";
import Information from "./Information";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Information></Information>
    </div>
  );
};

export default Home;
