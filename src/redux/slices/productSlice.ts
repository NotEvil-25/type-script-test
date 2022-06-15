/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../../fakeApi';
import Iproducts from '../../models/Iproducts';
import { RootState } from '../store';

interface ProductState {
  isLoading: boolean,
  filter: {
    brand: number[]
  },
  filteredProducts: Iproducts[],
  allProducts: Iproducts[]
}

const initialState: ProductState = {
  isLoading: true,
  filter: {
    brand: [],
  },
  filteredProducts: [],
  allProducts: [],
};

export const fetchProducts = createAsyncThunk(
  'product/getAll',
  async () => {
    const data = await getProducts();
    return await data as Iproducts[];
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteBrandFilter: (state, action: PayloadAction<number>) => {
      const { payload } = action;

      state.filter.brand = state.filter.brand.filter((el) => (el !== payload));
      state.filteredProducts = [];

      // надо было middleware использовать, что бы такой дичи не было
      // TODO: переделать редусер
      for (let i = 0; i < state.filter.brand.length; i++) {
        state.filteredProducts.push(
          ...state.allProducts.filter((el) => (el.brand === state.filter.brand[i])),
        );
      }
      if (!state.filteredProducts.length) {
        state.filteredProducts.push(...state.allProducts);
      }
    },
    filterByBrands: (state, action: PayloadAction<number>) => {
      const { payload } = action;

      state.filter.brand.push(payload);
      state.filteredProducts = [];

      // надо было middleware использовать, что бы такой дичи не было
      // TODO: переделать редусер
      for (let i = 0; i < state.filter.brand.length; i++) {
        state.filteredProducts.push(...state.allProducts.filter((el) => (el.brand === state.filter.brand[i])));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.filteredProducts = action.payload;
      state.allProducts = action.payload;
    })
  },
})

export const { filterByBrands, deleteBrandFilter } = productSlice.actions

export const selectProduct = (state: RootState) => state.product.filteredProducts;
export const selectAllProducts = (state: RootState) => state.product.allProducts;
export const selectLoading = (state: RootState) => state.product.isLoading;
export const selectFilterBrand = (state: RootState) => state.product.filter.brand;

export default productSlice.reducer
