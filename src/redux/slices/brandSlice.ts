/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getBrands } from '../../fakeApi';
import Ibrands from '../../models/Ibrands';
import { RootState } from '../store';

interface BrandState {
  isLoading: boolean,
  brands: Ibrands[]
}

const initialState: BrandState = {
  isLoading: true,
  brands: [],
};

export const fetchBrands = createAsyncThunk(
  'brand/getAll',
  async () => {
    const data = await getBrands();
    return await data as Ibrands[];
  },
);

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands = action.payload;
    })
  },
})

// export const {  } = productSlice.actions

export const selectBrand = (state: RootState) => state.brand.brands;
export const selectBrandLoading = (state: RootState) => state.brand.isLoading;

export default brandSlice.reducer;
