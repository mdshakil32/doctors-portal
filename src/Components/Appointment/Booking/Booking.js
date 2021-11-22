import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,time,seat} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{my:1}}>
            <Paper elevation={6} sx={{py:5}}>
            {/* name  */}
            <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold',color: '#41CFCF' }}>
                {name}
            </Typography>

            {/* time  */}
            <Typography variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold'}}>
                {time}
            </Typography>

            {/* seat  */}
            <Typography variant="caption" gutterBottom component="div" sx={{ textTransform:'uppercase' }}>
                {seat}
            </Typography>

            {/* button  */}
            <Button onClick={handleBookingOpen} variant="contained" disableElevation size="large" sx={{
                backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',
                shadow:0,
                borderRadius: 0,
                mt:2}}>Book Appoinment</Button>
            </Paper>
          </Grid>

          <BookingModal
            date = {date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingSuccess}
          ></BookingModal>
          </>
    );
};

export default Booking;