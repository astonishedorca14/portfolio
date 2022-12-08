import React from "react";
import {NavLink} from "react-router-dom";
import resume from "../assets/coming-soon.pdf";

const Navbar = () => {
    return (
        <div className="nav-container">
            <a href="/" className="brand nav-logo">
                <div className="kang-container">
                    <img className="kang" src="/kang-logo.gif" alt="logo" />
                </div>
                <div className="brand nav-title">
                    <p> ASTONISHED ORCA </p>
                </div>
            </a>

            <nav className="nav-bar">
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </nav>
        </div>
    );
};

export default Navbar;