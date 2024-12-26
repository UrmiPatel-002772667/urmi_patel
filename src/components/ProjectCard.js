import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
      <img src={imgUrl} alt={title} />
      <div className="content">
        <h4>{title}</h4>
      </div>
    </div>
    </Col>
  );
};