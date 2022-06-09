import React from "react";
import GridProducts from "../GridProducts/GridProducts";
import { Wrapper } from "./Styles";
import Loading from "../Loading/Loading";
import Error from "../../Pages/Error";
import { connect } from "react-redux";

const PopularProducts = ({ product, loading, error }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <h2>Productos mas populares</h2>
      <GridProducts product={product.slice(0, 3)} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(PopularProducts);
