import apisauce from "apisauce";

class RequestError extends Error {
  constructor(errors) {
    super("request_error");
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

const APIBaseUrl = process.env.REACT_APP_BASE_API;

const create = (baseURL = APIBaseUrl) => {
  const handleResponse = async (response) => {
    if (response.ok) return response;
    throw new RequestError(response.data);
  };

  const api = apisauce.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const listProducts = async (page, rows, search) => {
    const response = await api.get("/products");
    return handleResponse(response);
  };

  return {
    listProducts,
  };
};

const Api = {
  create,
};

export default Api;
