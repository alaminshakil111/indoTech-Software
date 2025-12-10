import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    agree: false,
  });

  // Handle input changes (for all input types)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "20px auto" }}>
      <h3>User Form</h3>

      <div>
        <label>First Name:</label><br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          required
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Last Name:</label><br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          required
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Select Country:</label><br />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to terms & conditions
        </label>
      </div>

      <button type="submit" style={{ marginTop: "15px" }}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;
