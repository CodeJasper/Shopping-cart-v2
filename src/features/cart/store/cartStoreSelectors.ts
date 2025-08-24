import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@app/store/store";
import type { ProductCart } from "@features/cart/types/types";

export const selectCartItems = (state: RootState) => state.cart.products;

export const selectCartTotalProductsQuanitiy = createSelector(
  [selectCartItems],
  (products) => products.reduce((acc: number, product: ProductCart) => acc + product.quantity, 0)
);