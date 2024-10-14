import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Section7() {
  return (
    <section className="contact_section">
        <Container>
            <Row className="justify-content-center">
                <Col sm={8} className="text-center">
                   <h4>We Guarantee</h4>
                   <h2>30 Minutes Delivery!</h2>
                   <p>Our delivery team will arrive at your doorstep within 30 minutes of your order being
                    placed.</p>
                    <Link to="/" className="btn_red px-4 py-2 rounded-0">call: 999-888-7771 </Link>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Section7;