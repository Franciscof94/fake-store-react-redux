import React from "react";
import { FooterWrapper } from "./Styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &copy;{new Date().getFullYear()} by
        <a href="https://github.com/Franciscof94"> Francisco Ferraro</a>, Todos
        los derechos reservados
      </p>
    </FooterWrapper>
  );
};

export default Footer;
