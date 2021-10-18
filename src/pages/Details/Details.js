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
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  );
};

export default Details;
