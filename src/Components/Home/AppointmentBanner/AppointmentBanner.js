import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png"
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import bg from "../../../images/appointment-bg.png"

const AppointBg ={
    backgroundImage:`url(${bg})`,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(39, 45, 73 ,.9)',
    backgroundBlendMode: 'darken, luminosity'

}

const AppointmentBanner = () => {
    return (
        <Box style={AppointBg} sx={{ flexGrow: 1,my:20 }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={5}>
                <img src={doctor} alt=""
                style={{
                    maxWidth:'100%',
                    marginTop:-130
                }} />
            </Grid>
            <Grid item xs={8} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign:'left'
                }}>
                <Box >
                    <Typography variant="h5" sx={{ fontWeight: 'bold',color:'#41CFCF' }}>
                        Appointment
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold',my:3,color:'white' }}>
                        Make an Appointment <br /> today
                    </Typography>
                    <Typography variant="body1" sx={{color:'white',mb:3}}>
                        Its a long establised fact that a reader will be distracted by the readble content of a page when looking at its
                    </Typography>
                    <Button variant="contained" disableElevation size="large" sx={{backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',shadow:0,borderRadius: 0}}>Learn More</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
    );
};

export default AppointmentBanner;