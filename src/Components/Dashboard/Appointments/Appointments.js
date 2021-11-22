import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



const Appointments = ({date}) => {
    const {user}=useAuth();
    const [appointments,setAppointments] = useState([]);

    console.log(user.email);

    useEffect(()=>{
        const url = `http://localhost:5000/appoinments?email=${user.email}&&date=${date}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })

    },[date])

    return (
        <div>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Schedule</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                        key={row._id}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right"> 

                        <Button type="submit" variant="contained"  disableElevation size="large" sx={{backgroundImage: 'linear-gradient(to right, #00D3A9 , #30D1F1)'}}>
                            Not Visited</Button> </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Appointments;