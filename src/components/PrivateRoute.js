import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {useAuth0} from '@auth0/auth0-react';

const PrivateRoute = ({children}, ...rest) => {
    const {isAuthenticated, user} = useAuth0();
    const isLogin = isAuthenticated && user;
    return <Route {...rest}
            render={()=>{
                return isLogin ? children : <Redirect to="/login" />;
            }}
    >
    </Route>;
}

export default PrivateRoute