import React from "react";
import "./style.css";

export const CheckBox = ({ label }) => {
  return (
    <label className="checkLabel">
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
};
