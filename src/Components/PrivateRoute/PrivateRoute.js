import React, { useContext } from 'react';
import { Route, Redirect} from "react-router-dom";
import { authContext } from '../../App';
import jwt_decode from 'jwt-decode'

const PrivateRoute = ({ component:Component, ...rest }) => {
    const [loggedInUser] = useContext(authContext);

    const isLoggedIn =()=> {
        const token = sessionStorage.getItem('token');
        if(!token){
            return false;
        }
        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;

    }

    return (
              <Route
              {...rest}
              render={ ({ location }) =>
                        (loggedInUser.email || isLoggedIn()) ? (
                        <Component  />
                    ) : ( 
                    <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                  }
              />
    );
};

export default PrivateRoute;
