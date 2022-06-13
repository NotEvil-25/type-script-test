/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import ItemsHeader from './ItemsHeader';
import Items from './Items';
import { useAppSelector } from '../../hooks/hooks';
import { selectAddedItems, selectSubtotal } from '../../redux/slices/cartSlice';

const ItemsInCart: FC = () => {
  const items = useAppSelector(selectAddedItems);
  const subtotal = useAppSelector(selectSubtotal);

  return (
    <>
      <Typography variant="h4" gutterBottom component="div">Shopping cart</Typography>
      {!items.length && <p>Cart is empty</p>}
      {items.length > 0 && (<ItemsHeader />)}
      {items.length > 0 && (
        items.map((el) => (<Items data={el} key={el.id} />))
      )}
      {subtotal > 0 && (
        <p>
          Subtotal:
          {' '}
          {subtotal.toFixed(2)}
          {' '}
          USD
        </p>
      )}
    </>
  );
};

export default ItemsInCart;
