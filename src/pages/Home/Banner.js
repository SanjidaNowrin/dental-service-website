import React from "react";
import Bg from "./../../assets/images/bg.png";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mb-5">
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="py-5 my-5 text-center">
              <h1 className="text-white">OUR SMILES SPEAK THEMSELVES</h1>

              <p className="my-4 text-white fs-5">
                A talented team of dentists recognized for the high quality of
                their dental procedures.
              </p>

              <NavLink
                to="/contact"
                className="px-4 py-2 border-0 rounded-pill btn btn-primary fs-5"
                style={{ backgroundColor: "#023c76" }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
