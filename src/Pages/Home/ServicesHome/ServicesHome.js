import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../ServiceHome/ServiceHome";

const ServicesHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://murmuring-fortress-54571.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data.slice(0, 6)));
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
