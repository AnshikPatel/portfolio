import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiGraphql,
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><h2>c++</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h2>JAVASCRIPT</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h2>NODE JS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h2>REACT JS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h2>MONGODB</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><h2>PYTHON</h2>
      </Col>
      
    </Row>
  )
}

export default Techstack
