import React from 'react';
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    let errorElement;
    if(error || error2){
        errorElement = 
                <p className="text-danger">Error : {error?.message}{error2?.message}</p>
        
    } ;
    if(user || user2){
        navigate('/home')
    };

    if(loading || loading2){
        return <Loading />
      }

    return (
        <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button onClick={() => signInWithGoogle()}  className="btn btn-success w-50 d-block mx-auto m-2 ">
          <img
            src={google}
            style={{ width: "30px", margin: " 0 .3rem" }}
            alt=""
          />
          Google SignIn
        </button>
        <button  onClick={() => signInWithGithub()}   className="btn btn-success d-block mx-auto w-50">
          <img
            src={github}
            style={{ width: "30px", margin: " 0 .6rem" }}
            alt=""
          />
          Github SignIn
        </button>
       
        
      </div>
    </div>
    );
};

export default SocialLogin;