import React from "react";
import { useHistory } from "react-router";

const Ride = ({ ride }) => {
  const { id, title, body } = ride;
  const history = useHistory();
  const tiketHandeler = () => {
    history.push(`/ride/${id}`);
  };
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://dummyimage.com/600x360"
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title.slice(0, 30)}
          </h1>
          <p className="leading-relaxed">{body.slice(0, 80)}</p>
          <button
            onClick={tiketHandeler}
            className="px-6 py-1 rounded-md mt-2 bg-blue-600 text-white hover:bg-indigo-600"
          >
            Get Tiket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ride;
