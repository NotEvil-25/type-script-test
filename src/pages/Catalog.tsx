/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../Components/Header';
import Filter from '../Components/Filter';
import Cards from '../Components/Cards';

const Catalog:FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid sx={{ py: 4 }} container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Filter />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Catalog;
