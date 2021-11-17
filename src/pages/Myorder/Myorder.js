import React from "react";
import { Container, Button } from "react-bootstrap";

const Myorder = () => {
  return (
    <div>
      <Container>
        <h3 className="p-4 bg-light">MY ORDERS</h3>
        <div className="d-flex justify-content-evenly my-4 bg-light py-2">
          <img
            src="http://www.emailmug.com/premium-template/bg/paxos/th.jpg"
            alt=""
            width="150"
            height="100"
          />
          <div className="mt-4">
            <h5>This Title Is Here</h5>
            <h3 className="text-primary fw-bolder">$565</h3>
          </div>
          <div>
            <Button variant="danger" className="mt-4">Remove</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Myorder;
