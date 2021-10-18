import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark pb-5 pt-4 mt-5">
            <Row>
                <Col md={6}>
                    <Image className="w-25" src={logo}></Image> <br /> <br /> <br />
                    <small className="text-light small-text">Copyright 2021 Trust Care.</small>
                </Col>
                <Col md={3}>
                    <Link className="link-text">About our hospital</Link> <br />
                    <Link className="link-text">Read our blog</Link> <br />
                    <Link className="link-text">Sign up to get services</Link>
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