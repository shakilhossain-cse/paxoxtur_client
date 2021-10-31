import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import {useAuth} from "../../hooks/useAuth"
import useFirebase from "../../hooks/useFirebase";

const RideDetiles = () => {
  const { id } = useParams();
  const { User } = useFirebase();
  const [RideDetiles, setRideDetiles] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/ride/${id}`)
      .then((res) => res.json())
      .then((data) => setRideDetiles(data))
      .catch(() => {
        setRideDetiles({});
      });
  }, []);

  const buyHandeler = () => {
    const detiles = {
      userEmail: User.email,
      name: RideDetiles.name,
      image: RideDetiles.image,
      status: 1
    };
    fetch('http://localhost:5000/buyride', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detiles),
    })
      .then(res => res.json())
    .then(data => console.log(data))
  };
  return (
    <div className="pb-20 pt-32 container md:w-5/6 mx-auto">
      <div className="flex">
        <img
          alt="gallery"
          className="  object-cover object-center"
          src={RideDetiles.image}
        />

        <div className="p-4">
          <h2 className="font-bold text-3xl uppercase my-3">
            {RideDetiles.name}
          </h2>
          <p>{RideDetiles.describtion}</p>
          <h3 className="font-bold text-2xl my-6">${RideDetiles.price}</h3>
          <button
            className="my-4 text-white px-8 py-1 bg-blue-600 hover:bg-blue-800 rounded-md uppercase"
            onClick={buyHandeler}
          >
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideDetiles;
