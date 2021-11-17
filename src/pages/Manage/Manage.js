import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddDestination from "./AddDestination/AddDestination";
import AllOrders from "./AllOrders/AllOrders";
import DestinationList from "./DestinationList/DestinationList";

const Manage = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={3} className="bg-light">
          <ListGroup variant="flush" className="my-4">
            <ListGroup.Item
              as={Link}
              to={`${url}/addDestination`}
              className="py-3"
            >
              Add Destination
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              to={`${url}/destinationlist`}
              className="py-3"
            >
              Destination List
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/allorders`} className="py-3">
              All Orders
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={12} md={9} className="bg-light">
          <Switch>
            <Route exact path={path}>
              <h3 className="my-4">Please select a topic.</h3>
            </Route>
            <Route path={`${path}/addDestination`}>
              <AddDestination />
            </Route>
            <Route path={`${path}/destinationlist`}>
              <DestinationList />
            </Route>
            <Route path={`${path}/allorders`}>
              <AllOrders />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Manage;
