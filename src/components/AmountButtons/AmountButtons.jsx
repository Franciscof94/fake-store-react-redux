import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { addQuantity, subtractQuantity } from "../../actions/productActions";
import { useResize } from "../hooks/useResize";
import { Wrapper } from "./Styles";

const AmountButtons = ({ product }) => {
  const dispatch = useDispatch();
  const { isPhone } = useResize();

  return (
    <Wrapper>
      <button
        type="button"
        className={product.quantity < 2 && "opacity "}
        onClick={() => dispatch(subtractQuantity(product.id))}
      >
        <FaMinus fontSize={isPhone ? "18" : "26"} color="#fc766c" />
      </button>
      <span>{product.quantity}</span>
      <button type="button" onClick={() => dispatch(addQuantity(product.id))}>
        <FaPlus fontSize={isPhone ? "18" : "26"} color="#16a34a" />
      </button>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(AmountButtons);
