import {
  ADD_QUANTITY,
  ADD_TO_CART,
  EMPTY_CART,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
  SUBTRACT_QUANTITY,
  UPDATE_CATEGORY,
  UPDATE_QUERY,
  UPDATE_SORT,
} from "./Types";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return fetch("https://fakestoreapi.com/products")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        let newArray = json.map((product) => {
          return { ...product, quantity: 0, inCart: false };
        });

        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: newArray });
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};

export const updateCategory = (category, products) => {
  return {
    type: UPDATE_CATEGORY,
    payload: {
      category: category,
      products: products,
    },
  };
};

export const updateQuery = (value) => ({
  type: UPDATE_QUERY,
  payload: value,
});

export const updateSort = (value) => ({
  type: UPDATE_SORT,
  payload: value,
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  paylod: { error },
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  payload: id,
});

export const subtractQuantity = (id) => ({
  type: SUBTRACT_QUANTITY,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const emptyCart = (id) => ({
  type: EMPTY_CART,
  payload: id,
});
