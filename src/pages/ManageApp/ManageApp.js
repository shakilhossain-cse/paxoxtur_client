import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router";
import Manage from "../../components/Manage/Manage";

const ManageApp = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="pt-16 container md:w-5/6 mx-auto">
      <div className="flex justify-between p-6 bg-gray-300 my-10">
        <Link
          className="bg-white px-5 py-2 hover:bg-gray-100"
          to={`${url}/Viewride`}
        >
          View All Ride
        </Link>
        <Link
          className="bg-white px-5 py-2 hover:bg-gray-100"
          to={`${url}/Addride`}
        >
          Add Ride
        </Link>
        <Link
          className="bg-white px-5 py-2 hover:bg-gray-100"
          to={`${url}/Allorders`}
        >
          View All Order
        </Link>
      </div>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:Topic`}>
          <Manage />
        </Route>
      </Switch>
    </div>
  );
};

export default ManageApp;
