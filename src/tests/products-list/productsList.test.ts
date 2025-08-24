import { productsListSlice, setProducts, setProductsFiltered, setIsLoadingProducts } from "../../features/products-list/productsListStore";""
import type { ProductsListState } from "../../features/products-list/types";
import { mockProducts } from "../mocks/products"
import { test, expect, describe,beforeEach } from "vitest";

describe("productsListSlice", () => {
  let initialState: ProductsListState;

  beforeEach(() => {
    initialState = {
      products: [],
      productsFiltered: [],
      areProductsFiltered: false,
      isLoading: true,
    };
  });

  test("should set products correctly", () => {
    const products = [mockProducts[0], mockProducts[1]];

    const state = productsListSlice.reducer(initialState, setProducts(products));

    expect(state.products).toEqual(products);
    expect(state.productsFiltered).toEqual([]);
    expect(state.areProductsFiltered).toBe(false);
  });

  test("should filter products by search term (case-insensitive)", () => {
    const stateWithProducts: ProductsListState = {
      ...initialState,
      products: [mockProducts[0], mockProducts[1], mockProducts[2]],
    };

    const state = productsListSlice.reducer(
      stateWithProducts,
      setProductsFiltered("banco")
    );

    expect(state.productsFiltered).toEqual([mockProducts[1]]);
    expect(state.areProductsFiltered).toBe(true);
  });

  test("should clear filter when search term is empty", () => {
    const stateWithFiltered: ProductsListState = {
      ...initialState,
      products: [mockProducts[0], mockProducts[1], mockProducts[2]],
      productsFiltered: [mockProducts[0]],
      areProductsFiltered: true,
    };

    const state = productsListSlice.reducer(
      stateWithFiltered,
      setProductsFiltered("")
    );

    expect(state.productsFiltered).toEqual([]);
    expect(state.areProductsFiltered).toBe(false);
  });

  test("should set loading state correctly", () => {
    const state = productsListSlice.reducer(
      initialState,
      setIsLoadingProducts(false)
    );

    expect(state.isLoading).toBe(false);
  });
});
