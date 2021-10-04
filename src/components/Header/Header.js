import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "yellow"
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2 text-warning" to="/home">WebDev</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-2 fs-4 " aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-2 fs-4 " to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-2 fs-4 " to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-2 fs-4 " to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;