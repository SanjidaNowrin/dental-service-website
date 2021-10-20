import React from "react";
import { useParams } from "react-router";

import useAuth from "./../../hooks/useAuth";
import { Container } from "react-bootstrap";

const Details = () => {
  const { serviceId } = useParams();
  const { detail } = useAuth();

  const matchingService = detail?.find(
    (service) => Number(service.id) === Number(serviceId)
  );

  return (
    <div>
      <Container>
        <div className="p-1 pb-1 m-5 border-0 shadow-lg card">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="mt-5 ms-3">
                <img
                  width="75%"
                  className="p-2 border border-2 img-fluid rounded-circle"
                  src={matchingService?.img}
                  alt="..."
                />
              </div>
            </div>
            <div className="py-5 col-md-6">
              <div className="card-body">
                <h4
                  className="card-title fw-bold "
                  style={{ color: "#023c76" }}
                >
                  {matchingService?.name}
                </h4>
                <h6 className="mb-4 card-text">{matchingService?.desc}</h6>
                <h4
                  className="card-title fw-bold "
                  style={{ color: "#023c76" }}
                >
                  Benefits:
                </h4>

                <h6 className="mb-4 card-text">
                  <i
                    class="fas fa-caret-right pe-2 mt-1"
                    style={{ color: "#023c76" }}
                  ></i>
                  {matchingService?.advantages}
                </h6>
                <h3
                  className="card-title fw-bold "
                  style={{ color: "#023c76" }}
                >
                  Cost:
                </h3>
                <h5 className="mb-4 card-text">
                  <i class="fas fa-money-check-alt pe-2 mt-1"></i>
                  {matchingService?.cost}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
