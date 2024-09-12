import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Herobanner from './Herobanner';
import Querybanner from './Querybanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Herobanner></Herobanner>
            <Querybanner></Querybanner>
            <h1 className='font-bungee_Tint'>This is home page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;