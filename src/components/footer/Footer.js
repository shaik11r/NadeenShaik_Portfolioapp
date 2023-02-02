import logo from "../../assets/img/icons2.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/whatsapp3.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nadeenshaik/">
                <img src={navIcon1} alt="icon" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919182320462&utm_source=Messaging&utm_medium=Whatsapp">
                <img src={navIcon2} alt="icon" />
              </a>
              <a href="https://www.instagram.com/nadeenshaik/">
                <img src={navIcon3} alt="icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
