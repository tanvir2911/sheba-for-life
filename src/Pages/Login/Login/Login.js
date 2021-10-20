import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, setUser, setIsLoading, setEmail, setPassword, signInUsingEmailPassword, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleEmailPasswordLogin = e => {
        e.preventDefault();
        signInUsingEmailPassword()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    const googleLogin = e => {
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
            <h2>Login Here</h2>
            <Form className="p-5   justify-center" onSubmit={handleEmailPasswordLogin} >


                <Form.Group as={Col} controlId="formGridEmail " >
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" className="mb-5 ">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br /><br />
                <p>Not Registered Yet? <Link to="/registration">Click Here</Link></p>

                <div>-------------or------------</div>
                <button onClick={googleLogin} className="btn btn-warning">Sign In With Google</button>

                <div>hy{user.displayName}</div>
            </Form>
        </div>
    );
};

export default Login;