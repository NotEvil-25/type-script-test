import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const paperSx = {
  display: { xs: 'none', sm: 'flex' },
  px: 1,
  mb: 2,
};

const ItemsHeader: FC = () => {
  return (
    <Paper elevation={0} sx={paperSx}>
      <Box sx={{ flex: '1 1 200px' }}>
        <Typography sx={{ ml: 1 }} variant="h6" component="div">Item</Typography>
      </Box>
      <Box sx={{ flex: '1 1 0' }}>
        <Typography variant="h6" component="div">Price</Typography>
      </Box>
      <Box sx={{ flex: '1 1 0' }}>
        <Typography variant="h6" component="div">Qty</Typography>
      </Box>
      <Box sx={{ flex: '1 1 0' }}>
        <Typography variant="h6" component="div">Total</Typography>
      </Box>
      <Box sx={{ flex: '1 1 0' }} />
    </Paper>
  );
};

export default ItemsHeader;
