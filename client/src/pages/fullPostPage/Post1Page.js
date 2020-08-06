import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "../../components/SideBar"
import Post1 from "../../components/FullPosts/Post1"

function Post1Page() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={2} style={{}}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{ marginLeft: "40px" }}>
          <Post1 />
        </Col>
      </Row>
    </Container>
  );
}

export default Post1Page;
