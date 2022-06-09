import { connect, useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import GridProducts from "../GridProducts/GridProducts";
import ListProducts from "../ListProducts/ListProducts";
import { useEffect } from "react";
import Error from "../../Pages/Error";
import Loading from "../Loading/Loading";

const ProductCard = ({ filteredProducts, view, error, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (view === false) {
    return <ListProducts product={filteredProducts} />;
  } else {
    return <GridProducts product={filteredProducts} />;
  }
};

const mapStateToProps = (state) => ({
  filteredProducts: state.products.filteredProducts,
  view: state.view.view,
  cart: state.products.cart,
  loading: state.products.loading,
});

export default connect(mapStateToProps)(ProductCard);
