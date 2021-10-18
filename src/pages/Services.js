import React from "react";
import Service from "./Service/Service";
import useAuth from "./../hooks/useAuth";

const Services = () => {
  const { detail } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ color: "#023c76" }} className="container text-center">
          Our Services
        </h1>
        {detail.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
