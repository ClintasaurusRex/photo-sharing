
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
}

export default CreateUser;
