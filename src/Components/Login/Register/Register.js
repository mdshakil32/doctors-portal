import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../../Shared/Navbar/Navbar';
import { Button, Container, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useHistory, useLocation } from 'react-router';

const Register = () => {

    const [loginData,setLoginData] = useState({})
    const {registerUser,isLoading,authError,user,loginWithGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e=>{
        const field = e.target.name ;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(field,value,newLoginData,);
        setLoginData(newLoginData);    
    }
    console.log(loginData);

    const handaleRegister =e =>{
        if(loginData.password !== loginData.password2){
            alert("Password didn't matched")
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,history)
        

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
                    <Typography variant="h6" gutterBottom sx={{textAlign:'center'}} >Create An Account</Typography>

                   

                    {
                        !isLoading && <form onSubmit={handaleRegister} >
                        <TextField 
                            label="Name" 
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{width:'100%',my:1}}
                         />

                        <TextField 
                            type="email" 
                            label="Email" 
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{width:'100%',my:1}}
                         />
    
                        <TextField 
                            type="password" 
                            label="Password" 
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{width:'100%',my:1}} />
    
                        <TextField 
                            type="password" 
                            label="Retype Password" 
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{width:'100%',my:1}} />
    
                        <Link to="login" style={{textDecoration:'none',color:'tomato'}}>
                            Already Registered? Please Login
                        </Link>
                        
    
                        <Button type="submit" variant="contained"  disableElevation size="large" sx={{
                            backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',
                            shadow:0,
                            borderRadius: 0,
                            mt:5,
                            mb:3,
                            width:'100%'}}>
                            Register</Button>
                        </form>
                    }
                    {
                        isLoading && <Box sx={{ display: 'flex',justifyContent: 'center' }}>
                        <CircularProgress />
                      </Box>
                    }
                    {
                        user?.email && <Alert severity="success" onClose={() => {}}>Registered successfully</Alert>
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
                        Register With Google</Button>

                    
                </Grid>
                <Grid item  xs={12} sm={12} md={6} lg={6} >
                    <img src={login} alt="" style={{ width:'100%' }} />
                </Grid>
               
            </Grid>
            </Container>
        </div>
    );
};

export default Register;