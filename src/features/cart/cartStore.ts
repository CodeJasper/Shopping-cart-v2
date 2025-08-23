import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "@features";

const initialState: Cart = {
	products: [],	
	subTotal: 0,
	total: 0,
}

export const cartSlcie = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products = [...state.products, action.payload];
		},
		setProductQuantity: (state, action) => {
			const { productId, quantity } = action.payload;
			const productIndex = state.products.findIndex((product) => product.productId === productId); 

			if(productIndex !== -1) {
				state.products[productIndex].quantity = quantity; 
			}
		},
		deleteProduct: (state, action) => {
			const { productId } = action.payload;
			const productIndex = state.products.findIndex((product) => product.productId === productId); 

			if(productIndex !== -1) {
				state.products.splice(productIndex, 1);
			}
		}
	},
})

export const { addProduct, deleteProduct, setProductQuantity } = cartSlcie.actions;
