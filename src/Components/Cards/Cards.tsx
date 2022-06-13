/* eslint-disable arrow-body-style */
import React, { FC, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CardItem from './CardItem';
import { fetchProducts, selectAllProducts, selectProduct } from '../../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Cards: FC = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);
  const products = useAppSelector(selectProduct);

  useEffect(() => {
    if (allProducts.length) return;
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" gutterBottom component="div">Catalog</Typography>
      <Grid container spacing={2}>
        {products.map((el) => (
          <Grid key={el.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <CardItem data={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
