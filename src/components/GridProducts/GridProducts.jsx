import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Styles";
import { truncate } from "../../utils/helpers";
import Stars from "../Stars/Stars";
import { connect } from "react-redux";
import { addToCart } from "../../actions/productActions";
import { override } from "./Styles";
import MoonLoader from "react-spinners/MoonLoader";

const GridProducts = ({ addToCart, product, loading, cart }) => {
  return (
    <>
      {loading ? (
        <MoonLoader
          color="var(--orange)"
          loading={loading}
          css={override}
          size={80}
        />
      ) : (
        <Wrapper>
          {product.map((product, index) => (
            <article key={index}>
              <Link
                to={`/product/${product.id}`}
                state={{
                  product,
                }}
              >
                <Stars stars={product.rating} />
                <img src={product.image} alt={product} />

                <h3>{truncate(product.title, 22)}</h3>
              </Link>
              <div className="row">
                <p className="price">${product.price}</p>
                <div>
                  <button
                    className="addToCart"
                    onClick={() => addToCart(product.id)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </article>
          ))}
        </Wrapper>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  cart: state.products.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(GridProducts);
