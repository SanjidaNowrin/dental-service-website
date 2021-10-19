import React from "react";
import notFound from "../assets/images/404.png";
const NotFound = () => {
  return (
    <div className="text-center">
      <img
        className="container img-fluid"
        src={notFound}
        alt=""
        style={{ width: "600px" }}
      />
      <div className="mt-2 mb-5 text-danger">
        <h2>Page not found</h2>
        <h5>The page you want to go is not currently available</h5>
      </div>
    </div>
  );
};

export default NotFound;
