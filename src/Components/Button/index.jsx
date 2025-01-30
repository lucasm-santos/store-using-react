import React from "react";
import "./style.css";

export const Button = ({ label, disabled = false }) => {
  return (
    <button className="button" type="submit" disabled={disabled}>
      {label}
    </button>
  );
};
