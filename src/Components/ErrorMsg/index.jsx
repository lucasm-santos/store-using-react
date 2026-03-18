import React from "react";
import "./style.css";

export const ErrorMsg = ({ mensage, isVisible }) => {
  return <p className="error">{isVisible && mensage}</p>;
};
