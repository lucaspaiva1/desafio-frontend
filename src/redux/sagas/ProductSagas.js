import { call, put } from "redux-saga/effects";
import { listRequestSuccess, listRequestFail } from "../ducks/Product/actions";

export function* listProducts(api) {
  try {
    const response = yield call(api.listProducts);
    yield put(listRequestSuccess(response.data));
  } catch (err) {
    yield put(listRequestFail("Ocorreu um erro!"));
  }
}
