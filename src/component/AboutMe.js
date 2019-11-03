import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import ava from "../img/ava.jpg";

export default function AboutMe() {
  return (
    <Container className="AboutMe" id="aboutme">
      <Row>
        <Col lg={5}>
          <div className="avatar">
            <img src={ava}></img>
          </div>
          <div>
            <h3>My technical skills</h3>
            <div>
              <label>HTML</label>
              <ProgressBar variant="success" now={75} srOnly />
            </div>
            <div>
              <label>CSS</label>
              <ProgressBar variant="warning" now={40} srOnly />
            </div>
            <div>
              <label>JavaScript</label>
              <ProgressBar variant="danger" now={50} srOnly />
            </div>
            <div>
              <label>English</label>
              <ProgressBar variant="info" now={50} srOnly />
            </div>
          </div>
        </Col>
        <Col lg={7} className="info-custom">
          <div>
            <h3>About me</h3>
            <p>
              Not actually a newbie in this industry, I left IT support position
              to become a fullstack developer.
            </p>
            <p>
              Athough I'm an introvert, if we have the same I will talk with you
              all day. Here's my channel
            </p>
            <ul>
              <li>
                Playing games. I'm a big fan of league of legends, not so good
                but I believe I can beat Faker.
              </li>
              <li>
                Rock Music. It seems everyone loves it except my girlfriend.
              </li>
              <li>
                Fantasy things. I don't know this is counted as a hobby or not,
                but I'm a day dreamer.
              </li>
            </ul>
          </div>
          <div>
            <h3>Work Experience</h3>
            <div className="work">
              <p>FPT Software, Onsite as an IT support in BOSCH</p>
              <p>August 2018 - September 2019</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
