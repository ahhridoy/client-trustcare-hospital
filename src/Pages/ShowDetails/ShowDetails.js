import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ShowDetails = () => {
    // hooks
    const { serviceId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    // filter
    const ExactItem = data.filter((td) => td.id == serviceId);

    return (
        <Container>
            <div className="p-5">
                <img className="w-50 rounded" src={ExactItem[0]?.img} alt="" />
                <h1>{ExactItem[0]?.name}</h1>
                <p>{ExactItem[0]?.description}</p>
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
