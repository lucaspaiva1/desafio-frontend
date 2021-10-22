import { combineReducers } from "redux";

import Product from "./Product/reducers";

const reducers = combineReducers({
  product: Product,
});

export default reducers;
