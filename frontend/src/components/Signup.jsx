import useFormData from "../hooks/useFormData";
import EmailPass from "./Email-Pass";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Signup.scss";

const Signup = () => {
  const { formData, handleChange, handleSubmit } = useFormData();

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Sign up</h1>

        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Jon Snow"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <EmailPass formData={formData} handleChange={handleChange} />

        <button type="submit" className="signup-btn">
          Sign up
        </button>

        <p className="signin-link">
          Already have an account? <a href="/signin">Sign in</a>
        </p>

        <div className="or-divider">
          <span>or</span>
        </div>


      </form>
    </div>
  );
};

export default Signup;
