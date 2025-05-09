import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import pm from '../assets/img/pm.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
     // ✅ Move this outside of Connectwithme
     const handleConnectClick = () => {
        // Open Mailchimp form in new tab
        window.open("http://eepurl.com/jcWuvs", "_blank");

        // Open default email client
        window.location.href = "mailto:mandlikpranav29@gmail.com?subject=Let's Connect!";
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="pm-logo1" src={pm} alt="Logo" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skill"className={activeLink ==='skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
                    <Nav.Link href="#projects"className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/pranav-mandlik-574911241" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="https://www.instagram.com/_pranav_mandlik?igsh=MWo4NTJ6dWRpeTV3Zw==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                    </div>
                    <button className="vvd" type="button" onClick={handleConnectClick}>Let's Connect</button>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
  );
}