import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";

const GoogleSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handelGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        Swal.fire('Hey', 'Login successful', 'success');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error.message); // Better error logging
      });
  };

  return (
    <div className='mb-4'>
      <button className="btn bg-amber-300 w-full text-black" onClick={handelGoogleLogin}>
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default GoogleSignup;
