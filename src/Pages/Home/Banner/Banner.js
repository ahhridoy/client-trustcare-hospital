import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';
import carousel1 from "../../../images/carousel/carousel1.png";
import carousel2 from "../../../images/carousel/carousel2.png";

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="carousel-title text-dark fw-bold">THE <span className="text-info">RIGHT</span> <br /> PEDIATRICIAN</h1>
                    <p className="carousel-des">
                    We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="carousel-title2 text-light fw-bold">YOU AND YOUR <br /><span className="text-info">DOCTOR</span></h1>
                    <p className="carousel-des2">
                    Donec libero dui, dapibus non leo et, molestie faucibus risus. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
