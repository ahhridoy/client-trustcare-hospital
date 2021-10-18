import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import register from "../../images/register.jpg";
import useAuth from "../Hooks/useAuth";

const Register = () => {
    const {handleEmail, handlePassword, signUpUsingEmailPassword, signInUsingGoogle, signInUsingGithub, error } = useAuth();

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="login-input mb-4">
                    <h2>Register: Create Account</h2> <br />

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
                        <br /> <p className="text-danger">{error}</p> <br />

                        <Button onClick={signUpUsingEmailPassword} className="w-50 text-light" variant="info">
                            Register
                        </Button>{" "}
                        <br />
                    </form>

                    <p>
                        Already have an account?{" "}
                        <Link to="/login">Login</Link>
                    </p>

                    <Button
                        onClick={signInUsingGoogle}
                        className="w-25 me-2"
                        variant="warning"
                    >
                        Google Sign In
                    </Button>

                    <Button
                        onClick={signInUsingGithub}
                        className="w-25"
                        variant="secondary"
                    >
                        Github Sign In
                    </Button>
                </Col>

                <Col md={4}>
                    <Image className="w-100 login-input" src={register}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
