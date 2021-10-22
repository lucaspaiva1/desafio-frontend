import PRODUCT from "./types";
import Immutable from "seamless-immutable";

export const INITIAL_STATE = Immutable({
  products: [],
  loading: false,
  error: null,
});

export const listProductsRequest = (state) =>
  state.merge({ loading: true, error: null });

export const listProductsRequestSuccess = (state, { products }) =>
  state.merge({ products, loading: false, error: null });

export const listProductsRequestFail = (state, { error }) => {
  return state.merge({ loading: false, error, products: [] });
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT.LIST_PRODUCTS_REQUEST:
      return listProductsRequest(state, action);
    case PRODUCT.LIST_PRODUCTS_REQUEST_SUCCESS:
      return listProductsRequestSuccess(state, action);
    case PRODUCT.LIST_PRODUCTS_REQUEST_FAIL:
      return listProductsRequestFail(state, action);
    default:
      return state;
  }
};

export default ProductsReducer;
