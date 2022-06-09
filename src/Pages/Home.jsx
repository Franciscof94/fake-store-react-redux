import React, { useEffect } from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Services from "../components/Services/Services";
import { connect, useDispatch } from "react-redux";
import { fetchProducts } from "../actions/productActions";

const Home = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <Services />
      <PopularProducts product={product} />
      <Contact />
    </main>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.filteredProducts,
});

export default connect(mapStateToProps)(Home);
