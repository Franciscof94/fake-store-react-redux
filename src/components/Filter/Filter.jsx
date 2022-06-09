import debounce from "debounce";
import { connect, useDispatch } from "react-redux";
import { updateQuery, updateCategory } from "../../actions/productActions.js";
import categories from "../../data/categories.js";
import { SearchInput, Wrapper } from "./Styles.js";

const Filter = ({ products, currentCategory }) => {
  const dispatch = useDispatch();

  const cCategory = currentCategory ? currentCategory : "all products";

  const handleChange = debounce((e) => {
    const value = e.target.value;
    dispatch(updateQuery(value));
  }, 300);

  return (
    <Wrapper>
      <SearchInput
        placeholder="Buscar"
        type="search"
        onChange={(e) => handleChange(e)}
      />
      <div className="categoryContainer">
        <span>Categorias</span>
        {categories.map((c, index) => (
          <button
            type="button"
            name={c.category}
            value={c.category}
            key={index}
            className={cCategory === c.category ? "active" : null}
            onClick={() => dispatch(updateCategory(c.category, products))}
          >
            {c.spanish}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.products.currentCategory,
    currentCategory: state.products.category,
    products: state.products.items,
  };
};

export default connect(mapStateToProps, {
  updateCategory,
  updateQuery,
})(Filter);
