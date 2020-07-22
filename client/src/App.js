import React from "react";
import "./App.css";
import { Container, Row, Col, Grid } from 'react-bootstrap';

//import React pages
import Sidebar from "./components/SideBar";
import Post from "./components/Post";

function App() {
  return (
    <Container fluid>
      <Row style={{marginTop: "50px"}}>
        <Col lg={2} style={{}}>
          <Sidebar />
        </Col>
        <Col lg={6} style={{marginLeft: "40px"}}>
          <Post />
          <Post />
          <Post />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
