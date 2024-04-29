import React from "react";
import { InputProps } from "../lib/type";


const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  error,
}) => {
  return (
    <div className="mb-5">
      <label
        className="text-gray-700 font-semibold mb-2 text-primary"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-transparent border rounded-lg shadow border-primary focus:border-primary focus:ring-2 py-2 px-4 block w-full appearance-none leading-normal"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Input;
