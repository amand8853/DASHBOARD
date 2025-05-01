import React from 'react';
import '../App.css';
import { FaSearch, FaBell, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const HeaderInner = ({ toggleSidebar }) => {

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <div className="welcome-text">
                        <p>Welcome Back!</p>
                        <h1>Dashboard</h1>
                    </div>
                </div>

                <div className="header-right">
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search" className="search-input" />
                    </div>

                    <div className="header-icons">
                        <FaEnvelope className="header-icon" />
                        <FaBell className="header-icon" />
                    </div>
                </div>
            </header>

        </>
    );
};

export default HeaderInner;
