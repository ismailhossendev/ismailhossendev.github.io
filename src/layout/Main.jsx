import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shareComponents/Footer';
import Header from '../shareComponents/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;