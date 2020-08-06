import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//Importing components
import Sidebar from "../components/SideBar";
import Post from "../components/Post";
import SummarisedPost1 from "../components/SummarisedPosts/SummarisedPost1"

function Home() {

  return (
    <Container fluid>
      <Row style={{ marginTop: "50px" }}>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{ marginLeft: "40px" }}>
          <SummarisedPost1 />
          <Post />
          <Post />
        </Col>
      </Row>
      
    </Container>
  );
}

export default Home;