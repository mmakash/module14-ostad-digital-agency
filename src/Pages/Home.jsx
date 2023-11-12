import React from 'react';
import NavBar from '../Component/Home/NavBar';
import HeroList from '../Component/Home/HeroList';
import WorkList from '../Component/Home/WorkList';


const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroList />
            <WorkList />
        </div>
    );
};

export default Home;