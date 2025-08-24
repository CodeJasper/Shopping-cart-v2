import type { RootState } from "@app";
import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state: RootState) => state.cart.products;

export const selectCartTotalProductsQuanitiy = createSelector(
  [selectCartItems],
  (products) => products.reduce((acc, product) => acc + product.quantity, 0)
);