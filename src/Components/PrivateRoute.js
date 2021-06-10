import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserLoginContext } from './ContextAPI/UserLoginContext';

const PrivateRoute = ({ children, ...rest }) => {

  const { loginUser } = useContext(UserLoginContext);

  return (
    <Route
      {...rest}

      render={({ location }) =>

      loginUser?.email || loginUser?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginAccount",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;