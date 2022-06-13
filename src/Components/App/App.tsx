import React, { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Catalog from '../../pages/Catalog';
import Cart from '../../pages/Cart';
import './style.css';

const theme = createTheme();

const App:FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
