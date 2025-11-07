import HomeHeaderSections from "Components/HomeHeaderSections";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import "./style.css";

export default function MenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Menu-hamburger">
      <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="Menu-hamburger-wrapper">
          <main>
            <HomeHeaderSections text={"Yutas"} link={"/"} />
            <HomeHeaderSections text={"Yutas"} link={"/"} />
            <HomeHeaderSections text={"Yutas"} link={"/"} />
            <HomeHeaderSections text={"Yutas"} link={"/"} />
            <HomeHeaderSections text={"Yutas"} link={"/"} />
            <HomeHeaderSections text={"Yutas"} link={"/"} />
          </main>
        </div>
      )}
    </div>
  );
}
