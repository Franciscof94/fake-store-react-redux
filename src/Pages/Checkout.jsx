import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Checkout = () => {
  return (
    <Wrapper className="page-w-b">
      <div>
        <h2>Pago exitoso</h2>
        <Link to="/products">
          <button>Volver a los productos</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
  button {
    backgroud-color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    border: 0.2rem solid var(--orange);
    color: var(--grey4);
    background-color: white;
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--orange);
    color: white;
  }
`;

export default Checkout;
