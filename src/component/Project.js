import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import pokemon from "../img/project-pokemon.png";
import fakeimdb from "../img/fake-imdb.png";
import tictactoe from "../img/tictactoe.png";

export default function Project() {
  return (
    <Container id="project">
      <h3>My recent project</h3>
      <Row>
        <Col lg={4}>
          <div className="card">
            <div className="face face1">
              <img src={pokemon}></img>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="tech-used">
                  <i className="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i className="fab fa-react"></i>
                </div>
                <p>A simple rock paper siccsor with pokemon version.</p>
                <div>
                  <a
                    href="https://zealous-gates-b6bb46.netlify.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/nakasaky55/poke-game"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card">
            <div className="face face1">
              <img src={fakeimdb}></img>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="tech-used">
                  <i className="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i className="fab fa-react"></i>
                </div>
                <p>
                  I use React for frontend and use IMDB API for calling api to
                  get Data.
                </p>
                <a href="https://movie.anhkhoa.dev" target="_blank">
                  Demo
                </a>
                <a
                  href="https://github.com/nakasaky55/fake-imdb"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card">
            <div className="face face1">
              <img src={tictactoe}></img>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="tech-used">
                  <i className="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i className="fab fa-react"></i>
                </div>
                <p>
                  A simple tictactoe game with facebook logging on purple
                  background
                </p>
                <a
                  href="https://blissful-mestorf-f6ad83.netlify.com/"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/nakasaky55/tictactpc"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
