import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiLinux,
  SiEclipseche,
  SiJupyter,
  SiVisualstudio,
  SiGithub,
  SiDocker
} from "react-icons/si";

const Toolstack = () => {
  const titleStyle = {
    fontSize: "0.8rem", // Adjust the font size for smaller titles
    marginTop: "0.5rem", // Add some space between the icon and title
    textAlign: "center" // Center-align the titles
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={titleStyle}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={titleStyle}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={titleStyle}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={titleStyle}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
        <p style={titleStyle}>Eclipse Che</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p style={titleStyle}>Jupyter</p>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p style={titleStyle}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={titleStyle}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={titleStyle}>Docker</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
