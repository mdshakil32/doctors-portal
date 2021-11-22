import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import bg from "../../../images/appointment-bg.png"

const ContactBg ={
    backgroundImage:`url(${bg}) `,
    backgroundSize:'cover',
    backgroundColor: 'rgba(39, 45, 73 ,.9)',
    backgroundBlendMode: 'darken, luminosity'

}


const ContactUs = () => {
    return (
        <Box style={ContactBg} sx={{ flexGrow: 1,py:10 }}>
            <Container >
               
                <Typography variant="h6" gutterBottom component="div" sx={{textAlign:'center',color: '#41CFCF'}}>
                    Contact Us
                </Typography>
                <Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center',fontWeight:'bold',mb:6,color:'white'}}>
                    Always Connect With Us
                </Typography>
            <Grid container spacing={2} sx={{display: 'flex',justifyContent:'center'}}>

                <Grid item xs={12} sm={8} md={6} sx={{textAlign:'center'}}  >
                    <form>
                        <TextField 
                        required
                        id="outlined-basic" 
                        type="email"
                        label="Email Address" 
                        variant="filled"
                        sx={{width:"100%",backgroundColor:'white'}}
                         />
                        <TextField 
                        required
                        id="outlined-basic" 
                        label="Subject" 
                        variant="filled"
                        sx={{width:"100%",my:2,backgroundColor:'white'}}
                         />
                        <TextField 
                        id="outlined-basic" 
                        multiline
                        rows={4}
                        label="Your Message" 
                        variant="filled"
                        sx={{width:"100%",backgroundColor:'white'}}
                         />
                         <Button 
                         type="submit" 
                         variant="contained" 
                         disableElevation 
                         size="large" 
                         sx={{
                             backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)',
                             shadow:0,
                             borderRadius: 0,
                             my:2,
                             width:'170px'
                             
                             }}>Submit</Button>
                    </form>
                </Grid>
            
            </Grid>
        </Container>
    </Box>
    );
};

export default ContactUs;