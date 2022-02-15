import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ShowDetails = () => {
    // hooks
    const { serviceId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            `https://murmuring-fortress-54571.herokuapp.com/serviceDetails/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [serviceId]);

    // filter
    // const ExactItem = data.filter((td) => td.id === serviceId);

    return (
        <Container>
            <div className="p-5">
                <img className="w-50 rounded" src={data.img} alt="" />
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
            <Link to="/home">
                <Button className="w-25 mb-5" variant="primary">
                    Back to home
                </Button>
            </Link>
        </Container>
    );
};

export default ShowDetails;
