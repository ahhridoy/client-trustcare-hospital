import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../../images/doctor/doctor1.png";
import doctor2 from "../../../images/doctor/doctor2.png";
import doctor3 from "../../../images/doctor/doctor3.png";

const Doctors = () => {
    return (
        // doctors container
        <Container>
            <h1 className="fw-bold text-dark mt-5 mb-3">
                Our Special <span className="text-info">Doctors</span>
            </h1>
            <Row>
                <Col md={4}>
                    <div className="bg-light p-3 m-2 rounded">
                        <img className="w-100 rounded" src={doctor1} alt="" />
                        <h2>Dr. Ashley Willson</h2>
                        <p>Pediatrician</p>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="bg-light p-3 m-2 rounded">
                        <img className="w-100 rounded" src={doctor2} alt="" />
                        <h2>Dr. George Button</h2>
                        <p>General Doctor</p>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="bg-light p-3 m-2 rounded">
                        <img className="w-100 rounded" src={doctor3} alt="" />
                        <h2>Dr. Sussie Wolff</h2>
                        <p>Dental surgeon</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctors;
