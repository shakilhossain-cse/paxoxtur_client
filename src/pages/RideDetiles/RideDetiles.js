import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const RideDetiles = () => {
  const { id } = useParams();

  const [RideDetiles, setRideDetiles] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setRideDetiles(data))
      .catch(() => {
        setRideDetiles({});
      });
  }, []);
  return (
    <div className="pb-20 pt-32 container md:w-5/6 mx-auto">
      <div className="flex">
        <img
          alt="gallery"
          className="  object-cover object-center"
          src="https://dummyimage.com/600x360"
        />

        <div className="p-4">
          <h2 className="font-bold text-3xl uppercase my-3">{RideDetiles.title}</h2>
          <p>{RideDetiles.body}</p>
          <h3 className="font-bold text-2xl my-6">$29</h3>
          <button className="my-4 text-white px-8 py-1 bg-blue-600 hover:bg-blue-800 rounded-md uppercase">buy</button>
        </div>
      </div>
    </div>
  );
};

export default RideDetiles;
