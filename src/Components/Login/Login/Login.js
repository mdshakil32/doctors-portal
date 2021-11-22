import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../../Shared/Navbar/Navbar';
import { Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useHistory, useLocation } from 'react-router';
import login from "../../../images/login.png"
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const {user,authError,isLoading,loginByPassword,loginWithGoogle} = useAuth();

    const handleOnChange = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }


    const handaleLogin =e =>{
        loginByPassword(loginData.email,loginData.password,history,location)
        e.preventDefault();
    }

    const handleGoogleLogin=()=>{
        loginWithGoogle(history,location);
    }

    return (
        <div>
            <Navbar></Navbar>
            
            <Container>
            <Grid container spacing={2} sx={{mt:2,justifyContent: 'space-between',alignItems: 'center'}}>
                <Grid item  xs={12} sm={12} md={6} lg={5} sx={{p:3}}>
                    <Typography variant="h6" gutterBottom sx={{textAlign:'center'}} >Login</Typography>

                    <form onSubmit={handaleLogin} >
                    <TextField 
                        type="email" 
                        label="Email" 
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"
                        sx={{width:'100%',my:1}}
                     />

                    <TextField 
                        type="password" 
                        label="Password" 
                        name="password"
                        onChange={handleOnChange}
                        variant="standard"
                        sx={{width:'100%',my:1}} />

                    <Link to="register" style={{textDecoration:'none',color:'tomato'}}>
                        New? Please Register
                    </Link>
                    

                    <Button type="submit" variant="contained"  disableElevation size="large" sx={{
                        backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',
                        shadow:0,
                        borderRadius: 0,
                        mt:2,
                        width:'100%'}}>
                        Sign In</Button>
                    </form>
                    {
                        user?.email && <Alert severity="success" onClose={() => {}}>Logged in successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error" onClose={() => {}}>{authError} </Alert>
                    }

                <Button onClick={handleGoogleLogin} type="submit" variant="contained"  disableElevation size="large" sx={{
                        backgroundImage: 'linear-gradient(to right, #DE3163 , #FF9B00)',
                        shadow:0,
                        borderRadius: 0,
                        mt:2,
                        width:'100%'}}>
                        Login With Google</Button>

                </Grid>
                <Grid item  xs={12} sm={12} md={6} lg={6} >
                    <img src={login} alt="" style={{ width:'100%' }} />
                </Grid>
               
            </Grid>
            </Container>
        </div>
    );
};

export default Login;