import React from "react";
import { Button, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Service = (props) => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faArrowRight} />

    // get data using props
    const { _id, img, name, description } = props.service;
    const history = useHistory();
    const handleDetails = () => {
        history.push(`/serviceDetails/${_id}`);
    };

    return (
        <Col md={4}>
            {/* show data */}
            <div className="bg-light p-3 m-2 rounded">
                <img className="w-100 rounded" src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <Button
                    onClick={handleDetails}
                    variant="info"
                    className="text-light"
                >
                    See Details {icon}
                </Button>
            </div>
        </Col>
    );
};

export default Service;
