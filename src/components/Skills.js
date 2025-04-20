import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fullstack from "../assets/img/fullstack.jpg";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>I'm a dedicated and curious Computer Science undergraduate with a dual focus in Artificial Intelligence & Machine Learning and Full Stack Web Development. I’m passionate about building intelligent systems that can analyze, learn, and make decisions, while also creating seamless and dynamic user experiences on the web. My work ranges from developing machine learning models for real-world applications to designing and deploying full-stack web solutions. I thrive at the intersection of data and development—where innovation meets usability—and I'm constantly exploring new technologies to push boundaries and solve impactful problems.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt = "Image" />
                                <h5>Full Stack Development</h5>
                                <h6>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS.</h6>

                                <h6>Backend: Node.js, Express.js, Python (Flask/Django), PHP, Java Servlets.</h6>

                                <h6>Database: MongoDB, MySQL, Firebase.</h6>
                                
                            </div>
                            <div className="item">
                                <img src={meter2} alt = "Image" />
                                <h5>Artificial Intelligence & Machine Learning</h5>
                                <h6>Data Preprocessing & Visualization (Pandas, NumPy, Matplotlib, Seaborn)</h6>

                                <h6>Machine Learning Algorithms (Scikit-learn, TensorFlow basics)</h6>

                                <h6>Basic Deep Learning (CNN for image classification, NLP models)</h6>
                                
                            </div>
                            <div className="item">
                                <img src={meter3} alt = "Image" />
                                <h5>Animation</h5>
                                <h6>Animation in Maya(2D/3D) & Logo animations.</h6>

                                <h6>2D art in Adobeillustrator.</h6>

                                <h6>Adobe Photoshop 2021.</h6>
                                
                            </div>
                            <div className="item">
                                <img src={meter1} alt = "Image" />
                                <h5>Tools & Platforms</h5>
                                <h6>Git & GitHub.</h6>

                                <h6>VS Code, Jupyter Notebooks.</h6>
                            
                            </div>
                            <div className="item">
                                <img src={meter2} alt = "Image" />
                                <h5>Soft Skills</h5>
                                <h6>Team Collaboration.</h6>

                                <h6>Problem Solving.</h6>

                                <h6>Fast Learner & Adaptable.</h6>

                                <h6>Public Speaking & Presentation Skills.</h6>
                                
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}