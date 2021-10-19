import React from "react";
import dentists1 from "../../assets/images/doctor-1.jpg";
import dentists2 from "../../assets/images/doctor-2.jpg";
import dentists3 from "../../assets/images/doctor-3.jpg";
import dentists4 from "../../assets/images/doctor-4.jpg";
import dentists5 from "../../assets/images/doctor-5.jpg";
import dentists6 from "../../assets/images/doctor-6.jpg";
import dentists7 from "../../assets/images/doctor-7.jpg";
import dentists8 from "../../assets/images/doctor-8.jpg";
import dentists9 from "../../assets/images/doctor-9.jpg";
import Dentist from "./Dentist";
const dentists = [
  {
    img: dentists1,
    name: "Dr.Johnson Melbourne",
    expertize: "-Prosthodontics Dentist-",
  },
  {
    img: dentists2,
    name: "Dr.Ena Dicrosa",
    expertize: "-Aesthetic Dentistry-",
  },
  {
    img: dentists3,
    name: "Dr.Addison Smith",
    expertize: "-Gastroenterologists-",
  },
  {
    img: dentists4,
    name: "Dr.Daisy Gabriela",
    expertize: "-Endocrinologists-",
  },
  {
    img: dentists5,
    name: "Dr.Ronnie Aaron",
    expertize: "-Dermatologists-",
  },
  {
    img: dentists6,
    name: "Dr.Edie Dee",
    expertize: "-Cardiologists-",
  },
  {
    img: dentists7,
    name: "Dr.Sarah Taylor",
    expertize: "-Prosthodontics Dentist-",
  },
  {
    img: dentists8,
    name: "Dr.Aiken Ward",
    expertize: "-Aesthetic Dentistry-",
  },
  {
    img: dentists9,
    name: "Dr.Babatunde Jon",
    expertize: "-Gastroenterologists-",
  },
];

const Dentists = () => {
  return (
    <div className="container">
      <div className="row ">
        <h1 style={{ color: "#023c76" }} className="mt-5 text-center">
          Our Specialized and Experienced <br />
          <span style={{ color: "black" }}>-Dentist-</span>
        </h1>
        {dentists.map((dentist) => (
          <Dentist key={dentist.name} dentist={dentist}></Dentist>
        ))}
      </div>
    </div>
  );
};

export default Dentists;
