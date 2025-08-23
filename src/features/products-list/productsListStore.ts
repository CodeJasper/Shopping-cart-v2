import { createSlice } from "@reduxjs/toolkit";
import type { ProductsListState } from "@features";

const initialState: ProductsListState = {
	products: [],	
}

export const productsListSlice = createSlice({
	name: "productList",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
})

export const { setProducts } = productsListSlice.actions;
export const productListReducer = productsListSlice.reducer;