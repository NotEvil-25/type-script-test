/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import ItemsHeader from './ItemsHeader';
import Items from './Items';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectAddedItems, selectSubtotal, setSubtotal } from '../../redux/slices/cartSlice';

const ItemsInCart: FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectAddedItems);
  const subtotal = useAppSelector(selectSubtotal);

  useEffect(() => {
    if (items.length === 0) dispatch(setSubtotal(0));
  }, [dispatch, items]);

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
