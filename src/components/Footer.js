import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="" style={{ paddingTop: "24px" }}>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rabemampiandra-eric-noel"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/profile.php?id=100089190066961"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Contact me on social media</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
