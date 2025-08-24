import { test, expect, describe,beforeEach } from "vitest";
import { mockProducts } from "@tests/mocks/products"
import { cartSlice, addProduct, setProductQuantity, deleteProduct, resetCart } from "@features/cart/store/cartStoreSlice";
import { type Cart } from "@features/cart/types";

describe("cartSlice", () => {
  let initialState: Cart;

  beforeEach(() => {
    initialState = {
      products: [],
      subTotal: 0,
      total: 0,
    };
  });

  test("should return the initial state when no action is provided", () => {
    const state = cartSlice.reducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  test("should add a product when it does not exist", () => {
    const product = mockProducts[0];
    const state = cartSlice.reducer(initialState, addProduct(product));
    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toEqual(product);
    expect(state.subTotal).toBe(0);
    expect(state.total).toBe(0);
  });

  test("should add quantity to an existing product and recalculate totals", () => {
    const existingState: Cart = {
      products: [{ ...mockProducts[0], quantity: 1 }],
      subTotal: 0,
      total: 0,
    };
    const state = cartSlice.reducer(existingState, addProduct({ ...mockProducts[0], quantity: 2 }));
    expect(state.products[0].quantity).toBe(3);
    expect(state.subTotal).toBe(360);
    expect(state.total).toBeCloseTo(360 * 1.19);
  });

  test("should update the quantity of an existing product", () => {
    const existingState: Cart = {
      products: [{ ...mockProducts[0], quantity: 1 }],
      subTotal: 0,
      total: 0,
    };
    const state = cartSlice.reducer(existingState, setProductQuantity({ ...mockProducts[0], quantity: 5 }));
    expect(state.products[0].quantity).toBe(5);
    expect(state.subTotal).toBe(600);
    expect(state.total).toBeCloseTo(600 * 1.19);
  });

  test("should delete an existing product", () => {
    const existingState: Cart = {
      products: [{ ...mockProducts[0], quantity: 1 }],
      subTotal: 200,
      total: 238,
    };
    const state = cartSlice.reducer(existingState, deleteProduct({ ...mockProducts[0] }));
    expect(state.products).toHaveLength(0);
    expect(state.subTotal).toBe(0);
    expect(state.total).toBe(0);
  });

  test("should reset the cart", () => {
    const existingState: Cart = {
      products: [{ ...mockProducts[0], quantity: 1 }],
      subTotal: 200,
      total: 238,
    };
    const state = cartSlice.reducer(existingState, resetCart());
    expect(state).toEqual(initialState);
  });
});

