import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import "./Register.css";

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
   createUserWithEmailAndPassword(email,password);
   
   
  };
  
  if(user){
    navigate('/home');
  }
 
  return (
    <div className="register-form text-start">
      <h2 className="text-center">Register page.</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your name.." />
        <br />
        <input type="email" name="email" id="" placeholder="Email Address" />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
        />{" "}
        <br />
        <input type="checkbox" name="terms" id="terms" />
        <label className={`ps-2`} htmlFor="terms">
          Accept Genius terms and condition
        </label>
        <input
          className="w-50 my-3 mx-auto btn btn-primary"
          type="submit"
          value="register"
        />
      </form>
      <p>
        Already have an account ?
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-primary text-decoration-none px-2"
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
