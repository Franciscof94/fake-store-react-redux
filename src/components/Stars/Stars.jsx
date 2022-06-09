import React from "react";
import styled from "styled-components";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Wrapper } from "./Styles";

const Stars = ({ stars = { rate: "" } }) => {
  const { rate } = stars;

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <BsStarFill fontSize={15} color="#00918A" />
        ) : rate >= number ? (
          <BsStarHalf fontSize={15} color="#00918A" />
        ) : (
          <BsStar fontSize={15} color="#00918A" />
        )}
      </span>
    );
  });

  return <Wrapper>{tempStars}</Wrapper>;
};

export default Stars;
