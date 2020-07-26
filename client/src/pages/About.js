import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "../components/SideBar"

function About() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={2} style={{}}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{ marginLeft: "40px" }}>
          <h1>Hello this is my perfect post. Lorem ipsum</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
