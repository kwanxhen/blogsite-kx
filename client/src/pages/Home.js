import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "../components/SideBar";
import Post from "../components/Post";

function Home() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={2} style={{}}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{ marginLeft: "40px" }}>
          <Post />
          <Post />
          <Post />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;