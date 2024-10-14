import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author.jpeg";
import User2 from "../../assets/blog/review-author-2.jpeg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="user-1" />
                </div>
                <p>
                  This is one of the best burgers in Athens, Whatever we had,
                  starters, salads, burgers were amazing. I'm still thinking of
                  the chips with cheddar and bacon sauce. All the dishes we had
                  were very very good. Try it for sure.
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY MR.HARISH</h5>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="user-2" />
                </div>
                <p>
                  I am very happy to write a review about this "restaurant". The
                  place is very beautifiul with industrial decoration. There are
                  many tables inside for winter months and during summer there
                  are also and outdoor seatings. In weekdays you can find table
                  easily, during weekend it will take 40 minutes maximum during
                  peak hours. The service is very very good and all the stuff is
                  very polite.
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <h5>BY MISS.RUTUJA</h5>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="user-3" />
                </div>
                <p>
                  Burgers here are made to order and come in a variety of types.
                  Generally they are cooked "medium well", but I have found that
                  ordering them "medium" produces juicy burgers that hold their
                  shape and flavour. I especially like the Umami, but have tried
                  sevearl and have always been pleased. The fries that accompany
                  the burgers are delicious and abundant: not overly salted and
                  cooked to order as well so they are piping hot.
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <h5>BY Edward</h5>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="user-4" />
                </div>
                <p>
                  Very nice burger. The best quality. Friendly staff and a good
                  value for money.easy listening music and happy faces
                  everywhere.
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
                <h5>BY Mary</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
