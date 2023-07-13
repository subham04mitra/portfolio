import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/subham04mitra"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://facebook.com/subham58?eav=Afawtr6FsAAaEVYKgDnvKNbsb-chU66QtHvSYcdqJzgL5n7boTCG1KXlKCRwBVJSxSU&paipv=0"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                       href="https://www.linkedin.com/in/subhammitra04/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                     href="https://www.instagram.com/_s_u_b_h_a_m_____m_i_t_r_a_/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social