import React from 'react'
import '../css/Home.css';
import { HiSearch, HiPlusCircle, HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <Link className="nav-logo" to={"/"}>
                    <img src="/logo.png" alt="Safar Go Logo" />
                </Link>

                {/* Mobile Menu Overlay for responsive */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to={"/#search-area"} className="nav-search-wrapper mobile-only">
                        <HiSearch size={24} />
                    </Link>
                    {/* <a href="https://www.google.com" target="_blank" className='nav-action-btn offer-ride'>
                        Improve Us
                    </a> */}
                    <Link to={"/offer-ride"} className='"nav-action-btn offer-ride' >
                        <HiPlusCircle size={16} /> <span>Offer a ride</span>
                    </Link>
                    <div className="nav-profile">
                        {/* <div className='nav-flag'>
                            <img src="https://flagcdn.com/in.svg" alt="India" />
                        </div> */}
                        <HiUserCircle className="profile-icon" />
                    </div>
                </div>

                {/* <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </div> */}
            </nav>
        </>
    )
}

export default Navbar
