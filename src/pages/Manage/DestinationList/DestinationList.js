import React, { useState, useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://frightful-labyrinth-33165.herokuapp.com/alldestination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  const deleteFromUi = (id) => {
    const removeDestination = destinations.filter(
      (destination) => destination._id !== id
    );
    setDestinations(removeDestination);
  };
  const deleteHandeler = (id) => {
    const confirm = window.confirm("are you sure to delete?");
    if (confirm) {
      deleteFromUi(id);
      fetch(
        `https://frightful-labyrinth-33165.herokuapp.com/destination/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <Container className="my-4">
      <ListGroup variant="flush">
        {destinations.map((destination) => (
          <ListGroup.Item key={destination._id}>
            <div className="d-flex justify-content-evenly py-2">
              <img src={destination.image} alt="" width="150" height="100" />
              <div className="mt-4">
                <h5>{destination.name}</h5>
                <h3 className="text-primary fw-bolder">${destination.price}</h3>
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

export default DestinationList;
