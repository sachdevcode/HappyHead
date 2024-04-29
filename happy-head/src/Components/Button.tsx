import React from "react";
import Loader from "./Loader";
import { ButtonProps } from "../lib/type";

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  text,
  loading,
}) => {
  return (
    <button
      className={` font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5 ${className}`}
      type="submit"
      onClick={onClick}
    >
      {loading ? <Loader /> : text}
    </button>
  );
};

export default Button;
