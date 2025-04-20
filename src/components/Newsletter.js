import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import React from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
            });
    };

    const clearFields = () => {
        setEmail('');
    };

    // ✅ Move this outside of Connectwithme
    const handleConnectClick = () => {
        // Open Mailchimp form in new tab
        window.open("http://eepurl.com/jcWuvs", "_blank");

        // Open default email client
        window.location.href = "mailto:mandlikpranav29@gmail.com?subject=Let's Connect!";
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <h3>Subscribe to my Newsletter</h3>
                                    {status === 'sending' && <Alert>Sending...</Alert>}
                                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                                    {status === 'success' && <Alert variant="success">{message}</Alert>}
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                                <div className="connect-with-me-container">
                                    <button className="connect-btn" type="button" onClick={handleConnectClick}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
