import axios from "axios";
import { Header } from "Components/Header";
import { HomeHeader } from "Components/HomeHeader";
import ProductCard from "Components/ProductCard";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "./lista.json";
import "./style.css";

const Main = () => {
  const navigate = useNavigate()
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token')
        console.log("TOKEN DO LOCALSTORAGE:", token);
        const response = await axios.get('http://localhost:3000/api/auth/home', {
          headers: {
          Authorization : `Bearer ${token}`
        }
      })
        console.log(response)
        if(token == null) {
          navigate('/register')
        }
      }catch(err){
        console.log(err)
        navigate('/register')
      }
    }

    useEffect(() => {
      fetchUser()
    }, [])
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
