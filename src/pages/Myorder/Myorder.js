import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Myorder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://frightful-labyrinth-33165.herokuapp.com/bookingplace/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const deleteFromUi = (id) => {
    const removeOrder = orders.filter((order) => order._id !== id);
    setOrders(removeOrder);
  };
  const deleteHandeler = (id) => {
    const confirm = window.confirm("are you sure to delete?");
    if (confirm) {
      deleteFromUi(id);
      fetch(`https://frightful-labyrinth-33165.herokuapp.com/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <Container>
        <h3 className="p-4 border-top">MY ORDERS</h3>
        {orders.map((order) => (
          <div
            className="d-flex justify-content-evenly my-4 bg-light py-2"
            key={order._id}
          >
            <img src={order.destinationImage} alt="" width="150" height="100" />
            <div className="mt-4">
              <h5>{order.destinationName}</h5>
              <h3 className="text-primary fw-bolder">
                ${order.destinationPrice}
              </h3>
            </div>
            <div>
              <Button
                variant="danger"
                className="mt-4"
                onClick={() => deleteHandeler(order._id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Myorder;
