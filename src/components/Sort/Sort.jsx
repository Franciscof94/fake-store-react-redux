import { BsFillGridFill } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { GridButton, ListButton, Wrapper } from "./Styles";
import { useDispatch, connect } from "react-redux";
import { changeView } from "../../actions/viewActions";
import { updateSort } from "../../actions/productActions";
import { useResize } from "../hooks/useResize";

const Sort = ({ view, products }) => {
  const dispatch = useDispatch();
  const { isPhone } = useResize();

  return (
    <Wrapper>
      <div className="sortBtns">
        <GridButton
          view={view}
          className="grid"
          type="button"
          onClick={() => dispatch(changeView(true))}
        >
          <BsFillGridFill fontSize={isPhone ? 17 : 23} />
        </GridButton>
        <ListButton
          view={view}
          className="list"
          type="button"
          onClick={() => dispatch(changeView(false))}
        >
          <GrMenu fontSize={isPhone ? 17 : 23} />
        </ListButton>
      </div>
      <div className="productsFound">
        <span>{products.length}</span> productos
      </div>
      <div className="line"></div>
      <form className="sortForm">
        <label htmlFor="sort">Ordenar por :</label>
        <select
          name="sort"
          id="sort"
          className="sortInput"
          onChange={(e) => dispatch(updateSort(e.target.value))}
        >
          <option value="price-lowest">Precio (lowest)</option>
          <option value="price-highest">Precio (highest)</option>
          <option value="name-a">Nombre (a-z)</option>
          <option value="name-z">Nombre (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  view: state.view.view,
  products: state.products.filteredProducts,
});

export default connect(mapStateToProps)(Sort);
