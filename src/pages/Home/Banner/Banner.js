import React from "react";
import "./Banner.css";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
          <Container className="py-5">
              <div className="text-white my-5 py-5 text-center">
                  <h1 style={{"fontSize":"5rem"}}>PARIS</h1>
                  <h3 className="display-4 border-top w-50 mx-auto">BEST PLACE FOR HOLIDAY</h3>
                  <p>Started from :</p>
                  <p className="fw-bold">$570,90</p>
                  <Link to="/login"><Button variant="primary" className="px-5 py-3">Login</Button></Link>
              </div>
      </Container>
    </div>
  );
};

export default Banner;
