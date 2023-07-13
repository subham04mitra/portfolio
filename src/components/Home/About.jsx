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
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="" style={{color:'goldenrod'}} >Subham Mitra </span>
                 and I'm from <span className="yellow" > Kolkata,India</span>
                <br />
                <br />
                <p style={{color:'goldenrod'}}>I graduated with a Master's degree in Computer Application(MCA)</p> in 2023 from FIEM,Kolkata.
                <br />
                <br />
                  As a
                  <b className="" style={{color:'goldenrod'}}> Back-End </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="" style={{color:'goldenrod'}}> Javascript,Php </b>
                    as well as have knowledge in programming languages such as Java, Python,
                  <b className="" style={{color:'goldenrod'}}> Node Js, Laravel and Spring Boot.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="" style={{color:'goldenrod'}}>Node.js, MongoDB, Java, Postgre Sql</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript,Java libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="" style={{color:'goldenrod'}}> Node.js,Spring Boot etc.</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="" style={{color:'goldenrod'}}> Artificial Intelligence.</b>
                  </i>
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