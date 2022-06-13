import React, { FC } from 'react';
import Container from '@mui/material/Container';
import Header from '../Components/Header';
import ItemsInCart from '../Components/ItemsInCart';

const Cart:FC = () => {
  return (
    <>
      <Header cart={false} />
      <Container maxWidth="xl">
        <ItemsInCart />
      </Container>
    </>
  );
};

export default Cart;
