import { useState, useEffect } from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "AIML", "Front-End Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };
    
    useEffect(() => {
        let interval = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(interval)};

    }, [text])

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <span className="tagline">Welcome to My Portfolio!</span>
                                <h1>{'Hi! I am Pranav Mandlik and this is my Portfolio.'}<span className="wrap"> I'm a Full Stack Web Developer with a Core understanding and specialization in AIML</span></h1>
                                <p>An Undergraduate currently pursuing as many skills as possible in the field of Full Stack-Development and Exploring the field of AIML and implementing and research to solve real world problems.</p>
                                <button onClick={() => console.log('Connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}