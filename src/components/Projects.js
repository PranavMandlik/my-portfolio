import { Container, Nav, Row, Col, Tab } from "react-bootstrap"
import cosiqhome from "../assets/img/cosiqhome.png";
import ongoing from "../assets/img/ongoing.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects = [
        {
            title: "CosIq Homepage",
            description: "Front-End Design",
            imgUrl: cosiqhome,
            tab: "first"
        },
        {
            title: "Ongoing Research Paper",
            description: "Details will be updated once Published.",
            imgUrl: ongoing,
            tab: "second"
        },
        {
            title: "Ongoing Research Paper",
            description: "Details will be updated once Published.",
            imgUrl: ongoing,
            tab: "third"
        }
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({ isVisible }) => 
                         <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <h2>Projects/Papers</h2>
                        <p>I have actively contributed to both front-end development and academic research. One of my key projects includes the design of the CosIQ Homepage, where I focused on crafting an engaging and responsive user interface that aligns with modern web design principles. In addition, I’m involved in multiple ongoing research papers in the domain of Artificial Intelligence and Machine Learning, which aim to address real-world problems through innovative methodologies. These works are currently under review and will be updated upon publication.</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Front-End Homepage</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Paper 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Paper 2</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className="justify-content-center">
                                    {projects.filter(p => p.tab === "first").map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row className="justify-content-center">
                                    {projects.filter(p => p.tab === "second").map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row className="justify-content-center">
                                    {projects.filter(p => p.tab === "third").map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>

                    </Tab.Container>
                       
                        
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}