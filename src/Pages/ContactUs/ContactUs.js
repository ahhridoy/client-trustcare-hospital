import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import contactUs from "../../images/contactus.png"

const ContactUs = () => {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 className="fw-bold mt-5 mb-3">Contact Details</h1>
                    <h3><a href="#">+0800 2336 7820</a></h3>
                    <h3><a href="#">sussie.wolff@trustcare.com</a></h3>
                    <h3><a href="#">Book appointment</a></h3> <br /> <br />
                    <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </Col>

                <Col md={4}>
                    <Image className="w-100 mt-4" src={contactUs}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;