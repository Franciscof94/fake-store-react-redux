import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Styles";

const EmptyCart = () => {
  return (
    <main>
      <Wrapper className="page-w-b  ">
        <div className="emptyCart">
          <h2>
            Tu carrito esta <span>vacio</span>
          </h2>
          <Link to="/products">
            <button>Ir a productos</button>
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default EmptyCart;
