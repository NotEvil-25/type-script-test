/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { selectAddedItems } from '../../redux/slices/cartSlice';

interface IProps {
  cart?: boolean;
}

// https://mui.com/material-ui/react-app-bar/#fixed-placement
const Header:FC<IProps> = ({ cart = true }) => {
  const inCart = useAppSelector(selectAddedItems).length;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { sm: 'block' },
              textAlign: cart ? 'start' : 'center',
              width: cart ? 'auto' : '100%',
            }}
          >
            MUI
          </Typography>
          {cart && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                <IconButton component={Link} to="/cart" size="large" aria-label="show added items" color="inherit">
                  <Badge badgeContent={inCart} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 1 }} />
    </>
  );
};

export default Header;
