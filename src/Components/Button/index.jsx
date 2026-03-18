import React from "react";
import "./style.css";

export const Button = ({ label, disabled = false, onClick=undefined}) => {
  return (
    <button className="button" type="submit" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
