import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import email from "../assets/img/footer-icon-2.svg";
import phone from "../assets/img/footer-icon-3.svg";
import hackerrank from "../assets/img/footer-icon-1.svg";
import 'animate.css'; 
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}  className="text-center">
          <div className="social-icon">
          <div className="contact-item"><a href="mailto:urmip0212@gmail.com"><img src={email} alt="Icon"/></a><p>urmip0212@gmail.com</p></div>
          <div className="contact-item"><a href="tel:+15086677726"><img src={phone} alt="Icon"/></a><p>+15086677726</p></div>
          </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/urmipatel2001/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/UrmiPatel-002772667"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.hackerrank.com/profile/urmip0212" target="_blank" rel="noopener noreferrer"><img src={hackerrank} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
