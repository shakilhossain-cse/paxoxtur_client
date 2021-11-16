import React from "react";
import { Container, Button } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="bg-white my-5">
      <Container>
        <div className="my-5 text-center">
          <p className="text-muted fst-italic">Summer 2021 </p>
          <h1>PARIS FOR HOLIDAY</h1>
          <p className="w-75 mx-auto my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus, lacus eget faucibus blandit, quam augue suscipit tellus, at
            ultrices urna dolor ut lacus. Suspendisse potenti. Fusce bibendum
            sem lectus, sed volutpat massa suscipit et.
          </p>
          <Button variant="primary" className="px-5 py-3">
            Take a Look
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
