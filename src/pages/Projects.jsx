import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import health from "../assets/projects/health.jpeg";
import project from "../assets/projects/busi.png";
import cafe from "../assets/projects/cafe.jpg";
import ecom from "../assets/projects/ecom.jpg";
import driver from "../assets/projects/driver.jpg";
import bill from "../assets/projects/bill.png";
import pizzeria from "../assets/projects/pizzeria.png";
import tamb from "../assets/projects/tambola.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafe}
              isBlog={false}
              title="Veggi_Corner"
              description="This is a resturants website which is located near Liluah ,Howrah. The whole Project is developed on React Framework."
              demoLink="https://cafe-git-master-technoid2023.vercel.app/?vercelToolbarCode=26RZjQfZRXAPDJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Power Backup System"
              description="This is business webiste of a Kolkata Based Online Ups dealership company build fully on React JS."
              demoLink="https://business-dev.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="Driver Drowsyness Detection System"
              description="This is portable system that raise alarm when a driver fall asleep while driving and alert them to prevent accident.The project is build on Deep Learing with the help of Python and work accurately after calculating the ratio of a close lid to open lid as well as mouth."
              ghLink="https://github.com/subham04mitra/driver_drowsiness_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="I-Health : A complete heath assistant"
              description="A healthcare portal to interact doctors and patients together over videocall or chat and can access medical history and download specific prescription and also order medicine online and with the help of AI check for disease by medicines and get advice,medication etc.The Backend of the project is build on Node JS and front end is on HTML,CSS,JS and for the Machine Learning part I use Python."
              ghLink="https://github.com/subham04mitra/healthcare_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bill}
              isBlog={false}
              title="Billing cum Tickting Software"
              description="A Simple Ticketing app to register or issue a service request and generate invoice after completion of the service. The Backend is build on Node Js and for database I use MongoDB and in front end I use React JS"
              ghLink="https://github.com/technoid2023/billing_software"
         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce Backend"
              description="Backend operations with database in Nose JS for an E commerce web app"
              ghLink="https://github.com/subham04mitra/ecommerce-backend"
         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzeria}
              isBlog={false}
              title="Pizzeria"
              description="A Pizza Delivery web app with payment gatway for ordering customizable Pizzas Online.
              The Project is Build on Node JS and React Js."
              ghLink="https://github.com/subham04mitra/food-delivery-app"
         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tamb}
              isBlog={false}
              title="Tambula Game "
              description="Backend and Database Logics for a popular game called Tambula build inNode JS and MongoDB"
              ghLink="https://github.com/subham04mitra/TAMBULA"
         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects