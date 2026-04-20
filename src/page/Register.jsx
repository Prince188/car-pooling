import React, { useState } from 'react';
import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline, IoPersonOutline } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import '../css/Register.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1 className="brand-logo">Safar <span>GO</span></h1>
                    <p className="subtitle">Join our community of developers today.</p>
                </div>

                {/* <div className="social-login">
                    <button className="social-btn">
                        <FcGoogle size={20} />
                        <span>Google</span>
                    </button>
                    <button className="social-btn">
                        <FaGithub size={20} />
                        <span>GitHub</span>
                    </button>
                </div>

                <div className="divider">
                    <span>OR REGISTER WITH EMAIL</span>
                </div> */}

                <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="name-row">
                        <div className="input-field">
                            <label>First Name</label>
                            <div className="input-wrapper">
                                <IoPersonOutline className="input-icon" />
                                <input type="text" placeholder="John" required />
                            </div>
                        </div>
                        <div className="input-field">
                            <label>Last Name</label>
                            <div className="input-wrapper">
                                <IoPersonOutline className="input-icon" />
                                <input type="text" placeholder="Doe" required />
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <IoMailOutline className="input-icon" />
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                    </div>

                    <div className="input-field">
                        <label>Mobile Number</label>
                        <div className="input-wrapper">
                            <IoMailOutline className="input-icon" />
                            <input type="tel" placeholder="123-456-7890" required />
                        </div>
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <IoLockClosedOutline className="input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a strong password"
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        </div>
                        <div className="password-hint">Must be at least 8 characters.</div>
                    </div>

                    {/* <label className="terms-checkbox">
                        <input type="checkbox" required />
                        <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
                    </label> */}

                    <button type="submit" className="register-btn">Create Account</button>
                </form>

                <p className="login-text">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;