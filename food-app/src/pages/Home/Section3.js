import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";
//Mock Data Card
const mockData = [
    {
        id:"0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Cicken breast, chilli sauce, tatatoes, pickles, coleslaw",
        rating: 5,
        price: 97.22,
    },
    {
        id:"0002",
        image: Image2,
        title: "Ultimate Bacon",
        paragraph: "House patty, cheddar, bacon, onion, mustard",
        rating: 4,
        price: 99.10,
    },
    {
        id:"0003",
        image: Image3,
        title: "Black Sheep",
        paragraph: "American Cheese, tomato relish, avocado, lettuce, red onion",
        rating: 4.5,
        price: 69.10,
    },
    {
        id:"0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 5,
        price: 95.32,
    },
    {
        id:"0005",
        image: Image5,
        title: "Double Burger",
        paragraph: "2 patties, chadder cheese, mustard, pickels, tomatos",
        rating: 3.5,
        price: 85.05,
    },
    {
        id:"0006",
        image: Image6,
        title: "Turkey Burger",
        paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 4,
        price: 96.89,
    },
    {
        id:"0007",
        image: Image7,
        title: "Smokey House",
        paragraph: " pattie, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 5,
        price: 89.99,
    },
    {
        id:"0008",
        image: Image8,
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 4,
        price: 80.10,
    },
];
//Rating Logical Data
const renderRatingIcons = (rating) =>{
    const stars=[];
    for(let i=0;i<5;i++){
        if(rating > 0.5){
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
        } else if (rating > 0 && rating < 1){
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--;
        } else{
            stars.push(<i key={'empty${i}'} className="bi bi-star"></i>);
        }
    }
   return stars; 
};

function Section3() { 
  return (
    <section className="menu_section">
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className="text-center mb-5">
                 <h2>OUR CRAZY BURGERS</h2>
                 <p className="para">Our burgers are made with the finest ingredients and cooked to perfection. we have a
                    variety of options to choose from, including chicken, and veggie burgers.</p>
                </Col>
            </Row>
            <Row>{mockData.map((cardData, index)=>(
             <Cards 
             key={index}
             image={cardData.image}
             rating={cardData.rating}
             title={cardData.title}
             paragraph={cardData.paragraph}
             price={cardData.price}
             renderRatingIcons={renderRatingIcons}
             />
            ))}</Row>

            <Row className="pt-5">
                <Col sm={6} lg={5}>
                <div className="ads_box ads_img1 mb-5 mb-md-0">
                    <h4 className="mb-0">GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className="btn_red px-4 rounded-0">
                      Learn More
                    </Link>
                </div>
                </Col>
                <Col sm={6} lg={7}>
                <div className="ads_box ads_img2">
                    <h4 className="mb-0">GET YOUR FREE</h4>
                    <h5>CHICKEN BURGER</h5>
                    <Link to="/" className="btn_red px-4 rounded-0">
                      Learn More
                    </Link>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3