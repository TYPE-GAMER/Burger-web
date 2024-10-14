import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  const [isVisible, setIsVisible]=useState(false);
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };
  const listenToScroll=()=>{
    let heightToHidden=250;
    const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }
  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll);
  });
  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
              <h5>Location</h5>
              <p>India</p>
              <p>Odisha</p>
              <p>Cuttack</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
              <h5>Working Hours</h5>
              <p>Mon-Fri : 9:00AM - 10:00 PM</p>
              <p>Sat:10:00 AM - 8:00 PM</p>
              <p>Sun: 12:00 PM - 5:00 PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
              <h5>Order Now</h5>
              <p>Get extra Discount!</p>
              <p>
                <Link to="rel:9998887771" className="calling">
                  999-888-7771
                </Link>
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <div className="text-center">
              <h5>Follow Us</h5>
              <p>And share your review</p>
              <ul className="list-unstyled text-center mt-2">
                <li>
                  <Link to="/">
                    <i class="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="bi bi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="bi bi-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="copy_right">
          <Col>
            <div>
              <ul className="list-unstyled text-center mn-0">
                <li>
                  <p>
                    © 2024 <span>Soumya</span>. All Right Reserved
                    </p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Terms Of Use</p>
                </li>
                <li>
                  <p>Privacy policy</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    {isVisible && (<div className="scroll_top" onClick={scrollTop}>
      <i class="bi bi-arrow-up"></i>
    </div>)}
    </>
  );
}
export default Footer;
