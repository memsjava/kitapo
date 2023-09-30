import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";
import Settings from "./Settings";
import { Stat } from "./Stat";

export const Projects = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);

  const projects = [
    {

      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Compte utilisateur</h2>
                  <p>Suivie et parametrage de votre portfolio kitapo</p>
                  {
                    !isLoggedIn ?
                      <LoginForm />
                      // <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      //   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      //     <Nav.Item>
                      //       <Nav.Link eventKey="login">Login</Nav.Link>
                      //     </Nav.Item>
                      //     <Nav.Item>
                      //       <Nav.Link eventKey="register">Register</Nav.Link>
                      //     </Nav.Item>
                      //   </Nav>
                      //   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      //     <Tab.Pane eventKey="login">
                      //       <Row>
                      //         <LoginForm />
                      //       </Row>
                      //     </Tab.Pane>
                      //     <Tab.Pane eventKey="register">
                      //       <SignupForm />
                      //     </Tab.Pane>
                      //   </Tab.Content>
                      // </Tab.Container>
                      :

                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Statistiques</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Configuration robot</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Logs retrait / depot / trade</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Stat email={email} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Settings />
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                  }
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="sari ito" src={colorSharp2}></img>
    </section>
  )
}
