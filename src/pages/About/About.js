import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <h1>OUR PATNER</h1>
        <Row xs={1} md={3} className="g-4 my-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/photos/self-management-is-a-freelancers-greatest-tool-picture-id1294442411?b=1&k=20&m=1294442411&s=170667a&w=0&h=DzebibUiw8fb056LdMdG5oKURp9LJHfohv_nSG1d764=" />
                <Card.Body>
                  <Card.Title>Jone Deo</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
