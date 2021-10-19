import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faSignInAlt} />;
    const icon2 = <FontAwesomeIcon icon={faSignOutAlt} />;

    // hooks
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className="w-75" src={logo} fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        {/* nav routes */}
                        <Nav className="ms-auto nav-bar">
                            <Nav.Link
                                as={Link}
                                className="text-dark fs-4 fw-bold"
                                to="/home"
                            >
                                <span>Home</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fs-4 fw-bold"
                                to="/services"
                            >
                                <span>Services</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fs-4 fw-bold"
                                to="/about"
                            >
                                <span>About</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fs-4 fw-bold me-2"
                                to="/contactUs"
                            >
                                <span>Contact Us</span>
                            </Nav.Link>

                            {/* buttons */}
                            {user.email ? (
                                <Button
                                    onClick={logOut}
                                    className="fs-5 text-light"
                                    variant="info"
                                >
                                    Logout {icon2}
                                </Button>
                            ) : (
                                <Link to="/login">
                                    <Button
                                        className="fs-5 text-light"
                                        variant="info"
                                    >
                                        Login {icon}
                                    </Button>
                                </Link>
                            )}
                        </Nav>

                        {/* user name */}
                        <Navbar.Text className="text-dark ms-3">
                            Logged in as: <p>{user?.displayName}</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
