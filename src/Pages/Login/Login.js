import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import login from "../../images/login.jpg";
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { handleEmail, handlePassword, signInUsingEmailPassword, signInUsingGoogle, signInUsingGithub, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirectUrl);
        });
    }
    const handleGithubSignIn = () => {
        signInUsingGithub()
        .then((result) => {
            history.push(redirectUrl);
        });
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="login-input mb-4">
                    <h2>Login</h2> <br />

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
                        <br /> <p className="text-danger">{error}</p><br />

                        <Button onClick={signInUsingEmailPassword} className="w-50 text-light" variant="info">
                            Login
                        </Button>{" "}
                        <br />
                    </form>

                    <p>
                        New to Trust Care?{" "}
                        <Link to="/register">Create Account</Link>
                    </p>

                    <Button
                        onClick={handleGoogleSignIn}
                        className="w-25 me-2"
                        variant="warning"
                    >
                        Google Sign In
                    </Button>

                    <Button
                        onClick={handleGithubSignIn}
                        className="w-25"
                        variant="secondary"
                    >
                        Github Sign In
                    </Button>
                </Col>

                <Col md={4}>
                    <Image className="w-100" src={login}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
