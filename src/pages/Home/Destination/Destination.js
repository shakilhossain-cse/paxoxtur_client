import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Destination = () => {
  return (
    <div className="bg-light py-5">
      <Container className="">
        <div className="my-5 text-center">
          <p className="text-muted fst-italic">Buisness quality</p>
          <h1>OUR DESTINATIONS</h1>
        </div>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card className="border-0 bg-light">
                <Card.Img
                  variant="top"
                  src="http://www.emailmug.com/premium-template/bg/paxos/th.jpg"
                />
                <Card.Body className="my-2">
                  <Card.Title className="fs-3">Thailand Experience</Card.Title>
                  <div className="d-flex  my-4 align-items-center">
                    <h1 className="text-primary fw-5 ">$450</h1>
                    <h5 className="mx-3">3 days 2 nights</h5>
                  </div>
                  <div className="mb-4">
                    <img
                      src="http://www.emailmug.com/premium-template/bg/paxos/tso1.png"
                      alt="icon"
                      className="mx-2"
                    />
                    <img
                      src="http://www.emailmug.com/premium-template/bg/paxos/tso2.png"
                      alt="icon"
                      className="mx-2"
                    />
                    <img
                      src="http://www.emailmug.com/premium-template/bg/paxos/tso3.png"
                      alt="icon"
                      className="mx-2"
                    />
                    <img
                      src="http://www.emailmug.com/premium-template/bg/paxos/tso4.png"
                      alt="icon"
                      className="mx-2"
                    />
                    <img
                      src="http://www.emailmug.com/premium-template/bg/paxos/tso5.png"
                      alt="icon"
                      className="mx-2"
                    />
                  </div>
                  <Card.Text className="text-muted">
                    Maecenas interdum consequat tellus vitae vehicula.
                    Pellentesque egestas.
                  </Card.Text>
                  <Button variant="primary" className="px-4 py-2 rounded-pill">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
