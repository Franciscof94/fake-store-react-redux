import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  subtractQuantity,
  addQuantity,
  addToCart,
} from "../actions/productActions.js";
import Stars from "../components/Stars/Stars";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
import Loading from "../components/Loading/Loading";
import Error from "./Error";
import Screen from "../styles/screen.js";

const SingleProductPage = ({ loading, error }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return (
      <div className="page-w-b">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-w-b">
        <Error />
      </div>
    );
  }

  return (
    <main>
      <BreadCrumb title={state.product.title} products />
      <Wrapper className="page">
        <article>
          <div className="productImg">
            <img src={state.product.image} alt={state.product.title} />
          </div>
          <div className="productInfo">
            <Link to="/products">
              <button className="goToProducts">Volver a los productos</button>
            </Link>
            <h2>{state.product.title}</h2>
            <Stars stars={state.product.rating} />
            <p className="price">
              Precio : <span>${state.product.price}</span>
            </p>
            <p className="category">
              Categoria : <span>{state.product.category}</span>
            </p>
            <p className="description">{state.product.description}</p>
            <button
              onClick={() => dispatch(addToCart(state.product.id))}
              className="addToCart"
            >
              Agregar al carrito
            </button>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const mapStateToProps = (state) => ({
  error: state.products.error,
  loading: state.products.loading,
  cart: state.products.cart,
});

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    padding: 1.5rem 1rem;
    background: #fff;
    display: grid;
    justify-items: center;
    gap: 2rem;
    ${Screen.lg`
        grid-template-columns: 1fr 1fr 1fr
      `}
  }

  .goToProducts {
    border: 0.2rem solid var(--blackLetter);
    border-radius: 0.2rem;
    color: var(--blackLetter);
    background-color: white;
    padding: 0.3rem 0.5rem;
    font-size: 1.5rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  .goToProducts:hover {
    background-color: var(--blackLetter);
    color: white;
  }

  .addToCart {
    border: 0.2rem solid var(--orange);
    border-radius: 0.2rem;
    color: var(--grey4);
    background-color: white;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    transition: all 0.3s;
    cursor: pointer;
    width: max-content;
  }

  .addToCart:hover {
    background-color: var(--orange);
    color: white;
  }

  .productImg {
    img {
      max-width: 20rem;
      object-fit: contain;
    }
  }

  .productInfo {
    display: grid;
    gap: 1rem;
    ${Screen.lg`
        grid-column: 2/4
      `}

    h2 {
      font-size: 2rem;
      color: var(--blackLetter);
    }
  }

  .price {
    font-size: 1.62rem;
    color: var(--orange);
    font-weight: 500;
    span {
      color: #fc766a;
      font-weight: 400;
    }
  }

  .category {
    font-size: 1.62rem;
    color: var(--orange);
    font-weight: 500;
    span {
      color: var(--blackLetter);
    }
  }

  .description {
    font-size: 1.52rem;
    color: var(--blackLetter);
  }
`;

export default connect(mapStateToProps, {
  subtractQuantity,
  addQuantity,
  addToCart,
})(SingleProductPage);
