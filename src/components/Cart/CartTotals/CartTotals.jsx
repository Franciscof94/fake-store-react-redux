import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../../../actions/productActions";
import { Wrapper } from "./Styles";

const CartTotals = ({ cart }) => {
  const dispatch = useDispatch();
  const { total_items, total_price } = cart.reduce(
    (total, item) => {
      const { quantity, price } = item;

      total.total_items += quantity;
      total.total_price += price * quantity;

      return total;
    },
    {
      total_price: 0,
      total_items: 0,
    }
  );

  return (
    <Wrapper>
      <div>
        <h3>
          Cantidad de productos: <span>{total_items}</span>
        </h3>
        <br />
        <h4>
          Precio total <span>${total_price.toFixed(2)}</span>
        </h4>
      </div>
      <hr />
      <Link
        to="/checkout"
        type="button"
        className="totalBtn"
        onClick={() => dispatch(emptyCart())}
      >
        Pagar
      </Link>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps, { emptyCart })(CartTotals);
