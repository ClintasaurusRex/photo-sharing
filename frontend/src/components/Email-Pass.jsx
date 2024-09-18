import useFormData from "../hooks/useFormData";

const EmailPass = () => {
  const { formData, handleChange, handleSubmit } = useFormData();

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default EmailPass;
