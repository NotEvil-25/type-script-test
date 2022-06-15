/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Ibrands from '../../models/Ibrands';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { deleteBrandFilter, filterByBrands, selectFilterBrand } from '../../redux/slices/productSlice';

interface Iprops {
  data: Ibrands
}

const FilterItem: FC<Iprops> = ({ data }) => {
  const dispatch = useAppDispatch();
  const brandFilter = useAppSelector(selectFilterBrand);
  const isChecked = !!brandFilter.find((brand) => (brand === data.id));

  const handleFilter = (event) => {
    const { checked } = event.target;
    if (!checked) {
      dispatch(deleteBrandFilter(data.id));
      return;
    }
    dispatch(filterByBrands(data.id));
  };

  return (
    <FormGroup>
      <FormControlLabel
        onChange={handleFilter}
        control={
          <Checkbox checked={isChecked} name={data.code} />
          }
        label={data.title}
      />
    </FormGroup>
  );
};

export default FilterItem;
