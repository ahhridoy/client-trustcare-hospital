import React from 'react';
import logo from "../../../images/logo.png";

const DashboardHome = () => {
    return (
        <div>
            <img src={logo} alt="" className='w-50 py-3'/>
            <h1 className='pt-4 fw-bold'>Welcome to Trust Care Hospital</h1>
            <p>Here you can manage appointments and You can review about our services</p>
        </div>
    );
};

export default DashboardHome;