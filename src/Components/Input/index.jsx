import { ErrorMsg } from "Components/ErrorMsg";
import React from "react";
import "./style.css";

export const Input = ({
  type,
  value,
  placeholder,
  icon,
  onChange,
  errorMensage = "",
  hasError = false,
  maxLength = undefined,
}) => {
  return (
    <>
      <div className="input-container">
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
        {icon}
      </div>
      <ErrorMsg mensage={errorMensage} isVisible={hasError} />
    </>
  );
};
