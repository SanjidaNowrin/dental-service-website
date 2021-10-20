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
    time: "10am-12pm",
    day: "SAT-MON",
  },
  {
    img: dentists2,
    name: "Dr.Ena Dicrosa",
    expertize: "-Aesthetic Dentistry-",
    time: "9am-12pm",
    day: "SUN-MON",
  },
  {
    img: dentists3,
    name: "Dr.Addison Smith",
    expertize: "-Gastroenterologists-",
    time: "10am-1pm",
    day: "SAT-TUE",
  },
  {
    img: dentists4,
    name: "Dr.Daisy Gabriela",
    expertize: "-Endocrinologists-",
    time: "8am-1pm",
    day: "FRI-MON",
  },
  {
    img: dentists5,
    name: "Dr.Ronnie Aaron",
    expertize: "-Dermatologists-",
    time: "11am-12pm",
    day: "SAT-THU",
  },
  {
    img: dentists6,
    name: "Dr.Edie Dee",
    expertize: "-Cardiologists-",
    time: "7am-2pm",
    day: "SUN-WED",
  },
  {
    img: dentists7,
    name: "Dr.Sarah Taylor",
    expertize: "-Prosthodontics Dentist-",
    time: "9am-12pm",
    day: "THU-SUN",
  },
  {
    img: dentists8,
    name: "Dr.Aiken Ward",
    expertize: "-Aesthetic Dentistry-",
    time: "9am-3pm",
    day: "SAT-SUN",
  },
  {
    img: dentists9,
    name: "Dr.Babatunde Jon",
    expertize: "-Gastroenterologists-",
    time: "10am-11pm",
    day: "TUE-THU",
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
