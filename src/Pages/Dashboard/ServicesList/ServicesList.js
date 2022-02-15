import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

const ServicesList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://murmuring-fortress-54571.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    // DELETE AN USER
    const handleDeleteUser = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `https://murmuring-fortress-54571.herokuapp.com/services/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        alert("deleted successfully");
                        const remainingUsers = services.filter(
                            (product) => product._id !== id
                        );
                        setServices(remainingUsers);
                    }
                });
        }
    };
    return (
        <div className="p-5">
            {services.map((service) => (
                <ListGroup
                    key={service.id}
                    style={{ textAlign: "start", padding: "5px" }}
                >
                    <ListGroup.Item className="fw-bold fs-4">
                        {service.name}
                    </ListGroup.Item>
                    <Button
                        variant="info"
                        onClick={() => handleDeleteUser(service._id)}
                    >
                        Delete
                    </Button>
                </ListGroup>
            ))}
        </div>
    );
};

export default ServicesList;
