import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="w-50 mx-auto bg-white">
          <h3 className="text-center py-4">REGISTER</h3>
        </div>
        <div className="w-50 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
              Already Have a Account <Link to="/login">Login Now</Link>
            </Form.Text>
            <Button variant="primary" type="submit" className="w-100  p-3">
              REGISTER
            </Button>
            <Button variant="danger" type="submit" className="w-100 mt-1  p-3">
              COUTINUE WITH GOOGLE
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
