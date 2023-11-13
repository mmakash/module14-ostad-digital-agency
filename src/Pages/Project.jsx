import React from 'react';
import ProjectData from '../Component/ProjectData';
import NavBar from '../Component/Home/NavBar';
import Footer from '../Component/Footer';
import Mail from '../Component/Home/Mail';

const Project = () => {
    return (
        <div>
            <NavBar />
            <ProjectData />
            <Mail />
            <Footer />
        </div>
    );
};

export default Project;