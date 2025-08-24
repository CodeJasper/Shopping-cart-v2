import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@app/api";
import { cartSlice } from "@features/cart/store/cartStoreSlice";
import { productsListSlice  } from "@features/products-list/productsListStore";

export const setupApiStore = () => {
  const store: EnhancedStore = configureStore({
    reducer: {
      [productsListSlice.name]: productsListSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};
