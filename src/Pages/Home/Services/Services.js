import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Service2 from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
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
