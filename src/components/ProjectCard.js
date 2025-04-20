import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        
        </Col>
    )
}