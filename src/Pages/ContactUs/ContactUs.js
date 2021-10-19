import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import contactUs from "../../images/contactus.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faPhoneAlt} />
    const icon2 = <FontAwesomeIcon icon={faEnvelope} />
    const icon3 = <FontAwesomeIcon icon={faAddressBook} />
    
    return (
        <Container>
            <Row>
                <Col md={8}>
                    {/* contact details */}
                    <h1 className="fw-bold mt-5 mb-3">Contact Details</h1>
                    <h3 className="text-info">{icon} <a href="#">+0800 2336 7820</a></h3>
                    <h3 className="text-info">{icon2} <a href="#">sussie.wolff@trustcare.com</a></h3>
                    <h3 className="text-info">{icon3} <a href="#">Book appointment</a></h3> <br /> <br />
                    
                    <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </Col>

                {/* image columns */}
                <Col md={4}>
                    <Image className="w-100 mt-4" src={contactUs}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;