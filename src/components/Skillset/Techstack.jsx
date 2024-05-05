import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDotnet,
  DiWebplatform
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiBootstrap,
  SiJava,
  SiLaravel,
  SiPostgresql,
  SiPython,
  SiNumpy
} from "react-icons/si";

const Techstack = () => {
  const titleStyle = {
    fontSize: "0.8rem", // Adjust the font size for smaller titles
    marginTop: "0.5rem", // Add some space between the icon and title
    textAlign: "center" // Center-align the titles
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={titleStyle}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={titleStyle}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={titleStyle}>Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={titleStyle}>React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <p style={titleStyle}>Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={titleStyle}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={titleStyle}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <p style={titleStyle}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={titleStyle}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p style={titleStyle}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p style={titleStyle}>NumPy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
        <p style={titleStyle}>.NET Core</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWebplatform />
        <p style={titleStyle}>API</p>
      </Col>
    </Row>
  );
}

export default Techstack;
