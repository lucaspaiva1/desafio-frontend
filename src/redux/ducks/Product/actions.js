import SERVICE from "./types";

export const listRequest = (payload) => ({
  type: SERVICE.LIST_PRODUCTS_REQUEST,
  payload,
});

export const listRequestSuccess = (products) => ({
  type: SERVICE.LIST_PRODUCTS_REQUEST_SUCCESS,
  products,
});

export const listRequestFail = (error) => ({
  type: SERVICE.LIST_PRODUCTS_REQUEST_FAIL,
  error,
});
