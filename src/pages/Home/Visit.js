import React from "react";
import visit from "./../../assets/images/gum-treatment.jpg";
const Visit = () => {
  return (
    <div style={{ backgroundColor: "#E7EEF3" }} className="p-4">
      <div className="container">
        <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
          <div className="mt-0 col-md-6">
            <h1 style={{ color: "#023C76" }}>
              Which Reason to Visit Our Clinic
            </h1>
            <p>
              Dentistry was founded in 2021 with the vision of developing high
              quality and affordable health care infrastructure Chicago.
            </p>
            <br />
            <p>
              We are a chain of dental clinics offering specialized treatment by
              experienced doctors. We offer the entire range of dental
              treatments and procedures at transparent and printed prices
              standards for all patients. We offer the entire range of dental
              treatments and procedures at transparent and printed prices
              standards for all patients.
            </p>
            <br />
            We have built our dentistry over the strong pillars of 22 MDS
            surgeons. Our team has expert professionals who are immensely
            experienced for several years. We are proud to have the opportunity
            to give you the smile of your dreams
          </div>
          <div className="col-md-6">
            <img src={visit} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
