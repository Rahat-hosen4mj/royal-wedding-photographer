import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
      return <Loading />
    }

    const resetPassword = async () => {
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast("Sent Email. Inbox check pls..!");
      }
    };

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
          variant="success"
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
          className="text-success text-decoration-none px-2"
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forgot Password ?
        <button
         
          onClick={resetPassword}
          className="text-success btn btn-link text-decoration-none px-2"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
    );
};

export default Login;