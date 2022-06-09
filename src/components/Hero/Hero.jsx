import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Styles";
import heroImg from "../../assets/shop.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h1 className="heroTitle">
          <span>Tenemos</span> <br /> lo que buscás
        </h1>
        <Link to="/products" className="goToHome">
          <button className="headerLink">Compra ahora</button>
        </Link>
        <div className="hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
