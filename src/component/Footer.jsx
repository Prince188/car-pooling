import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-cols">
                    <div className="footer-col">
                        <h4>Go anywhere with Safar Go</h4>
                        <nav className="footer-nav">
                            <a href="/rides">Popular rides</a>
                            <a href="/destinations">Destinations</a>
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h4>Travel with carpool</h4>
                        <nav className="footer-nav">
                            <a href="/route/ahm-srt">Ahmedabad &rarr; Surat</a>
                            <a href="/route/srt-vad">Surat &rarr; Vadodra</a>
                            <a href="/route/vls-mhs">Valsad &rarr; Mehsana</a>
                            <a href="/route/gnd-bhr">Gandhinagar &rarr; Bharuch</a>
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h4>Find out more</h4>
                        <nav className="footer-nav">
                            <Link to={"/About-us"}>Who we are</Link>
                            <a href="/how-it-works">How it works?</a>
                            <a href="/help">Help Centre</a>
                        </nav>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="/" aria-label="Facebook"><FaFacebook /></a>
                        <a href="/" aria-label="Twitter"><FaTwitter /></a>
                        <a href="/" aria-label="YouTube"><FaYoutube /></a>
                        <a href="/" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <p className="copyright">© Safar Go, 2026</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;