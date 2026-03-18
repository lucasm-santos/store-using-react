import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function HeaderSections({ label, text = undefined, link }) {
  return (
    <div>
      <Link className="sections" to={link}>
        {label}
        <p>{text}</p>
      </Link>
    </div>
  );
}
