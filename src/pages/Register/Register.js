import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { registeruser, loginwithgoogle } = useFirebase();
  const [registerData, setRegisterData] = useState({});
  const handelChange = (e) => {
    const value = e.target.value;
    const feild = e.target.name;
    const newRegisterData = { ...registerData };
    newRegisterData[feild] = value;
    setRegisterData(newRegisterData);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    registeruser(registerData.name, registerData.email, registerData.password);
  };
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="w-50 mx-auto bg-white">
          <h3 className="text-center py-4">REGISTER</h3>
        </div>
        <div className="w-50 mx-auto">
          <Form onSubmit={submitHandeler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onBlur={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onBlur={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handelChange}
              />
            </Form.Group>
            <Form.Text className="text-muted">
              Already Have a Account <Link to="/login">Login Now</Link>
            </Form.Text>
            <Button variant="primary" type="submit" className="w-100  p-3">
              REGISTER
            </Button>
            <Button
              variant="danger"
              onClick={() => loginwithgoogle()}
              className="w-100 mt-1  p-3"
            >
              COUTINUE WITH GOOGLE
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
