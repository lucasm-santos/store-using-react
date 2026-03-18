import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function HeaderSections({
  color = undefined,
  text = undefined,
  link,
}) {
  return (
    <div>
      <Link className={`sections ${color}`} to={link}>
        <p>{text}</p>
      </Link>
    </div>
  );
}
