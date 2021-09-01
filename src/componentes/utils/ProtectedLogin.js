import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedLogin = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    let user = localStorage.getItem('RESERVA_APP');
    if (user != null) {
       var user_tmp = JSON.parse(user).usuario;
       if (user_tmp.length > 0) return user_tmp[0].username.length > 0;
    }
    return false;
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