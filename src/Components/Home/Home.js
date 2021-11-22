import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {

    
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;