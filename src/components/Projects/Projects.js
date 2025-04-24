import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Weather Music Player"
              description="I built a dynamic website that uses geolocation to fetch real-time weather data and generate mood-based music playlists tailored to current weather conditions like sunny, rainy, or snowy. "
              link="https://github.com/AnshikPatel/WEATHER_MUSIC_PLAYER"
              liveLink="https://weather-music-player-i4qo.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="AARNA NEER"
              description="Created an online water-selling platform with city-based availability, cart management, order processing, secure payments, and a user-friendly interface using Express.js and optimized database queries."
              link="https://github.com/AnshikPatel/Aarna_neer"
              liveLink="https://aarna-neer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="OLD AGE HOME MANAGEMENT SYSTEM"
              description="Developed an old-age home management system with expense tracking, user management, and report generation using PHP, featuring an admin dashboard for efficient monitoring."
              link="https://github.com/AnshikPatel/OLD-AGE-HOME-MANAGEMENT-SYSTEM"
              liveLink=""
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
