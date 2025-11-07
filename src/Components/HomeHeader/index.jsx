import HomeHeaderSections from "Components/HomeHeaderSections";
import MenuHamburger from "Components/MenuHamburger";
import React from "react";
import "./style.css";

export const HomeHeader = () => {
  return (
    <div className="HomeHeader-wrapper">
      <MenuHamburger />
      <HomeHeaderSections text={"Ofertas"} link={"/"} color={"red"} />
      <HomeHeaderSections text={"Yutas"} link={"/"} />
    </div>
  );
};
