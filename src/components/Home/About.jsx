import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
            <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
        ALLOW ME TO <span className="yellow"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
        Greetings, I am <span className="" style={{color:'goldenrod'}} >Subham Mitra</span>, hailing from <span className="yellow" >Kolkata, India</span>.
        <br />
        <br />
        Holding a <span className="" style={{color:'goldenrod'}} > Master's degree in Computer Application (MCA)</span> obtained in 2023 from Future Institute of Engineering and Management, Kolkata, I am committed to the pursuit of excellence in software development.
        <br />
        <br />
        With a specialization in <b className="" style={{color:'goldenrod'}}>Back-End</b> development, I thrive on overcoming challenges and perpetually refining my expertise.
        <br />
        <br />
        Proficient in <b className="" style={{color:'goldenrod'}}>JavaScript</b> and <b className="" style={{color:'goldenrod'}}>PHP</b>, I possess a solid foundation in programming languages such as Java and Python. Additionally, I am adept in frameworks and technologies including <b className="" style={{color:'goldenrod'}}>Node.js</b>, <b className="" style={{color:'goldenrod'}}>Laravel</b>, and <b className="" style={{color:'goldenrod'}}>Spring Boot</b>.
        <br />
        <br />
        My passion lies in crafting robust solutions utilizing <b className="" style={{color:'goldenrod'}}>Node.js</b>, <b className="" style={{color:'goldenrod'}}>MongoDB</b>, <b className="" style={{color:'goldenrod'}}>Java</b>, and <b className="" style={{color:'goldenrod'}}>PostgreSQL</b>, alongside embracing contemporary JavaScript and Java libraries and frameworks like <b className="" style={{color:'goldenrod'}}>Node.js</b> and <b className="" style={{color:'goldenrod'}}>Spring Boot</b>.
        <br />
        <br />
        Beyond development, I harbor a keen interest in pioneering new <span className="yellow">Web Technologies and Products</span>, and delving into domains associated with <b className="" style={{color:'goldenrod'}}>Artificial Intelligence</b>.
        <br />
    </p>
</Col>

              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/subham04mitra"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://facebook.com/subham58?eav=Afawtr6FsAAaEVYKgDnvKNbsb-chU66QtHvSYcdqJzgL5n7boTCG1KXlKCRwBVJSxSU&paipv=0"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/subhammitra04/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/_s_u_b_h_a_m_____m_i_t_r_a_/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

        </Container>
      );
    
}

export default About