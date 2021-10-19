import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faCopyright} />
    const icon2 = <FontAwesomeIcon icon={faSignInAlt} />
    const icon3 = <FontAwesomeIcon icon={faFacebook} />
    const icon4 = <FontAwesomeIcon icon={faInstagram} />
    const icon5 = <FontAwesomeIcon icon={faYoutube} />
    
    return (
        <div className="bg-dark pb-5 pt-4 mt-5">
            <Row>
                <Col md={6}>
                    <Image className="w-25" src={logo}></Image> <br /> <br /> <br />
                    <small className="text-light small-text">{icon} Copyright 2021 Trust Care.</small>
                </Col>
                <Col md={3}>
                    <Link className="link-text">About our hospital</Link> <br />
                    <Link className="link-text">Read our blog</Link> <br />
                    <Link to="/register" className="link-text">{icon2} Sign up to get services</Link> <br /> <br />
                    <p className="text-light">{icon3} {icon4} {icon5}</p>
                </Col>
                <Col md={3}>
                    <Link className="link-text">Get help</Link> <br />
                    <Link className="link-text">Read FAQs</Link> <br />
                    <Link className="link-text">View all cities</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;