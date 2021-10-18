import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const ShowDetails = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const ExactItem = data.filter((td) => td.id == serviceId);

    return (
        <Container>
            <div className="p-5">
                <img className="w-50 rounded" src={ExactItem[0]?.img} alt="" />
                <h1>{ExactItem[0]?.name}</h1>
                <p>{ExactItem[0]?.description}</p>
            </div>
        </Container>
    );
};

export default ShowDetails;
