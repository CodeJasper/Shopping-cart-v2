import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { cartSlice } from "@features/cart/store/cartStoreSlice";
import { productsListSlice } from "@features/products-list/productsListStore";
import { api } from "@app/api";

const rootReducer = combineReducers({
  [productsListSlice.name]: productsListSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [cartSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
