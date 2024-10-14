import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people togeather like a good burger.</h2>
              <p>
                {" "}
                Our burgers are made with the finest ingredients and cooked to
                perfection. We have a wide variety of options to choose from, so
                you're sure to find the perfect burger for you.
              </p>
              <ul>
                <li>
                    <p>Made with 100% Best Chicken.</p>
                </li>
                <li>
                    <p>Our burgers are made with the finest ingredients and quality Products.</p>
                </li>
                <li>
                    <p>Our burgers are made with the hand made products and hande made pure sauce and natural food products.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
