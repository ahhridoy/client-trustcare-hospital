import React from "react";
import {Button, Col}  from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const ServiceHome = (props) => {
    const { id, img, name, description } = props.service;
    const history = useHistory();
    const handleDetails = () => {
        history.push(`/serviceDetails/${id}`);
    }
    return (
            <Col md={4}>
                <div className="bg-light p-3 m-2 rounded">
                    <img className="w-100 rounded" src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Button onClick={handleDetails} variant="info" className="text-light">See Details</Button>
                </div>
            </Col>
    );
};

export default ServiceHome;
