import { useNavigate } from "react-router-dom";
import EmailPass from "./Email-Pass";
import useFormData from "../hooks/useFormData";
import "./Login.scss";

function Login() {
  const { formData, handleChange, handleSubmit } = useFormData();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <EmailPass formData={formData} handleChange={handleChange} />
        <button type="submit" className="login-btn">
          Login
        </button>
        <button type="button" className="login-btn" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
