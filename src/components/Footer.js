import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import pm from "../assets/img/pm.jpg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img className="pm-logo"src={pm} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pranav-mandlik-574911241" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/_pranav_mandlik?igsh=MWo4NTJ6dWRpeTV3Zw==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>CopyRight 2025. All Rights Reserved by Pranav Mandlik</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}