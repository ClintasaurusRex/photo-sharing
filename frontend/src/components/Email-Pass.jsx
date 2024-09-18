import useFormData from "../hooks/useFormData";

const EmailPass = ({ formData, handleChange }) => {

  const { handleClick } = useFormData();

  return (
    <>
      <div className="form-group">
        {/* <label htmlFor="email">Email</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button onClick={handleClick} type="button" className="social-signup-btn google">
        <i className="fab fa-google"></i> Sign up with Google
      </button>
      <button onClick={handleClick} type="button" className="social-signup-btn facebook">
        <i className="fab fa-facebook"></i> Sign up with Facebook
      </button>
      <div className="form-group checkbox-group">
        {/* <input
          type="checkbox"
          id="receiveUpdates"
          name="receiveUpdates"
          checked={formData.receiveUpdates}
          onChange={handleChange}
        />
        <label htmlFor="receiveUpdates">I want to receive updates via email.</label> */}
      </div>
    </>
  );
};

export default EmailPass;