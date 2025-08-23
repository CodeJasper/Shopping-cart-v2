import { configureStore  } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsListSlice, cartSlice } from "@features";
import { api } from "@app";

export const store = configureStore({
	reducer: {
		[productsListSlice.name]: productsListSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;