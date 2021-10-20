import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import signup from "./../assets/images/signup.png";

const Signup = () => {
  const { allContext } = useAuth();
  const { getPhoto, getName, singUp, getEmail, getPassword, error } =
    allContext;

  return (
    <div className="container">
      <div className="m-0 mt-5 mb-5 row">
        <div className="col-lg-6 col-sm-12 ">
          <img src={signup} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="p-5 my-4 text-center shadow-lg">
            <h2 style={{ color: "#023c76" }}>Please Sign Up</h2>
            <p className="mt-2 mb-4 ">Sign Up with Email & Password</p>
            <p className="text-center text-danger">{error}</p>
            <div className="mx-auto w-75 ">
              <Form onSubmit={singUp}>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Name
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#023c76" }}
                        ></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getName}
                        type="text"
                        autoComplete="current-name"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                      Your Email Address
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "#023c76" }}
                        ></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getEmail}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="text-start">
                    <Form.Label htmlFor="password" visuallyHidden>
                      Your Password
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faLock}
                          style={{ color: "#023c76" }}
                        ></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getPassword}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Profile photo URL
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faLink}
                          style={{ color: "#023c76" }}
                        ></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getPhoto}
                        type="text"
                        autoComplete="current-text"
                        id="photo"
                        placeholder="Enter valid photo url"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <button
                  type="submit"
                  className="mt-2 btn btn-primary w-100"
                  style={{ backgroundColor: "#023C76" }}
                >
                  Sign up
                </button>
              </Form>
            </div>
            <p className="mt-2">
              <NavLink className="text-decoration-none" to="/login">
                Already have an account? Please login!
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
