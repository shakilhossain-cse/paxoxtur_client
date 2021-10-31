import React from "react";

const UserTiket = (props) => {
  const { name, userEmail, _id, status } = props.order;
  const deleteHandeler = (id) => {
    const del = window.confirm('Are you sure to delete')
    if (del) {
      fetch(`http://localhost:5000/ride/${id}`, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          props.deleteHandelerFromUi(id);
        }
      });
    };
  }

  return (
    <div class="p-4 lg:w-1/3">
      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          YOUR TIKET
        </h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {name}
        </h1>
        <p class="leading-relaxed mb-3">{userEmail}</p>
        <p class="leading-relaxed p-3 bg-gray-400 text-white mb-3">
          {status === 1 ? "panding" : ""}
        </p>
        <button
          onClick={() => deleteHandeler(_id)}
          className="p-3 bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserTiket;
