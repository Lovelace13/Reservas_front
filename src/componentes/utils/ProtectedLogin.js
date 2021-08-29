import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedLogin = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
     return true;
  };

  return (
     <Route
        {...rest}
        render={(props) => {
           if (!isAuthenticated()) {
              return <Component {...props} />;
           } else {
              return (
                 <Redirect
                    to={{
                       pathname: '/',
                       // eslint-disable-next-line react/prop-types
                       state: { from: props.location },
                    }}
                 />
              );
           }
        }}
     />
  );
};

export default ProtectedLogin;