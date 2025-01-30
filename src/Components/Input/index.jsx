import { ErrorMsg } from "Components/ErrorMsg";
import React from "react";
import "./style.css";

export const Input = ({
  type,
  placeholder,
  value,
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
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
        {icon}
      </div>
      <ErrorMsg mensage={errorMensage} isVisible={hasError} />
    </>
  );
};
