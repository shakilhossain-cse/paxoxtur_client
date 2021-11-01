import React, { useEffect, useState } from "react";
import RideData from "./RideData/RideData";

const Viewride = () => {
  const [RideAllDatas, setRideAllDatas] = useState([]);
  useEffect(() => {
    fetch("https://frightful-labyrinth-33165.herokuapp.com/allride")
      .then((res) => res.json())
      .then((data) => setRideAllDatas(data));
  }, []);

  const deleteHandelerFromUi = (item) => {
    const removeItem = RideAllDatas.filter((Ride) => Ride._id != item);
    setRideAllDatas(removeItem);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {RideAllDatas.map((ride) => (
            <RideData ride={ride} deleteHandelerFromUi={deleteHandelerFromUi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Viewride;
