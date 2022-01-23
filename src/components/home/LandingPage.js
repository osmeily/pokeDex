import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingPage = ({user}) => {

    return (
    <div>
        <Navbar user={user}/>
        <Cards/>
        <Footer/>
    </div>
    )
};

export default LandingPage;
