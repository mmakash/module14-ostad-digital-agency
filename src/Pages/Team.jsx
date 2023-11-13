import React from 'react';
import NavBar from './../Component/Home/NavBar';
import Footer from '../Component/Footer';
import Mail from '../Component/Home/Mail';
import TeamMember from '../Component/TeamMember';

const Team = () => {
    return (
        <div>
            <NavBar />
            <TeamMember />
            <Mail />
            <Footer />
        </div>
    );
};

export default Team;