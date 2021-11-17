import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginuseingemail, loginwithgoogle } = useAuth();
  const [loginData, setLoginData] = useState();

  const location = useLocation();
  const history = useHistory();

  const handelChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[feild] = value;
    setLoginData(newloginData);
  };
  const loginHandeler = (e) => {
    e.preventDefault();
    loginuseingemail(loginData.email, loginData.password, location, history);
    console.log(loginData);
  };
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="w-50 mx-auto bg-white">
          <h3 className="text-center py-4">LOGIN</h3>
        </div>
        <div className="w-50 mx-auto">
          <Form onSubmit={loginHandeler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onBlur={handelChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handelChange}
                required
              />
            </Form.Group>
            <Form.Text className="text-muted">
              Don't have a Account{" "}
              <Link to="/register">Create New Account</Link>
            </Form.Text>
            <Button variant="primary" type="submit" className="w-100  p-3">
              LOGIN
            </Button>
            <Button
              variant="danger"
              onClick={() => loginwithgoogle(location, history)}
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

export default Login;
