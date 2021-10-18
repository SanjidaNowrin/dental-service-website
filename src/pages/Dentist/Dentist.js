import React from "react";

const Dentist = ({ dentist }) => {
  const { name, img, expertize } = dentist;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{expertize}</h5>
    </div>
  );
};

export default Dentist;
