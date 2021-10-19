import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className=" section-gap">
        <div className="wrapper">
          <h3 className="text-center global-title">Contact us</h3>
          <div className="d-grid contact-view">
            <div className="cont-details">
              <div className="cont-top">
                <div className="text-center cont-left">
                  <span className="fa fa-phone "></span>
                </div>

                <div className="cont-right">
                  <h6>Call Us</h6>
                  <p>+123 45 67 89</p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="text-center cont-left">
                  <span className="fa fa-envelope"></span>
                </div>
                <div className="cont-right">
                  <h6>Email Us</h6>
                  <p>example@mail.com</p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="text-center cont-left">
                  <span className="fa fa-map-marker "></span>
                </div>
                <div className="cont-right">
                  <h6>Address</h6>
                  <p>Address here,Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="map-content">
              <form>
                <div className="twice-two">
                  <input
                    type="text"
                    className="form-control"
                    name="w3lName"
                    id="w3lName"
                    placeholder="Name"
                    required=""
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="w3lSender"
                    id="w3lSender"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="twice">
                  <input
                    type="text"
                    className="form-control"
                    name="w3lSubject"
                    id="w3lSubject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <textarea
                  name="w3lMessage"
                  className="form-control"
                  id="w3lMessage"
                  placeholder="Message"
                  required=""
                ></textarea>
                <button type="submit" className="btn btn-contact">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
