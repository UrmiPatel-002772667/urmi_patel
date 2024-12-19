
import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
  
  // Project Data
  const projectsT1 = [
    {
      title: "Hotel Management",
      description: "Data Visualization (PowerBI)",
      imgUrl: projImg7,
      githubLink: "https://github.com/UrmiPatel-002772667/Data-Analysis",
    },
    {
      title: "Project Overview Dashboard",
      description: "Data Visualization (PowerBI)",
      imgUrl: projImg8,
      githubLink: "https://github.com/UrmiPatel-002772667/Data-Analysis",
    },
    {
      title: "Hotel Management",
      description: "Database Management Project (SQL)",
      imgUrl: projImg1,
      githubLink: "https://github.com/UrmiPatel-002772667/DMDD_Project_Fall_2023",
    },
  ];
  const projectsT2 = [
    {
      title: "Grocery Application Design",
      description: "UI/UX Design (Figma/AxureRP)",
      imgUrl: projImg3,
      githubLink: "https://github.com/UrmiPatel-002772667/Trader_Joes_UIUX"
    },
    {
      title: "Global Givers",
      description: "Web Development (JavaScript, HTML, CSS)",
      imgUrl: projImg4,
      githubLink: "https://github.com/UrmiPatel-002772667/INFO6150_FinalProj_GlobalGiver"
    },
    {
      title: "Food Recipe Manager",
      description: "Web Application (Java, JavaFX)",
      imgUrl: projImg2,
      githubLink: "https://github.com/UrmiPatel-002772667/The-Recipe-Manager-App"
    },
  ];
  const projectsT3 = [
    {
      title: "Vaccination Scheduler",
      description: "Web Application (Java)",
      imgUrl: projImg5,
      githubLink: "https://github.com/UrmiPatel-002772667/AED_Final_Project_Fall_2022"
    },
    {
      title: "React Projects",
      description: "Single Page Websites (ReactJS, TypeScript, HTML, CSS)",
      imgUrl: projImg6,
      githubLink: "https://github.com/UrmiPatel-002772667/React-Projects"
    },
  ];
  
  export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleClose = () => setSelectedProject(null);
    const handleShow = (project) => setSelectedProject(project);
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="text-center mb-5">Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
  
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projectsT1.map((project, index) => (
                               <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                               <div onClick={() => handleShow(project)}>
                                 <ProjectCard {...project} />
                               </div>
                             </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {projectsT2.map((project, index) => (
                               <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                               <div onClick={() => handleShow(project)}>
                                 <ProjectCard {...project} />
                               </div>
                             </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {projectsT3.map((project, index) => (
                               <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                               <div onClick={() => handleShow(project)}>
                                 <ProjectCard {...project} />
                               </div>
                             </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
  
        {/* Modal Pop-up */}
        {selectedProject && (
          <Modal show={true} onHide={handleClose} centered>
            <Modal.Header className="modal-header" closeButton>
              <Modal.Title className="modal-title">{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <img src={selectedProject.imgUrl} alt={selectedProject.title} className="img-fluid mb-3" />
              <p><strong>Description:</strong> {selectedProject.description}</p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button variant="primary" href={selectedProject.githubLink} target="_blank" className="btn">
                View on GitHub
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </section>
    );
  };  