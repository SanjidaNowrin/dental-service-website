import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
