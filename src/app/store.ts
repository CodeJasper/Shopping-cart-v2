import { configureStore  } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productListReducer } from "@features";
import { api } from "@app";

export const store = configureStore({
	reducer: {
		productsList: productListReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;