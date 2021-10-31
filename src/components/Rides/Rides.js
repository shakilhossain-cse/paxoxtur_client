import React, { useState } from "react";
import Ride from "../Ride/Ride";

const Rides = () => {
  const [Rides, setRides] = useState([]);
  useState(() => {
    fetch("http://localhost:5000/allride")
      .then((res) => res.json())
      .then((data) => setRides(data))
      .catch(() => {
        setRides([]);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font" id="rides">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            OUR RIDES
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Rides.length ? (
            Rides.map((ride) => <Ride ride={ride} key={ride.id} />)
          ) : (
            <p className="mx-auto">No Data Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Rides;
