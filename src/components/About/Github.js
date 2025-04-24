import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row, Col, Card } from 'react-bootstrap'

function Github() {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  }

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
      <Col md={10}>
        <Card className="bg-dark text-white p-4 shadow rounded-4">
          <Card.Body>
            <Card.Title className="project-heading text-center mb-4">
              Days I <strong className="purple">Code</strong>
            </Card.Title>

            {/* GitHub Calendar */}
            {/* <div className="d-flex justify-content-center">
              <GitHubCalendar
                username="AnshikPatel"
                theme={colourTheme}
                blockSize={15}
                blockMargin={5}
                fontSize={16}
              />
            </div> */}

            {/* LeetCode and GFG section */}
            <Row className="mt-5 text-center">
              <Col md={6}>
                <h4>LeetCode</h4>
                <a
                  href="https://leetcode.com/u/anshik16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mt-2"
                >
                  View Profile
                </a>
              </Col>
              <Col md={6}>
                <h4>Hacker Rank</h4>
                <a
                  href="https://www.hackerrank.com/profile/anshikpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mt-2"
                >
                  View Profile
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Github
