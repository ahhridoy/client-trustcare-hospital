import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
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
                        <Image className="w-50" src={logo} fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        {/* nav routes */}
                        <Nav className="ms-auto nav-bar">
                            <Nav.Link
                                as={Link}
                                className="text-dark fw-bold"
                                to="/home"
                            >
                                <span>Home</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fw-bold"
                                to="/services"
                            >
                                <span>Services</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fw-bold"
                                to="/about"
                            >
                                <span>About</span>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="text-dark fw-bold me-2"
                                to="/contactUs"
                            >
                                <span>Contact Us</span>
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                className="text-dark fw-bold me-2"
                                to="/dashboard"
                            >
                                <span>Dashboard</span>
                            </Nav.Link>

                            {/* buttons */}
                            {user.email ? (
                                <Button
                                    onClick={logOut}
                                    className="text-light"
                                    variant="info"
                                >
                                    Logout
                                </Button>
                            ) : (
                                <Link to="/login">
                                    <Button
                                        className="text-light"
                                        variant="info"
                                    >
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </Nav>

                        {/* user name */}
                        {user?.email && <Navbar.Text className="text-dark ms-3">
                            Logged in: <p>{user?.displayName}</p>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
