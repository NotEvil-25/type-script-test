/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import brandReducer from './slices/brandSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    brand: brandReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
