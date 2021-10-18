import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../ServiceHome/ServiceHome";

const ServicesHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("servicesHome.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container>
            <Row>
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </Row>
        </Container>
    );
};

export default ServicesHome;
