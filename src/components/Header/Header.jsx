import { HeaderContainer } from "./Styles.js";
import { links } from "../../data/links.js";
import { Link, NavLink } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { connect, useDispatch } from "react-redux";

import { FaBars } from "react-icons/fa";
import { showSidebar } from "../../actions/viewActions.js";
import CartButtons from "../CartButtons/CartButtons.jsx";

const Header = ({ cart, sidebar }) => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <div className="headerCenter">
        <Link to="/">
          <BsShop fontSize={30} color="var(--blackLetter)" />
        </Link>
        <nav className="headerNav">
          <ul>
            {links.map(({ id, url, text }, index) => (
              <li key={index}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="headerCart">
          <CartButtons />
        </div>
        <button
          type="button"
          onClick={() => dispatch(showSidebar(true))}
          className="headerBtn"
        >
          <FaBars fontSize={24} color="var(--blackLetter)" />
        </button>
      </div>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
  sidebar: state.view.sidebar,
});

export default connect(mapStateToProps)(Header);
