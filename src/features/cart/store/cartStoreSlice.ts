import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "@features";

const initialState: Cart = {
	products: [],	
	subTotal: 0,
	total: 0,
}

const calculateTotals = (products: Cart["products"]) => {
  const subTotal = products.reduce(
    (acc, product) => acc + product.prices[0].priceWithoutFormatting * product.quantity,
    0
  );
  const total = subTotal * 1.19;
  return { subTotal, total };
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const { productId, quantity } = action.payload;
			const productIndex = state.products.findIndex((product) => product.productId === productId); 

			if(productIndex !== -1){
				const currentProduct = state.products[productIndex];
				state.products[productIndex] = {
					...currentProduct,
					quantity: currentProduct.quantity + quantity
				};

				const { subTotal, total } = calculateTotals(state.products);
				state.total = total;
				state.subTotal = subTotal;
				return;
			}

			state.products = [...state.products, action.payload];
		},
		setProductQuantity: (state, action) => {
			const { productId, quantity } = action.payload;
			const productIndex = state.products.findIndex((product) => product.productId === productId); 

			if(productIndex !== -1) {
				state.products[productIndex].quantity = quantity; 

				const { subTotal, total } = calculateTotals(state.products);
				state.total = total;
				state.subTotal = subTotal;
			}
		},
		deleteProduct: (state, action) => {
			const { productId } = action.payload;
			const productIndex = state.products.findIndex((product) => product.productId === productId); 

			if(productIndex !== -1) {
				state.products.splice(productIndex, 1);

				const { subTotal, total } = calculateTotals(state.products);
				state.total = total;
				state.subTotal = subTotal;
			}
		},
		resetCart: (state) => {
			state.products = [];
			state.total = 0;
			state.subTotal = 0;
		}
	},
})

export const { addProduct, deleteProduct, setProductQuantity, resetCart } = cartSlice.actions;
