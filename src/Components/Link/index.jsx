import React from "react";
import "./style.css";

export const Link = ({ mensage, link, linkAction }) => {
  return (
    <div className="register-link">
      <p>
        {mensage}{" "}
        <a href="#" onClick={linkAction}>
          {link}
        </a>
      </p>
    </div>
  );
};
