import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import chair from "../../../images/chair.png";
import { Container } from '@mui/material';



const TopBanner = () => {
    return (
        <Box sx={{ flexGrow:1,my:15 }}>
            <Container>
            <Grid container spacing={3} sx={{justifyContent: 'space-between'}} >
                <Grid item xs={12} md={5}>
                <Typography variant="h3" component="div" sx={{fontWeight: 'bold',color:'#121858' ,lineHeight:'4rem'}}>
                    Your New Smile <br /> Starts Here
                </Typography>
                <Typography variant="body1" sx={{color:'#9e9e9e',my:3}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus
                </Typography>
                <Button variant="contained" disableElevation size="large" sx={{backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',shadow:0,borderRadius: 0}}>Get Appoinment</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" style={{
                        width:'100%'
                    }} />
                </Grid>
                
            </Grid>
        </Container>
    </Box>
     
    
    );
};

export default TopBanner;