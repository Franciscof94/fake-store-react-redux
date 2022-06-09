import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { showSidebar } from "../../actions/viewActions";
import { Wrapper } from "./Styles";
import { RiShoppingCartLine } from "react-icons/ri";

const CartButtons = ({ sidebar, cart }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <NavLink
        to="/cart"
        onClick={() => dispatch(showSidebar(false))}
        className={({ isActive }) =>
          isActive ? "cartContainer active" : "cartContainer"
        }
      >
        Carrito
        <div className="cartIcon">
          <RiShoppingCartLine fontSize={30} color="var(--blackLetter)" />
          <span>{cart.length}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  sidebar: state.view.sidebar,
  cart: state.products.cart,
});

export default connect(mapStateToProps)(CartButtons);
