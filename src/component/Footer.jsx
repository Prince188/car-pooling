import React from 'react'
import '../css/Home.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-cols">
                    <div className="footer-col">
                        <h4>Go anywhere with CarPooling</h4>
                        <ul><li>Popular rides</li><li>Destinations</li></ul>
                    </div>
                    <div className="footer-col">
                        <h4>Travel with carpool</h4>
                        <ul><li>Nashik → Pune</li><li>Mumbai → Pune</li></ul>
                    </div>
                    <div className="footer-col">
                        <h4>Find out more</h4>
                        <ul><li>Who we are</li><li>How it works?</li><li>Help Centre</li></ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-links">
                        <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaInstagram />
                    </div>
                    <p>© CarPooling, 2026</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
