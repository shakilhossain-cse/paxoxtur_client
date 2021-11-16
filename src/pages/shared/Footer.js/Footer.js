import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-muted">
      <Container className="py-5">
        <div className="text-center">
          <img
            src="http://www.emailmug.com/premium-template/bg/paxos/paxos.png"
            alt=""
          />
         
          <p className="my-4">
          © All Rights Reserved Yemail.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
