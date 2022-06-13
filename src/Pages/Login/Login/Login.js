import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation()
    
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = (event) => {
        navigate("/register");
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
        
      };

      if (user) {
        navigate(from, { replace: true})
      };
    return (
        <div className="container w-50 mx-auto text-start
        ">
      <h4>Please LogIn</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="email..."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          className="mx-auto d-block w-50 m-2"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
     
      <p>
        New to Genius Car..?
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-primary text-decoration-none px-2"
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forgot Password ?
        <button
         
          
          className="text-primary btn btn-link text-decoration-none px-2"
        >
          Reset Password
        </button>
      </p>
     
    </div>
    );
};

export default Login;