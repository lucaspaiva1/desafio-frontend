import { createSelector } from "reselect";

export const selectProductState = createSelector(
  (state) => state.product,
  (product) => product
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (product) => product.loading
);

export const selectProductsError = createSelector(
  selectProductState,
  (product) => product.error
);

export const selectProducts = createSelector(
  selectProductState,
  (product) => product.products
);
