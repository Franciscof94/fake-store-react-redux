import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Styles";
import { truncate } from "../../utils/helpers";

const BreadCrumb = ({ products, title }) => {
  return (
    <Wrapper>
      <Link to="/">Inicio /</Link>
      {products && <Link to="/products"> productos / </Link>}
      <span>{truncate(title, 20)}</span>
    </Wrapper>
  );
};

export default BreadCrumb;
