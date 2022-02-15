import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service2 from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://murmuring-fortress-54571.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {services.map((service) => (
                        <Service2 key={service.id} service={service}></Service2>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Services;
