import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import "./Register.css";
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

   

  

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading />
  }

  if(user){
   console.log(user)
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName: name});
    console.log('update profile')
    navigate('/home');
  };
  
  
 
  return (
    <div className="register-form text-start">
      <h2 className="text-center">Register page.</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your name.." required />
        <br />
        <input type="email" name="email" id="" placeholder="Email Address" required />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
        />{" "}
        <br />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label  className={`ps-2 ${agree ? "" : 'text-danger'}`} htmlFor="terms">
          Accept Royal Wedding terms and condition
        </label>
        <input
          disabled={!agree}
          className="w-50 my-3 mx-auto btn btn-success"
          type="submit"
          value="register"
        />
      </form>
      <p>
        Already have an account ?
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-success text-decoration-none px-2"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
