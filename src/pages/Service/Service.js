import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, desc, id } = service;
  return (
    <div className="mt-5 col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow card w-100 "
        style={{ background: "#e7eef3" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="text-center card-title">{name}</h5>
          <p className="card-text">{desc}</p>

          <Link to={`/detail/${id}`}>
            <button className="container details-btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Service;
