import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import world from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"}></Subtitle>
                  <img src={world} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum id asperiores nihil accusantium tenetur quasi voluptatem
                  vel exercitationem dolores laborum!
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero-img_box">
                <img src={heroImg01} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-img_box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-img_box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar></SearchBar>
          </Row>
        </Container>
      </section>

      {/* ======hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">
                What we serve
              </h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
