import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [number, setNumber] = useState();

  const [destinations, setDestinations] = useState({});
  useEffect(() => {
    fetch(`https://frightful-labyrinth-33165.herokuapp.com/destination/${id}`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  const data = {
    destinationName: destinations.name,
    destinationPrice: destinations.price,
    destinationImage: destinations.image,
    destinationDescribtion: destinations.describtion,
    userName: user.displayName,
    email: user.email,
    number: number,
    status: "pending",
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    fetch("https://frightful-labyrinth-33165.herokuapp.com/bookingplace", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert("Congratulation You Booked a places"));
  };

  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={destinations.image} alt="" className="w-100" />
            <hr />
            <h2>{destinations.name}</h2>
            <div className="d-flex  my-4 align-items-center">
              <h1 className="text-primary fw-5 ">${destinations.price}</h1>
              <h5 className="mx-3">3 days 2 nights</h5>
            </div>
            <p>{destinations.describtion}</p>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center">YOUR INFO</h2>
            <Form onSubmit={submitHandeler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" value={user.displayName} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={user.email} readOnly />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Type Number"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" className="w-100" type="submit">
                Book
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
