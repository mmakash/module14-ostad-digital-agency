import React from 'react';
import NavBar from '../Component/Home/NavBar';
import HeroList from '../Component/Home/HeroList';
import WorkList from '../Component/Home/WorkList';
import Counter from '../Component/Home/Counter';
import FeatureProduct from '../Component/Home/FeatureProduct';
import Mail from '../Component/Home/Mail';
import Footer from '../Component/Footer';


const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroList />
            <WorkList />
            <Counter />
            <FeatureProduct />
            <Mail />
            <Footer />
        </div>
    );
};

export default Home;