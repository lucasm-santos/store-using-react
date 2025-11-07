// @ts-nocheck
import { Header } from "Components/Header";
import { HomeHeader } from "Components/HomeHeader";
import ProductCard from "Components/ProductCard";
import React from "react";
import { Link } from "react-router-dom";
import config from "./lista.json";
import "./style.css";

const Main = () => {
  console.log(config);
  const { produtos } = config;
  return (
    <div className="main-wrapper">
      <Header />
      <HomeHeader />
      <div className="main-content">
        <ProductCard list={produtos} />
      </div>
      <Link to={"/"}>Crie sua conta</Link>
    </div>
  );
};

export default Main;
