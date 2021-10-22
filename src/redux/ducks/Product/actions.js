import SERVICE from "./types";

export const listRequest = (payload) => ({
  type: SERVICE.LIST_REQUEST,
  payload,
});

export const listRequestSuccess = (services) => ({
  type: SERVICE.LIST_REQUEST_SUCCESS,
  services,
});

export const listRequestFail = (error) => ({
  type: SERVICE.LIST_REQUEST_FAIL,
  error,
});
