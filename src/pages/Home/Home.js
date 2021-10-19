import React from "react";
import Services from "../Services";
import Banner from "./Banner";
import Information from "./Information";
import Visit from "./Visit";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Information></Information>
      <Visit></Visit>
    </div>
  );
};

export default Home;
