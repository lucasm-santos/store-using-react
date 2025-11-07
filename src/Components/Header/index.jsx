import HeaderSections from "Components/HeaderSections";
import { SearchBar } from "Components/SearchBar";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./style.css";

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header-wrapper">
      <p className="title">Nome da Loja!</p>
      <p className="title-mobile">A</p>
      <SearchBar value={search} onChange={setSearch} />
      <div className="sections-wrapper">
        <HeaderSections link={"/"} label={<FaUser />} text={"Minha conta"} />
        <HeaderSections
          link={"/"}
          label={<FaCartShopping />}
          text={"Carrinho"}
        />
      </div>
    </div>
  );
};
