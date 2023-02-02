import { Col } from "react-bootstrap";
import "./ProjectCard.css";
export const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Col Size={12} sm={6} md={4}>
      <div className="proj-img">
        <img src={image} alt="project related images" />
        <div className="proj-text">
          <a href={link}>
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
