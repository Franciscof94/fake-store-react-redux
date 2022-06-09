import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "./Styles";
import { removeFromCart } from "../../../actions/productActions";
import { AiTwotoneDelete } from "react-icons/ai";
import { useResize } from "../../hooks/useResize";
import { truncate } from "../../../utils/helpers";
import AmountButtons from "../../AmountButtons/AmountButtons";

const ProductInCart = ({ product }) => {
  const dispatch = useDispatch();
  const { isPhone } = useResize();

  return (
    <Wrapper>
      <div className="itemImg">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="itemInfo">
        <Link to={`/products/${product.id}`} title={product.title}>
          {truncate(product.title, 20)}
        </Link>
        <p>
          ${product.price} &#9747; {product.quantity} :
          <br />
          <span>${(product.price * product.quantity).toFixed(2)}</span>
        </p>
      </div>

      <AmountButtons product={product} />
      <button
        className="itemDelete"
        onClick={() => dispatch(removeFromCart(product.id))}
      >
        <AiTwotoneDelete color="#eb4c4c" fontSize={isPhone ? 20 : 38} />
      </button>
    </Wrapper>
  );
};

export default ProductInCart;
