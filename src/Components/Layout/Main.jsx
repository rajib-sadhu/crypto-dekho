import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <main className='min-h-[40rem]'>
            <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;