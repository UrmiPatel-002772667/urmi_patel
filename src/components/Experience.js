import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Experience = () => {
  const experiences = [
    {
      title: "Business Analyst",
      company: "Johnson & Johnson",
      duration: "Jan 2024 - Present",
      description: [
        "Utilized Agile and Scrum methodologies for product development, including Product Backlog documentation, writing User Stories, and managing Sprint Backlogs.",
        "Conducted JAD and JRP sessions with stakeholders to gather functional and non-functional requirements, ensuring comprehensive project understanding.",
        "Analyzed current business processes by creating AS-IS workflows, identifying improvement areas, and streamlining budget allocation for a 10% revenue increase.",
        "Maintained task progress in Jira by updating use cases, User Stories, and product backlog while assisting the Product Owner with acceptance criteria.", 
      ],
    },
    {
      title: "Business Analyst",
      company: "iView Labs Pvt. Ltd.",
      duration: "Feb 2020 - Jul 2022",
      description: [
        "Applied Waterfall methodology for timely delivery, developed BRDs and FRDs, and maintained comprehensive project documentation to align business and technical requirements.",
        "Led requirements elicitation, process modeling, and risk analysis, creating flowcharts, wireframes, and prototypes using Figma for UI design and testing.",
        "Enhanced data accuracy and efficiency by 20% through Excel and Power BI integration while reducing transaction errors and improving financial reconciliation via ERP system integration.",
        "Achieved a 98% requirement fulfillment rate using RTM in HP Quality Center and created architecture and implementation plans for Dynamics CRM customization.",
      ],
    }
  ];
  const volunteer = [
    {
        title: "Data Analyst Volunteer",
        Organization: "Bright Mind Enrichment and Schooling",
        duration: "Sept 2024 - Present",
        description: [
            "Streamlined data collection processes and performed in-depth data analysis using SQL, R, and SAS to optimize campaign strategies.",
            "Identified and secured corporate donations, including monetary funds and resources, by building partnerships with companies across NY, FL, and MD.",
            "Developed Standard Operating Procedures (SOPs) and maintained an up-to-date corporate giving database to support operational efficiency.",
            "Contributed to discussions on expanding the nonprofit’s presence in India by leveraging CSR initiatives and engaging with key stakeholders for partnership opportunities."
        ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <Container>
        <h2 className="text-center mb-5">Experience</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={12} lg={12} key={index} className="mb-4">
              <Card className="experience-card">
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle>{exp.company}</Card.Subtitle>
                  <Card.Text><strong>Duration:</strong> {exp.duration}</Card.Text>
                  <ul>
                    {Array.isArray(exp.description) 
                      ? exp.description.map((point, i) => <li key={i}>{point}</li>)
                      : <li>{exp.description}</li>}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <p></p>
      <Container>
        <h2 className="text-center mb-5">Volunteer</h2>
        <Row>
          {volunteer.map((exp, index) => (
            <Col md={12} lg={12} key={index} className="mb-4">
              <Card className="experience-card">
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle>{exp.Organization}</Card.Subtitle>
                  <Card.Text><strong>Duration:</strong> {exp.duration}</Card.Text>
                  <ul>
                    {Array.isArray(exp.description) 
                      ? exp.description.map((point, i) => <li key={i}>{point}</li>)
                      : <li>{exp.description}</li>}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
