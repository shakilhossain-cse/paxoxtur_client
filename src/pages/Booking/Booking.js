import React, { useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const [number, setNumber] = useState();
  const data = {
    name: user.displayName,
    email: user.email,
    number: number,
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="http://www.emailmug.com/premium-template/bg/paxos/th.jpg"
              alt=""
              className="w-100"
            />
            <hr />
            <h2>Thailand Experience</h2>
            <div className="d-flex  my-4 align-items-center">
              <h1 className="text-primary fw-5 ">$450</h1>
              <h5 className="mx-3">3 days 2 nights</h5>
            </div>
            <p>
              Maecenas interdum consequat tellus vitae vehicula. Pellentesque
              egestas.Maecenas interdum consequat tellus vitae vehicula.
              Pellentesque egestas.Maecenas interdum consequat tellus vitae
              vehicula. Pellentesque egestas.
            </p>
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
