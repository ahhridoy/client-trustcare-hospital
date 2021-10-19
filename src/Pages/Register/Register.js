import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import register from "../../images/register.jpg";
import useAuth from "../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
    // fontawesome icons
    const icon = <FontAwesomeIcon icon={faSignInAlt} />;
    const icon2 = <FontAwesomeIcon icon={faGoogle} />;
    const icon3 = <FontAwesomeIcon icon={faGithub} />;

    // hooks
    const {
        handleEmail,
        handlePassword,
        signUpUsingEmailPassword,
        signInUsingGoogle,
        signInUsingGithub,
        error,
    } = useAuth();

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="login-input mb-4">
                    <h2 className="fw-bold">Create Account</h2> <br />

                    {/* register form */}
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
                        <Button
                            onClick={signUpUsingEmailPassword}
                            className="w-50 text-light"
                            variant="info"
                        >
                            Register {icon}
                        </Button>{" "}
                        <br />
                    </form>

                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>

                    {/* buttons */}
                    <Button
                        onClick={signInUsingGoogle}
                        className="w-25 me-2"
                        variant="warning"
                    >
                       {icon2} Google Sign In
                    </Button>

                    <Button
                        onClick={signInUsingGithub}
                        className="w-25"
                        variant="secondary"
                    >
                       {icon3} Github Sign In
                    </Button>
                </Col>

                {/* image columns */}
                <Col md={4}>
                    <Image className="w-100 login-input" src={register}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
