/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import IcartItems from '../../models/IcartItems';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteItem, setCount, setSubtotal } from '../../redux/slices/cartSlice';

interface Iprops {
  data: IcartItems
}

const rowStyle = {
  display: 'flex',
  flex: '1 1 0',
  m: 1,
  alignItems: 'center',
};

const Items: FC<Iprops> = ({ data }) => {
  const dispatch = useAppDispatch();
  const totalPrice = data.count * data.regular_price.value;
  const isDisabled = data.count === 1;

  const handleItem = () => {
    dispatch(deleteItem(data.id));
    dispatch(setSubtotal(-data.regular_price.value * data.count));
  };

  const handleCount = (count: number) => {
    dispatch(setCount({ itemId: data.id, count }));
    count < 0
      ? dispatch(setSubtotal(-data.regular_price.value))
      : dispatch(setSubtotal(data.regular_price.value));
  };

  return (
    <Paper elevation={0} sx={{ display: 'flex', flexWrap: 'wrap', p: 1, mb: 1 }}>
      <Box sx={{ flex: '1 1 200px' }}>
        <Box sx={rowStyle}>
          <img width="100" height="100" src={data.image} alt={data.title} />
          <Typography sx={{ m: 1, ml: 3 }}>
            {data.brandName}
            /
            {data.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={rowStyle}>
        <Typography>
          {data.regular_price.value.toFixed(2)}
          {' '}
          {data.regular_price.currency}
        </Typography>
      </Box>
      <Box sx={rowStyle}>
        <Button
          onClick={() => { handleCount(-1); }}
          disabled={isDisabled}
          sx={{ minWidth: 34 }}
          size="small"
          variant="contained"
        >
          -
        </Button>
        <span style={{ margin: 10 }}>{data.count}</span>
        <Button
          onClick={() => { handleCount(1); }}
          sx={{ minWidth: 34 }}
          size="small"
          variant="contained"
        >
          +
        </Button>
      </Box>
      <Box sx={rowStyle}>
        <Typography component="div">
          Total price:
          {' '}
          {totalPrice.toFixed(2)}
          {' '}
          {data.regular_price.currency}
        </Typography>
      </Box>
      <Box sx={rowStyle}>
        <IconButton onClick={handleItem} aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Items;
