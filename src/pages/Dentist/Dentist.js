import React from "react";

const Dentist = ({ dentist }) => {
  const { name, img, expertize } = dentist;
  return (
    <div className="mt-5 text-center col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow card w-100 "
        style={{ background: "#e7eef3" }}
      >
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h3 className=" card-title">{name}</h3>
          <h5 className="card-text" style={{ color: "#023c76" }}>
            {expertize}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Dentist;
