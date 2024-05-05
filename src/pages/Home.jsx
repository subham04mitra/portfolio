import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/img2.jpg';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Home = () => {
  // Data for the table
  const personalInfo = [
    { key: 'Name', value: 'Subham Mitra' },
    { key: 'Location', value: 'Kolkata, India' },
    { key: 'Experience', value: '2+ Years' },
    { key: 'Education', value: 'Master of Computer Application (MCA), FIEM, Kolkata' },
    { key: 'Specialization', value: 'Web Development' },
    { key: 'Programming Skills', value: 'JavaScript, PHP, Java, Python,C#' },
    { key: 'Framework Skills', value: 'Node JS, React JS, Laravel, Dot Net Core, JSF' },
    { key: 'Database Skills', value: 'MongoDB, PostgreSQL, Oracle' },
    { key: 'Interests', value: 'Web Technologies, Artificial Intelligence' }
  ];

  // Columns for the table
  const columns = [{
    dataField: 'key',
    text: '',
    style: { color: 'yellow',textAlign:'center' } // Setting header color to golden
  }, {
    dataField: 'value',
    text: '',
    style: { color: 'silver' ,textAlign:'left'} // Setting row color to silver
  }];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name" style={{ fontFamily: 'monospace', color: 'goldenrod' }}> Subham Mitra</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ height: "400px", width: "auto", borderRadius: '40px', marginLeft: '120px', border: '2px solid golden' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />

      {/* Stylish Table */}
      <Container style={{ marginTop: '1px' ,color:'silver',maxWidth:'55rem'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Personal Information</h2>
        <BootstrapTable
          bootstrap4
          keyField='key'
          data={personalInfo}
          columns={columns}
          bordered={false}
          headerClasses="table-header"
          bodyClasses="table-body"
        />
      </Container>
    </section>
  );
}

export default Home;
