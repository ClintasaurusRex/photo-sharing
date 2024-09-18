import useFormData from '../hooks/useFormData';
import '@fortawesome/fontawesome-free/css/all.min.css';
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

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="●●●●●●●"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="receiveUpdates"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
          />
          <label htmlFor="receiveUpdates">I want to receive updates via email.</label>
        </div>

        <button type="submit" className="signup-btn">Sign up</button>

        <p className="signin-link">
          Already have an account? <a href="/signin">Sign in</a>
        </p>

        <div className="or-divider">
          <span>or</span>
        </div>

        <button type="button" className="social-signup-btn google">
          <i className="fab fa-google"></i> Sign up with Google
        </button>
        <button type="button" className="social-signup-btn facebook">
          <i className="fab fa-facebook"></i> Sign up with Facebook
        </button>
      </form>
    </div>
  );
};

export default Signup;
