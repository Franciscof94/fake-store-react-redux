import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import ProductsPages from "./Pages/ProductsPages";
import SingleProductPage from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import Loading from "./components/Loading/Loading";
const Error = lazy(() => import("./Pages/Error"));

const App = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPages />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Error />{" "}
            </Suspense>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
