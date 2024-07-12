import React, { useEffect } from 'react';
import { SignIn, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /candidate/home if user is logged in
    if (user) {
      navigate('/candidate/home');
    }
  }, [user, navigate]);

  return (
    <div className="logBox">
      <SignIn afterSignIn="/candidate/home" /> {/* Redirect after successful sign-in */}
    </div>
  );
};

export default Login;