import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { User } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        User.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
