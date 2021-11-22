import React from 'react';
import Service from '../Service/Service';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import cavity from "../../../images/cavity.png"
import fluoride from "../../../images/fluoride.png"
import whitening from "../../../images/whitening.png"

const services = [
    {
        name:'Flouride Treatment',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem ea sapiente',
        image:fluoride
    },
    {
        name:'Cavity Filling',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem ea sapiente',
        image:cavity
    },
    {
        name:'Teath Whitening',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem ea sapiente',
        image:whitening
    }
]

const Services = () => {
    
    return (
        
            <Box sx={{ flexGrow: 1,marginTop:2 }}>

                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold',textAlign:'center',mt:6,color:'#41CFCF' }}>
                    Our Services
                </Typography>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold',textAlign:'center',mt:3,mb:6 }}>
                    Services We Provide
                </Typography>

                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                        {
                            services.map(service => <Service key={service.name} service={service}></Service>)
                        }

                    </Grid>
            </Container>
        </Box>
        

    );
};

export default Services;