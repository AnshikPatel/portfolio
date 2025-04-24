import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/anshik.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;OPEN CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Android Web developer "
              date="Nov 2024 - Present"
              content={[
                "Learned and experiment with Android studio, Kotlin and Building native Android applications ",
                "Build Full Social media type Application for Student and Other People.",
              ]}
            />
            <Resumecontent
              title="Full Stack developer "
              date="Aug 2023 - Present"
              content={[
                "Gained hands-on experience in JavaScript, Node.js, and GraphQL for backend developmentand built responsive frontends with React, Next.js—and core web technologies HTML, CSS, and JavaScript.",
                "Build Full Online Learning Plateform which has servel feature like live music with real time weather, uploading videos, track watch time etc.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hackathons "
              date="March 2025"
              content={[
                "Participated in the 'Infinio Semiconductor Innovation Hackathon,'",
                "As a Part of Community, we attend lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff."
                ,
              ]}
            />
            {/* <Resumecontent
              title="Microsoft Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                "Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [LPU] "
              date="2022 - Present"
              content={[
                `CGPA: 7.5/10 `,
                "Pursuing B.Tech in Computer Science and Engineering at Lovely Professional University (LPU)",
              ]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Developed a client-based project named "AARNA NEER" using React.`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
