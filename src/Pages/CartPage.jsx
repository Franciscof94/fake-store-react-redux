import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../actions/productActions";
import CartTotals from "../components/Cart/CartTotals/CartTotals";
import ProductInCart from "../components/Cart/ProductInCart/ProductInCart";
import styled from "styled-components";
import { connect } from "react-redux";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Screen from "../styles/screen";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartPage = ({ cart }) => {
  const dispatch = useDispatch();

  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return (
    <main>
      <BreadCrumb title="Carrito" />
      <Wrapper className="page">
        <div className="cartContent">
          <div className="cartItems">
            {cart.map((item, index) => (
              <ProductInCart key={index} product={item} />
            ))}
          </div>
          <div className="cartLinks">
            <Link to="/products">
              <button className="buyMore">Seguir comprando</button>
            </Link>
            <button className="clearBtn" onClick={() => dispatch(emptyCart())}>
              Limpiar carrito
            </button>
          </div>
        </div>
        <CartTotals />
      </Wrapper>
    </main>
  );
};

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
  ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

  .cartContent {
    display: grid;
    gap: 1rem;
    ${Screen.lg`
    grid-column: 1/3;
    `}
  }

  .cartItems {
    padding: 1rem;
  }

  .cartLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .clearBtn {
    padding: 0.75rem 1rem;
    background-color: white;
    border: 0.2rem solid #eb4c4c;
    border-radius: 0.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--grey4);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #eb4c4c;
      color: white;
    }
  }

  .buyMore {
    background-color: white;
    border-radius: 0.2rem;
    border: 0.2rem solid var(--orange);
    padding: 0.75rem 1rem;
    transition: all 0.3s;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.4em;
    color: var(--grey4);
    &:hover {
      background-color: var(--orange);
      color: white;
    }
    a {
      color: var(--gre4);
    }
  }
`;

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(CartPage);
