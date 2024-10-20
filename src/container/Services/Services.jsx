import React from 'react';
import { Headings } from '../../components';
import './Services.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const causes = [
  {
    title: "Language Exchanges",
    description: "Promoting cultural understanding through language learning and exchanges",
    icon: "bi bi-people",
    link: "#"
  },
  {
    title: "Social Services",
    description: "Supporting community for their well-being with food drives and health camps.",
    icon: "bi bi-hospital",
    link: "#"
  },
  {
    title: "Computer Literacy",
    description: "Empowering individuals with essential computer skills and online safety knowledge",
    icon: "bi bi-pc-display-horizontal",
    link: "#"
  },
  {
    title: "Natural Calamities Training",
    description: "Equipping individuals with survival skills through first aid training for emergency situation.",
    icon: "bi bi-buildings",
    link: "#"
  },
  {
    title: "Psychosocial Support",
    description: "Providing psychological support and counseling services and increasing awareness about it.",
    icon: "bi bi-person-heart",
    link: "#"
  },
  {
    title: "Sustainability Awareness",
    description: "Raising awareness about environmental sustainability and eco-friendly practices",
    icon: "bi bi-bicycle",
    link: "#"
  }
];

const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="About Us" text="" />

      <div className="impactful-causes-section">
      <Container>
        <h2 className="text-center mb-5">Our Focus Areas</h2>
        <Row>
          {causes.map((cause, index) => (
            <Col key={index} md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <div className="icon mb-3">
                    <i className={`${cause.icon} cause-icon`}></i>
                  </div>
                  <Card.Title>{cause.title}</Card.Title>
                  <Card.Text>{cause.description}</Card.Text>
                  <Button  href={cause.link}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Services;
