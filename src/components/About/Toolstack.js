import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /><h2>LINEX</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><h2>VS CODE</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel /><h2>VERCEL</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><h2>POSTMAN</h2>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
