/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getBrands } from '../../fakeApi';
import IcartItems from '../../models/IcartItems';
import Iproducts from '../../models/Iproducts';
import { RootState } from '../store';

interface CartState {
  addedItems: IcartItems[],
  subtotal: number,
}

interface Icount {
  itemId: number,
  count: number
}

const initialState: CartState = {
  addedItems: [],
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IcartItems>) => {
      const { payload } = action;
      const { value } = payload.regular_price;
      state.addedItems.push(payload);
      state.subtotal += value;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.addedItems = state.addedItems.filter((el) => (el.id !== action.payload))
    },
    setCount: (state, action: PayloadAction<Icount>) => {
      const { payload } = action;
      state.addedItems.forEach((el) => {
        if (el.id === payload.itemId) {
          el.count += payload.count;
        }
      });
    },
    setSubtotal: (state, action: PayloadAction<number>) => {
      state.subtotal += action.payload;
    },
  },
})

export const {
  addItem, deleteItem, setCount, setSubtotal,
} = cartSlice.actions

export const selectAddedItems = (state: RootState) => state.cart.addedItems;
export const selectSubtotal = (state: RootState) => state.cart.subtotal;

export default cartSlice.reducer;
