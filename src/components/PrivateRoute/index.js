/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('accessToken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('accessToken') ? (
        <Redirect
          to={{ pathname: '/todos', state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object),
};
LoginRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object),
};

export { PrivateRoute, LoginRoute };
