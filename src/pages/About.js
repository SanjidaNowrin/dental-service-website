import React from "react";
import about from "./../assets/images/about.jpg";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
          <div className="col-md-6">
            <h1 style={{ color: "#023c76" }}>
              Welcome To Our Dentistry Clinic
            </h1>
            <p className="mt-4">
              You have been referred to the Dentistry Welcome Clinic for a
              comprehensive wellness visit that will identify how we can help
              you achieve your personal health and wellness goals. The Dentistry
              Welcome Clinic is an enhancement to services provided by your
              primary care physician and health plan. The Dentistry Welcome
              Clinic is the first step in reaching your goals. In one extended
              appointment, you will experience: Review of your medical history
              Review of your medications A thorough physical exam by our care
              team Care coordination to meet your health goals Detailed plan of
              care Scheduling and follow-up on identified care needs Lab work or
              medical imaging, if needed Assistance creating a MyChart account,
              if you don’t currently have one Follow-up appointments will be
              scheduled at the conclusion of your visit with the primary care
              physician that you have selected.
            </p>
          </div>
          <div className="col-md-6">
            <img src={about} alt="" className="img-fluid" />
          </div>
        </div>
        {/* advantages section*/}
        <h1 style={{ color: "#023c76" }} className="mt-5 text-center">
          Our Advantages
        </h1>
        <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div
                className=" card-body"
                style={{ backgroundColor: "#e7eef3" }}
              >
                <h5 className="card-title">
                  <i
                    className="fas fa-trophy fa-3x"
                    style={{ color: "#023c76" }}
                  ></i>
                </h5>
                <h3 className="mt-4">1256</h3>
                <p className="card-text">
                  The Quality of Used Medical Materials and staff.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div
                className="card-body "
                style={{ backgroundColor: "#e7eef3" }}
              >
                <h5 className="card-title">
                  <i
                    className="far fa-smile fa-3x"
                    style={{ color: "#023c76" }}
                  ></i>
                </h5>
                <h3 className="mt-4">3569</h3>
                <p className="card-text">
                  A Full Range of Dental Services and support.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div className="card-body" style={{ backgroundColor: "#e7eef3" }}>
                <h5 className="card-title">
                  <i
                    className="fas fa-tools fa-3x"
                    style={{ color: "#023c76" }}
                  ></i>
                </h5>
                <h3 className="mt-4">5863</h3>
                <p className="card-text">
                  Dental Implants-New Teeth in One Day.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div className="card-body" style={{ backgroundColor: "#e7eef3" }}>
                <h5 className="card-title">
                  <i
                    className="fas fa-money-bill-wave fa-3x"
                    style={{ color: "#023c76" }}
                  ></i>
                </h5>
                <h3 className="mt-4">2567</h3>
                <p className="card-text">
                  Loyalty Discounts of Regular Customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* success section*/}
        <h1 style={{ color: "#023c76" }} className="mt-5 text-center">
          The Massive Success of Our Clinic
        </h1>
        <div className="mt-5 mb-5 row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-users fa-3x"
                  style={{ color: "#023c76" }}
                ></i>
                <h4 className="card-title">Talented Doctors Team</h4>
                <p className="card-text">
                  We have built our dentistry over the strong pillars of 22 MDS
                  surgeons. Our team has expert professionals who are immensely
                  experienced.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-hand-holding-medical fa-3x"
                  style={{ color: "#023c76" }}
                ></i>
                <h4 className="card-title">Affordable Dental Care</h4>
                <p className="card-text">
                  We provide dental care to nearly million patients every year.
                  Listed below are some of the services can provide our
                  patients.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-life-ring fa-3x"
                  style={{ color: "#023c76" }}
                ></i>
                <h4 className="card-title">24/7 Support</h4>
                <p className="card-text">
                  Customer support is a range of customer services to assist
                  customers in making cost effective and correct use of a
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
