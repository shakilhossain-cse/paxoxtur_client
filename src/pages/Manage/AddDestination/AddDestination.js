import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddDestination = () => {
  const [destinationData, setDestinationData] = useState({});
  const onChangeHandel = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newDestinationData = { ...destinationData };
    newDestinationData[feild] = value;
    setDestinationData(newDestinationData);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    fetch("https://frightful-labyrinth-33165.herokuapp.com/adddestination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destinationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Destination Added Successfully");
        }
      });
  };
  return (
    <Form className="my-5" onSubmit={submitHandeler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Destination Name"
          name="name"
          onChange={onChangeHandel}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Destination Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Destination Image Link"
          name="image"
          onChange={onChangeHandel}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Destination Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Destination Price"
          name="price"
          onChange={onChangeHandel}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Destination Place Describtion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="describtion"
          onChange={onChangeHandel}
          required
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-100">
        Add Destination
      </Button>
    </Form>
  );
};

export default AddDestination;
