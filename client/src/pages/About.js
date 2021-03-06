import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//import components here
import Sidebar from "../components/SideBar"

function About() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={2} style={{}}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{ marginLeft: "40px" }}>
          <h1>This is Me!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
