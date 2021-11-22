import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const bookings = [
    {
        id:'1',
        name:'Teeth Orthodontics',
        time:'8.00 AM - 9.00 AM',
        seat:'10 space availabe'
    },
    {
        id:'2',
        name:'Cosmetic Dentistry',
        time:'10.05 AM - 11.30 AM',
        seat:'10 space availabe'
    },
    {
        id:'3',
        name:'Teeth Cleaning',
        time:'5.00 PM - 6.30 PM',
        seat:'10 space availabe'
    },
    {
        id:'4',
        name:'Cavity Protection',
        time:'7.00 AM - 8.00 AM',
        seat:'10 space availabe'
    },
    {
        id:'5',
        name:'Teeth Orthodontics',
        time:'8.00 AM - 9.00 AM',
        seat:'10 space availabe'
    },
    {
        id:'6',
        name:'Teeth Orthodontics',
        time:'8.00 AM - 9.00 AM',
        seat:'10 space availabe'
    }
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);

    return (
        <Container>
        <Box sx={{ flexGrow: 1 ,textAlign:'center'}}>
       
        {/* appointmnet title  */}
        <Typography variant="h4" gutterBottom component="div" sx={{ 
            fontWeight: 'bold',
            color: '#41CFCF',
            mb:8 }}>
                Available Appointment on {date.toDateString()} 
            </Typography>

            {
                bookingSuccess && <Alert severity="success" onClose={() => {}}>Booked successfully</Alert>
            }

        <Grid container spacing={3}>

            {
                bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}> </Booking> )
            }
          
        </Grid>
      </Box>
      </Container>
    );
};

export default AvailableAppointment;