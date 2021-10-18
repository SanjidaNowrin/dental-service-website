import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Service from "./../Services";

const Details = () => {
  const { serviceId } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`./fakeData.json`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [Service]);
  const item = detail.filter((td) => td.id === serviceId);
  console.log(item);

  return (
    <div>
      <h2>This is booking :{item[0]?.name}</h2>
    </div>
  );
};

export default Details;
