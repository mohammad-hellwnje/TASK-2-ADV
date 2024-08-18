import { faCalendar, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { 
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar">
            <div className={`nav-top ${scrolled ? 'hidden' : ''}`}>
                <div className="div1">
                    <div className="conect1">
                        <FontAwesomeIcon icon={faEnvelope} color='red' />
                        <span>info@company.com</span>
                    </div>
                    <div className="conect2">
                        <FontAwesomeIcon icon={faMap} color='red' />
                        <span>Sunny Isles Beach FL 33160</span>
                    </div>
                </div>
                <div className="div2">
                    <div className="icon1"><FontAwesomeIcon icon={faFacebook} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faTwitter} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faLinkedin} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faInstagram} color='white' /></div>
                </div>
            </div>
            <div className={`nav-bottom ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo">
                    <h1>VILLA</h1>
                </div>
                <div className={`nav-link ${isOpen ? 'open' : ''}`}>
                    <ul className={isOpen ? 'open' : ''}>
                        <li><a href="#" className='active'>Home</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Property Details</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li className='active-link'>
                            <div className="link-icon"><FontAwesomeIcon icon={faCalendar} /></div>
                            <a href="#">Schedule a visit</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar active"></span>
                    <span className="bar"></span>
                    <span className="bar active"></span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
