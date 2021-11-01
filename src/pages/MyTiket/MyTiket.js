import React, { useEffect, useState } from "react";
import UserTiket from "../../components/Tiket/UserTiket";
import useAuth from "../../hooks/useAuth";

const MyTiket = () => {
  const { User } = useAuth();
  const [orders, setOrders] = useState([]);
  const [DisplayOrder, setDisplayOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://frightful-labyrinth-33165.herokuapp.com/userorder/${User.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setDisplayOrder(data);
      });
  }, []);

  const deleteHandelerFromUi = (item) => {
    const removeItem = orders.filter((Order) => Order._id != item);
    setDisplayOrder(removeItem);
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container md:w-5/6 px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {DisplayOrder.map((order) => (
            <UserTiket
              order={order}
              deleteHandelerFromUi={deleteHandelerFromUi}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTiket;
