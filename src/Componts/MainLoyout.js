import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';

const MainLoyout = () => {
    return (
<>
<Navbar/>
<Outlet></Outlet>
<Footer/>
</>
    );
};

export default MainLoyout;