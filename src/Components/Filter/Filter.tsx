/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { FC, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchBrands, selectBrand } from '../../redux/slices/brandSlice';
import FilterItem from './FilterItem';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const brands = useAppSelector(selectBrand);

  useEffect(() => {
    if (brands.length) return;
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <Paper sx={{ p: 2 }} variant="outlined">
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" variant="standard">
            {brands.map((el) => (
              <FilterItem key={el.id} data={el} />
            ))}
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Filter;
