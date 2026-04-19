import React from 'react';
import { HiUsers, HiGlobeAlt, HiTruck, HiUserGroup, HiCurrencyDollar, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { HiLocationMarker } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import { FiArrowRight } from 'react-icons/fi';
import '../css/AboutUs.css';

const AboutUs = () => {
    const figures = [
        { icon: <HiUsers />, label: '100 million', sub: 'members travel every year' },
        { icon: <HiGlobeAlt />, label: '21 countries', sub: 'worldwide' },
        { icon: <HiTruck />, label: '6000', sub: 'bus lines across Europe & America' },
        { icon: <HiUserGroup />, label: '800', sub: 'employees across the world' },
        { icon: <FaLeaf />, label: '2.5 million', sub: 'tonnes of CO2 avoided' },
        { icon: <HiCurrencyDollar />, label: '€540 million', sub: 'saved by drivers' },
        { icon: <HiChatBubbleLeftRight />, label: '120 million', sub: 'connections made' },
        { icon: <HiLocationMarker  />, label: '2 million', sub: 'available points of interest' },
    ];

    return (
        <div className="about-container">
            {/* Hero Header */}
            <header className="about-hero">
                <div className="hero-overlay">
                    <h1>Democratize travel</h1>
                </div>
            </header>

            {/* Intro Section */}
            <section className="about-intro section-padding">
                <div className="intro-grid">
                    <div className="intro-image">
                        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" alt="Travelers in car" />
                    </div>
                    <div className="intro-text">
                        <h2>ABOUT US</h2>
                        <p>At CarPooling, we are a leading community-based travel app reaching 26 million reliable members in across the world through carpooling.</p>
                        <p>Our technology matches drivers who have empty seats with passengers traveling the same way so they can share the cost of the journey.</p>
                        <p>Our aim is to make travel more human, affordable, and sustainable. Our mission is to provide you a better way to travel at a lower cost, while allowing you to meet with an additional community that shares our mutual values.</p>
                    </div>
                </div>
            </section>

            {/* Key Figures Section */}
            <section className="key-figures">
                <div className="section-content section-padding">
                    <h2>Key figures 2026</h2>
                    <div className="figures-grid">
                        {figures.map((fig, index) => (
                            <div key={index} className="figure-card">
                                <div className="figure-icon">{fig.icon}</div>
                                <div className="figure-info">
                                    <strong>{fig.label}</strong>
                                    <span>{fig.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <button className="cta-outline">See more of our figures</button> */}
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section-padding">
                <div className="services-card">
                    <div className="services-left">
                        <h3>All your journeys in one app</h3>
                        <div className="phone-mockup">
                            <img src="https://www.blablacar.com/kairos/assets/images/home-app-mockup-9e20016e.png" alt="Phone App" />
                        </div>
                    </div>
                    <div className="services-right">
                        <div className="service-item">
                            <h4>Carpool</h4>
                            <p>A cost-effective solution for short and long distance travel, helping you share your journey costs with others traveling the same way.</p>
                        </div>
                        <div className="service-item">
                            <h4>Bus</h4>
                            <p>Our bus network connects hundreds of cities across the globe, providing reliable and affordable travel options for everyone.</p>
                        </div>
                        <div className="service-item">
                            <h4>Train</h4>
                            <p>Network integration for seamless train journey bookings, ensuring that wherever you want to go, you can find the right path.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="founders-section section-padding">
                <h2>Our founders</h2>
                <div className="founders-grid">
                    <div className="founder-card">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Founder 1" />
                        <h4>Frédéric Mazzella</h4>
                        <p>Founder & Chairman</p>
                    </div>
                    <div className="founder-card">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" alt="Founder 2" />
                        <h4>Francis Nappez</h4>
                        <p>Co-Founder & Business Advisor</p>
                    </div>
                    <div className="founder-card">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="Founder 3" />
                        <h4>Nicolas Brusson</h4>
                        <p>Co-Founder & CEO</p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="history-section section-padding">
                <div className="history-grid">
                    <div className="history-text">
                        <h2>How it started...</h2>
                        <p>In December 2003, our founder Frédéric Mazzella wanted to go home for Christmas but found all trains full. He realized he was surrounded by cars with empty seats.</p>
                        <p>Along the journey, he visualized the potential of connecting drivers with passengers to create a global network of carpooling.</p>
                        <p>Today, our members find the web, blue car, and the bus to be a network that helps them reach their destination easily.</p>
                        <a href="#history">Learn more about our story <FiArrowRight /></a>
                    </div>
                    <div className="history-visuals">
                        <img src="https://images.unsplash.com/photo-1533558701576-23c65e42c2fb?auto=format&fit=crop&q=80&w=400" alt="Car history" className="history-img-1" />
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400" alt="App interface" className="history-img-2" />
                    </div>
                </div>
            </section>

            {/* Culture Banner */}
            {/* <section className="culture-banner">
                <div className="culture-content">
                    <div className="culture-left">
                        <h2>Our culture</h2>
                        <p>Discover our shared values that guide us in connecting people and building communities.</p>
                        <button className="cta-blue">Join our team!</button>
                    </div>
                    <div className="culture-right">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" alt="Our Team" />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutUs;