import React, { useRef } from "react";
import { useHistory } from "react-router";

const Addride = () => {
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const describtion = useRef();
  const history = useHistory();
  const rideHandeler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      price: price.current.value,
      image: image.current.value,
      describtion: describtion.current.value,
    };

    //   console.log(data);

    fetch("https://frightful-labyrinth-33165.herokuapp.com/addride", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          history.push("/manageapp/Viewride");
        }
      });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={rideHandeler}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ref={name}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ref={price}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="image"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Image Url
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ref={image}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="describtion"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Describtion
                  </label>
                  <textarea
                    id="describtion"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ref={describtion}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                >
                  Add Ride
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addride;
