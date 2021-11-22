import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import chair from "../../../images/chair.png"
import Calendar from '../../Shared/Calendar/Calendar';



const AppointmentHeader = ({date,setDate}) => {

    return (
        <Container>
        <Box sx={{ flexGrow: 1,my:10 }}>
            <Grid container spacing={2}>
                
                <Grid item xs={12} md={6}>

                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom component="div">
                    Appointment
                </Typography>

                <Calendar date={date} setDate={setDate} ></Calendar>
                    
                </Grid>
            <Grid item xs={12} md={6}>
            <img src={chair} alt=""
                style={{
                    width:'100%',
                }} />
            </Grid>
        </Grid>
    </Box>
    </Container>
    );
};

export default AppointmentHeader;