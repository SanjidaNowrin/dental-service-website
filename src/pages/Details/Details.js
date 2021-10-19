import React from "react";
import { useParams } from "react-router";

import useAuth from "./../../hooks/useAuth";

const Details = () => {
  const { serviceId } = useParams();
  const { detail } = useAuth();

  const matchingService = detail?.find(
    (service) => Number(service.id) === Number(serviceId)
  );

  return (
    <div className="container mt-5 mb-5">
      <div class="card mb-3" style={{ maxWidth: "700px" }}>
        <div class="row g-4">
          <div class="col-md-5">
            <img
              src={matchingService?.img}
              className="text-center img-fluid rounded-start"
              alt=".."
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h2
                class="card-title font-weight-bold"
                style={{ color: "#023c76", fontWeight: "600" }}
              >
                {matchingService?.name}
              </h2>
              <p class="card-text">{matchingService?.desc}</p>
              <h4 style={{ color: "#023c76" }}>Benefits:</h4>

              <i
                class="fas fa-caret-right pe-2 mt-1"
                style={{ color: "#023c76" }}
              ></i>

              {matchingService?.advantages}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-4">
          <div
            className="p-3 mb-5 border-0 rounded shadow card w-100 "
            style={{ background: "#e7eef3" }}
          >
            <img
              src={matchingService?.img}
              className="img-fluid rounded-start"
              alt=".."
            />
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{matchingService?.name}</h5>
                <p className="card-text">{matchingService?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Details;
