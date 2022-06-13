/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Iproducts from '../../models/Iproducts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectBrand } from '../../redux/slices/brandSlice';
import Ibrands from '../../models/Ibrands';
import { addItem, selectAddedItems } from '../../redux/slices/cartSlice';

interface Iprops {
  data: Iproducts
}

const cardStyle = {
  maxWidth: {
    xs: 345,
    sm: 'none',
  },
  margin: {
    xs: 'auto',
  },
};

const CardItem: FC<Iprops> = ({ data }) => {
  const dispatch = useAppDispatch();
  const brands = useAppSelector(selectBrand);
  const itemBrand = data.brand;
  const brand = brands.find((el) => (itemBrand === el.id));
  const brandName = brand!.title;
  const addedItems = useAppSelector(selectAddedItems);
  const isAdded = addedItems.find((item) => (item.id === data.id));
  // const btnState = isAdded ? true : false;
  const btnState = !!isAdded;
  const btnText = btnState ? 'Added in cart' : 'Add to cart';

  const addItemCart = () => {
    dispatch(addItem({ ...data, brandName, count: 1 }));
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt={data.title}
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="body1">
          {brandName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${data.regular_price.value} ${data.regular_price.currency}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={addItemCart}
          size="small"
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          disabled={btnState}
        >
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
