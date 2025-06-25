import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen"'>
            <header className ="sticky top-0 z-50">
                <Navbar></Navbar>
                
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;