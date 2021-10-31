import React, { useEffect, useState } from "react";
import Orders from "./Orders/Orders";

const Allorders = () => {

  const [DisplayOrder, setDisplayOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allorder`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayOrder(data);
      });
  }, []);

  const deleteHandelerFromUi = (item) => {
    const removeItem = DisplayOrder.filter((Order) => Order._id != item);
    setDisplayOrder(removeItem);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {DisplayOrder.map((order) => (
            <Orders order={order} deleteHandelerFromUi={deleteHandelerFromUi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allorders;
