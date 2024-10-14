import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza1.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

//Mock Data card
const mockData = [
    {
        image: Pizza,
        title:"Original",
        paragraph:'Food, in the end, in our own tradition, is something holy. It is not about nutrients and calories. It is about sharing. It is about honesty. It is about identity.'
    },
    {
        image: Salad,
        title:"Quality Foods",
        paragraph:'Any food that requires enhancing by the use of chemical substances should in no way be considered a food.The body is your tample keep it pure and clean for the soul to reside in.'
    },
    {
        image: Delivery,
        title:"Fastest Delivery",
        paragraph:'Knock knock. Who is there? Oh, just happiness wrapped in a box, making my day brighter! 🌞🎁Delivering Delights, Every Time," "Quick, Reliable, and Catchy Deliveries."'
    },

];

function Section2() {
  return (
    <>
    <section className="about_section">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className="text-center">
                <h2>The burger tastes better when you eat it with your family.</h2>
                <p>Food + family = happiness.<br/>
                Crazy, chaotic, and oh-so-lovable. That's my family.
                </p>
                <Link to="/" className="order_now btn_red">
                 Explore Full Menu
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
     <Container>
        <Row className="justify-content-md-center">{mockData.map((cardData, index)=> (
            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                    <div className="about_icon">
                        <img src={cardData.image} className="img_fluid" alt="icon" />
                    </div>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.paragraph}</p>
                </div>
            </Col>
        ))}</Row>
     </Container>
    </section>
    </>
  );
}

export default Section2