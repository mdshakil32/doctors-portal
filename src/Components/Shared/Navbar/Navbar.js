import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const {user,logout}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link to="home" style={{color:'white',textDecoration:'none'}} ><Button color="inherit">Home</Button></Link>

          <Link to="appointment" style={{color:'white',textDecoration:'none'}}><Button color="inherit">Appointment</Button></Link>

          {
            user?.email && <Link to="dashboard" style={{color:'white',textDecoration:'none'}}><Button color="inherit">Dashboard</Button></Link>
          }
          


          
          {
            user?.email? <Button onClick={logout} color="inherit" sx={{color:'red'}}>Logout</Button>:
            <Link to="login" style={{color:'white',textDecoration:'none'}}> <Button color="inherit">Login</Button></Link>
          }
          
          
        </Toolbar>
        </AppBar>
    </Box>
    );
};

export default Navbar;