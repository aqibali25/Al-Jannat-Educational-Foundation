import React from "react";

const FormField = ({ label, type, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        value={value} // Bind value to formData
        onChange={onChange} // Handle change properly
        required={required}
      />
    </div>
  );
};

export default FormField;
