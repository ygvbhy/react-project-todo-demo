import React from "react";

const Input = ({ textarea, label, ...props }) => {
  return (
    <p>
      <label htmlFor={props.id}>{label}</label>
      {textarea ? <textarea {...props} /> : <input type="text" {...props} />}
    </p>
  );
};

export default Input;
