import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleMouseEnter = () => {
        setDropdown(true);
    };

    const handleMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <nav>
            <ul className="navbar">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>

                <li 
                    className="menu-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Menu
                    {dropdown && (
                        <ul className="dropdown">
                            <li><Link to="/cats">Cats</Link></li>
                            <li><Link to="/dogs">Dogs</Link></li>
                            <li><Link to="/birds">Birds</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/">Home</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;
