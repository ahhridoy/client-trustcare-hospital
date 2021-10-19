import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ourteam from "../../../images/ourteam.png";
import "./TeamDetails.css";

const TeamDetails = () => {
    return (
        <div className="bg-info my-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="text-dark fw-bold team-text">
                            Our <span className="text-light">Team</span>
                        </h1>
                        <h4 className="text-dark fw-normal">
                            Dr. Stephanie Wosniack is is dedicated to providing
                            her patients with the best possible care. We at
                            MediCare are focused on helping you. After receiving
                            successful care for various aches and pains over the
                            years, Dr. Woshiack found her calling to help others
                            get well.
                        </h4>
                    </Col>

                    <Col md={6}>
                        <Image className="mt-4 team-img" src={ourteam}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamDetails;
