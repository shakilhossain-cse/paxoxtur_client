import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Gallary = () => {
  return (
    <div className="bg-white pt-5">
      <Container fluid className="pt-5">
        <div className="my-5 text-center">
          <p className="text-muted fst-italic">
            Interesting photos taken by agent
          </p>
          <h1>PICTURE GALLERY</h1>
        </div>
        <Row xs={1} md={2} className="">
          <Col className="p-0">
            <Card className="border-0">
              <Card.Img
                variant="top"
                src="http://www.emailmug.com/premium-template/bg/paxos/eff.jpg"
                className="image-fluid"
              />
            </Card>
          </Col>
          <Col className="p-0">
            <Row xs={1} md={2} className="">
              <Col className="p-0">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src="http://www.emailmug.com/premium-template/bg/paxos/223.jpg"
                    className="image-fluid"
                  />
                </Card>
              </Col>
              <Col className="p-0">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src="http://www.emailmug.com/premium-template/bg/paxos/221.jpg"
                    className="image-fluid"
                  />
                </Card>
              </Col>
              <Col className="p-0">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src="http://www.emailmug.com/premium-template/bg/paxos/22.jpg"
                    className="image-fluid"
                  />
                </Card>
              </Col>
              <Col className="p-0">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src="http://www.emailmug.com/premium-template/bg/paxos/tnm.jpg"
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallary;
