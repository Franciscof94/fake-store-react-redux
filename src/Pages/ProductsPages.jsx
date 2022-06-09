import styled from "styled-components";
import Filter from "../components/Filter/Filter";
import Sort from "../components/Sort/Sort";
import ProductCard from "../components/ProductCard/ProductCard";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Screen from "../styles/screen";

const ProductsPage = () => {
  return (
    <main>
      <BreadCrumb title="productos" />
      <Wrapper className="page">
        <Filter />
        <div>
          <Sort />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  ${Screen.lg`
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: 220px 1fr;
  `}
`;

export default ProductsPage;
