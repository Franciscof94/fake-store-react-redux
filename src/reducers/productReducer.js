import {
  ADD_QUANTITY,
  ADD_TO_CART,
  EMPTY_CART,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
  SIDEBAR,
  SUBTRACT_QUANTITY,
  UPDATE_CATEGORY,
  UPDATE_QUERY,
  UPDATE_SORT,
} from "../actions/Types";

const initialState = {
  items: [],
  filteredProducts: [],
  cart: [],
  loading: false,
  error: null,
  currentCategory: "",
  category: "",
  currentQuery: "",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        filteredProducts: action.payload,
        cart: [...state.cart],
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };
    case UPDATE_CATEGORY:
      const result =
        action.payload.category === "all products"
          ? state.items
          : state.items.filter(
              (product) => product.category === action.payload.category
            );
      return {
        ...state,
        filteredProducts: result,
        category: action.payload.category,
      };
    case UPDATE_QUERY:
      return {
        ...state,
        filteredProducts: action.payload
          ? state.items.filter((product) =>
              product.title.toLowerCase().includes(action.payload)
            )
          : state.items,
      };
    case UPDATE_SORT:
      const products = [...state.filteredProducts];
      if (action.payload === "price-lowest") {
        products.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "price-highest") {
        products.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "name-a") {
        products.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }
      if (action.payload === "name-z") {
        products.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }
      return {
        ...state,
        filteredProducts: products,
      };
    case ADD_TO_CART:
      const item = state.filteredProducts.find(
        (product) => product.id === action.payload
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case SUBTRACT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
