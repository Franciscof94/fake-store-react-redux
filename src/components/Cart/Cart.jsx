import React from "react";
import { CartContainer } from "./Styles";
import { RiShoppingCartLine } from "react-icons/ri";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  return (
    <CartContainer>
      <div className="cartLength">
        <Link to="/cart">
          <div>{cart.length}</div>
          <RiShoppingCartLine fontSize={35} color="white" />
        </Link>
      </div>
    </CartContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Cart);
