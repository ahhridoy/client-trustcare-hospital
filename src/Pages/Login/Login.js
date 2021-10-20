import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import login from "../../images/login.jpg";
import useAuth from "../Hooks/useAuth";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faSignInAlt} />;
    const icon2 = <FontAwesomeIcon icon={faGoogle} />;
    const icon3 = <FontAwesomeIcon icon={faGithub} />;

    // hooks
    const {
        handleEmail,
        handlePassword,
        signInUsingEmailPassword,
        signInUsingGoogle,
        signInUsingGithub,
        error,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirectUrl);
        });
    };
    const handleGithubSignIn = () => {
        signInUsingGithub().then((result) => {
            history.push(redirectUrl);
        });
    };
    const handleEmailPasswordSignIn = () => {
        signInUsingEmailPassword().then((result) => {
            history.push(redirectUrl);
            window.location.reload();
        });
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="login-input mb-4">
                    <h2 className="fw-bold">Login</h2> <br />

                    {/* login form */}
                    <form>
                        <input
                            onBlur={handleEmail}
                            className="w-50"
                            type="email"
                            placeholder="Enter Email"
                            required
                        />{" "}
                        <br /> <br />
                        <input
                            onBlur={handlePassword}
                            className="w-50"
                            type="password"
                            placeholder="Enter Password"
                            required
                        />{" "}
                        <br /> <p className="text-danger">{error}</p>
                        <br />

                        <Button
                            onClick={handleEmailPasswordSignIn}
                            className="w-50 text-light"
                            variant="info"
                        >
                            Login {icon}
                        </Button>{" "}
                        <br />
                    </form>

                    <p>
                        New to Trust Care?{" "}
                        <Link to="/register">Create Account</Link>
                    </p>

                    {/* buttons */}
                    <Button
                        onClick={handleGoogleSignIn}
                        className="w-25 me-2"
                        variant="warning"
                    >
                        {icon2} Google Sign In
                    </Button>

                    <Button
                        onClick={handleGithubSignIn}
                        className="w-25"
                        variant="secondary"
                    >
                        {icon3} Github Sign In
                    </Button>
                </Col>

                {/* image columns */}
                <Col md={4}>
                    <Image className="w-100" src={login}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
