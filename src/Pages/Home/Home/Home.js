import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import ServicesHome from "../ServicesHome/ServicesHome";
import TeamDetails from "../TeamDetails/TeamDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faSearch} />;

    return (
        <div>
            <Banner></Banner>
            <div>
                <Container className="d-flex justify-content-center mt-5">
                    <InputGroup className="mb-3 w-50">
                        <FormControl placeholder="Search our services" />
                        <Button variant="outline-info" id="button-addon2">
                            {icon} Search
                        </Button>
                    </InputGroup>
                </Container>
            </div>
            <ServicesHome></ServicesHome>
            <TeamDetails></TeamDetails>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
