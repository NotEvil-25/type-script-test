/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import Iproducts from '../../models/Iproducts';

interface Iprops {
  items: Iproducts[]
}

const Cards: FC<Iprops> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((el) => (
        <Grid key={el.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
          <CardItem data={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
