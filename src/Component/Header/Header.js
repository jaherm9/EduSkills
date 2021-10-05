import React from 'react';
import bg from '../Header/bg.jpg'
import './Header.css'

const Header = () => {
    return (

        <div className="header">
            <h1 className="display-1 pt-5 ">Welcome To The <span className="text-warning">EduSkills</span></h1>

            <button className="Academy-btn">Buy Courses</button>

            
        </div>
    );
};

export default Header;