import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { user, setUser, setUserProperties, setIsLoading, setEmail, setPassword, setFirstName, setLastName, signUpUsingEmailPassword, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleEmailPasswordRegistration = e => {
        e.preventDefault()
        signUpUsingEmailPassword()
            .then(result => {
                setUser(result.user);
                setUserProperties();
                history.push(redirect_uri)
            })
            // .catch(error => { console.log(error.message) })
            .finally(() => setIsLoading(false))
    }

    const googleRegistration = e => {
        e.preventDefault()
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="justify-center">
            <Form className="p-5  justify-center" onSubmit={handleEmailPasswordRegistration} >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onBlur={e => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onBlur={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br /><br />
                <p>Already Registered? <Link to="/login">Click Here</Link></p>

                <div>-------------or------------</div>
                <button onClick={googleRegistration} className="btn btn-warning">Sign Up With Google</button>

                <div>hy{user.displayName}</div>
            </Form>
        </div>
    );
};

export default Registration;