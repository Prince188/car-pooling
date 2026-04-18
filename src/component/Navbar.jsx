import React, { useState } from 'react'
import '../css/Home.css';
import { HiSearch, HiPlusCircle, HiUserCircle, HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">
                    <span className="logo-text">CarPooling</span>
                </div>

                {/* Mobile Menu Overlay for responsive */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-search-wrapper mobile-only">
                        <HiSearch size={24} />
                    </div>
                    <button className="nav-action-btn offer-ride" onClick={() => window.location.href = "/offer-ride"}>
                        <HiPlusCircle /> Offer a ride
                    </button>
                    <div className="nav-profile">
                        <div className='nav-flag'>
                            <img src="https://flagcdn.com/in.svg" alt="India" />
                        </div>
                        <HiUserCircle className="profile-icon" />
                    </div>
                </div>

                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </div>
            </nav>
        </>
    )
}

export default Navbar
