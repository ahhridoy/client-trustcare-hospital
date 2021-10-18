import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import about from "../../images/aboutus.png";

const About = () => {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h3 className="mt-5">
                        Sed magna nulla, pulvinar vel ante vel, fringilla
                        vulputate nibh.<br /> <span className="text-info">In placerat facilisis tincidunt. Integer
                        quis erat dictum, placerat</span> <br /> massa non, bibendum ante.
                        Duis aliquet tellus magna, quis egestas <br /> <span className="text-info">enim vulputate
                        sed. Phasellus in dui malesuada, lacinia urna sed.</span>
                    </h3> <br /> <br /> <br />
                    <h4 className="text-success">Our Doctors are very friendly & those are very talented.</h4>
                    <p>Quisque posuere rhoncus erat, sit amet aliquet augue. Nunc eleifend ornare venenatis. Mauris quis arcu et sem suscipit sollicitudin at quis tellus.</p>
                </Col>

                <Col md={4}>
                    <Image className="w-100 mt-4" src={about}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
