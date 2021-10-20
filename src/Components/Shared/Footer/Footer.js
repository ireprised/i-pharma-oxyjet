import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, Dhaka</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>88016111222333</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@i-pharma.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <h4> <span style={{color:"orange"}}>i</span> <span style={{color:"white"}}>-</span> <span style={{color:"aqua"}}>Pharma</span> </h4>
                            </div>
                            <div className="footer-text">
                                <p className="text-white text-justify ">We are hereby to deliver world's most needy Medical Equipment in a very cheap rate </p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/contact-us">Contact</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/services">Our Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <Link to="#">i-PHARMA</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/terms">Terms</Link></li>
                                <li><Link to="/privacy">Privacy & Policy</Link></li>
                                <li><Link to="/contact-us">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;