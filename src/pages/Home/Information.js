import React from "react";
import banner from "./../../assets/images/dentistry_care.jpg";
const Information = () => {
  return (
    <div className="container">
      <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
        <div className="col-md-6">
          <img src={banner} alt="" className="img-fluid" />
        </div>
        <div className="p-5 col-md-6">
          <h1 style={{ color: "#023c76" }}>Morden Dentistry Clinic</h1>
          <p>
            We offer a wide-range of dental services at the General Clinic.You
            will be provided with a comprehensive treatment plan prior to the
            start of any dental services.To make an appointment or learn more
            about the services available at the Dentistry clinic please call
            on.We offer the entire range of dental treatments and procedures at
            transparent and printed prices standards for all patients.We are a
            chain of dental clinics.We are offering specialized treatment by
            experienced doctor who have care about before and after the
            treatment.
          </p>
          <br />
          <p>
            <i
              className="pe-2 fas fa-arrow-circle-right"
              style={{ color: "#023c76" }}
            ></i>
            Certified Dentist Doctors.
          </p>
          <p>
            <i
              className="pe-2 fas fa-arrow-circle-right "
              style={{ color: "#023c76" }}
            ></i>
            Latest Technology Equipment.
          </p>
          <p>
            <i
              className="pe-2 fas fa-arrow-circle-right"
              style={{ color: "#023c76" }}
            ></i>
            Guarantee for dent treatment.{" "}
          </p>
          <p>
            <i
              className="pe-2 fas fa-arrow-circle-right"
              style={{ color: "#023c76" }}
            ></i>
            Before/After treatment care
          </p>
          <p>
            <i
              className="pe-2 fas fa-arrow-circle-right"
              style={{ color: "#023c76" }}
            ></i>
            Insurance facility available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
