import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Herobanner from './Herobanner';
import Querybanner from './Querybanner';
import Recomendbanner from './Recomendbanner';
import Customer from './Customer';
import Blogs from '../blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Herobanner></Herobanner>
            <Querybanner></Querybanner>
            <Recomendbanner></Recomendbanner>
            {/* <Customer></Customer> */}
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;