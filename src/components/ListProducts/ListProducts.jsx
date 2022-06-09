import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../../utils/helpers";
import { Wrapper } from "./Styles";
import { connect } from "react-redux";

const ListProducts = ({ product, loading }) => {
  return (
    <Wrapper>
      {product.map((product, index) => (
        <article key={index}>
          <div className="productImg">
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h3 className="productInfo">{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="description">{truncate(product.description, 120)}</p>
            <Link
              to={`/product/${product.id}`}
              state={{
                product,
              }}
            >
              <button>Detalles</button>
            </Link>
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
});

export default connect(mapStateToProps)(ListProducts);
