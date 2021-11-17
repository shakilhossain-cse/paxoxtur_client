import React, { useState, useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://frightful-labyrinth-33165.herokuapp.com/allorders")
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
    <Container className="my-4">
      <ListGroup variant="flush">
        {orders.map((destination) => (
          <ListGroup.Item key={destination._id}>
            <div className="d-flex justify-content-evenly py-2">
              <img
                src={destination.destinationImage}
                alt=""
                width="150"
                height="100"
              />
              <div className="mt-4">
                <h5>{destination.destinationName}</h5>
                <h3 className="text-primary fw-bolder">
                  ${destination.destinationPrice}
                </h3>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="mt-4"
                  onClick={() => deleteHandeler(destination._id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AllOrders;
