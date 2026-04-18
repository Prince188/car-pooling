import React from 'react';
import { HiSearch, HiPlusCircle, HiUserCircle } from 'react-icons/hi';
import { FiMapPin, FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="cp-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">
                    <span className="logo-text">CarPooling</span>
                </div>
                <div className="nav-links">
                    <HiSearch className='nav-action-btn' size={24} />
                    <button className="nav-action-btn offer-ride"><HiPlusCircle /> Offer a ride</button>
                    <div className="nav-profile">
                        <div className='nav-flag'>
                            <img src="https://flagcdn.com/in.svg" width="20" alt="India" />
                        </div>
                        <HiUserCircle className="profile-icon" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className='hero-content-left'>
                        <h1>Travel anywhere together. Spend smarter.</h1>
                    </div>
                    <div className="hero-image-container">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Travelers" />
                    </div>
                </div>

                {/* Floating Search Area */}
                <div className="search-area-wrapper">
                    <div className="search-bar-card">
                        <div className="search-input-group">
                            <div className="input-with-icon">
                                <FiMapPin />
                                <input type="text" placeholder="Leaving from" />
                            </div>
                            <div className="input-with-icon">
                                <FiMapPin />
                                <input type="text" placeholder="Going to" />
                            </div>
                            <div className="input-with-icon">
                                <FiCalendar />
                                <input type="date" placeholder="Today" />
                            </div>
                            <div className="input-with-icon">
                                <FiCalendar />
                                <input type="date" placeholder="Return date" />
                            </div>
                            <div className="input-with-icon">
                                <FiUser />
                                <input type="text" placeholder="1 passenger" />
                            </div>
                            <button className="main-search-btn">Search</button>
                        </div>
                    </div>

                    {/* Checkbox moved OUTSIDE the white box */}
                    <div className="search-options-external">
                        <input type="checkbox" id="stays" />
                        <label htmlFor="stays">Show stays</label>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-grid">
                <div className="feature-card">
                    <div className="icon-box">📋</div>
                    <h3>Travel everywhere</h3>
                    <p>Explore all over India with countless carpool rides.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-box">💰</div>
                    <h3>Prices like nowhere</h3>
                    <p>Benefit from great-value shared costs on your carpool rides.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-box">🛡️</div>
                    <h3>Ride with confidence</h3>
                    <p>Feel secure, knowing you're riding with carpool members with Verified Profiles.</p>
                </div>
            </section>

            {/* Blue Banner */}
            <section className="share-ride-banner">
                <h2>Share your ride. Cut your costs.</h2>
                <p>Carpool as a driver to turn your empty seats into lower travel costs. It's simple: publish your ride and get passengers to share your fuel and toll expenses.</p>
                <button className="cta-white">
                    Share your ride <FiArrowRight />
                </button>
            </section>

            {/* Info Sections */}
            <section className="info-split">
                <div className="info-img">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" alt="Driver" />
                </div>
                <div className="info-text">
                    <h2>Never miss a carpool!</h2>
                    <p>We know it's frustrating when you want to book in advance... with our new alert system, stay informed and book the best seat!</p>
                    <button className="find-ride-btn">Find a ride</button>
                </div>
            </section>

            <section className="testimonial-section">
                <div className="testimonial-text">
                    <h2>Only on CarPooling...</h2>
                    <blockquote>"Carpooling's great: I pay a little money to get where I'm going on time, in comfort, and meet great people."</blockquote>
                    <p className="author">Amit, from Pune</p>
                </div>
                <div className="testimonial-img">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="User" />
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="footer-cols">
                    <div className="footer-col">
                        <h4>Go anywhere with CarPooling</h4>
                        <ul>
                            <li>Popular rides on CarPooling</li>
                            <li>Popular carpool destinations</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Travel with carpool</h4>
                        <ul>
                            <li>Nashik → Pune</li>
                            <li>Mumbai → Pune</li>
                            <li>Pune → Aurangabad</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Find out more</h4>
                        <ul>
                            <li>Who we are</li>
                            <li>How CarPooling works?</li>
                            <li>Help Centre</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-links">
                        <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaInstagram />
                    </div>
                    <p>© CarPooling, 2026</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;