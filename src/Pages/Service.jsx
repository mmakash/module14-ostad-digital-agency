import React from 'react';
import NavBar from '../Component/Home/NavBar';
import AllService from '../Component/AllService';
import Footer from '../Component/Footer';
import Mail from '../Component/Home/Mail';

const Service = () => {
    return (
        <div>
            <NavBar />
            <AllService />
            <Mail />
            <Footer />
        </div>
    );
};

export default Service;