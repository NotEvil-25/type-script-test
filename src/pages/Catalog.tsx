/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Header from '../Components/Header';
import Filter from '../Components/Filter';
import Cards from '../Components/Cards';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchBrands, selectBrand, selectBrandLoading } from '../redux/slices/brandSlice';
import {
  fetchProducts, selectAllProducts, selectProduct, selectProductsLoading,
} from '../redux/slices/productSlice';

const Catalog:FC = () => {
  const dispatch = useAppDispatch();
  const isBrandsLoading = useAppSelector(selectBrandLoading);
  const brands = useAppSelector(selectBrand);
  const isProductsLoading = useAppSelector(selectProductsLoading);
  const allProducts = useAppSelector(selectAllProducts);
  const products = useAppSelector(selectProduct);
  const isLoadedAll = !isBrandsLoading && !isProductsLoading;

  useEffect(() => {
    if (brands.length) return;
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    if (allProducts.length) return;
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid sx={{ py: 4, height: '100%' }} container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper sx={{ p: 2, textAlign: 'center' }} variant="outlined">
              { isBrandsLoading
                ? <CircularProgress sx={{ alignSelf: 'center' }} />
                : <Filter items={brands} /> }
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Typography variant="h4" gutterBottom component="div">
              Catalog
              { !isLoadedAll && <CircularProgress sx={{ ml: 2 }} /> }
            </Typography>
            { isLoadedAll && <Cards items={products} /> }
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Catalog;
