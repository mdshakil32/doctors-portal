import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const Service = (props) => {
    const {name,image,detail} = props.service;
    console.log(image)
    return (          
             <Grid sx={{ marginTop: 2 }} item xs={4} sm={4} md={4}>
                <Card sx={{ textAlign:'center',margin:'20px 0',boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                    style={{width:'auto',height:'100px',margin:'0 auto'}}
                    component="img"
                    image={image}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail}
                        </Typography>
                    </CardContent>
                    </CardActionArea>

                </Card>
                </Grid>
                
    );
};

export default Service;