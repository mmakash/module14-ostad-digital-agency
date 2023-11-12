import React from 'react';
import NavBar from '../Component/Home/NavBar';
import HeroList from '../Component/Home/HeroList';
import WorkList from '../Component/Home/WorkList';
import Counter from '../Component/Home/Counter';


const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroList />
            <WorkList />
            <Counter />
        </div>
    );
};

export default Home;