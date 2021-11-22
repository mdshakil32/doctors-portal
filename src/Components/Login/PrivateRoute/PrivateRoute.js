import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    let {user,isLoading} = useAuth();

    if(isLoading){
        return <Box sx={{ display: 'flex',justifyContent: 'center' }}> <CircularProgress /></Box>
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
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