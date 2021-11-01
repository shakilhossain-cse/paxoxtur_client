import React from "react";

const Orders = (props) => {
  const { name, userEmail, _id } = props.order;
  const deleteHandeler = (id) => {
    const del = window.confirm("Are you sure to delete");
    if (del) {
      fetch(`https://frightful-labyrinth-33165.herokuapp.com/ride/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            props.deleteHandelerFromUi(id);
          }
        });
    }
  };
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <div>
          <span className="title-font font-medium">{name}</span>
          <div>
            <p>{userEmail}</p>
            <button className="px-2 text-white bg-yellow-600 rounded-md">
              Panding
            </button>
            <button
              onClick={() => deleteHandeler(`${_id}`)}
              className="ml-2 px-2 text-white bg-red-600 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
