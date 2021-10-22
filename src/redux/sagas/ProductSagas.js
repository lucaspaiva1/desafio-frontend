import { call, put } from "redux-saga/effects";
import { listRequestSuccess, listRequestFail } from "../ducks/Product/actions";

export function* listProducts(api, { payload }) {
  try {
    const response = yield call(api.listProducts, payload);
    yield put(listRequestSuccess(response.data));
  } catch (err) {
    yield put(listRequestFail("Ocorreu um erro!"));
  }
}
