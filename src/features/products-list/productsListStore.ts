import { createSlice } from "@reduxjs/toolkit";
import type { ProductsListState } from "@features/products-list/types";

const initialState: ProductsListState = {
	products: [],	
	productsFiltered: [],
	areProductsFiltered: false,
	isLoading: true,
}

export const productsListSlice = createSlice({
	name: "productList",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setProductsFiltered: (state, action) => {
			const searchTerm = action.payload.toLowerCase();

			if(!searchTerm) {
				state.productsFiltered = [];
				state.areProductsFiltered = false;
				return;
			}

			const newProductsFiltered = state.products.filter(product => 
				product.displayName.toLowerCase().includes(searchTerm));	
			state.productsFiltered = newProductsFiltered;
			state.areProductsFiltered = true;

		},
		setIsLoadingProducts: (state, action) => {
			state.isLoading = action.payload;
		}
	},
})

export const { 
	setProducts,
	setProductsFiltered,
	setIsLoadingProducts
} = productsListSlice.actions;
