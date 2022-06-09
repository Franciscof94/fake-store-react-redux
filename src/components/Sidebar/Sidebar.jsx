import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { Wrapper } from "./Styles";
import { FaTimes } from "react-icons/fa";
import { links } from "../../data/links";
import { connect, useDispatch } from "react-redux";
import { showSidebar } from "../../actions/viewActions";
import CartButtons from "../CartButtons/CartButtons";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <aside className={props.sidebar ? "show-sidebar sidebar" : "sidebar"}>
        <div className="sidebarHeader">
          <Link to="/" onClick={() => dispatch(showSidebar(false))}>
            <BsShop fontSize={30} color="var(--blackLetter)" />
          </Link>
          <button type="button" onClick={() => dispatch(showSidebar(false))}>
            <FaTimes fontSize={24} color="var(--blackLetter)" />
          </button>
        </div>
        <nav className="sidebarNav">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : null)}
                  to={link.url}
                  onClick={() => dispatch(showSidebar(false))}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebarCart">
          <CartButtons />
        </div>
      </aside>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  sidebar: state.view.sidebar,
  cart: state.products.cart,
});

export default connect(mapStateToProps, { showSidebar })(Sidebar);
