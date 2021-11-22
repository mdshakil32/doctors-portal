import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Home/Services/Services';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
   <BrowserRouter>
    <Switch>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/home">
        <Home></Home>
      </Route>

      <PrivateRoute path="/appointment">
        <Appointment></Appointment>
      </PrivateRoute>

      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>

      <Route path="/login">
        <Login></Login>
      </Route>
      
      <Route path="/register">
        <Register></Register>
      </Route>



    </Switch>
   </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
