import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const redirect = rest.location.pathname;

  return (
    <Route {...rest} render={function(props) {
      return (
        rest.loggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: redirect
          }} />
      )}
    } />
  );
}

export default withRouter(ProtectedRoute);


/*
const ProtectedRoute = ({component: Component, loggedIn, ...rest}) => (
  <Route
      {...rest}
      render={props => (
          loggedIn
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: {from: props.location.pathname}
              }}/>
      )}
  />
);

export default ProtectedRoute;
*/